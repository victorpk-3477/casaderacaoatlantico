import './globals.css';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Casa de Ração Atlântico | Ração em Goiânia',
  description: 'Rações, petiscos e produtos pet com o melhor preço em Goiânia. Fale conosco pelo WhatsApp.',
  keywords: 'ração em Goiânia, pet shop, petiscos, produtos para cães, produtos para gatos',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Casa de Ração Atlântico | Ração em Goiânia',
    description: 'Rações, petiscos e produtos pet com o melhor preço em Goiânia.',
    url: 'https://www.casaderacaoatlantico.com.br',
    siteName: 'Casa de Ração Atlântico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://static.elfsight.com/platform/platform.js" />
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
          avatar="/logo.svg"
        />
        {children}
      </body>
    </html>
  );
}
