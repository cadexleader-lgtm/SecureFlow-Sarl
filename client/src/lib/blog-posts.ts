// Articles statiques du blog : partagés par la liste (/blog) et les pages article (SEO, aperçus).
import blog3 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1768785394569.jpeg";
import blog4 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.46_(1)_1768785394703.jpeg";
import blogHero from "@/assets/trade-security-hero.jpg";
import portCotonou2 from "@/assets/port-cotonou-2.jpg";
import chinaHandshake from "@assets/WhatsApp_Image_2026-01-23_at_12.07.24_1769172827019.jpeg";
import dubaiOil1 from "@/assets/dubai-oil-1.jpg";
import eximFinance from "@assets/WhatsApp_Image_2026-01-18_at_13.26.09_(1)_1769173630906.jpeg";
import agricultureExport from "@/assets/agriculture-export.jpg";
import miningHeavy from "@/assets/mining-heavy-equipment.jpg";
import energyHero from "@/assets/energy-hero.jpg";
import oilRefinery from "@/assets/oil-refinery.jpg";
import africaInvestment from "@/assets/africa-investment.jpg";
import healthHero from "@/assets/health-hero.jpg";
import airportTerminal from "@/assets/airport-terminal.jpg";
import infraHero from "@/assets/infra-hero.jpg";


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
