import { useState, useEffect } from "react";
import { Bell, CheckCircle2, Loader2, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez nos dernières actualités par email.",
      });
    },
    onError: (error: any) => {
      if (error.message?.includes("409") || error.message?.includes("déjà abonné")) {
        toast({
          title: "Déjà abonné",
          description: "Cette adresse email est déjà inscrite à notre newsletter.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Bell className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-foreground font-bold text-lg">Newsletter</h3>
          <p className="text-muted-foreground text-sm">Restez informé de nos actualités</p>
        </div>
      </div>

      {isSubscribed ? (
        <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          <p className="text-foreground text-sm font-medium">
            Merci ! Vous êtes maintenant abonné.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary dark:bg-white/5 border-border dark:border-white/10 rounded-xl h-12"
            required
            data-testid="input-newsletter-email"
          />
          <Button 
            type="submit" 
            className="w-full rounded-xl h-12"
            disabled={subscribeMutation.isPending}
            data-testid="button-newsletter-subscribe"
          >
            {subscribeMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Inscription...
              </>
            ) : (
              <>
                <Bell className="w-4 h-4 mr-2" />
                S'abonner à la newsletter
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

export function FloatingNewsletterBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez nos dernières actualités par email.",
      });
      setTimeout(() => setIsOpen(false), 2000);
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        data-testid="button-floating-newsletter"
      >
        <Bell className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 glass-card p-6 rounded-2xl border border-white/10 shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary" />
              <h3 className="text-foreground font-bold">Newsletter</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              &times;
            </button>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Recevez nos derniers articles et actualités directement dans votre boîte mail.
          </p>

          {isSubscribed ? (
            <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <p className="text-foreground text-sm">Merci pour votre inscription !</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary dark:bg-white/5 border-border dark:border-white/10 rounded-xl"
                required
                data-testid="input-floating-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full rounded-xl"
                disabled={subscribeMutation.isPending}
                data-testid="button-floating-newsletter-subscribe"
              >
                {subscribeMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "S'abonner"
                )}
              </Button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
