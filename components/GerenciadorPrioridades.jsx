'use client';

import { useState } from 'react';
import { formatProductName, ordenarProdutosPorPrioridade, atualizarPrioridadeProduto, moverProduto } from '@/lib/produtosUtils';
import { withPublicPath } from '@/lib/publicPath';

export default function GerenciadorPrioridades({ produtos, onProdutosChange }) {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [produtosEditados, setProdutosEditados] = useState(produtos);

  const handleSalvar = () => {
    onProdutosChange(produtosEditados);
    setModoEdicao(false);
  };

  const handleCancelar = () => {
    setProdutosEditados(produtos);
    setModoEdicao(false);
  };

  const handleMoverCima = (produtoId, index) => {
    if (index > 0) {
      const novosProdutos = moverProduto(produtosEditados, produtoId, index - 1);
      setProdutosEditados(novosProdutos);
    }
  };

  const handleMoverBaixo = (produtoId, index) => {
    if (index < produtosEditados.length - 1) {
      const novosProdutos = moverProduto(produtosEditados, produtoId, index + 1);
      setProdutosEditados(novosProdutos);
    }
  };

  const handleAlterarPrioridade = (produtoId, novaPrioridade) => {
    const novosProdutos = atualizarPrioridadeProduto(produtosEditados, produtoId, novaPrioridade);
    setProdutosEditados(ordenarProdutosPorPrioridade(novosProdutos));
  };

  const produtosOrdenados = ordenarProdutosPorPrioridade(modoEdicao ? produtosEditados : produtos);

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#003759' }}>Gerenciar Prioridades dos Produtos</h3>
        {!modoEdicao ? (
          <button
            onClick={() => setModoEdicao(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#25d366',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Editar Prioridades
          </button>
        ) : (
          <div>
            <button
              onClick={handleSalvar}
              style={{
                padding: '8px 16px',
                backgroundColor: '#25d366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              Salvar
            </button>
            <button
              onClick={handleCancelar}
              style={{
                padding: '8px 16px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {produtosOrdenados.map((produto, index) => (
          <div
            key={produto.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #eee',
              borderRadius: '4px',
              marginBottom: '8px',
              backgroundColor: index < 3 ? '#ebfff4' : 'white'
            }}
          >
            <span style={{ minWidth: '30px', fontWeight: 'bold', color: '#003759' }}>
              #{produto.prioridade || (index + 1)}
            </span>

            <img
              src={withPublicPath(produto.imagem)}
              alt={formatProductName(produto.nome)}
              style={{ width: '40px', height: '40px', objectFit: 'contain', margin: '0 10px' }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{formatProductName(produto.nome)}</div>
              <div style={{ fontSize: '12px', color: '#666' }}>{produto.marca}</div>
            </div>

            {modoEdicao && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <button
                  onClick={() => handleMoverCima(produto.id, index)}
                  disabled={index === 0}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: index === 0 ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: index === 0 ? 'not-allowed' : 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ↑
                </button>
                <button
                  onClick={() => handleMoverBaixo(produto.id, index)}
                  disabled={index === produtosOrdenados.length - 1}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: index === produtosOrdenados.length - 1 ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: index === produtosOrdenados.length - 1 ? 'not-allowed' : 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ↓
                </button>
                <input
                  type="number"
                  min="1"
                  max={produtosOrdenados.length}
                  value={produto.prioridade || (index + 1)}
                  onChange={(e) => handleAlterarPrioridade(produto.id, parseInt(e.target.value))}
                  style={{
                    width: '50px',
                    padding: '4px',
                    border: '1px solid #ddd',
                    borderRadius: '3px',
                    textAlign: 'center'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Como funciona:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#666' }}>
          <li><strong>Prioridade 1</strong> = Produto mais importante (aparece primeiro)</li>
          <li>Produtos com fundo verde são os 3 primeiros</li>
          <li>Use os botões ↑↓ para reordenar ou digite a prioridade diretamente</li>
          <li>As mudanças só são salvas quando você clicar em &quot;Salvar&quot;</li>
        </ul>
      </div>
    </div>
  );
}