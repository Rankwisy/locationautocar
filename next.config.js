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
      // Legacy: autocar-bruxelles/les-tarifs... → prix (pricing page)
      {
        source: '/autocar-bruxelles/les-tarifs-pour-une-location-de-bus-avec-chauffeur',
        destination: '/nos-services/prix',
        permanent: true,
      },
      {
        source: '/autocar-bruxelles/les-tarifs-pour-une-location-de-bus-avec-chauffeur/',
        destination: '/nos-services/prix',
        permanent: true,
      },
      // Legacy URL (old site structure)
      {
        source: '/tourisme-national-et-international-par-autocar-car-bus',
        destination: '/nos-services/excursions-tourisme',
        permanent: true,
      },
      {
        source: '/tourisme-national-et-international-par-autocar-car-bus/',
        destination: '/nos-services/excursions-tourisme',
        permanent: true,
      },
      // Old typo: amesterdam → canonical Amsterdam page
      { source: '/destinations/location-autocar-amesterdam', destination: '/destinations/amsterdam', permanent: true },
      { source: '/destinations/location-autocar-amesterdam/', destination: '/destinations/amsterdam', permanent: true },
      // /index.php → homepage
      { source: '/index.php', destination: '/', permanent: true },
      // /nl/ (Dutch locale, non-existent) → French canonical
      { source: '/nl', destination: '/', permanent: true },
      { source: '/nl/', destination: '/', permanent: true },
      { source: '/nl/:path*', destination: '/:path*', permanent: true },
      // /en/ (non-existent locale) → French canonical
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // Legacy: liste-des-destinations → destinations
      { source: '/liste-des-destinations', destination: '/destinations', permanent: true },
      { source: '/liste-des-destinations/', destination: '/destinations', permanent: true },
      // Legacy: autocar-bruxelles pricing/minibus pages
      { source: '/autocar-bruxelles/location-autocar-avec-chauffeur-prix', destination: '/nos-services/prix', permanent: true },
      { source: '/autocar-bruxelles/location-autocar-avec-chauffeur-prix/', destination: '/nos-services/prix', permanent: true },
      { source: '/autocar-bruxelles/location-minibus-avec-chauffeur-bruxelles', destination: '/location-autocar-bruxelles', permanent: true },
      { source: '/autocar-bruxelles/location-minibus-avec-chauffeur-bruxelles/', destination: '/location-autocar-bruxelles', permanent: true },
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
