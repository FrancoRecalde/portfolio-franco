import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Menu, X } from "lucide-react"; // Iconos del menú
import profileImg from "../assets/profile.jpeg";
import { LanguageContext } from "../services/LanguageContext"; // Importa el contexto de idioma
import argentinaFlag from "../assets/arg.svg.webp"; // Bandera de Argentina
import usaFlag from "../assets/usa.svg.png"; // Bandera de Estados Unidos
import translations from "../assets/translations.json";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext); // Usa el contexto de idioma
  const t = translations[language]; // Textos en el idioma actual
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Foto de perfil y nombre */}
        <div className="flex items-center space-x-4">
          <img src={profileImg} alt="Franco Recalde" className="w-12 h-12 rounded-full" />
          <Link to="/" className="text-2xl font-bold">Franco Recalde</Link>
        </div>

        {/* Botón para abrir/cerrar el menú en móviles */}
        <button
          className="md:hidden block focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} className="text-white" /> : <Menu size={30} className="text-white" />}
        </button>

        {/* Enlaces de navegación - Escritorio */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <Link to="/about" className="hover:text-gray-400">{t.sobreMi}</Link>
          <Link to="/projects" className="hover:text-gray-400">{t.proyectos}</Link>
          <Link to="/contact" className="hover:text-gray-400">{t.contacto}</Link>

          {/* Botón de cambio de idioma con banderas */}
          <button
            onClick={toggleLanguage}
            className="focus:outline-none"
          >
            <img
              src={language === "es" ? argentinaFlag : usaFlag}
              alt="Cambiar idioma"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Fondo oscuro cuando el menú está abierto */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Menú lateral animado en móviles */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex flex-col items-center mt-20 space-y-6 text-lg">
          <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Sobre mí</Link>
          <Link to="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Proyectos</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contacto</Link>

          {/* Botón de cambio de idioma con banderas en móviles */}
          <button
            onClick={toggleLanguage}
            className="focus:outline-none"
          >
            <img
              src={language === "es" ? argentinaFlag : usaFlag}
              alt="Cambiar idioma"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;