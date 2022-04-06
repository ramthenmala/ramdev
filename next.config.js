const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-syntax-highlighter']);
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    loader: 'default',
    domains: ['localhost', 'cdn.sanity.io'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    googleAnalyticsID: process.env.GOOGLE_ANALYTICS_ID,
  },
};

module.exports = withPlugins([withTM], nextConfig);
