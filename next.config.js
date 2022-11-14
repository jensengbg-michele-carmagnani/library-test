/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.adlibris.com", "links.papareact.com", "picsum.photos"],
  },
};
