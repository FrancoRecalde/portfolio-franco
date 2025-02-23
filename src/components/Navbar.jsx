import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpeg";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Foto de perfil y nombre */}
        <div className="flex items-center space-x-4">
          <img src={profileImg} alt="Franco Recalde" className="w-12 h-12 rounded-full" />
          <Link to="/" className="text-2xl font-bold">Franco Recalde</Link>
        </div>
        
        {/* Enlaces de navegación */}
        <div className="space-x-6 text-lg">
          <Link to="/about" className="hover:text-gray-400">Sobre mí</Link>
          <Link to="/projects" className="hover:text-gray-400">Proyectos</Link>
          <Link to="/contact" className="hover:text-gray-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

