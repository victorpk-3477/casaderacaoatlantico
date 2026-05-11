/**
 * Configuração de headers HTTP para SEO e segurança
 * Use este arquivo como referência para next.config.js
 */

export const customHeaders = async () => {
  return [
    {
      source: '/:path*',
      headers: [
        // Segurança
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        // Cache para assets estáticos (1 ano)
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        // SEO
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        // Preload
        {
          key: 'Link',
          value: '</fonts/font.woff2>; rel=preload; as=font; crossorigin',
        },
      ],
    },
    // Configuração específica para documentos HTML (cache menor)
    {
      source: '/index.html',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=3600',
        },
      ],
    },
    // Configuração para sitemap e robots
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml; charset=utf-8',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400',
        },
      ],
    },
    {
      source: '/robots.txt',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/plain',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400',
        },
      ],
    },
  ];
};

/**
 * Documentação de headers implementados:
 *
 * X-Content-Type-Options: nosniff
 *   - Previne MIME-type sniffing
 *   - Melhora segurança
 *
 * X-Frame-Options: SAMEORIGIN
 *   - Previne clickjacking
 *   - Permite apenas embed de mesmo domínio
 *
 * X-XSS-Protection: 1; mode=block
 *   - Proteção contra XSS
 *   - Bloqueia página se detectado XSS
 *
 * Cache-Control
 *   - Assets: 1 ano (imutável)
 *   - HTML: 1 hora (permite atualização)
 *   - XML: 24 horas
 *
 * Referrer-Policy: strict-origin-when-cross-origin
 *   - Controla informação de referrer
 *   - Preserva privacidade do usuário
 *   - Mantém informação necessária para analytics
 *
 * Link (Preload)
 *   - Pré-carrega recursos críticos
 *   - Melhora performance
 */
