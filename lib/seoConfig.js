/**
 * Configurações centralizadas de SEO
 */

export const SITE_NAME = 'Casa de Ração Atlântico';
export const SITE_URL = 'https://www.casaderacaoatlantico.com.br';
export const VERCEL_URL = 'https://casaderacaoatlantico.vercel.app';
export const BUSINESS_NAME = 'Casa de Ração Atlântico';
export const PHONE = '+55 62 3588-1956';
export const PHONE_CLEAN = '556235881956';
export const ADDRESS = 'Jardim Atlântico, Goiânia, GO, Brasil';
export const CITY = 'Goiânia';
export const STATE = 'Goiás';
export const COUNTRY = 'Brasil';
export const LOGO_URL = `${SITE_URL}/logo roda pe.png`;
export const HERO_IMAGE_URL = `${SITE_URL}/victorbrunna.jpg`;

export const metadataDefaults = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Ração para Cães e Gatos em Goiânia`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    'A Casa de Ração Atlântico em Goiânia oferece rações premium para cães e gatos, antipulgas, castrados, filhotes, medicamentos pet e entrega local rápida.',
  keywords:
    'ração em Goiânia, casa de ração, pet shop Goiânia, ração cão, ração gato, Golden, Premier, Fórmula Natural, antipulgas Goiânia, castrados, filhotes',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  canonical: SITE_URL,
};

export const viewportConfig = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const themeColor = '#ffffff';

export const openGraphDefaults = {
  type: 'website',
  locale: 'pt_BR',
  url: SITE_URL,
  siteName: BUSINESS_NAME,
  title: `${BUSINESS_NAME} | Ração para Cães e Gatos em Goiânia`,
  description:
    'A Casa de Ração Atlântico em Goiânia oferece rações premium, antipulgas, suplementos e acessórios para pets.',
  images: [
    {
      url: HERO_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: `${BUSINESS_NAME} - Ração em Goiânia`,
      type: 'image/jpeg',
    },
  ],
};

export const twitterDefaults = {
  card: 'summary_large_image',
  title: `${BUSINESS_NAME} | Ração para Cães e Gatos em Goiânia`,
  description:
    'A Casa de Ração Atlântico em Goiânia oferece rações premium, antipulgas, suplementos e acessórios para pets.',
  images: [HERO_IMAGE_URL],
  creator: '@casaderacaoatlantico',
};

/**
 * Gerar metadata com sobrescrita de valores
 */
export function generateMetadata(overrides = {}) {
  return {
    ...metadataDefaults,
    ...overrides,
    openGraph: {
      ...openGraphDefaults,
      ...overrides.openGraph,
    },
    twitter: {
      ...twitterDefaults,
      ...overrides.twitter,
    },
  };
}

/**
 * Keywords otimizadas por página
 */
export const pageKeywords = {
  home: 'ração em Goiânia, casa de ração Goiânia, pet shop Goiânia, rações premium, antipulgas, castrados, filhotes, Golden, Premier, Fórmula Natural',
  produtos: 'ração cão, ração gato, petiscos, acessórios pet, rações premium, antipulgas, castrados, Golden, Premier, Fórmula Natural, Hill\'s, N&D',
  sobre: 'sobre nós, pet shop Goiânia, loja de rações Jardim Atlântico, atendimento pet local, Casa de Ração Atlântico',
  linktree: 'links Casa de Ração Atlântico, redes sociais, contato pet shop Goiânia, WhatsApp, Google Maps',
  marcas: 'marcas de ração, Golden, Hill\'s, Premier, N&D, Origens, Premier Nattu, Bionatural, Goiânia',
  categorias: 'categoria de ração, ração super premium, ração castrados, antipulgas, suplementos pets, Goiânia',
};

/**
 * Descriptions otimizadas por página
 */
export const pageDescriptions = {
  home: 'A Casa de Ração Atlântico em Goiânia oferece rações premium para cães e gatos, antipulgas, rações para castrados e filhotes, além de acessórios e medicamentos pet com entrega local rápida.',
  produtos: 'Confira nosso catálogo completo de rações para cães e gatos em Goiânia, com marcas como Golden, Premier, Hill\'s, N&D e Fórmula Natural. Encontre também antipulgas, suplementos e acessórios.',
  sobre: 'Conheça a história da Casa de Ração Atlântico. Ração de qualidade com melhor preço em Goiânia, no Jardim Atlântico. Pet shop especializado em rações, antipulgas e suplementos para seu pet.',
  linktree: 'Acesse todos os links da Casa de Ração Atlântico em Goiânia: redes sociais, WhatsApp, Google Maps, Instagram e mais.',
  marcas: 'Veja as principais marcas de ração na Casa de Ração Atlântico em Goiânia, incluindo Golden, Premier, Hill\'s, N&D, Origens, Fórmula Natural e muito mais.',
  categorias: 'Navegue por categorias de ração no nosso pet shop em Goiânia: ração premium, castrados, antipulgas e suplementos para cães e gatos.',
};

export const CATEGORY_PAGES = [
  {
    slug: 'racao-premium',
    name: 'Ração Super Premium',
    title: 'Ração Super Premium para Cães e Gatos em Goiânia',
    description:
      'Seleção de rações super premium em Goiânia. Marcas Golden, Premier, Hill\'s e N&D com entrega local e atendimento especializado.',
    keywords:
      'ração super premium Goiânia, ração super premium para cães, ração super premium para gatos, Golden, Premier, Hill\'s, N&D, ração super premium',
  },
  {
    slug: 'racao-castrados',
    name: 'Ração para Castrados',
    title: 'Ração para Castrados em Goiânia',
    description:
      'Encontre ração para cães e gatos castrados em Goiânia. Fórmula equilibrada para digestão saudável e controle de peso.',
    keywords:
      'ração castrados Goiânia, ração castrados para gatos, ração castrados para cães, alimentação para castrados',
  },
  {
    slug: 'antipulgas',
    name: 'Antipulgas e Vermífugos',
    title: 'Antipulgas e Vermífugos para Pets em Goiânia',
    description:
      'Proteja seu pet com antipulgas e vermífugos de qualidade. Opções para cães e gatos disponíveis em Goiânia.',
    keywords:
      'antipulgas Goiânia, vermífugos Goiânia, antipulgas para cães, antipulgas para gatos, proteção contra pulgas',
  },
  {
    slug: 'suplementos',
    name: 'Suplementos e Vitaminas',
    title: 'Suplementos e Vitaminas para Pets em Goiânia',
    description:
      'Suplementos para saúde de cães e gatos em Goiânia. Vitaminas, probióticos e suporte imunológico para seu pet.',
    keywords:
      'suplementos pet Goiânia, vitaminas para cães, vitaminas para gatos, probióticos para pets, saúde animal',
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORY_PAGES.find((item) => item.slug === slug);
}
