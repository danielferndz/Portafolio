import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 'text-2xl' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
    >
      {/* Imagen más grande */}
      <img
        src="/assets/logo.png"
        alt="Logo Prince"
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />

      {/* Texto opcional */}
      {/* <span className={`font-bold ${size} bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
        Prince
      </span> */}
    </motion.div>
  );
}
