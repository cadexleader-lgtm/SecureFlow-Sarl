// Pages publiques prérendues et listées dans le sitemap.
import { writeFile } from "fs/promises";

export const SITE_URL = "https://secureflow.solutions";

const BLOG_IDS = Array.from({ length: 15 }, (_, i) => String(i + 1));

const PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/sectors", priority: "0.9", changefreq: "monthly" },
  { path: "/group", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/founder", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  ...BLOG_IDS.map((id) => ({ path: `/blog/${id}`, priority: "0.6", changefreq: "yearly" })),
  { path: "/legal", priority: "0.3", changefreq: "yearly" },
];

export const PRERENDER_ROUTES = PAGES.map((p) => p.path);

export async function writeSitemap(file: string) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  ).join("\n");
  await writeFile(file, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
}
