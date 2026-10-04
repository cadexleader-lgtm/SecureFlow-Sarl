// Articles statiques du blog : partagés par la liste (/blog) et les pages article (SEO, aperçus).
import blog3 from "@/assets/img/installation-miniere-terrain.webp";
import blog4 from "@/assets/img/secureflow-paris-reseau-europeen.webp";
import blogHero from "@/assets/img/trade-security-hero.webp";
import portCotonou2 from "@/assets/img/port-cotonou-2.webp";
import chinaHandshake from "@/assets/img/secureflow-chine-accord-partenaire.webp";
import dubaiOil1 from "@/assets/img/dubai-oil-1.webp";
import eximFinance from "@/assets/img/secureflow-partenariat-exim-finance.webp";
import agricultureExport from "@/assets/img/agriculture-export.webp";
import miningHeavy from "@/assets/img/mining-heavy-equipment.webp";
import energyHero from "@/assets/img/energy-hero.webp";
import oilRefinery from "@/assets/img/oil-refinery.webp";
import africaInvestment from "@/assets/img/africa-investment.webp";
import healthHero from "@/assets/img/health-hero.webp";
import airportTerminal from "@/assets/img/airport-terminal.webp";
import infraHero from "@/assets/img/infra-hero.webp";


export const STATIC_POSTS = [
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

export function staticPost(id: string | number) {
  return STATIC_POSTS.find((p) => String(p.id) === String(id));
}
