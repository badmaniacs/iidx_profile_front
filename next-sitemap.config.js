/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://www.pastainfo.xyz',
    changefreq: 'daily',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };