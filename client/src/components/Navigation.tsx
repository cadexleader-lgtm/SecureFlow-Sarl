import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@assets/Design_sans_titre_20260119_043520_0000_1768870231497.png";
import { SearchDialog } from "./SearchDialog";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/sectors", label: t("nav.sectors") },
    { href: "/founder", label: t("nav.founder") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-border",
        isScrolled 
          ? "glass-nav py-1 shadow-lg backdrop-blur-lg bg-card dark:bg-[#1a1a1f]" 
          : "bg-card/95 dark:bg-[#1a1a1f]/95 py-1.5 md:py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group cursor-pointer shrink-0">
            <div className={cn(
              "relative overflow-hidden transition-all duration-500 group-hover:scale-105 flex items-center justify-center rounded-xl",
              isScrolled ? "h-8 md:h-9" : "h-9 md:h-10"
            )}>
              <img 
                src={logo} 
                alt="SECUREFLOW Logo" 
                className="h-full w-auto object-contain rounded-xl" 
              />
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
            <div className="flex items-center bg-secondary/50 dark:bg-white/5 rounded-full px-2 py-1 border border-border dark:border-white/10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium transition-all px-4 py-1.5 rounded-full whitespace-nowrap",
                    location === link.href 
                      ? "text-primary-foreground bg-primary shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary dark:hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-colors"
              data-testid="button-search-desktop"
              aria-label="Rechercher"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Button + Toggles - Right */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-1.5 rounded-full text-xs font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95">
                {t("nav.contactUs")}
              </button>
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-1 ml-auto">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground p-2 hover:bg-white/10 dark:hover:bg-white/10 rounded-lg transition-colors"
              data-testid="button-search-mobile"
              aria-label="Rechercher"
            >
              <Search className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <LanguageToggle variant="mobile" />
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card/95 dark:bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium p-2 rounded-md hover:bg-secondary dark:hover:bg-white/5",
                location === link.href ? "text-primary bg-secondary dark:bg-white/5" : "text-muted-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
}
