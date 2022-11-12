/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm";
import nextMdx from "@next/mdx";

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};
export default nextConfig