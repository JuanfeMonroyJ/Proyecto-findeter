"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

const Solicitud = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container-fled flex items-center justify-center m-4 md:m-12">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-32">
        <div className="flex-shrink-0">
          <Image
            src="/mapa.png"
            alt="Isometric office illustration"
            width={695}
            height={665}
            className="max-w-[400px] md:max-w-[868px] h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="p-6 rounded-lg max-w-md mx-auto md:max-w-[624.56px]">
          <Image
              src="/seleccionaCredito.png"
              alt="imagen con el texto Selecciona el tipo de crédito"
              width={599}
              height={77.36}
              className="w-full max-w-[599px] h-auto mb-10"
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <Link href="/inversion">
            <Image
              src="/inversion.png"
              alt="Botón Inversion"
              width={599}
              height={77.36}
              className="w-full max-w-[599px] h-auto mb-10"
            />
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
          <Link href="capital">
            <Image
              src="/capital.png"
              alt="Botón Capital"
              width={600}
              height={77.36}
              className="w-full max-w-[599px] h-auto mt-10"
            />
            </Link>
          </div>
          <div className="flex items-center justify-center mt-6">
            <Image
              src="/Ser-seguro1.png"
              alt="Logo ser seguro"
              width={215}
              height={154}
              className="w-full max-w-[215px] h-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Solicitud;
