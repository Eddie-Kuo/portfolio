/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'img.icons8.com',
      'icons8.com',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
