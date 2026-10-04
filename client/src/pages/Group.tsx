import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, ExternalLink, Gem, Globe2, Layers, MapPin, Pickaxe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO, seoConfig } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import mining1 from "@/assets/img/equipement-minier-1.webp";
import mining3 from "@/assets/img/equipement-minier-3.webp";
import goldImg from "@/assets/img/lingots-or.webp";

export const TERRAMINEX_URL = "https://terraminex.net/";

export function useGroupCompanies() {
  const { t } = useLanguage();
  return [
    {
      id: "secureflow",
      name: "SECUREFLOW SARL",
      tag: t("group.secureflow.tag"),
      desc: t("group.secureflow.desc"),
      icon: ShieldCheck,
      facts: ["RCCM RB/COT/26 B 41799", "IFU 3202677480120"],
    },
    {
      id: "terraminex",
      name: "TERRAMINEX TRADING INSPECTION AND INVESTMENT LTD",
      tag: t("group.terraminex.tag"),
      desc: t("group.terraminex.desc"),
      icon: Pickaxe,
      url: TERRAMINEX_URL,
      highlight: true,
    },
    {
      id: "tanzania",
      name: "SECUREFLOW TANZANIA LTD",
      tag: t("group.tanzania.tag"),
      desc: t("group.tanzania.desc"),
      icon: Globe2,
    },
    {
      id: "fortriche",
      name: "FORTRICHE INTERPRISE",
      tag: t("group.fortriche.tag"),
      desc: t("group.fortriche.desc"),
      icon: Building2,
    },
  ];
}

export default function Group() {
  const { t } = useLanguage();
  const companies = useGroupCompanies();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO {...seoConfig.group} />

      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-5xl relative z-10 text-center space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Layers className="w-4 h-4" /> {t("group.badge")}
            </div>
            <h1 className="text-3xl md:text-6xl font-display font-bold tracking-tight leading-tight">
              {t("group.title")} <span className="text-primary">{t("group.titleHighlight")}</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("group.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {companies.map((c, idx) => (
              <motion.div
                key={c.id}
                id={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`relative flex flex-col rounded-[2rem] p-7 md:p-9 border transition-all hover-elevate scroll-mt-28 ${
                  c.highlight ? "border-amber-500/40 bg-gradient-to-br from-amber-500/10 to-transparent" : "border-border dark:border-white/10 bg-secondary dark:bg-white/5"
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 ${c.highlight ? "bg-amber-500/15 text-amber-500" : "bg-primary/10 text-primary"}`}>
                    <c.icon className="w-7 h-7" />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[11px] font-bold uppercase tracking-[0.16em] mb-1 ${c.highlight ? "text-amber-500" : "text-primary"}`}>{c.tag}</div>
                    <h2 className="text-lg md:text-xl font-display font-bold leading-snug break-words">{c.name}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">{c.desc}</p>
                {c.facts && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {c.facts.map((f) => (
                      <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-full bg-background/60 dark:bg-white/5 border border-border dark:border-white/10 text-muted-foreground">{f}</span>
                    ))}
                  </div>
                )}
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors">
                    {t("group.visit")} terraminex.net <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terraminex — pôle minier */}
      <section className="py-16 md:py-24 border-y border-border bg-slate-100/80 dark:bg-slate-950/60">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-widest">
                <Gem className="w-4 h-4" /> {t("group.terraminex.spotlightBadge")}
              </div>
              <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight">{t("group.terraminex.spotlightTitle")}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t("group.terraminex.spotlightText")}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["b1", "b2", "b3", "b4"].map((k) => (
                  <li key={k} className="flex items-start gap-3 p-3 rounded-xl bg-background dark:bg-white/5 border border-border dark:border-white/10 text-sm font-medium">
                    <Pickaxe className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {t(`group.terraminex.${k}`)}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full px-8 bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <a href={TERRAMINEX_URL} target="_blank" rel="noopener noreferrer">
                  {t("group.visit")} Terraminex <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <img loading="lazy" decoding="async" src={mining1} alt="Terraminex — équipement minier" className="col-span-2 w-full aspect-[16/9] object-cover rounded-3xl border border-border shadow-xl" />
              <img loading="lazy" decoding="async" src={mining3} alt="Terraminex — projet minier" className="w-full aspect-square object-cover rounded-2xl border border-border" />
              <img loading="lazy" decoding="async" src={goldImg} alt="Or et ressources minières" className="w-full aspect-square object-cover rounded-2xl border border-border" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-4xl text-center space-y-6">
          <MapPin className="w-10 h-10 text-primary mx-auto" />
          <h2 className="text-2xl md:text-4xl font-display font-bold">{t("group.cta.title")}</h2>
          <p className="text-muted-foreground md:text-lg">{t("group.cta.subtitle")}</p>
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="/contact">
              {t("group.cta.button")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
