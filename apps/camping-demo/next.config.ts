import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/camping-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
