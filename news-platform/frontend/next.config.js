/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization - enable for better mobile performance
  images: {
    // Enable image optimization
    unoptimized: false,
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Allow external images from common sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
    ],
    // Use modern formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Minimize memory usage
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
  },

  // Skip type checking during build (faster builds)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
