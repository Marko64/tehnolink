import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed basePath for Vercel deployment
  images: {
    unoptimized: true,
  },
  experimental: {
    // Suppress CSS parsing warnings
  },
  transpilePackages: [],
};

export default nextConfig;
