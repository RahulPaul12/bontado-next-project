import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.storeking.xyz',
      },
    ],
  },
};

export default nextConfig;
