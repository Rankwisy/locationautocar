# Website Health Report – Location Autocar

**Date:** February 2026  
**Project:** locationautocar (Location Autocar Bruxelles)

---

## ✅ Build & technical

| Check | Status |
|-------|--------|
| **Production build** | ✅ Passes (`npm run build`) |
| **TypeScript** | ✅ No errors (routes and components type-check) |
| **Linter** | ✅ No ESLint errors in `src` |
| **Routes vs canonical** | ✅ All 18 routes match `canonicalRoutes.ts` and sitemap |

**Build output:** `dist/` (Vite). Main JS chunk ~512 KB (consider code-splitting later).

---

## ⚠️ Dependencies (npm audit)

**After `npm audit fix`:** 2 moderate remain (esbuild/vite – dev server only).

- **Fixed:** react-router-dom (XSS/open redirect), glob, js-yaml and related.
- **Remaining:** esbuild ≤0.24.2 (moderate, dev server). Full fix would require `npm audit fix --force` (Vite 7, breaking change). Acceptable to leave for now as it affects only local dev.

**Recommendation:** Re-run `npm audit` after future dependency updates. Consider Vite 7 upgrade when ready for a breaking change.

---

## ✅ Navigation & links

- **Header:** Uses `mainNavigation` from `data/navigation.ts` → all URLs from `canonicalRoutes.ts`.
- **Footer:** All main canonical pages linked (Accueil, Nos Services, Notre Flotte, Destinations, Blog, Contact). Service links go to canonical sub-pages; legal pages use `ROUTES`.
- **Internal links:** Footer, breadcrumb, and EnvironmentalCompliance use canonical routes. In-page `Link`/`href` use correct paths (e.g. `/nos-services/transferts-aeroports`).
- **Catch-all:** Unknown paths redirect to `/` (no 404 dead ends in-app).

---

## ✅ SEO & discovery

- **Sitemap** (`public/sitemap.xml`): All canonical pages + blog posts; correct `https://www.locationautocar.be` URLs; hreflang fr + x-default.
- **robots.txt:** Allows `/`, sitemap URL, and main sections; disallows admin, Netlify, API, UTM/gclid. Note: `Crawl-delay` is ignored by Google/Bing.
- **index.html:** Canonical, OG, Twitter, viewport, favicon. Duplicate favicon block present (cosmetic).

---

## ✅ Security & deployment (Netlify)

- **Headers:** X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy, Permissions-Policy set in `netlify.toml`.
- **SPA redirect:** `/*` → `/index.html` (200) so client-side routing works.
- **Redirects:** `/contact-success` → `/contactez-nous?success=true`; `/404`/`/500` → `/index.html`.

---

## 🔧 Minor improvements

1. **index.html**
   - Remove duplicate favicon `<link>` (lines 41 and 44–45).
   - Remove or gate debug `console.log` in production (lines 54–60).
2. **Browserslist:** Warning “caniuse-lite is 6 months old”. Run:  
   `npx update-browserslist-db@latest`
3. **Bundle size:** Main chunk >500 KB. Consider route-based code-splitting (e.g. `React.lazy` per section) to improve first load.
4. **robots.txt:** `Crawl-delay` has no effect on Google/Bing; can be removed to simplify.

---

## Summary

- **Overall health: good.** Build passes, navigation and canonicals are consistent, sitemap and robots are in place, Netlify config is correct.
- **Action:** Run `npm audit fix`, re-test build and site, then optionally apply the minor improvements above.
