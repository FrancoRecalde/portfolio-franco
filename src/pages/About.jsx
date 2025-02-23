import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import cvPdf from "../assets/CV_Franco_Recalde.pdf"; // Importa el archivo PDF
function About() {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 ">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          style={{paddingRight:"187px"}}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre mí
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Soy Franco Recalde, un apasionado estudiante de 20 años cursando el cuarto año de
              Ingeniería en Sistemas en la UTN FRC. Mi fascinación por la tecnología me impulsa a
              mantenerme siempre actualizado con las últimas tendencias y herramientas del sector.
              Disfruto enfrentándome a nuevos desafíos y ampliando mis conocimientos. Mi objetivo crecer como profesional y contribuir
              al mundo de la tecnología con proyectos que generen un impacto positivo.
            </p>

            {/* Habilidades (iconos o texto) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                React
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
                Spring Boot
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">
                Microcontroladores
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                Unity
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                Python
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                Java
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                JavaScript
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
                C#
              </span>
            </div>

            {/* Botón para descargar CV */}
            <a
              href={cvPdf} // Cambia esto por la ruta a tu CV
              download="CV_Franco_Recalde.pdf"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;