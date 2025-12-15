/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      // Redirect paths that need /en prefix
      {
        source: '/:path(login|register|forgot-password|dashboards|apps|pages|forms|charts|react-table)',
        destination: '/en/:path',
        permanent: false,
        locale: false
      },
      {
        source: '/:path(login|register|forgot-password|dashboards|apps|pages|forms|charts|react-table)/:rest*',
        destination: '/en/:path/:rest*',
        permanent: false,
        locale: false
      }
    ]
  }
}

export default nextConfig
