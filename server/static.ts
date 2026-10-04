import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { BLOG_SLUGS } from "@shared/blog-slugs";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Anciennes URLs numériques du blog → URLs lisibles (301)
  app.get("/blog/:id", (req, res, next) => {
    const slug = BLOG_SLUGS[String(req.params.id)];
    return slug ? res.redirect(301, `/blog/${slug}`) : next();
  });

  // Pages prérendues : /services → services.html (prioritaire sur le dossier services/)
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path === "/" || path.extname(req.path)) return next();
    const file = path.join(distPath, `${req.path.replace(/\/$/, "")}.html`);
    if (file.startsWith(distPath) && fs.existsSync(file)) return res.sendFile(file);
    next();
  });

  app.use(express.static(distPath, { redirect: false }));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (_req, res) => {
    res.sendFile(path.resolve(distPath, "spa.html"));
  });
}
