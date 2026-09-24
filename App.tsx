import { Switch, Route, useLocation } from "wouter";
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
// Chargées à la demande : allège le premier chargement de la page d'accueil
const About = lazy(() => import("@/pages/About"));
const Founder = lazy(() => import("@/pages/Founder"));
const Services = lazy(() => import("@/pages/Services"));
const Sectors = lazy(() => import("@/pages/Sectors"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const BlogArticlePage = lazy(() => import("@/pages/BlogArticlePage"));
const Contact = lazy(() => import("@/pages/Contact"));
const Legal = lazy(() => import("@/pages/Legal"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Admin Pages
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminContacts = lazy(() => import("@/pages/AdminContacts"));
const AdminSubscribers = lazy(() => import("@/pages/AdminSubscribers"));
const AdminArticles = lazy(() => import("@/pages/AdminArticles"));

function PageFallback() {
  return <div className="min-h-[60vh]" aria-busy="true" />;
}

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
        <Suspense fallback={<PageFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/founder" component={Founder} />
          <Route path="/services" component={Services} />
          <Route path="/sectors" component={Sectors} />
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
        <Suspense fallback={<PageFallback />}>
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

function App() {
  return (
    <MotionConfig reducedMotion="always">
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <ThemeProvider>
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </ThemeProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </MotionConfig>
  );
}

export default App;
