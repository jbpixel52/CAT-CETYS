/** @type {import('next').NextConfig} */
import remarkGfm from "remark-gfm";
import nextMdx from "@next/mdx";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: { images: { allowFutureImage: true } },
  compiler: {
    emotion: true,
  },
};
export default withMDX(nextConfig);
