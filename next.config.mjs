/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  basePath: isProd ? '/veducate-ecatalogue' : '',
  assetPrefix: isProd ? '/veducate-ecatalogue/' : '',
  images: {
    unoptimized: true,
  },
  // Allow large video files
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

export default nextConfig;
