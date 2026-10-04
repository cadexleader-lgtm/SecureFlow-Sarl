import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO, SITE_URL } from "@/components/SEO";
import { GUIDES, guideBySlug } from "@/lib/guides";
import { SERVICES } from "@/lib/services-content";
import NotFound from "@/pages/not-found";

// Guides pratiques : rédigés en français uniquement (liens absolus "~/" depuis /en).
export default function Guide() {
  const guide = guideBySlug(useParams().slug);
  if (!guide) return <NotFound />;
  const path = `/guides/${guide.slug}`;
  const service = SERVICES.find((s) => s.slug === guide.service);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title={guide.metaTitle}
        description={guide.description}
        canonical={path}
        ogImage={guide.image}
        ogType="article"
        breadcrumb={guide.title}
        parentCrumb={{ name: "Guides", path: "/guides" }}
        alternates={false}
        structuredData={[
          {
            "@type": "Article",
            "@id": `${SITE_URL}${path}#article`,
            headline: guide.title,
            description: guide.description,
            image: `${SITE_URL}${guide.image}`,
            inLanguage: "fr-FR",
            mainEntityOfPage: `${SITE_URL}${path}`,
            author: { "@type": "Person", name: "Éric Brunnel QUENUM", url: `${SITE_URL}/founder` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@type": "FAQPage",
            mainEntity: guide.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <article className="container px-4 mx-auto max-w-3xl">
        <Link href="~/guides" className="inline-flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Tous les guides
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5">
          <BookOpen className="w-4 h-4" /> Guide pratique
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">{guide.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{guide.intro}</p>
        <img src={guide.image} alt={guide.title} loading="eager" decoding="async" width={1280} height={720} className="w-full aspect-video object-cover rounded-3xl border border-border mb-12" />

        {guide.sections.map((s) => (
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
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">Questions fréquentes</h2>
          <div className="space-y-4">
            {guide.faq.map((f) => (
              <div key={f.q} className="rounded-2xl p-6 border border-border dark:border-white/10 bg-secondary dark:bg-white/5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {service && (
          <aside className="rounded-3xl p-8 bg-primary/5 border border-primary/20 mb-12">
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">Besoin d'aide ? {service.fr.name}</h2>
            <p className="text-muted-foreground mb-5">{service.fr.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6" asChild>
                <Link href={`~/services/${service.slug}`}>Découvrir le service <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" className="rounded-full px-6" asChild>
                <Link href="~/contact">Parler à SecureFlow</Link>
              </Button>
            </div>
          </aside>
        )}

        <nav aria-label="Autres guides">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">À lire aussi</h2>
          <ul className="space-y-2">
            {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
              <li key={g.slug}>
                <Link href={`~/guides/${g.slug}`} className="text-primary hover:underline">{g.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  );
}
