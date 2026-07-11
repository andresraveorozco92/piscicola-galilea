'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.textContent}
        >
          <h1 className={styles.title}>
            Estación piscícola Galilea 
            <></> Producción de Tilapia Roja del <span className="text-gradient">Guaviare</span>
          </h1>
          <p className={styles.subtitle}>
            Desde la selva amazónica a su mesa. Producción sostenible y tecnificada mediante Tecnología Simbiótica BAF.
          </p>
          <div className={styles.actions}>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar cotización
            </Link>
            <Link href="/tecnologia" className="btn btn-outline">
              Conoce nuestra tecnología
            </Link>
          </div>
        </motion.div>
      </div>

      <div className={styles.bubbles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.bubble}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
