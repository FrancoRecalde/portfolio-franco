import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css"; // Importar Tailwind
import { LanguageProvider } from "./services/LanguageContext.jsx";

function App() {
  
  return (
    <Router>
      <LanguageProvider>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-800 py-12 w-full">
      <div className="container mx-auto px-4">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</div>
      <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;

