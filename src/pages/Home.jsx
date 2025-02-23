import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

function Home() {
  return (
    <section style={{ paddingBottom: '500px' }} className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 md:px-8">
      {/* Texto de presentación */}
      <motion.div
        className="text-center md:text-left max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-black">
          ¡Hola! Soy <span className="text-blue-600">Franco Recalde</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Estudiante de Ingeniería en Sistemas apasionado por el continuo aprendizaje
        </p>
        <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Más sobre mí
          </button>
        </Link>
      </motion.div>

      {/* Imagen de perfil */}
      <motion.div
        className="mb-8 md:mb-0 md:ml-12 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60"
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
    </section>
  );
}

export default Home;