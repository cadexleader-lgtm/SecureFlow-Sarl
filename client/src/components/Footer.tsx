import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@assets/Design_sans_titre_20260119_043520_0000_1768870231497.png";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 pt-10 pb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_70%)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-6 pb-4 border-b border-white/10 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
          <span className="font-semibold uppercase tracking-wider">{t("footer.partners")}:</span>
          <span className="text-white/60">FEXIM FINANCE</span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">BTTTC</span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">AFRI-LOGISTIQUE</span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">GLOBAL TRADING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center cursor-pointer group" data-testid="link-footer-logo">
              <img src={logo} alt="SECUREFLOW" className="h-12 w-auto transition-transform group-hover:scale-105 rounded-lg" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed" data-testid="text-footer-description">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/eric-brunnel-quenum-8b99703a4" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" data-testid="link-footer-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" data-testid="link-footer-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" data-testid="link-footer-facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{t("footer.expertise")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-logistics">{t("footer.logisticsSecurity")}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-risk">{t("footer.riskManagement")}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors" data-testid="link-footer-inspection">{t("footer.onSiteInspection")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{t("footer.navigation")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors" data-testid="link-footer-about">{t("footer.about")}</Link></li>
              <li><Link href="/sectors" className="hover:text-white transition-colors" data-testid="link-footer-sectors">{t("footer.sectors")}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors" data-testid="link-footer-news">{t("footer.news")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2" data-testid="text-footer-location">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{t("footer.location")}</span>
              </li>
              <li className="flex items-center gap-2" data-testid="text-footer-email">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>infosecureflowco@gmail.com</span>
              </li>
              <li className="flex items-center gap-2" data-testid="text-footer-phone">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+229 50636363</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p data-testid="text-footer-copyright">© {new Date().getFullYear()} SecureFlow International. {t("footer.copyright")}</p>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-white transition-colors" data-testid="link-footer-legal">{t("footer.legal")}</Link>
            <Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact-bottom">{t("footer.contact")}</Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex justify-center items-center">
          <a 
            href="https://webtrust.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[10px] text-gray-500 hover:text-gray-300 transition-all"
            data-testid="link-webtrust-signature"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity">{t("footer.madeWith")}</span>
            <span className="font-semibold text-primary/70 group-hover:text-primary transition-colors tracking-wider">WebTrust</span>
            <svg className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
