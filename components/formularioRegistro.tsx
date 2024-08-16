"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

interface FormData {
  nombre: string;
  tipoDocumento: string;
  numeroDocumento: string;
  departamento: string;
  municipio: string;
  correo: string;
  telefono: string;
  usuario: string;
  contrasena: string;
}

const FormularioRegistro: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    departamento: "",
    municipio: "",
    correo: "",
    telefono: "",
    usuario: "",
    contrasena: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof FormData] = 'Este campo es obligatorio';
        isValid = false;
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.correo && !emailRegex.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico inválido';
      isValid = false;
    }

    // Phone validation (simple check for numbers only)
    const phoneRegex = /^\d+$/;
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Teléfono inválido';
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
          src="/BienvenidoSaras.png"
          alt="Isometric office illustration"
          width={1196}
          height={156}
          className="max-w-[400px] md:max-w-[1196px] h-auto"
        />
        <div className="container mx-auto px-4 py-8 bg-gray-200 rounded-2xl shadow-md p-8">
          <div className="bg-white rounded-2xl shadow-md p-8 ">
            <div className="flex justify-center mb-10">
          <Image
            src="/generalRegistro.png"
            alt="Isometric office illustration"
            width={720}
            height={36}
            className="max-w-[400px] md:max-w-[720px] h-auto"
          />
          </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block mb-2">Nombre o razón social de la empresa o entidad que se registra</label>
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
                  <label htmlFor="tipoDocumento" className="block mb-2">Tipo de documento</label>
                  <select
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={formData.tipoDocumento}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.tipoDocumento ? 'border-red-500' : ''}`}
                  >
                    <option value="">Seleccione</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="NIT">NIT</option>
                    <option value="PP">Pasaporte</option>
                    <option value="TI">Tarjeta de Identidad</option>
                  </select>
                  {errors.tipoDocumento && <p className="text-red-500 text-sm mt-1">{errors.tipoDocumento}</p>}
                </div>
                <div>
                  <label htmlFor="numeroDocumento" className="block mb-2">Número de documento o identificación</label>
                  <input
                    type="text"
                    id="numeroDocumento"
                    name="numeroDocumento"
                    value={formData.numeroDocumento}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.numeroDocumento ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.numeroDocumento && <p className="text-red-500 text-sm mt-1">{errors.numeroDocumento}</p>}
                </div>
                <div>
                  <label htmlFor="departamento" className="block mb-2">Departamento</label>
                  <input
                    type="text"
                    id="departamento"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.departamento ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.departamento && <p className="text-red-500 text-sm mt-1">{errors.departamento}</p>}
                </div>
                <div>
                  <label htmlFor="municipio" className="block mb-2">Municipio</label>
                  <input
                    type="text"
                    id="municipio"
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.municipio ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.municipio && <p className="text-red-500 text-sm mt-1">{errors.municipio}</p>}
                </div>
                <div>
                  <label htmlFor="correo" className="block mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.correo ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                </div>
                <div>
                  <label htmlFor="telefono" className="block mb-2">Teléfono de contacto</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.telefono ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <label htmlFor="usuario" className="block mb-2">Usuario</label>
                  <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.usuario ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.usuario && <p className="text-red-500 text-sm mt-1">{errors.usuario}</p>}
                </div>
                <div>
                  <label htmlFor="contrasena" className="block mb-2">Contraseña</label>
                  <input
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-lg ${errors.contrasena ? 'border-red-500' : ''}`}
                    placeholder="Ingrese información"
                  />
                  {errors.contrasena && <p className="text-red-500 text-sm mt-1">{errors.contrasena}</p>}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Link href="/login"><p>¿Ya tienes cuenta? <strong>Inicia sesión</strong></p></Link>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-2xl">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioRegistro;