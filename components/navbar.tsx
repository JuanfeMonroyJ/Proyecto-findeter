"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="relative">
      {/* Bandera en pantallas medianas y mayores */}
      <div className="absolute top-0 right-0 hidden md:block">
        <Image
          src="/Bandera.png"
          alt="Bandera de Colombia"
          width={350}
          height={95}
          className="h-20 w-auto"
        />
      </div>

      {/* Contenedor del logo del gobierno */}
      <div className="mx-auto px-4 py-2 md:py-4 md:px-8 flex items-center justify-between">
        <Image
          src="/Logo-Gov.co.png"
          alt="Logo Gov"
          width={100}
          height={25}
          className="h-6 w-auto"
        />
      </div>

      {/* Navbar con opciones */}
      <nav className="bg-white text-white bg-opacity-15">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            {/* Logo Findeter */}
            <Image
              src="/Logo Findeter.png"
              alt="Logo Findeter"
              width={180}
              height={50}
              className="h-12 w-auto cursor-pointer"
              onClick={() => router.push("/")}
            />

            {/* Enlaces de navegación */}
            <div className="flex flex-col md:flex-row items-center text-sm space-y-2 md:space-y-0 md:space-x-8 cursor-pointer">
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Sobre Findeter</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Transparencia</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Convocatorias</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Contrataciones</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Participa</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Atención y servicios al cliente y la ciudadanía</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p>Acción responsable</p>
              </div>
              <div className="hover:text-yellow-300 transition-colors duration-200">
                <p className="font-bold text-xl">Findeter a un clic</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
