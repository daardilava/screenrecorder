import type { NextConfig } from "next";

// ✅ Next.js configuration
const nextConfig: NextConfig = {
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Allow external image domains for next/image
  images: {
    remotePatterns: [
      {
        // BunnyCDN (your custom CDN)
        protocol: "https",
        hostname: "*", 
        port: "",
        pathname: "/**",
      },
      {
        // Google user profile images (used in login or user avatar)
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Experimental settings
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

export default nextConfig;
