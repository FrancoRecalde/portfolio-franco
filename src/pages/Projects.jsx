import { motion } from "framer-motion";
import spring from "../assets/spring.png";
import react from "../assets/REACT.png";
import esp from "../assets/ESP.jpeg";

function Projects() {
  const projects = [
    {
      title: "Proyecto Spring Boot",
      description:
        "Desarrollo de una API RESTful para la gestión de recursos utilizando Spring Boot. Incluye autenticación JWT y conexión a base de datos local.",
      image: spring,
      repo: "https://github.com/FrancoRecalde/ProjectsFrancoRecalde/tree/main/Project%20SpringBoot",
    },
    {
      title: "Aplicación Full Stack con React",
      description:
        "Aplicación web full stack con React en el frontend y Node.js en el backend. Incluye base de datos local.",
      image: react,
      repo: "https://github.com/FrancoRecalde/ProjectsFrancoRecalde/tree/main/Project%20REACT",
    },
    {
      title: "Sistema con ESP32 y Sensor PIR",
      description:
        "Implementación de un sistema de detección de movimiento usando un microprocesador ESP32 y un sensor PIR. Relizada con MicroPython. Las notificaciones son enviadas via whatsapp",
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
          Proyectos
        </motion.h2>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full" // Agrega flex, flex-col y h-full
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
              <div className="p-6 flex flex-col flex-grow"> {/* Agrega flex-grow */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Botón para ver el repositorio */}
                <div className="mt-auto"> {/* mt-auto empuja el botón hacia abajo */}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition w-full text-center"
                  >
                    Ver Repositorio
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