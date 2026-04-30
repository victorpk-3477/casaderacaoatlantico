# Sistema de Ranking de Produtos

Este sistema permite controlar a ordem de exibição dos produtos na página principal, dando prioridade aos produtos mais importantes ou populares.

## Como Funciona

### Prioridade dos Produtos
- Cada produto tem uma propriedade `prioridade` (número inteiro)
- **Prioridade 1** = Produto mais importante (aparece primeiro)
- **Prioridade 2** = Segundo mais importante, e assim por diante
- Produtos sem prioridade recebem prioridade 999 (aparecem por último)

### Ordenação Automática
- Os produtos são automaticamente ordenados por prioridade em todas as páginas
- Funciona tanto na visualização "Todos" quanto nos filtros por marca
- A ordenação acontece em tempo real

## Como Gerenciar as Prioridades

### 1. Acesse o Painel Administrativo
```
http://localhost:3001/admin/produtos
```

### 2. Interface de Gerenciamento
- **Visualização**: Lista todos os produtos ordenados por prioridade
- **Produtos em destaque**: Os 3 primeiros produtos têm fundo verde
- **Botões de navegação**: ↑↓ para mover produtos na lista
- **Edição direta**: Campo numérico para alterar prioridade

### 3. Modos de Edição
- **Modo Visualização**: Apenas visualiza a ordem atual
- **Modo Edição**: Permite alterar prioridades
  - Clique em "Editar Prioridades"
  - Use ↑↓ para reordenar
  - Digite números diretamente nos campos
  - Clique "Salvar" para confirmar mudanças

## Estrutura dos Dados

### Propriedade do Produto
```javascript
{
  id: 1,
  nome: "Nome do Produto",
  marca: "Marca",
  marcaPasta: "Marca",
  imagem: "/Produtos/Marca/imagem.png",
  prioridade: 5  // ← Novo campo (1 = mais prioritário)
}
```

## Funções Utilitárias

### `lib/produtosUtils.js`
- `ordenarProdutosPorPrioridade()` - Ordena produtos por prioridade
- `atualizarPrioridadeProduto()` - Atualiza prioridade de um produto
- `moverProduto()` - Move produto para nova posição
- `gerarPrioridadesAutomaticas()` - Atribui prioridades automaticamente
- `validarPrioridade()` - Valida se prioridade é válida

## Implementação Técnica

### Ordenação Automática
```javascript
const produtosOrdenados = React.useMemo(() => {
  let produtos = selectedBrand === 'Todos'
    ? produtosMock
    : produtosMock.filter(produto => produto.marca === selectedBrand);

  return produtos.sort((a, b) => (a.prioridade || 999) - (b.prioridade || 999));
}, [selectedBrand]);
```

### Componente Administrativo
- `GerenciadorPrioridades.jsx` - Interface para gerenciar prioridades
- `/admin/produtos` - Página administrativa

## Estratégias de Priorização

### Produtos Mais Vendidos
- Atribuir prioridades 1-10 aos produtos mais vendidos

### Produtos em Promoção
- Dar prioridade alta (1-5) aos produtos em oferta

### Novos Produtos
- Prioridade média (10-30) para produtos recém-lançados

### Produtos Sazonais
- Ajustar prioridades conforme a temporada

### Produtos por Categoria
- Cães adultos: prioridade 1-20
- Gatos adultos: prioridade 21-40
- Filhotes: prioridade 41-60
- Produtos especiais: prioridade 61-80

## Exemplo de Prioridades

```
Prioridade 1-5: Produtos estrela (mais vendidos)
Prioridade 6-15: Produtos em promoção
Prioridade 16-30: Novos produtos
Prioridade 31-50: Produtos populares
Prioridade 51-70: Produtos regulares
Prioridade 71+: Produtos específicos/raros
```

## Próximos Passos

1. **Persistência**: Salvar prioridades em banco de dados
2. **Analytics**: Ajustar prioridades baseado em dados de vendas
3. **A/B Testing**: Testar diferentes ordenações
4. **Regras Automáticas**: Sistema de regras para ajustar prioridades automaticamente

## URLs Importantes

- **Página de Produtos**: `/produtos`
- **Administração**: `/admin/produtos`
- **API de Produtos**: `lib/produtosData.js`