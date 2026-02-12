import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  experimental: {
    // Tree-shake icon/component libraries for smaller bundles
    optimizePackageImports: [
      "lucide-react",
      "radix-ui",
      "class-variance-authority",
    ],
  },

  // Compress responses
  compress: true,

  // Powered-by header removal (security + tiny perf)
  poweredByHeader: false,
};

export default nextConfig;
