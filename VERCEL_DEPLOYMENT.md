# Déploiement SecureFlow sur Vercel

## Correction du téléchargement au lieu de l’affichage

Le projet construit le frontend dans `dist/public`. Le fichier `vercel.json` indique maintenant à Vercel d’utiliser ce dossier comme sortie web et de réécrire les routes de l’application vers `index.html`. Cette configuration permet au site React de s’afficher correctement, y compris lorsque l’utilisateur ouvre directement une route comme `/services` ou `/contact`.

## Paramètres Vercel recommandés

Dans le projet Vercel, utiliser les paramètres suivants :

| Paramètre | Valeur |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist/public` |
| Install Command | `npm ci` |
| Root Directory | `/` |

Il ne faut pas utiliser `dist/index.cjs` comme sortie publique. Ce fichier est le bundle Node/Express du backend ; il ne doit pas être téléchargé par le navigateur.

## Variables d’environnement

Pour le frontend seul, aucune variable sensible n’est nécessaire pour afficher les pages publiques. Les variables suivantes concernent le backend et les fonctionnalités dynamiques :

- `DATABASE_URL` pour PostgreSQL ou Supabase ;
- `RESEND_API_KEY` et `RESEND_FROM_EMAIL` pour les e-mails ;
- `SITE_URL` pour l’URL publique ;
- `SESSION_SECRET` si l’authentification serveur est activée.

Les valeurs doivent être ajoutées dans **Vercel → Project Settings → Environment Variables** et ne doivent jamais être commitées dans GitHub.

## Limite importante

Cette configuration corrige le déploiement du **frontend public**. Les routes Express, les formulaires persistants, la newsletter et l’administration nécessitent encore un hébergement backend compatible Node ou une migration des fonctions vers Supabase Edge Functions. Pour une première mise en ligne visuelle, Vercel peut donc servir le site public pendant que le backend est déployé séparément.

## Après modification sur GitHub

1. Ouvrir le projet Vercel lié au dépôt `cadexleader-lgtm/SecureFlow-Sarl`.
2. Vérifier que la branche de production est `main`.
3. Relancer un déploiement depuis le dernier commit.
4. Ouvrir l’URL publique en navigation privée.
5. Tester `/`, `/services`, `/secteurs`, `/blog` et `/contact`.

Si le navigateur télécharge encore un fichier, vérifier que le projet Vercel utilise bien le dernier commit et que l’Output Directory est exactement `dist/public`.
