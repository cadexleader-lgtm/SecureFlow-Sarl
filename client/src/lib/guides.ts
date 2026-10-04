// Guides pratiques (/guides/<slug>) : répondent aux questions que les clients
// tapent réellement dans Google. Contenu factuel, sans chiffres inventés.
// Les slugs sont publiés : ne jamais les renommer (voir shared/guide-slugs.ts).
import verificationImg from "@/assets/img/verification-fournisseur-accord.webp";
import inspectionImg from "@/assets/img/cargaison-securisee-remorqueur.webp";
import fraudImg from "@/assets/img/transaction-securisee.webp";
import cotonouImg from "@/assets/img/port-cotonou.webp";
import { GUIDES_EN } from "./guides-en";

export interface GuideSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
}

export interface GuideText {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
}

export interface Guide extends GuideText {
  slug: string;
  image: string;
  /** Service SecureFlow le plus proche (/services/<slug>). */
  service: string;
  /** Version anglaise (/en/guides/<slug>). */
  en: GuideText;
}

export const GUIDES: Guide[] = [
  {
    slug: "verifier-fournisseur-chinois",
    en: GUIDES_EN["verifier-fournisseur-chinois"],
    title: "Comment vérifier un fournisseur chinois avant de payer",
    metaTitle: "Comment vérifier un fournisseur chinois avant de payer (guide)",
    description: "Licence d'entreprise, code de crédit social, compte bancaire, usine ou intermédiaire : les vérifications à faire avant de payer un fournisseur en Chine.",
    image: verificationImg,
    service: "verification-fournisseurs",
    intro: "Commander en Chine est souvent avantageux, mais payer un fournisseur que l'on n'a jamais vu reste le moment le plus risqué de l'opération. Voici les vérifications à faire, dans l'ordre, avant d'envoyer le moindre acompte.",
    sections: [
      {
        h2: "1. Demander et contrôler la licence d'entreprise",
        paragraphs: [
          "Toute société chinoise dispose d'une licence d'entreprise (营业执照) qui porte un code unifié de crédit social (统一社会信用代码) de 18 caractères. Demandez une copie lisible de ce document.",
          "Vérifiez ensuite ces informations sur le système national de publicité des informations de crédit des entreprises (gsxt.gov.cn) : raison sociale, date de création, capital, représentant légal, statut et périmètre d'activité. Le nom de la société qui vous facture doit correspondre exactement à celui de la licence.",
        ],
      },
      {
        h2: "2. Usine ou intermédiaire ?",
        paragraphs: [
          "Beaucoup de vendeurs se présentent comme fabricants alors qu'ils sont des sociétés de négoce. Ce n'est pas forcément un problème, mais vous devez le savoir : prix, délais, maîtrise de la qualité et recours ne sont pas les mêmes.",
          "Le périmètre d'activité de la licence, l'adresse (zone industrielle ou bureau en ville) et une visite vidéo en direct de la ligne de production sont de bons indicateurs.",
        ],
      },
      {
        h2: "3. Contrôler le compte bancaire de paiement",
        list: [
          "Le compte doit être au nom exact de la société figurant sur la licence et sur la facture.",
          "Méfiez-vous d'une demande de paiement sur un compte personnel ou au nom d'une autre société.",
          "Un changement de coordonnées bancaires annoncé par simple email est un signal d'alerte classique : confirmez-le toujours par un autre canal.",
        ],
      },
      {
        h2: "4. Vérifier la capacité réelle à livrer",
        paragraphs: [
          "Demandez des références, des photos et vidéos datées de la production, des certificats produits si votre marchandise en exige, et commandez des échantillons. Pour une commande importante, une visite ou un audit sur site reste la seule façon de constater la capacité réelle de l'usine.",
        ],
      },
      {
        h2: "5. Sécuriser les conditions de paiement",
        paragraphs: [
          "Évitez de payer 100 % à l'avance. Une pratique courante consiste à verser un acompte, puis le solde contre preuve d'expédition ou après inspection de la marchandise. Pour les montants élevés, la lettre de crédit documentaire offre un cadre plus protecteur.",
          "Liez chaque paiement à une preuve concrète : rapport d'inspection, documents d'expédition, connaissement.",
        ],
      },
    ],
    faq: [
      { q: "Comment vérifier la licence d'une entreprise chinoise ?", a: "Relevez le code unifié de crédit social (18 caractères) sur la licence d'entreprise et recherchez-le sur le système national gsxt.gov.cn : la raison sociale, le représentant légal et le statut doivent correspondre aux documents reçus." },
      { q: "Peut-on payer un fournisseur chinois sur un compte personnel ?", a: "C'est fortement déconseillé : le compte doit être au nom de la société qui vous facture. Un compte personnel ou au nom d'un tiers est un signal d'alerte." },
      { q: "SecureFlow peut-il vérifier un fournisseur en Chine pour moi ?", a: "Oui. SecureFlow réalise l'identification légale, la vérification d'existence physique, l'analyse de capacité et l'audit de conformité, et se déplace sur site lorsque c'est nécessaire." },
    ],
  },
  {
    slug: "inspection-avant-expedition",
    en: GUIDES_EN["inspection-avant-expedition"],
    title: "Inspection avant expédition : à quoi ça sert et comment ça se passe",
    metaTitle: "Inspection avant expédition : à quoi ça sert, comment ça marche",
    description: "Pourquoi faire inspecter sa marchandise avant expédition, ce qui est contrôlé, à quel moment la faire et comment lire le rapport d'inspection.",
    image: inspectionImg,
    service: "inspection-sur-site",
    intro: "Une fois la marchandise partie, il est trop tard : un défaut découvert à l'arrivée se règle mal, loin du fournisseur et après paiement. L'inspection avant expédition permet de constater l'état réel de la commande pendant qu'il est encore temps d'agir.",
    sections: [
      {
        h2: "À quoi sert une inspection avant expédition ?",
        paragraphs: [
          "Elle vérifie, chez le fournisseur et avant le départ, que la marchandise correspond à ce que vous avez commandé : quantité, conformité au cahier des charges, état et emballage. C'est aussi une preuve objective sur laquelle conditionner le paiement du solde.",
        ],
      },
      {
        h2: "Ce qui est contrôlé",
        list: [
          "Quantités produites et emballées par rapport à la commande.",
          "Conformité du produit : dimensions, matières, références, marquages.",
          "Défauts visibles et état général, sur un échantillon prélevé au hasard.",
          "Emballage, étiquetage et marquage des colis.",
          "Si besoin, supervision du chargement du conteneur.",
        ],
      },
      {
        h2: "À quel moment la faire ?",
        paragraphs: [
          "Le contrôle se fait en général quand la production est terminée ou presque et qu'une grande partie de la marchandise est emballée, afin d'examiner un échantillon représentatif. Pour des commandes longues ou sensibles, un contrôle pendant la production permet de corriger plus tôt.",
          "Les inspecteurs s'appuient souvent sur des plans d'échantillonnage normalisés, comme la norme ISO 2859-1, pour décider combien de pièces examiner.",
        ],
      },
      {
        h2: "Lire le rapport et décider",
        paragraphs: [
          "Un bon rapport est daté, illustré de photos, et indique clairement les écarts constatés. Vous pouvez alors accepter l'expédition, demander des corrections avant départ, ou suspendre le paiement du solde.",
        ],
      },
    ],
    faq: [
      { q: "Qui paie l'inspection avant expédition ?", a: "Le plus souvent l'acheteur, puisque c'est lui qui en a besoin pour se protéger. Les modalités peuvent être prévues dans le contrat avec le fournisseur." },
      { q: "L'inspection garantit-elle que la marchandise arrivera intacte ?", a: "Non : elle constate l'état de la marchandise au départ. Le transport se sécurise ensuite par la supervision logistique et le contrôle de conformité à l'arrivée." },
      { q: "SecureFlow réalise-t-il des inspections sur site ?", a: "Oui : contrôle physique des stocks, inspection des infrastructures, validation des processus qualité et rapports détaillés avec preuves visuelles." },
    ],
  },
  {
    slug: "arnaque-fournisseur-import-signaux-alerte",
    en: GUIDES_EN["arnaque-fournisseur-import-signaux-alerte"],
    title: "Arnaques à l'import : les signaux d'alerte à connaître",
    metaTitle: "Arnaque fournisseur à l'import : les signaux d'alerte",
    description: "Prix trop bas, paiement sur compte personnel, changement de RIB par email, pression sur les délais : comment repérer une arnaque fournisseur avant de payer.",
    image: fraudImg,
    service: "securisation-transactions",
    intro: "Les arnaques à l'import suivent presque toujours les mêmes schémas. Les reconnaître avant de payer est la meilleure protection. Voici les signaux qui doivent vous faire ralentir.",
    sections: [
      {
        h2: "Les signaux d'alerte les plus fréquents",
        list: [
          "Un prix nettement inférieur à celui du marché, sans explication crédible.",
          "Un paiement demandé sur un compte personnel ou au nom d'une autre société que celle qui facture.",
          "Un changement de coordonnées bancaires annoncé par email, souvent au dernier moment.",
          "Une pression forte pour payer vite : « dernier stock », « prix valable aujourd'hui seulement ».",
          "Un refus de visite, de visio en direct dans l'usine ou d'inspection avant expédition.",
          "Des documents incohérents : noms, adresses ou numéros d'immatriculation qui ne correspondent pas.",
          "Une adresse email gratuite ou un site web très récent pour une entreprise qui se dit établie.",
          "Un intermédiaire qui refuse de vous mettre en relation avec le fabricant.",
        ],
      },
      {
        h2: "Les schémas d'arnaque classiques",
        paragraphs: [
          "Le faux fournisseur encaisse l'acompte et disparaît. L'usurpation d'identité reprend le nom d'une vraie usine avec des coordonnées bancaires différentes. La substitution livre une marchandise de moindre qualité que l'échantillon. Le piratage d'email intercepte une conversation réelle pour modifier les coordonnées de paiement.",
        ],
      },
      {
        h2: "Comment se protéger",
        list: [
          "Vérifier la société et son compte bancaire avant tout paiement.",
          "Ne jamais changer de coordonnées bancaires sans confirmation par un autre canal.",
          "Lier chaque paiement à une preuve : inspection, documents d'expédition.",
          "Faire inspecter la marchandise avant son départ.",
          "Pour les montants importants, passer par un tiers de confiance qui encadre la transaction.",
        ],
      },
    ],
    faq: [
      { q: "Comment savoir si un fournisseur est une arnaque ?", a: "Cumulez les vérifications : existence légale de la société, cohérence des documents, compte bancaire au nom de la société, visite ou visio de l'usine, inspection avant expédition. Un refus sur l'un de ces points est un signal d'alerte." },
      { q: "Que faire si j'ai déjà payé un faux fournisseur ?", a: "Contactez immédiatement votre banque pour tenter de bloquer ou rappeler le virement, conservez toutes les preuves et portez plainte. Plus la réaction est rapide, plus les chances sont grandes." },
      { q: "Un tiers de confiance garantit-il de ne pas être arnaqué ?", a: "Aucun intermédiaire ne supprime tout risque. SecureFlow le réduit fortement en vérifiant les partenaires et en encadrant les paiements, sans être assureur ni garant financier." },
    ],
  },
  {
    slug: "importer-port-de-cotonou",
    en: GUIDES_EN["importer-port-de-cotonou"],
    title: "Importer via le port de Cotonou : sécuriser sa marchandise de l'achat à la livraison",
    metaTitle: "Importer via le port de Cotonou en sécurité : le guide",
    description: "Documents, étapes, points de vigilance : comment sécuriser une importation par le port de Cotonou, de la commande au fournisseur jusqu'à la livraison finale.",
    image: cotonouImg,
    service: "supervision-logistique",
    intro: "Le port de Cotonou est la principale porte d'entrée maritime du Bénin et dessert aussi les pays voisins de l'hinterland. Une importation qui y transite se sécurise étape par étape, bien avant l'arrivée du navire.",
    sections: [
      {
        h2: "Avant l'expédition : sécuriser l'achat",
        list: [
          "Vérifier le fournisseur et son compte bancaire avant de payer.",
          "Fixer clairement l'Incoterm (qui paie et assume quoi, jusqu'où).",
          "Faire inspecter la marchandise et, si possible, superviser le chargement du conteneur.",
        ],
      },
      {
        h2: "Les documents à réunir",
        list: [
          "Le connaissement (Bill of Lading), qui permet de retirer la marchandise.",
          "La facture commerciale et la liste de colisage.",
          "Le certificat d'origine et, selon les produits, les certificats sanitaires, phytosanitaires ou de conformité.",
        ],
        paragraphs: [
          "Des incohérences entre ces documents sont une cause fréquente de retards et de frais supplémentaires : contrôlez-les avant l'arrivée de la marchandise.",
        ],
      },
      {
        h2: "À l'arrivée au port",
        paragraphs: [
          "Les formalités de dédouanement sont généralement confiées à un commissionnaire agréé. Prévoyez les délais et suivez l'avancement : chaque jour de stationnement au port peut générer des frais.",
          "À la sortie, contrôlez la conformité de la marchandise : correspond-elle à ce qui a été chargé au départ ? C'est à ce moment qu'une substitution ou une perte se détecte.",
        ],
      },
      {
        h2: "Jusqu'à la livraison finale",
        paragraphs: [
          "Le transport terrestre, vers une ville du Bénin ou un pays voisin, reste une étape à surveiller. Une supervision jusqu'au point de livraison réduit les risques de pertes et de détournements.",
        ],
      },
    ],
    faq: [
      { q: "Quels documents faut-il pour importer au Bénin ?", a: "Au minimum le connaissement, la facture commerciale, la liste de colisage et le certificat d'origine, plus les certificats spécifiques exigés selon la nature des produits." },
      { q: "Comment éviter les retards au port de Cotonou ?", a: "En préparant des documents cohérents avant l'arrivée, en choisissant un commissionnaire fiable et en suivant chaque étape du dédouanement." },
      { q: "SecureFlow intervient-il au port de Cotonou ?", a: "Oui. Le siège de SecureFlow est à Cotonou : nous supervisons les opérations portuaires, contrôlons la documentation et la conformité des cargaisons jusqu'à la livraison finale." },
    ],
  },
];

export function guideBySlug(slug: string | undefined) {
  return GUIDES.find((g) => g.slug === slug);
}

/** Textes du guide dans la langue demandée. */
export function guideText(guide: Guide, language: "fr" | "en"): GuideText {
  return language === "en" ? guide.en : guide;
}
