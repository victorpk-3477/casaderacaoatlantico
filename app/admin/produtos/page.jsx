'use client';

import { useState, useEffect } from 'react';
import GerenciadorPrioridades from '@/components/GerenciadorPrioridades';
import { produtosMock } from '@/lib/produtosData';
import { carregarProdutosSalvos, salvarProdutosNoLocalStorage } from '@/lib/produtosStorage';

export default function AdminProdutosPage() {
  const [produtos, setProdutos] = useState(produtosMock);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const savedProdutos = carregarProdutosSalvos();
    if (savedProdutos) {
      setProdutos(savedProdutos);
    }
  }, []);

  const handleProdutosChange = (novosProdutos) => {
    setProdutos(novosProdutos);
    salvarProdutosNoLocalStorage(novosProdutos);
    setMensagem('Prioridades salvas com sucesso!');

    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h1 style={{ color: '#003759', marginBottom: '10px' }}>
            Administração - Produtos
          </h1>
          <p style={{ color: '#666', margin: 0 }}>
            Gerencie as prioridades dos produtos para controlar a ordem de exibição
          </p>
        </header>

        {mensagem && (
          <div style={{
            padding: '15px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {mensagem}
          </div>
        )}

        <GerenciadorPrioridades
          produtos={produtos}
          onProdutosChange={handleProdutosChange}
        />

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a
            href="/produtos"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#003759',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            ← Voltar para Produtos
          </a>
        </div>
      </div>
    </div>
  );
}