import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ArrowLeft, ShieldCheck, Search, Ship, CheckCircle2, Landmark, BarChart3, Globe, Handshake, TrendingUp, FileCheck, User, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import blog3 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1768785394569.jpeg";
import blog4 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.46_(1)_1768785394703.jpeg";
import blog5 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1768785394569.jpeg";
import blogHero from "../assets/trade-security-hero.jpg";
import blog1 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.13_1768785288045.jpeg";
import blog2 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.10_1768785288250.jpeg";
import mining_mockup1 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.48_1769165070500.jpeg";
import mining_mockup2 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_1769165079313.jpeg";
import mining_real from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_(1)_1769165079212.jpeg";
import china1 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.14_1769163276809.jpeg";
import china2 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.12_1769163276885.jpeg";
import china3 from "@assets/WhatsApp_Image_2026-01-18_at_13.26.11_1769163276911.jpeg";
import china4 from "@assets/WhatsApp_Image_2026-01-18_at_12.52.35_(1)_1769163276941.jpeg";
import china5 from "@assets/WhatsApp_Image_2026-01-18_at_12.52.35_1769163276961.jpeg";
import portCotonou from "../assets/port-cotonou.jpg";
import chinaHandshake from "@assets/WhatsApp_Image_2026-01-23_at_12.07.24_1769172827019.jpeg";
import dubaiOil1 from "../assets/dubai-oil-1.jpg";
import dubaiOil2 from "../assets/dubai-oil-2.jpg";
import miningEquip1 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_(1)_1769173262534.jpeg";
import miningEquip2 from "@assets/WhatsApp_Image_2026-01-18_at_13.32.47_1769173262566.jpeg";
import miningHeavy from "../assets/mining-heavy-equipment.jpg";
import goldResources from "../assets/gold-resources.jpg";
import mineralCobalt from "@assets/detailed-image-cobalt-ore-samples-382355897_1769181454241.jpg";
import mineralBauxite from "@assets/téléchargement_(1)_1769181454370.jpeg";
import mineralManganese from "@assets/téléchargement_1769181454489.jpeg";
import mineralDiamond from "@assets/images_1769181454517.jpeg";
import mineralGold from "@assets/carat-d-or_1769181454549.jpg";
import mineralLithium from "@assets/téléchargement_(2)_1769182252236.jpeg";
import mineralCopper from "@assets/images_(1)_1769182300693.jpeg";
import mineralIron from "@assets/images_(2)_1769182300585.jpeg";
import energyHero from "../assets/energy-hero.jpg";
import energyTransmission from "../assets/energy-transmission.jpg";
import energySolar from "../assets/energy-solar.jpg";
import energyThermal from "../assets/energy-thermal.jpg";
import energyHydro from "../assets/energy-hydro.jpg";
import energyWind from "../assets/energy-wind.jpg";
import energySubstation from "../assets/energy-substation.jpg";
import energyGenerator from "../assets/energy-generator.jpg";
import energyStorage from "../assets/energy-storage.jpg";
import eximFinance from "@assets/WhatsApp_Image_2026-01-18_at_13.26.09_(1)_1769173630906.jpeg";
import financePartnership from "../assets/finance-partnership.jpg";
import agricultureExport from "../assets/agriculture-export.jpg";
import agriculturePort from "../assets/agriculture-port.jpg";
import productRubber from "@assets/istockphoto-883099928-612x612_1769175407851.jpg";
import productCacao from "@assets/cacao_700-a3b45db_1769175407909.jpg";
import productShea from "@assets/GettyImages-930427238_1769175407937.jpg";
import productPeanut from "@assets/shutterstock_1094889128-600x400_1769175407959.jpg";
import productPalmOil from "@assets/Huile-Rouge-Palme-512x430_1769175407978.jpg";
import productCashewRaw from "@assets/depositphotos_128175078-stock-photo-nut-tree-cashew-growing-nu_1769175408007.jpg";
import productCashew from "@assets/depositphotos_680538178-stock-photo-photo-lots-cashew-nuts-whi_1769175408033.jpg";
import productRice from "@assets/grain-long-heap-GJX5N8_1769177411392.jpg";
import productPeppers from "@assets/Photos-pour-blog-largeur-13_1769177411392.jpg";
import healthHero from "../assets/health-hero.jpg";
import healthPharma from "../assets/health-pharma.jpg";
import healthDevices from "../assets/health-devices.jpg";
import healthColdchain from "../assets/health-coldchain.jpg";
import healthSurgical from "../assets/health-surgical.jpg";
import healthLab from "../assets/health-lab.jpg";
import healthConsumables from "../assets/health-consumables.jpg";
import healthTraditional from "../assets/health-traditional.jpg";
import aviationHero from "../assets/aviation-hero.jpg";
import airportTerminal from "../assets/airport-terminal.jpg";
import aviationParts from "../assets/aviation-parts.jpg";
import aviationCargo from "../assets/aviation-cargo.jpg";
import aviationHelicopter from "../assets/aviation-helicopter.jpg";
import aviationDrone from "../assets/aviation-drone.jpg";
import aviationGround from "../assets/aviation-ground.jpg";
import infraHero from "../assets/infra-hero.jpg";
import infraRoad from "../assets/infra-road.jpg";
import infraBridge from "../assets/infra-bridge.jpg";
import infraPort from "../assets/infra-port.jpg";
import infraWater from "../assets/infra-water.jpg";
import infraBuilding from "../assets/infra-building.jpg";
import oilRefinery from "../assets/oil-refinery.jpg";
import oilTanker from "../assets/oil-tanker.jpg";
import africaInvestment from "../assets/africa-investment.jpg";
import oilPipeline from "../assets/oil-pipeline.jpg";
import oilPlatform from "../assets/oil-platform.jpg";
import crudeOil from "@assets/main-coupee-personne-du-petrole-brut_1048944-25013837_1769192435875.jpg";
import carburantsImg from "@assets/depositphotos_45730357-stock-photo-pipe-line-transportation-in_1769192467454.jpg";
import fuelLourdImg from "@assets/fuel-lourd-bandeau-17-06_1769192599862.jpg";
import gazNaturelImg from "@assets/grande-usine-détail-de-nuit_1769192599918.jpg";
import lubrifiantsImg from "@assets/Photo_article_(10)_1769192976971.png";
import bitumeImg from "@assets/bitume-dans-un-tube-métallique-noir-liquide-cylindre-en-métal-_1769192977030.jpg";
import petrochimieImg from "@assets/Maquette_froide_Eluxyl_Petrochimie_1769193078255.jpg";

export default function BlogPost() {
  const { id } = useParams();

  if (id === "8") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={agricultureExport} alt="Agriculture et Agro-alimentaire" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Agriculture & Agro-alimentaire : Sécuriser les Flux de la Terre au Marché Mondial
              </h1>
              <p className="text-xl text-primary font-medium italic">
                De la production locale à l'exportation internationale, chaque étape compte
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                Le secteur agricole représente un pilier fondamental des économies africaines et mondiales. Pourtant, les opérateurs de ce secteur font face à des <strong className="text-foreground">risques majeurs</strong> : fraudes sur la qualité, défauts de paiement, pertes logistiques et arnaques aux intermédiaires. SECUREFLOW apporte une réponse complète à ces défis.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-green-400 w-8 h-8" /> Notre Mission dans l'Agriculture
                </h2>
                <p>
                  SECUREFLOW accompagne les <strong className="text-foreground">producteurs, exportateurs, coopératives agricoles et acheteurs internationaux</strong> dans la sécurisation de leurs transactions. De la vérification des partenaires à la supervision des livraisons, nous garantissons la fiabilité de chaque opération.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Les Risques du Commerce Agricole International
              </h2>
              <p>
                Le commerce de produits agricoles (céréales, coton, cacao, café, noix de cajou, etc.) expose les opérateurs à de nombreux risques spécifiques que SECUREFLOW identifie et neutralise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-red-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <Search className="text-red-400 w-5 h-5" /> Fraude sur la Qualité
                  </h3>
                  <p className="text-sm">
                    Produits non conformes, humidité excessive, mélanges avec des qualités inférieures, falsification des certificats d'origine.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-orange-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <FileCheck className="text-orange-400 w-5 h-5" /> Défaut de Paiement
                  </h3>
                  <p className="text-sm">
                    Acheteurs insolvables, lettres de crédit non honorées, retards de paiement chroniques impactant la trésorerie.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-amber-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <Ship className="text-amber-400 w-5 h-5" /> Pertes Logistiques
                  </h3>
                  <p className="text-sm">
                    Détournements au port, avaries durant le transport, retards affectant la fraîcheur des produits périssables.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-yellow-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <Landmark className="text-yellow-400 w-5 h-5" /> Intermédiaires Frauduleux
                  </h3>
                  <p className="text-sm">
                    Faux courtiers, commissions excessives, détournement de marchandises par des intermédiaires non vérifiés.
                  </p>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl my-12 group">
                <img src={agriculturePort} alt="Export agricole au port" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <p className="text-sm text-center text-muted-foreground italic -mt-6 mb-12">
                Supervision des opérations d'exportation agricole dans les principaux ports
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Les Services SECUREFLOW pour l'Agriculture
              </h2>

              <div className="space-y-8 my-12">
                <div className="glass-card p-8 rounded-2xl border-green-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Search className="text-green-400" /> 1. Vérification des Producteurs & Exportateurs
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Enquête de solvabilité et réputation commerciale</li>
                    <li>Vérification des certifications (bio, fair trade, etc.)</li>
                    <li>Contrôle des capacités de production réelles</li>
                    <li>Historique des transactions et litiges passés</li>
                    <li>Visite sur site des installations de stockage</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-blue-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <FileCheck className="text-blue-400" /> 2. Sécurisation des Contrats d'Achat
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Rédaction et révision de contrats conformes aux standards internationaux</li>
                    <li>Mise en place de clauses de protection (qualité, délais, pénalités)</li>
                    <li>Structuration des paiements sécurisés (LC, escrow)</li>
                    <li>Arbitrage et médiation en cas de litige</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-purple-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Ship className="text-purple-400" /> 3. Supervision Logistique Complète
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Inspection pré-embarquement (quantité, qualité, emballage)</li>
                    <li>Suivi en temps réel des conteneurs</li>
                    <li>Coordination avec les transitaires et agents portuaires</li>
                    <li>Vérification des documents d'exportation (phytosanitaires, origine)</li>
                    <li>Gestion des imprévus et plans de contingence</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-amber-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <ShieldCheck className="text-amber-400" /> 4. Réduction des Fraudes à l'Export
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Audit des intermédiaires et courtiers</li>
                    <li>Traçabilité de bout en bout des marchandises</li>
                    <li>Vérification croisée des documents et certificats</li>
                    <li>Alerte précoce sur les opérateurs à risque</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Nos Produits Agricoles
              </h2>
              <p className="mb-8">SECUREFLOW accompagne les opérateurs sur une large gamme de produits agricoles africains et internationaux. Voici les principales filières que nous fournissons :</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                <div className="glass-card rounded-2xl overflow-hidden border-green-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productCashewRaw} alt="Noix de Cajou Brutes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Noix de Cajou Brutes</h3>
                    <p className="text-sm text-muted-foreground">Export vers l'Inde, Vietnam, Brésil</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-amber-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productCashew} alt="Noix de Cajou Transformées" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Noix de Cajou Transformées</h3>
                    <p className="text-sm text-muted-foreground">Qualité premium pour l'Europe et USA</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-orange-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productShea} alt="Karité" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Karité</h3>
                    <p className="text-sm text-muted-foreground">Noix et beurre pour cosmétique et alimentaire</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-yellow-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productPeanut} alt="Arachide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Arachide</h3>
                    <p className="text-sm text-muted-foreground">Graines et huile d'arachide</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-red-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productPalmOil} alt="Huile de Palme" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Huile de Palme</h3>
                    <p className="text-sm text-muted-foreground">Huile rouge et dérivés</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-emerald-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productRubber} alt="Hévéa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Hévéa (Caoutchouc)</h3>
                    <p className="text-sm text-muted-foreground">Latex naturel pour l'industrie</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-stone-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productCacao} alt="Cacao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Cacao</h3>
                    <p className="text-sm text-muted-foreground">Fèves et poudre de cacao</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-slate-400/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productRice} alt="Riz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Riz</h3>
                    <p className="text-sm text-muted-foreground">Riz long grain et variétés locales</p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden border-rose-500/20 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={productPeppers} alt="Piments" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-lg">Piments & Épices</h3>
                    <p className="text-sm text-muted-foreground">Piments frais, séchés et épices</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-green-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Autres Produits Couverts
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Céréales</span>
                    <p className="text-xs text-muted-foreground">Maïs, Blé, Riz, Sorgho</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Café</span>
                    <p className="text-xs text-muted-foreground">Arabica, Robusta</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Oléagineux</span>
                    <p className="text-xs text-muted-foreground">Cajou, Karité, Soja</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Coton</span>
                    <p className="text-xs text-muted-foreground">Fibre, Graines</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réseau International</h3>
                  <p className="text-sm">Présence en Afrique, Moyen-Orient et Asie pour des vérifications sur site</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Sectorielle</h3>
                  <p className="text-sm">Connaissance approfondie des filières agricoles et de leurs spécificités</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Accompagnement Dédié</h3>
                  <p className="text-sm">Un interlocuteur unique pour chaque opération, de A à Z</p>
                </div>
              </div>

              <p>
                Que vous soyez <strong className="text-foreground">producteur cherchant des acheteurs fiables</strong>, <strong className="text-foreground">exportateur souhaitant sécuriser vos expéditions</strong>, ou <strong className="text-foreground">importateur voulant garantir la qualité de vos approvisionnements</strong>, SECUREFLOW est votre partenaire de confiance.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border-primary/30 mt-16 bg-gradient-to-br from-green-500/20 via-primary/5 to-transparent">
              <h3 className="text-2xl font-bold text-foreground mb-4">Sécurisez Vos Opérations Agricoles</h3>
              <p className="text-muted-foreground mb-6">
                Vous préparez une campagne d'exportation ou un achat de commodités agricoles ? Nos experts sont prêts à sécuriser votre transaction de bout en bout.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Demander un devis</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Tous nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "7") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={eximFinance} alt="Partenariat EXIM Finance" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Finance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Partenariat Stratégique avec EXIM Finance : Une Alliance de Confiance
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Renforcer l'écosystème financier pour des projets internationaux d'envergure
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                SECUREFLOW est fier d'annoncer un partenariat stratégique avec <strong className="text-foreground">EXIM Finance</strong>, institution financière de premier plan spécialisée dans le financement du commerce international et des projets d'infrastructure à grande échelle.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-3">
                  <Handshake className="text-primary w-8 h-8" /> Une Vision Partagée
                </h2>
                <p>
                  Cette alliance repose sur des valeurs communes : <strong className="text-foreground">excellence, intégrité et engagement</strong> envers nos clients. EXIM Finance apporte son expertise en structuration financière tandis que SECUREFLOW garantit la sécurisation opérationnelle des projets.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                EXIM Finance : Un Acteur Majeur du Financement International
              </h2>
              <p>
                Basée à Dubaï, EXIM Finance est reconnue pour son rôle clé dans le financement des échanges commerciaux entre l'Afrique, le Moyen-Orient et l'Asie. L'institution accompagne les entreprises dans leurs projets d'expansion à travers des solutions financières sur mesure.
              </p>

              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl my-12 group">
                <img src={financePartnership} alt="Partenariat financier international" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Présence Internationale</h3>
                  <p className="text-sm">Réseau couvrant plus de 40 pays sur 3 continents</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Conformité Garantie</h3>
                  <p className="text-sm">Standards internationaux et due diligence rigoureuse</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Solutions Flexibles</h3>
                  <p className="text-sm">Financements adaptés de 500K$ à 50M$ par projet</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Les Avantages de ce Partenariat
              </h2>
              <p>
                Cette collaboration stratégique permet à nos clients de bénéficier d'un accompagnement complet, de la structuration financière à la livraison sécurisée de leurs marchandises.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <TrendingUp className="text-primary" /> Accès Facilité au Financement
                  </h3>
                  <p className="text-sm">
                    Les clients SECUREFLOW bénéficient d'un accès privilégié aux lignes de crédit et instruments de financement d'EXIM Finance, avec des conditions préférentielles.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <ShieldCheck className="text-primary" /> Sécurisation de Bout en Bout
                  </h3>
                  <p className="text-sm">
                    La combinaison de l'expertise financière d'EXIM et de la sécurisation logistique de SECUREFLOW offre une protection optimale des investissements.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <FileCheck className="text-primary" /> Due Diligence Renforcée
                  </h3>
                  <p className="text-sm">
                    Vérification approfondie des contreparties et des fournisseurs pour minimiser les risques financiers et opérationnels.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <Globe className="text-primary" /> Couverture Géographique Étendue
                  </h3>
                  <p className="text-sm">
                    Opérations sécurisées en Afrique, Moyen-Orient, Asie et Europe grâce à notre réseau combiné de partenaires locaux.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary" /> Secteurs Couverts par ce Partenariat
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Énergie & Hydrocarbures</strong> : Financement et sécurisation des projets pétroliers et gaziers</li>
                  <li><strong className="text-foreground">Mines & Métaux</strong> : Accompagnement des exploitations minières de la prospection à l'export</li>
                  <li><strong className="text-foreground">Agriculture & Commodités</strong> : Financement des campagnes agricoles et logistique des matières premières</li>
                  <li><strong className="text-foreground">BTP & Infrastructure</strong> : Support financier et logistique pour les grands chantiers</li>
                  <li><strong className="text-foreground">Commerce International</strong> : Lettres de crédit, garanties et financement des flux commerciaux</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un Engagement Mutuel pour l'Excellence
              </h2>
              <p>
                Ce partenariat illustre la volonté de SECUREFLOW de s'entourer des meilleurs acteurs du marché pour offrir à ses clients un service irréprochable. EXIM Finance partage cette vision d'excellence et d'intégrité dans les affaires internationales.
              </p>
              <p>
                Ensemble, nous nous engageons à accompagner nos clients dans leurs projets les plus ambitieux, en combinant expertise financière de haut niveau et sécurisation opérationnelle sans compromis.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border-primary/30 mt-16 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent">
              <h3 className="text-2xl font-bold text-foreground mb-4">Bénéficiez de ce Partenariat</h3>
              <p className="text-muted-foreground mb-6">
                Vous avez un projet nécessitant un financement structuré et une sécurisation logistique ? Contactez-nous pour découvrir comment notre partenariat avec EXIM Finance peut vous accompagner.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "1") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={chinaHandshake} alt="Chambre de Commerce de Chine" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img src={china1} alt="Réunion Chambre de Commerce" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img src={china2} alt="Investisseurs Chinois" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Chambre de Commerce de Chine : SECUREFLOW comme Apporteur d'Affaires Stratégique
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Faciliter l'investissement direct et sécuriser les partenariats public-privé
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                SECUREFLOW a franchi une étape historique lors de sa récente mission à la Chambre de Commerce de Chine. Dans le cadre d'un rendez-vous d'investisseurs de haut niveau, notre organisation s'est positionnée non seulement comme un expert en sécurité, mais surtout comme un <strong>apporteur d'affaires stratégique</strong> indispensable pour les projets transcontinentaux.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <Landmark className="text-primary" /> Notre Rôle d'Apporteur d'Affaires
                </h2>
                <p>Au cœur de ces échanges, SECUREFLOW a agi comme le catalyseur permettant de :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identifier des opportunités d'investissement à haut potentiel en Afrique.</li>
                  <li>Présenter des projets structurants aux fonds d'investissement chinois.</li>
                  <li>Établir des protocoles de confiance mutuelle entre investisseurs et porteurs de projets.</li>
                  <li>Garantir la viabilité et la sécurité des capitaux engagés.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un Rendez-vous d'Investisseurs Décisif
              </h2>
              <p>
                La délégation de SECUREFLOW a rencontré des décideurs financiers et des capitaines d'industrie à Pékin. Les discussions ont porté sur le financement de grands travaux d'infrastructure, le développement de zones industrielles et l'exploitation responsable des ressources naturelles.
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg my-8 flex justify-center bg-black/20">
                <img src={china3} alt="Délégation SecureFlow à Pékin" className="max-h-[600px] w-auto object-contain" />
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi les investisseurs nous font confiance ?
              </h2>
              <p>
                En tant qu'apporteur d'affaires, SECUREFLOW apporte une valeur ajoutée unique : la <strong>sécurisation opérationnelle</strong>. Les investisseurs chinois voient en nous le partenaire capable de superviser l'exécution des projets sur le terrain en Afrique, minimisant ainsi les risques financiers et politiques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Rentabilité</h3>
                  <p className="text-sm">Sélection de projets avec des retours sur investissement maîtrisés.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Sûreté</h3>
                  <p className="text-sm">Mise en place de verrous de sécurité pour chaque dollar investi.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Une Vision pour l'Avenir
              </h2>
              <p>
                Ce partenariat avec la Chambre de Commerce de Chine ouvre la voie à une nouvelle ère de coopération économique. SECUREFLOW continue de construire ce pont de confiance, assurant que les investissements d'aujourd'hui deviennent les succès industriels de demain.
              </p>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Notre mission est de transformer les opportunités en réalités sécurisées pour nos partenaires internationaux."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                <Link href="/contact">Soumettre un projet d'investissement</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "2") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={dubaiOil1} alt="Secteur pétrolier à Dubaï" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Expansion à Dubaï : Partenariat Stratégique dans le Secteur Pétrolier
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Sécuriser les flux énergétiques entre le Golfe, l'Afrique et l'Asie
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                SECUREFLOW franchit une étape majeure dans son développement international avec l'établissement d'un partenariat stratégique à Dubaï, au cœur du hub pétrolier mondial. Cette alliance renforce notre capacité à sécuriser les transactions énergétiques et les flux de capitaux dans le secteur des hydrocarbures.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="text-primary" /> Pourquoi Dubaï ?
                </h2>
                <p>Dubaï représente un carrefour stratégique pour le commerce pétrolier mondial :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Point de jonction entre les producteurs du Golfe et les marchés asiatiques</li>
                  <li>Infrastructure portuaire de classe mondiale (Jebel Ali)</li>
                  <li>Cadre réglementaire favorable aux transactions internationales</li>
                  <li>Présence des plus grands traders pétroliers mondiaux</li>
                </ul>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl my-12">
                <img src={dubaiOil2} alt="Transport pétrolier maritime" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Notre rôle dans la chaîne pétrolière
              </h2>
              <p>
                Le commerce du pétrole implique des transactions de plusieurs millions de dollars, des chaînes logistiques complexes et des risques multiples. SECUREFLOW intervient à chaque étape critique pour garantir la sécurité des opérations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Due Diligence</h3>
                  <p className="text-sm">Vérification approfondie des contreparties et des licences d'exploitation.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Supervision Maritime</h3>
                  <p className="text-sm">Suivi des tankers et contrôle des opérations de chargement/déchargement.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Sécurisation Financière</h3>
                  <p className="text-sm">Protection des transactions via des mécanismes d'escrow et de LC.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un pont entre le Golfe et l'Afrique
              </h2>
              <p>
                Ce partenariat ouvre de nouvelles perspectives pour les acteurs africains du secteur énergétique. SECUREFLOW facilite désormais l'accès aux marchés du Golfe pour les importateurs et les investisseurs africains, tout en garantissant la conformité et la sécurité des opérations.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Avantages de notre présence à Dubaï
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accès direct aux raffineries et terminaux du Golfe</li>
                  <li>Négociation de contrats en temps réel avec les traders</li>
                  <li>Surveillance 24/7 des expéditions maritimes</li>
                  <li>Réduction des délais de transaction de 40%</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Vision pour l'avenir énergétique
              </h2>
              <p>
                Alors que la transition énergétique redéfinit les marchés mondiaux, SECUREFLOW se positionne comme un acteur clé pour accompagner les entreprises dans cette évolution, en sécurisant aussi bien les transactions d'hydrocarbures traditionnels que les nouveaux vecteurs énergétiques.
              </p>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dubaï n'est pas seulement un hub pétrolier, c'est le carrefour où se dessine l'avenir du commerce énergétique mondial. SECUREFLOW y est désormais un acteur incontournable."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Intéressé par nos services dans le secteur pétrolier ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Contactez notre bureau Dubaï</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "3") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={blog3} alt="Infrastructures Minières" className="w-full h-full object-cover bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Innovation Minière : Déploiement de Nouvelles Unités d'Extraction
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Optimiser la production et sécuriser les opérations sur site
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                SECUREFLOW franchit une nouvelle étape dans l'accompagnement des projets industriels avec le déploiement d'unités d'extraction minière de dernière génération. Ce projet récent combine ingénierie de pointe et protocoles de sécurité rigoureux pour transformer l'efficacité des sites d'exploitation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <Search className="text-primary" /> Conception & Ingénierie
                  </h3>
                  <p className="text-sm">
                    Développement de solutions sur mesure pour répondre aux défis géologiques et logistiques spécifiques de chaque site d'extraction.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-foreground font-bold flex items-center gap-2">
                    <ShieldCheck className="text-primary" /> Sécurité Opérationnelle
                  </h3>
                  <p className="text-sm">
                    Mise en œuvre de protocoles de sécurité avancés pour protéger les équipes et le matériel dans les environnements miniers les plus exigeants.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un processus de traitement optimisé
              </h2>
              <p>
                L'unité d'exploitation intègre des technologies de pointe permettant une récupération maximale des ressources tout en minimisant l'impact environnemental. Notre approche se concentre sur l'efficacité énergétique et la durabilité.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={miningEquip1} alt="Équipement d'extraction minière" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={miningEquip2} alt="Schéma du processus d'extraction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <p className="text-sm text-center text-muted-foreground italic -mt-6 mb-12">
                Équipements de traitement et schéma du processus d'extraction intégré
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Performance & Sécurité
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Augmentation de 30% de la capacité de traitement.</li>
                  <li>Systèmes de capteurs intégrés pour la maintenance préventive.</li>
                  <li>Protocoles de sécurité automatisés en cas d'anomalie.</li>
                  <li>Réduction des pertes de minerai lors du convoyage.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                L'avenir de l'exploitation minière responsable
              </h2>
              <p>
                Chez SECUREFLOW, nous croyons que l'innovation technologique est la clé d'une exploitation minière à la fois rentable et sécurisée. Ce projet témoigne de notre capacité à fournir des solutions "clés en main" aux acteurs du secteur extractif.
              </p>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Nous ne fournissons pas seulement des machines, nous bâtissons des infrastructures de confiance pour l'industrie de demain."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                <Link href="/contact">En savoir plus sur nos solutions minières</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "4") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={blog4} alt="Présence Diplomatique à Paris" className="w-full h-full object-cover bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Présence Diplomatique à Paris : Le Réseau Européen de SECUREFLOW
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Aligner les protocoles de sécurité sur les standards internationaux
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                Dans le cadre de son expansion internationale, SECUREFLOW a récemment consolidé sa présence à Paris. Ce déploiement stratégique vise à renforcer nos liens avec les institutions européennes et à harmoniser nos protocoles de sécurité avec les standards les plus exigeants du continent.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="text-primary" /> Objectifs de la Mission Parisienne
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Négociations avec des partenaires technologiques en cybersécurité.</li>
                  <li>Alignement sur les normes de conformité européennes (RGPD, lutte contre le blanchiment).</li>
                  <li>Facilitation des échanges transcontinentaux pour nos clients exportateurs.</li>
                  <li>Développement d'un réseau de partenaires logistiques certifiés UE.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un hub stratégique pour le commerce France-Afrique
              </h2>
              <p>
                Paris représente un point de jonction vital pour les flux financiers et logistiques entre l'Europe et l'Afrique de l'Ouest. En établissant des canaux directs avec les acteurs de la place parisienne, SECUREFLOW réduit les délais et augmente la transparence des transactions pour ses clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10">
                  <h3 className="text-foreground font-bold mb-2">Conformité</h3>
                  <p className="text-sm">Vérification rigoureuse selon les standards européens pour éliminer tout risque juridique.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10">
                  <h3 className="text-foreground font-bold mb-2">Réseau</h3>
                  <p className="text-sm">Accès direct aux principaux assureurs et banques d'investissement spécialisés dans l'export.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Sécuriser l'avenir du commerce transcontinental
              </h2>
              <p>
                Cette présence à Paris n'est qu'une étape de notre vision globale. En connectant les standards européens à notre expertise terrain en Afrique, nous créons un environnement d'affaires sans frontières et totalement sécurisé.
              </p>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "La sécurité n'a pas de frontières. Notre présence à Paris est le gage de notre engagement envers l'excellence internationale."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                <Link href="/contact">Démarrer vos échanges transcontinentaux</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "6") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={portCotonou} alt="Port Autonome de Cotonou" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Sécurisation des Échanges en Afrique de l'Ouest : Défis et Solutions
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Optimiser le corridor logistique entre le Port de Cotonou et l'hinterland
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                L'Afrique de l'Ouest connaît une croissance sans précédent de ses échanges commerciaux. Cependant, cette dynamique s'accompagne de complexités logistiques et de risques sécuritaires qui peuvent freiner l'élan des entreprises locales et internationales.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Les Enjeux Clés au Bénin
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fluctuaction des délais de dédouanement</li>
                  <li>Integrité physique des cargaisons en transit</li>
                  <li>Conformité réglementaire changeante</li>
                  <li>Sécurisation des paiements transfrontaliers</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Le rôle de SecureFlow dans la sous-région
              </h2>
              <p>
                Basé à Cotonou, SecureFlow bénéficie d'une position stratégique pour superviser les flux transitant par l'un des ports les plus dynamiques de la région. Notre expertise locale combinée à des standards internationaux permet de réduire drastiquement les incertitudes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10">
                  <h3 className="text-foreground font-bold mb-2">Supervision Portuaire</h3>
                  <p className="text-sm">Présence physique lors des opérations de chargement et déchargement pour prévenir les avaries et les vols.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10">
                  <h3 className="text-foreground font-bold mb-2">Escorte & Tracking</h3>
                  <p className="text-sm">Solutions de suivi en temps réel pour les marchandises en transit vers les pays de l'hinterland (Niger, Burkina Faso, Mali).</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Vers une intégration régionale plus sûre
              </h2>
              <p>
                Avec la mise en place de la ZLECAF (Zone de Libre-Échange Continentale Africaine), la sécurisation des échanges devient non plus un luxe, mais une nécessité absolue pour la compétitivité des entreprises.
              </p>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                <Link href="/contact">Optimiser vos flux régionaux</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "1") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={blog1} alt="Partenariats Asie" className="w-full h-full object-contain bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={china1} alt="Partenariat Chine BTTC" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={china2} alt="Négociations Chine" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={china4} alt="Réunion de travail Chine" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={china5} alt="Signature Partenariat Chine" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg my-8">
                <img src={china3} alt="Délégation SecureFlow en Chine" className="w-full h-full object-cover" />
              </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Partenariats stratégiques en Asie : sécuriser les flux avec la Chine
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Pourquoi l’Asie, et particulièrement la Chine, est un acteur clé du commerce mondial
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                Aujourd’hui, plus de 60 % des échanges de biens industriels et manufacturés de l’Afrique transitent par l’Asie, avec la Chine comme principal partenaire commercial. Machines, équipements, matières premières transformées, produits finis : la Chine est au cœur des chaînes d’approvisionnement mondiales.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Risques majeurs identifiés
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Faux fournisseurs et sociétés écrans</li>
                  <li>Contrats non respectés</li>
                  <li>Marchandises non conformes</li>
                  <li>Pertes financières importantes</li>
                </ul>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Nos négociations à Pékin : une étape clé
              </h2>
              <p>
                Lors de nos récentes négociations à Pékin, SecureFlow a engagé des discussions avec des acteurs logistiques certifiés, des partenaires industriels reconnus et des cabinets spécialisés en conformité. L’objectif est clair : sécuriser les flux commerciaux entre l’Afrique et l’Asie, dès la source.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Vérification</h3>
                  <p className="text-sm">Identification légale et contrôle d'existence réelle des usines.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Logistique</h3>
                  <p className="text-sm">Supervision des expéditions et conformité des marchandises.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">Protection</h3>
                  <p className="text-sm">Encadrement des paiements et réduction des risques financiers.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Un pont sécurisé entre l’Afrique et l’Asie
              </h2>
              <p>
                SecureFlow ne se limite pas à faciliter le commerce. Nous construisons un pont de confiance entre les importateurs africains, les industriels asiatiques et les institutions financières.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">Notre vision</h2>
              <p className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "L’avenir du commerce international repose sur la sécurité, la transparence et la confiance."
              </p>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                <Link href="/contact">Démarrer une collaboration</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "5") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={blogHero} alt="Sécurité commerce international" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Pourquoi la sécurité est devenue indispensable dans le commerce international
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Fraudes, faux fournisseurs et pertes financières : une réalité du commerce mondial
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                Le commerce international offre d’énormes opportunités, mais il expose également les entreprises, investisseurs et traders à des risques majeurs. 
                Au fil des années, les fraudes se sont multipliées : faux fournisseurs, documents falsifiés, marchandises inexistantes, cargaisons non livrées ou partenaires introuvables après paiement.
              </p>

              <p>
                Ces situations entraînent des pertes financières importantes, des blocages logistiques, des conflits juridiques et parfois la disparition pure et simple des fonds engagés.
                Dans de nombreux cas, ces pertes ne sont pas dues à un manque de volonté, mais à un manque de contrôle et de sécurisation des opérations.
              </p>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12">
                <h2 className="text-foreground text-2xl font-bold mb-4 flex items-center gap-2">
                  <Search className="text-primary" /> Le principal problème : la confiance aveugle
                </h2>
                <p>Beaucoup d’opérations de commerce international reposent encore sur :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>des intermédiaires non vérifiés</li>
                  <li>des documents transmis à distance</li>
                  <li>des partenaires jamais inspectés physiquement</li>
                  <li>une logistique confiée sans supervision réelle</li>
                </ul>
                <p className="mt-4 font-bold text-foreground italic">
                  C’est précisément dans ce contexte que SecureFlow intervient.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                SecureFlow : un tiers de confiance au cœur des transactions
              </h2>
              <p>
                SecureFlow agit comme un tiers de confiance indépendant, dont le rôle est de vérifier, sécuriser et superviser chaque étape d’une opération de commerce international.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">🔎 1. Vérifier</h3>
                  <p className="text-sm">Validation de l'existence réelle et capacité opérationnelle.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">🔐 2. Sécuriser</h3>
                  <p className="text-sm">Protection des intérêts financiers et processus transparents.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold mb-2">🚢 3. Superviser</h3>
                  <p className="text-sm">Suivi constant maritime, portuaire et aérien.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Une approche globale : logistique, sécurité et gestion des risques
              </h2>
              <p>
                Contrairement aux acteurs traditionnels, SecureFlow ne se limite pas à la logistique ou au conseil. 
                Nous combinons logistique, sécurité opérationnelle et gestion des risques, afin d’offrir une vision globale et maîtrisée des transactions internationales.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">Notre mission</h2>
              <p className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Chez SecureFlow, notre mission est simple mais essentielle : apporter de la certitude là où il n’y avait que de la confiance fragile."
              </p>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Prêt à sécuriser vos transactions ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Contacter SecureFlow</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Nos Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "9") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={miningHeavy} alt="Secteur Minier - Équipements Lourds" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Mines & Ressources Naturelles : Sécuriser l'Extraction et l'Exportation
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Du gisement au marché international, une chaîne de valeur sous contrôle
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                Le secteur minier représente l'un des piliers économiques de nombreux pays africains. Or, diamants, manganèse, bauxite, lithium, cobalt... Ces ressources stratégiques attirent des investisseurs du monde entier, mais leur exploitation s'accompagne de <strong className="text-foreground">risques majeurs</strong> que SECUREFLOW s'engage à maîtriser.
              </p>

              <div className="glass-card p-8 rounded-2xl border-amber-500/20 my-12 bg-gradient-to-r from-amber-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-amber-400 w-8 h-8" /> Les Risques du Secteur Minier
                </h2>
                <p className="mb-6">
                  L'industrie minière est exposée à des risques multiples qui peuvent compromettre la rentabilité des projets et la sécurité des investissements :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl border-red-500/20">
                    <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-red-400 w-4 h-4" /> Fraudes sur les Titres Miniers
                    </h4>
                    <p className="text-sm">Permis falsifiés, concessions litigieuses, propriétaires multiples sur une même zone</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-orange-500/20">
                    <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-orange-400 w-4 h-4" /> Partenaires Non Fiables
                    </h4>
                    <p className="text-sm">Sociétés écrans, intermédiaires sans garanties, historique opaque</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-yellow-500/20">
                    <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-yellow-400 w-4 h-4" /> Détournements Logistiques
                    </h4>
                    <p className="text-sm">Vol de minerais pendant le transport, substitution de cargaisons</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-purple-500/20">
                    <h4 className="text-foreground font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="text-purple-400 w-4 h-4" /> Non-Conformité Réglementaire
                    </h4>
                    <p className="text-sm">Violation des normes environnementales, sanctions internationales</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Notre Expertise dans le Secteur Minier
              </h2>
              <p>
                SECUREFLOW intervient à chaque étape critique de la chaîne de valeur minière, de l'évaluation initiale des projets jusqu'à l'exportation des minerais vers les marchés internationaux.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-8 rounded-2xl border-primary/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Search className="text-primary" /> 1. Due Diligence Minière
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Vérification de l'authenticité des titres et permis miniers</li>
                    <li>Audit des sociétés exploitantes et de leur historique</li>
                    <li>Analyse de la conformité réglementaire (local et international)</li>
                    <li>Évaluation des risques géopolitiques et sécuritaires</li>
                    <li>Vérification des certifications (Kimberley, ITIE, etc.)</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-blue-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <FileCheck className="text-blue-400" /> 2. Sécurisation des Contrats
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Rédaction et révision de contrats d'off-take</li>
                    <li>Structuration des accords de joint-venture</li>
                    <li>Clauses de protection (prix, volumes, qualité)</li>
                    <li>Mécanismes de règlement des différends</li>
                    <li>Garanties financières et bancaires</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-green-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Ship className="text-green-400" /> 3. Supervision Logistique
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Contrôle des opérations de chargement sur site</li>
                    <li>Escorte et tracking des convois de minerais</li>
                    <li>Supervision portuaire (pesage, empotage, scellage)</li>
                    <li>Vérification des documents d'exportation</li>
                    <li>Coordination avec les autorités douanières</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-purple-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <ShieldCheck className="text-purple-400" /> 4. Protection des Investissements
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Mise en place de comptes séquestres (escrow)</li>
                    <li>Structuration de lettres de crédit documentaires</li>
                    <li>Audit continu des flux financiers</li>
                    <li>Alerte précoce sur les risques émergents</li>
                    <li>Rapports périodiques aux investisseurs</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={miningEquip1} alt="Équipements d'extraction minière" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={goldResources} alt="Ressources minérales - Or" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Ressources Minérales Couvertes
              </h2>
              <p className="mb-8">
                Notre expertise couvre l'ensemble des ressources minérales, des métaux précieux aux minerais stratégiques nécessaires à la transition énergétique mondiale :
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                <div className="glass-card p-4 rounded-xl text-center border-yellow-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-yellow-500/20">
                    <img src={mineralGold} alt="Or - Pépites d'or" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Or</span>
                  <p className="text-xs text-muted-foreground">Lingots, pépites, concentrés</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-cyan-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-cyan-500/20">
                    <img src={mineralDiamond} alt="Diamant brut" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Diamants</span>
                  <p className="text-xs text-muted-foreground">Bruts, certifiés Kimberley</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-gray-400/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-gray-400/20">
                    <img src={mineralManganese} alt="Minerai de manganèse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Manganèse</span>
                  <p className="text-xs text-muted-foreground">Minerai, alliages</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-red-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-red-500/20">
                    <img src={mineralBauxite} alt="Bauxite" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Bauxite</span>
                  <p className="text-xs text-muted-foreground">Alumine, aluminium</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-blue-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-blue-500/20">
                    <img src={mineralCobalt} alt="Minerai de cobalt" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Cobalt</span>
                  <p className="text-xs text-muted-foreground">Batteries, électronique</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-green-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-green-500/20">
                    <img src={mineralLithium} alt="Minerai de lithium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Lithium</span>
                  <p className="text-xs text-muted-foreground">Transition énergétique</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-orange-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-orange-500/20">
                    <img src={mineralCopper} alt="Minerai de cuivre" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Cuivre</span>
                  <p className="text-xs text-muted-foreground">Câbles, électricité</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-amber-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-amber-500/20">
                    <img src={mineralIron} alt="Minerai de fer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Fer</span>
                  <p className="text-xs text-muted-foreground">Sidérurgie, construction</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Zones Géographiques d'Intervention
                </h2>
                <p className="mb-6">
                  SECUREFLOW dispose d'un réseau étendu de partenaires locaux dans les principales régions minières africaines :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique de l'Ouest</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Ghana (Or)</li>
                      <li>Guinée (Bauxite, Or)</li>
                      <li>Mali (Or)</li>
                      <li>Burkina Faso (Or, Zinc)</li>
                      <li>Côte d'Ivoire (Or, Manganèse)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique Centrale & Australe</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>RDC (Cobalt, Cuivre, Diamants)</li>
                      <li>Zambie (Cuivre)</li>
                      <li>Zimbabwe (Platine, Lithium)</li>
                      <li>Afrique du Sud (Or, Platine, Chrome)</li>
                      <li>Botswana (Diamants)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Présence Terrain</h3>
                  <p className="text-sm">Équipes locales dans les principales zones minières africaines</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Reconnue</h3>
                  <p className="text-sm">10+ ans d'expérience dans la sécurisation des opérations minières</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Partenaires de Confiance</h3>
                  <p className="text-sm">Réseau de juristes, auditeurs et experts techniques</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans le secteur minier, chaque dollar investi mérite une protection à la hauteur des enjeux. SECUREFLOW assure cette protection de bout en bout."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous avez un projet minier à sécuriser ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Article ID 10: Énergie & Électricité
  if (id === "10") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={energyHero} alt="Secteur Énergie & Électricité" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Énergie & Électricité : Sécuriser les Projets Énergétiques de A à Z
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Des équipements à la mise en service, une chaîne de valeur sous protection totale
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                Le secteur de l'énergie et de l'électricité est au cœur du développement économique de l'Afrique et du Moyen-Orient. Centrales électriques, réseaux de distribution, énergies renouvelables, équipements industriels... Ces projets d'envergure impliquent des investissements massifs et des risques considérables que <strong className="text-foreground">SECUREFLOW</strong> s'engage à maîtriser.
              </p>

              <div className="glass-card p-8 rounded-2xl border-blue-500/20 my-12 bg-gradient-to-r from-blue-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-blue-400 w-8 h-8" /> Les Risques du Secteur Énergétique
                </h2>
                <p className="mb-6">
                  L'industrie énergétique est exposée à des risques spécifiques qui peuvent compromettre la rentabilité des projets et retarder leur mise en service :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl border-red-500/20">
                    <h4 className="text-foreground font-bold mb-2">Fournisseurs Non Fiables</h4>
                    <p className="text-sm">Équipements non conformes, certifications falsifiées, retards de livraison, faillites de fournisseurs en cours de projet.</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-orange-500/20">
                    <h4 className="text-foreground font-bold mb-2">Risques Financiers</h4>
                    <p className="text-sm">Surfacturation des équipements, détournement de fonds, non-respect des conditions de paiement, fluctuations des devises.</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-yellow-500/20">
                    <h4 className="text-foreground font-bold mb-2">Défaillances Logistiques</h4>
                    <p className="text-sm">Dommages pendant le transport, pertes de cargaisons, retards douaniers, problèmes d'assurance et de responsabilité.</p>
                  </div>
                  <div className="glass-card p-4 rounded-xl border-purple-500/20">
                    <h4 className="text-foreground font-bold mb-2">Non-Conformité Technique</h4>
                    <p className="text-sm">Équipements ne respectant pas les normes locales, problèmes de compatibilité, absence de garanties valides.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                L'Expertise SECUREFLOW dans l'Énergie
              </h2>
              <p className="mb-8">
                Notre équipe d'experts accompagne les porteurs de projets énergétiques à chaque étape, de la sélection des fournisseurs à la réception finale des installations :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-8 rounded-2xl border-blue-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Search className="text-blue-400" /> 1. Due Diligence Fournisseurs
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Vérification des fabricants d'équipements électriques</li>
                    <li>Audit des certifications (ISO, CE, IEC)</li>
                    <li>Contrôle des références et projets antérieurs</li>
                    <li>Évaluation de la capacité de production</li>
                    <li>Analyse de la santé financière des fournisseurs</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-cyan-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <FileCheck className="text-cyan-400" /> 2. Sécurisation Contractuelle
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Rédaction et révision des contrats d'approvisionnement</li>
                    <li>Mise en place de garanties bancaires</li>
                    <li>Clauses de pénalités et conditions de résiliation</li>
                    <li>Protection de la propriété intellectuelle</li>
                    <li>Arbitrage et résolution des litiges</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-green-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Ship className="text-green-400" /> 3. Supervision Logistique
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Inspection avant expédition (PSI)</li>
                    <li>Suivi GPS des cargaisons sensibles</li>
                    <li>Coordination avec les transporteurs spécialisés</li>
                    <li>Gestion des formalités douanières</li>
                    <li>Assurance et couverture des risques transport</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-purple-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <ShieldCheck className="text-purple-400" /> 4. Sécurisation Financière
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Mise en place de lettres de crédit (L/C)</li>
                    <li>Comptes séquestres (escrow) pour paiements progressifs</li>
                    <li>Garanties de bonne fin d'exécution</li>
                    <li>Contrôle des flux financiers</li>
                    <li>Reporting financier aux investisseurs</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={energyTransmission} alt="Lignes de transmission électrique" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img src={energySolar} alt="Panneaux solaires - Énergie renouvelable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Types de Projets Accompagnés
              </h2>
              <p className="mb-8">
                SECUREFLOW intervient sur tous les types de projets énergétiques, des installations conventionnelles aux énergies renouvelables :
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                <div className="glass-card p-4 rounded-xl text-center border-yellow-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-yellow-500/20">
                    <img src={energyThermal} alt="Centrale thermique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Centrales Thermiques</span>
                  <p className="text-xs text-muted-foreground">Gaz, charbon, fuel</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-blue-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-blue-500/20">
                    <img src={energyHydro} alt="Barrage hydroélectrique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Hydroélectricité</span>
                  <p className="text-xs text-muted-foreground">Barrages, turbines</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-green-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-green-500/20">
                    <img src={energySolar} alt="Panneaux solaires" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Solaire</span>
                  <p className="text-xs text-muted-foreground">PV, CSP, stockage</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-cyan-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-cyan-500/20">
                    <img src={energyWind} alt="Éoliennes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Éolien</span>
                  <p className="text-xs text-muted-foreground">Onshore, offshore</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-orange-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-orange-500/20">
                    <img src={energyTransmission} alt="Réseaux haute tension" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Réseaux HT/MT</span>
                  <p className="text-xs text-muted-foreground">Lignes, transformateurs</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-purple-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-purple-500/20">
                    <img src={energySubstation} alt="Poste source électrique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Postes Sources</span>
                  <p className="text-xs text-muted-foreground">Distribution électrique</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-red-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-red-500/20">
                    <img src={energyGenerator} alt="Groupe électrogène industriel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Groupes Électrogènes</span>
                  <p className="text-xs text-muted-foreground">Industrie, secours</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-amber-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-amber-500/20">
                    <img src={energyStorage} alt="Système de stockage d'énergie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Stockage</span>
                  <p className="text-xs text-muted-foreground">Batteries, BESS</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Zones Géographiques d'Intervention
                </h2>
                <p className="mb-6">
                  SECUREFLOW accompagne les projets énergétiques dans les régions à fort potentiel de croissance :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Nigéria (Gaz, Solaire)</li>
                      <li>Ghana (Thermique, Éolien)</li>
                      <li>Côte d'Ivoire (Hydroélectricité)</li>
                      <li>Sénégal (Solaire, Éolien)</li>
                      <li>Kenya (Géothermie, Éolien)</li>
                      <li>Afrique du Sud (Charbon, Renouvelables)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Moyen-Orient & Asie</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Émirats Arabes Unis (Solaire, Nucléaire)</li>
                      <li>Arabie Saoudite (Gaz, Solaire)</li>
                      <li>Qatar (GNL, Électricité)</li>
                      <li>Inde (Charbon, Renouvelables)</li>
                      <li>Pakistan (Hydroélectricité)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Équipements Stratégiques Sécurisés
              </h2>
              <p className="mb-8">
                Nous sécurisons l'approvisionnement de tous les équipements critiques pour vos projets énergétiques :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Production</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Turbines (gaz, vapeur, hydro)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Générateurs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Panneaux solaires</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Éoliennes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Chaudières industrielles</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Transmission</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Transformateurs HT/MT</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Câbles haute tension</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pylônes et accessoires</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Disjoncteurs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Sectionneurs</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Distribution & Contrôle</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Tableaux électriques</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Systèmes SCADA</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Compteurs intelligents</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Batteries de stockage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Onduleurs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réseau International</h3>
                  <p className="text-sm">Partenaires dans les principaux pays fabricants d'équipements (Chine, Europe, USA)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Technique</h3>
                  <p className="text-sm">Ingénieurs spécialisés dans les normes électriques internationales (IEC, IEEE)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Accompagnement Complet</h3>
                  <p className="text-sm">De l'étude de faisabilité à la mise en service, un suivi à chaque étape</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans le secteur énergétique, chaque équipement compte. Une défaillance peut coûter des millions et retarder des projets critiques. SECUREFLOW garantit que vos investissements arrivent conformes, à temps, et en toute sécurité."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous avez un projet énergétique à sécuriser ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Article 11: Santé & Équipements Médicaux
  if (id === "11") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={healthHero} alt="Santé & Équipements Médicaux" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Santé & Équipements Médicaux : Sécuriser les Importations Critiques pour la Vie
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Quand chaque livraison compte, la fiabilité n'est pas une option
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed mb-8">
                Le secteur de la santé repose sur des chaînes d'approvisionnement mondiales complexes. Médicaments, dispositifs médicaux, équipements hospitaliers, réactifs de laboratoire – chaque produit importé doit répondre à des normes strictes de qualité, de traçabilité et de conformité. <strong className="text-foreground">SECUREFLOW</strong> accompagne les acteurs de la santé en Afrique, au Moyen-Orient et dans les marchés émergents pour sécuriser leurs importations critiques.
              </p>

              <div className="glass-card p-8 rounded-2xl border-red-500/20 my-12 bg-gradient-to-r from-red-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-red-400" /> Les Risques du Secteur Médical
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Contrefaçons Médicamenteuses</h4>
                        <p className="text-sm">10% des médicaments dans les pays en développement sont contrefaits selon l'OMS – un danger mortel pour les patients.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Ruptures de Chaîne du Froid</h4>
                        <p className="text-sm">Vaccins, insuline, réactifs – une rupture de température peut rendre des lots entiers inutilisables.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Fournisseurs Non Certifiés</h4>
                        <p className="text-sm">Des fabricants sans certifications ISO 13485, CE ou FDA peuvent livrer des équipements non conformes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Fraudes Documentaires</h4>
                        <p className="text-sm">Certificats d'analyse falsifiés, documents de conformité contrefaits – des risques légaux et sanitaires majeurs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                L'Expertise SECUREFLOW dans le Secteur Santé
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Search className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Vérification des Fournisseurs</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Audit des certifications (ISO, CE, FDA, GMP)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vérification de la légitimité du fabricant</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Contrôle des références commerciales</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Enquête sur l'historique de conformité</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Ship className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Sécurisation Logistique</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Supervision de la chaîne du froid</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Suivi GPS temps réel des cargaisons</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Coordination douanière prioritaire</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion des formalités sanitaires</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Contrôle Qualité & Conformité</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Inspection avant expédition (PSI)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vérification des certificats d'analyse</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Test d'authenticité des produits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Contrôle des numéros de lot et dates</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Prévention des Fraudes</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Détection des contrefaçons</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Traçabilité complète des produits</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Sécurisation des paiements</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Protection contractuelle renforcée</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Types d'Équipements & Produits Sécurisés
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-4 rounded-xl text-center border-red-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-red-500/20">
                    <img src={healthPharma} alt="Produits pharmaceutiques" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Pharmaceutiques</span>
                  <p className="text-xs text-muted-foreground">Médicaments, vaccins, insuline</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-blue-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-blue-500/20">
                    <img src={healthDevices} alt="Dispositifs médicaux" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Imagerie Médicale</span>
                  <p className="text-xs text-muted-foreground">IRM, Scanner, Échographes</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-cyan-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-cyan-500/20">
                    <img src={healthColdchain} alt="Chaîne du froid" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Chaîne du Froid</span>
                  <p className="text-xs text-muted-foreground">Transport réfrigéré, stockage</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-green-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-green-500/20">
                    <img src={healthSurgical} alt="Instruments chirurgicaux" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Chirurgie</span>
                  <p className="text-xs text-muted-foreground">Instruments, implants, prothèses</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-purple-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-purple-500/20">
                    <img src={healthLab} alt="Équipements de laboratoire" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Laboratoire</span>
                  <p className="text-xs text-muted-foreground">Analyseurs, réactifs, tests</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-amber-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-amber-500/20">
                    <img src={healthConsumables} alt="Consommables médicaux" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Consommables</span>
                  <p className="text-xs text-muted-foreground">Gants, seringues, masques</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-emerald-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-emerald-500/20">
                    <img src={healthTraditional} alt="Médecine traditionnelle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Médecine Traditionnelle</span>
                  <p className="text-xs text-muted-foreground">Plantes, extraits naturels</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Zones Géographiques d'Intervention
                </h2>
                <p className="mb-6">
                  SECUREFLOW accompagne les importations médicales dans les régions où la qualité des approvisionnements est critique :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Côte d'Ivoire (Hôpitaux, cliniques privées)</li>
                      <li>Sénégal (Programmes de vaccination)</li>
                      <li>Nigéria (Équipements hospitaliers)</li>
                      <li>Ghana (Laboratoires d'analyse)</li>
                      <li>RDC (Aide humanitaire médicale)</li>
                      <li>Cameroun (Centres de diagnostic)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Moyen-Orient & Asie</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Émirats Arabes Unis (Hôpitaux de luxe)</li>
                      <li>Arabie Saoudite (Équipements de pointe)</li>
                      <li>Qatar (Centres médicaux)</li>
                      <li>Inde (Fabrication pharmaceutique)</li>
                      <li>Bangladesh (Génériques certifiés)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Équipements Stratégiques Sécurisés
              </h2>
              <p className="mb-8">
                Nous sécurisons l'approvisionnement de tous les équipements critiques pour vos établissements de santé :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Imagerie & Diagnostic</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> IRM et scanners</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Échographes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Radiographie numérique</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Endoscopes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Moniteurs patients</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Bloc Opératoire</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Tables d'opération</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Éclairages chirurgicaux</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Appareils d'anesthésie</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Défibrillateurs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Instruments stériles</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Laboratoire & Pharmacie</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Analyseurs biochimiques</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Centrifugeuses</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Réfrigérateurs médicaux</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Armoires à médicaments</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Autoclaves</li>
                  </ul>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-emerald-500/20 my-12 bg-gradient-to-r from-emerald-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-emerald-400" /> Médecine Traditionnelle & Phytothérapie
                </h2>
                <p className="mb-6">
                  SECUREFLOW accompagne également le secteur de la médecine traditionnelle africaine et de la phytothérapie, un marché en pleine croissance qui nécessite des garanties de qualité et de traçabilité :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-foreground font-bold mb-3">Produits Sécurisés</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Plantes médicinales séchées</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Extraits et huiles essentielles</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Compléments à base de plantes</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Remèdes traditionnels certifiés</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Produits cosmétiques naturels</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-3">Notre Accompagnement</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Vérification des producteurs locaux</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Contrôle qualité des matières premières</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Certification et traçabilité</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Conformité aux normes d'export</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Protection contre les contrefaçons</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réseau Mondial</h3>
                  <p className="text-sm">Partenaires vérifiés en Chine, Europe, USA, Inde – les principaux fabricants mondiaux</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Réglementaire</h3>
                  <p className="text-sm">Maîtrise des normes FDA, CE, ISO 13485, GMP et des exigences locales</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Accompagnement Dédié</h3>
                  <p className="text-sm">Un interlocuteur unique du sourcing à la livraison finale dans votre établissement</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans le secteur de la santé, une contrefaçon peut coûter des vies. Une rupture de chaîne du froid peut détruire des millions en vaccins. SECUREFLOW garantit que vos équipements médicaux arrivent authentiques, conformes et prêts à sauver des vies."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous importez des équipements médicaux ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Article 13: Infrastructures & Projets
  if (id === "13") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={infraHero} alt="Infrastructures & Projets" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-slate-500/10 text-slate-400 border-slate-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Infrastructures & Grands Projets : Sécuriser les Investissements Stratégiques
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Coordination, conformité et protection pour les projets complexes à dimension internationale
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed mb-8">
                Les grands projets d'infrastructure – routes, ponts, ports, bâtiments, réseaux d'eau et d'énergie – représentent des investissements colossaux impliquant de nombreux acteurs internationaux. Entre les maîtres d'ouvrage, les bureaux d'études, les entreprises de construction, les fournisseurs d'équipements et les financeurs, la coordination et la sécurisation sont essentielles. <strong className="text-foreground">SECUREFLOW</strong> intervient comme tiers de confiance pour protéger chaque étape de ces projets stratégiques.
              </p>

              <div className="glass-card p-8 rounded-2xl border-slate-500/20 my-12 bg-gradient-to-r from-slate-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-slate-400" /> Les Risques des Grands Projets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-slate-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Multiplicité des Acteurs</h4>
                        <p className="text-sm">Maîtres d'ouvrage, sous-traitants, fournisseurs internationaux – les responsabilités se diluent et les risques augmentent.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-slate-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Défaillances Financières</h4>
                        <p className="text-sm">Faillite de sous-traitants, détournement de fonds, retards de paiement en cascade.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-slate-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Non-Conformité Technique</h4>
                        <p className="text-sm">Matériaux de qualité inférieure, équipements non certifiés, normes locales non respectées.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-slate-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Retards & Pénalités</h4>
                        <p className="text-sm">Dépassements de délais entraînant des pénalités contractuelles et des pertes financières majeures.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                L'Expertise SECUREFLOW en Infrastructures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Search className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Vérification des Prestataires</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Audit financier des entreprises</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vérification des références projets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Contrôle des certifications ISO/OHSAS</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Enquête sur les antécédents</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Ship className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Coordination Logistique</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion des flux d'équipements lourds</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dédouanement et transit international</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Supervision des livraisons sur chantier</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion des transports exceptionnels</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Supervision Contractuelle</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Revue des contrats et conditions</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Suivi des jalons et livrables</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion des avenants et modifications</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Médiation en cas de litiges</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Sécurisation Financière</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Comptes séquestres pour paiements</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Garanties de bonne exécution</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Cautions et garanties bancaires</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Protection contre les défaillances</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Types de Projets Sécurisés
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-4 rounded-xl text-center border-slate-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-slate-500/20">
                    <img src={infraRoad} alt="Routes et autoroutes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Routes & Autoroutes</span>
                  <p className="text-xs text-muted-foreground">Construction, réhabilitation</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-blue-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-blue-500/20">
                    <img src={infraBridge} alt="Ponts et ouvrages d'art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Ponts & Ouvrages</span>
                  <p className="text-xs text-muted-foreground">Génie civil, structures</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-cyan-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-cyan-500/20">
                    <img src={infraPort} alt="Ports et infrastructures maritimes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Ports & Maritime</span>
                  <p className="text-xs text-muted-foreground">Quais, terminaux, dragages</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-teal-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-teal-500/20">
                    <img src={infraWater} alt="Réseaux d'eau" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Eau & Assainissement</span>
                  <p className="text-xs text-muted-foreground">Barrages, stations, réseaux</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-amber-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-amber-500/20">
                    <img src={infraBuilding} alt="Bâtiments" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Bâtiments</span>
                  <p className="text-xs text-muted-foreground">Hôpitaux, écoles, bureaux</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-orange-500/30">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-orange-600/30 flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-orange-400" />
                  </div>
                  <span className="text-foreground font-bold text-base">Énergie</span>
                  <p className="text-xs text-muted-foreground">Centrales, réseaux, postes</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Zones Géographiques d'Intervention
                </h2>
                <p className="mb-6">
                  SECUREFLOW accompagne les grands projets d'infrastructure sur les marchés en développement où les enjeux sont les plus importants :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique de l'Ouest</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Côte d'Ivoire (Pont Cocody, autoroutes)</li>
                      <li>Sénégal (TER, port de Ndayane)</li>
                      <li>Ghana (Routes, barrages)</li>
                      <li>Nigéria (Infrastructures urbaines)</li>
                      <li>Bénin (Projets gouvernementaux)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique Centrale & Est</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Cameroun (Barrages, ports)</li>
                      <li>RDC (Mines, routes, énergie)</li>
                      <li>Kenya (SGR, infrastructures urbaines)</li>
                      <li>Éthiopie (Grands barrages, routes)</li>
                      <li>Rwanda (Smart cities, infrastructures)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Équipements & Matériaux Stratégiques
              </h2>
              <p className="mb-8">
                Nous sécurisons l'approvisionnement de tous les matériaux et équipements critiques pour vos chantiers :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Génie Civil</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Ciment et béton spéciaux</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Acier de construction</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Bitume et enrobés</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Géotextiles et membranes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Préfabriqués béton</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Équipements Lourds</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Grues et engins de levage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Bulldozers et pelles</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Centrales à béton</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Compacteurs et rouleaux</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Groupes électrogènes</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Installations Techniques</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pompes et tuyauteries</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vannes et équipements hydrauliques</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Câblages et armoires électriques</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Équipements SCADA</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Systèmes de sécurité</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Multi-Pays</h3>
                  <p className="text-sm">Connaissance des réglementations, des acteurs locaux et des pratiques de chaque marché africain</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Tiers de Confiance</h3>
                  <p className="text-sm">Position neutre entre maîtres d'ouvrage, entreprises et fournisseurs pour garantir l'équité</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Accompagnement Complet</h3>
                  <p className="text-sm">De l'appel d'offres à la réception des travaux, un suivi continu de votre projet</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans les grands projets d'infrastructure, un fournisseur défaillant peut bloquer tout un chantier. Un matériau non conforme peut compromettre la sécurité d'un ouvrage. SECUREFLOW sécurise chaque maillon de la chaîne pour garantir le succès de vos investissements stratégiques."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous pilotez un projet d'infrastructure ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Article 12: Aviation & Transport Spécialisé
  if (id === "12") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={airportTerminal} alt="Aviation & Transport Spécialisé" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">
                Secteurs d'Activité
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Aviation & Transport Spécialisé : Sécuriser les Flux à Haute Valeur
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Quand chaque pièce, chaque cargaison et chaque délai compte
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed mb-8">
                Le secteur aéronautique et le transport spécialisé représentent des marchés où la précision, la conformité et la sécurité sont non négociables. Pièces détachées d'avion, fret aérien de valeur, hélicoptères, drones industriels – chaque transaction implique des enjeux financiers et opérationnels considérables. <strong className="text-foreground">SECUREFLOW</strong> accompagne les acteurs de l'aviation pour sécuriser leurs approvisionnements et leurs opérations logistiques à l'international.
              </p>

              <div className="glass-card p-8 rounded-2xl border-indigo-500/20 my-12 bg-gradient-to-r from-indigo-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-indigo-400" /> Les Risques du Secteur Aéronautique
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-indigo-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Pièces Contrefaites</h4>
                        <p className="text-sm">Des pièces non certifiées peuvent mettre en danger la sécurité des aéronefs et entraîner des accidents catastrophiques.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-indigo-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Fournisseurs Non Agréés</h4>
                        <p className="text-sm">Sans certification EASA, FAA ou CAAC, les équipements ne peuvent pas être utilisés légalement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-indigo-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Retards Critiques</h4>
                        <p className="text-sm">Un avion cloué au sol coûte des dizaines de milliers d'euros par jour – les délais de livraison sont cruciaux.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-indigo-400 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold">Réglementations Complexes</h4>
                        <p className="text-sm">Export control, ITAR, EAR – la conformité réglementaire internationale est un défi permanent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                L'Expertise SECUREFLOW dans l'Aviation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Search className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Vérification des Fournisseurs</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Audit des certifications (EASA, FAA, CAAC)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vérification des agréments Part 21/145</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Contrôle des références OEM</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Enquête sur l'historique des transactions</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <Ship className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Supervision Logistique</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Coordination du fret aérien express</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Suivi temps réel des expéditions AOG</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion douanière prioritaire</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Emballage et conditionnement spécialisé</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Documentation & Conformité</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Vérification des certificats EASA Form 1</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Contrôle des documents de traçabilité</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Conformité ITAR/EAR pour l'export</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Gestion des licences d'exportation</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20">
                  <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-3">Sécurisation Financière</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Escrow pour transactions à haute valeur</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Lettres de crédit documentaires</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Garanties de bonne exécution</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Protection contre les défauts cachés</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Types d'Aéronefs & Équipements Sécurisés
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-4 rounded-xl text-center border-indigo-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-indigo-500/20">
                    <img src={aviationParts} alt="Pièces aéronautiques" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Pièces Détachées</span>
                  <p className="text-xs text-muted-foreground">Moteurs, APU, trains d'atterrissage</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-blue-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-blue-500/20">
                    <img src={aviationCargo} alt="Fret aérien" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Fret Aérien</span>
                  <p className="text-xs text-muted-foreground">Cargaisons de valeur, AOG</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-cyan-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-cyan-500/20">
                    <img src={aviationHelicopter} alt="Hélicoptères" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Hélicoptères</span>
                  <p className="text-xs text-muted-foreground">Civil, offshore, médical</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-purple-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-purple-500/20">
                    <img src={aviationDrone} alt="Drones industriels" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Drones & UAV</span>
                  <p className="text-xs text-muted-foreground">Inspection, surveillance, cargo</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-amber-500/30 group">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-amber-500/20">
                    <img src={aviationGround} alt="Équipements sol" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-foreground font-bold text-base">Équipements Sol</span>
                  <p className="text-xs text-muted-foreground">GSE, tracteurs, passerelles</p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center border-green-500/30">
                  <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-green-500/20 bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-green-400" />
                  </div>
                  <span className="text-foreground font-bold text-base">Avionique</span>
                  <p className="text-xs text-muted-foreground">Cockpit, navigation, com</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-primary/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-primary" /> Zones Géographiques d'Intervention
                </h2>
                <p className="mb-6">
                  SECUREFLOW accompagne les acteurs de l'aviation sur les marchés clés où la sécurisation des approvisionnements est stratégique :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Nigéria (Compagnies aériennes, hélicoptères offshore)</li>
                      <li>Angola (Aviation pétrolière)</li>
                      <li>Afrique du Sud (MRO, compagnies aériennes)</li>
                      <li>Kenya (Hub régional, fret)</li>
                      <li>Éthiopie (Ethiopian Airlines)</li>
                      <li>Maroc (Royal Air Maroc, MRO)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Moyen-Orient & International</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Émirats Arabes Unis (Hub mondial, MRO)</li>
                      <li>Qatar (Qatar Airways)</li>
                      <li>Arabie Saoudite (SAUDIA, flotte gouvernementale)</li>
                      <li>Inde (Marché en croissance rapide)</li>
                      <li>Singapour (Hub asiatique, MRO)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Équipements & Pièces Stratégiques
              </h2>
              <p className="mb-8">
                Nous sécurisons l'approvisionnement de tous les composants critiques pour vos opérations aériennes :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Propulsion</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Moteurs et réacteurs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> APU (Auxiliary Power Unit)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Hélices et pales</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Inverseurs de poussée</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Nacelles moteurs</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Structure & Atterrissage</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Trains d'atterrissage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Roues et freins</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Volets et gouvernes</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Pièces de fuselage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Composites et matériaux</li>
                  </ul>
                </div>
                <div className="glass-card p-5 rounded-xl border-white/10">
                  <h4 className="text-foreground font-bold mb-3">Avionique & Systèmes</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Cockpit et displays</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Systèmes de navigation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Communications radio</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Radar météo</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Systèmes hydrauliques</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réseau Mondial</h3>
                  <p className="text-sm">Partenaires vérifiés auprès des OEM (Boeing, Airbus, Safran, GE, Rolls-Royce)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Réglementaire</h3>
                  <p className="text-sm">Maîtrise des normes EASA, FAA, CAAC et des réglementations export (ITAR, EAR)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réactivité AOG</h3>
                  <p className="text-sm">Service d'urgence 24/7 pour les situations Aircraft On Ground critiques</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans l'aviation, chaque pièce doit être traçable, certifiée et authentique. Un composant contrefait peut coûter des vies. SECUREFLOW garantit que vos approvisionnements aéronautiques répondent aux plus hauts standards de sécurité et de conformité."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous opérez dans le secteur aéronautique ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "14") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/secteurs">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all" data-testid="link-back-sectors">
              <ArrowLeft className="w-4 h-4" /> Retour aux secteurs
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={oilRefinery} alt="Pétrole et Gaz - Raffinerie" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Secteur Stratégique</Badge>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                  Pétrole & Gaz : Sécuriser vos Opérations Énergétiques
                </h1>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Le secteur pétrolier et gazier représente l'un des piliers de l'économie mondiale. Les transactions dans ce domaine impliquent des volumes financiers considérables, des chaînes logistiques complexes et des risques multidimensionnels. <strong className="text-foreground">SECUREFLOW</strong> accompagne les opérateurs pétroliers, les raffineries, les distributeurs et les traders pour sécuriser chaque étape de leurs opérations.
              </p>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Les Défis du Secteur Pétrolier & Gazier
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="glass-card p-6 rounded-xl border-yellow-500/20">
                  <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Volatilité des Prix</h3>
                  <p className="text-sm">Les marchés pétroliers sont soumis à des fluctuations rapides liées à la géopolitique, aux quotas OPEP et aux crises mondiales.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-yellow-500/20">
                  <ShieldCheck className="w-10 h-10 text-yellow-500 mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Fraudes & Contrefaçons</h3>
                  <p className="text-sm">Faux certificats d'origine, produits frelatés, intermédiaires fantômes - les risques de fraude sont omniprésents.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-yellow-500/20">
                  <Ship className="w-10 h-10 text-yellow-500 mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Logistique Complexe</h3>
                  <p className="text-sm">Transport maritime, pipelines, stockage - chaque maillon de la chaîne représente un point de vulnérabilité.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-yellow-500/20">
                  <FileCheck className="w-10 h-10 text-yellow-500 mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Conformité Réglementaire</h3>
                  <p className="text-sm">Sanctions internationales, normes environnementales, certifications qualité - la conformité est cruciale.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Notre Expertise Pétrolière & Gazière
              </h2>

              <p className="mb-8">
                SECUREFLOW intervient sur l'ensemble de la chaîne de valeur pétrolière et gazière, du puits de forage jusqu'au consommateur final :
              </p>

              <div className="relative aspect-video rounded-2xl overflow-hidden my-8 border border-white/10">
                <img src={oilPlatform} alt="Plateforme pétrolière offshore" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">Plateformes offshore : extraction et première transformation</p>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                1. Vérification des Fournisseurs & Partenaires
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Due diligence complète</strong> des producteurs, raffineurs et distributeurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Vérification des licences</strong> d'exploitation et autorisations gouvernementales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Contrôle des sanctions</strong> (OFAC, UE, ONU) et listes noires internationales</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Analyse de la réputation</strong> et historique des transactions</span>
                </li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                2. Sécurisation des Contrats & Transactions
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Révision contractuelle</strong> des accords d'achat/vente (SPA, GSPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Sécurisation des paiements</strong> via lettres de crédit et escrow accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Négociation des termes</strong> INCOTERMS adaptés (CIF, FOB, DES)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Protection contre la fraude</strong> documentaire et les faux BL</span>
                </li>
              </ul>

              <div className="relative aspect-video rounded-2xl overflow-hidden my-8 border border-white/10">
                <img src={oilTanker} alt="Pétrolier transport maritime" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">Transport maritime : supervision des cargaisons pétrolières</p>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                3. Supervision Logistique & Transport
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Supervision des chargements</strong> dans les terminaux pétroliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Suivi GPS des tankers</strong> et surveillance des routes maritimes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Coordination avec les SGS</strong> et inspecteurs indépendants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Gestion des pipelines</strong> et infrastructures de transport terrestre</span>
                </li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                4. Contrôle Qualité & Conformité
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Analyses en laboratoire</strong> certifié (densité API, teneur en soufre)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Vérification des spécifications</strong> contractuelles (Brent, WTI, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Certification environnementale</strong> et conformité aux normes IMO</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span><strong className="text-foreground">Traçabilité documentaire</strong> de l'origine à la destination</span>
                </li>
              </ul>

              <div className="relative aspect-video rounded-2xl overflow-hidden my-8 border border-white/10">
                <img src={oilPipeline} alt="Pipeline pétrole et gaz" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm">Pipelines : infrastructure critique pour le transport terrestre</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Produits Pétroliers & Dérivés Couverts
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={crudeOil} alt="Pétrole brut" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Pétrole Brut</h4>
                  <p className="text-xs text-muted-foreground">Brent, WTI, Bonny Light</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={carburantsImg} alt="Carburants" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Carburants</h4>
                  <p className="text-xs text-muted-foreground">Essence, Diesel, Kérosène</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={gazNaturelImg} alt="Gaz Naturel" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Gaz Naturel</h4>
                  <p className="text-xs text-muted-foreground">GNL, GPL, Propane</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={fuelLourdImg} alt="Fuel Lourd" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Fuel Lourd</h4>
                  <p className="text-xs text-muted-foreground">HFO, VLSFO, Mazout</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={bitumeImg} alt="Bitume" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Bitume</h4>
                  <p className="text-xs text-muted-foreground">Routes, construction</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={lubrifiantsImg} alt="Lubrifiants" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Lubrifiants</h4>
                  <p className="text-xs text-muted-foreground">Huiles moteur, industriels</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center overflow-hidden">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={petrochimieImg} alt="Pétrochimie" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-foreground font-bold mb-1">Pétrochimie</h4>
                  <p className="text-xs text-muted-foreground">Naphta, Éthylène</p>
                </div>
                <div className="glass-card p-4 rounded-xl border-white/10 text-center">
                  <h4 className="text-foreground font-bold mb-1">Produits Spéciaux</h4>
                  <p className="text-xs text-muted-foreground">Paraffine, Cire, Solvants</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Zones Géographiques d'Intervention
              </h2>

              <div className="glass-card p-6 rounded-xl border-white/10 my-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Afrique</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Nigéria (NNPC, Bonny)</li>
                      <li>Angola (Sonangol)</li>
                      <li>Algérie (Sonatrach)</li>
                      <li>Libye (NOC)</li>
                      <li>Guinée Équatoriale</li>
                      <li>Gabon, Congo, Cameroun</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Moyen-Orient</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Arabie Saoudite (Aramco)</li>
                      <li>Émirats Arabes Unis (ADNOC)</li>
                      <li>Koweït (KPC)</li>
                      <li>Qatar (QatarEnergy)</li>
                      <li>Irak (SOMO)</li>
                      <li>Iran (NIOC)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Autres Régions</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Russie (Rosneft, Gazprom)</li>
                      <li>États-Unis (Permian Basin)</li>
                      <li>Brésil (Petrobras)</li>
                      <li>Venezuela (PDVSA)</li>
                      <li>Kazakhstan (KazMunayGas)</li>
                      <li>Azerbaïdjan (SOCAR)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Choisir SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Réseau International</h3>
                  <p className="text-sm">Présence sur les principaux marchés pétroliers mondiaux et contacts directs avec les majors</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Expertise Sanctions</h3>
                  <p className="text-sm">Maîtrise des régimes de sanctions et compliance internationale (OFAC, UE, SWIFT)</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-bold text-lg mb-2">Service 24/7</h3>
                  <p className="text-sm">Équipe dédiée disponible en permanence pour les opérations critiques et urgences</p>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                "Dans le secteur pétrolier et gazier, une seule transaction frauduleuse peut représenter des millions de dollars de pertes. SECUREFLOW vous protège contre ces risques en vérifiant chaque partenaire, chaque document et chaque cargaison avant que vous ne vous engagiez."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Vous opérez dans le secteur pétrolier & gazier ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/contact">Parler à un expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" asChild>
                  <Link href="/services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (id === "15") {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10">
              <img src={africaInvestment} alt="Investissement en Afrique" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <Badge className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-none px-4 py-2 text-sm font-bold uppercase tracking-wider">
                Exclusif
              </Badge>
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/30">
                Investissement Afrique
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Investissement en Afrique : Votre Porte d'Entrée Stratégique
              </h1>
              <p className="text-xl text-primary font-medium italic">
                Partenariats exclusifs avec des chefs d'État et accès privilégié aux opportunités d'investissement
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <User className="w-4 h-4 text-primary" />
                <span>Éric Brunnel QUENUM</span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                L'Afrique représente le dernier grand marché émergent au monde, avec un <strong className="text-foreground">potentiel de croissance exceptionnel</strong> dans tous les secteurs économiques. Cependant, investir en Afrique requiert bien plus que du capital : il faut des <strong className="text-foreground">connexions de haut niveau</strong>, une compréhension profonde des contextes locaux et un partenaire de confiance pour naviguer les complexités administratives et réglementaires.
              </p>

              <div className="glass-card p-8 rounded-2xl border-amber-500/20 my-12 bg-gradient-to-r from-amber-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-amber-400 w-8 h-8" /> Notre Position Unique
                </h2>
                <p>
                  SECUREFLOW dispose de <strong className="text-foreground">partenariats exclusifs avec des chefs d'État africains</strong> et des hauts fonctionnaires gouvernementaux, offrant à nos clients un accès privilégié aux opportunités d'investissement les plus stratégiques du continent.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Pourquoi Investir en Afrique avec SECUREFLOW ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="glass-card p-6 rounded-xl border-amber-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <Landmark className="text-amber-400 w-5 h-5" /> Connexions Gouvernementales
                  </h3>
                  <p className="text-sm">
                    Relations directes avec les plus hautes autorités politiques de plusieurs pays africains pour faciliter vos projets d'investissement.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-purple-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <FileCheck className="text-purple-400 w-5 h-5" /> Facilitation Administrative
                  </h3>
                  <p className="text-sm">
                    Accompagnement complet dans les procédures administratives : licences, permis, autorisations et conformité réglementaire.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-blue-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <ShieldCheck className="text-blue-400 w-5 h-5" /> Sécurisation Juridique
                  </h3>
                  <p className="text-sm">
                    Protection légale et contractuelle de vos investissements avec des structures juridiques adaptées à chaque juridiction.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl border-green-500/20">
                  <h3 className="text-foreground font-bold text-lg mb-3 flex items-center gap-2">
                    <TrendingUp className="text-green-400 w-5 h-5" /> Protection Financière
                  </h3>
                  <p className="text-sm">
                    Structuration financière sécurisée et mécanismes de protection du capital pour minimiser les risques d'investissement.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Secteurs d'Investissement Prioritaires
              </h2>
              <p className="mb-8">SECUREFLOW accompagne les investisseurs dans les secteurs les plus dynamiques du continent africain :</p>

              <div className="space-y-8 my-12">
                <div className="glass-card p-8 rounded-2xl border-amber-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Globe className="text-amber-400" /> Mines & Ressources Naturelles
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Or, diamant, cobalt, lithium, manganèse et autres minerais stratégiques</li>
                    <li>Partenariats avec les ministères des mines</li>
                    <li>Accès aux concessions minières exclusives</li>
                    <li>Due diligence et conformité internationale</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-yellow-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <BarChart3 className="text-yellow-400" /> Énergie & Infrastructure
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Projets d'électrification et énergies renouvelables</li>
                    <li>Partenariats Public-Privé (PPP) avec les gouvernements</li>
                    <li>Routes, ports, aéroports et infrastructures critiques</li>
                    <li>Accès aux appels d'offres gouvernementaux</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-green-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Handshake className="text-green-400" /> Agriculture & Agro-industrie
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Terres agricoles et projets agro-industriels</li>
                    <li>Chaînes de valeur agricoles intégrées</li>
                    <li>Export de produits agricoles vers les marchés internationaux</li>
                    <li>Transformation locale et création de valeur ajoutée</li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-2xl border-purple-500/20">
                  <h3 className="text-foreground text-xl font-bold mb-4 flex items-center gap-3">
                    <Landmark className="text-purple-400" /> Immobilier & Développement Urbain
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Projets immobiliers dans les capitales africaines</li>
                    <li>Zones économiques spéciales et parcs industriels</li>
                    <li>Développement hôtelier et touristique</li>
                    <li>Centres commerciaux et espaces de bureaux premium</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-6">
                Notre Processus d'Accompagnement
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-12">
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">1</div>
                  <h3 className="text-foreground font-bold mb-2">Analyse</h3>
                  <p className="text-xs text-muted-foreground">Évaluation de votre projet et identification des opportunités adaptées</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">2</div>
                  <h3 className="text-foreground font-bold mb-2">Connexion</h3>
                  <p className="text-xs text-muted-foreground">Introduction aux partenaires gouvernementaux et locaux clés</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">3</div>
                  <h3 className="text-foreground font-bold mb-2">Structuration</h3>
                  <p className="text-xs text-muted-foreground">Montage juridique et financier sécurisé pour votre investissement</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-primary/20 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">4</div>
                  <h3 className="text-foreground font-bold mb-2">Exécution</h3>
                  <p className="text-xs text-muted-foreground">Accompagnement opérationnel et supervision de votre projet</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-primary/20 my-12 bg-gradient-to-r from-amber-500/10 to-transparent">
                <h2 className="text-foreground text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-primary" /> Pays Couverts
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Bénin</span>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Côte d'Ivoire</span>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Sénégal</span>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Togo</span>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Ghana</span>
                    <p className="text-xs text-muted-foreground">Afrique de l'Ouest</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Cameroun</span>
                    <p className="text-xs text-muted-foreground">Afrique Centrale</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">RDC</span>
                    <p className="text-xs text-muted-foreground">Afrique Centrale</p>
                  </div>
                  <div className="text-center p-4">
                    <span className="text-foreground font-medium text-sm block">Et plus...</span>
                    <p className="text-xs text-muted-foreground">Sur demande</p>
                  </div>
                </div>
              </div>

              <blockquote className="text-xl text-foreground italic bg-amber-500/5 p-6 rounded-xl border-l-4 border-amber-500">
                "Investir en Afrique avec SECUREFLOW, c'est bénéficier d'un accès privilégié aux plus hautes sphères décisionnelles et d'une protection totale de vos capitaux. Notre réseau unique de partenariats gouvernementaux transforme les opportunités en succès concrets."
              </blockquote>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-6">
              <h3 className="text-2xl font-display font-bold text-foreground text-center">
                Prêt à investir en Afrique ?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700" asChild>
                  <Link href="/contact">Devenir partenaire</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-amber-500/30 hover:bg-amber-500/10" asChild>
                  <Link href="/sectors">Voir nos secteurs</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 text-center">
      <h1 className="text-foreground text-4xl mb-4">Article non trouvé</h1>
      <Link href="/blog">
        <Button size="lg" className="rounded-full">Retour au blog</Button>
      </Link>
    </div>
  );
}
