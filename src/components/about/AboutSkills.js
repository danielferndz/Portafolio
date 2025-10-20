import React from "react";
import { TrendingUp, Users, Code, Lightbulb } from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "VENTAS",
    subtitle: "Ventas y estrategia comercial (más de 26 millones de pesos gestionados)",
    description: "Experiencia comprobada en estructuración de procesos comerciales, desde prospección hasta cierre. Estrategias basadas en datos y psicología del consumidor que generan resultados medibles. He trabajado con marcas personales y empresas ayudándolas a escalar sus operaciones de venta con enfoque sistemático.",
  },
  {
    icon: Users,
    title: "LIDERAZGO Y COMUNICACIÓN",
    subtitle: "Liderazgo y dirección de equipos de ventas",
    description: "Capacidad para construir, motivar y dirigir equipos de alto rendimiento. Comunicación efectiva que inspira acción y genera confianza. Experiencia en gestión de equipos remotos y presenciales, siempre enfocado en el desarrollo individual y los resultados colectivos.",
  },
  {
    icon: Code,
    title: "SOFTWARE",
    subtitle: "Desarrollo de software: diseño, arquitectura y programación moderna",
    description: "Dominio de arquitecturas web modernas, bases de datos y APIs. Desde el frontend hasta el backend, creo sistemas robustos y escalables. Experiencia en React, Node.js, Python y cloud computing. Enfoque en código limpio, mantenible y que realmente resuelva problemas de negocio.",
  },
  {
    icon: Lightbulb,
    title: "CREATIVIDAD",
    subtitle: "Generación de ideas, visión de negocio y enfoque estructurado",
    description: "La creatividad no es caos, es visión estructurada. Capacidad para ver oportunidades donde otros ven obstáculos, y convertir ideas abstractas en planes ejecutables. Pensamiento estratégico combinado con pragmatismo para crear soluciones innovadoras pero viables.",
  },
];

export default function AboutSkills() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#111827] mb-16">
          Habilidades y Experiencia
        </h2>

        <div className="space-y-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-[#EFEFEF] rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-[#111827] p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#111827] mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      ✔️ {skill.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}