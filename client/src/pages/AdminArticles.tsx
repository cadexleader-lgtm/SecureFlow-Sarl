import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Edit, Trash2, Eye, EyeOff, FileText, X, Upload, Image, Loader2, Send, Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string | null;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminArticles() {
  const [, setLocation] = useLocation();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState<number | null>(null);
  const [publishResult, setPublishResult] = useState<{ articleId: number; sent: number; failed: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    imageUrl: "",
    isPublished: false
  });

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      setLocation("/admin/login");
      return;
    }
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch("/api/admin/articles", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 401) {
        setLocation("/admin/login");
        return;
      }
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      console.error("Error fetching articles:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: editingArticle ? prev.slug : generateSlug(title)
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError("Veuillez sélectionner une image valide");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError("L'image ne doit pas dépasser 10 Mo");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      // Step 1: Request presigned URL
      const urlResponse = await fetch("/api/uploads/request-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: file.name,
          size: file.size,
          contentType: file.type,
        }),
      });

      if (!urlResponse.ok) {
        throw new Error("Impossible d'obtenir l'URL d'upload");
      }

      const { uploadURL, objectPath } = await urlResponse.json();

      // Step 2: Upload file directly to presigned URL
      const uploadResponse = await fetch(uploadURL, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!uploadResponse.ok) {
        throw new Error("Échec de l'upload de l'image");
      }

      // Set the object path as the image URL
      setFormData(prev => ({ ...prev, imageUrl: objectPath }));
    } catch (err) {
      console.error("Upload error:", err);
      setUploadError(err instanceof Error ? err.message : "Erreur lors de l'upload");
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");

    try {
      if (editingArticle) {
        await fetch(`/api/admin/articles/${editingArticle.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch("/api/admin/articles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });
      }
      
      setShowForm(false);
      setEditingArticle(null);
      resetForm();
      fetchArticles();
    } catch (err) {
      console.error("Error saving article:", err);
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      imageUrl: article.imageUrl || "",
      isPublished: article.isPublished
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
    
    const token = localStorage.getItem("admin_token");
    await fetch(`/api/admin/articles/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchArticles();
  };

  const togglePublish = async (article: Article) => {
    const token = localStorage.getItem("admin_token");
    await fetch(`/api/admin/articles/${article.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ isPublished: !article.isPublished })
    });
    fetchArticles();
  };

  const publishWithNewsletter = async (article: Article) => {
    if (article.isPublished) return;
    
    setIsPublishing(article.id);
    setPublishResult(null);
    
    try {
      const token = localStorage.getItem("admin_token");
      const response = await fetch(`/api/admin/articles/${article.id}/publish`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error("Erreur lors de la publication");
      }
      
      const data = await response.json();
      setPublishResult({
        articleId: article.id,
        sent: data.newsletter.sent,
        failed: data.newsletter.failed
      });
      
      fetchArticles();
    } catch (err) {
      console.error("Publish error:", err);
      alert("Erreur lors de la publication de l'article");
    } finally {
      setIsPublishing(null);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      imageUrl: "",
      isPublished: false
    });
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
            <h1 className="text-xl font-bold text-foreground">Gestion des Articles</h1>
          </div>
          <Button onClick={() => { resetForm(); setEditingArticle(null); setShowForm(true); }}>
            <Plus className="w-4 h-4 mr-2" />
            Nouvel Article
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {showForm && (
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{editingArticle ? "Modifier l'article" : "Nouvel article"}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => { setShowForm(false); setEditingArticle(null); }}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Titre</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug (URL)</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="Ex: Import-Export, Énergie, Mines..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Image de l'article (optionnel)</Label>
                  <div className="flex flex-col gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                      data-testid="input-image-upload"
                    />
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                        data-testid="button-upload-image"
                      >
                        {isUploading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Upload en cours...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Importer une image
                          </>
                        )}
                      </Button>
                      {formData.imageUrl && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setFormData(prev => ({ ...prev, imageUrl: "" }))}
                          className="text-destructive hover:text-destructive"
                          data-testid="button-remove-image"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Supprimer
                        </Button>
                      )}
                    </div>
                    
                    {uploadError && (
                      <p className="text-sm text-destructive">{uploadError}</p>
                    )}
                    
                    {formData.imageUrl && (
                      <div className="relative border border-border rounded-lg overflow-hidden max-w-xs">
                        <img
                          src={formData.imageUrl}
                          alt="Aperçu"
                          className="w-full h-32 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999'%3EImage%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 truncate">
                          <Image className="w-3 h-3 inline mr-1" />
                          Image chargée
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Extrait (résumé court)</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    rows={2}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Contenu complet</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    rows={10}
                    required
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="isPublished">Publier immédiatement</Label>
                </div>

                <div className="flex gap-2">
                  <Button type="submit">
                    {editingArticle ? "Mettre à jour" : "Créer l'article"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => { setShowForm(false); setEditingArticle(null); }}>
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {articles.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucun article pour le moment</p>
              <Button className="mt-4" onClick={() => setShowForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Créer votre premier article
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.id} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{article.title}</h3>
                        {article.isPublished ? (
                          <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded">Publié</span>
                        ) : (
                          <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">Brouillon</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                        <span>Créé le {new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {!article.isPublished && (
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => publishWithNewsletter(article)}
                          disabled={isPublishing === article.id}
                          title="Publier et envoyer aux abonnés"
                          data-testid={`button-publish-newsletter-${article.id}`}
                        >
                          {isPublishing === article.id ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Envoi...
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4 mr-2" />
                              Publier + Newsletter
                            </>
                          )}
                        </Button>
                      )}
                      {publishResult && publishResult.articleId === article.id && (
                        <span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">
                          {publishResult.sent} email(s) envoyé(s)
                        </span>
                      )}
                      <Button variant="outline" size="icon" onClick={() => togglePublish(article)} title={article.isPublished ? "Dépublier" : "Publier"}>
                        {article.isPublished ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleEdit(article)} title="Modifier">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(article.id)} title="Supprimer" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
