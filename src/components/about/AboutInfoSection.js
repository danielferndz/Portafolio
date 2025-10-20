import React from "react";

export default function AboutInfoSection() {
  return (
    <>
      {/* Section 1 - Image Left */}
      <section className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=500&fit=crop"
                alt="Trabajo y desarrollo"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#111827]">
                El Poder del Enfoque
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                En un mundo lleno de distracciones, he aprendido que el verdadero progreso viene 
                del enfoque. Cada proyecto que emprendo, cada cliente que asesoro, recibe mi atención 
                completa. No creo en hacer las cosas a medias: si algo vale la pena hacerse, vale la 
                pena hacerse excepcionalmente bien.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esta filosofía se refleja en todo lo que hago. En el desarrollo de software, significa 
                crear soluciones elegantes y escalables. En bienes raíces, significa entender cada 
                detalle de la propiedad y del cliente. En ventas, significa construir relaciones 
                auténticas que trascienden la transacción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Right */}
      <section className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-[#111827]">
                Construcción de Legado
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi visión va más allá del éxito individual. Creo firmemente en construir algo que 
                perdure, que genere impacto real en la vida de las personas. Cada negocio que ayudo 
                a crecer, cada sistema que desarrollo, cada propiedad que vendo, es parte de un 
                legado más grande: el de crear valor genuino y duradero.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                He escrito tres libros no para presumir conocimiento, sino para compartir lo que 
                he aprendido en el camino. Creo que el conocimiento solo tiene valor cuando se 
                comparte, cuando ayuda a otros a evitar errores y acelerar su propio crecimiento. 
                Este espíritu de servicio guía todo lo que hago.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&fit=crop"
                alt="Legado y construcción"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}