# Guia de Implementação e Testes de SEO

Casa de Ração Atlântico - Melhorias de SEO Técnico

---

## 🚀 Deploy para Produção

### 1. Commit das Mudanças

```bash
git add .
git commit -m "feat: implement comprehensive SEO improvements for Casa de Ração Atlântico"
```

### 2. Push para Repository

```bash
git push origin main
```

### 3. Deploy no Vercel

- O Vercel redeploy automaticamente após o push
- Aguarde 2-3 minutos para build completar
- Acesse https://casaderacaoatlantico.vercel.app/

---

## ✅ Testes de SEO

### 1. Google Search Console

**Passo a passo:**

1. Acesse: https://search.google.com/search-console/
2. Selecione sua propriedade (casaderacaoatlantico.vercel.app)
3. Vá para **Sitemaps**
4. Adicione novo sitemap:
   ```
   https://casaderacaoatlantico.vercel.app/sitemap.xml
   ```

5. Aguarde Google processar (pode levar alguns dias)

**Verificações:**
- [ ] Sitemap enviado com sucesso
- [ ] Todas as 4 URLs indexadas
- [ ] Sem erros de cobertura

### 2. Rich Results Test (Schema Markup)

**Teste o schema:**

1. Acesse: https://search.google.com/test/rich-results
2. Digite: `https://casaderacaoatlantico.vercel.app/`
3. Clique "Run test"

**Resultados esperados:**
- ✅ LocalBusiness com endereço
- ✅ Organization com social links
- ✅ Sem erros

### 3. Open Graph Preview

**Teste o compartilhamento social:**

1. Acesse: https://www.opengraph.xyz/
2. Digite URL: `https://casaderacaoatlantico.vercel.app/`
3. Veja preview no Facebook/Twitter

**Verificações:**
- [ ] Título aparece correto
- [ ] Descrição aparece completa
- [ ] Imagem carrega corretamente

### 4. Lighthouse (Performance + SEO)

**Chrome DevTools:**

1. Abra site em navegador
2. F12 → Lighthouse
3. Selecione: Desktop
4. Marque: Performance, Accessibility, SEO
5. Clique "Analyze page load"

**Métricas esperadas:**
- Performance: 80+
- Accessibility: 90+
- SEO: 95+

### 5. PageSpeed Insights

**Teste de performance:**

1. Acesse: https://pagespeed.web.dev/
2. Digite URL do site
3. Analise desktop e mobile

**Core Web Vitals esperados:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### 6. Structured Data Validator

**Valide o JSON-LD:**

1. Acesse: https://validator.schema.org/
2. Cole URL completa
3. Clique "Validate"

**Verificações:**
- [ ] LocalBusiness validado
- [ ] Organization validado
- [ ] Sem avisos

### 7. Mobile-Friendly Test

**Teste responsividade:**

1. Acesse: https://search.google.com/test/mobile-friendly
2. Digite URL
3. Aguarde resultado

**Resultado esperado:**
- ✅ Page is mobile friendly

---

## 📊 Verificações Técnicas

### 1. Verificar Sitemap

Acesse: `https://casaderacaoatlantico.vercel.app/sitemap.xml`

Esperado (XML):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://casaderacaoatlantico.vercel.app</loc>
    <lastmod>2026-05-07</lastmod>
    <changeFrequency>daily</changeFrequency>
    <priority>1</priority>
  </url>
  <!-- ... outras URLs ... -->
</urlset>
```

### 2. Verificar Robots.txt

Acesse: `https://casaderacaoatlantico.vercel.app/robots.txt`

Esperado:
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /.next
Disallow: /api

Crawl-delay: 1
Request-rate: 1/1s

Sitemap: https://www.casaderacaoatlantico.com.br/sitemap.xml
Sitemap: https://casaderacaoatlantico.vercel.app/sitemap.xml
```

### 3. Inspecionar Head (F12)

**Procure por:**
- [ ] `<meta name="description">` com conteúdo
- [ ] `<meta property="og:title">` presente
- [ ] `<meta property="og:image">` com URL
- [ ] `<link rel="canonical">` correto
- [ ] Scripts de schema markup (`<script type="application/ld+json">`)

### 4. Testar Lazy Loading

**DevTools → Network:**

1. Carregue página
2. Scroll para imagens abaixo do fold
3. Observe em Network tab:
   - [ ] Imagens não carregam até scroll
   - [ ] Request de imagem aparece ao scroll

### 5. Testar Links Sociais

Verifique em Footer:
- [ ] WhatsApp link funciona
- [ ] Instagram link abre Instagram
- [ ] Facebook link abre Facebook
- [ ] Google Maps embed carrega

---

## 📈 Google Analytics Setup

### Configurar GA4

1. Acesse: https://analytics.google.com/
2. Crie propriedade para novo domínio
3. Obtenha ID: `G-XXXXXXXXXX`
4. Adicione ao código (em `app/layout.jsx`):

```jsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### Rastrear Conversões

Adicione rastreamento ao botão WhatsApp:
```jsx
const handleWhatsAppClick = () => {
  gtag.event('conversion', {
    'value': 1.0,
    'currency': 'BRL',
    'transaction_id': 'T123456'
  });
};
```

---

## 🔍 Monitoramento Contínuo

### 1. Google Search Console

**Semanal:**
- [ ] Verificar erros de crawl
- [ ] Conferir impressões de keywords
- [ ] Analisar CTR

### 2. Google Analytics

**Diário:**
- [ ] Usuários únicos
- [ ] Taxa de rejeição
- [ ] Tempo na página
- [ ] Cliques WhatsApp

### 3. Bing Webmaster Tools

**Opcional:**
1. Acesse: https://www.bing.com/webmasters/
2. Adicione site
3. Envie sitemap

### 4. Rank Tracking

**Ferramentas recomendadas:**
- Google Search Console (grátis)
- Ubersuggest (pago)
- Ahrefs (pago)
- SEMrush (pago)

**Keywords para monitorar:**
- ração em Goiânia
- casa de ração Goiânia
- pet shop Goiânia
- ração cão Goiânia
- ração gato Goiânia

---

## 🎯 Próximos Passos

### Curto Prazo (1-2 semanas)

- [ ] Enviar sitemap para Google Search Console
- [ ] Executar testes acima
- [ ] Configurar Google Analytics
- [ ] Monitorar indexação

### Médio Prazo (1-2 meses)

- [ ] Criar blog com conteúdo SEO
- [ ] Adicionar FAQ com schema
- [ ] Implementar sistema de reviews
- [ ] Otimizar Google My Business

### Longo Prazo (3+ meses)

- [ ] Construir backlinks
- [ ] Expandir conteúdo
- [ ] Melhorar rankings
- [ ] Aumentar conversões

---

## ❓ FAQ

### P: Quanto tempo leva para indexar?
**R:** Google geralmente indexa dentro de 2-4 semanas. Use Google Search Console para acelerar.

### P: Como melhorar ranking local?
**R:** 
- Otimizar Google My Business
- Adicionar palavras-chave locais
- Obter reviews/ratings
- Construir links locais

### P: Preciso adicionar mais conteúdo?
**R:** Sim! Blog com artigos sobre pets melhora muito o SEO.

### P: As imagens estão sendo indexadas?
**R:** Sim, use alt texts descritivos para melhor indexação.

### P: Como rastrear leads gerados?
**R:** Use Google Analytics com evento customizado no click WhatsApp.

---

## 📚 Recursos Úteis

- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Web.dev - Core Web Vitals](https://web.dev/vitals/)

---

## 🐛 Troubleshooting

### Problema: Sitemap não aparece
**Solução:**
- Verificar `/app/sitemap.js` existe
- Fazer rebuild: `npm run build`
- Aguardar cache limpar

### Problema: Schema não valida
**Solução:**
- Usar Structured Data Validator
- Verificar JSON syntax
- Limpar cache do browser

### Problema: Imagens não carregam
**Solução:**
- Verificar `withPublicPath()` função
- Conferir caminhos em `/public`
- Usar Network tab para debug

### Problema: Lazy loading não funciona
**Solução:**
- Verificar `loading="lazy"` na img
- Testar em browser moderno
- Desabilitar cache para teste

---

**Última atualização:** 7 de maio de 2026
**Versão:** 1.0
