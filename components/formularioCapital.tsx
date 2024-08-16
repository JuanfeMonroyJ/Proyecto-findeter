"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

interface FormData {
  nombre: string;
  sector: string;
  usoRecursos: string;
  valorCredito: string;
  actividadExclusion: string;
  ciuuPrincipal: string;
}

const FormularioInversion: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    sector: "",
    usoRecursos: "",
    valorCredito: "",
    actividadExclusion: "",
    ciuuPrincipal: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof FormData] = 'Este campo es obligatorio';
        isValid = false;
      }
    });

    const numberRegex = /^\d+$/;
    if (formData.valorCredito && !numberRegex.test(formData.valorCredito)) {
      newErrors.valorCredito = 'Ingrese un valor numérico';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // router.push('/ruta-destino');
    }
  };

  return (
    <div className="container-fled flex items-center justify-center m-4 md:m-12">
      <div>
        <Image
          src="/formularioInversion.png"
          alt="Isometric office illustration"
          width={1196}
          height={156}
          className="max-w-[400px] md:max-w-[1196px] h-auto"
        />
        <div className="container mx-auto px-4 py-8 bg-gray-200 rounded-2xl shadow-md p-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="mb-10">
          <Image
            src="/generalCredito.png"
            alt="Isometric office illustration"
            width={918}
            height={61}
            className="max-w-[400px] md:max-w-[918px] h-auto"
          />
          </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block mb-2">Nombre o razón social de la empresa o entidad que toma el crédito</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.nombre ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label htmlFor="ciuuPrincipal" className="block mb-2">CIIU Principal</label>
                  <input
                    type="text"
                    id="ciuuPrincipal"
                    name="ciuuPrincipal"
                    value={formData.ciuuPrincipal}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.ciuuPrincipal ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.ciuuPrincipal && <p className="text-red-500 text-sm mt-1">{errors.ciuuPrincipal}</p>}
                </div>
                <div>
                  <label htmlFor="sector" className="block mb-2">Describa a qué sector pertenece y a qué se dedica</label>
                  <input
                    type="text"
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.sector ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector}</p>}
                </div>
                <div>
                  <label htmlFor="usoRecursos" className="block mb-2">Indique el uso de los recursos del crédito</label>
                  <input
                    type="text"
                    id="usoRecursos"
                    name="usoRecursos"
                    value={formData.usoRecursos}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.usoRecursos ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.usoRecursos && <p className="text-red-500 text-sm mt-1">{errors.usoRecursos}</p>}
                </div>
                <div>
                  <label htmlFor="valorCredito" className="block mb-2">Valor del crédito con FINDETER (COP)</label>
                  <input
                    type="text"
                    id="valorCredito"
                    name="valorCredito"
                    value={formData.valorCredito}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.valorCredito ? 'border-red-500' : ''}`}
                    placeholder="Valor en números sin puntos ni comas"
                  />
                  {errors.valorCredito && <p className="text-red-500 text-sm mt-1">{errors.valorCredito}</p>}
                </div>
                <div>
                  <label htmlFor="actividadExclusion" className="block mb-2">¿El crédito incluye alguna actividad de la lista de Exclusión de FINDETER?</label>
                  <select
                    id="actividadExclusion"
                    name="actividadExclusion"
                    value={formData.actividadExclusion}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.actividadExclusion ? 'border-red-500' : ''}`}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                  {errors.actividadExclusion && <p className="text-red-500 text-sm mt-1">{errors.actividadExclusion}</p>}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Link href="/login"><p>¿Ya tienes cuenta? <strong>Inicia sesión</strong></p></Link>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-2xl">
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioInversion;
