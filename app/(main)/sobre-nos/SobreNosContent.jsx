'use client';

import Link from 'next/link';
import Carrossel from '@/components/Carrossel';

export default function SobreNosContent() {
  return (
    <div className="sobre-nos-wrapper">
      {/* SEÇÃO PRINCIPAL COM CARROSSEL E QUEM SOMOS */}
      <main className="cra-hero-section">
        {/* CARROSSEL LADO ESQUERDO */}
        <div className="cra-hero-carousel">
          <h2 className="cra-title">Fotos da Casa de Ração Atlântico</h2>
          <Carrossel />
        </div>

        {/* SEÇÃO QUEM SOMOS LADO DIREITO */}
        <section className="cra-hero-content">
          <h2 className="cra-quem-somos-title">Bem-vindo à Casa de Ração Atlântico</h2>
        <p className="cra-quem-somos-descricao">
          Somos uma empresa dedicada ao bem-estar dos animais, oferecendo
          produtos de alta qualidade para pets em Goiânia. Localizada no bairro
          Jardim Atlântico, nossa loja oferece uma variedade completa de rações,
          petiscos e acessórios para cães, gatos e outros pets. 
        </p>
        <p className="cra-quem-somos-descricao" style={{ marginTop: '20px' }}>
          Mais do que vender produtos, empreender com propósito é servir. É
          abençoar vidas, gerar empregos, cultivar relacionamentos e refletir
          a luz de Cristo em cada detalhe do negócio. É entender que
          prosperidade não se mede apenas em cifras, mas em impacto,
          integridade e fidelidade.
        </p>
        </section>
      </main>

      {/* CONTEÚDO SOBRE A EMPRESA */}
      <div className="produtos-container">
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '20px' }}>
              Nossos Valores
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-heart" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Bem-estar Animal
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Dedicados ao bem-estar e saúde dos seus pets
                </p>
              </div>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-star" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Qualidade
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Oferecemos apenas produtos de qualidade premium
                </p>
              </div>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid #25D366',
              }}>
                <h3 style={{ color: '#003759', marginBottom: '10px' }}>
                  <i className="fas fa-handshake" style={{ marginRight: '10px', color: '#25D366' }}></i>
                  Confiança
                </h3>
                <p style={{ fontSize: '14px', color: '#555' }}>
                  Relacionamentos baseados em integridade e honestidade
                </p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '20px' }}>
              Nossa Localização
            </h2>
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '30px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}>
              <p style={{ fontSize: '16px', color: '#333', marginBottom: '15px' }}>
                <strong>Casa de Ração Atlântico</strong>
              </p>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                📍 Av. Guarujá, nº 84, Jardim Atlântico, Goiânia – GO
              </p>
              <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
                📞 (62) 3588-1956
              </p>
              <p style={{ fontSize: '16px', color: '#555' }}>
                🕐 Segunda a sábado: 7h às 19h
              </p>
            </div>
            <div style={{ height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15282.95012099381!2d-49.295514!3d-16.739943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef70062f7c0cb%3A0xa043d7ff1ae1cfd6!2zQ2FzYSBkZSBSYcOnw6NvIEF0bMOibnRpY28!5e0!3m2!1spt-BR!2sbr!4v1753994278177!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Casa de Ração Atlântico"
              ></iframe>
            </div>
          </section>

          <section style={{ marginBottom: '50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', color: '#003759', marginBottom: '30px' }}>
              Venha nos Visitar!
            </h2>
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
                marginRight: '20px',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#128C7E')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#25D366')}
            >
              <i className="fab fa-whatsapp" style={{ marginRight: '10px' }}></i>
              Conversar no WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/Casa+de+Ra%C3%A7%C3%A3o+Atl%C3%A2ntico/@-16.7399401,-49.2968012,18z/data=!3m1!4b1!4m6!3m5!1s0x935ef70062f7c0cb:0xa043d7ff1ae1cfd6!8m2!3d-16.7399427!4d-49.2955137!16s%2Fg%2F11x6lty7sr?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#003759',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#002540')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#003759')}
            >
              <i className="fas fa-map-location-dot" style={{ marginRight: '10px' }}></i>
              Como Chegar
            </a>
          </section>

          <section style={{ marginBottom: '50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '26px', color: '#003759', marginBottom: '20px' }}>
              Explore nossos produtos com atendimento local
            </h2>
            <p style={{ maxWidth: '760px', margin: '0 auto 30px', color: '#555', fontSize: '16px' }}>
              Somos o pet shop de referência em Goiânia para rações, antipulgas, suplementos e rações para castrados. Conheça nossas marcas e categorias com entrega local rápida.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <Link
                href="/produtos"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                Ver Produtos
              </Link>
              <Link
                href="/marcas"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#003759',
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                Ver Marcas
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
