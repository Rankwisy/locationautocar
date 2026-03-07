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
