import './globals.css';
import { Fraunces } from 'next/font/google';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { withPublicPath } from '@/lib/publicPath';
import { pageDescriptions, pageKeywords, metadataDefaults, openGraphDefaults, twitterDefaults, SITE_URL, LOGO_URL, HERO_IMAGE_URL, viewportConfig } from '@/lib/seoConfig';
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebPageSchema, SchemaScript } from '@/lib/schemaMarkup';

const fraunces = Fraunces({ subsets: ['latin'], display: 'swap' });

const logoPath = withPublicPath('/logo roda pe.png');
const backgroundFachada = withPublicPath('/fachada.jpg');
const backgroundHero = withPublicPath('victorbrunna.jpg');

export const metadata = {
  ...metadataDefaults,
  title: 'Casa de Ração Atlântico | Ração para Cães e Gatos em Goiânia',
  description: pageDescriptions.home,
  keywords: pageKeywords.home,
  icons: {
    icon: logoPath,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    ...openGraphDefaults,
    title: 'Casa de Ração Atlântico | Ração para Cães e Gatos em Goiânia',
    description: pageDescriptions.home,
    url: SITE_URL,
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Casa de Ração Atlântico - Ração para cães e gatos em Goiânia',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    ...twitterDefaults,
    title: 'Casa de Ração Atlântico | Ração para Cães e Gatos em Goiânia',
    description: pageDescriptions.home,
  },
};

export const viewport = viewportConfig;

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={fraunces.className}
      style={{
        '--background-fachada-image': `url(${backgroundFachada})`,
        '--background-hero-image': `url(${backgroundHero})`,
      }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://static.elfsight.com/platform/platform.js" />
        {/* Schema Markup */}
        <SchemaScript schema={generateLocalBusinessSchema()} />
        <SchemaScript schema={generateOrganizationSchema()} />
        <SchemaScript schema={generateWebPageSchema('Casa de Ração Atlântico', pageDescriptions.home)} />
      </head>
      <body>
        <FloatingWhatsApp
          phoneNumber="556235881956"
          accountName="Casa de Ração Atlântico"
          statusMessage="Responde normalmente em 1 minuto"
          chatMessage="Olá! 🤝 Como podemos ajudar? 😊"
          placeholder="Digite sua mensagem..."
          allowClickAway
          allowEsc
          notification
          notificationDelay={30}
          notificationLoop={2}
          notificationSound={false}
          avatar={logoPath}
        />
        {children}
      </body>
    </html>
  );
}
