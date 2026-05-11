import Link from 'next/link';
import { CATEGORY_PAGES, pageDescriptions, pageKeywords, SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export const metadata = {
  title: 'Categorias de Ração - Casa de Ração Atlântico | Goiânia',
  description: pageDescriptions.categorias,
  keywords: pageKeywords.categorias,
  alternates: {
    canonical: `${SITE_URL}/categoria`,
  },
  openGraph: {
    title: 'Categorias de Ração - Casa de Ração Atlântico',
    description: pageDescriptions.categorias,
    url: `${SITE_URL}/categoria`,
    type: 'website',
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Categorias de ração em Goiânia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Categorias de Ração - Casa de Ração Atlântico',
    description: pageDescriptions.categorias,
    images: [HERO_IMAGE_URL],
  },
};

export default function CategoriaPage() {
  return (
    <main style={{ padding: '32px 24px', maxWidth: '1120px', margin: '0 auto' }}>
      <section style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', color: '#003759', marginBottom: '16px' }}>
          Categorias de Ração em Goiânia
        </h1>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '860px', lineHeight: '1.8' }}>
          Navegue por nossas categorias especializadas: ração premium, ração para castrados, antipulgas e suplementos. Cada categoria foi pensada para o pet shop local e para o melhor atendimento em Goiânia.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {CATEGORY_PAGES.map((category) => (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            style={{
              display: 'block',
              padding: '24px',
              borderRadius: '16px',
              backgroundColor: '#f7fafc',
              border: '1px solid #e2e8f0',
              color: '#002d4a',
              textDecoration: 'none',
            }}
          >
            <h2 style={{ fontSize: '22px', margin: 0 }}>{category.name}</h2>
            <p style={{ marginTop: '12px', color: '#555', lineHeight: '1.7' }}>{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
