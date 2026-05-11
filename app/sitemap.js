import { SITE_URL } from '@/lib/seoConfig';
import { brands, getBrandSlug } from '@/lib/produtosData';
import { CATEGORY_PAGES } from '@/lib/seoConfig';

export default function sitemap() {
  const baseUrl = SITE_URL;

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/linktree`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/marcas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categoria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...brands.map((brand) => ({
      url: `${baseUrl}/marcas/${getBrandSlug(brand.name)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...CATEGORY_PAGES.map((category) => ({
      url: `${baseUrl}/categoria/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];

  return routes;
}
