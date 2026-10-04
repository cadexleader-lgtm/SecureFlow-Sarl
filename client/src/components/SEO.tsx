import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  /** Données structurées propres à la page (Article, FAQPage, Service...) ajoutées au graphe commun. */
  structuredData?: object | object[];
  /** Libellé de la page dans le fil d'Ariane (par défaut : le titre). */
  breadcrumb?: string;
  /** Niveau intermédiaire du fil d'Ariane (ex. Services pour une page service). */
  parentCrumb?: { name: string; path: string };
  noindex?: boolean;
}

export const SITE_NAME = "SecureFlow";
export const SITE_URL = "https://secureflow.solutions";
const DEFAULT_IMAGE = "/og-image.jpg";
const ORG_ID = `${SITE_URL}/#organization`;

/** Identité de l'entreprise telle que déclarée au RCCM (extrait du 05-01-2026). */
export const organizationSchema = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: "SecureFlow",
  legalName: "SECUREFLOW SARL",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "SecureFlow sécurise le commerce international : vérification des fournisseurs, inspection sur site, sécurisation des transactions, supervision logistique, gestion des risques, financement de projets et commerce international.",
  slogan: "La confiance ne se déclare pas, elle se prouve.",
  foundingDate: "2026-01-05",
  taxID: "3202677480120",
  identifier: [
    { "@type": "PropertyValue", propertyID: "RCCM", value: "RB/COT/26 B 41799" },
    { "@type": "PropertyValue", propertyID: "IFU", value: "3202677480120" },
  ],
  email: "infosecureflowco@gmail.com",
  telephone: "+22950636363",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ilot 1480, Quartier Kouhounou",
    addressLocality: "Cotonou",
    addressRegion: "Littoral",
    addressCountry: "BJ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.3654, longitude: 2.4183 },
  areaServed: ["Bénin", "Afrique de l'Ouest", "Afrique", "International"],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer service", telephone: "+22950636363", availableLanguage: ["French", "English"] },
    { "@type": "ContactPoint", contactType: "customer service", telephone: "+22950363636", contactOption: "WhatsApp", availableLanguage: ["French", "English"] },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/founder#person`,
    name: "Éric Brunnel QUENUM",
    jobTitle: "Fondateur & CEO",
    url: `${SITE_URL}/founder`,
    sameAs: ["https://www.linkedin.com/in/eric-brunnel-quenum-8b99703a4"],
  },
  subOrganization: [
    { "@type": "Organization", name: "TERRAMINEX TRADING INSPECTION AND INVESTMENT LTD", alternateName: "Terraminex", url: "https://terraminex.net/", description: "Pôle minier du groupe SecureFlow : or et ressources minières." },
    { "@type": "Organization", name: "SECUREFLOW TANZANIA LTD", address: { "@type": "PostalAddress", addressCountry: "TZ" } },
    { "@type": "Organization", name: "FORTRICHE INTERPRISE" },
  ],
  knowsAbout: [
    "Sécurisation du commerce international", "Vérification de fournisseurs", "Due diligence", "Inspection sur site",
    "Sécurisation des transactions", "Supervision logistique", "Logistique maritime, portuaire et aérienne", "Gestion des risques",
    "Financement de projets", "Import-export", "Mines et ressources minières", "Or", "Énergie", "Pétrole et gaz",
    "Santé et équipements médicaux", "Aviation", "BTP et infrastructures", "Environnement et recyclage",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services SecureFlow",
    itemListElement: [
      "Vérification des fournisseurs", "Inspection et conformité sur site", "Sécurité des transactions", "Supervision logistique",
      "Gestion des risques", "Financement de projets et investissement", "Commerce international et conseil",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, provider: { "@id": ORG_ID } } })),
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr-FR",
  publisher: { "@id": ORG_ID },
};

export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  canonical,
  structuredData,
  breadcrumb,
  parentCrumb,
  noindex,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const path = canonical && canonical !== "/" ? canonical : "";
  const fullUrl = `${SITE_URL}${path || "/"}`;
  const fullImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const crumbs: object[] = [{ "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` }];
  if (parentCrumb) crumbs.push({ "@type": "ListItem", position: 2, name: parentCrumb.name, item: `${SITE_URL}${parentCrumb.path}` });
  else if (path.startsWith("/blog/")) crumbs.push({ "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` });
  if (path) crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: breadcrumb ?? title, item: fullUrl });

  const graph = [
    organizationSchema,
    websiteSchema,
    {
      "@type": ogType === "article" ? "WebPage" : "WebPage",
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: fullTitle,
      description,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORG_ID },
      primaryImageOfPage: fullImage,
    },
    { "@type": "BreadcrumbList", itemListElement: crumbs },
    ...(Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []),
  ];

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="author" content="SecureFlow" />
      <meta name="geo.region" content="BJ-LI" />
      <meta name="geo.placename" content="Cotonou" />
      <meta name="geo.position" content="6.3654;2.4183" />
      <meta name="ICBM" content="6.3654, 2.4183" />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
    </Helmet>
  );
}

// Titres (≤ 60 caractères utiles) et descriptions (≈ 150-160) rédigés pour les recherches visées :
// métier + lieu (Bénin, Cotonou, Afrique) + noms propres (SecureFlow, Terraminex, fondateur).
export const seoConfig = {
  home: {
    title: "SecureFlow | Sécurisation du commerce international au Bénin",
    description: "SecureFlow, à Cotonou (Bénin) : vérification de fournisseurs, inspection sur site, sécurisation des paiements et supervision logistique du port à la livraison.",
    keywords: "SecureFlow, sécurisation commerce international, vérification fournisseur, due diligence Afrique, inspection marchandises Cotonou, supervision logistique Bénin, import export Bénin, financement de projets Afrique, Terraminex",
    canonical: "/",
  },
  about: {
    title: "Qui sommes-nous : tiers de confiance du commerce international",
    description: "SecureFlow SARL, société béninoise basée à Cotonou, sécurise les flux de marchandises, de capitaux, de personnes et de données pour les entreprises, traders et investisseurs.",
    keywords: "SecureFlow Bénin, tiers de confiance commerce international, société sécurisation Cotonou, gestion des risques Afrique",
    canonical: "/about",
    breadcrumb: "Qui sommes-nous",
  },
  founder: {
    title: "Éric Brunnel QUENUM, fondateur et CEO de SecureFlow",
    description: "Éric Brunnel QUENUM, fondateur et CEO de SecureFlow et du groupe (Terraminex, SecureFlow Tanzania) : plus de 9 ans d'expérience en import-export et transactions complexes.",
    keywords: "Éric Brunnel QUENUM, Eric Brunnel Quenum, fondateur SecureFlow, CEO SecureFlow, Terraminex",
    canonical: "/founder",
    breadcrumb: "Le fondateur",
  },
  services: {
    title: "Services : vérification fournisseurs, inspection, logistique",
    description: "Vérification des fournisseurs, inspection et conformité sur site, sécurité des transactions, supervision logistique, gestion des risques, financement de projets et import-export.",
    keywords: "vérification fournisseur, due diligence fournisseur Chine, inspection sur site, sécurisation paiement international, supervision logistique maritime, gestion des risques, financement de projets, import export",
    canonical: "/services",
    breadcrumb: "Services",
  },
  sectors: {
    title: "Secteurs : mines, énergie, pétrole, agriculture, santé, BTP",
    description: "SecureFlow sécurise vos opérations en agriculture, mines et or, énergie, pétrole et gaz, santé, aviation, BTP, environnement, éducation et financement de projets.",
    keywords: "sécurisation transactions minières, or Afrique, pétrole gaz Bénin, export agricole Bénin, équipements médicaux import, BTP Bénin, recyclage déchets Bénin",
    canonical: "/sectors",
    breadcrumb: "Secteurs",
  },
  group: {
    title: "Le Groupe SecureFlow : Terraminex, SecureFlow Tanzania, Fortriche",
    description: "Le groupe fondé par Éric Brunnel QUENUM : SecureFlow SARL (Bénin), SecureFlow Tanzania Ltd, Terraminex, pôle minier (or et ressources), et Fortriche Interprise.",
    keywords: "groupe SecureFlow, Terraminex, Terraminex Trading Inspection and Investment, SecureFlow Tanzania, Fortriche Interprise, mines or",
    canonical: "/group",
    breadcrumb: "Le Groupe",
  },
  blog: {
    title: "Blog : commerce international, mines, énergie, logistique",
    description: "Analyses et retours de terrain de SecureFlow : sécurisation du commerce Chine-Afrique, mines, énergie, pétrole, santé, aviation, infrastructures et financement de projets.",
    keywords: "blog commerce international, Chine Afrique commerce, port de Cotonou, mines Afrique, financement projets Afrique",
    canonical: "/blog",
    breadcrumb: "Blog",
  },
  contact: {
    title: "Contact : SecureFlow à Cotonou, Bénin",
    description: "Contactez SecureFlow à Cotonou : +229 50 63 63 63 (appels), +229 50 36 36 36 (WhatsApp). Parlez-nous de votre opération à sécuriser, en toute confidentialité.",
    keywords: "contact SecureFlow, SecureFlow Cotonou, SecureFlow WhatsApp, sécuriser une opération",
    canonical: "/contact",
    breadcrumb: "Contact",
  },
  legal: {
    title: "Mentions légales et cadre d'intervention",
    description: "Mentions légales de SECUREFLOW SARL : RCCM RB/COT/26 B 41799, IFU 3202677480120, siège à Cotonou, et cadre d'intervention de SecureFlow.",
    keywords: "mentions légales SecureFlow, RCCM SecureFlow, IFU SecureFlow",
    canonical: "/legal",
    breadcrumb: "Mentions légales",
  },
};
