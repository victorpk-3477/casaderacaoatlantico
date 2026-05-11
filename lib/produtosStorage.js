// lib/produtosStorage.js
import { supabase } from './supabase';

export async function carregarProdutos() {
  const { data, error } = await supabase
    .from('produtos')
    .select('*')
    .order('prioridade', { ascending: true });

  if (error) {
    console.error('Erro ao carregar produtos:', error.message);
    return null;
  }

  return data;
}