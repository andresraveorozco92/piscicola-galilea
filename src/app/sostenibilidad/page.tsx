import Image from 'next/image';
import styles from './sostenibilidad.module.css';
import { Sun, Users, Droplet } from 'lucide-react';

export default function SostenibilidadPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Sostenibilidad <span className="text-gradient">360°</span></h1>
          <p className={styles.subtitle}>Un equilibrio perfecto entre protección ambiental, eficiencia energética y bienestar social.</p>
        </div>
      </header>

      <section className={`section-padding ${styles.pillarsSection}`}>
        {/* Imagen de fondo translúcida - paneles solares y granja */}
        <div className={styles.pillarsBg}>
          <Image
            src="/images/sostenibilidad_solar.png"
            alt="Energía solar en granja piscícola - Piscícola Galilea"
            fill
            style={{ objectFit: 'cover', opacity: 0.15 }}
            sizes="100vw"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.pillarsGrid}>
            
            {/* Ambiental */}
            <div className={`glass-panel ${styles.pillarCard}`}>
              <div className={styles.iconWrapper}>
                <Droplet size={32} />
              </div>
              <h2 className={styles.pillarTitle}>Sostenibilidad Ambiental</h2>
              <p>
                Gracias a la Tecnología BAF, operamos con un <strong>sistema de cero recambio de agua</strong>. 
                El agua se purifica biológicamente dentro del mismo estanque mediante bacterias y flóculos que consumen el amonio y los nitritos, 
                eliminando los vertimientos contaminantes a los ríos y caños del Guaviare.
              </p>
            </div>

            {/* Energética */}
            <div className={`glass-panel ${styles.pillarCard}`}>
              <div className={styles.iconWrapper}>
                <Sun size={32} />
              </div>
              <h2 className={styles.pillarTitle}>Transición Energética</h2>
              <p>
                La acuicultura simbiótica requiere oxigenación permanente. Para mitigar nuestra huella de carbono, hemos implementado un 
                <strong> sistema de generación de energía alternativa con paneles solares</strong>, 
                complementado por la red pública y un generador diésel de respaldo. Esto reduce los costos operativos y apoya las políticas de transición energética.
              </p>
            </div>

            {/* Social */}
            <div className={`glass-panel ${styles.pillarCard} ${styles.socialCard}`}>
              <div className={styles.iconWrapper}>
                <Users size={32} />
              </div>
              <h2 className={styles.pillarTitle}>Innovación Social</h2>
              <p>
                En Piscícola Galilea creemos que el crecimiento debe ser compartido. Hemos diseñado un modelo innovador de 
                <strong> remuneración por desempeño</strong>.
              </p>
              <ul className={styles.socialList}>
                <li>Salario legal garantizado para todos los operarios.</li>
                <li>Bonificaciones periódicas como estímulo al compromiso.</li>
                <li>Incentivos atados a la productividad y reducción de mortalidad.</li>
                <li>Generación de empleo formal en el municipio de El Retorno.</li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
