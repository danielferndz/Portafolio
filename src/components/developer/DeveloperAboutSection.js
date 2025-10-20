import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Heart } from "lucide-react";

export default function DeveloperAboutSection() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Heart, label: "Happy Clients", value: "25+" },
    { icon: Zap, label: "Years Experience", value: "3+" },
    { icon: Palette, label: "Designs Created", value: "100+" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-fondoDev">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen e ícono */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl rounded-3xl p-8 bg-white/5 border border-white/10">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-3xl flex items-center justify-center text-6xl bg-gray-900 text-white">
                    👨‍💻
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              I'm passionate about creating modern, responsive websites that not only look stunning 
              but also provide seamless user experiences.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              When I'm not coding, you'll find me exploring the latest design trends, contributing 
              to open-source projects, or sketching new interface concepts.
            </p>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-xl rounded-2xl p-6 text-center bg-white/5 border border-white/10"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold mb-1 text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
