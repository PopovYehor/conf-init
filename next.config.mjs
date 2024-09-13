/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;