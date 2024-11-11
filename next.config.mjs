/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com", "fotobym.com.ua", "drive.google.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;