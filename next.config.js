/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    webpackBuildWorker: true,
  },
}

module.exports = nextConfig;
