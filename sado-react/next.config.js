/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production build
  // Comment out 'output: export' when using API routes in development
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
