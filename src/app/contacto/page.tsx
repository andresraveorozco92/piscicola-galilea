import ContactForm from '@/components/sections/ContactForm';
import styles from './contacto.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Hablemos de <span className="text-gradient">Negocios</span></h1>
          <p className={styles.subtitle}>Estamos listos para ser su proveedor de confianza en Tilapia Roja de alta calidad.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            
            <div className={styles.infoCol}>
              <h2 className={styles.sectionTitle}>Información de Contacto</h2>
              <p className={styles.desc}>
                Nuestro equipo comercial está disponible para atender sus requerimientos mayoristas, 
                cotizaciones y consultas sobre nuestros procesos productivos.
              </p>

              <div className={styles.contactCards}>
                <div className={`glass-panel ${styles.contactCard}`}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3>Ubicación</h3>
                    <p>Vereda El Danubio, El Retorno, Guaviare</p>
                  </div>
                </div>

                <div className={`glass-panel ${styles.contactCard}`}>
                  <div className={styles.iconWrapper}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3>WhatsApp / Teléfono</h3>
                    <p>+57 317 575 6733</p>
                  </div>
                </div>

                <div className={`glass-panel ${styles.contactCard}`}>
                  <div className={styles.iconWrapper}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3>Correo Electrónico</h3>
                    <p>contacto@piscicola-galilea.com</p>
                  </div>
                </div>

                <div className={`glass-panel ${styles.contactCard}`}>
                  <div className={styles.iconWrapper}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3>Horario de Atención</h3>
                    <p>Lunes a Sábado · 8:00 am – 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCol}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127599.40026229415!2d-72.76615740417967!3d2.333036499696229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15c2d3cf38b1f7%3A0xe6bf4be6c525f23!2sEl%20Retorno%2C%20Guaviare!5e0!3m2!1ses!2sco!4v1717522510344!5m2!1ses!2sco" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación El Retorno Guaviare"
        ></iframe>
      </section>
    </div>
  );
}
