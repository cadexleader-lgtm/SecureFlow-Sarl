import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Building2, Users, Shield, Globe, Mail, Scale, BookOpen, Briefcase } from "lucide-react";
import { Link } from "wouter";

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
  icon: typeof Search;
}

const searchData: SearchItem[] = [
  {
    title: "Accueil",
    description: "Page d'accueil SECUREFLOW - Sécurisation du commerce international",
    href: "/",
    category: "Pages",
    keywords: ["accueil", "home", "secureflow", "commerce", "international", "sécurité"],
    icon: Globe
  },
  {
    title: "À Propos",
    description: "Découvrez notre mission, notre vision et notre équipe d'experts",
    href: "/about",
    category: "Pages",
    keywords: ["about", "propos", "mission", "vision", "équipe", "histoire", "entreprise"],
    icon: Users
  },
  {
    title: "Services",
    description: "Nos solutions de sécurisation : vérification, inspection, transactions, logistique",
    href: "/services",
    category: "Pages",
    keywords: ["services", "vérification", "inspection", "transactions", "logistique", "risques", "due diligence"],
    icon: Shield
  },
  {
    title: "Secteurs d'Activité",
    description: "Import-Export, Énergie, Mines, BTP, Commerce International",
    href: "/sectors",
    category: "Pages",
    keywords: ["secteurs", "import", "export", "énergie", "mines", "btp", "commerce", "agriculture"],
    icon: Building2
  },
  {
    title: "Le Fondateur",
    description: "Éric Brunnel QUENUM - Fondateur et Directeur Général de SECUREFLOW",
    href: "/founder",
    category: "Pages",
    keywords: ["fondateur", "éric", "brunel", "quenum", "directeur", "général", "ceo"],
    icon: Users
  },
  {
    title: "Blog & Actualités",
    description: "Articles, analyses et actualités du commerce international",
    href: "/blog",
    category: "Pages",
    keywords: ["blog", "actualités", "articles", "analyses", "news"],
    icon: BookOpen
  },
  {
    title: "Contact",
    description: "Contactez-nous : infosecureflowco@gmail.com",
    href: "/contact",
    category: "Pages",
    keywords: ["contact", "email", "téléphone", "adresse", "formulaire", "message"],
    icon: Mail
  },
  {
    title: "Mentions Légales",
    description: "Conditions d'utilisation et informations juridiques",
    href: "/legal",
    category: "Pages",
    keywords: ["mentions", "légales", "juridique", "conditions", "utilisation", "responsabilité"],
    icon: Scale
  },
  {
    title: "Vérification des Fournisseurs",
    description: "Due diligence approfondie sur vos partenaires commerciaux",
    href: "/services",
    category: "Services",
    keywords: ["vérification", "fournisseurs", "due diligence", "partenaires", "contrôle", "audit"],
    icon: Shield
  },
  {
    title: "Inspection des Marchandises",
    description: "Contrôle qualité et conformité avant expédition",
    href: "/services",
    category: "Services",
    keywords: ["inspection", "marchandises", "qualité", "conformité", "contrôle", "expédition"],
    icon: Shield
  },
  {
    title: "Sécurisation des Transactions",
    description: "Protection financière : lettres de crédit, escrow, garanties",
    href: "/services",
    category: "Services",
    keywords: ["transactions", "sécurisation", "paiement", "escrow", "lettre de crédit", "garantie", "financier"],
    icon: Shield
  },
  {
    title: "Supervision Logistique",
    description: "Suivi et sécurisation de la chaîne d'approvisionnement",
    href: "/services",
    category: "Services",
    keywords: ["logistique", "supervision", "transport", "chaîne", "approvisionnement", "suivi", "tracking"],
    icon: Shield
  },
  {
    title: "Gestion des Risques",
    description: "Identification et mitigation des risques commerciaux",
    href: "/services",
    category: "Services",
    keywords: ["risques", "gestion", "mitigation", "analyse", "évaluation", "prévention"],
    icon: Shield
  },
  {
    title: "Secteur Import-Export",
    description: "Sécurisation des opérations d'importation et d'exportation",
    href: "/sectors",
    category: "Secteurs",
    keywords: ["import", "export", "international", "douanes", "commerce"],
    icon: Building2
  },
  {
    title: "Secteur Énergie & Pétrole",
    description: "Solutions pour le secteur énergétique et pétrolier",
    href: "/blog/8",
    category: "Secteurs",
    keywords: ["énergie", "pétrole", "gaz", "hydrocarbures", "raffinerie", "dubai", "uae"],
    icon: Building2
  },
  {
    title: "Secteur Mines & Ressources",
    description: "Sécurisation des opérations minières et des ressources naturelles",
    href: "/blog/9",
    category: "Secteurs",
    keywords: ["mines", "minéral", "or", "diamant", "cobalt", "lithium", "cuivre", "fer", "bauxite", "manganèse"],
    icon: Building2
  },
  {
    title: "Secteur Énergie & Électricité",
    description: "Sécurisation des projets énergétiques : centrales, réseaux, renouvelables",
    href: "/blog/10",
    category: "Secteurs",
    keywords: ["énergie", "électricité", "solaire", "éolien", "centrale", "transformateur", "turbine", "renouvelable", "power"],
    icon: Building2
  },
  {
    title: "Secteur Agriculture",
    description: "Solutions pour le commerce agricole : cacao, café, coton, karité",
    href: "/blog/7",
    category: "Secteurs",
    keywords: ["agriculture", "cacao", "café", "coton", "karité", "arachide", "caoutchouc", "produits agricoles"],
    icon: Building2
  },
  {
    title: "Secteur BTP & Infrastructure",
    description: "Sécurisation des projets de construction et d'infrastructure",
    href: "/sectors",
    category: "Secteurs",
    keywords: ["btp", "construction", "infrastructure", "travaux publics", "bâtiment"],
    icon: Building2
  },
  {
    title: "Secteur Santé & Équipements Médicaux",
    description: "Protection des importations médicales : médicaments, dispositifs, équipements hospitaliers",
    href: "/blog/11",
    category: "Secteurs",
    keywords: ["santé", "médical", "médicaments", "hôpital", "pharmaceutique", "équipements médicaux", "vaccins", "dispositifs", "laboratoire", "chirurgie", "médecine traditionnelle", "phytothérapie", "plantes médicinales"],
    icon: Building2
  },
  {
    title: "Secteur Aviation & Transport Spécialisé",
    description: "Sécurisation des flux aéronautiques : pièces détachées, fret aérien, hélicoptères",
    href: "/blog/12",
    category: "Secteurs",
    keywords: ["aviation", "aéronautique", "avion", "hélicoptère", "drone", "fret aérien", "pièces détachées", "transport", "EASA", "FAA"],
    icon: Building2
  },
  {
    title: "Secteur Infrastructures & Projets",
    description: "Sécurisation des grands projets : routes, ponts, ports, bâtiments, réseaux",
    href: "/blog/13",
    category: "Secteurs",
    keywords: ["infrastructure", "BTP", "construction", "projets", "routes", "ponts", "ports", "bâtiments", "génie civil", "chantier"],
    icon: Building2
  },
  {
    title: "Article : Commerce Chine-Afrique",
    description: "Guide complet sur la sécurisation du commerce entre la Chine et l'Afrique",
    href: "/blog/1",
    category: "Blog",
    keywords: ["chine", "afrique", "commerce", "import", "export", "asie", "fournisseurs chinois"],
    icon: FileText
  },
  {
    title: "Article : Financement Export-Import",
    description: "Solutions de financement pour le commerce international",
    href: "/blog/6",
    category: "Blog",
    keywords: ["financement", "export", "import", "crédit", "banque", "afreximbank", "boad"],
    icon: FileText
  },
  {
    title: "Partenariat Commercial",
    description: "Établir des partenariats sûrs et durables",
    href: "/about",
    category: "Services",
    keywords: ["partenariat", "commercial", "collaboration", "confiance", "durabilité"],
    icon: Briefcase
  },
  {
    title: "Bénin - Cotonou",
    description: "Notre siège au Port de Cotonou, Bénin",
    href: "/contact",
    category: "Localisation",
    keywords: ["bénin", "cotonou", "port", "afrique", "siège", "bureau"],
    icon: Globe
  },
  {
    title: "Dubaï - UAE",
    description: "Notre bureau régional aux Émirats Arabes Unis",
    href: "/contact",
    category: "Localisation",
    keywords: ["dubaï", "dubai", "uae", "émirats", "moyen-orient", "bureau"],
    icon: Globe
  }
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(" ").filter(Boolean);
    
    return searchData
      .map(item => {
        const titleMatch = searchTerms.some(term => 
          item.title.toLowerCase().includes(term)
        );
        const descMatch = searchTerms.some(term => 
          item.description.toLowerCase().includes(term)
        );
        const keywordMatch = searchTerms.some(term => 
          item.keywords.some(kw => kw.toLowerCase().includes(term))
        );
        
        let score = 0;
        if (titleMatch) score += 3;
        if (descMatch) score += 2;
        if (keywordMatch) score += 1;
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, typeof results> = {};
    results.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [results]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 bg-background/95 backdrop-blur-xl border-white/10">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Rechercher sur le site</DialogTitle>
        </DialogHeader>
        
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher pages, services, secteurs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base bg-white/5 border-white/10 focus:border-primary"
              autoFocus
              data-testid="input-search"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-6 items-center gap-1 rounded border border-white/10 bg-white/5 px-2 text-xs text-muted-foreground">
              ESC
            </kbd>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto border-t border-white/10">
          {query.trim() === "" ? (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-sm">Tapez pour rechercher sur le site</p>
              <p className="text-xs mt-2 opacity-70">Ctrl+K pour ouvrir rapidement</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              <p className="text-sm">Aucun résultat pour "{query}"</p>
              <p className="text-xs mt-2 opacity-70">Essayez d'autres termes de recherche</p>
            </div>
          ) : (
            <div className="py-2">
              {Object.entries(groupedResults).map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((item, idx) => (
                    <Link
                      key={`${item.href}-${idx}`}
                      href={item.href}
                      onClick={() => onOpenChange(false)}
                    >
                      <div 
                        className="flex items-start gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors"
                        data-testid={`search-result-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm truncate">{item.title}</p>
                          <p className="text-muted-foreground text-xs mt-0.5 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
          <span>{results.length} résultat{results.length !== 1 ? 's' : ''}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑↓</kbd>
              naviguer
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd>
              ouvrir
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
