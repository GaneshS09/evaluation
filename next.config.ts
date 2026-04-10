import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/evaluation",
  assetPrefix: "/evaluation"
};

export default nextConfig;
