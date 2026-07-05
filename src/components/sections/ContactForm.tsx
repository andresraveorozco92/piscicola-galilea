'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './ContactForm.module.css';

type FormData = {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  empresa: string;
  ciudad: string;
  producto: string;
  volumen: string;
  volumenFresca: string;
  volumenVacio: string;
  otroProducto: string;
  mensaje: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const selectedProduct = watch('producto');

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
          
          <div className={styles.formRow}>
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
            <div className={styles.formGroup}>
              <label htmlFor="correo">Correo Electrónico</label>
              <input 
                id="correo"
                type="email"
                {...register('correo', { required: 'El correo es obligatorio' })} 
                placeholder="Ej. juan@empresa.com"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="telefono">Teléfono</label>
              <input 
                id="telefono"
                {...register('telefono', { required: 'El teléfono es obligatorio' })} 
                placeholder="Ej. +57 300 000 0000"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="direccion">Dirección</label>
              <input 
                id="direccion"
                {...register('direccion', { required: 'La dirección es obligatoria' })} 
                placeholder="Ej. Calle 123 # 45-67"
              />
            </div>
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
                <option value="ambos">Ambos (Fresca y al Vacío)</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            {/* Volumen para 1 solo producto */}
            {selectedProduct !== 'ambos' && selectedProduct !== 'otro' && (
              <div className={styles.formGroup}>
                <label htmlFor="volumen">Volumen mensual estimado (Kg)</label>
                <input 
                  id="volumen"
                  type="number"
                  {...register('volumen')} 
                  placeholder="Ej. 500"
                />
              </div>
            )}
          </div>

          {/* Render condicional para 'Ambos' */}
          {selectedProduct === 'ambos' && (
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="volumenFresca">Volumen Tilapia Fresca (Kg)</label>
                <input 
                  id="volumenFresca"
                  type="number"
                  {...register('volumenFresca')} 
                  placeholder="Ej. 300"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="volumenVacio">Volumen Tilapia al Vacío (Kg)</label>
                <input 
                  id="volumenVacio"
                  type="number"
                  {...register('volumenVacio')} 
                  placeholder="Ej. 200"
                />
              </div>
            </div>
          )}

          {/* Render condicional para 'Otro' */}
          {selectedProduct === 'otro' && (
            <div className={styles.formGroup}>
              <label htmlFor="otroProducto">Describa el producto que requiere</label>
              <input 
                id="otroProducto"
                {...register('otroProducto')} 
                placeholder="Ej. Filete fresco, alevinos..."
              />
            </div>
          )}

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
