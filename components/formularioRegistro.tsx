"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const  FormularioRegistro= () => {
    const router = useRouter();
  
    return (
      <div className="container-fluid flex items-center justify-center m-10">
        <div className="flex items-center space-x-8">
          <div>
            <Image
              src="/Imagen.png"
              alt="Isometric office illustration"
              width={695}
              height={665}
            />
          </div>
  
    
            </div>
          </div>
      
    );
  };
  
  export default FormularioRegistro;
  