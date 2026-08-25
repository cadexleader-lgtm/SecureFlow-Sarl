import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  structuredData?: object;
}

const SITE_NAME = "SecureFlow";
const SITE_URL = "https://secureflow.solutions";
const DEFAULT_IMAGE = "/og-image.png";

export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  canonical,
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const fullImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SecureFlow",
    description: "Expert en sécurisation du commerce international, transactions et logistique",
    url: SITE_URL,
    email: "infosecureflowco@gmail.com",
    sameAs: [
      "https://www.linkedin.com/company/secureflow"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "International"
    },
    areaServed: "Worldwide",
    serviceType: [
      "Vérification de fournisseurs",
      "Inspection de marchandises",
      "Sécurisation des transactions",
      "Supervision logistique",
      "Gestion des risques"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="author" content="SecureFlow" />
      
      <link rel="canonical" href={fullUrl} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
}

export const seoConfig = {
  home: {
    title: "Sécurisation du Commerce International",
    description: "SecureFlow - Expert en sécurisation du commerce international, vérification de fournisseurs, inspection de marchandises, supervision logistique et gestion des risques. Votre partenaire de confiance pour des transactions sécurisées.",
    keywords: "commerce international, sécurité transactions, vérification fournisseurs, inspection marchandises, logistique sécurisée, gestion risques, import export, due diligence",
    canonical: "/",
  },
  about: {
    title: "À Propos de SecureFlow",
    description: "Découvrez SecureFlow, votre partenaire expert en sécurisation du commerce international. Notre équipe d'experts vous accompagne dans la protection de vos opérations commerciales à l'échelle mondiale.",
    keywords: "à propos SecureFlow, entreprise sécurité commerce, expertise internationale, équipe professionnelle, valeurs entreprise",
    canonical: "/about",
  },
  founder: {
    title: "Notre Fondateur",
    description: "Rencontrez le fondateur de SecureFlow, expert reconnu dans la sécurisation du commerce international avec plus de 15 ans d'expérience dans le domaine.",
    keywords: "fondateur SecureFlow, leadership, expertise commerce international, vision entreprise",
    canonical: "/founder",
  },
  services: {
    title: "Nos Services de Sécurisation",
    description: "Découvrez nos services complets : vérification de fournisseurs, inspection de marchandises, sécurisation des transactions, supervision logistique et gestion des risques pour votre commerce international.",
    keywords: "services sécurisation, vérification fournisseurs, inspection marchandises, transactions sécurisées, supervision logistique, gestion risques, due diligence, audit commercial",
    canonical: "/services",
  },
  sectors: {
    title: "Secteurs d'Activité",
    description: "SecureFlow intervient dans de nombreux secteurs : import-export, énergie, mines, BTP, santé, aviation, pétrole & gaz et commerce international. Solutions adaptées à chaque industrie.",
    keywords: "secteurs activité, import export, énergie, mines, BTP, santé, aviation, pétrole gaz, commerce international, industrie",
    canonical: "/sectors",
  },
  blog: {
    title: "Blog et Actualités",
    description: "Restez informé des dernières actualités du commerce international, conseils de sécurisation et analyses sectorielles. Expertise et insights par les spécialistes SecureFlow.",
    keywords: "blog commerce international, actualités sécurité, conseils import export, analyses sectorielles, expertise logistique",
    canonical: "/blog",
  },
  contact: {
    title: "Contactez-Nous",
    description: "Contactez SecureFlow pour vos besoins en sécurisation du commerce international. Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets.",
    keywords: "contact SecureFlow, demande devis, consultation gratuite, expert commerce international, accompagnement projet",
    canonical: "/contact",
  },
  legal: {
    title: "Mentions Légales",
    description: "Mentions légales, politique de confidentialité et conditions d'utilisation du site SecureFlow.",
    keywords: "mentions légales, politique confidentialité, conditions utilisation, RGPD",
    canonical: "/legal",
  },
};
