/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker/Vercel
  output: 'standalone',
  
  // Image optimization - allow all external images
  images: {
    unoptimized: true,
  },
  
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Environment variables exposed to browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/bai-viet/:slug',
        destination: '/article/:slug',
        permanent: true,
      },
      {
        source: '/danh-muc/:slug',
        destination: '/category/:slug',
        permanent: true,
      },
    ];
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
