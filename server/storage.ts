import { 
  type ContactInquiry, type InsertContactInquiry, contactInquiries, 
  type NewsletterSubscriber, type InsertNewsletterSubscriber, newsletterSubscribers,
  type AdminUser, adminUsers,
  type BlogArticle, type InsertBlogArticle, blogArticles,
  type SiteSetting, type InsertSiteSetting, siteSettings
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Contact
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  
  // Newsletter
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | null>;
  getAllActiveSubscribers(): Promise<NewsletterSubscriber[]>;
  getAllSubscribers(): Promise<NewsletterSubscriber[]>;
  
  // Admin
  getAdminByUsername(username: string): Promise<AdminUser | null>;
  createAdminUser(username: string, passwordHash: string): Promise<AdminUser>;
  getAllAdminUsers(): Promise<AdminUser[]>;
  
  // Blog
  createBlogArticle(article: InsertBlogArticle): Promise<BlogArticle>;
  updateBlogArticle(id: number, article: Partial<InsertBlogArticle>): Promise<BlogArticle | null>;
  deleteBlogArticle(id: number): Promise<boolean>;
  getBlogArticleById(id: number): Promise<BlogArticle | null>;
  getBlogArticleBySlug(slug: string): Promise<BlogArticle | null>;
  getAllBlogArticles(): Promise<BlogArticle[]>;
  getPublishedBlogArticles(): Promise<BlogArticle[]>;
  
  // Site Settings
  getSetting(key: string): Promise<SiteSetting | null>;
  setSetting(key: string, value: string): Promise<SiteSetting>;
  getAllSettings(): Promise<SiteSetting[]>;
}

export class DatabaseStorage implements IStorage {
  // Contact
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [newInquiry] = await db
      .insert(contactInquiries)
      .values(inquiry)
      .returning();
    return newInquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
  }

  // Newsletter
  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [newSubscriber] = await db
      .insert(newsletterSubscribers)
      .values(subscriber)
      .returning();
    return newSubscriber;
  }

  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | null> {
    const [subscriber] = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email));
    return subscriber || null;
  }

  async getAllActiveSubscribers(): Promise<NewsletterSubscriber[]> {
    return db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.isActive, true));
  }

  async getAllSubscribers(): Promise<NewsletterSubscriber[]> {
    return db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.subscribedAt));
  }

  // Admin
  async getAdminByUsername(username: string): Promise<AdminUser | null> {
    const [admin] = await db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.username, username));
    return admin || null;
  }

  async createAdminUser(username: string, passwordHash: string): Promise<AdminUser> {
    const [admin] = await db
      .insert(adminUsers)
      .values({ username, passwordHash })
      .returning();
    return admin;
  }

  async getAllAdminUsers(): Promise<AdminUser[]> {
    return db.select().from(adminUsers);
  }

  // Blog
  async createBlogArticle(article: InsertBlogArticle): Promise<BlogArticle> {
    const [newArticle] = await db
      .insert(blogArticles)
      .values(article)
      .returning();
    return newArticle;
  }

  async updateBlogArticle(id: number, article: Partial<InsertBlogArticle>): Promise<BlogArticle | null> {
    const [updated] = await db
      .update(blogArticles)
      .set({ ...article, updatedAt: new Date() })
      .where(eq(blogArticles.id, id))
      .returning();
    return updated || null;
  }

  async deleteBlogArticle(id: number): Promise<boolean> {
    const result = await db.delete(blogArticles).where(eq(blogArticles.id, id));
    return true;
  }

  async getBlogArticleById(id: number): Promise<BlogArticle | null> {
    const [article] = await db
      .select()
      .from(blogArticles)
      .where(eq(blogArticles.id, id));
    return article || null;
  }

  async getBlogArticleBySlug(slug: string): Promise<BlogArticle | null> {
    const [article] = await db
      .select()
      .from(blogArticles)
      .where(eq(blogArticles.slug, slug));
    return article || null;
  }

  async getAllBlogArticles(): Promise<BlogArticle[]> {
    return db.select().from(blogArticles).orderBy(desc(blogArticles.createdAt));
  }

  async getPublishedBlogArticles(): Promise<BlogArticle[]> {
    return db
      .select()
      .from(blogArticles)
      .where(eq(blogArticles.isPublished, true))
      .orderBy(desc(blogArticles.createdAt));
  }

  // Site Settings
  async getSetting(key: string): Promise<SiteSetting | null> {
    const [setting] = await db
      .select()
      .from(siteSettings)
      .where(eq(siteSettings.key, key));
    return setting || null;
  }

  async setSetting(key: string, value: string): Promise<SiteSetting> {
    const existing = await this.getSetting(key);
    if (existing) {
      const [updated] = await db
        .update(siteSettings)
        .set({ value, updatedAt: new Date() })
        .where(eq(siteSettings.key, key))
        .returning();
      return updated;
    }
    const [newSetting] = await db
      .insert(siteSettings)
      .values({ key, value })
      .returning();
    return newSetting;
  }

  async getAllSettings(): Promise<SiteSetting[]> {
    return db.select().from(siteSettings);
  }
}

export const storage = new DatabaseStorage();
