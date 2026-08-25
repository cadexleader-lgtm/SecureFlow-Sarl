import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Mail, 
  LogOut, 
  Settings,
  TrendingUp,
  Bell
} from "lucide-react";

interface Stats {
  totalContacts: number;
  totalSubscribers: number;
  totalArticles: number;
  publishedArticles: number;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const username = localStorage.getItem("admin_username");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLocation("/admin/login");
      return;
    }
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/stats", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 401) {
        handleLogout();
        return;
      }
      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    const token = localStorage.getItem("admin_token");
    fetch("/api/admin/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_username");
    setLocation("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Administration</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Bonjour, {username}</span>
            <Button variant="outline" size="sm" onClick={handleLogout} data-testid="button-logout">
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/admin/articles")} data-testid="card-articles">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Articles</CardTitle>
              <FileText className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalArticles || 0}</div>
              <p className="text-xs text-muted-foreground">{stats?.publishedArticles || 0} publiés</p>
            </CardContent>
          </Card>

          <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/admin/subscribers")} data-testid="card-subscribers">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Abonnés Newsletter</CardTitle>
              <Bell className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalSubscribers || 0}</div>
              <p className="text-xs text-muted-foreground">inscrits</p>
            </CardContent>
          </Card>

          <Card className="hover-elevate cursor-pointer" onClick={() => setLocation("/admin/contacts")} data-testid="card-contacts">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Messages Contact</CardTitle>
              <Mail className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalContacts || 0}</div>
              <p className="text-xs text-muted-foreground">demandes reçues</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Activité</CardTitle>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">Actif</div>
              <p className="text-xs text-muted-foreground">Site en ligne</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-lg font-bold mb-4">Accès rapide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/admin/articles">
            <Card className="hover-elevate cursor-pointer h-full">
              <CardContent className="flex items-center gap-4 p-6">
                <FileText className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="font-bold">Gérer les Articles</h3>
                  <p className="text-sm text-muted-foreground">Ajouter, modifier ou supprimer des articles</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/subscribers">
            <Card className="hover-elevate cursor-pointer h-full">
              <CardContent className="flex items-center gap-4 p-6">
                <Users className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="font-bold">Abonnés Newsletter</h3>
                  <p className="text-sm text-muted-foreground">Voir la liste des abonnés</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/contacts">
            <Card className="hover-elevate cursor-pointer h-full">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="font-bold">Messages de Contact</h3>
                  <p className="text-sm text-muted-foreground">Consulter les demandes</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Retour au site
          </Link>
        </div>
      </div>
    </div>
  );
}
