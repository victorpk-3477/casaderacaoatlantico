import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE,
  ADDRESS,
  CITY,
  STATE,
  COUNTRY,
  LOGO_URL,
  HERO_IMAGE_URL,
} from './seoConfig';

/**
 * Gerar schema LocalBusiness para Casa de Ração Atlântico
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    '@id': SITE_URL,
    name: BUSINESS_NAME,
    description: 'Pet shop especializado em rações para cães e gatos em Goiânia',
    url: SITE_URL,
    telephone: PHONE,
    logo: LOGO_URL,
    image: HERO_IMAGE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jardim Atlântico',
      addressLocality: CITY,
      addressRegion: STATE,
      postalCode: '74093-140',
      addressCountry: COUNTRY,
    },
    sameAs: [
      'https://www.instagram.com/casaderacaoatlantico',
      'https://www.facebook.com/casaderacaoatlantico',
      'https://www.google.com/maps/place/Casa+de+Ra%C3%A7%C3%A3o+Atl%C3%A2ntico',
      'https://wa.me/556235881956',
    ],
    areaServed: {
      '@type': 'City',
      name: CITY,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:30',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '07:30',
        closes: '17:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: PHONE,
      contactOption: 'TollFree',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '230',
    },
  };
}

/**
 * Gerar schema Product para um produto específico
 */
export function generateProductSchema(product) {
  const productUrl = `${SITE_URL}/produtos#${product.id}`;
  const brandName = product.marca || 'Casa de Ração Atlântico';

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': productUrl,
    name: product.nome,
    image: product.imagem,
    description: `Ração ${product.nome} - ${brandName}. Disponível em ${CITY}.`,
    brand: {
      '@type': 'Brand',
      name: brandName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: brandName,
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'BRL',
      price: product.preco || '0.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BUSINESS_NAME,
        url: SITE_URL,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '25',
    },
  };
}

/**
 * Gerar schema Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Pet shop especializado em rações para cães e gatos em Goiânia',
    sameAs: [
      'https://www.instagram.com/casaderacaoatlantico',
      'https://www.facebook.com/casaderacaoatlantico',
      'https://wa.me/556235881956',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: PHONE,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jardim Atlântico',
      addressLocality: CITY,
      addressRegion: STATE,
      addressCountry: COUNTRY,
    },
  };
}

/**
 * Gerar schema Breadcrumb
 */
export function generateBreadcrumbSchema(items = []) {
  const breadcrumbItems = [{ position: 1, name: 'Início', item: SITE_URL }, ...items];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Gerar schema WebPage
 */
export function generateWebPageSchema(title, description, image = null) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: SITE_URL,
    image: image || HERO_IMAGE_URL,
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
  };
}

/**
 * Gerar schema FAQPage
 */
export function generateFAQSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Component para renderizar schema markup no Head
 */
export function SchemaScript({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
