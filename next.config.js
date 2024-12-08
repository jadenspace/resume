/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
  process.env.NODE_ENV === "production"
    ? "https://jadenspace.github.io/resume"
    : "",
  webpack5: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withImages(nextConfig);
