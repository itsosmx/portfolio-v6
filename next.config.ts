import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: "skillicons.dev",
        pathname: "/**",
      }
    ]
  },
};

export default nextConfig;
