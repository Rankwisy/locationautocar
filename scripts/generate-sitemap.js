import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.locationautocar.be';

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/nos-services', changefreq: 'weekly', priority: '0.9' },
  { url: '/nos-services/transferts-aeroports', changefreq: 'weekly', priority: '0.8' },
  { url: '/nos-services/excursions-tourisme', changefreq: 'weekly', priority: '0.8' },
  { url: '/nos-services/voyages-affaires', changefreq: 'weekly', priority: '0.8' },
  { url: '/nos-services/mise-a-disposition', changefreq: 'weekly', priority: '0.8' },
  { url: '/notre-flotte', changefreq: 'monthly', priority: '0.7' },
  { url: '/notre-flotte/minibus', changefreq: 'monthly', priority: '0.7' },
  { url: '/notre-flotte/bus', changefreq: 'monthly', priority: '0.7' },
  { url: '/notre-flotte/autocars', changefreq: 'monthly', priority: '0.7' },
  { url: '/destinations', changefreq: 'weekly', priority: '0.7' },
  { url: '/destinations/bruxelles', changefreq: 'weekly', priority: '0.6' },
  { url: '/destinations/belgique', changefreq: 'weekly', priority: '0.6' },
  { url: '/destinations/europe', changefreq: 'weekly', priority: '0.6' },
  { url: '/contactez-nous', changefreq: 'monthly', priority: '0.8' },
  { url: '/blog', changefreq: 'weekly', priority: '0.6' },
  { url: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
  { url: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
  { url: '/conditions-generales', changefreq: 'yearly', priority: '0.3' }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();