'use client';

import { withPublicPath } from '@/lib/publicPath';

export default function Footer() {
  return (
    <footer className="cra-footer">
      <div className="cra-footer-content">
        <div className="cra-footer-info">
          <div className="cra-footer-info-logo">
            <img
              src={withPublicPath('/logo roda pe.png')}
              alt="Logo Casa de Ração Atlântico"
            />
            <div className="cra-footer-social">
              <a
                href="https://wa.me/556235881956"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/casaderacaoatlantico"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/casaderacaoatlantico"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="cra-footer-info-text">
            <p>
              <i className="fa-solid fa-phone"></i> (62) 3588-1956
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Av. Guarujá, nº
              84, Jardim Atlântico, Goiânia – GO
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> Segunda a sábado, das 7h
              às 19h
            </p>
          </div>
        </div>
        <div className="cra-footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15282.95012099381!2d-49.295514!3d-16.739943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef70062f7c0cb%3A0xa043d7ff1ae1cfd6!2zQ2FzYSBkZSBSYcOnw6NvIEF0bMOibnRpY28!5e0!3m2!1spt-BR!2sbr!4v1753994278177!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Casa de Ração Atlântico"
          ></iframe>
        </div>
      </div>
      <div className="cra-footer-credito">
        <p>© 2025 Casa de Ração Atlântico. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
