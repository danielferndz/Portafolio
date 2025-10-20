import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from "../others/Logo";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="px-6 py-12 mt-16 bg-fondoDev text-colorTextoGray" >
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-px mb-12 bg-white/10"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Bio */}
          <div className="md:col-span-1">
            <Logo size="text-2xl" />
            <p className="mt-4 text-sm max-w-xs text-gray-300">
              Frontend developer passionate about building modern, fast, and beautiful web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full h-px my-8 bg-white/10"></div>

        <div className="text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Luis Daniel Fernández Hdz</p>
          <p className="mt-1">Let's live a life with purpose</p>
        </div>
      </div>
    </footer>
  );
}
