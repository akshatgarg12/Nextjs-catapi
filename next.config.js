/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
      },
      {
        protocol: 'https',
        hostname: '**.tumblr.com',
      },
    ], 
  },
}

module.exports = nextConfig
