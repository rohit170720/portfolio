import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  basePath: "/portfolio",
};

export default nextConfig;
