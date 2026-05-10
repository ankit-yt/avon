/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    unoptimized: true,
     qualities: [75,90, 100],
      remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;