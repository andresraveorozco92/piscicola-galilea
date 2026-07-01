'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './ContactForm.module.css';

type FormData = {
  nombre: string;
  empresa: string;
  ciudad: string;
  producto: string;
  volumen: string;
  mensaje: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Para el prototipo, simulamos el envío exitoso
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <div className={`glass-panel ${styles.formContainer}`}>
      {isSubmitted ? (
        <div className={styles.successMessage}>
          <div className={styles.checkIcon}>✓</div>
          <h3>¡Mensaje Enviado!</h3>
          <p>Gracias por contactarnos. Nuestro equipo comercial se comunicará contigo pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre completo</label>
            <input 
              id="nombre"
              {...register('nombre', { required: 'El nombre es obligatorio' })} 
              className={errors.nombre ? styles.errorInput : ''}
              placeholder="Ej. Juan Pérez"
            />
            {errors.nombre && <span className={styles.errorText}>{errors.nombre.message}</span>}
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="empresa">Empresa</label>
              <input 
                id="empresa"
                {...register('empresa', { required: 'La empresa es obligatoria' })} 
                placeholder="Ej. Distribuidora XYZ"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="ciudad">Ciudad</label>
              <input 
                id="ciudad"
                {...register('ciudad', { required: 'La ciudad es obligatoria' })} 
                placeholder="Ej. Bogotá"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="producto">Producto de interés</label>
              <select id="producto" {...register('producto', { required: true })}>
                <option value="fresca">Tilapia Fresca Eviscerada</option>
                <option value="vacio">Tilapia al Vacío</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="volumen">Volumen mensual estimado (Kg)</label>
              <input 
                id="volumen"
                type="number"
                {...register('volumen', { required: 'Indique un volumen aproximado' })} 
                placeholder="Ej. 500"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Mensaje adicional</label>
            <textarea 
              id="mensaje"
              {...register('mensaje')} 
              rows={4}
              placeholder="Cuéntanos más sobre tus requerimientos..."
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            Enviar solicitud de cotización
          </button>
        </form>
      )}
    </div>
  );
}
