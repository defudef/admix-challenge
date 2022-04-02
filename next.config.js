/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'play-lh.googleusercontent.com',
      'is5-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is1-ssl.mzstatic.com',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
