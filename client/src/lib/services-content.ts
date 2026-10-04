// Contenu des pages service (/services/<slug>) en français et en anglais.
// Chaque service correspond à une activité déclarée au RCCM ; ne rien ajouter
// qui n'y figure pas. Les slugs sont publiés : ne jamais les renommer.
import { Search, FileCheck, Landmark, Ship, BarChart3, TrendingUp, Globe2, type LucideIcon } from "lucide-react";
import verificationImg from "@assets/stock_images/international_trade__1311510f.jpg";
import inspectionImg from "@assets/stock_images/modern_security_audi_4d6abb64.jpg";
import transactionImg from "@assets/stock_images/secure_high_value_tr_1b60de34.jpg";
import logisticsImg from "@assets/stock_images/professional_cargo_i_20329aee.jpg";
import risksImg from "@assets/stock_images/mining_project_infra_8026ebfd.jpg";
import financeImg from "@/assets/finance-partnership.jpg";
import tradeImg from "@assets/stock_images/international_busine_34a5b756.jpg";

export interface ServiceText {
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  points: { title: string; text: string }[];
  forWho: string;
  faq: { q: string; a: string }[];
}

export interface ServiceDef {
  slug: string;
  icon: LucideIcon;
  image: string;
  fr: ServiceText;
  en: ServiceText;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "verification-fournisseurs",
    icon: Search,
    image: verificationImg,
    fr: {
      name: "Vérification des fournisseurs",
      h1: "Vérification de fournisseurs : sachez qui vous payez, avant de payer",
      metaTitle: "Vérification de fournisseur (Chine, Asie, Afrique) avant paiement",
      metaDescription: "Faites vérifier votre fournisseur avant de payer : identité légale, existence physique, capacité de production, licences. SecureFlow, Cotonou.",
      intro: "Un faux fournisseur, une société écran ou un intermédiaire qui se fait passer pour le fabricant : c'est la première cause de pertes dans le commerce international. Avant que vous n'engagiez le moindre paiement, SecureFlow vérifie que votre partenaire existe, qu'il est en règle et qu'il est réellement capable de livrer ce qu'il promet.",
      points: [
        { title: "Identification légale complète", text: "Contrôle de l'immatriculation, des dirigeants et de la cohérence entre la société qui facture et celle qui produit." },
        { title: "Vérification d'existence physique", text: "Confirmation de l'adresse et des installations déclarées, sur place lorsque c'est nécessaire." },
        { title: "Analyse de capacité opérationnelle", text: "Le fournisseur a-t-il les équipements, le personnel et les volumes pour honorer votre commande ?" },
        { title: "Audit de conformité et de licence", text: "Licences d'exportation, autorisations sectorielles et cohérence des documents commerciaux." },
      ],
      forWho: "Importateurs, traders et investisseurs qui achètent en Chine, en Asie, en Afrique ou ailleurs, en particulier pour une première commande, un nouveau marché ou un montant important.",
      faq: [
        { q: "Comment savoir si un fournisseur chinois est fiable ?", a: "En vérifiant son immatriculation, ses dirigeants, son adresse réelle et sa capacité de production, puis en comparant ces éléments aux documents qu'il vous envoie. SecureFlow réalise ces contrôles pour vous et peut se rendre sur place." },
        { q: "Quand faut-il faire vérifier un fournisseur ?", a: "Avant tout premier paiement, et surtout avant un acompte important ou une commande sur un marché que vous ne connaissez pas." },
        { q: "Que recevez-vous à l'issue de la vérification ?", a: "Un compte rendu clair des contrôles effectués et des points d'alerte, avec preuves visuelles lorsqu'une visite sur site a été réalisée." },
      ],
    },
    en: {
      name: "Supplier verification",
      h1: "Supplier verification: know who you are paying, before you pay",
      metaTitle: "Supplier verification (China, Asia, Africa) before payment",
      metaDescription: "Have your supplier verified before you pay: legal identity, physical existence, production capacity, licences. SecureFlow, Cotonou, Benin.",
      intro: "A fake supplier, a shell company or a middleman posing as the manufacturer: this is the leading cause of losses in international trade. Before you commit any payment, SecureFlow checks that your partner exists, is compliant and can actually deliver what it promises.",
      points: [
        { title: "Full legal identification", text: "Checks on registration, directors and consistency between the invoicing company and the producing company." },
        { title: "Physical existence check", text: "Confirmation of the declared address and facilities, on site when needed." },
        { title: "Operational capacity analysis", text: "Does the supplier have the equipment, staff and volumes to fulfil your order?" },
        { title: "Compliance and licence audit", text: "Export licences, sector authorisations and consistency of commercial documents." },
      ],
      forWho: "Importers, traders and investors buying in China, Asia, Africa or elsewhere, especially for a first order, a new market or a large amount.",
      faq: [
        { q: "How can I tell if a Chinese supplier is reliable?", a: "By checking its registration, directors, real address and production capacity, then comparing them with the documents it sends you. SecureFlow carries out these checks for you and can go on site." },
        { q: "When should a supplier be verified?", a: "Before any first payment, and especially before a large deposit or an order in a market you do not know." },
        { q: "What do you receive at the end?", a: "A clear report of the checks performed and the red flags found, with visual evidence when an on-site visit took place." },
      ],
    },
  },
  {
    slug: "inspection-sur-site",
    icon: FileCheck,
    image: inspectionImg,
    fr: {
      name: "Inspection et conformité sur site",
      h1: "Inspection sur site : contrôler la marchandise et le fournisseur avant l'expédition",
      metaTitle: "Inspection avant expédition et contrôle sur site",
      metaDescription: "Inspection sur site avant expédition : contrôle physique des stocks, des infrastructures et de la qualité, rapport avec preuves visuelles. SecureFlow.",
      intro: "Des photos et des documents envoyés à distance ne prouvent ni que la marchandise existe, ni qu'elle est conforme. Nos équipes se déplacent pour constater sur place l'état réel des stocks, des installations et des processus du fournisseur, avant que la marchandise ne parte et avant que vous ne payiez le solde.",
      points: [
        { title: "Contrôle physique des stocks", text: "Quantités, état et conformité de la marchandise par rapport à votre commande." },
        { title: "Inspection des infrastructures", text: "Sites de production, entrepôts et équipements du fournisseur." },
        { title: "Validation des processus qualité", text: "Méthodes de production et de contrôle qualité appliquées par le fournisseur." },
        { title: "Rapports détaillés avec preuves visuelles", text: "Photos et constats datés, pour décider sur des faits et non sur des promesses." },
      ],
      forWho: "Acheteurs qui commandent à distance, investisseurs qui veulent constater la réalité d'un actif, opérateurs des mines, de l'énergie, de l'agriculture ou de la santé.",
      faq: [
        { q: "Qu'est-ce qu'une inspection avant expédition ?", a: "Un contrôle de la marchandise chez le fournisseur avant son départ : quantités, état, conformité à la commande. Elle permet de détecter un problème tant qu'il est encore temps d'agir." },
        { q: "Faut-il toujours se déplacer ?", a: "Non. Nous nous rendons sur place lorsque c'est nécessaire pour confirmer l'existence, la capacité et la conformité du fournisseur." },
        { q: "L'inspection garantit-elle la livraison ?", a: "Non. Elle réduit fortement le risque en apportant des preuves avant le paiement ou l'expédition, mais SecureFlow n'est ni assureur ni garant." },
      ],
    },
    en: {
      name: "On-site inspection and compliance",
      h1: "On-site inspection: check the goods and the supplier before shipment",
      metaTitle: "Pre-shipment inspection and on-site checks",
      metaDescription: "Pre-shipment on-site inspection: physical checks of stock, facilities and quality, with a report backed by visual evidence. SecureFlow.",
      intro: "Photos and documents sent remotely prove neither that the goods exist nor that they comply. Our teams travel to see, on site, the real state of the supplier's stock, facilities and processes, before the goods leave and before you pay the balance.",
      points: [
        { title: "Physical stock check", text: "Quantities, condition and compliance of the goods against your order." },
        { title: "Facility inspection", text: "The supplier's production sites, warehouses and equipment." },
        { title: "Quality process validation", text: "Production and quality-control methods applied by the supplier." },
        { title: "Detailed reports with visual evidence", text: "Dated photos and findings, so you decide on facts rather than promises." },
      ],
      forWho: "Buyers ordering remotely, investors who want to see an asset for themselves, operators in mining, energy, agriculture or healthcare.",
      faq: [
        { q: "What is a pre-shipment inspection?", a: "A check of the goods at the supplier's premises before they leave: quantities, condition, compliance with the order. It reveals problems while there is still time to act." },
        { q: "Do you always travel on site?", a: "No. We go on site when needed to confirm the supplier's existence, capacity and compliance." },
        { q: "Does an inspection guarantee delivery?", a: "No. It greatly reduces risk by providing evidence before payment or shipment, but SecureFlow is neither an insurer nor a guarantor." },
      ],
    },
  },
  {
    slug: "securisation-transactions",
    icon: Landmark,
    image: transactionImg,
    fr: {
      name: "Sécurité des transactions",
      h1: "Sécuriser vos transactions et vos paiements internationaux",
      metaTitle: "Sécuriser un paiement international et un acompte",
      metaDescription: "Sécurisez vos paiements internationaux : encadrement des paiements, réduction du risque de prépaiement, protection du capital engagé. SecureFlow.",
      intro: "Verser un acompte à un partenaire que l'on ne connaît pas, c'est souvent mettre son capital en jeu sur une simple promesse. SecureFlow encadre vos transactions pour que vos fonds ne partent que lorsque les conditions convenues sont réunies, et sécurise les flux de capitaux, de marchandises, de personnes et de données.",
      points: [
        { title: "Encadrement des paiements internationaux", text: "Étapes de paiement structurées en fonction de preuves concrètes d'avancement." },
        { title: "Réduction des risques de prépaiement", text: "Limiter les acomptes versés à l'aveugle à un partenaire non vérifié." },
        { title: "Protection du capital engagé", text: "Vérifications et contrôles avant chaque décaissement important." },
        { title: "Transparence totale des processus", text: "Vous savez à chaque étape où en est votre transaction." },
      ],
      forWho: "Entreprises et investisseurs qui engagent des montants importants avec des partenaires étrangers.",
      faq: [
        { q: "Comment éviter une arnaque à l'acompte ?", a: "En vérifiant le fournisseur avant de payer, en liant chaque paiement à une preuve concrète (inspection, documents, expédition) et en refusant de payer un intermédiaire inconnu à la place du fabricant." },
        { q: "SecureFlow garantit-il mon paiement ?", a: "Non. SecureFlow n'est ni assureur ni garant financier : nous réduisons le risque en encadrant la transaction, et chaque intervention est définie par contrat." },
      ],
    },
    en: {
      name: "Transaction security",
      h1: "Secure your international transactions and payments",
      metaTitle: "Secure an international payment or deposit",
      metaDescription: "Secure your international payments: structured payments, lower prepayment risk, protection of committed capital. SecureFlow, Benin.",
      intro: "Paying a deposit to a partner you do not know often means putting your capital at stake on a mere promise. SecureFlow structures your transactions so your funds only leave once the agreed conditions are met, and secures flows of capital, goods, people and data.",
      points: [
        { title: "Structured international payments", text: "Payment stages tied to concrete evidence of progress." },
        { title: "Lower prepayment risk", text: "Avoid blind deposits to an unverified partner." },
        { title: "Protection of committed capital", text: "Checks and controls before every significant disbursement." },
        { title: "Full process transparency", text: "You know where your transaction stands at every step." },
      ],
      forWho: "Companies and investors committing significant amounts with foreign partners.",
      faq: [
        { q: "How do I avoid a deposit scam?", a: "Verify the supplier before paying, tie each payment to concrete evidence (inspection, documents, shipment) and never pay an unknown middleman instead of the manufacturer." },
        { q: "Does SecureFlow guarantee my payment?", a: "No. SecureFlow is neither an insurer nor a financial guarantor: we reduce risk by structuring the transaction, and every engagement is defined by contract." },
      ],
    },
  },
  {
    slug: "supervision-logistique",
    icon: Ship,
    image: logisticsImg,
    fr: {
      name: "Supervision logistique",
      h1: "Supervision logistique : suivre vos marchandises du port à la livraison",
      metaTitle: "Supervision logistique maritime, portuaire et aérienne",
      metaDescription: "Supervision de vos cargaisons maritimes, portuaires et aériennes, notamment au port de Cotonou : suivi, conformité, documents, anti-substitution.",
      intro: "Une marchandise conforme au départ peut être retardée, détournée ou substituée en chemin. SecureFlow supervise vos flux maritimes, portuaires et aériens jusqu'à la livraison finale, avec une présence directe au port de Cotonou, où se trouve notre siège.",
      points: [
        { title: "Suivi maritime, portuaire et aérien", text: "Supervision des étapes de transport, de transit et de dédouanement jusqu'à destination." },
        { title: "Contrôle de conformité des cargaisons", text: "Vérifier que ce qui arrive correspond bien à ce qui a été expédié." },
        { title: "Vérification de la documentation", text: "Connaissements, certificats et documents d'accompagnement." },
        { title: "Réduction des risques de substitution", text: "Détecter une marchandise remplacée en cours de route." },
      ],
      forWho: "Importateurs et exportateurs, en particulier via le port de Cotonou, et opérateurs qui expédient des marchandises sensibles ou de forte valeur.",
      faq: [
        { q: "Pouvez-vous suivre une cargaison qui arrive au port de Cotonou ?", a: "Oui. Le siège de SecureFlow est à Cotonou : nous supervisons les opérations portuaires et le transit jusqu'à la livraison finale." },
        { q: "Qu'est-ce que la substitution de marchandise ?", a: "Le remplacement, pendant le transport, de la marchandise prévue par une marchandise de moindre valeur. Le contrôle de conformité à l'arrivée permet de la détecter." },
      ],
    },
    en: {
      name: "Logistics supervision",
      h1: "Logistics supervision: follow your goods from port to delivery",
      metaTitle: "Maritime, port and air logistics supervision",
      metaDescription: "Supervision of your sea, port and air cargo, including at the port of Cotonou: tracking, compliance, documents, anti-substitution.",
      intro: "Goods that comply at departure can be delayed, diverted or swapped on the way. SecureFlow supervises your sea, port and air flows through to final delivery, with a direct presence at the port of Cotonou, where our headquarters are.",
      points: [
        { title: "Sea, port and air tracking", text: "Supervision of transport, transit and customs steps through to destination." },
        { title: "Cargo compliance checks", text: "Make sure what arrives matches what was shipped." },
        { title: "Documentation checks", text: "Bills of lading, certificates and accompanying documents." },
        { title: "Lower substitution risk", text: "Detect goods swapped during transit." },
      ],
      forWho: "Importers and exporters, especially through the port of Cotonou, and operators shipping sensitive or high-value goods.",
      faq: [
        { q: "Can you follow a shipment arriving at the port of Cotonou?", a: "Yes. SecureFlow is headquartered in Cotonou: we supervise port operations and transit through to final delivery." },
        { q: "What is cargo substitution?", a: "Replacing the expected goods with lower-value goods during transport. Compliance checks on arrival reveal it." },
      ],
    },
  },
  {
    slug: "gestion-des-risques",
    icon: BarChart3,
    image: risksImg,
    fr: {
      name: "Gestion des risques",
      h1: "Gestion des risques pour vos opérations internationales",
      metaTitle: "Gestion des risques import-export, mines et énergie",
      metaDescription: "Analyse de vulnérabilité, stratégies de réduction des risques, accompagnement des projets mines et énergie, veille sécuritaire. SecureFlow.",
      intro: "Chaque opération internationale cumule des risques opérationnels, juridiques, logistiques et financiers. SecureFlow les identifie avant l'exécution, les classe selon leur niveau et met en place les mesures pour les réduire.",
      points: [
        { title: "Analyse de vulnérabilité", text: "Cartographie des points sensibles de votre opération." },
        { title: "Stratégies de réduction des risques", text: "Contrôles préalables, encadrement contractuel et procédures d'alerte." },
        { title: "Accompagnement projets Mines & Énergie", text: "Suivi des projets miniers, énergétiques, pétroliers et gaziers." },
        { title: "Veille sécuritaire constante", text: "Suivi de l'exécution pour réagir vite en cas d'anomalie." },
      ],
      forWho: "Entreprises qui se lancent sur un nouveau marché, porteurs de projets industriels, miniers ou énergétiques.",
      faq: [
        { q: "Comment évaluez-vous un risque ?", a: "Nous vérifions les parties impliquées, analysons les documents et le cadre contractuel, puis classons le risque : faible, modéré ou élevé." },
        { q: "Peut-on supprimer tous les risques ?", a: "Non. L'objectif est de les réduire significativement et de les anticiper, sans prétendre à leur suppression totale." },
      ],
    },
    en: {
      name: "Risk management",
      h1: "Risk management for your international operations",
      metaTitle: "Import-export, mining and energy risk management",
      metaDescription: "Vulnerability analysis, risk-reduction strategies, support for mining and energy projects, security monitoring. SecureFlow, Benin.",
      intro: "Every international operation combines operational, legal, logistical and financial risks. SecureFlow identifies them before execution, rates their level and puts measures in place to reduce them.",
      points: [
        { title: "Vulnerability analysis", text: "A map of the sensitive points in your operation." },
        { title: "Risk-reduction strategies", text: "Prior checks, contractual framing and alert procedures." },
        { title: "Mining & Energy project support", text: "Follow-up of mining, energy, oil and gas projects." },
        { title: "Ongoing security monitoring", text: "Execution tracking to react quickly to any anomaly." },
      ],
      forWho: "Companies entering a new market, sponsors of industrial, mining or energy projects.",
      faq: [
        { q: "How do you assess a risk?", a: "We check the parties involved, analyse the documents and the contractual framework, then rate the risk as low, moderate or high." },
        { q: "Can all risks be removed?", a: "No. The goal is to reduce and anticipate them significantly, without claiming to remove them entirely." },
      ],
    },
  },
  {
    slug: "financement-de-projets",
    icon: TrendingUp,
    image: financeImg,
    fr: {
      name: "Financement de projets & investissement",
      h1: "Financement de projets et investissement en Afrique",
      metaTitle: "Financement de projets industriels, miniers et énergétiques",
      metaDescription: "Structuration financière, recherche et mobilisation de fonds, gestion d'investissements et prise de participations dans des projets en Afrique.",
      intro: "Les projets industriels, énergétiques, miniers et d'infrastructure demandent une structuration financière rigoureuse et des partenaires vérifiés. SecureFlow structure le financement de vos projets, recherche et mobilise les fonds nécessaires et peut prendre des participations.",
      points: [
        { title: "Structuration financière des projets", text: "Montage adapté aux besoins, au calendrier et aux risques du projet." },
        { title: "Recherche et mobilisation de fonds", text: "Identification et mobilisation des ressources financières nécessaires." },
        { title: "Gestion d'investissements et prise de participations", text: "Dans des projets industriels, énergétiques, miniers ou d'infrastructures." },
        { title: "Monétisation d'instruments bancaires et assurance des flux commerciaux", text: "Des outils financiers encadrés pour sécuriser vos opérations." },
      ],
      forWho: "Porteurs de projets industriels, énergétiques, miniers ou d'infrastructures, et investisseurs à la recherche de projets structurés et vérifiés.",
      faq: [
        { q: "Quels projets accompagnez-vous ?", a: "Des projets industriels, énergétiques (y compris des barrages électriques), miniers avec notre pôle Terraminex, ainsi que des projets d'infrastructures et de BTP." },
        { q: "Comment se passe un accompagnement ?", a: "Analyse du projet, vérification des parties prenantes, structuration financière et contractuelle, puis suivi de l'exécution et des flux. Les conditions sont fixées par contrat, projet par projet." },
      ],
    },
    en: {
      name: "Project finance & investment",
      h1: "Project finance and investment in Africa",
      metaTitle: "Industrial, mining and energy project finance",
      metaDescription: "Financial structuring, fund sourcing, investment management and equity participation in projects across Africa. SecureFlow.",
      intro: "Industrial, energy, mining and infrastructure projects require rigorous financial structuring and verified partners. SecureFlow structures your project financing, sources and raises the funds needed, and can take equity stakes.",
      points: [
        { title: "Project financial structuring", text: "A structure suited to the project's needs, timeline and risks." },
        { title: "Fund sourcing and mobilisation", text: "Identifying and raising the financial resources required." },
        { title: "Investment management and equity participation", text: "In industrial, energy, mining or infrastructure projects." },
        { title: "Bank instrument monetisation and trade flow insurance", text: "Framed financial tools to secure your operations." },
      ],
      forWho: "Sponsors of industrial, energy, mining or infrastructure projects, and investors looking for structured, verified projects.",
      faq: [
        { q: "Which projects do you support?", a: "Industrial and energy projects (including hydroelectric dams), mining projects with our Terraminex division, and infrastructure and construction projects." },
        { q: "How does an engagement work?", a: "Project analysis, verification of stakeholders, financial and contractual structuring, then monitoring of execution and flows. Terms are set by contract, project by project." },
      ],
    },
  },
  {
    slug: "commerce-international-conseil",
    icon: Globe2,
    image: tradeImg,
    fr: {
      name: "Commerce international & conseil",
      h1: "Import-export et conseil en commerce international",
      metaTitle: "Import-export et conseil en commerce international au Bénin",
      metaDescription: "Import-export de produits alimentaires, agricoles et vivriers, représentation commerciale, e-commerce, conseil stratégique, formation. SecureFlow.",
      intro: "Au-delà de la sécurisation, SecureFlow développe vos échanges : import-export de produits alimentaires, agricoles, agropastoraux et vivriers, représentation commerciale et accompagnement stratégique et technique de vos équipes.",
      points: [
        { title: "Import-export de produits alimentaires, agricoles et vivriers", text: "Ainsi que la fourniture de machines agricoles, d'extraction minière et d'équipements de santé." },
        { title: "Représentation commerciale et e-commerce", text: "Vous représenter auprès de partenaires et développer vos ventes." },
        { title: "Conseil stratégique et audit", text: "Analyse de vos opérations et recommandations concrètes." },
        { title: "Formation et assistance technique", text: "Transmettre les bonnes pratiques à vos équipes." },
      ],
      forWho: "Entreprises qui veulent importer ou exporter depuis le Bénin et l'Afrique de l'Ouest, ou se faire accompagner sur un nouveau marché.",
      faq: [
        { q: "Quels produits importez-vous ou exportez-vous ?", a: "Des produits alimentaires, agricoles, agropastoraux et vivriers, ainsi que des équipements : machines agricoles, machines d'extraction minière et équipements de santé." },
        { q: "Proposez-vous des formations ?", a: "Oui : formation et assistance technique, en lien avec nos domaines d'intervention." },
      ],
    },
    en: {
      name: "International trade & advisory",
      h1: "Import-export and international trade advisory",
      metaTitle: "Import-export and international trade advisory, Benin",
      metaDescription: "Import-export of food, agricultural and staple products, commercial representation, e-commerce, strategic advisory and training. SecureFlow.",
      intro: "Beyond security, SecureFlow grows your trade: import-export of food, agricultural, agro-pastoral and staple products, commercial representation, and strategic and technical support for your teams.",
      points: [
        { title: "Import-export of food, agricultural and staple products", text: "Plus supply of agricultural machinery, mining extraction machinery and medical equipment." },
        { title: "Commercial representation and e-commerce", text: "Representing you with partners and growing your sales." },
        { title: "Strategic advisory and audit", text: "Analysis of your operations and practical recommendations." },
        { title: "Training and technical assistance", text: "Passing best practice on to your teams." },
      ],
      forWho: "Companies that want to import or export from Benin and West Africa, or need support entering a new market.",
      faq: [
        { q: "Which products do you import or export?", a: "Food, agricultural, agro-pastoral and staple products, as well as equipment: agricultural machinery, mining extraction machinery and medical equipment." },
        { q: "Do you offer training?", a: "Yes: training and technical assistance related to our fields of activity." },
      ],
    },
  },
];

export function serviceBySlug(slug: string | undefined) {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
