'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556235881956"
      target="_blank"
      rel="noreferrer"
      className="cra-whatsapp-button-fixed"
      title="Conversar pelo WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span>Fale Conosco</span>
    </a>
  );
}
