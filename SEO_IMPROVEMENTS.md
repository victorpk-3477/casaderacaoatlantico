# SEO Improvements - Casa de Ração Atlântico

## Melhorias Implementadas

Este documento descreve todas as melhorias de SEO técnico implementadas no projeto Next.js da Casa de Ração Atlântico.

### 1. ✅ Metadata API do Next.js

**Arquivo:** `lib/seoConfig.js`

Centralização de todas as configurações de metadata:
- Titles otimizados com keywords locais
- Descriptions ricas em contexto
- Open Graph tags para compartilhamento social
- Twitter Card tags
- Keywords relevantes por página

**Implementação:**
```javascript
import { generateMetadata, pageDescriptions, pageKeywords } from '@/lib/seoConfig';
```

### 2. ✅ Schema Markup (JSON-LD)

**Arquivo:** `lib/schemaMarkup.js`

Esquemas implementados:
- **LocalBusiness/PetStore:** Informações completas do negócio
- **Organization:** Dados da organização
- **Product:** Schema dinâmico para cada produto
- **Breadcrumb:** Navegação estruturada
- **WebPage:** Metadados de página
- **FAQPage:** Para perguntas frequentes

**Integração:**
```javascript
import { generateLocalBusinessSchema, SchemaScript } from '@/lib/schemaMarkup';
```

### 3. ✅ Sitemap Automático

**Arquivo:** `app/sitemap.js`

Sitemap.xml gerado automaticamente pelo Next.js com:
- Homepage (prioridade 1.0)
- Página de Produtos (prioridade 0.9)
- Página Sobre-Nós (prioridade 0.8)
- Página Links (prioridade 0.7)

URL automática: `/sitemap.xml`

### 4. ✅ Robots.txt

**Arquivo:** `public/robots.txt`

Configuração de crawl:
- Allow: / (todas as páginas indexáveis)
- Disallow: /admin, /.next, /api
- Sitemap: referência automática

### 5. ✅ Lazy Loading de Imagens

**Implementado em:**
- `components/ProductCard.jsx`
- `components/BrandsCarousel.jsx`
- `components/CarrosselPromocoes.jsx`

```jsx
<img
  src={imageUrl}
  alt={altText}
  loading="lazy"
  decoding="async"
/>
```

### 6. ✅ Alt Text Otimizado

Todos os alt texts incluem:
- Nome do produto/marca
- Contexto local (Goiânia)
- Keywords relevantes

**Exemplo:**
```
alt="Ração Golden Fórmula para cães adultos em Goiânia"
alt="Casa de Ração Atlântico - Logo oficial"
alt="${brand.name} - Marca de ração disponível em Goiânia"
```

### 7. ✅ Canonical URLs

Todas as páginas incluem:
```javascript
alternates: {
  canonical: `${SITE_URL}/page-name`,
}
```

### 8. ✅ Open Graph + Twitter Cards

Implementado em todas as páginas:
- og:title, og:description, og:image
- twitter:card, twitter:title, twitter:description

### 9. ✅ Keywords Locais

**Foco em SEO Local Goiânia:**
- "ração em Goiânia"
- "casa de ração Goiânia"
- "pet shop Goiânia"
- "Jardim Atlântico"
- "ração cão Goiânia"
- "ração gato Goiânia"

Integrados naturalmente em:
- Titles
- Descriptions
- Keywords
- Alt texts
- Headings

### 10. ✅ Headings Semânticos

Estrutura corrigida:
- Apenas 1 H1 por página (título principal)
- H2 para seções principais
- H3 para subsecções

### 11. ✅ Acessibilidade Web

Adicionado:
- `aria-label` em elementos interativos
- `aria-label="Toggle menu"` no menu
- `itemScope` e `itemProp` em ProductCard para schema microdata
- Semântica HTML5 adequada

### 12. ✅ Core Web Vitals Otimizados

Implementações:
- **LCP (Largest Contentful Paint):** Lazy loading reduz LCP
- **CLS (Cumulative Layout Shift):** Imagens com atributos sizing
- **FID (First Input Delay):** Sem scripts bloqueadores

### 13. ✅ Performance SEO

Melhorias implementadas:
- Lazy loading de imagens (economia de banda)
- Decoding async de imagens
- Remoção de basePath desnecessário
- Otimização de imports e código

### 14. ✅ Páginas Melhoradas

**Homepage (`app/layout.jsx`):**
- ✅ Schema LocalBusiness
- ✅ Schema Organization
- ✅ Open Graph completo
- ✅ Meta tags robustas

**Produtos (`app/(main)/produtos/page.jsx`):**
- ✅ Keywords de produtos
- ✅ Canonical URL
- ✅ Open Graph para social sharing

**Sobre-Nós (`app/(main)/sobre-nos/page.jsx`):**
- ✅ Keywords locais
- ✅ Schema de negócio
- ✅ Título otimizado

**Linktree (`app/linktree/page.jsx`):**
- ✅ Keywords de redes sociais
- ✅ Canonical URL
- ✅ Meta tags completas

### 15. ✅ Configuração de Ambiente

**Arquivo:** `.env.example`

Variáveis de configuração:
```
NEXT_PUBLIC_SITE_URL=https://www.casaderacaoatlantico.com.br
NEXT_PUBLIC_BUSINESS_NAME=Casa de Ração Atlântico
NEXT_PUBLIC_PHONE=+55 62 3588-1956
```

---

## Próximas Etapas (Recomendações)

### 1. Monitoramento

- [ ] Enviar sitemap para Google Search Console
- [ ] Enviar para Bing Webmaster Tools
- [ ] Monitorar posições de keywords em Google Analytics 4
- [ ] Verificar erros de crawl regularmente

### 2. Conteúdo

- [ ] Criar blog com artigos sobre pets, rações, cuidados
- [ ] Adicionar FAQ page com schema FAQ
- [ ] Criar conteúdo local sobre Goiânia
- [ ] Adicionar reviews/ratings com schema AggregateRating

### 3. Link Building

- [ ] Diretórios locais de pet shops em Goiânia
- [ ] Links de redes sociais
- [ ] Parcerias com blogs pet

### 4. Local SEO

- [ ] Verificar e otimizar Google My Business
- [ ] Adicionar schema LocalBusiness com horários mais detalhados
- [ ] Adicionar múltiplas localizações se expandir

### 5. Performance

- [ ] Implementar image optimization com Next.js Image component (quando possível)
- [ ] Minificar CSS/JS
- [ ] CDN para assets estáticos

### 6. Analytics

- [ ] Configurar Google Analytics 4
- [ ] Monitorar conversões (cliques WhatsApp)
- [ ] Rastrear comportamento de usuários

---

## Como Testar as Melhorias

### Google Search Console
```
https://search.google.com/search-console/
```

### Rich Results Test
```
https://search.google.com/test/rich-results
```

### Lighthouse
```
DevTools → Lighthouse → SEO
```

### Structured Data Validator
```
https://validator.schema.org/
```

### Open Graph Preview
```
https://www.opengraph.xyz/
```

---

## Arquivos Novos Criados

- `lib/seoConfig.js` - Configurações centralizadas de SEO
- `lib/schemaMarkup.js` - Funções de schema markup JSON-LD
- `app/sitemap.js` - Sitemap automático
- `public/robots.txt` - Robots.txt otimizado

---

## Arquivos Modificados

- `app/layout.jsx` - Adicionado schema markup e metadata melhorada
- `app/(main)/produtos/page.jsx` - Metadata otimizada
- `app/(main)/sobre-nos/page.jsx` - Metadata otimizada
- `app/linktree/page.jsx` - Metadata otimizada
- `components/ProductCard.jsx` - Lazy loading + alt text + schema
- `components/BrandsCarousel.jsx` - Lazy loading + alt text melhorado
- `components/CarrosselPromocoes.jsx` - Lazy loading + alt text
- `.env.example` - Variáveis de SEO

---

## Resultado Esperado

✅ Melhor indexação no Google
✅ Melhor SEO local em Goiânia
✅ Melhor compartilhamento em redes sociais
✅ Melhor performance nos Core Web Vitals
✅ Estrutura semântica para search engines
✅ Acessibilidade web melhorada

---

**Última atualização:** 7 de maio de 2026
**Versão:** 1.0
