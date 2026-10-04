import { createContext, useContext, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
// Les deux langues sont chargées d'emblée : le HTML prérendu de chaque URL
// (/... en français, /en/... en anglais) doit contenir le vrai texte.
import fr from "../translations/fr";
import en from "../translations/en";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Préfixe d'URL de la langue courante ("" ou "/en"). */
  prefix: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const DICTS: Record<Language, Record<string, string>> = { fr, en };

/** La langue est portée par l'URL : /en/... = anglais, tout le reste = français. */
export function languageFromPath(path: string): Language {
  return path === "/en" || path.startsWith("/en/") ? "en" : "fr";
}

/** Même page dans l'autre langue (ex. /services ⇄ /en/services). */
export function switchLanguagePath(path: string, target: Language): string {
  const base = path.replace(/^\/en(?=\/|$)/, "") || "/";
  if (target === "fr") return base;
  return base === "/" ? "/en" : `/en${base}`;
}

export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  const [location, navigate] = useLocation();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => DICTS[language][key] || fr[key] || key;
  const setLanguage = (lang: Language) => {
    if (lang !== language) navigate(switchLanguagePath(location, lang));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, prefix: language === "en" ? "/en" : "" }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Lien vers l'accueil de la langue courante ("/" ou "/en", sans barre finale). */
export function useHomeHref() {
  return useLanguage().language === "en" ? "~/en" : "/";
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
