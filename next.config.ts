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

  // Cross-origin isolation headers (required for WebContainers / SharedArrayBuffer)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
