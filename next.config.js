/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        console.log('> Detected homepage url in package.json');
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          console.log(`> Apply \'${pathname}\' to assetPrefix(subPath)`);
          return pathname;
        }
        return '';
      } catch {
        console.log('> Can not parse homepage URL not apply assetPrefix(subPath)');
        return '';
      }
    }
    return '';
  })(),
  webpack5: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withImages(nextConfig);
