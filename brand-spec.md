# SecureFlow — Brand spec

## Direction

SecureFlow adopte une direction institutionnelle premium, inspirée des infrastructures maritimes et du commerce international : calme, précise, crédible et lisible. La photographie réelle reste l’élément de reconnaissance principal ; l’interface accompagne les images sans les concurrencer.

## Assets de marque

| Asset | Source |
|---|---|
| Logo principal | `attached_assets/Design_sans_titre_20260119_043520_0000_1768870231497.png` |
| Hero logistique | `attached_assets/stock_images/professional_cargo_i_20329aee.jpg` |
| Image sécurité | `attached_assets/stock_images/modern_security_audi_4d6abb64.jpg` |
| Image transaction | `attached_assets/stock_images/secure_high_value_tr_1b60de34.jpg` |

## Palette

- Navy 950: `#0B1220` — fond institutionnel sombre
- Navy 900: `#111C2E` — surfaces élevées
- Blue 700: `#1D4ED8` — actions fortes et liens
- Blue 600: `#2563EB` — couleur primaire
- Sky 400: `#38BDF8` — accent et focus visuel
- Slate 50: `#F8FAFC` — fond clair
- Slate 100: `#F1F5F9` — surfaces secondaires
- Slate 500: `#64748B` — texte secondaire
- Slate 700: `#334155` — texte courant clair

Les couples foreground/background respectent une cible WCAG AA. Le bleu clair est réservé aux accents graphiques et ne sert pas de texte courant sur fond blanc.

## Typographie

- Titres et display : Outfit, 600–800, tracking serré, lignes courtes.
- Texte courant : Inter, 400–600, interligne généreux.
- Échelle : body 16/26, lead 18/30, H2 40–56 selon viewport, H1 48–84 selon viewport.

## Layout

- Grille 8 px.
- Container principal `max-w-7xl` avec padding responsive 20–32 px.
- Sections : `py-20` sur mobile, `py-28` sur desktop.
- Rayon principal : 20–28 px pour les surfaces éditoriales ; 12–16 px pour les contrôles.
- Ombres discrètes, bordures fines, pas de glassmorphism généralisé.

## Motion

- Entrées : opacity + translateY 12 px, 500–700 ms.
- Hover : translateY -2 px, 180–220 ms.
- Aucun zoom global automatique.
- Les animations permanentes sont limitées au carrousel hero et aux indicateurs utiles.
- `prefers-reduced-motion` neutralise les transformations et transitions longues.
