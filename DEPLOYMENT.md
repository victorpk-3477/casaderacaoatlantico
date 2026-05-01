# Casa de Ração Atlântico - Guia de Deployment

## 📋 Pré-requisitos

- GitHub Account
- Node.js 18+ instalado localmente
- Git instalado

## 🚀 Setup para GitHub Pages

### 1. Preparar o Repositório

```bash
# Initialize git (se ainda não estiver)
git init

# Add remote
git remote add origin https://github.com/victorpk-3477/casaderacaoatlantico.git

# Create initial commit
git add .
git commit -m "Initial commit"

# Push to GitHub
git push -u origin master
```

### 2. Configurar GitHub Pages

1. Vá para **Settings > Pages** do seu repositório
2. Em "Build and deployment":
   - Source: **GitHub Actions**
   - Deixe a ação em branco (ela será configurada automaticamente)

### 3. Deploy Automático

O workflow `.github/workflows/deploy.yml` foi criado e fará:
- Build automático ao fazer push para `main` ou `master`
- Deploy para `gh-pages` branch
- Publicação em `https://seu-usuario.github.io/casaderacaoatlantico/`

### 4. Deploy com Domínio Customizado (Opcional)

Se deseja usar `www.casaderacaoatlantico.com.br`:

1. Adicione um record DNS:
   ```
   CNAME www.casaderacaoatlantico.com.br -> seu-usuario.github.io
   ```

2. Em **Settings > Pages > Custom domain**, adicione o domínio

3. O arquivo `CNAME` será criado automaticamente pelo workflow

## 📦 Build Local

Para testar antes de fazer push:

```bash
npm install
npm run build
npm run start
```

Abra `http://localhost:3000/casaderacaoatlantico`

## 🔄 Atualizações Futuras

Toda vez que fizer um commit e push para `main`:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

O GitHub Actions fará o deploy automaticamente em ~2-3 minutos.

## ✅ Checklist de Deployment

- [ ] Repositório criado no GitHub
- [ ] Workflow de deploy configurado
- [ ] GitHub Pages habilitado
- [ ] Domínio customizado configurado (opcional)
- [ ] Primeiro push realizado
- [ ] Site publicado com sucesso

## 📞 Support

Para mais informações: https://docs.github.com/en/pages
