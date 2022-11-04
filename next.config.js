/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com", "images.unsplash.com"]
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
