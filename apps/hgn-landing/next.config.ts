import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hgn-landing',
  images: { unoptimized: true },

  /* config options here */
};

export default nextConfig;
