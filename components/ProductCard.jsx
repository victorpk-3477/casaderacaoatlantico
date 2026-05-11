'use client';

import Image from 'next/image';
import { formatProductName } from '@/lib/produtosUtils';
import { withPublicPath } from '@/lib/publicPath';
import { generateProductSchema } from '@/lib/schemaMarkup';

export default function ProductCard({ product }) {
  const nomeFormatado = formatProductName(product.nome);
  const whatsappMessage = `Olá, gostaria de comprar ${nomeFormatado}`;
  const whatsappUrl = `https://wa.me/556235881956?text=${encodeURIComponent(whatsappMessage)}`;
  const productImage = encodeURI(withPublicPath(product.imagem));
  
  // Alt text otimizado para SEO
  const altText = `${nomeFormatado} - Ração para pets em Goiânia | Casa de Ração Atlântico`;

  return (
    <div className="product-card" itemScope itemType="https://schema.org/Product">
      {/* Meta tags para schema markup */}
      <meta itemProp="name" content={nomeFormatado} />
      <meta itemProp="image" content={productImage} />
      
      <Image
        src={productImage}
        alt={altText}
        width={320}
        height={240}
        style={{ objectFit: 'scale-down' }}
        loading="lazy"
        onError={(e) => {
          e.target.src = withPublicPath('/placeholder.jpg');
        }}
      />
      <div className="product-card-content">
        <h3 itemProp="name">{nomeFormatado}</h3>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="product-card-button"
          aria-label={`Comprar ${nomeFormatado} pelo WhatsApp`}
        >
          Comprar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
