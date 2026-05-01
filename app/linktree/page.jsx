import './linktree.css';
import { withPublicPath } from '@/lib/publicPath';

export const metadata = {
  title: 'Links Úteis | Casa de Ração Atlântico',
  description: 'Acesso rápido aos nossos canais: WhatsApp, Instagram, Facebook, mapa, avaliações e mais.',
};

const socialLinks = [
  {
    title: 'TikTok',
    url: 'https://www.tiktok.com/@casaderacaoatlantico',
    icon: '/ico/tiktok.svg',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/casaderacaoatlantico',
    icon: '/ico/instagram.svg',
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/556235881956',
    icon: '/ico/whatsapp.svg',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/casaderacaoatlantico',
    icon: '/ico/facebook.svg',
  },
];

const links = [
  {
    title: 'WhatsApp',
    url: 'https://wa.me/556235881956',
    icon: '/ico/whatsapp.svg',
    description: 'Fale conosco e tire suas dúvidas',
  },
  {
    title: 'Como Chegar',
    url: 'https://maps.google.com/?q=Av.+Guarujá,+nº+84,+Jardim+Atlântico,+Goiânia+-+GO',
    icon: '/ico/google-maps.svg',
    description: 'Encontre nossa loja em Goiânia',
  },
  {
    title: 'Avalie nossa loja',
    url: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x935ef70062f7c0cb:0xa043d7ff1ae1cfd6!12e1?source=g.page.m._&laa=merchant-review-solicitation',
    icon: '/ico/star-struck.svg',
    description: 'Sua avaliação é importante para nós',
  },
  {
    title: 'Nosso Site',
    url: 'https://www.casaderacaoatlantico.com.br',
    icon: '/ico/internet.svg',
    description: 'Conheça nossos produtos',
  },
  {
    title: 'Horário de Funcionamento',
    url: '#',
    icon: '/ico/stopwatch-time.svg',
    description: 'Segunda a sábado: 7h às 19h',
  },
  {
    title: 'Telefone',
    url: 'tel:+556235881956',
    icon: '/ico/phone-receiver.svg',
    description: '(62) 3588-1956',
  },
];

export default function LinktreePage() {
  const getIconSrc = (icon) => withPublicPath(icon);

  return (
    <div className="linktree-page">
      <div className="linktree-container">
        {/* HEADER */}
        <div className="linktree-header">
          <div className="linktree-logo">
            <img src={getIconSrc('/logo roda pe.png')} alt="Casa de Ração Atlântico" />
          </div>
          <h1 className="linktree-title">Casa de Ração Atlântico</h1>
          <p className="linktree-subtitle">Rações, acessórios e produtos para seu pet</p>
          
          {/* ÍCONES SOCIAIS */}
          <div className="linktree-social-icons">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.url}
                className="linktree-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                title={social.title}
              >
                <img src={getIconSrc(social.icon)} alt={social.title} />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS PRINCIPAIS */}
        <div className="linktree-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="linktree-link"
              target={link.url.startsWith('#') ? '_self' : '_blank'}
              rel={link.url.startsWith('#') ? '' : 'noopener noreferrer'}
            >
              <div className="linktree-link-content">
                <div
                  className="linktree-link-icon"
                  style={{
                    color: '#fff',
                  }}
                >
                  <img src={getIconSrc(link.icon)} alt={link.title} />
                </div>
                <div className="linktree-link-text">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
                <div className="linktree-link-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* FOOTER */}
        <div className="linktree-footer">
          <p>© 2025 Casa de Ração Atlântico</p>
          <p>Goiânia – Jardim Atlântico</p>
        </div>
      </div>
    </div>
  );
}
