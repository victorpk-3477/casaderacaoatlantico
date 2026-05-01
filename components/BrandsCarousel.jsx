'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './BrandsCarousel.css';
import { withPublicPath } from '@/lib/publicPath';

const defaultBrands = [
  { id: 1, name: 'Fórmula Natural', folder: 'Fórmula Natural', logo: '/Produtos/Marca/formlanatural.png' },
  { id: 2, name: 'Bionatura', folder: 'Bionatural', logo: '/Produtos/Marca/Bionatural.png' },
  { id: 3, name: 'Finotrato', folder: 'Finotrato', logo: '/Produtos/Marca/Finotrato.png' },
  { id: 4, name: 'N&D', folder: 'N&D', logo: '/Produtos/Marca/n&d.png' },
  { id: 5, name: 'Hills', folder: 'Hills', logo: '/Produtos/Marca/hills.avif' },
  { id: 6, name: 'Magnus', folder: 'Magnus', logo: '/Produtos/Marca/MAGNUS.png' },
  { id: 7, name: 'Origens', folder: 'Origens', logo: '/Produtos/Marca/ORIGENS.png' },
  { id: 8, name: 'Special Cat', folder: 'special Cat', logo: '/Produtos/Marca/SpecialCat.png' },
  { id: 9, name: 'Special dog', folder: 'Special dog', logo: '/Produtos/Marca/SpecialDog.png' },
  { id: 10, name: 'VittA Natural', folder: 'VittA_Natural', logo: '/Produtos/Marca/VittA_Natural.png' },
  { id: 11, name: 'GoldeN', folder: 'GoldeN', logo: '/Produtos/Marca/golden.png' },
  { id: 12, name: 'PremieR', folder: 'PremieR', logo: '/Produtos/Marca/Premier.png' },
  { id: 13, name: 'PremieR_Nattu', folder: 'PremieR_Nattu', logo: '/Produtos/Marca/PremieR_Nattu.png' },
  { id: 14, name: 'Besser', folder: 'Besser', logo: '/Produtos/Marca/Besser.png' },
];

function AutoPlayPlugin(callback, interval) {
  return (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, interval);
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  };
}

export default function BrandsCarousel({ brands = defaultBrands, selectedBrand = 'Todos', onBrandClick }) {
  const items = [{ id: 'all', name: 'Todos', logo: null }, ...brands];
  const trackItems = [...items, ...items]; // Duplicar para efeito infinito

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 6,
      spacing: 20,
    },
    drag: true,
    dragSpeed: 1,
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2.5,
          spacing: 8,
        },
      },
    },
  }, [AutoPlayPlugin(() => {}, 3000)]); // Auto-play a cada 3 segundos

  const scrollToDirection = (direction) => {
    if (instanceRef.current) {
      if (direction === 'left') {
        instanceRef.current.prev();
      } else {
        instanceRef.current.next();
      }
    }
  };

  return (
    <div className="brands-section">
      <div className="brands-container">
        <h2 className="brands-title">Marcas que Confiamos</h2>
        <div className="brands-slider-wrapper">
          <div ref={sliderRef} className="keen-slider brands-slider" aria-label="Carrossel de marcas">
            {trackItems.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="keen-slider__slide brand-item"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className={`brand-item-content ${selectedBrand === brand.name ? 'active' : ''}`}
                  onClick={() => onBrandClick?.(brand.name)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') onBrandClick?.(brand.name);
                  }}
                >
                  {brand.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withPublicPath(brand.logo)}
                      alt={brand.name}
                      title={brand.name}
                      className="brand-logo"
                    />
                  ) : (
                    <span className="brand-text">Todos</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
