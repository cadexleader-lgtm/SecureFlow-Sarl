# SecureFlow Sarl

SecureFlow est une application web corporate dédiée à la sécurisation du commerce international, des transactions et des opérations logistiques sensibles.

Le projet comprend un site public bilingue français/anglais, un blog, des formulaires de contact et newsletter, ainsi qu’un espace d’administration.

## Stack technique

- React 18 + TypeScript + Vite
- Express 5 + TypeScript
- PostgreSQL avec Drizzle ORM
- Compatible avec Supabase pour la base de données
- Tailwind CSS, Radix UI et TanStack Query

## Installation locale

```bash
npm ci
cp .env.example .env
# renseigner DATABASE_URL dans .env
npm run check
npm run dev
```

Pour prévisualiser uniquement le frontend sans base de données :

```bash
npm run dev:client
```

L’interface sera disponible sur `http://localhost:5173`.

## Variables d’environnement

Voir [.env.example](.env.example). Ne jamais publier `.env`, les mots de passe, les clés Supabase ou les clés Resend.

Variables principales :

- `DATABASE_URL` : connexion PostgreSQL/Supabase côté serveur ;
- `PORT` : port HTTP, 5000 par défaut ;
- `RESEND_API_KEY` et `RESEND_FROM_EMAIL` : newsletter facultative ;
- `SITE_URL` : URL publique utilisée dans les e-mails.

## Build et production

```bash
npm run check
npm run build
NODE_ENV=production npm start
```

Le guide détaillé Supabase, GitHub et déploiement indépendant se trouve dans [INDEPENDENT_DEPLOYMENT.md](INDEPENDENT_DEPLOYMENT.md).

## Contribution

Les contributions sont bienvenues. Créer une branche, effectuer les modifications, lancer `npm run check` et `npm run build`, puis ouvrir une pull request avec une description claire.

## Sécurité

Ne pas inclure de secrets dans les issues, commits ou pull requests. Pour signaler une vulnérabilité, contacter le mainteneur du dépôt de manière privée plutôt que de publier les détails immédiatement.

## Licence

MIT
