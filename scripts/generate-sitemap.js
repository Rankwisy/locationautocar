import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.locationautocar.be';

// Define all pages with their specific configurations
const pages = [
  // Homepage - Highest priority
  {
    url: '/',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '1.0'
  },

  // Main navigation pages - High priority
  {
    url: '/nos-services',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/notre-flotte',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/destinations',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contactez-nous',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.8'
  },

  // Fleet category pages
  {
    url: '/notre-flotte/minibus',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/notre-flotte/bus',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/notre-flotte/autocars',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.7'
  },

  // Destination pages
  {
    url: '/destinations/bruxelles',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: '/destinations/belgique',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    url: '/destinations/europe',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.7'
  },

  // Blog section
  {
    url: '/blog',
    lastmod: '2024-01-30T15:00:00+01:00',
    changefreq: 'weekly',
    priority: '0.6'
  },

  // Blog posts
  {
    url: '/blog/eiffel-tower-sunset-magic',
    lastmod: '2024-01-20T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/amsterdam-canaux-velo',
    lastmod: '2024-01-30T10:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/bruxelles-coeur-europe',
    lastmod: '2024-01-25T09:00:00+01:00',
    changefreq: 'monthly',
    priority: '0.6'
  }
];

function generateSitemap() {
  console.log('🚀 Generating XML sitemap...');
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  // Add each page to the sitemap
  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write the sitemap to the public directory
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${pages.length}`);
}

function generateSitemapIndex() {
  console.log('📋 Generating sitemap index...');
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  const sitemapIndexPath = path.join(process.cwd(), 'public', 'sitemap_index.xml');
  fs.writeFileSync(sitemapIndexPath, sitemapIndex, 'utf8');
  
  console.log('✅ Sitemap index generated successfully!');
}

// Run the sitemap generation
generateSitemap();
generateSitemapIndex();