import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { ShieldCheck, Search, Ship, FileCheck, Landmark, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import verificationImg from "@assets/stock_images/international_trade__1311510f.jpg";
import logistiqueImg from "@assets/stock_images/professional_cargo_i_20329aee.jpg";
import securiteImg from "@assets/stock_images/secure_high_value_tr_1b60de34.jpg";
import minesImg from "@assets/stock_images/mining_project_infra_8026ebfd.jpg";
import risqueImg from "@assets/stock_images/modern_security_audi_4d6abb64.jpg";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "verification",
      icon: Search,
      image: verificationImg,
      title: t("services.verification.title"),
      desc: t("services.verification.desc"),
      features: [
        t("services.verification.f1"),
        t("services.verification.f2"),
        t("services.verification.f3"),
        t("services.verification.f4")
      ]
    },
    {
      id: "inspection",
      icon: FileCheck,
      image: risqueImg,
      title: t("services.inspection.title"),
      desc: t("services.inspection.desc"),
      features: [
        t("services.inspection.f1"),
        t("services.inspection.f2"),
        t("services.inspection.f3"),
        t("services.inspection.f4")
      ]
    },
    {
      id: "security",
      icon: Landmark,
      image: securiteImg,
      title: t("services.security.title"),
      desc: t("services.security.desc"),
      features: [
        t("services.security.f1"),
        t("services.security.f2"),
        t("services.security.f3"),
        t("services.security.f4")
      ]
    },
    {
      id: "logistics",
      icon: Ship,
      image: logistiqueImg,
      title: t("services.logistics.title"),
      desc: t("services.logistics.desc"),
      features: [
        t("services.logistics.f1"),
        t("services.logistics.f2"),
        t("services.logistics.f3"),
        t("services.logistics.f4")
      ]
    },
    {
      id: "risks",
      icon: BarChart3,
      image: minesImg,
      title: t("services.risks.title"),
      desc: t("services.risks.desc"),
      features: [
        t("services.risks.f1"),
        t("services.risks.f2"),
        t("services.risks.f3"),
        t("services.risks.f4")
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO {...seoConfig.services} />
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title={t("services.hero.title")} 
          subtitle={t("services.hero.subtitle")} 
        />
        
        <div className="space-y-24 mt-16">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="flex-1 w-full space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-display font-bold text-foreground">{service.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80 p-3 rounded-xl bg-secondary dark:bg-white/5 border border-border dark:border-white/5">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full px-8 group">
                      {t("services.cta")} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
