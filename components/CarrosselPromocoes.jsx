'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const promocoes = [
  'promo1.jpeg',
  'promo2.jpeg',
  'promo3.jpeg',
  'promo4.jpeg',
  'promo5.jpeg',
  'promo6.jpeg',
  'promo7.jpeg',
  'promo8.jpeg',
  'promo9.jpeg',
  'promo12.jpeg',
  'promo14.jpeg',
  'promo15.jpeg',
  'promo16.jpeg',
];

export default function CarrosselPromocoes() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 1.3,
          spacing: 5,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider cra-carrossel-promocoes">
      {promocoes.map((image) => (
        <div key={image} className="keen-slider__slide cra-carrossel-item">
          <img
            src={`/Promocao/${image}`}
            alt={`Promoção ${image}`}
            loading="lazy"
            onError={(e) => {
              e.target.src = '/placeholder.jpg';
            }}
          />
        </div>
      ))}
    </div>
  );
}
