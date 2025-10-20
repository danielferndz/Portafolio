import React, { useState } from "react";
import { Book } from "lucide-react";

const books = [
  {
    title: "Diario de un Emprendedor",
    description: "Reflexiones, aprendizajes y experiencias en el camino del emprendimiento. Una guía honesta sobre los desafíos y triunfos de construir negocios desde cero.",
    image: "/assets/diario.jpeg",
  },
  {
    title: "Los Senderos de la Vida",
    description: "Un viaje introspectivo sobre las decisiones que nos definen. Historias y lecciones sobre crecimiento personal, propósito y autenticidad en un mundo acelerado.",
    image: "/assets/arte.png",
  },
  {
    title: "El arte de estar solo",
    description: "Descubre la diferencia entre soledad y estar solo. Una exploración profunda sobre la introspección, el autoconocimiento y la paz interior en tiempos de conexión constante.",
    image: "/assets/senderos.jpeg",
  },
];

export default function HomeBook() {
  const [hoveredBook, setHoveredBook] = useState(null);

  return (
    <section className="bg-fondoClaro py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Book className="w-12 h-12 mx-auto mb-4 text-[#111827]" />
          <h2 className="text-4xl font-bold text-[#111827]">Mis Libros</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Pensamientos y reflexiones plasmados en papel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredBook(index)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="bg-gray rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">
                    {book.title}
                  </h3>
                </div>
              </div>

              {/* Description Popup */}
              {hoveredBook === index && (
                <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg p-6 flex items-center justify-center z-10 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-[#111827] mb-4">
                      {book.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}