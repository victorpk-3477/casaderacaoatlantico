'use client';

import { formatProductName } from '@/lib/produtosUtils';

export default function ProductCard({ product }) {
  const nomeFormatado = formatProductName(product.nome);
  const whatsappMessage = `Olá, gostaria de comprar ${nomeFormatado}`;
  const whatsappUrl = `https://wa.me/556235881956?text=${encodeURIComponent(whatsappMessage)}`;
  const productImage = encodeURI(product.imagem);

  return (
    <div className="product-card">
      <img
        src={productImage}
        alt={nomeFormatado}
        onError={(e) => {
          e.target.src = '/placeholder.jpg';
        }}
      />
      <div className="product-card-content">
        <h3>{nomeFormatado}</h3>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="product-card-button">
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
