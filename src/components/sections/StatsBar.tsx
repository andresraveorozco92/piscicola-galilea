'use client';

import { motion } from 'framer-motion';
import styles from './StatsBar.module.css';

const stats = [
  { value: '10.000', label: 'Kg mensuales', suffix: '+' },
  { value: '12', label: 'Estanques BAF', suffix: '' },
  { value: '94', label: 'Ahorro de agua', suffix: '%' },
  { value: '4', label: 'Módulos productivos', suffix: '' },
];

export default function StatsBar() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={`glass-panel ${styles.statsGrid}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.statCard}
            >
              <div className={styles.statValue}>
                {stat.value}
                <span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
