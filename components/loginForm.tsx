"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [userIdentifier, setUserIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ userIdentifier?: string; password?: string; general?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { userIdentifier?: string; password?: string } = {};
    
    // Validación para correo electrónico o cédula
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cedulaRegex = /^\d{10}$/; // Asumiendo que la cédula tiene 10 dígitos
    
    if (!userIdentifier.trim()) {
      newErrors.userIdentifier = "El correo electrónico o cédula es obligatorio";
    } else if (!emailRegex.test(userIdentifier) && !cedulaRegex.test(userIdentifier)) {
      newErrors.userIdentifier = "Ingrese un correo electrónico válido o una cédula de 10 dígitos";
    }

    if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkCredentials = (): boolean => {
    //  lógica real de verificación de credenciales
    // simulador de que cualquier entrada válida es correcta
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      if (checkCredentials()) {
        console.log("Inicio de sesión exitoso");
        router.push('/solicitud'); // Redirigir al componente "Solicitud"
      } else {
        setErrors({ ...errors, general: "Datos incorrectos. Por favor, verifique su información." });
      }
    } else {
      alert("Por favor, corrija los errores en el formulario");
    }
  };

  return (
    <div className="container-fluid flex items-center justify-center m-4 md:m-12">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-32">
        <div className="flex-shrink-0">
          <Image
            src="/Frame.png"
            alt="Isometric office illustration"
            width={695}
            height={665}
            className="max-w-[400px] md:max-w-[868px] h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="p-6 rounded-lg max-w-md mx-auto md:max-w-[624.56px]">
            <Image
              src="/iniciaSesion.png"
              alt="imagen con el texto Selecciona el tipo de crédito"
              width={599}
              height={77.36}
              className="w-full max-w-[599px] h-auto mb-10"
            />
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              {errors.general && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span className="block sm:inline">{errors.general}</span>
                </div>
              )}
              <div className="flex flex-col items-center w-full">
                <label
                  className="block text-sm font-bold mb-2 text-white"
                  htmlFor="userIdentifier"
                >
                  Correo electrónico o Cédula
                </label>
                <input
                  type="text"
                  id="userIdentifier"
                  name="userIdentifier"
                  value={userIdentifier}
                  onChange={(e) => setUserIdentifier(e.target.value)}
                  className={`shadow appearance-none border rounded w-full md:w-[562px] h-[82px] py-2 px-3 text-gray-700 rounded-2xl ${
                    errors.userIdentifier ? 'border-red-500' : ''
                  }`}
                  placeholder="Ingrese su correo electrónico o cédula"
                />
                {errors.userIdentifier && (
                  <p className="text-red-500 text-xs italic mt-1">{errors.userIdentifier}</p>
                )}
              </div>
              <div className="flex flex-col items-center w-full">
                <label
                  className="block text-sm font-bold mb-2 text-white"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`shadow appearance-none border rounded w-full md:w-[562px] h-[82px] py-2 px-3 text-gray-700 rounded-2xl ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  placeholder="Mínimo 8 caracteres"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full md:w-[562px] h-[82px] rounded-2xl"
                >
                  Inicia sesión
                </button>
              </div>
              <Link href="/registro" className="underline text-center text-white">
                ¿No tienes cuenta? Regístrate
              </Link>
            </form>
          </div>
          <div className="flex items-center justify-center mt-6">
            <Image
              src="/Ser-seguro1.png"
              alt="Logo ser seguro"
              width={215}
              height={154}
              className="w-full max-w-[215px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;