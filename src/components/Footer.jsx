import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Agrega FaWhatsapp
import { LanguageContext } from "../services/LanguageContext"; // Importa el contexto de idioma
import translations from "../assets/translations.json"; // Importa las traducciones
import React, { useContext } from "react";

function Footer() {
  const { language } = useContext(LanguageContext); // Usa el contexto de idioma
  const t = translations[language]; // Textos en el idioma actual

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contenido del footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Derechos de autor */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              {t.derechosReservados} {/* Texto traducido */}
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/FrancoRecalde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-recalde-aa4580235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:francorecalde15@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            {/* Ícono de WhatsApp */}
            <a
              href="https://wa.me/+543515517435" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;