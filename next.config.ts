import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ispravljeno: dodato "a" u konfigurator
  basePath: '/tl-konfigurator', 
  
  // assetPrefix je obično nepotreban uz basePath, bolje ga ukloniti
  images: {
    unoptimized: true,
  },
  experimental: {
    // Suppress CSS parsing warnings
  },
  transpilePackages: [],
};

export default nextConfig;
