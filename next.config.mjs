/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: isProd ? "export" : undefined,
  distDir: isProd ? "docs" : ".next",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;