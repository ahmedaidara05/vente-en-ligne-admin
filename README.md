# Vente en Ligne — Admin 🛠️

Back-office **dédié** (repo séparé) pour gérer la marketplace **Vente en Ligne**.

Site client : https://github.com/ahmedaidara05/vente-en-ligne

## Fonctionnalités

- **Dashboard** : stats + dernières commandes
- **Produits** : CRUD complet, upload images Storage, prix normal + prix groupé, stock
- **Commandes** : filtre par statut, détail, validation / changement de statut, historique
- **Boutiques** : création / édition / suppression

## Stack

React 19 + TypeScript + Vite + Tailwind 4 + Firebase (même projet que le client)

## Lancer

```bash
git clone https://github.com/ahmedaidara05/vente-en-ligne-admin.git
cd vente-en-ligne-admin
npm install
npm run dev
```

→ http://localhost:5174

## Accès admin

1. Créez un compte (via le site client ou Firebase Auth)
2. Firestore → `users` → votre UID → `role: "admin"` (ou `"seller"`)
3. Connectez-vous ici

Les comptes `customer` sont refusés.

## Déploiement

```bash
npm run build
```

Déployez `dist/` (Firebase Hosting second site, Vercel, Netlify…).

Les deux apps partagent le même projet Firebase `vente-en-ligne-5388c`.
