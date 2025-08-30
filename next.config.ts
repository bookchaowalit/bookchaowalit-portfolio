import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-avatar', '@radix-ui/react-dropdown-menu'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
};

export default nextConfig;
