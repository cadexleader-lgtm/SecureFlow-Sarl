import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO, SITE_URL } from "@/components/SEO";
import { GUIDES, guideBySlug, guideText } from "@/lib/guides";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES } from "@/lib/services-content";
import NotFound from "@/pages/not-found";

const L = {
  fr: { all: "Tous les guides", badge: "Guide pratique", faq: "Questions fréquentes", help: "Besoin d'aide ?", discover: "Découvrir le service", talk: "Parler à SecureFlow", more: "À lire aussi" },
  en: { all: "All guides", badge: "Practical guide", faq: "Frequently asked questions", help: "Need help?", discover: "Discover the service", talk: "Talk to SecureFlow", more: "Read next" },
} as const;

// Guides pratiques en français (/guides/...) et en anglais (/en/guides/...).
export default function Guide() {
  const { language } = useLanguage();
  const guide = guideBySlug(useParams().slug);
  if (!guide) return <NotFound />;
  const g = guideText(guide, language);
  const l = L[language];
  const path = `/guides/${guide.slug}`;
  const service = SERVICES.find((s) => s.slug === guide.service);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title={g.metaTitle}
        description={g.description}
        canonical={path}
        ogImage={guide.image}
        ogType="article"
        breadcrumb={g.title}
        parentCrumb={{ name: "Guides", path: "/guides" }}
        structuredData={[
          {
            "@type": "Article",
            "@id": `${SITE_URL}${path}#article`,
            headline: g.title,
            description: g.description,
            image: `${SITE_URL}${guide.image}`,
            inLanguage: language === "en" ? "en" : "fr-FR",
            mainEntityOfPage: `${SITE_URL}${language === "en" ? "/en" : ""}${path}`,
            author: { "@type": "Person", name: "Éric Brunnel QUENUM", url: `${SITE_URL}/founder` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@type": "FAQPage",
            mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <article className="container px-4 mx-auto max-w-3xl">
        <Link href="/guides" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> {l.all}
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">
          <BookOpen className="w-4 h-4" /> {l.badge}
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">{g.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{g.intro}</p>
        <img src={guide.image} alt={g.title} loading="eager" decoding="async" width={1280} height={720} className="w-full aspect-video object-cover rounded-3xl border border-border mb-12" />

        {g.sections.map((s) => (
          <section key={s.h2} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{s.h2}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}
            {s.list && (
              <ul className="space-y-3 mt-2">
                {s.list.map((li) => (
                  <li key={li} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">{l.faq}</h2>
          <div className="space-y-4">
            {g.faq.map((f) => (
              <div key={f.q} className="rounded-2xl p-6 border border-border dark:border-white/10 bg-secondary dark:bg-white/5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {service && (
          <aside className="rounded-3xl p-8 bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">{l.help} {service[language].name}</h2>
            <p className="text-muted-foreground mb-5">{service[language].intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6" asChild>
                <Link href={`/services/${service.slug}`}>{l.discover} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" className="rounded-full px-6" asChild>
                <Link href="/contact">{l.talk}</Link>
              </Button>
            </div>
          </aside>
        )}

        <nav aria-label={l.more}>
          <h2 className="text-xl font-display font-bold text-foreground mb-4">{l.more}</h2>
          <ul className="space-y-2">
            {GUIDES.filter((o) => o.slug !== guide.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}`} className="text-primary hover:underline">{guideText(o, language).title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
