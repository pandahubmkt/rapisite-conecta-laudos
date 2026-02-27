import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Conecta Laudos | Excelência em Telemedicina",
  description: "Laudos médicos de alta precisão com agilidade e suporte especializado. Conectando sua clínica à elite da medicina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
        <svg className="noise" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>

        <nav className="navbar">
          <div className="logo">CONECTA LAUDOS</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
          <a href="https://wa.me/5515998050051" target="_blank" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
            Falar com Especialista
          </a>
        </nav>

        {children}

        <a href="https://wa.me/5515998050051?text=Olá, vim pelo site!" className="whatsapp-float" target="_blank" aria-label="Falar no WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
