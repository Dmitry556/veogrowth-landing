/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion'],
  },
  
  // SEO and performance optimizations
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for backward compatibility
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      // Old blog post redirects
      {
        source: '/blog/1',
        destination: '/blog/poke-the-bear-questions-that-get-replies',
        permanent: true,
      },
      {
        source: '/blog/2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/3',
        destination: '/blog/competitor-lookalike-insights-using-public-data',
        permanent: true,
      },
      {
        source: '/blog/:number(4|5|6|7)',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/8',
        destination: '/blog/cold-email-campaign-that-actually-works',
        permanent: true,
      },
    ];
  },
  
  // Image optimization
  images: {
    domains: [
      'images.unsplash.com',
      'media.licdn.com',
      'cdn.prod.website-files.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;