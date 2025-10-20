import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../others/Logo";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const internalLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Developer', href: '/developer' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-fondoGrayClaro backdrop-blur-md font-luxury text-[#584738] z-50">

      <div className="max-w-full mx-auto px-4 md:px-20 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/">
            {/* <img>
              src="/assets/logo.png"
            </img> */}
            <Logo size="text-xl" />
          </Link>
        </div>

        {/* Menú escritorio */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 text-base font-bold">
          {internalLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className={`px-3 py-1 rounded-full transition-colors ${
                window.location.pathname === link.href
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Botón menú hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center space-y-1 p-1 rounded-full"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-5 h-0.5 bg-[#584738] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-[#584738] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-5 h-0.5 bg-[#584738] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 bg-fondoGrayClaro/90 backdrop-blur-md w-full py-4 md:hidden absolute top-20 left-0 z-40">
          {internalLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="hover:text-[#B59E7D] text-lg font-bold transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
