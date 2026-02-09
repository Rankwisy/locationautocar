import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.locationautocar.be';
const currentDate = new Date().toISOString();

// Define all live pages with their configurations
const pages = [
  // Homepage - Highest priority
  {
    url: '/',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0'
  },

  // Main navigation pages - High priority
  {
    url: '/nos-services',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/notre-flotte',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/destinations',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contactez-nous',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },

  // LEZ Compliance page - Important regulatory content
  {
    url: '/lez-bruxelles',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },

  // Fleet category pages - Important for SEO
  {
    url: '/notre-flotte/minibus',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/notre-flotte/bus',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/notre-flotte/autocars',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  },

  // Destination pages - High value content
  {
    url: '/destinations/bruxelles',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: '/destinations/belgique',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: '/destinations/europe',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  },

  // Blog section
  {
    url: '/blog',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.6'
  },

  // Blog posts - Content marketing
  {
    url: '/blog/lez-bruxelles-2026-guide-complet-normes-euro-6',
    lastmod: '2026-02-01T09:00:00+00:00',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/blog/location-autocar-avec-chauffeur-bruxelles-prix',
    lastmod: '2025-01-28T10:00:00+00:00',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/bruxelles-coeur-europe',
    lastmod: '2024-01-25T09:00:00+00:00',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/amsterdam-canaux-velo',
    lastmod: '2024-01-30T10:00:00+00:00',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/eiffel-tower-sunset-magic',
    lastmod: '2024-01-20T10:00:00+00:00',
    changefreq: 'monthly',
    priority: '0.6'
  },

  // Legal pages
  {
    url: '/mentions-legales',
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    url: '/politique-confidentialite',
    lastmod: currentDate,
    changefreq: 'yearly',
    priority: '0.3'
  }
];

function generateHreflangLinks(url) {
  const fullUrl = `${baseUrl}${url}`;
  return `\n    <xhtml:link rel="alternate" hreflang="fr" href="${fullUrl}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl}"/>`;
}

function generateSitemap() {
  console.log('🚀 Generating comprehensive XML sitemap...');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add each page to the sitemap with hreflang links
  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${generateHreflangLinks(page.url)}
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

  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${pages.length}`);
  console.log(`🌍 Language: fr (with x-default fallback)`);

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