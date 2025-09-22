/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // força usar webpack
  },
};

module.exports = nextConfig;
