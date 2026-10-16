import { MetadataRoute } from 'next';
import { CANONICAL_BASE, CANONICAL_PATHS } from '../scripts/canonical-sitemap.config.js';
import { blogPosts } from '@/data/blogContentData';

// Spanish page -> its French equivalent (hreflang pairs, see src/data/esSeo.ts)
const ES_PAGES = [
  { es: '/es', fr: '/' },
  { es: '/es/alquiler-autocar-bruselas', fr: '/location-autocar-bruxelles' },
  { es: '/es/excursiones-desde-bruselas', fr: '/destinations/bruges' },
  { es: '/es/transfer-aeropuerto-bruselas', fr: '/nos-services/transferts-aeroports' },
];

const toUrl = (path: string) => `${CANONICAL_BASE}${path === '/' ? '' : path}`;
const esOf = new Map(ES_PAGES.map((p) => [p.fr, p.es]));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = CANONICAL_PATHS.map(({ path, priority, changefreq }) => {
    const es = esOf.get(path);
    return {
      url: toUrl(path),
      lastModified: new Date(),
      changeFrequency: changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
      priority: parseFloat(priority),
      ...(es && { alternates: { languages: { fr: toUrl(path), es: toUrl(es) } } }),
    };
  });

  const esEntries: MetadataRoute.Sitemap = ES_PAGES.map(({ es, fr }) => ({
    url: toUrl(es),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: es === '/es' ? 0.8 : 0.7,
    alternates: { languages: { es: toUrl(es), fr: toUrl(fr) } },
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${CANONICAL_BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...esEntries, ...blogEntries];
}
