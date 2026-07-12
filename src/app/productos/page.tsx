import ProductCard from '@/components/sections/ProductCard';
import styles from './productos.module.css';
import Link from 'next/link';

export default function ProductosPage() {
  const products = [
    {
      title: 'Tilapia Fresca Eviscerada',
      subtitle: 'Sin descamar · Entrega en frío',
      desc: 'Tilapia Roja cultivada con tecnología simbiótica, extraída y procesada bajo los más altos estándares para garantizar frescura y calidad excepcional.',
      imageSrc: '/images/tilapia_fresca.png',
      imageAlt: 'Tilapia Roja Fresca Eviscerada Piscícola Galilea',
      features: [
        'Producida con Energía Solar y Tecnología Simbiótica',
        'Crecimiento en aguas sin recambio y 100% purificadas',
        'Textura firme y sabor limpio',
        'Trazabilidad completa por lote'
      ]
    },
    {
      title: 'Tilapia al Vacío',
      subtitle: 'Eviscerada y Descamada · Bolsa x 2',
      desc: 'Nuestra presentación premium lista para distribución. Empacada al vacío para prolongar su vida útil manteniendo intactas sus propiedades organolépticas.',
      imageSrc: '/images/tilapia_vacio_final.png',
      imageAlt: 'Tilapia Roja Empacada al Vacío Piscícola Galilea',
      features: [
        'Producida con Energía Solar y Tecnología Simbiótica',
        'Mayor vida útil sin conservantes',
        'Práctica presentación para distribución al por mayor o al detal',
        'Procesada bajo normas de inocuidad INVIMA'
      ]
    }
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Nuestros <span className="text-gradient">Productos</span></h1>
          <p className={styles.subtitle}>Calidad superior, tamaño uniforme y producción 100% responsable con el medio ambiente.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className={styles.productGrid}>
            {products.map((prod, index) => (
              <ProductCard 
                key={index}
                title={prod.title}
                subtitle={prod.subtitle}
                desc={prod.desc}
                features={prod.features}
                imageSrc={prod.imageSrc}
                imageAlt={prod.imageAlt}
                delay={index * 0.2}
              />
            ))}
          </div>

          <div className={styles.futureInfo}>
            <div className={`glass-panel ${styles.futureCard}`}>
              <h3>¿Buscas otras presentaciones?</h3>
              <p>
                En nuestra fase de expansión agroindustrial estaremos introduciendo <strong>Filetes de Tilapia Roja</strong> y cortes especiales. 
                Si eres distribuidor mayorista y tienes requerimientos específicos, no dudes en contactarnos.
              </p>
              <Link href="/contacto" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Hablemos de negocios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
