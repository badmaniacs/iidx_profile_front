/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['p.eagate.573.jp'],
  },
  async redirects() {
    return [
      {
        source: '/:path',
        destination: `${process.env.SERVER_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
