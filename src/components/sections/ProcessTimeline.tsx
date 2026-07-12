'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ProcessTimeline.module.css';

const steps = [
  {
    phase: 'Fase 1',
    title: 'Recepción de alevinos',
    desc: 'Los alevinos llegan a nuestras instalaciones y se someten a un proceso de adaptación a su nuevo entorno.',
    imageSrc: '/images/fase1.png'
  },
  {
    phase: 'Fase 2',
    title: 'Iniciación (0-30 días)',
    desc: 'Ubicados en 1 estanque de geomembrana de 9 metros de diámetro, se adaptan a la Tecnología Simbiótica BAF.',
    imageSrc: '/images/fase2.png'
  },
  {
    phase: 'Fase 3',
    title: 'Ceba (30-150 días)',
    desc: 'Trasladados a 2 estanques de 13 metros de diámetro por módulo, donde alcanzan su peso ideal de cosecha (450 - 550 gr).',
    imageSrc: '/images/fase3.png'
  },
  {
    phase: 'Fase 4',
    title: 'Cosecha',
    desc: 'Extracción cuidadosa manteniendo altos estándares de bienestar animal, para garantizar la máxima frescura de la carne.',
    imageSrc: '/images/fase4.png'
  },
  {
    phase: 'Fase 5',
    title: 'Procesamiento',
    desc: 'En nuestra sala de procesos se realiza el eviscerado y, según requerimiento, el descamado, bajo rigurosas normas de inocuidad.',
    imageSrc: '/images/fase5.png'
  },
  {
    phase: 'Fase 6',
    title: 'Empaque y Entrega',
    desc: 'La tilapia se entrega entera fresca o empacada al vacío (bolsas de 2 unidades) a nuestros clientes mayoristas.',
    imageSrc: '/images/fase6.png'
  }
];

export default function ProcessTimeline() {
  return (
    <div className={styles.timeline}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.timelineItem}
        >
          <div className={styles.timelineCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={step.imageSrc} 
                alt={step.title} 
                fill 
                className={styles.phaseImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.phase}>{step.phase}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          </div>
          <div className={styles.timelineDot}></div>
        </motion.div>
      ))}
    </div>
  );
}
