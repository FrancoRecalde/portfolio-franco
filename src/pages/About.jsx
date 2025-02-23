import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import cvPdfES from "../assets/CV_FRANCO_RECALDE_ACT_ESPANOL.PDF"; // CV en español
import cvPdfEN from "../assets/CV_FRANCO_RECALDE_ACT_ENGLISH.PDF"; // CV en inglés
import { LanguageContext } from "../services/LanguageContext";
import translations from "../assets/translations.json";
import React, { useContext } from "react";

function About() {
  const { language } = useContext(LanguageContext); // Usa el contexto de idioma
  const t = translations[language]; // Textos en el idioma actual

  // Selecciona el archivo de CV según el idioma
  const cvPdf = language === "es" ? cvPdfES : cvPdfEN;

  return (
    <section className="bg-white dark:bg-gray-800 py-12 ">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.sobreMi}
        </motion.h2>

        {/* Contenido */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Imagen de perfil */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profileImg}
              alt="Franco Recalde"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Texto y detalles */}
          <motion.div
            className="max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify">
              {t.descripcionPersonal}
            </p>

            {/* Habilidades (iconos o texto) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.react}
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.springBoot}
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.microcontroladores}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.unity}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.python}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.java}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.javascript}
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                {t.habilidades.csharp}
              </span>
            </div>

            {/* Botón para descargar CV */}
            <a
              href={cvPdf} // Cambia dinámicamente según el idioma
              download={language === "es" ? "CV_Franco_Recalde_ES.pdf" : "CV_Franco_Recalde_EN.pdf"}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {t.descargarCV}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;