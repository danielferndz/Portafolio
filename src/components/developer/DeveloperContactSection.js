
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import Button from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function DeveloperContactSection({ isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        {/* contenido */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              {[
                { icon: Mail, text: "ldanielferndz@gmail.com", href: "daniel:ldanielferndz@gmail.com" },
                { icon: Phone, text: "+55 (95) 8425-9581", href: "tel:+559884259581" },
                { icon: MapPin, text: "Brasil, Rio de Janeiro", href: "#" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={contact.href}
                    className={`text-lg hover:text-blue-500 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 rounded-2xl backdrop-blur-xl ${
                      isDark
                        ? "bg-white/5 border border-white/10 hover:bg-white/10"
                        : "bg-black/5 border border-black/10 hover:bg-black/10"
                    }`}
                  >
                    <social.icon className="w-5 h-5 text-blue-500" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input name="name" placeholder="Name" onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
              </div>
              <Input name="subject" placeholder="Subject" onChange={handleChange} required />
              <Textarea name="message" placeholder="Message" rows={5} onChange={handleChange} required />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
