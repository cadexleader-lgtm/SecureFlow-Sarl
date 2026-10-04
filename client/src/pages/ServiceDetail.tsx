import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO, SITE_URL } from "@/components/SEO";
import { useLanguage, useHomeHref } from "@/contexts/LanguageContext";
import { SERVICES, serviceBySlug } from "@/lib/services-content";
import { GUIDES, guideText } from "@/lib/guides";
import NotFound from "@/pages/not-found";

const LABELS = {
  fr: {
    services: "Services", what: "Ce que nous faisons", how: "Comment se déroule une mission",
    forWho: "Pour qui ?", faq: "Questions fréquentes", cta: "Parler de votre opération", whatsapp: "Écrire sur WhatsApp",
    others: "Nos autres services", ctaTitle: "Une opération à sécuriser ?",
    ctaText: "Expliquez-nous votre besoin : nous revenons vers vous avec une proposition adaptée, en toute confidentialité.",
    steps: [
      ["Échange", "Nous comprenons votre opération, vos partenaires et vos enjeux."],
      ["Analyse", "Vérification des parties et des documents, évaluation du niveau de risque."],
      ["Intervention", "Contrôles, sur site si besoin, encadrement et supervision des étapes critiques."],
      ["Compte rendu", "Résultats, points d'alerte et recommandations pour décider en connaissance de cause."],
    ],
    limit: "SecureFlow intervient comme tiers de confiance : nous réduisons fortement les risques, sans être assureur ni garant financier. Chaque mission est encadrée par contrat.",
  },
  en: {
    services: "Services", what: "What we do", how: "How an engagement works",
    forWho: "Who is it for?", faq: "Frequently asked questions", cta: "Discuss your operation", whatsapp: "Message us on WhatsApp",
    others: "Our other services", ctaTitle: "An operation to secure?",
    ctaText: "Tell us what you need: we will come back with a tailored proposal, in full confidentiality.",
    steps: [
      ["Discussion", "We understand your operation, your partners and what is at stake."],
      ["Analysis", "Checks on parties and documents, assessment of the risk level."],
      ["Action", "Controls, on site when needed, framing and supervision of critical steps."],
      ["Report", "Results, red flags and recommendations so you decide with full knowledge."],
    ],
    limit: "SecureFlow acts as a trusted third party: we greatly reduce risk without being an insurer or financial guarantor. Every engagement is governed by contract.",
  },
} as const;

export default function ServiceDetail() {
  const { language } = useLanguage();
  const homeHref = useHomeHref();
  const service = serviceBySlug(useParams().slug);
  if (!service) return <NotFound />;
  const c = service[language];
  const L = LABELS[language];
  const path = `/services/${service.slug}`;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title={c.metaTitle}
        description={c.metaDescription}
        canonical={path}
        ogImage={service.image}
        breadcrumb={c.name}
        parentCrumb={{ name: L.services, path: "/services" }}
        structuredData={[
          {
            "@type": "Service",
            "@id": `${SITE_URL}${path}#service`,
            name: c.name,
            description: c.metaDescription,
            serviceType: c.name,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: ["Bénin", "Afrique", "International"],
            url: `${SITE_URL}${path}`,
          },
          {
            "@type": "FAQPage",
            mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <div className="container px-4 mx-auto max-w-5xl">
        <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground mb-6">
          <Link href={homeHref} className="hover:text-primary">SecureFlow</Link> <span aria-hidden>/</span>{" "}
          <Link href="/services" className="hover:text-primary">{L.services}</Link> <span aria-hidden>/</span>{" "}
          <span className="text-foreground">{c.name}</span>
        </nav>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-10">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <service.icon className="w-7 h-7" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">{c.h1}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{c.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">{L.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="https://wa.me/22950363636" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-4 h-4" />{L.whatsapp}</a>
            </Button>
          </div>
        </motion.header>

        <img loading="eager" decoding="async" src={service.image} alt={c.name} width={1280} height={720} className="w-full aspect-video object-cover rounded-3xl border border-border mb-14" />

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{L.what}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.points.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 border border-border dark:border-white/10 bg-secondary dark:bg-white/5">
                <h3 className="flex items-start gap-3 text-lg font-display font-semibold text-foreground mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{L.how}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {L.steps.map(([t, d], i) => (
              <li key={t} className="rounded-2xl p-5 border border-border dark:border-white/10">
                <div className="h-10 w-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-semibold text-foreground mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 rounded-3xl p-8 bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">{L.forWho}</h2>
          <p className="text-muted-foreground leading-relaxed">{c.forWho}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">{L.faq}</h2>
          <div className="space-y-4">
            {c.faq.map((f) => (
              <div key={f.q} className="rounded-2xl p-6 border border-border dark:border-white/10 bg-secondary dark:bg-white/5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">{L.limit}</p>
        </section>

        <section className="mb-14 text-center rounded-3xl p-10 border border-border dark:border-white/10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{L.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{L.ctaText}</p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="/contact">{L.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </section>

        {GUIDES.some((g) => g.service === service.slug) && (
          <section className="mb-14">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">{language === "en" ? "Practical guides" : "Guides pratiques"}</h2>
            <ul className="space-y-2">
              {GUIDES.filter((g) => g.service === service.slug).map((g) => (
                <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-primary hover:underline">{guideText(g, language).title}</Link></li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">{L.others}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex items-center gap-3 p-4 rounded-xl border border-border dark:border-white/10 hover:border-primary/40 transition-colors">
                  <s.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{s[language].name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
