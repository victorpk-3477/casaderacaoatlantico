import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { brands, getBrandBySlug, getBrandSlug, brandDescriptions } from '@/lib/produtosData';
import { SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export async function generateStaticParams() {
  return brands.map((brand) => ({ brand: getBrandSlug(brand.name) }));
}

export function generateMetadata({ params }) {
  const brand = getBrandBySlug(params.brand);

  if (!brand) {
    return {
      title: 'Marca não encontrada | Casa de Ração Atlântico',
      description: 'Marca não encontrada em Goiânia.',
    };
  }

  const title = `${brand.name} - Casa de Ração Atlântico | Goiânia`;
  const brandDescription = brandDescriptions[brand.name] || `Confira a linha ${brand.name} de rações para cães e gatos em Goiânia. Atendimento local, entrega rápida e variedade para filhotes, adultos e castrados.`;

  return {
    title,
    description: brandDescription,
    keywords: `${brand.name}, ração ${brand.name}, ${brand.name} Goiânia, ${brand.name} para cães, ${brand.name} para gatos`,
    alternates: {
      canonical: `${SITE_URL}/marcas/${params.brand}`,
    },
    openGraph: {
      title,
      description: brandDescription,
      url: `${SITE_URL}/marcas/${params.brand}`,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `Ração ${brand.name} em Goiânia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: brandDescription,
      images: [HERO_IMAGE_URL],
    },
  };
}

export default function BrandPage({ params }) {
  const brand = getBrandBySlug(params.brand);

  if (!brand) {
    notFound();
  }

  return (
    <main style={{ padding: '32px 24px', maxWidth: '980px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '32px' }}>
        <Image
          src={brand.logo}
          alt={`Logo ${brand.name}`}
          width={200}
          height={120}
          style={{ height: 'auto', marginBottom: '16px', objectFit: 'contain' }}
        />
        <h1 style={{ fontSize: '36px', color: '#003759', marginBottom: '16px' }}>
          {brand.name}
        </h1>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '860px', margin: '0 auto', lineHeight: '1.8' }}>
          {brandDescriptions[brand.name] || `Descubra nossos produtos ${brand.name} para cães e gatos, aliados à consultoria local da Casa de Ração Atlântico. Ideal para filhotes, adultos e castrados.`}
        </p>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', justifyContent: 'center' }}>
        <Link
          href="/marcas"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            backgroundColor: '#f5f5f5',
            color: '#003759',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Todas as marcas
        </Link>
        <Link
          href="/produtos"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            backgroundColor: '#25D366',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Ver produtos
        </Link>
      </div>
    </main>
  );
}
