import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Building, Globe, Calendar } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  company: string;
  email: string;
  country: string;
  transactionType: string;
  message: string;
  createdAt: string;
}

export default function AdminContacts() {
  const [, setLocation] = useLocation();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLocation("/admin/login");
      return;
    }
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/contacts", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 401) {
        setLocation("/admin/login");
        return;
      }
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setIsLoading(false);
    }
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
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-foreground">Messages de Contact</h1>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucun message de contact pour le moment</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <Card 
                key={contact.id} 
                className="hover-elevate cursor-pointer"
                onClick={() => setSelectedContact(contact)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{contact.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {contact.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {contact.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {contact.country}
                        </span>
                      </div>
                      <p className="text-sm bg-primary/10 text-primary px-2 py-1 rounded inline-block">
                        {contact.transactionType}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(contact.createdAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 line-clamp-2">{contact.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedContact && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedContact(null)}>
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle>{selectedContact.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Entreprise:</span>
                    <p className="font-medium">{selectedContact.company}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium">{selectedContact.email}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Pays:</span>
                    <p className="font-medium">{selectedContact.country}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type de transaction:</span>
                    <p className="font-medium">{selectedContact.transactionType}</p>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Message:</span>
                  <p className="mt-2 p-4 bg-secondary rounded-lg">{selectedContact.message}</p>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs text-muted-foreground">
                    Reçu le {new Date(selectedContact.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                  <a href={`mailto:${selectedContact.email}`}>
                    <Button>
                      <Mail className="w-4 h-4 mr-2" />
                      Répondre par email
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
