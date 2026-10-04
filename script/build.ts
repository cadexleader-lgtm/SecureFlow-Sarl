import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import { PRERENDER_ROUTES, writeSitemap } from "./seo-routes";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("prerendering pages for SEO...");
  await prerender();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

// Génère un fichier HTML complet par page publique (contenu + balises <head>),
// pour que Google, Bing et les aperçus de liens (WhatsApp, LinkedIn...) lisent
// le vrai contenu sans exécuter le JavaScript.
async function prerender() {
  await viteBuild({
    logLevel: "warn",
    build: { ssr: "src/entry-server.tsx", outDir: path.resolve("dist/server"), emptyOutDir: true },
    ssr: { noExternal: ["react-helmet-async"] },
  });
  const { render } = await import(pathToFileURL(path.resolve("dist/server/entry-server.js")).href);
  const template = await readFile("dist/public/index.html", "utf-8");
  // Coquille vide pour les URL dynamiques (admin, articles en base) : jamais le contenu de l'accueil.
  await writeFile("dist/public/spa.html", template);
  for (const route of PRERENDER_ROUTES) {
    const { html, head, htmlAttrs } = await render(route);
    const page = template
      .replace(/<html[^>]*>/, htmlAttrs ? `<html ${htmlAttrs}>` : "$&")
      .replace(/<meta name="description"[^>]*>\s*/, head ? "" : "$&")
      .replace(/<title>[\s\S]*?<\/title>/, head || "$&")
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const file = route === "/" ? "dist/public/index.html" : `dist/public${route}.html`;
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, page);
  }
  await writeSitemap("dist/public/sitemap.xml");
  await rm("dist/server", { recursive: true, force: true });
  console.log(`  ${PRERENDER_ROUTES.length} pages prerendered`);
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
