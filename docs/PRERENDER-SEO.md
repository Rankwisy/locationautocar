# Prérendu & SEO – Résolution des doublons title/description

## Problème résolu

23+ pages avaient le même `title` et `description` (ceux de `index.html`) et semblaient peu fournies en contenu, car :
- Le site est une **SPA** (Single Page Application)
- Toutes les URLs servaient le même `index.html` avec des meta statiques
- Le contenu et les meta sont injectés côté client par React/Helmet
- Les crawlers qui exécutent peu ou pas le JavaScript voyaient les meta par défaut et peu de contenu

## Solution recommandée : Extension Netlify Prerender

L’extension **Netlify Prerender** génère du HTML complet par URL pour les crawlers et les agents IA, tout en laissant les visiteurs sur l’app React normale.

### Activation (à faire dans le dashboard Netlify)

1. Désactiver l’ancien prerendering (si activé)  
   - **Configuration du projet** → **Build & deploy** → **Post processing** → **Prerendering** → Désactiver

2. Installer l’extension Netlify Prerender  
   - Aller sur : https://app.netlify.com/extensions/prerender  
   - Cliquer sur **Install**

3. Activer pour ce projet  
   - Ouvrir le projet sur Netlify  
   - Dans le menu gauche : **Extensions**  
   - Sélectionner **Prerender** → **Enable prerendering**  
   - Enregistrer et redéployer

### Fonctionnement

- **Visiteurs** : reçoivent l’app React normale
- **Crawlers / robots** : reçoivent du HTML déjà rendu, avec les bons meta et le contenu complet

### Sitemap et URLs à prérendre

Le sitemap (`/sitemap.xml`) liste toutes les URLs importantes. L’extension Netlify Prerender gère les requêtes des crawlers sur ces URLs automatiquement.

## Script SEO inline (`public/seo-inline.js`)

Un script léger met à jour **title**, **description**, **canonical** et **og/twitter** avant le chargement de React, en fonction de l’URL. Cela aide les crawlers qui exécutent du JavaScript minimal mais pas le bundle React complet.

- Script : `public/seo-inline.js`
- Régénération : `npm run generate:seo-inline`
- Couvre toutes les routes statiques + articles de blog

## Autres actions effectuées

- **Sitemap** : ajout du 6ᵉ article de blog (`location-autocar-evenements-bruxelles-2025`)
- **Canonical par défaut** dans `index.html` pour la page d’accueil

## Références

- [Documentation Netlify Prerender](https://docs.netlify.com/build/post-processing/prerendering/#netlify-prerender-extension)
- [Extension Prerender sur Netlify](https://app.netlify.com/extensions/prerender)
