import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vhut-landing',
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: '/vhut-landing' },

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
