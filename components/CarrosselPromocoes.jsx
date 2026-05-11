'use client';

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { withPublicPath } from '@/lib/publicPath';

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
          perView: 1,
          spacing: 5,
        },
      },
    },

    created(slider) {
      slider.interval = setInterval(() => {
        slider.next();
      }, 2000); // troca a cada 2 segundos
    },

    destroyed(slider) {
      clearInterval(slider.interval);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider cra-carrossel-promocoes">
      {promocoes.map((image) => (
        <div key={image} className="keen-slider__slide cra-carrossel-item">
          <Image
            src={withPublicPath(`/Promocao/${image}`)}
            alt={`Promoção - Casa de Ração Atlântico em Goiânia`}
            width={360}
            height={280}
            style={{ objectFit: 'contain'}}
            loading="lazy"
            onError={(e) => {
              e.target.src = withPublicPath('/placeholder.jpg');
            }}
          />
        </div>
      ))}
    </div>
  );
}