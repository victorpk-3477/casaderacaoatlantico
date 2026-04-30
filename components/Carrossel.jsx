'use client';

import { useState, useEffect, useRef } from 'react';

const fotos = [
  1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 15, 17, 19, 20, 22, 25, 26, 33, 34, 35,
  36, 38, 40, 41, 42, 44, 46, 48, 49, 51, 53, 55, 56, 59, 60, 61, 62, 63,
  64, 65, 66, 67, 69, 71, 73, 74, 75, 76, 77, 79, 80, 82, 83, 84, 86, 87,
  88, 89, 90, 91, 92, 94,
];

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotos.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % fotos.length);
  };

  return (
    <div className="cra-carrossel" ref={sliderRef}>
      <div className="cra-carrossel-container" style={{
        transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
        transition: 'transform 0.5s ease-in-out',
      }}>
        {fotos.map((n) => (
          <div key={n} className="cra-carrossel-item">
            <img src={`/Fotos/foto (${n}).jpg`} alt={`Foto ${n}`} />
          </div>
        ))}
      </div>

      <button className="cra-prev" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="cra-next" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
