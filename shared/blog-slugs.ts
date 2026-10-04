// URLs lisibles des articles statiques du blog. L'ancienne URL numérique
// (/blog/15) redirige en 301 vers la nouvelle (vercel.json + server/static.ts).
// Ne jamais modifier un slug publié : cela casserait les liens déjà indexés.
export const BLOG_SLUGS: Record<string, string> = {
  "1": "chambre-commerce-chine-apporteur-affaires",
  "2": "partenariat-petrolier-dubai",
  "3": "infrastructures-minieres-securite-operationnelle",
  "4": "reseau-europeen-paris",
  "5": "pourquoi-securiser-commerce-international",
  "6": "securiser-echanges-afrique-ouest-port-cotonou",
  "7": "partenariat-exim-finance",
  "8": "securiser-export-agricole",
  "9": "securiser-mines-ressources-naturelles",
  "10": "securiser-projets-energetiques",
  "11": "securiser-importations-medicales",
  "12": "securiser-operations-aeriennes",
  "13": "securiser-projets-infrastructures",
  "14": "securiser-operations-petrole-gaz",
  "15": "financement-projets-investissement",
};

export function blogPath(id: string | number): string {
  const slug = BLOG_SLUGS[String(id)];
  return slug ? `/blog/${slug}` : `/blog/${id}`;
}

export function blogIdFromSlug(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  if (BLOG_SLUGS[slug]) return slug; // ancienne URL numérique
  return Object.keys(BLOG_SLUGS).find((id) => BLOG_SLUGS[id] === slug);
}
