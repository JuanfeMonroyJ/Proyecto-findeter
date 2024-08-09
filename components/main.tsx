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
        width={695}
        height={665}
      />

      <Image
        src="/Bievenido-saras.png" 
        alt="Logo de Saras"
        width={624.56}
        height={465.05}
      />
        <Image
        src="/Ser-seguro.png" 
        alt="Logo ser seguro"
        width={215}
        height={154}
        />
       <Image
        src="/Boton-iniciar.png" 
        alt="Boton Iniciar Sesión"
        width={255}
        height={72}
        />

      <a href="" className="underline text-white">
        ¿No tienes cuenta? Regístrate
      </a>

    </div>
    </main>
    );
  };
  
  export default Main;
  