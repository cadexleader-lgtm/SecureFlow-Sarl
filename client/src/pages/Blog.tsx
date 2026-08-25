import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO, seoConfig } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Crown } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";

import blog3 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1768785394569.jpeg";
import blog4 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.46_(1)_1768785394703.jpeg";
import blogHero from "../assets/trade-security-hero.jpg";
import portCotonou2 from "../assets/port-cotonou-2.jpg";
import chinaHandshake from "@assets/WhatsApp_Image_2026-01-23_at_12.07.24_1769172827019.jpeg";
import dubaiOil1 from "../assets/dubai-oil-1.jpg";
import eximFinance from "@assets/WhatsApp_Image_2026-01-18_at_13.26.09_(1)_1769173630906.jpeg";
import agricultureExport from "../assets/agriculture-export.jpg";
import miningHeavy from "../assets/mining-heavy-equipment.jpg";
import energyHero from "../assets/energy-hero.jpg";
import oilRefinery from "../assets/oil-refinery.jpg";
import africaInvestment from "../assets/africa-investment.jpg";
import healthHero from "../assets/health-hero.jpg";
import airportTerminal from "../assets/airport-terminal.jpg";
import infraHero from "../assets/infra-hero.jpg";

interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  imageUrl: string | null;
  createdAt: string;
}

export default function Blog() {
  const { t } = useLanguage();

  const posts = [
    {
      id: 15,
      titleKey: "blog.article15.title",
      excerptKey: "blog.article15.excerpt",
      image: africaInvestment,
      categoryKey: "blog.category.africa",
      authorKey: "footer.author.founder",
      featured: true
    },
    {
      id: 14,
      titleKey: "blog.article14.title",
      excerptKey: "blog.article14.excerpt",
      image: oilRefinery,
      categoryKey: "blog.category.sectors",
      authorKey: "footer.author.founder"
    },
    {
      id: 13,
      titleKey: "blog.article13.title",
      excerptKey: "blog.article13.excerpt",
      image: infraHero,
      categoryKey: "blog.category.infrastructure",
      authorKey: "footer.author.founder"
    },
    {
      id: 12,
      titleKey: "blog.article12.title",
      excerptKey: "blog.article12.excerpt",
      image: airportTerminal,
      categoryKey: "blog.category.aviation",
      authorKey: "footer.author.founder"
    },
    {
      id: 11,
      titleKey: "blog.article11.title",
      excerptKey: "blog.article11.excerpt",
      image: healthHero,
      categoryKey: "blog.category.health",
      authorKey: "footer.author.founder"
    },
    {
      id: 10,
      titleKey: "blog.article10.title",
      excerptKey: "blog.article10.excerpt",
      image: energyHero,
      categoryKey: "blog.category.sectors",
      authorKey: "footer.author.founder"
    },
    {
      id: 9,
      titleKey: "blog.article9.title",
      excerptKey: "blog.article9.excerpt",
      image: miningHeavy,
      categoryKey: "blog.category.sectors",
      authorKey: "footer.author.founder"
    },
    {
      id: 8,
      titleKey: "blog.article8.title",
      excerptKey: "blog.article8.excerpt",
      image: agricultureExport,
      categoryKey: "blog.category.sectors",
      authorKey: "footer.author.founder"
    },
    {
      id: 7,
      titleKey: "blog.article7.title",
      excerptKey: "blog.article7.excerpt",
      image: eximFinance,
      categoryKey: "blog.category.finance",
      authorKey: "footer.author.founder"
    },
    {
      id: 6,
      titleKey: "blog.article6.title",
      excerptKey: "blog.article6.excerpt",
      image: portCotonou2,
      categoryKey: "blog.category.regional",
      authorKey: "footer.author.founder"
    },
    {
      id: 5,
      titleKey: "blog.article5.title",
      excerptKey: "blog.article5.excerpt",
      image: blogHero,
      categoryKey: "blog.category.expertise",
      authorKey: "footer.author.founder"
    },
    {
      id: 1,
      titleKey: "blog.article1.title",
      excerptKey: "blog.article1.excerpt",
      image: chinaHandshake,
      categoryKey: "blog.category.investment",
      authorKey: "footer.author.founder"
    },
    {
      id: 2,
      titleKey: "blog.article2.title",
      excerptKey: "blog.article2.excerpt",
      image: dubaiOil1,
      categoryKey: "blog.category.energy",
      authorKey: "footer.author.founder"
    },
    {
      id: 3,
      titleKey: "blog.article3.title",
      excerptKey: "blog.article3.excerpt",
      image: blog3,
      categoryKey: "blog.category.mining",
      authorKey: "footer.author.team"
    },
    {
      id: 4,
      titleKey: "blog.article4.title",
      excerptKey: "blog.article4.excerpt",
      image: blog4,
      categoryKey: "blog.category.diplomacy",
      authorKey: "footer.author.founder"
    }
  ];

  const { data: dbArticles = [] } = useQuery<BlogArticle[]>({
    queryKey: ['/api/blog/articles']
  });

  const allPosts = [
    ...dbArticles.map(article => ({
      id: `db-${article.id}`,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      image: article.imageUrl || blogHero,
      category: article.category,
      author: t("footer.author.founder"),
      isFromDb: true
    })),
    ...posts.map(post => ({
      id: post.id,
      slug: `static-${post.id}`,
      title: t(post.titleKey),
      excerpt: t(post.excerptKey),
      image: post.image,
      category: t(post.categoryKey),
      author: t(post.authorKey),
      isFromDb: false,
      featured: (post as any).featured || false
    }))
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <SEO {...seoConfig.blog} />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none"></div>
      <div className="container px-4 mx-auto relative z-10">
        <SectionHeading title={t("blog.hero.title")} subtitle={t("blog.hero.subtitle")} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-7xl mx-auto">
          {allPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              data-testid={`card-blog-${post.id}`}
            >
              <Card className={`glass-card overflow-hidden h-full flex flex-col transition-all duration-500 group rounded-xl md:rounded-[2.5rem] shadow-2xl relative ${
                (post as any).featured 
                  ? 'border-2 border-amber-500/50 ring-2 ring-amber-500/20 shadow-amber-500/10' 
                  : 'border-white/5'
              }`}>
                {(post as any).featured && (
                  <div className="absolute top-3 right-3 md:top-6 md:right-6 z-30 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Crown className="w-3 h-3" />
                    {t("sectors.africa.exclusive")}
                  </div>
                )}
                <Link href={post.isFromDb ? `/blog/article/${post.slug}` : `/blog/${post.id.toString().replace('static-', '')}`} className="block overflow-hidden cursor-pointer relative aspect-video" data-testid={`link-blog-image-${post.id}`}>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <Badge className={`absolute top-3 left-3 md:top-6 md:left-6 backdrop-blur-md border-none px-2 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest z-20 ${
                    (post as any).featured 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                      : 'bg-primary/90 text-primary-foreground'
                  }`} data-testid={`badge-category-${post.id}`}>
                    {post.category}
                  </Badge>
                </Link>
                
                <div className="p-4 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-primary/60 mb-3 md:mb-6">
                    <div className="flex items-center gap-2" data-testid={`text-author-${post.id}`}>
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {post.author}
                    </div>
                  </div>

                  <Link href={post.isFromDb ? `/blog/article/${post.slug}` : `/blog/${post.id.toString().replace('static-', '')}`} className="block mb-3 md:mb-6" data-testid={`link-blog-title-${post.id}`}>
                    <CardTitle className="text-lg md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {post.title}
                    </CardTitle>
                  </Link>
                
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-lg mb-4 md:mb-8 line-clamp-3 font-light" data-testid={`text-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                    
                    <Link href={post.isFromDb ? `/blog/article/${post.slug}` : `/blog/${post.id.toString().replace('static-', '')}`} data-testid={`link-blog-readmore-${post.id}`}>
                      <button className="inline-flex items-center gap-2 md:gap-3 text-foreground font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] group/btn" data-testid={`button-readmore-${post.id}`}>
                        <span className="relative">
                          {t("blog.readMore")}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                        </span>
                        <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-300">
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </div>
                      </button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
