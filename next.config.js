const path = require('path');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  i18n,
  basePath: '/next-portfolio',
  assetPrefix: '/next-portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
