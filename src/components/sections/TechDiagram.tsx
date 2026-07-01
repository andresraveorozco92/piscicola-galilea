'use client';

import { motion } from 'framer-motion';
import styles from './TechDiagram.module.css';
import { Beaker, Fish, Droplets, Leaf } from 'lucide-react';

export default function TechDiagram() {
  const steps = [
    {
      id: 1,
      icon: <Beaker size={32} />,
      title: 'Fermentos y Microorganismos',
      desc: 'Adición de bacterias benéficas (Bacillus, Lactobacillus) y fermentos.'
    },
    {
      id: 2,
      icon: <Droplets size={32} />,
      title: 'Bioflóculos',
      desc: 'Formación de comunidades microbianas que purifican el agua asimilando nitrógeno.'
    },
    {
      id: 3,
      icon: <Fish size={32} />,
      title: 'Nutrición Simbiótica',
      desc: 'Los peces consumen el zooplancton y los flóculos como fuente rica en proteína.'
    },
    {
      id: 4,
      icon: <Leaf size={32} />,
      title: 'Agua Cero Recambio',
      desc: 'El ciclo se mantiene estable mediante oxigenación continua, sin vertimientos al medio ambiente.'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ciclo Bioaquafloc (BAF)</h2>
      <div className={styles.diagram}>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={styles.node}
          >
            <div className={styles.iconWrapper}>
              {step.icon}
            </div>
            <h3 className={styles.nodeTitle}>{step.title}</h3>
            <p className={styles.nodeDesc}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
