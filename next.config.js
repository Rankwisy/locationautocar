/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/notre-flotte/autocar',
        destination: '/notre-flotte/autocars',
        permanent: true,
      },
      {
        source: '/notre-flotte/autocar/',
        destination: '/notre-flotte/autocars',
        permanent: true,
      },
      // Old/invalid destination URLs → canonical Europe page (Paris, Amsterdam)
      { source: '/destinations/paris', destination: '/destinations/europe', permanent: true },
      { source: '/destinations/paris/', destination: '/destinations/europe', permanent: true },
      { source: '/destinations/location-autocar-amesterdam', destination: '/destinations/europe', permanent: true },
      { source: '/destinations/location-autocar-amesterdam/', destination: '/destinations/europe', permanent: true },
      // /en/ (non-existent locale) → French canonical
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // Trailing slash → canonical (no slash) to fix duplicate page indexing
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/contactez-nous/', destination: '/contactez-nous', permanent: true },
      { source: '/location-autocar-bruxelles/', destination: '/location-autocar-bruxelles', permanent: true },
      { source: '/nos-services/', destination: '/nos-services', permanent: true },
      { source: '/destinations/', destination: '/destinations', permanent: true },
      { source: '/notre-flotte/', destination: '/notre-flotte', permanent: true },
      { source: '/lez-bruxelles/', destination: '/lez-bruxelles', permanent: true },
      { source: '/mentions-legales/', destination: '/mentions-legales', permanent: true },
      { source: '/politique-confidentialite/', destination: '/politique-confidentialite', permanent: true },
      // Amsterdam (correct spelling) variant
      { source: '/destinations/amsterdam', destination: '/destinations/europe', permanent: true },
      { source: '/destinations/amsterdam/', destination: '/destinations/europe', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: false,
};

export default nextConfig;
