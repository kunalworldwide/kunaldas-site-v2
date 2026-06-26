import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/kunaldas-site-v2',
  assetPrefix: '/kunaldas-site-v2/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
