/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow large video files
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

export default nextConfig;
