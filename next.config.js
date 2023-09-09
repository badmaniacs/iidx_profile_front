/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['p.eagate.573.jp'],
  },
  async redirects() {
    return [
      {
        source: '/graphql',
        destination: `${process.env.SERVER_URL}/graphql`,
        permanent: true,
      },
      {
        source: '/users/:path',
        destination: `${process.env.SERVER_URL}/users/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
