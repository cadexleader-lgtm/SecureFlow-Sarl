import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  variant?: "desktop" | "mobile";
}

export function LanguageToggle({ variant = "desktop" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      data-testid={`button-language-toggle-${variant}`}
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium uppercase">{language === "fr" ? "EN" : "FR"}</span>
    </Button>
  );
}
