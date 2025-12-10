/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization - allow all external images
  images: {
    unoptimized: true,
  },

  // Skip type checking during build (faster builds)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
