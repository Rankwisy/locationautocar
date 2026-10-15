import { MetadataRoute } from 'next';
import { CANONICAL_BASE, CANONICAL_PATHS } from '../scripts/canonical-sitemap.config.js';
import { blogPosts } from '@/data/blogContentData';

const ES_PATHS = [
  '/es',
  '/es/alquiler-autocar-bruselas',
  '/es/excursiones-desde-bruselas',
  '/es/transfer-aeropuerto-bruselas',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = CANONICAL_PATHS.map(({ path, priority, changefreq }) => ({
    url: `${CANONICAL_BASE}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: parseFloat(priority),
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${CANONICAL_BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const esEntries: MetadataRoute.Sitemap = ES_PATHS.map((path) => ({
    url: `${CANONICAL_BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/es' ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...esEntries, ...blogEntries];
}
