import { motion } from "framer-motion";

function Contact() {
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
          Contacto
        </motion.h2>

        {/* Contenido */}
        <div className="max-w-2xl mx-auto">
          {/* Formulario de contacto */}
          <motion.form
            action="https://formspree.io/f/xnnjryzo" // Endpoint de Formspree
            method="POST"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="tucorreo@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Asunto del mensaje"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Enviar Mensaje
            </button>
          </motion.form>


          {/* Información adicional */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              También podes contactarme directamente a través de:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:francorecalde15@gmail.com"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                ✉️ francorecalde@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/franco-recalde-aa4580235/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/FrancoRecalde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                🔗 GitHub
              </a>
            </div>
            <a
                href="https://wa.me/+543515517435"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                📱+54 3515517435
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;