import Link from 'next/link';
import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            Piscícola <span>Galilea</span>
          </Link>
          <p className={styles.description}>
            Producción tecnificada de Tilapia Roja en la Amazonía colombiana con Tecnología Simbiótica BAF. Sostenibilidad, innovación y calidad.
          </p>
          <div className={styles.senaBadge}>
            <span className={styles.senaText}>Proyecto impulsado por</span>
            <strong className={styles.senaGold}>Fondo Emprender SENA</strong>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>Navegación</h3>
          <ul>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/tecnologia">Tecnología BAF</Link></li>
            <li><Link href="/proceso">Proceso Productivo</Link></li>
            <li><Link href="/productos">Nuestros Productos</Link></li>
            <li><Link href="/sostenibilidad">Sostenibilidad</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3>Contacto</h3>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>El Retorno, Guaviare, Colombia</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <span>+57 317 575 6733</span>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <span>contacto@piscicola-galilea.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Piscícola Galilea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
