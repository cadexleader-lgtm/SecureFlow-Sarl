import { Link } from "wouter";
import { ArrowRight, BookOpen } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { GUIDES, guideText } from "@/lib/guides";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Guides() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title={en ? "Practical guides: sourcing, supplier checks, inspection, importing" : "Guides pratiques : import, fournisseurs, inspection, port de Cotonou"}
        description={en ? "Free SecureFlow guides: verify a Chinese supplier, pre-shipment inspection, spot an import scam, import through the port of Cotonou." : "Guides gratuits de SecureFlow : vérifier un fournisseur chinois, inspection avant expédition, repérer une arnaque à l'import, importer via le port de Cotonou."}
        canonical="/guides"
        breadcrumb="Guides"
      />
      <div className="container px-4 mx-auto max-w-5xl">
        <SectionHeading as="h1" title={en ? "Practical guides" : "Guides pratiques"} subtitle={en ? "Secure your purchases and imports" : "Sécuriser vos achats et vos importations"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES.map((guide) => ({ ...guideText(guide, language), slug: guide.slug, image: guide.image })).map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="group flex flex-col rounded-3xl overflow-hidden border border-border dark:border-white/10 bg-secondary dark:bg-white/5 hover:border-primary/40 transition-colors">
              <img src={g.image} alt={g.title} loading="lazy" decoding="async" className="w-full aspect-video object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3"><BookOpen className="w-4 h-4" /> {en ? "Guide" : "Guide"}</div>
                <h2 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{g.title}</h2>
                <p className="text-muted-foreground flex-grow">{g.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm">{en ? "Read the guide" : "Lire le guide"} <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
