import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },

  images: {
    domains: ['cdn.sanity.io'], // Add any additional domains here if needed
  },
};

export default nextConfig;
