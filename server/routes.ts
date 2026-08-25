import type { Express, Request, Response, NextFunction } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import { insertBlogArticleSchema } from "@shared/schema";
import { registerObjectStorageRoutes } from "./replit_integrations/object_storage";
import { sendNewsletterToSubscribers } from "./email";

// Simple session store (in production, use Redis or database)
const sessions: Map<string, { username: string; expiresAt: Date }> = new Map();

function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

// Middleware to check admin auth
function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: "Non autorisé" });
  }
  
  const session = sessions.get(token);
  if (!session || session.expiresAt < new Date()) {
    sessions.delete(token);
    return res.status(401).json({ message: "Session expirée" });
  }
  
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Register object storage routes for image uploads
  registerObjectStorageRoutes(app);
  
  // ===== PUBLIC ROUTES =====
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const inquiry = await storage.createContactInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error('Contact submission error:', err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.newsletter.subscribe.path, async (req, res) => {
    try {
      const input = api.newsletter.subscribe.input.parse(req.body);
      
      const existing = await storage.getNewsletterSubscriberByEmail(input.email);
      if (existing) {
        return res.status(409).json({ message: "Vous êtes déjà abonné à notre newsletter !" });
      }
      
      const subscriber = await storage.createNewsletterSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error('Newsletter subscription error:', err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // ===== PUBLIC BLOG ROUTES =====
  
  // Get published blog articles (public)
  app.get("/api/blog/articles", async (req, res) => {
    try {
      const articles = await storage.getPublishedBlogArticles();
      res.json(articles);
    } catch (err) {
      console.error('Error fetching articles:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Get single article by slug (public)
  app.get("/api/blog/articles/:slug", async (req, res) => {
    try {
      const article = await storage.getBlogArticleBySlug(req.params.slug as string);
      if (!article || !article.isPublished) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json(article);
    } catch (err) {
      console.error('Error fetching article:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // ===== ADMIN AUTH ROUTES =====
  
  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Nom d'utilisateur et mot de passe requis" });
      }
      
      const admin = await storage.getAdminByUsername(username);
      if (!admin) {
        return res.status(401).json({ message: "Identifiants incorrects" });
      }
      
      const validPassword = await bcrypt.compare(password, admin.passwordHash);
      if (!validPassword) {
        return res.status(401).json({ message: "Identifiants incorrects" });
      }
      
      const token = generateSessionToken();
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
      sessions.set(token, { username: admin.username, expiresAt });
      
      res.json({ token, username: admin.username });
    } catch (err) {
      console.error('Admin login error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
      sessions.delete(token);
    }
    res.json({ success: true });
  });

  // Check session
  app.get("/api/admin/session", requireAdmin, (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const session = sessions.get(token!);
    res.json({ username: session?.username });
  });

  // Create first admin (only works if no admins exist)
  app.post("/api/admin/setup", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Check if any admin exists (only allow first admin creation)
      const allAdmins = await storage.getAllAdminUsers();
      if (allAdmins.length > 0) {
        return res.status(403).json({ message: "Un administrateur existe déjà. Contactez l'admin existant." });
      }
      
      const passwordHash = await bcrypt.hash(password, 10);
      const admin = await storage.createAdminUser(username, passwordHash);
      
      res.status(201).json({ message: "Administrateur créé avec succès", username: admin.username });
    } catch (err) {
      console.error('Admin setup error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // ===== ADMIN PROTECTED ROUTES =====
  
  // Get all contacts
  app.get("/api/admin/contacts", requireAdmin, async (req, res) => {
    try {
      const contacts = await storage.getAllContactInquiries();
      res.json(contacts);
    } catch (err) {
      console.error('Get contacts error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Get all newsletter subscribers
  app.get("/api/admin/subscribers", requireAdmin, async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.json(subscribers);
    } catch (err) {
      console.error('Get subscribers error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // ===== BLOG ROUTES =====
  
  // Get all blog articles (admin)
  app.get("/api/admin/articles", requireAdmin, async (req, res) => {
    try {
      const articles = await storage.getAllBlogArticles();
      res.json(articles);
    } catch (err) {
      console.error('Get articles error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Create blog article
  app.post("/api/admin/articles", requireAdmin, async (req, res) => {
    try {
      const input = insertBlogArticleSchema.parse(req.body);
      const article = await storage.createBlogArticle(input);
      res.status(201).json(article);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      console.error('Create article error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Update blog article
  app.put("/api/admin/articles/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id as string);
      const article = await storage.updateBlogArticle(id, req.body);
      if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json(article);
    } catch (err) {
      console.error('Update article error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Delete blog article
  app.delete("/api/admin/articles/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id as string);
      await storage.deleteBlogArticle(id);
      res.json({ success: true });
    } catch (err) {
      console.error('Delete article error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Publish article and send newsletter
  app.post("/api/admin/articles/:id/publish", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id as string);
      const article = await storage.getBlogArticleById(id);
      
      if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      
      if (article.isPublished) {
        return res.status(400).json({ message: "Article déjà publié" });
      }
      
      const updatedArticle = await storage.updateBlogArticle(id, { isPublished: true });
      
      const subscribers = await storage.getAllActiveSubscribers();
      
      let emailResults = { success: 0, failed: 0, errors: [] as string[] };
      if (subscribers.length > 0 && updatedArticle) {
        emailResults = await sendNewsletterToSubscribers(updatedArticle, subscribers);
      }
      
      res.json({
        article: updatedArticle,
        newsletter: {
          sent: emailResults.success,
          failed: emailResults.failed,
          totalSubscribers: subscribers.length,
          errors: emailResults.errors.length > 0 ? emailResults.errors : undefined
        }
      });
    } catch (err) {
      console.error('Publish article error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Get single article
  app.get("/api/admin/articles/:id", requireAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id as string);
      const article = await storage.getBlogArticleById(id);
      if (!article) {
        return res.status(404).json({ message: "Article non trouvé" });
      }
      res.json(article);
    } catch (err) {
      console.error('Get article error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // ===== SETTINGS ROUTES =====
  
  app.get("/api/admin/settings", requireAdmin, async (req, res) => {
    try {
      const settings = await storage.getAllSettings();
      res.json(settings);
    } catch (err) {
      console.error('Get settings error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  app.post("/api/admin/settings", requireAdmin, async (req, res) => {
    try {
      const { key, value } = req.body;
      const setting = await storage.setSetting(key, value);
      res.json(setting);
    } catch (err) {
      console.error('Set setting error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  // Dashboard stats
  app.get("/api/admin/stats", requireAdmin, async (req, res) => {
    try {
      const [contacts, subscribers, articles] = await Promise.all([
        storage.getAllContactInquiries(),
        storage.getAllSubscribers(),
        storage.getAllBlogArticles()
      ]);
      res.json({
        totalContacts: contacts.length,
        totalSubscribers: subscribers.length,
        totalArticles: articles.length,
        publishedArticles: articles.filter(a => a.isPublished).length
      });
    } catch (err) {
      console.error('Get stats error:', err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  return httpServer;
}
