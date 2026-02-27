# SEO & Server-Side Rendering – Next.js

## Architecture actuelle : Next.js avec App Router

Le site utilise **Next.js 14** avec l’App Router. Les pages sont rendues côté serveur (SSR) ou pré-rendues à la compilation (SSG), ce qui fournit directement :

- **HTML complet** avec meta tags corrects pour chaque URL
- **Contenu visible** pour tous les crawlers sans exécution JavaScript
- **Structured data (JSON-LD)** injectée dans le HTML à la génération
- **Sitemap et robots** générés dynamiquement via `app/sitemap.ts` et `app/robots.ts`

## Netlify Prerender : plus nécessaire

L’extension Netlify Prerender n’est **plus requise** avec Next.js. Le rendu des pages est géré nativement par Next.js. L’utilisation de `@netlify/plugin-nextjs` suffit pour déployer correctement l’application sur Netlify.

Si l’extension Netlify Prerender était activée auparavant, elle peut être **désactivée** dans le tableau de bord Netlify.

## SEO et métadonnées

### generateMetadata

Chaque page exporte `metadata` ou `generateMetadata` avec :

- `title`, `description`, `keywords`
- `alternates.canonical`
- `openGraph` (title, description, url, images)
- `twitter` (card, title, description)

### Structured data (JSON-LD)

Les schémas (Organization, LocalBusiness, WebSite, FAQ, etc.) sont inclus dans les layouts et pages via des balises `<script type="application/ld+json">`.

### Sitemap et robots

- **Sitemap** : `app/sitemap.ts` génère automatiquement toutes les URLs (pages statiques + articles de blog)
- **Robots** : `app/robots.ts` définit les règles de crawl et pointe vers le sitemap

## Ancien script SEO inline (`seo-inline.js`)

Ce script n’existe plus. Avec Next.js, les meta tags sont servis directement dans le HTML à chaque requête, sans script client.

## Références

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
