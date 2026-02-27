import { MetadataRoute } from 'next';
import { CANONICAL_BASE, CANONICAL_PATHS } from '../scripts/canonical-sitemap.config.js';
import { blogPosts } from '@/data/blogContentData';

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

  return [...staticEntries, ...blogEntries];
}
