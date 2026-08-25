import { motion } from "framer-motion";
import { Award, Briefcase, ShieldCheck, Globe, CheckCircle2, Quote, ArrowRight, Target, Shield, Zap, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, seoConfig } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import founderPhoto from "@assets/WhatsApp_Image_2026-01-18_at_12.52.37_(1)_1768789362654.jpeg";

export default function Founder() {
  const { t } = useLanguage();

  const operations = [
    {
      title: t("founder.operations.op1.title"),
      tasks: [t("founder.operations.op1.t1"), t("founder.operations.op1.t2"), t("founder.operations.op1.t3"), t("founder.operations.op1.t4")]
    },
    {
      title: t("founder.operations.op2.title"),
      tasks: [t("founder.operations.op2.t1"), t("founder.operations.op2.t2"), t("founder.operations.op2.t3")]
    },
    {
      title: t("founder.operations.op3.title"),
      tasks: [t("founder.operations.op3.t1"), t("founder.operations.op3.t2"), t("founder.operations.op3.t3")]
    }
  ];

  const values = [
    { icon: Shield, title: t("founder.method.integrity.title"), desc: t("founder.method.integrity.desc") },
    { icon: Globe, title: t("founder.method.responsibility.title"), desc: t("founder.method.responsibility.desc") },
    { icon: Zap, title: t("founder.method.rigor.title"), desc: t("founder.method.rigor.desc") },
    { icon: TrendingUp, title: t("founder.method.protection.title"), desc: t("founder.method.protection.desc") }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SEO {...seoConfig.founder} />
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-2xl md:text-7xl font-display font-bold text-foreground tracking-tight leading-tight text-center">
                  Éric Brunnel <span className="italic text-[#000000]">QUENUM</span>
                </h1>
                <p className="text-sm md:text-2xl text-primary font-display font-bold uppercase tracking-[0.2em] opacity-80 text-center">
                  {t("founder.title")}
                </p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-primary/10" />
                <p className="text-lg md:text-4xl text-foreground font-display font-bold leading-tight italic pl-4 text-center">
                  {t("founder.quote")} <span className="text-primary">{t("founder.quoteHighlight")}</span>
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-2xl h-12 md:h-16 px-6 md:px-10 text-sm md:text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform bg-[#2856eb]">
                  {t("founder.cta")}
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full opacity-30"></div>
              <div className="relative z-10 p-2 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                <img 
                  src={founderPhoto} 
                  alt="Éric Brunnel QUENUM" 
                  className="rounded-[2.5rem] shadow-2xl w-full transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-10 relative bg-primary/5">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Target className="w-4 h-4" /> {t("founder.genesis.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">{t("founder.genesis.title")}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                {t("founder.genesis.text1")}
              </p>
              <div className="p-6 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/10 border-l-4 border-l-primary">
                <p className="text-foreground font-medium italic">
                  {t("founder.genesis.text2")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-10">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">{t("founder.experience.title")} <span className="text-primary italic">{t("founder.experience.titleHighlight")}</span></h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: t("founder.experience.exp1"), icon: Globe },
                  { title: t("founder.experience.exp2"), icon: Briefcase },
                  { title: t("founder.experience.exp3"), icon: ShieldCheck },
                  { title: t("founder.experience.exp4"), icon: Award }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/5 hover:border-primary/20 transition-all">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full opacity-30"></div>
              <div className="relative p-12 glass-card rounded-[3rem] text-center space-y-6">
                <p className="text-5xl font-display font-bold text-primary">{t("founder.experience.years")}</p>
                <p className="text-xl text-foreground font-bold uppercase tracking-widest">{t("founder.experience.yearsLabel")}</p>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
                <p className="text-muted-foreground">{t("founder.experience.yearsDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Operations Section */}
      <section className="py-10 relative bg-black/40">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">{t("founder.operations.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("founder.operations.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {operations.map((op, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-secondary dark:bg-white/5 border border-border dark:border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4 leading-tight">{op.title}</h3>
                <ul className="space-y-4">
                  {op.tasks.map((task, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Method & Values */}
      <section className="py-10">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">{t("founder.method.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("founder.method.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-secondary dark:bg-white/5 border border-border dark:border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Message Section */}
      <section className="py-10 bg-primary/5">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-primary uppercase tracking-[0.3em]">{t("founder.message.title")}</h2>
            <p className="text-3xl md:text-5xl text-foreground font-display font-bold leading-tight italic">
              {t("founder.message.quote")} <span className="text-primary">{t("founder.message.quoteHighlight")}</span> {t("founder.message.quoteEnd")}
            </p>
            <div className="h-1 w-32 bg-primary mx-auto"></div>
          </motion.div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-10 relative">
        <div className="container px-4 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 rounded-[3rem] border-white/10 text-center space-y-6 shadow-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              {t("founder.final.title")}
            </h2>
            <Link href="/contact">
              <Button size="lg" className="rounded-2xl h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                {t("founder.final.cta")}
                <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
