import React from 'react';
import AnimatedTitle from "./AnimatedTitle";

export default function Header() {
  return (
    <section className="bg-grayCream w-full font-luxury pt-10"> {/* <-- agrega pt-16 para separar del navbar */}
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8 min-h-screen">

        {/* Columna izquierda */}
        <div className="flex flex-col md:items-start md:justify-center items-center">

          {/* Imagen primero en móvil */}
          <div className="block md:hidden w-full flex justify-center relative overflow-visible -mt-4 mb-2">
            <div className="relative w-[95vw] h-[390px] mt-4"> {/* <-- agrega mt-4 para separarla un poco */}
              <img
                src="/assets/photoHome.png"  
                alt="Hero image"
                className="w-full h-full object-cover object-center rounded-xl z-10"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-grayCream via-transparent to-transparent z-20 pointer-events-none" />
            </div>
          </div>

          {/* Título debajo en móvil */}
          <div className="mt-2 w-full text-center md:text-left">
            <AnimatedTitle/>
          </div>
        </div>

        {/* Columna derecha para escritorio */}
        <div className="hidden md:flex justify-center items-start relative px-4 pb-8 pt-4 bg-gradient-to-b from-grayCream via-[#efefef] to-[#efefef]"> {/* <-- pt-4 para separarlo del navbar */}
          <div className="relative w-full h-[85vh] z-10 overflow-hidden">
            <img
              src="/assets/photoHome.png"
              className="w-full h-full object-cover object-center transition duration-500 ease-in-out hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full h-[240px] bg-gradient-to-t from-grayCream/95 via-grayCream/40 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
