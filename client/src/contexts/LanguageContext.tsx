import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// Le français est la langue par défaut : chargé immédiatement pour que la première
// page affichée (et le HTML prérendu lu par les moteurs de recherche) contienne
// le vrai texte, jamais les clés de traduction.
import fr from "../translations/fr";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const STORAGE_KEY = "secureflow-language";

function readSavedLanguage(): Language {
  if (typeof window === "undefined") return "fr";
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readSavedLanguage);
  const [translations, setTranslations] = useState<Record<string, string>>(fr);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* stockage indisponible : on garde la langue en mémoire */
    }
    document.documentElement.lang = language;
    if (language === "fr") {
      setTranslations(fr);
      return;
    }
    let cancelled = false;
    import("../translations/en").then((module) => {
      if (!cancelled) setTranslations(module.default);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  const t = (key: string): string => translations[key] || fr[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
