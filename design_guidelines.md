# SecureFlow - Guidelines de Design

## Approche de Design

**Référence**: Sites corporatifs professionnels (Stripe, Maersk, DHL) avec influence institutionnelle française. Design sobre et moderne inspiré du registre de commerce - crédibilité et autorité avant tout.

## Typographie

**Familles de polices** (Google Fonts):
- Titres: Inter (700, 600) - clarté et modernité
- Corps: Inter (400, 500) - lisibilité professionnelle
- Accents: Space Grotesk (600) - pour numéros/stats uniquement

**Hiérarchie**:
- H1: 4xl-6xl, font-bold, tracking-tight
- H2: 3xl-4xl, font-semibold
- H3: xl-2xl, font-semibold
- Body: base-lg, font-normal
- Small: sm, font-medium

## Système de Spacing

**Unités Tailwind**: Utiliser principalement 4, 6, 8, 12, 16, 20, 24 pour cohérence
- Sections: py-20 lg:py-32
- Cards/Containers: p-8 lg:p-12
- Éléments: gap-6, space-y-4

## Structure du Site & Images

### Hero Section (Viewport: 85vh)
**Image**: Photo professionnelle plein écran - employés SecureFlow en action (entrepôt moderne, équipe sécurité, ou opération logistique). Overlay gradient subtil (noir à transparent, opacity-40) pour lisibilité du texte blanc.

**Contenu**: 
- Logo SecureFlow (coin supérieur gauche)
- Navigation horizontale (Accueil, Services, Expertise, Contact)
- Titre principal centré + sous-titre
- Deux boutons CTA (fond flou blur-md avec backdrop-blur-xl, bg-white/20)
- Bande de confiance en bas: "Certifié ISO 9001 | +15 ans d'expérience | 500+ clients"

### Services Section (Multi-colonnes)
Grille 4 colonnes (lg:grid-cols-4, md:grid-cols-2): 
- Logistique Internationale
- Sécurité & Surveillance
- Commerce International
- Services Multisectoriels

Chaque carte: icône (Heroicons), titre, description courte, lien "En savoir plus →"

### Expertise Section
**Layout**: Deux colonnes (texte 60% + image 40%)
**Image**: Photo d'équipe professionnelle ou infrastructure moderne
Contenu texte: liste à puces des compétences clés, stats impressionnants

### Zones Géographiques (Map visuelle)
**Image**: Carte du monde stylisée avec pins/markers sur zones couvertes
Overlay avec liste des régions servies

### Témoignages
Grille 3 colonnes: photos clients + citations courtes + nom/entreprise

### Contact Section
**Layout**: Deux colonnes
- Gauche: Formulaire (Nom, Email, Entreprise, Message)
- Droite: Coordonnées + **Image**: Photo de bureaux SecureFlow

### Footer
4 colonnes: Services, Entreprise, Certifications, Newsletter + Social links

## Composants UI

**Cards**: bg-white, border border-gray-200, rounded-xl, shadow-sm, hover:shadow-md transition
**Buttons Primaires**: px-8 py-4, rounded-lg, font-semibold, text-base
**Buttons sur Images**: backdrop-blur-xl, bg-white/20, border border-white/30, text-white
**Forms**: border-2, rounded-lg, focus:ring-2, py-3 px-4
**Icons**: Heroicons (outline pour navigation, solid pour features) - taille 6 ou 8

## Principes de Layout

- Container max-width: max-w-7xl
- Sections texte: max-w-3xl pour lisibilité
- Marges internes généreuses
- Grilles responsives avec gap-8
- Asymétrie stratégique (alternance texte-image gauche/droite)

## Images Requises

1. **Hero**: Action professionnelle SecureFlow (employés, opérations) - Full viewport
2. **Expertise**: Équipe ou infrastructure moderne
3. **Zones**: Carte mondiale stylisée avec markers
4. **Témoignages**: 3 photos clients professionnelles
5. **Contact**: Bureaux/façade SecureFlow
6. **Services** (optionnel): 4 images illustrant chaque secteur

**Style photographique**: Professionnel, lumineux, couleurs désaturées légèrement pour look institutionnel

## Animations

Minimales - uniquement:
- Hover states sur cards (shadow transition)
- Scroll fade-in pour sections (opacity + translateY subtle)
- Boutons: scale-105 au hover

---

**Ton général**: Autorité, fiabilité, modernité professionnelle. Le design respire la compétence institutionnelle française avec une touche contemporaine internationale.