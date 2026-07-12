import Image from 'next/image';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import styles from './proceso.module.css';

export default function ProcesoPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Proceso <span className="text-gradient">Productivo</span></h1>
          <p className={styles.subtitle}>Desde la recepción hasta su mesa, un flujo controlado y diseñado para garantizar calidad e inocuidad.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <ProcessTimeline />
        </div>
      </section>

      <section className={`section-padding ${styles.infrastructureSection}`}>
        {/* Imagen de fondo translúcida - vista aérea de estanques */}
        <div className={styles.infraBg}>
          <Image
            src="/images/proceso_harvest.png"
            alt="Vista aérea de estanques en geomembrana de Piscícola Galilea"
            fill
            style={{ objectFit: 'cover', opacity: 0.18 }}
            sizes="100vw"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.infraGrid}>
            <div className={styles.infraText}>
              <h2 className={styles.sectionTitle}>Nuestra Infraestructura</h2>
              <p>
                Piscícola Galilea cuenta con instalaciones de vanguardia en El Retorno, Guaviare. El sistema está conformado por <strong>5 módulos de producción</strong>.
              </p>
              <ul className={styles.infraList}>
                <li><strong>10 estanques en geomembrana</strong>: 2 estanques por módulo para la ceba de 13 m de diámetro.</li>
                <li><strong>2 estanques en geomembrana</strong>: Estanques para la iniciación de 9 m de diámetro.</li>
                <li><strong>Aireadores y Mangueras Polidifusoras</strong>: Oxigenación profusa que elimina el recambio de agua.</li>
                <li><strong>Sistemas Hidráulicos</strong>: Control preciso de entrada y salida de agua.</li>
                <li><strong>Generación Energética Híbrida</strong>: Red pública + paneles solares + generador diésel de respaldo.</li>
                <li><strong>Alertas Bioquímicas</strong>: Sensores de variación de parámetros del agua en tiempo real.</li>
              </ul>
            </div>
            
            <div className={styles.facilitiesGrid}>
              <div className={`glass-panel ${styles.facilityCard}`}>
                <h3>Laboratorio</h3>
                <p>Análisis constante de calidad de agua y salud animal.</p>
              </div>
              <div className={`glass-panel ${styles.facilityCard}`}>
                <h3>Sala de Procesos</h3>
                <p>Aréa climatizada para el eviscerado, descamado y empaque al vacío con normas INVIMA.</p>
              </div>
              <div className={`glass-panel ${styles.facilityCard}`}>
                <h3>Bodegas</h3>
                <p>Almacenamiento adecuado de equipos y alimentos.</p>
              </div>
              <div className={`glass-panel ${styles.facilityCard}`}>
                <h3>Parque Solar</h3>
                <p>Transición energética para una producción verde.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
