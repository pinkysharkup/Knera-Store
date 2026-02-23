/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "formarta.qodeinteractive.com",
      },
    ],
  },
};

module.exports = nextConfig;