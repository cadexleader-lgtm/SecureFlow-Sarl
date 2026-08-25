import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, Globe, Zap, Ship, Activity, Lock, CheckCircle2, Award, Briefcase, Search, FileCheck, Landmark, BarChart3, Users, ShieldAlert, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@assets/stock_images/professional_cargo_i_20329aee.jpg";
import goldImg from "@assets/stock_images/gold_bars_and_precio_1456b62f.jpg";
import miningImg from "@assets/stock_images/mining_project_infra_8026ebfd.jpg";
import partnerPhoto from "@assets/WhatsApp_Image_2026-01-18_at_12.52.37_(1)_1768789362654.jpeg";
import securityImg from "@assets/stock_images/modern_security_audi_4d6abb64.jpg";
import transactionImg from "@assets/stock_images/secure_high_value_tr_1b60de34.jpg";
import china1 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.14_1769163276809.jpeg";
import china2 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.12_1769163276885.jpeg";
import china3 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.11_1769163276911.jpeg";
import china4 from "@assets/WhatsApp_Image_2026-01-18_at_12.52.35_(1)_1769163276941.jpeg";
import china5 from "@assets/WhatsApp_Image_2026-01-18_at_12.52.35_1769163276961.jpeg";

import mining1 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1768871869816.jpeg";
import mining2 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_(1)_1768871869883.jpeg";
import mining3 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_1768871869902.jpeg";
import mining4 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.46_1768871869926.jpeg";

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImg,
      title: t("home.hero.slide1.title"),
      subtitle: t("home.hero.slide1.subtitle"),
      description: t("home.hero.slide1.desc")
    },
    {
      image: securityImg,
      title: t("home.hero.slide2.title"),
      subtitle: t("home.hero.slide2.subtitle"),
      description: t("home.hero.slide2.desc")
    },
    {
      image: transactionImg,
      title: t("home.hero.slide3.title"),
      subtitle: t("home.hero.slide3.subtitle"),
      description: t("home.hero.slide3.desc")
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const mainServices = [
    {
      icon: Search,
      title: t("home.services.verification.title"),
      desc: t("home.services.verification.desc")
    },
    {
      icon: FileCheck,
      title: t("home.services.inspection.title"),
      desc: t("home.services.inspection.desc")
    },
    {
      icon: Landmark,
      title: t("home.services.transaction.title"),
      desc: t("home.services.transaction.desc")
    },
    {
      icon: Ship,
      title: t("home.services.logistics.title"),
      desc: t("home.services.logistics.desc")
    },
    {
      icon: BarChart3,
      title: t("home.services.risk.title"),
      desc: t("home.services.risk.desc")
    }
  ];

  const carouselImages = [mining1, mining2, mining3, mining4, china1, china2, china3, china4, china5, goldImg, miningImg, securityImg, transactionImg];

  return (
    <div className="flex flex-col">
      <SEO {...seoConfig.home} />
      {/* Hero Section with Slider */}
      <section className="relative h-[50vh] md:h-[85vh] flex items-center pt-12 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroSlides[currentSlide].image} 
              className="w-full h-full object-cover" 
              alt="Arrière-plan logistique sécurisée" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="mb-6 overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest"
              >
                <Globe className="w-3 h-3" />
                {t("home.hero.badge")}
              </motion.div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-7xl font-display font-bold text-white mb-4 md:mb-8 leading-[1.1] tracking-tight">
              {heroSlides[currentSlide].title.split('&')[0]}
              {heroSlides[currentSlide].title.includes('&') && (
                <>
                  <br className="hidden sm:block"/>
                  <span className="text-primary">&</span> {heroSlides[currentSlide].title.split('&')[1]}
                </>
              )}
            </h1>
            
            <p className="text-sm md:text-xl text-white/70 mb-6 md:mb-12 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-4 md:pl-8">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 md:h-16 px-6 md:px-10 text-sm md:text-lg rounded-full shadow-2xl shadow-primary/30 group w-full sm:w-auto" asChild>
                <Link href="/services">
                  {t("home.hero.cta1")}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-11 md:h-16 px-6 md:px-10 text-sm md:text-lg rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md w-full sm:w-auto" asChild>
                <Link href="/contact">{t("home.hero.cta2")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-1/4 right-10 z-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-6 rounded-3xl border-white/10 backdrop-blur-xl"
          >
            <ShieldCheck className="w-10 h-10 text-primary mb-2" />
            <div className="text-white font-bold text-sm">{t("home.hero.security")}</div>
            <div className="text-white/40 text-[10px] uppercase tracking-tighter">{t("home.hero.certification")}</div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === i ? "w-8 bg-primary" : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 1. Message de Bienvenue */}
      <section className="py-8 md:py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto text-center max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-block">
              <Badge className="whitespace-nowrap inline-flex items-center rounded-full border transition-all hover:scale-105 shadow-lg shadow-primary/20 bg-primary/10 text-primary border-primary/20 px-8 py-3 text-lg font-bold tracking-tight">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("home.welcome.badge")}
              </Badge>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl md:text-5xl font-display font-bold text-foreground leading-tight">
                {t("home.welcome.title1")} <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                  {t("home.welcome.title2")}
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-sm md:text-2xl text-foreground/90 font-medium leading-relaxed">
                  {t("home.welcome.text1")}
                </p>
                <p className="text-xs md:text-xl text-muted-foreground leading-relaxed">
                  {t("home.welcome.text2")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t("home.welcome.tag1")}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t("home.welcome.tag2")}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t("home.welcome.tag3")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary dark:bg-white/5 border border-border dark:border-white/10 text-primary uppercase tracking-wider font-bold text-[24px] pl-[19px] pr-[19px]">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {t("home.mission.badge")}
              </div>
              
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              {t("home.mission.title")} <span className="text-primary italic">{t("home.mission.titleHighlight")}</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("home.mission.text1")} <span className="text-foreground font-medium">{t("home.mission.text1Highlight")}</span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4 md:pl-6 py-2 bg-primary/5 rounded-r-2xl">
                {t("home.mission.text2")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 md:px-10 h-12 md:h-14 text-base md:text-lg hover-elevate shadow-xl shadow-primary/20 w-full sm:w-auto" asChild>
                <Link href="/services">{t("home.mission.cta1")}</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 md:px-10 h-12 md:h-14 text-base md:text-lg border-white/10 hover:bg-white/5 w-full sm:w-auto" asChild>
                <Link href="/blog/5">{t("home.mission.cta2")}</Link>
              </Button>
            </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-blue-500/20 blur-2xl rounded-[3rem] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-card">
                  <motion.img 
                    src={securityImg} 
                    alt="Supervision et sécurité" 
                    className="w-full h-full object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-1000"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8 right-8 p-6 glass-card border-white/10 rounded-2xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold">{t("home.mission.activeSecure")}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-tighter">{t("home.mission.assetProtection")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Nos services principaux */}
      <section className="py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.03),transparent_50%)]"></div>
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeading 
            title={t("home.services.title")} 
            subtitle={t("home.services.subtitle")} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {mainServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                className="group relative"
              >
                {/* Decorative background element */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative glass-card p-10 rounded-3xl border-white/5 group-hover:border-primary/30 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <service.icon className="w-24 h-24" />
                  </div>

                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-500">
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    <span>{t("home.services.learnMore")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pourquoi SecureFlow existe */}
      <section className="py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                <ShieldAlert className="w-4 h-4" />
                {t("home.why.badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.1]">
                {t("home.why.title")} <br/><span className="text-primary">{t("home.why.titleHighlight")}</span> {t("home.why.titleEnd")}
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t("home.why.subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative group">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                
                <div className="relative glass-card p-10 md:p-16 rounded-[3rem] border-white/10 shadow-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  <Quote className="absolute -top-6 -left-6 w-32 h-32 text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                  
                  <div className="relative space-y-10">
                    <p className="text-2xl md:text-3xl text-foreground font-display italic leading-snug tracking-tight">
                      {t("home.why.quote")} <span className="text-primary not-italic font-bold underline decoration-primary/30 underline-offset-8">{t("home.why.quoteHighlight")}</span> {t("home.why.quoteEnd")}
                    </p>
                    
                    <div className="flex items-start gap-6 pt-4 border-t border-border">
                      <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-8 h-8" />
                      </div>
                      <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                        {t("home.why.conclusion1")} <span className="text-foreground font-bold">{t("home.why.conclusion1Highlight")}</span> {t("home.why.conclusion2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section - Compact */}
      <section className="py-12 bg-black/40 overflow-hidden relative">
        <div className="container px-4 mx-auto mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          <motion.div 
            className="flex gap-4"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...carouselImages, ...carouselImages].map((img, i) => (
              <div key={i} className="shrink-0 w-48 h-32 md:w-64 md:h-44 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group">
                <img 
                  src={img} 
                  alt={`SecureFlow operations ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.08),transparent_70%)] pointer-events-none"></div>
        <div className="container px-4 mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full opacity-50"></div>
                <img 
                  src={partnerPhoto} 
                  alt={t("home.founder.name")}
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-8">
              <Quote className="w-12 h-12 mx-auto text-primary/30" />
              <p className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight italic max-w-3xl mx-auto">
                {t("home.founder.quote")}
              </p>
              <div className="space-y-2">
                <p className="text-xl font-bold text-primary">{t("home.founder.name")}</p>
                <p className="text-muted-foreground uppercase tracking-widest text-sm">{t("home.founder.title")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
