/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/casaderacaoatlantico',
  assetPrefix: '/casaderacaoatlantico/',
  images: {
    domains: ['localhost', 'www.casaderacaoatlantico.com.br'],
  },
};

module.exports = nextConfig;
