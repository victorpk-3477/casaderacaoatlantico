/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
    domains: ['localhost', 'www.casaderacaoatlantico.com.br'],
  },
};

module.exports = nextConfig;
