/**
 * Componentes e utilidades SEO para Next.js
 */

import { SITE_URL, LOGO_URL, HERO_IMAGE_URL } from './seoConfig';

/**
 * Gerar URLs completas com protocolo
 */
export function getAbsoluteUrl(path = '') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path}`;
}

/**
 * Gerar canonical URL
 */
export function getCanonicalUrl(path = '') {
  return getAbsoluteUrl(path);
}

/**
 * Sanitizar texto para usar em atributos
 */
export function sanitizeText(text) {
  return text?.replace(/[&<>"']/g, (char) => {
    const chars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return chars[char];
  });
}

/**
 * Gerar structured data breadcrumb dinamicamente
 */
export function generateBreadcrumbs(path) {
  const segments = path
    .split('/')
    .filter((s) => s)
    .map((segment, index, array) => {
      const url = '/' + array.slice(0, index + 1).join('/');
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return { name, url };
    });

  return [{ name: 'Início', url: '/' }, ...segments];
}

/**
 * Componente para render seguro de JSON-LD
 */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
      suppressHydrationWarning
    />
  );
}

/**
 * Otimizar imagem URL para web
 */
export function optimizeImageUrl(imageUrl, width = 1200, quality = 80) {
  if (!imageUrl) return HERO_IMAGE_URL;
  if (imageUrl.startsWith('http')) return imageUrl;
  return getAbsoluteUrl(imageUrl);
}

/**
 * Gerar srcset para responsive images
 */
export function generateSrcSet(imageUrl, sizes = [320, 640, 1024, 1200]) {
  return sizes
    .map((size) => {
      const url = imageUrl.replace(/\.(jpg|png|webp)$/i, `-${size}.$1`);
      return `${url} ${size}w`;
    })
    .join(',');
}

/**
 * Validar URL
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Normalizar URL para canonical
 */
export function normalizeUrl(url) {
  try {
    const parsed = new URL(url, SITE_URL);
    return parsed.toString().replace(/\/$/, '') || '/';
  } catch {
    return '/';
  }
}

/**
 * Extrair domain de URL
 */
export function extractDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
