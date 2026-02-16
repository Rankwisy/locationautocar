import fs from 'fs';
import path from 'path';
import { CANONICAL_BASE, CANONICAL_PATHS } from './canonical-sitemap.config.js';

const currentDate = new Date().toISOString();

// Blog slugs – must match BlogPost.slug in blogContentData
const BLOG_POSTS = [
  { slug: 'lez-bruxelles-2026-guide-complet-normes-euro-6', lastmod: '2026-02-01T09:00:00+00:00' },
  { slug: 'location-autocar-avec-chauffeur-bruxelles-prix', lastmod: '2025-01-28T10:00:00+00:00' },
  { slug: 'bruxelles-coeur-europe', lastmod: '2024-01-25T09:00:00+00:00' },
  { slug: 'amsterdam-canaux-velo', lastmod: '2024-01-30T10:00:00+00:00' },
  { slug: 'eiffel-tower-sunset-magic', lastmod: '2024-01-20T10:00:00+00:00' },
];

/** Build canonical URL – no trailing slash except for root */
function toCanonicalUrl(pathStr) {
  const p = pathStr === '/' ? '/' : pathStr.replace(/\/+$/, '');
  return `${CANONICAL_BASE}${p || '/'}`;
}

function generateHreflangLinks(pathStr) {
  const fullUrl = toCanonicalUrl(pathStr);
  return `\n    <xhtml:link rel="alternate" hreflang="fr" href="${fullUrl}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl}"/>`;
}

function generateSitemap() {
  console.log('🚀 Generating comprehensive XML sitemap...');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Static canonical pages (must match page canonical in SEOHead)
  CANONICAL_PATHS.forEach(({ path: pathStr, priority, changefreq }) => {
    sitemap += `  <url>
    <loc>${toCanonicalUrl(pathStr)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${generateHreflangLinks(pathStr)}
  </url>
`;
  });

  // Blog posts (each has canonical https://www.locationautocar.be/blog/:slug)
  BLOG_POSTS.forEach(({ slug, lastmod }) => {
    const pathStr = `/blog/${slug}`;
    sitemap += `  <url>
    <loc>${toCanonicalUrl(pathStr)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>${generateHreflangLinks(pathStr)}
  </url>
`;
  });

  sitemap += `</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap to the public directory
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');

  const totalUrls = CANONICAL_PATHS.length + BLOG_POSTS.length;
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${totalUrls} (canonical only)`);
  console.log(`🌍 Base: ${CANONICAL_BASE}`);

  return sitemap;
}

// Generate both files
try {
  generateSitemap();
  console.log('🎉 Sitemap generated successfully!');
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}