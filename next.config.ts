import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Allow Server Actions from these origins (replace with your URLs)
      allowedOrigins: [
        "localhost:3000",
        "98ljbqb4-3000.asse.devtunnels.ms", // Your dev tunnel URL
      ],
    },
  },
  // Other Next.js config options...
};

export default withPayload(nextConfig);
