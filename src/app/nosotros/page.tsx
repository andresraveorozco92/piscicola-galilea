import Image from 'next/image';
import styles from './nosotros.module.css';

export default function NosotrosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Nuestra <span className="text-gradient">Historia</span></h1>
          <p className={styles.subtitle}>El compromiso con nuestra región y el desarrollo sostenible.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">

          {/* Imagen del Territorio */}
          <div className={styles.heroImage}>
            <Image
              src="/images/guaviare_amazon.png"
              alt="Selva amazónica del Guaviare Colombia - Territorio de Piscícola Galilea"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              priority
            />
            <div className={styles.heroOverlay}>
              <h2>El Guaviare: Donde nace Piscícola Galilea</h2>
            </div>
          </div>

          <div className={styles.grid}>
            
            <div className={styles.contentCol}>
              <h2 className={styles.sectionTitle}>Sobre Piscícola Galilea</h2>
              <p>
                Piscícola Galilea nació en el corazón de la Amazonía colombiana como una apuesta por la <strong>producción acuícola tecnificada, sostenible y de alto impacto social</strong>. 
                El proyecto se origina en la <strong>Vereda El Danubio</strong>, municipio de <strong>El Retorno</strong>, en el departamento del <strong>Guaviare</strong>, 
                un territorio que lleva décadas construyendo su identidad entre la selva amazónica y la esperanza de sus comunidades.
              </p>
              <p>
                El nombre de la empresa, rinde homenaje a la región histórica 
                donde Jesús desarrolló gran parte de su ministerio, en donde además, llamó a sus primeros discípulos y los transformó en "pescadores de hombres", y este proyecto nace con la vocación de multiplicar los frutos, transformar nuestro entorno y 
                consolidar unidad familiar a través del trabajo, la constancia y la actividad acuícola.
              </p>

              <h2 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>El Guaviare: Tierra de Posibilidades</h2>
              <p>
                El Guaviare es un departamento del sureste colombiano con más de <strong>53.460 km²</strong> de territorio, creado como departamento con la Constitución de 1991. 
                Su paisaje es una transición única entre la selva amazónica y las sabanas de la Orinoquía, albergando una biodiversidad extraordinaria. 
                El municipio de El Retorno — fundado en 1935 y erigido oficialmente el 14 de noviembre de 1968 — fue colonizado por familias campesinas que abrieron camino en la selva con esfuerzo y esperanza.
              </p>
              <p>
                Hoy, el Guaviare transita hacia un modelo de desarrollo sostenible: el turismo ecológico, la biodiversidad y la <strong>agroindustria responsable</strong> son los pilares de ese futuro. 
                Piscícola Galilea es parte de esa nueva visión: aprovechar las ventajas del territorio — agua, clima cálido (25–35°C), biodiversidad — para producir alimentos de alta calidad sin comprometer el ecosistema.
              </p>
            </div>

            <div className={styles.sideCol}>
              <div className={`glass-panel ${styles.senaCard}`}>
                <div className={styles.senaHeader}>
                  <h3>Fondo Emprender SENA</h3>
                </div>
                <div className={styles.senaBody}>
                  <p>
                    Este proyecto es impulsado por el <strong>Fondo Emprender del SENA</strong>, el fondo de capital semilla más grande de Latinoamérica.
                  </p>
                  <p>
                    El Fondo Emprender no solo financia: acompaña, capacita y fortalece a los emprendedores, con recursos condonables cuando se generan empleos formales en las regiones. 
                    Piscícola Galilea es un ejemplo de ese modelo: innovación técnica con impacto social real.
                  </p>
                </div>
              </div>

              <div className={`glass-panel ${styles.visionCard}`}>
                <h3>Nuestra Misión</h3>
                <p>
                  Producir Tilapia Roja de la más alta calidad aplicando <strong>Tecnología Simbiótica BAF</strong>, garantizando sostenibilidad ambiental, rentabilidad económica e impacto positivo en las comunidades del Guaviare.
                </p>
                
                <h3 style={{ marginTop: '2rem' }}>Nuestra Visión</h3>
                <p>
                  Ser la estación piscícola de referencia en la Amazonía colombiana, reconocida por su innovación técnica, sus estándares de calidad y su compromiso con el desarrollo sostenible de la región.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
