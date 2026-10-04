// Pages publiques prérendues et listées dans le sitemap.
import { writeFile } from "fs/promises";
import { BLOG_SLUGS, blogPath } from "../shared/blog-slugs";
import { SERVICE_SLUGS } from "../shared/service-slugs";

export const SITE_URL = "https://secureflow.solutions";

const BLOG_IDS = Object.keys(BLOG_SLUGS);

const PAGES: { path: string; priority: string; changefreq: string; fr_only?: boolean }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  ...SERVICE_SLUGS.map((slug) => ({ path: `/services/${slug}`, priority: "0.9", changefreq: "monthly" })),
  { path: "/sectors", priority: "0.9", changefreq: "monthly" },
  { path: "/group", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/founder", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  ...BLOG_IDS.map((id) => ({ path: blogPath(id), priority: "0.6", changefreq: "yearly", fr_only: true })),
  { path: "/legal", priority: "0.3", changefreq: "yearly" },
];

const enPath = (p: string) => (p === "/" ? "/en" : `/en${p}`);

// Pages françaises + leur version anglaise (/en/...), sauf les articles (français uniquement).
export const PRERENDER_ROUTES = [
  ...PAGES.map((p) => p.path),
  ...PAGES.filter((p) => !p.fr_only).map((p) => enPath(p.path)),
];

export async function writeSitemap(file: string) {
  const today = new Date().toISOString().slice(0, 10);
  const entry = (loc: string, p: (typeof PAGES)[number]) => {
    const alt = p.fr_only
      ? ""
      : `
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE_URL}${p.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${enPath(p.path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.path}"/>`;
    return `  <url>
    <loc>${SITE_URL}${loc}</loc>${alt}
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  };
  const urls = [
    ...PAGES.map((p) => entry(p.path, p)),
    ...PAGES.filter((p) => !p.fr_only).map((p) => entry(enPath(p.path), p)),
  ].join("\n");
  await writeFile(
    file,
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
  );
}
