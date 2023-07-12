/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.genius.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.rapgenius.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
