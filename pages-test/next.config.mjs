/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["jherr-bad-library"],
};

export default nextConfig;
