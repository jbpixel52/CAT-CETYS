/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};
export default nextConfig