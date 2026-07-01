'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/tecnologia', label: 'Tecnología' },
    { href: '/proceso', label: 'Proceso' },
    { href: '/productos', label: 'Productos' },
    { href: '/sostenibilidad', label: 'Sostenibilidad' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Piscícola <span className="text-gradient">Galilea</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {links.map(link => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
            Cotizar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
