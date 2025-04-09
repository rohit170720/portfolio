import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/portfolio",
  images: {
    unoptimized: true, // <=== enables unoptimized images
  },
};

export default nextConfig;
