import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakeimg.pl",
      },
    ],
  },
};

export default nextConfig;
