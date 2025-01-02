// next.config.js
module.exports = {
  reactStrictMode: true,
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", "aceternity.com", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;

