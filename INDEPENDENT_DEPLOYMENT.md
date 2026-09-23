# Exécution indépendante de SecureFlow

Le projet peut maintenant être utilisé sans Replit pour le frontend et pour les uploads locaux. Les plugins Vite Replit ont été retirés du chemin de démarrage. Le backend conserve une connexion PostgreSQL standard via `DATABASE_URL`, compatible avec Supabase.

## Prévisualiser immédiatement le site

```bash
npm ci
npm run dev:client
```

Puis ouvrir l’URL affichée par Vite, généralement `http://localhost:5173`. Ce mode sert l’interface frontend sans nécessiter de base de données. Les pages statiques et les images locales restent visibles ; les fonctionnalités qui appellent l’API nécessitent le backend.

## Lancer le backend complet

1. Copier `.env.example` vers `.env`.
2. Remplacer `DATABASE_URL` par la chaîne PostgreSQL de Supabase.
3. Installer les dépendances et synchroniser le schéma :

```bash
npm ci
npm run db:push
npm run dev
```

Le serveur sert l’API et, en production, le frontend compilé sur le port `PORT` (5000 par défaut).

## Build de production

```bash
npm run check
npm run build
NODE_ENV=production PORT=5000 npm start
```

## Supabase

Le backend utilise PostgreSQL/Drizzle, donc Supabase peut être utilisé sans réécrire le schéma. Le stockage d’images de prévisualisation est local dans `uploads/`. Pour un déploiement multi-instance, remplacer cet adaptateur par Supabase Storage : créer un bucket privé ou public selon le besoin, générer une URL signée côté serveur, et conserver uniquement le chemin du fichier en base.

Les clés Supabase ne doivent pas être mises dans le frontend. Seule une clé publique limitée peut éventuellement être exposée côté client ; la connexion PostgreSQL et les secrets Resend restent côté serveur.

## GitHub

Ne pas versionner `.env`, `uploads/`, `dist/` ou `node_modules/`. Le dossier `.git` exporté depuis Replit peut être retiré si l’objectif est de créer un nouvel historique Git propre :

```bash
rm -rf .git
git init
git add .
git commit -m "Initial independent SecureFlow application"
```

Cette commande est destructive pour l’historique local Replit ; sauvegarder l’archive originale avant de l’utiliser.
