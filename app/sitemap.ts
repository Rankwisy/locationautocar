import { MetadataRoute } from 'next';
import { CANONICAL_BASE, CANONICAL_PATHS } from '../scripts/canonical-sitemap.config.js';
import { blogPosts } from '@/data/blogContentData';
import { LANG_GROUPS, languagesFor } from '@/data/i18n';

const toUrl = (path: string) => `${CANONICAL_BASE}${path === '/' ? '' : path}`;

// hreflang alternates for a path (minus x-default, which sitemaps don't need)
function alternatesFor(path: string) {
  const langs = languagesFor(path);
  if (!langs) return undefined;
  const { 'x-default': _xDefault, ...languages } = langs;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = CANONICAL_PATHS.map(({ path, priority, changefreq }) => ({
    url: toUrl(path),
    lastModified: new Date(),
    changeFrequency: changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: parseFloat(priority),
    alternates: alternatesFor(path),
  }));

  const translatedPaths = LANG_GROUPS.flatMap((g) => [g.es, g.nl]).filter((p): p is string => Boolean(p));
  const translatedEntries: MetadataRoute.Sitemap = translatedPaths.map((path) => ({
    url: toUrl(path),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/es' || path === '/nl' ? 0.8 : 0.7,
    alternates: alternatesFor(path),
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${CANONICAL_BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...translatedEntries, ...blogEntries];
}
