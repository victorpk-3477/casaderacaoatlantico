'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ProductCard from '@/components/ProductCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import { brands, produtosMock } from '@/lib/produtosData';
import { carregarProdutosSalvos } from '@/lib/produtosStorage';
import './produtos.css';

const PRODUCTS_PER_LOAD = 12; // Quantidade de produtos carregados por vez

export default function ProdutosContent() {
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [produtosAtuais, setProdutosAtuais] = useState(produtosMock);
  const observerRef = useRef();

  useEffect(() => {
    const savedProdutos = carregarProdutosSalvos();
    if (savedProdutos) {
      setProdutosAtuais(savedProdutos);
    }
  }, []);

  // Filtrar e ordenar produtos por prioridade
  const produtosFiltrados = React.useMemo(() => {
    let produtos = selectedBrand === 'Todos'
      ? produtosAtuais
      : produtosAtuais.filter((produto) => produto.marca === selectedBrand);

    // Ordenar por prioridade (menor número = maior prioridade)
    return [...produtos].sort((a, b) => (a.prioridade || 999) - (b.prioridade || 999));
  }, [selectedBrand, produtosAtuais]);

  // Reset visible products quando a marca ou o ranking de produtos muda
  useEffect(() => {
    setVisibleProducts(produtosFiltrados.slice(0, PRODUCTS_PER_LOAD));
    setIsLoading(false); // Reset loading state
  }, [selectedBrand, produtosFiltrados]);

  // Atualizar hasMore quando produtosFiltrados muda
  useEffect(() => {
    setHasMore(produtosFiltrados.length > PRODUCTS_PER_LOAD);
  }, [produtosFiltrados]);

  // Função para carregar mais produtos
  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simular delay de carregamento (pode ser removido em produção)
    setTimeout(() => {
      setVisibleProducts(prevVisible => {
        const currentLength = prevVisible.length;
        const nextProducts = produtosFiltrados.slice(
          currentLength,
          currentLength + PRODUCTS_PER_LOAD
        );

        const newVisibleProducts = [...prevVisible, ...nextProducts];
        setHasMore(newVisibleProducts.length < produtosFiltrados.length);
        setIsLoading(false);

        return newVisibleProducts;
      });
    }, 500); // 500ms de delay para simular carregamento
  }, [produtosFiltrados, isLoading, hasMore]);

  // Intersection Observer para detectar quando chegar no final
  const lastProductRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            loadMoreProducts();
          }
        },
        { threshold: 0.1 }
      );

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, loadMoreProducts]
  );

  return (
    <div className="produtos-wrapper">
      <div className="produtos-container">


        {/* BRANDS CAROUSEL */}
        <BrandsCarousel
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandClick={setSelectedBrand}
        />

        {/* GRID DE PRODUTOS */}
        <div className="produtos-grid">
          {visibleProducts.map((produto, index) => (
            <div
              key={produto.id}
              ref={index === visibleProducts.length - 1 ? lastProductRef : null}
            >
              <ProductCard product={produto} />
            </div>
          ))}
        </div>

        {/* LOADING INDICATOR */}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Carregando mais produtos...</p>
          </div>
        )}

        {/* MENSAGEM QUANDO NÃO HÁ MAIS PRODUTOS */}
        {!hasMore && visibleProducts.length > 0 && (
          <div className="no-more-products">
            <p>Você viu todos os produtos desta categoria! 🎉</p>
          </div>
        )}

        {/* CTA FINAL */}
        <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#003759' }}>
            Não encontrou o que procura?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
            Entre em contato pelo WhatsApp e fale com nosso time
          </p>
          <a
            href="https://wa.me/556235881956"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#25D366',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#128C7E')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
            Fale com a gente
          </a>
        </div>
      </div>
    </div>
  );
}
