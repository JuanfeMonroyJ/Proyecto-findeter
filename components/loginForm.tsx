"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';


const LoginForm = () => {
  const router = useRouter();
  return (
    <div className="container-fled flex items-center justify-center m-4 md:m-12">
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
            <form className="flex flex-col space-y-6">
              <div className="flex flex-col items-center w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-white"
                  htmlFor="username"
                >
                  Usuario
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="shadow appearance-none border rounded w-full md:w-[562px] h-[82px] py-2 px-3 text-gray-700 rounded-2xl"
                  placeholder="Ingrese información"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-white"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full md:w-[562px] h-[82px] py-2 px-3 text-gray-700 rounded-2xl"
                  placeholder="Mínimo 8 caracteres"
                />
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
