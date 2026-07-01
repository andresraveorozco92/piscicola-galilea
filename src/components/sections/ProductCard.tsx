'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Scale } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}

export default function ProductCard({ title, subtitle, desc, features, imageSrc, imageAlt, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`glass-panel ${styles.card}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>Mayorista</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.desc}>{desc}</p>
        
        <ul className={styles.features}>
          {features.map((feature, i) => (
            <li key={i}>
              <ShieldCheck size={18} className={styles.icon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div className={styles.weightInfo}>
            <Scale size={16} />
            <span>450 - 550 gr</span>
          </div>
          <Link href="/contacto" className="btn btn-outline">
            Cotizar ahora
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

