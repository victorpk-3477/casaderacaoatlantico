import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, CATEGORY_PAGES, SITE_URL, HERO_IMAGE_URL } from '@/lib/seoConfig';

export async function generateStaticParams() {
  return CATEGORY_PAGES.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: 'Categoria não encontrada | Casa de Ração Atlântico',
      description: 'Categoria de ração não encontrada em Goiânia.',
    };
  }

  return {
    title: category.title,
    description: category.description,
    keywords: category.keywords,
    alternates: {
      canonical: `${SITE_URL}/categoria/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${SITE_URL}/categoria/${category.slug}`,
      type: 'website',
      images: [
        {
          url: HERO_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${category.name} em Goiânia`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.title,
      description: category.description,
      images: [HERO_IMAGE_URL],
    },
  };
}

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main style={{ padding: '32px 24px', maxWidth: '980px', margin: '0 auto' }}>
      <section style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', color: '#003759', marginBottom: '16px' }}>
          {category.name} em Goiânia
        </h1>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
          {category.description} Escolha a melhor opção para o seu pet e conte com o suporte local da Casa de Ração Atlântico.
        </p>
      </section>

      <section style={{ backgroundColor: '#f7fafc', borderRadius: '20px', padding: '24px' }}>
        <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '16px' }}>
          Conteúdo recomendado para esta categoria
        </h2>
        <ul style={{ color: '#555', lineHeight: '1.8' }}>
          <li>Atendimento personalizado em Goiânia para encontrar a ração certa.</li>
          <li>Consultoria em marcas premium e fórmulas especializadas.</li>
          <li>Entrega local e retirada rápida no Jardim Atlântico.</li>
        </ul>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '32px' }}>
        <Link
          href="/categoria"
          style={{
            padding: '14px 22px',
            borderRadius: '999px',
            backgroundColor: '#f5f5f5',
            color: '#003759',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Ver todas as categorias
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
