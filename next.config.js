/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
