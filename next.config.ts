import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  // distDir: 'dist',
  // distDir: 'dist',
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/pir_bate_mesal/" : "",
  basePath: isProd ? "/pir_bate_mesal" : "",
};

export default withFlowbiteReact(nextConfig);