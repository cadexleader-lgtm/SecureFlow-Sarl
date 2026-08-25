import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Mail, Calendar, Download } from "lucide-react";

interface Subscriber {
  id: number;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

export default function AdminSubscribers() {
  const [, setLocation] = useLocation();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLocation("/admin/login");
      return;
    }
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/subscribers", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 401) {
        setLocation("/admin/login");
        return;
      }
      const data = await response.json();
      setSubscribers(data);
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const exportCSV = () => {
    const csv = [
      "Email,Statut,Date d'inscription",
      ...subscribers.map(s => 
        `${s.email},${s.isActive ? 'Actif' : 'Inactif'},${new Date(s.subscribedAt).toLocaleDateString('fr-FR')}`
      )
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
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
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Abonnés Newsletter</h1>
          </div>
          {subscribers.length > 0 && (
            <Button variant="outline" size="sm" onClick={exportCSV}>
              <Download className="w-4 h-4 mr-2" />
              Exporter CSV
            </Button>
          )}
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>{subscribers.length}</strong> abonné{subscribers.length > 1 ? 's' : ''} à la newsletter
          </p>
        </div>

        {subscribers.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucun abonné pour le moment</p>
            </CardContent>
          </Card>
        ) : (
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Statut</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date d'inscription</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-t border-border hover:bg-secondary/50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{subscriber.email}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded ${subscriber.isActive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {subscriber.isActive ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(subscriber.subscribedAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
