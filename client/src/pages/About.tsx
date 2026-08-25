import { motion } from "framer-motion";
import { TrendingUp, Shield, Users, Target, Lock, Award, CheckCircle2, Quote, Globe, ShieldAlert, Eye, Scale } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import techImg from "@assets/stock_images/global_logistics_sec_b02e54b9.jpg";
import inspectionImg from "@assets/stock_images/secure_cargo_shipmen_b52976fe.jpg";

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t("about.values.security.title"), desc: t("about.values.security.desc") },
    { icon: Eye, title: t("about.values.transparency.title"), desc: t("about.values.transparency.desc") },
    { icon: Scale, title: t("about.values.reliability.title"), desc: t("about.values.reliability.desc") },
    { icon: Lock, title: t("about.values.discretion.title"), desc: t("about.values.discretion.desc") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO {...seoConfig.about} />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb),0.1),transparent_50%)] pointer-events-none"></div>
        
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                <Globe className="w-4 h-4" />
                {t("about.hero.badge")}
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground tracking-tight">
                {t("about.hero.title")} <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary/50 italic">{t("about.hero.titleHighlight")}</span>
              </h1>
              
              <div className="relative pl-6 border-l-2 border-primary/50">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {t("about.hero.subtitle")} <span className="text-primary font-medium">{t("about.hero.subtitleHighlight")}</span> {t("about.hero.subtitleEnd")}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/10"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-sm md:text-base">{t("about.hero.impact.title")}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">{t("about.hero.impact.desc")}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-primary/10 border border-primary/20"
                >
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-sm md:text-base">{t("about.hero.trust.title")}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">{t("about.hero.trust.desc")}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-8 bg-primary/20 blur-[80px] rounded-full opacity-30"></div>
              <div className="relative z-10 p-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <img 
                  src={techImg} 
                  alt="Centre de Sécurité Logistique" 
                  className="rounded-2xl shadow-xl object-cover aspect-[4/3]"
                />
                
                <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 glass-card p-3 md:p-4 rounded-xl border-white/10 shadow-xl">
                  <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-primary mb-1" />
                  <div className="text-foreground font-bold text-xs md:text-sm">{t("about.hero.badge360")}</div>
                  <div className="text-[8px] md:text-[9px] text-primary font-bold uppercase tracking-wider">{t("about.hero.control")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/10 blur-2xl rounded-3xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-card">
                <img 
                  src={inspectionImg} 
                  alt="Inspection Sécurisée" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest font-bold text-xs">
                <Target className="w-4 h-4" /> 
                {t("about.story.badge")}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display text-foreground tracking-tight font-bold">
                {t("about.story.title")} <span className="text-primary italic">{t("about.story.titleHighlight")}</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.story.text1")}
              </p>
              
              <div className="p-6 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/10">
                <p className="text-foreground text-lg font-medium leading-relaxed mb-3">
                  {t("about.story.text2")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story.text3")} <strong className="text-foreground">{t("about.story.text3Highlight")}</strong> {t("about.story.text3End")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 md:py-12 relative">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-6 md:p-10 rounded-2xl border-white/10 shadow-xl text-center overflow-hidden"
          >
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/10 -rotate-12" />
            <Quote className="absolute -bottom-4 -right-4 w-16 h-16 text-primary/10 rotate-180" />
            
            <div className="relative z-10 space-y-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mx-auto">
                <Target className="w-5 h-5" />
              </div>
              
              <h2 className="text-sm md:text-base font-display font-bold text-foreground uppercase tracking-[0.1em] opacity-60">{t("about.mission.title")}</h2>
              
              <p className="text-lg md:text-xl text-foreground font-display font-medium leading-relaxed italic">
                {t("about.mission.quote")} <span className="text-primary">{t("about.mission.quoteHighlight")}</span>{t("about.mission.quoteEnd")}
              </p>
              
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading title={t("about.values.title")} subtitle={t("about.values.subtitle")} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                  <val.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
