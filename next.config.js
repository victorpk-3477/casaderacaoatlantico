/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/casaderacaoatlantico',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/casaderacaoatlantico/',
  images: {
    unoptimized: true,
    domains: ['localhost', 'www.casaderacaoatlantico.com.br'],
  },
};

module.exports = nextConfig;
