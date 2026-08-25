import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  FileCheck, 
  Eye, 
  AlertCircle, 
  Scale, 
  Lock,
  CheckCircle2,
  XCircle
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Legal() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO {...seoConfig.legal} />
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <SectionHeading
            title={t("legal.hero.title")}
            subtitle={t("legal.hero.badge")}
          />
          <p className="text-muted-foreground text-lg -mt-8">
            {t("legal.hero.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-12"
        >
          <section className="glass-card p-8 rounded-2xl border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.riskIdentification.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.riskIdentification.description")}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.operational.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.operational.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <Scale className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.legal.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.legal.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.logistics.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.logistics.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.financial.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.financial.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <FileCheck className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.documentary.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.documentary.desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary dark:bg-white/5 rounded-xl">
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-foreground font-medium">{t("legal.riskIdentification.fakePartners.title")}</h4>
                  <p className="text-sm text-muted-foreground">{t("legal.riskIdentification.fakePartners.desc")}</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6 italic">
              {t("legal.riskIdentification.note")}
            </p>
          </section>

          <section className="glass-card p-8 rounded-2xl border-blue-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.riskAnalysis.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.riskAnalysis.description")}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.riskAnalysis.item1")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.riskAnalysis.item2")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.riskAnalysis.item3")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.riskAnalysis.item4")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.riskAnalysis.item5")}</span>
              </li>
            </ul>
            
            <p className="text-sm text-muted-foreground mt-6 italic">
              {t("legal.riskAnalysis.note")}
            </p>
          </section>

          <section className="glass-card p-8 rounded-2xl border-green-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.prevention.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.prevention.description")}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.prevention.item1")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.prevention.item2")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.prevention.item3")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.prevention.item4")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{t("legal.prevention.item5")}</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <p className="text-sm text-green-300">
                <strong>{t("legal.objective")} :</strong> {t("legal.prevention.objective")}
              </p>
            </div>
          </section>

          <section className="glass-card p-8 rounded-2xl border-cyan-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.supervision.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.supervision.description")}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{t("legal.supervision.item1")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{t("legal.supervision.item2")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{t("legal.supervision.item3")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>{t("legal.supervision.item4")}</span>
              </li>
            </ul>
            
            <p className="text-sm text-muted-foreground mt-6 italic">
              {t("legal.supervision.note")}
            </p>
          </section>

          <section className="glass-card p-8 rounded-2xl border-amber-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.incidents.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.incidents.description")}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{t("legal.incidents.item1")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{t("legal.incidents.item2")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{t("legal.incidents.item3")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{t("legal.incidents.item4")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{t("legal.incidents.item5")}</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <p className="text-sm text-amber-300">
                <strong>{t("legal.note")} :</strong> {t("legal.incidents.note")}
              </p>
            </div>
          </section>

          <section className="glass-card p-8 rounded-2xl border-purple-500/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.compliance.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.compliance.description")}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{t("legal.compliance.item1")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{t("legal.compliance.item2")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{t("legal.compliance.item3")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{t("legal.compliance.item4")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{t("legal.compliance.item5")}</span>
              </li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-2xl border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  {t("legal.limits.title")}
                </h2>
                <p className="text-muted-foreground">
                  {t("legal.limits.description")}
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{t("legal.limits.item1")}</strong>
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{t("legal.limits.item2")}</strong>
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{t("legal.limits.item3")}</strong>
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{t("legal.limits.item4")}</strong>
                </p>
              </div>
            </div>
          </section>

          <section className="text-center py-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground">
              {t("legal.contactInfo")}{" "}
              <a href="mailto:infosecureflowco@gmail.com" className="text-primary hover:underline">
                infosecureflowco@gmail.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
