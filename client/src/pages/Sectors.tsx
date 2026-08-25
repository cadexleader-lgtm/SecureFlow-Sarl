import { motion } from "framer-motion";
import { Wheat, Pickaxe, Zap, HeartPulse, Plane, Building2, ArrowRight, ShieldCheck, Globe, ChevronRight, Fuel, Landmark, Crown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, seoConfig } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Sectors() {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Wheat,
      title: t("sectors.agriculture.title"),
      desc: t("sectors.agriculture.desc"),
      actions: [
        t("sectors.agriculture.a1"),
        t("sectors.agriculture.a2"),
        t("sectors.agriculture.a3"),
        t("sectors.agriculture.a4")
      ],
      cta: t("sectors.learnMore"),
      color: "from-green-500/20 to-emerald-500/5",
      link: "/blog/8"
    },
    {
      icon: Pickaxe,
      title: t("sectors.mining.title"),
      desc: t("sectors.mining.desc"),
      actions: [
        t("sectors.mining.a1"),
        t("sectors.mining.a2"),
        t("sectors.mining.a3"),
        t("sectors.mining.a4")
      ],
      cta: t("sectors.learnMore"),
      color: "from-amber-500/20 to-orange-500/5",
      link: "/blog/9"
    },
    {
      icon: Zap,
      title: t("sectors.energy.title"),
      desc: t("sectors.energy.desc"),
      actions: [
        t("sectors.energy.a1"),
        t("sectors.energy.a2"),
        t("sectors.energy.a3"),
        t("sectors.energy.a4")
      ],
      cta: t("sectors.learnMore"),
      color: "from-blue-500/20 to-cyan-500/5",
      link: "/blog/10"
    },
    {
      icon: HeartPulse,
      title: t("sectors.health.title"),
      desc: t("sectors.health.desc"),
      actions: [
        t("sectors.health.a1"),
        t("sectors.health.a2"),
        t("sectors.health.a3"),
        t("sectors.health.a4")
      ],
      cta: t("sectors.learnMore"),
      color: "from-red-500/20 to-rose-500/5",
      link: "/blog/11"
    },
    {
      icon: Plane,
      title: t("sectors.aviation.title"),
      desc: t("sectors.aviation.desc"),
      actions: [
        t("sectors.aviation.a1"),
        t("sectors.aviation.a2"),
        t("sectors.aviation.a3"),
        t("sectors.aviation.a4")
      ],
      cta: t("sectors.discover"),
      color: "from-indigo-500/20 to-blue-500/5",
      link: "/blog/12"
    },
    {
      icon: Building2,
      title: t("sectors.infrastructure.title"),
      desc: t("sectors.infrastructure.desc"),
      actions: [
        t("sectors.infrastructure.a1"),
        t("sectors.infrastructure.a2"),
        t("sectors.infrastructure.a3"),
        t("sectors.infrastructure.a4")
      ],
      cta: t("sectors.seeHow"),
      color: "from-slate-500/20 to-gray-500/5",
      link: "/blog/13"
    },
    {
      icon: Fuel,
      title: t("sectors.oil.title"),
      desc: t("sectors.oil.desc"),
      actions: [
        t("sectors.oil.a1"),
        t("sectors.oil.a2"),
        t("sectors.oil.a3"),
        t("sectors.oil.a4")
      ],
      cta: t("sectors.learnMore"),
      color: "from-yellow-500/20 to-amber-500/5",
      link: "/blog/14"
    },
    {
      icon: Crown,
      title: t("sectors.africa.title"),
      desc: t("sectors.africa.desc"),
      actions: [
        t("sectors.africa.a1"),
        t("sectors.africa.a2"),
        t("sectors.africa.a3"),
        t("sectors.africa.a4"),
        t("sectors.africa.a5")
      ],
      cta: t("sectors.becomePartner"),
      color: "from-purple-500/20 to-violet-500/5",
      link: "/blog/15",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO {...seoConfig.sectors} />
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Globe className="w-4 h-4" /> {t("sectors.hero.badge")}
            </div>
            <h1 className="text-2xl md:text-7xl font-display font-bold text-foreground tracking-tight leading-tight">
              {t("sectors.hero.title")} <span className="text-primary">{t("sectors.hero.titleHighlight")}</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("sectors.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-32 relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => {
              const isFeatured = 'featured' in sector && sector.featured;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative flex flex-col h-full rounded-[2.5rem] bg-secondary dark:bg-white/5 border transition-all duration-500 overflow-hidden hover-elevate ${
                    isFeatured 
                      ? 'border-primary/50 ring-2 ring-primary/20 shadow-lg shadow-primary/10' 
                      : 'border-border dark:border-white/5 hover:border-primary/30'
                  }`}
                >
                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      {t("sectors.africa.exclusive")}
                    </div>
                  )}
                  
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} ${isFeatured ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
                    <div className={`h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl border flex items-center justify-center mb-4 md:mb-8 transition-all duration-500 group-hover:scale-110 shadow-xl ${
                      isFeatured 
                        ? 'bg-primary text-white border-primary shadow-primary/30' 
                        : 'bg-secondary dark:bg-white/5 border-border dark:border-white/10 text-foreground group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20'
                    }`}>
                      <sector.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    
                    <h3 className={`text-lg md:text-2xl font-display font-bold mb-2 md:mb-4 transition-colors ${
                      isFeatured ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>{sector.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-8 flex-grow">
                      {sector.desc}
                    </p>

                    <div className="space-y-2 md:space-y-4 mb-6 md:mb-10">
                      {sector.actions.map((action, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground">
                          <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={sector.link || "/contact"} className="mt-auto">
                      <Button 
                        variant={isFeatured ? "default" : "outline"} 
                        className={`w-full justify-between group/btn rounded-xl md:rounded-2xl h-10 md:h-12 text-xs md:text-sm ${
                          isFeatured 
                            ? '' 
                            : 'border-white/10 hover:border-primary hover:bg-primary/10'
                        }`}
                      >
                        <span>{sector.cta}</span>
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-16 relative">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] border-white/10 overflow-hidden text-center shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-10">
              <div className="h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6 md:mb-8 animate-pulse shadow-2xl shadow-primary/20">
                <ShieldCheck className="w-7 h-7 md:w-10 md:h-10" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-5xl font-display font-bold text-foreground">
                  {t("sectors.cta.title")}
                </h2>
                <p className="text-sm md:text-xl text-muted-foreground">
                  {t("sectors.cta.subtitle")}
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-xl md:rounded-2xl h-12 md:h-16 px-6 md:px-10 text-sm md:text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  {t("sectors.cta.button")}
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
