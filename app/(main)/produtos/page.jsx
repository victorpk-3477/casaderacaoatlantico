import ProdutosContent from './ProdutosContent';
import { pageDescriptions, pageKeywords, SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export const metadata = {
  title: 'Produtos - Casa de Ração Atlântico | Ração Cão e Gato em Goiânia',
  description: pageDescriptions.produtos,
  keywords: pageKeywords.produtos,
  alternates: {
    canonical: `${SITE_URL}/produtos`,
  },
  openGraph: {
    title: 'Produtos - Casa de Ração Atlântico',
    description: pageDescriptions.produtos,
    url: `${SITE_URL}/produtos`,
    type: 'website',
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Catálogo de produtos - Casa de Ração Atlântico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produtos - Casa de Ração Atlântico',
    description: pageDescriptions.produtos,
    images: [HERO_IMAGE_URL],
  },
};

export default function ProdutosPage() {
  return <ProdutosContent />;
}
