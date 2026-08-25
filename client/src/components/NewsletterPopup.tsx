import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Bell, Briefcase, Globe, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { apiRequest } from "@/lib/queryClient";

export function NewsletterPopup() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletter_popup_dismissed");
    const subscribed = localStorage.getItem("newsletter_subscribed");
    
    if (!dismissed && !subscribed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      await apiRequest("POST", "/api/newsletter/subscribe", { email });
      setIsSuccess(true);
      localStorage.setItem("newsletter_subscribed", "true");
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (err: any) {
      if (err.message?.includes("409") || err.message?.includes("déjà")) {
        setError(t("popup.newsletter.alreadySubscribed"));
      } else {
        setError(t("popup.newsletter.error"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-[#0d0d14] to-[#1a1a28] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary"></div>
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          data-testid="button-close-newsletter-popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Bell className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">
                !
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">{t("popup.newsletter.successTitle")}</h3>
              <p className="text-gray-300">{t("popup.newsletter.successMessage")}</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
                {t("popup.newsletter.title")}
              </h2>
              
              <p className="text-gray-300 text-center mb-6">
                {t("popup.newsletter.subtitle")}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                  <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-300">{t("popup.newsletter.benefit1")}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                  <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-300">{t("popup.newsletter.benefit2")}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-300">{t("popup.newsletter.benefit3")}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder={t("popup.newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                  required
                  data-testid="input-popup-email"
                />
                
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold"
                  disabled={isLoading}
                  data-testid="button-popup-subscribe"
                >
                  {isLoading ? t("popup.newsletter.loading") : t("popup.newsletter.subscribe")}
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                {t("popup.newsletter.privacy")}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
