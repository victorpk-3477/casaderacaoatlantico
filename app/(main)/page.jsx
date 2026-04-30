'use client';

import { useEffect } from 'react';
import CarrosselPromocoes from '@/components/CarrosselPromocoes';

export default function Home() {
  useEffect(() => {
    // Carrega o script do Elfsight para avaliações
    const scriptId = 'elfsight-platform';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* FACHADA COM PROMOÇÕES */}
      <section className="cra-fachada">
        <div className="cra-fachada-overlay">
          <div className="cra-fachada-content">
            <h1 className="cra-title cra-fachada-title">
              Promoções em destaque
            </h1>
            <CarrosselPromocoes />
          </div>
        </div>
      </section>

      {/* SEÇÃO AVALIAÇÕES */}
      <main className="cra-main">
        <section className="cra-section-content">
          <div className="cra-section-right" style={{ margin: '0 auto', maxWidth: '600px' }}>
            <h2 className="cra-title">Avaliações dos Clientes</h2>
            <div
              className="elfsight-app-bcacbcd4-37c8-4c8e-b74b-e74243ce64b8"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </main>
    </>
  );
}
