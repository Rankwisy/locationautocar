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
    url: '/blog/eiffel-tower-sunset-magic',
    lastmod: '2024-01-20T10:00:00.000Z',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/amsterdam-canaux-velo',
    lastmod: '2024-01-30T10:00:00.000Z',
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: '/blog/bruxelles-coeur-europe',
    lastmod: '2024-01-25T09:00:00.000Z',
    changefreq: 'monthly',
    priority: '0.6'
  }
];

function generateSitemap() {
  console.log('🚀 Generating comprehensive XML sitemap...');
  
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
  
  return sitemap;
}

function generateSitemapIndex() {
  console.log('📋 Generating sitemap index...');
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-style.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  const sitemapIndexPath = path.join(process.cwd(), 'public', 'sitemap_index.xml');
  fs.writeFileSync(sitemapIndexPath, sitemapIndex, 'utf8');
  
  console.log('✅ Sitemap index generated successfully!');
  console.log(`📍 Location: ${sitemapIndexPath}`);
}

// Generate both files
try {
  generateSitemap();
  generateSitemapIndex();
  console.log('🎉 All sitemap files generated successfully!');
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}