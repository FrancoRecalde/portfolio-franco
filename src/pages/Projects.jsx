import { motion } from "framer-motion";
import spring from "../assets/spring.png";
import react from "../assets/REACT.png";
import esp from "../assets/ESP.jpeg";
import { LanguageContext } from "../services/LanguageContext"; // Importa el contexto de idioma
import translations from "../assets/translations.json"; // Importa las traducciones
import React, { useContext } from "react";

function Projects() {
  const { language } = useContext(LanguageContext); // Usa el contexto de idioma
  const t = translations[language]; // Textos en el idioma actual

  const projects = [
    {
      title: t.proyectoSpringBoot, // Título traducido
      description: t.descripcionSpringBoot, // Descripción traducida
      image: spring,
      repo: "https://github.com/FrancoRecalde/ProjectsFrancoRecalde/tree/main/Project%20SpringBoot",
    },
    {
      title: t.aplicacionFullStack, // Título traducido
      description: t.descripcionFullStack, // Descripción traducida
      image: react,
      repo: "https://github.com/FrancoRecalde/ProjectsFrancoRecalde/tree/main/Project%20REACT",
    },
    {
      title: t.sistemaESP32, // Título traducido
      description: t.descripcionESP32, // Descripción traducida
      image: esp,
      repo: "https://github.com/FrancoRecalde/ProjectsFrancoRecalde/tree/main/Project%20PIR%20hc-sr50%20ESP%2032",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.proyectos} {/* Título traducido */}
        </motion.h2>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Contenido del proyecto */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title} {/* Título traducido */}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description} {/* Descripción traducida */}
                </p>

                {/* Botón para ver el repositorio */}
                <div className="mt-auto">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition w-full text-center"
                  >
                    {t.verRepositorio} {/* Texto del botón traducido */}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;  