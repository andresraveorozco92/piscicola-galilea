import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Piscícola Galilea | Tilapia Roja del Guaviare',
  description: 'Producción tecnificada de Tilapia Roja en El Retorno, Guaviare, utilizando Tecnología Simbiótica BAF.',
  keywords: 'tilapia roja, guaviare, piscicultura, tecnología simbiótica, baf, bioaquafloc, sena fondo emprender',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
