import { Link } from "wouter";
import { ArrowRight, Globe2, MessageCircle, FileSignature, Search, FileCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO, SITE_URL } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/img/navire-porte-conteneurs.webp";

// Page destinée aux entreprises situées hors d'Afrique (France, Suisse, Belgique,
// Canada, Moyen-Orient, Asie…) qui veulent sécuriser une opération à distance.
// Ne jamais y revendiquer de bureau ou de client non confirmés.
const CONTENT = {
  fr: {
    metaTitle: "Sécuriser une opération internationale à distance, où que vous soyez",
    metaDescription: "Basé en France, en Suisse, en Belgique, au Canada ou ailleurs ? SecureFlow vérifie vos partenaires, inspecte et sécurise vos transactions sur le terrain, pour vous.",
    badge: "Clients internationaux",
    h1: "Où que vous soyez, nous sécurisons votre opération sur le terrain",
    intro: "Vous êtes en France, en Suisse, en Belgique, au Canada, au Royaume-Uni, aux Émirats ou en Asie, et vous devez acheter, vendre ou investir dans un pays que vous ne connaissez pas ? La distance vous empêche de vérifier par vous-même. SecureFlow devient vos yeux et vos mains sur place.",
    whyTitle: "Pourquoi faire appel à un tiers de confiance quand on est loin",
    why: [
      "Vous ne pouvez pas vous assurer à distance qu'un fournisseur existe vraiment ni qu'il est capable de livrer.",
      "Les photos et documents reçus par email ne prouvent ni l'existence ni la conformité de la marchandise.",
      "Un acompte versé à l'étranger est très difficile à récupérer en cas de fraude.",
      "Les règles, les usages et les intermédiaires locaux ne sont pas ceux de votre pays.",
    ],
    howTitle: "Comment nous travaillons avec un client à l'étranger",
    how: [
      ["Premier échange à distance", "Par WhatsApp, téléphone, email ou visioconférence, en français ou en anglais. Vous nous décrivez l'opération et vos partenaires."],
      ["Proposition et contrat", "Nous définissons ensemble le périmètre de la mission. Chaque intervention est encadrée par un contrat, en toute confidentialité."],
      ["Action sur le terrain", "Vérification des partenaires, inspection sur site, sécurisation des paiements et supervision logistique, menées par nos équipes et notre réseau."],
      ["Compte rendu et décision", "Vous recevez des résultats clairs, avec preuves visuelles, et vous décidez depuis chez vous, sur des faits."],
    ],
    casesTitle: "Situations typiques",
    cases: [
      "Vous achetez en Chine ou en Asie et voulez vérifier le fournisseur avant de payer.",
      "Vous investissez dans un projet minier, énergétique ou d'infrastructure en Afrique.",
      "Vous importez des produits agricoles ou vivriers d'Afrique de l'Ouest.",
      "Vous êtes sollicité pour une transaction sur l'or ou les minerais et voulez vérifier les interlocuteurs.",
      "Vous devez verser un acompte important à un partenaire que vous n'avez jamais rencontré.",
    ],
    reachTitle: "Notre présence",
    reach: "Siège à Cotonou (Bénin), filiale en Tanzanie (SecureFlow Tanzania Ltd), pôle minier Terraminex, et un réseau d'affaires en Chine, au Moyen-Orient (Dubaï) et en Europe (Paris). Pour un pays où nous ne sommes pas encore présents, nous étudions chaque demande au cas par cas.",
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Je suis basé en France (ou en Suisse, en Belgique, au Canada) : pouvez-vous m'aider ?", a: "Oui. Tout le suivi se fait à distance, en français ou en anglais : nous intervenons sur le terrain pour vous et vous recevons nos comptes rendus où que vous soyez." },
      { q: "Dois-je me déplacer en Afrique ?", a: "Non. C'est précisément le rôle de SecureFlow : vérifier, inspecter et superviser sur place à votre place." },
      { q: "Dans quels pays intervenez-vous ?", a: "Principalement en Afrique, à partir de notre siège au Bénin et de notre filiale en Tanzanie, avec un réseau en Chine, à Dubaï et en Europe. Pour les autres pays, nous étudions chaque demande." },
      { q: "SecureFlow garantit-il le résultat de mon opération ?", a: "Non. SecureFlow réduit fortement les risques en tant que tiers de confiance, mais n'est ni assureur ni garant financier. Chaque mission est encadrée par contrat." },
    ],
    cta: "Parler de votre opération",
    whatsapp: "Écrire sur WhatsApp",
    servicesLink: "Voir tous nos services",
  },
  en: {
    metaTitle: "Secure an international deal remotely, wherever you are",
    metaDescription: "Based in Europe, North America, the Middle East or Asia? SecureFlow verifies your partners, inspects goods and secures your transactions on the ground, for you.",
    badge: "International clients",
    h1: "Wherever you are, we secure your operation on the ground",
    intro: "You are in France, Switzerland, the UK, the US, Canada, the UAE or Asia, and you need to buy, sell or invest in a country you do not know? Distance stops you from checking for yourself. SecureFlow becomes your eyes and hands on site.",
    whyTitle: "Why use a trusted third party when you are far away",
    why: [
      "You cannot confirm remotely that a supplier really exists or can deliver.",
      "Photos and documents sent by email prove neither the existence nor the compliance of the goods.",
      "A deposit paid abroad is very hard to recover in case of fraud.",
      "Local rules, customs and middlemen are not those of your country.",
    ],
    howTitle: "How we work with clients abroad",
    how: [
      ["Remote first contact", "By WhatsApp, phone, email or video call, in English or French. You describe the operation and your partners."],
      ["Proposal and contract", "We define the scope of the engagement together. Every engagement is governed by contract, in full confidentiality."],
      ["Action on the ground", "Partner verification, on-site inspection, payment security and logistics supervision, carried out by our teams and network."],
      ["Report and decision", "You receive clear results with visual evidence, and decide from home, based on facts."],
    ],
    casesTitle: "Typical situations",
    cases: [
      "You buy in China or Asia and want to verify the supplier before paying.",
      "You invest in a mining, energy or infrastructure project in Africa.",
      "You import agricultural or staple products from West Africa.",
      "You are offered a gold or minerals deal and want the counterparties checked.",
      "You must pay a large deposit to a partner you have never met.",
    ],
    reachTitle: "Where we operate",
    reach: "Headquarters in Cotonou (Benin), a subsidiary in Tanzania (SecureFlow Tanzania Ltd), the Terraminex mining division, and a business network in China, the Middle East (Dubai) and Europe (Paris). For countries where we are not yet present, we review each request case by case.",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "I am based in Europe or North America: can you help?", a: "Yes. Everything is handled remotely, in English or French: we act on the ground for you and you receive our reports wherever you are." },
      { q: "Do I need to travel to Africa?", a: "No. That is exactly SecureFlow's role: to verify, inspect and supervise on site on your behalf." },
      { q: "Which countries do you cover?", a: "Mainly Africa, from our headquarters in Benin and our subsidiary in Tanzania, with a network in China, Dubai and Europe. For other countries, we review each request." },
      { q: "Does SecureFlow guarantee the outcome of my deal?", a: "No. SecureFlow greatly reduces risk as a trusted third party, but is neither an insurer nor a financial guarantor. Every engagement is governed by contract." },
    ],
    cta: "Discuss your operation",
    whatsapp: "Message us on WhatsApp",
    servicesLink: "See all our services",
  },
} as const;

const STEP_ICONS = [MessageCircle, FileSignature, Search, FileCheck];

export default function International() {
  const { language } = useLanguage();
  const c = CONTENT[language];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title={c.metaTitle}
        description={c.metaDescription}
        canonical="/international"
        ogImage={heroImg}
        breadcrumb={c.badge}
        structuredData={[
          {
            "@type": "Service",
            "@id": `${SITE_URL}/international#service`,
            name: c.metaTitle,
            description: c.metaDescription,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Place", name: "Worldwide" },
            availableLanguage: ["French", "English"],
          },
          {
            "@type": "FAQPage",
            mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <div className="container px-4 mx-auto max-w-5xl">
        <header className="space-y-6 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Globe2 className="w-4 h-4" /> {c.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">{c.h1}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{c.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">{c.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="https://wa.me/22950363636" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-4 h-4" />{c.whatsapp}</a>
            </Button>
          </div>
        </header>

        <img src={heroImg} alt={c.h1} loading="eager" decoding="async" width={1280} height={720} className="w-full aspect-video object-cover rounded-3xl border border-border mb-14" />

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{c.whyTitle}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.why.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-2xl p-5 border border-border dark:border-white/10 bg-secondary dark:bg-white/5 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{w}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{c.howTitle}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.how.map(([t, d], i) => {
              const Icon = STEP_ICONS[i];
              return (
                <li key={t} className="rounded-2xl p-6 border border-border dark:border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-10 w-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center">{i + 1}</span>
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{t}</h3>
                  </div>
                  <p className="text-muted-foreground">{d}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{c.casesTitle}</h2>
          <ul className="space-y-3">
            {c.cases.map((x) => (
              <li key={x} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-1" />{x}
              </li>
            ))}
          </ul>
          <Link href="/services" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline">
            {c.servicesLink} <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section className="mb-14 rounded-3xl p-8 bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">{c.reachTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.reach}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faq.map((f) => (
              <div key={f.q} className="rounded-2xl p-6 border border-border dark:border-white/10 bg-secondary dark:bg-white/5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center rounded-3xl p-10 border border-border dark:border-white/10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{c.h1}</h2>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="/contact">{c.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
