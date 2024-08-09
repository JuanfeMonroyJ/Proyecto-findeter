"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Main = () => {
    const router = useRouter();
    return (
        <main>
       <div className="flex flex-col items-center justify-center min-h-screen">
       <Image
        src="/Imagen 1.png" 
        alt="Logo de Saras"
        width={300}
        height={100}
      />

      <Image
        src="/Bievenido-saras.png" 
        alt="Logo de Saras"
        width={300}
        height={100}
      />
        <Image
        src="/Ser-seguro.png" 
        alt="Logo ser seguro"
        width={300}
        height={100}
        />
       <Image
        src="/Boton-iniciar.png" 
        alt="Boton Iniciar Sesión"
        width={300}
        height={100}
        />

      <a href="" className="underline">
        ¿No tienes cuenta? Regístrate
      </a>

    </div>
    </main>
    );
  };
  
  export default Main;
  