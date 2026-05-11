import SobreNosContent from './SobreNosContent';
import { pageDescriptions, pageKeywords, SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export const metadata = {
  title: 'Sobre Nós - Casa de Ração Atlântico | Pet Shop em Goiânia',
  description: pageDescriptions.sobre,
  keywords: pageKeywords.sobre,
  alternates: {
    canonical: `${SITE_URL}/sobre-nos`,
  },
  openGraph: {
    title: 'Sobre Nós - Casa de Ração Atlântico',
    description: pageDescriptions.sobre,
    url: `${SITE_URL}/sobre-nos`,
    type: 'website',
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Sobre a Casa de Ração Atlântico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nós - Casa de Ração Atlântico',
    description: pageDescriptions.sobre,
    images: [HERO_IMAGE_URL],
  },
};

export default function SobreNosPage() {
  return <SobreNosContent />;
}
