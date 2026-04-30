export const PRODUTOS_STORAGE_KEY = 'produtosRanking';

export function carregarProdutosSalvos() {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(PRODUTOS_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function salvarProdutosNoLocalStorage(produtos) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(PRODUTOS_STORAGE_KEY, JSON.stringify(produtos));
}
