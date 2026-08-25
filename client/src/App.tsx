import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Components
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LinkedinButton } from "@/components/LinkedinButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNewsletterBell } from "@/components/NewsletterSubscription";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Founder from "@/pages/Founder";
import Services from "@/pages/Services";
import Sectors from "@/pages/Sectors";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogArticlePage from "@/pages/BlogArticlePage";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/not-found";

// Admin Pages
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminContacts from "@/pages/AdminContacts";
import AdminSubscribers from "@/pages/AdminSubscribers";
import AdminArticles from "@/pages/AdminArticles";

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
        <Switch>
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/contacts" component={AdminContacts} />
          <Route path="/admin/subscribers" component={AdminSubscribers} />
          <Route path="/admin/articles" component={AdminArticles} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    );
  }

  return <PublicRouter />;
}

function App() {
  return (
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
  );
}

export default App;
