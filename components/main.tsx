"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Main = () => {
  const router = useRouter();

  return (
    <main className="container-fluid flex items-center justify-center m-10">
      <div className="flex items-center space-x-8">
        <div>
          <Image
            src="/Imagen.png"
            alt="Isometric office illustration"
            width={695}
            height={665}
          />
        </div>

        <div className=" text-white flex flex-col items-center">
          <Image
            src="/Intro.png"
            alt="Saras introduction"
            width={624.56}
            height={465.05}
          />
          <div className="flex items-center space-x-4 mt-6 gap-32">
            <Image
              src="/Ser-seguro1.png"
              alt="Logo ser seguro"
              width={215}
              height={154}
            />
            <div className="flex flex-col items-start space-y-4">
              <button
                className="bg-orange-400 text-white px-8 py-3 rounded-full text-xl font-semibold"
                onClick={() => router.push("/login")}
              >
                Iniciar sesión
              </button>
              <a href="#" className="text-white underline">
                ¿No tienes cuenta? Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
