import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.locationautocar.be';

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/vehicules', changefreq: 'weekly', priority: '0.9' },
  { url: '/vehicules/economiques', changefreq: 'weekly', priority: '0.8' },
  { url: '/vehicules/familiales', changefreq: 'weekly', priority: '0.8' },
  { url: '/vehicules/luxe', changefreq: 'weekly', priority: '0.8' },
  { url: '/vehicules/utilitaires', changefreq: 'weekly', priority: '0.8' },
  { url: '/tarifs', changefreq: 'monthly', priority: '0.7' },
  { url: '/reservation', changefreq: 'weekly', priority: '0.9' },
  { url: '/a-propos', changefreq: 'monthly', priority: '0.6' },
  { url: '/contact', changefreq: 'monthly', priority: '0.7' },
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