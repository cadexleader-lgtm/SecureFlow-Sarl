import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogHero from "../assets/trade-security-hero.jpg";

interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string | null;
  createdAt: string;
}

export default function BlogArticlePage() {
  const { slug } = useParams();
  
  const { data: article, isLoading, error } = useQuery<BlogArticle>({
    queryKey: ['/api/blog/articles', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/articles/${slug}`);
      if (!response.ok) {
        throw new Error('Article non trouvé');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-muted-foreground mb-8">Cet article n'existe pas ou a été supprimé.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container px-4 mx-auto max-w-4xl"
      >
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Button>
        </Link>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <img
            src={article.imageUrl || blogHero}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-3">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Éric Brunnel QUENUM</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.createdAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{article.category}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="whitespace-pre-wrap text-foreground leading-relaxed">
            {article.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </motion.article>
    </div>
  );
}
