/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['www.next-view.nl', 'next-view.nl'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Trailing slash handling
  trailingSlash: false,
  
  // Environment variables validation
  env: {
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'CPMX',
    APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '0.1.0',
  },
  
};

export default nextConfig;