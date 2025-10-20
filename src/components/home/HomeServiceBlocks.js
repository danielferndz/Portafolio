import React, { useState } from "react";
import { Building2, Code, TrendingUp } from "lucide-react";

const services = [
  {
    id: "realestate",
    title: "Real Estate",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Venta, renta y asesoramiento integral en bienes raíces. Como CEO de Inmuebles Imperio, transformo propiedades en oportunidades de inversión y crecimiento patrimonial.",
  },
  {
    id: "software",
    title: "Desarrollo de Software",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    description: "Creo sistemas web y soluciones tecnológicas a medida. Desde arquitectura hasta implementación, desarrollo software que resuelve problemas reales y escala con tu negocio.",
  },
  {
    id: "sales",
    title: "Ventas",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop",
    description: "Estrategias comerciales que convierten. Más de $26 millones en procesos de venta demuestran mi enfoque: entender al cliente, estructurar procesos y ejecutar con propósito.",
  },
];

export default function HomeServiceBlocks() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className="bg-fondoDev py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                  isExpanded ? "md:col-span-3 h-[500px]" : "h-[300px]"
                }`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  
                  {isExpanded && (
                    <p className="text-lg text-gray-200 mt-4 max-w-3xl animate-in fade-in duration-500">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}