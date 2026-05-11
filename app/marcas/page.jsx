import Image from 'next/image';
import Link from 'next/link';
import { brands, getBrandSlug, brandDescriptions } from '@/lib/produtosData';
import { pageDescriptions, pageKeywords, SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export const metadata = {
  title: 'Marcas de Ração - Casa de Ração Atlântico | Goiânia',
  description: pageDescriptions.marcas,
  keywords: pageKeywords.marcas,
  alternates: {
    canonical: `${SITE_URL}/marcas`,
  },
  openGraph: {
    title: 'Marcas de Ração - Casa de Ração Atlântico',
    description: pageDescriptions.marcas,
    url: `${SITE_URL}/marcas`,
    type: 'website',
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Marcas de ração em Goiânia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcas de Ração - Casa de Ração Atlântico',
    description: pageDescriptions.marcas,
    images: [HERO_IMAGE_URL],
  },
};

export default function MarcasPage() {
  return (
    <main style={{ padding: '32px 24px', maxWidth: '1120px', margin: '0 auto' }}>
      <section style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', color: '#003759', marginBottom: '16px' }}>
          Marcas de Ração em Goiânia
        </h1>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '860px', lineHeight: '1.8' }}>
          Encontre as principais marcas de ração e produtos para cães e gatos com atendimento local e estoque em Goiânia. Selecione a marca de sua preferência para ver opções de rações premium, saudáveis e completas.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/marcas/${getBrandSlug(brand.name)}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              padding: '24px',
              borderRadius: '16px',
              backgroundColor: '#f7fafc',
              border: '1px solid #e2e8f0',
              color: '#002d4a',
              textDecoration: 'none',
              minHeight: '220px',
              textAlign: 'center',
            }}
          >
            <Image
              src={brand.logo}
              alt={`Logo ${brand.name}`}
              width={140}
              height={120}
              style={{ objectFit: 'contain' }}
            />
            <h2 style={{ margin: 0, fontSize: '22px' }}>{brand.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
