import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*?l=*', '/admin/', '/_netlify/', '/api/', '/.netlify/', '/test/', '/dev/', '/*.json$', '/*?*utm_*', '/*?*fbclid*', '/*?*gclid*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/*?l=*', '/admin/', '/api/'],
      },
      {
        userAgent: 'AhrefsBot',
        allow: '/',
        disallow: ['/*?l=*'],
      },
    ],
    sitemap: 'https://www.locationautocar.be/sitemap.xml',
  };
}
