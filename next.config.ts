import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This enables static exports for GitHub Pages
  trailingSlash: true, // This adds trailing slashes to URLs
  images: {
    unoptimized: true, // Since we're using static export
  },
  // For GitHub Pages subdirectory deployment
  basePath: process.env.NODE_ENV === 'production' ? '/test-repo-from-openclaw' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-repo-from-openclaw/' : '',
  // Optional: change the output directory
  distDir: 'out',
};

export default nextConfig;
