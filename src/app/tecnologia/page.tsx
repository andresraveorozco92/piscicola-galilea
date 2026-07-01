import Image from 'next/image';
import TechDiagram from '@/components/sections/TechDiagram';
import styles from './tecnologia.module.css';

export default function TecnologiaPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Tecnología <span className="text-gradient">Simbiótica BAF</span></h1>
          <p className={styles.subtitle}>El futuro de la acuicultura: cero recambio de agua, máxima eficiencia y sostenibilidad comprobada.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className={styles.techSplit}>
            <div className={styles.techImageWrapper}>
              <Image
                src="/images/biofloc_tank.png"
                alt="Sistema BAF Bioaquafloc - Estanque de acuicultura con tecnología simbiótica"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 992px) 100vw, 50vw"
              />
              <div className={styles.techImageOverlay} />
            </div>
            <div className={styles.techContent}>
              <TechDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.dataSection}`}>
        <div className={styles.dataBg}>
          <Image
            src="/images/tilapia_underwater.png"
            alt="Tilapia roja bajo el agua - Piscícola Galilea"
            fill
            style={{ objectFit: 'cover', opacity: 0.15 }}
            sizes="100vw"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Resultados Científicos Comprobados</h2>
          
          <div className={styles.statsGrid}>
            <div className={`glass-panel ${styles.statCard}`}>
              <div className={styles.statNumber}>-78%</div>
              <h3>Reducción de TAN</h3>
              <p>El Nitrógeno Amoniacal Total (TAN) se reduce significativamente gracias a la asimilación bacteriana, pasando de 3.58 mg/L a 0.77 mg/L.</p>
            </div>
            <div className={`glass-panel ${styles.statCard}`}>
              <div className={styles.statNumber}>-83%</div>
              <h3>Reducción de Nitritos</h3>
              <p>Los nitritos tóxicos (NO₂) bajan de 5.32 mg/L a 0.9 mg/L, mejorando dramáticamente la calidad del agua y la salud de los peces.</p>
            </div>
            <div className={`glass-panel ${styles.statCard}`}>
              <div className={styles.statNumber}>-94%</div>
              <h3>Ahorro de Agua</h3>
              <p>El consumo de agua cae de 100 L/día en sistemas tradicionales a solo 6 L/día con BAF, eliminando la necesidad de recambios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={`glass-panel ${styles.microCard}`}>
            <h2 className={styles.sectionTitle}>El poder de los Clústers Microbianos</h2>
            <div className={styles.microGrid}>
              <div>
                <h4 className={styles.microTitle}>Bacillus subtilis</h4>
                <p>Genera ácidos orgánicos y enzimas que controlan algas. Es una fuente vital de carbono y tiene un fuerte poder antifúngico que regula el estrés en el animal.</p>
              </div>
              <div>
                <h4 className={styles.microTitle}>Lactobacillus sp & Saccharomyces</h4>
                <p>Producen lipopolisacáridos y B-glucanos. Estas levaduras actúan como potentes inmunoestimulantes, protegiendo a la tilapia de enfermedades sin uso de químicos.</p>
              </div>
              <div>
                <h4 className={styles.microTitle}>Fermentos Orgánicos</h4>
                <p>Utilizamos una mezcla precisa de cereales, melaza, levadura y alimento pre-digerido para detonar una explosión de zooplancton altamente nutritivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
