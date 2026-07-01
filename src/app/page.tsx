import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Innovación <span className="text-gradient">Acuícola</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Piscícola Galilea combina la riqueza natural del Guaviare con tecnología de vanguardia para producir Tilapia Roja de la más alta calidad.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 1.5rem' }}>
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Tecnología BAF</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Utilizamos el sistema Bioaquafloc, que aprovecha microorganismos benéficos para purificar el agua y alimentar a los peces, eliminando la necesidad de recambios de agua.
              </p>
              <Link href="/tecnologia" className="btn btn-outline" style={{ width: '100%' }}>
                Descubrir más
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Nuestros Productos</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Tilapia Roja fresca y eviscerada o empacada al vacío. Tamaños uniformes de 450 a 550 gr ideales para clientes mayoristas y distribuidores.
              </p>
              <Link href="/productos" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}>
                Ver catálogo
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Sostenibilidad Integral</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Comprometidos con el medio ambiente y la comunidad: uso de energía solar, cero vertimientos e impacto social positivo en El Retorno, Guaviare.
              </p>
              <Link href="/sostenibilidad" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--color-text)', color: 'var(--color-text)' }}>
                Nuestro compromiso
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
