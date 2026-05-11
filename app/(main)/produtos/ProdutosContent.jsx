'use client';

// app/(main)/produtos/ProdutosContent.jsx
// VERSÃO SUPABASE — carrega produtos do banco em vez do localStorage

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import { brands, getBrandSlug } from '@/lib/produtosData';          // mantém apenas o array de marcas
import { carregarProdutos } from '@/lib/produtosStorage'; // agora busca do Supabase
import './produtos.css';

const PRODUCTS_PER_LOAD = 12;

export default function ProdutosContent() {
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [produtosAtuais, setProdutosAtuais] = useState([]);
  const [carregandoInicial, setCarregandoInicial] = useState(true);
  const observerRef = useRef();

  // Carrega produtos do Supabase na montagem
  useEffect(() => {
    async function fetchProdutos() {
      setCarregandoInicial(true);
      const dados = await carregarProdutos();
      if (dados) {
        setProdutosAtuais(dados);
      }
      setCarregandoInicial(false);
    }
    fetchProdutos();
  }, []);

  // Filtra e ordena por prioridade (o Supabase já retorna ordenado,
  // mas mantemos o filtro de marca no cliente)
  const produtosFiltrados = React.useMemo(() => {
    if (selectedBrand === 'Todos') return produtosAtuais;
    return produtosAtuais.filter((p) => p.marca === selectedBrand);
  }, [selectedBrand, produtosAtuais]);

  // Reset dos produtos visíveis quando muda a marca ou a lista base
  useEffect(() => {
    setVisibleProducts(produtosFiltrados.slice(0, PRODUCTS_PER_LOAD));
    setHasMore(produtosFiltrados.length > PRODUCTS_PER_LOAD);
    setIsLoading(false);
  }, [produtosFiltrados]);

  // Carrega mais produtos (infinite scroll)
  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setVisibleProducts((prev) => {
      const next = produtosFiltrados.slice(prev.length, prev.length + PRODUCTS_PER_LOAD);
      const updated = [...prev, ...next];
      setHasMore(updated.length < produtosFiltrados.length);
      setIsLoading(false);
      return updated;
    });
  }, [produtosFiltrados, isLoading, hasMore]);

  // Intersection Observer para detectar o fim da lista
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

  

  // Tela de carregamento inicial
  if (carregandoInicial) {
    return (
      <div className="produtos-wrapper">
        <div className="produtos-container">
          <div className="loading-container" style={{ minHeight: '60vh', justifyContent: 'center' }}>
            <div className="loading-spinner"></div>
            <p>Carregando produtos...</p>
          </div>
        </div>
      </div>
    );
  }

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