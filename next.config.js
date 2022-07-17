/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`rickandmortyapi.com`],
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
