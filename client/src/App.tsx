import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, lazy, Suspense } from "react";

// Components
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LinkedinButton } from "@/components/LinkedinButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNewsletterBell } from "@/components/NewsletterSubscription";
import { MotionConfig } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Founder from "@/pages/Founder";
import Services from "@/pages/Services";
import Sectors from "@/pages/Sectors";
import Blog from "@/pages/Blog";
// Articles du blog : gros fichier, chargé seulement quand on ouvre un article
export const loadBlogPost = () => import("@/pages/BlogPost");
const BlogPost = lazy(loadBlogPost);
const BlogArticlePage = lazy(() => import("@/pages/BlogArticlePage"));
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import Group from "@/pages/Group";
import NotFound from "@/pages/not-found";

// Admin : chargé à part, jamais téléchargé par les visiteurs du site public
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminContacts = lazy(() => import("@/pages/AdminContacts"));
const AdminSubscribers = lazy(() => import("@/pages/AdminSubscribers"));
const AdminArticles = lazy(() => import("@/pages/AdminArticles"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PublicRouter() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navigation />
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen" />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/founder" component={Founder} />
          <Route path="/services" component={Services} />
          <Route path="/sectors" component={Sectors} />
          <Route path="/group" component={Group} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/article/:slug" component={BlogArticlePage} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
      <LinkedinButton />
      <FloatingNewsletterBell />
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  
  // Admin routes without Navigation/Footer
  if (location.startsWith("/admin")) {
    return (
      <div className="font-sans bg-background text-foreground selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Suspense fallback={null}>
        <Switch>
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/contacts" component={AdminContacts} />
          <Route path="/admin/subscribers" component={AdminSubscribers} />
          <Route path="/admin/articles" component={AdminArticles} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
        </Suspense>
      </div>
    );
  }

  return <PublicRouter />;
}

interface AppProps {
  /** Rendu serveur (prérendu SEO) : URL à afficher et contexte où récupérer les balises <head>. */
  ssrPath?: string;
  helmetContext?: object;
}

function App({ ssrPath, helmetContext }: AppProps = {}) {
  return (
    <MotionConfig reducedMotion="always">
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <ThemeProvider>
              <TooltipProvider>
                <Toaster />
                <WouterRouter ssrPath={ssrPath}>
                  <Router />
                </WouterRouter>
              </TooltipProvider>
            </ThemeProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
