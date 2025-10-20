import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../components/developer/projectData";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { createPageUrl } from "@/utils";
import Logo from "../../components/others/Logo";

export default function ProjectDemo() {
  const [project, setProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = parseInt(params.get("id"), 10);
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject);
  }, [location.search]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading project or project not found...
      </div>
    );
  }
  
  const isDark = true; // Project demo page is always dark theme for consistency

  return (
    <div className={`min-h-screen transition-all duration-700 ${
      isDark ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white" : ""
    }`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to={createPageUrl("Portfolio")}>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5"/>
                    <span>Back to Portfolio</span>
                </motion.div>
            </Link>
            <Logo size="text-xl" />
        </div>
      </header>

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10"
          >
            <div className="p-2 bg-gray-800 flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-white">About the Project</h2>
              <div className="prose prose-invert text-gray-300 max-w-none text-lg leading-relaxed">
                  <p>{project.long_description}</p>
              </div>
            </div>
            <div>
              <div className="backdrop-blur-xl rounded-3xl p-6 border border-white/10 bg-white/5 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-6">
                    {project.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-medium hover:scale-105 transition-transform">
                        <ExternalLink className="w-4 h-4 inline mr-2"/> Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-white/10 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4 inline mr-2"/> View Code
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}