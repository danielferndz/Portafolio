import React from "react";

export default function HomeAboutSection() {
  return (
    <section className="bg-[#111827] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Hola, soy Daniel
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Ayudo a marcas, personas y negocios a proyectarse con claridad, estrategia y diseño. 
            Mi enfoque va más allá del código: conecto ideas con resultados tangibles, desde el 
            desarrollo de software y sistemas hasta la gestión de ventas y propiedades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Software Development */}
            <div className="space-y-4">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold">Desarrollo de sistemas únicos y estratégicos</h3>
              <p className="text-gray-400 leading-relaxed">
                Si lo que quieres es expandir tu negocio, te apoyo con ello. Te ofrezco desde la 
                creación de un sitio web adaptado a tus necesidades hasta soluciones informáticas 
                dedicadas a cualquier situación que tengas en tu empresa.
              </p>
            </div>

            {/* Real Estate */}
            <div className="space-y-4">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold">Comprar o vender propiedades con confianza</h3>
              <p className="text-gray-400 leading-relaxed">
                Como agente inmobiliario y CEO de Inmuebles Imperio, acompaño a mis clientes en 
                todo el proceso: desde la búsqueda hasta el cierre. Gestionamos propiedades con 
                visión comercial y asesoría honesta.
              </p>
            </div>

            {/* Sales */}
            <div className="space-y-4">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold">Potenciar tus ventas y expandir tu presencia</h3>
              <p className="text-gray-400 leading-relaxed">
                Te ayudo a estructurar y optimizar tu proceso de ventas. Desde la estrategia hasta 
                la comunicación visual, mi enfoque busca resultados: más alcance, mejores conversiones, 
                y un mensaje que conecte con tu audiencia real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}