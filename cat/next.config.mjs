/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: { appDir: true },
};

export default nextConfig;
