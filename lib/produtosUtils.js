// Funções utilitárias para gerenciar prioridades dos produtos

/**
 * Ordena produtos por prioridade (menor número = maior prioridade)
 * @param {Array} produtos - Array de produtos
 * @returns {Array} Produtos ordenados por prioridade
 */
export function ordenarProdutosPorPrioridade(produtos) {
  return [...produtos].sort((a, b) => (a.prioridade || 999) - (b.prioridade || 999));
}

/**
 * Atualiza a prioridade de um produto específico
 * @param {Array} produtos - Array de produtos
 * @param {number} produtoId - ID do produto
 * @param {number} novaPrioridade - Nova prioridade (1 = mais prioritário)
 * @returns {Array} Novo array com prioridade atualizada
 */
export function atualizarPrioridadeProduto(produtos, produtoId, novaPrioridade) {
  return produtos.map(produto =>
    produto.id === produtoId
      ? { ...produto, prioridade: novaPrioridade }
      : produto
  );
}

/**
 * Move um produto para uma nova posição na lista
 * @param {Array} produtos - Array de produtos
 * @param {number} produtoId - ID do produto a mover
 * @param {number} novaPosicao - Nova posição (0 = primeira posição)
 * @returns {Array} Novo array com produto reposicionado
 */
export function moverProduto(produtos, produtoId, novaPosicao) {
  const produtosOrdenados = ordenarProdutosPorPrioridade(produtos);
  const produtoIndex = produtosOrdenados.findIndex(p => p.id === produtoId);

  if (produtoIndex === -1 || novaPosicao < 0 || novaPosicao >= produtosOrdenados.length) {
    return produtosOrdenados;
  }

  const produto = produtosOrdenados[produtoIndex];
  const novosProdutos = produtosOrdenados.filter(p => p.id !== produtoId);

  // Inserir na nova posição
  novosProdutos.splice(novaPosicao, 0, produto);

  // Reatribuir prioridades baseadas na nova ordem
  return novosProdutos.map((p, index) => ({
    ...p,
    prioridade: index + 1
  }));
}

/**
 * Gera prioridades automáticas para produtos sem prioridade
 * @param {Array} produtos - Array de produtos
 * @returns {Array} Produtos com prioridades atribuídas
 */
export function gerarPrioridadesAutomaticas(produtos) {
  return produtos.map((produto, index) => ({
    ...produto,
    prioridade: produto.prioridade || (index + 1)
  }));
}

/**
 * Valida se uma prioridade é válida
 * @param {number} prioridade - Prioridade a validar
 * @param {number} totalProdutos - Total de produtos
 * @returns {boolean} True se válida
 */
export function validarPrioridade(prioridade, totalProdutos) {
  return Number.isInteger(prioridade) && prioridade >= 1 && prioridade <= totalProdutos;
}

/**
 * Normaliza o nome do produto para exibição.
 * Remove underscores, hífens, reduz múltiplos espaços e capitaliza cada palavra.
 * @param {string} nome - Nome original do produto
 * @returns {string} Nome formatado para exibição
 */
export function formatProductName(nome) {
  if (!nome || typeof nome !== 'string') return nome;

  return nome
    .replace(/[_-]+/g, ' ')
    .replace(/\.{2,}/g, '.')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,;:.!?\)])/g, '$1')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
}