/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'revenuearchitects.com',
            port: '',
            pathname: '/*/**',
          },
        ],
      },
}

module.exports = nextConfig
