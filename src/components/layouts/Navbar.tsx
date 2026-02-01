
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import enFlag from "../../assets/en.svg";
import frFlag from "../../assets/fr.svg";
interface NavbarProps {
  refs: {
    homeRef: React.RefObject<HTMLElement | null>;
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
    aboutRef: React.RefObject<HTMLElement | null>;
  };
  lang: "en" | "fr";
  toggleLanguage: () => void;
}

function Navbar({ refs, lang, toggleLanguage}: NavbarProps) {
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-800 fixed top-0 bg-gray-950 z-50">
      <span className="text-xl font-bold"></span>
      <div className="hidden md:flex space-x-6 text-sm items-center">
        <button onClick={() => scrollTo(refs.homeRef)} className="text-xl font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300">
          {lang === "en" ? "Home" : "Accueil"}
        </button>
        <button onClick={() => scrollTo(refs.aboutRef)} className="text-xl font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300">
          {lang === "en" ? "About me" : "À propos"}
        </button>
        <button onClick={() => scrollTo(refs.projectsRef)} className="text-xl font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300">
          {lang === "en" ? "Projects" : "Projets"}
        </button>
        <button onClick={() => scrollTo(refs.contactRef)} className="text-xl font-semibold  py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300">
          {lang === "en" ? "Contact" : "Contact"}
        </button>
        <button
          onClick={toggleLanguage}
          className="font-semibold px-2 py-1 rounded border border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors duration-300 text-xl"
        >
          <img
            src={lang === "en" ? frFlag : enFlag}
            alt="language"
            className="w-6 h-6"
          />
        </button>
      </div>
      
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl px-3 py-1 text-gray-100 cursor-pointer"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>        
        <button
          onClick={toggleLanguage}
          className="font-semibold px-2 py-1 rounded border border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors duration-300 text-xl"
        >
          <img
            src={lang === "en" ? frFlag : enFlag}
            alt="language"
            className="w-6 h-6"
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-0 w-48 bg-gray-950 border border-gray-800 rounded mt-2  flex flex-col items-start p-2 space-y-2 md:hidden">
          <button
            onClick={() => scrollTo(refs.homeRef)}
            className="w-full text-left font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            {lang === "en" ? "Home" : "Accueil"}
          </button>
          <button
            onClick={() => scrollTo(refs.aboutRef)}
            className="w-full text-left font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            {lang === "en" ? "About me" : "A propos"}
          </button>
          <button
            onClick={() => scrollTo(refs.projectsRef)}
            className="w-full text-left font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            {lang === "en" ? "Projects" : "Projets"}
          </button>
          <button
            onClick={() => scrollTo(refs.contactRef)}
            className="w-full text-left font-semibold px-3 py-1 rounded hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            {lang === "en" ? "Contact" : "Contact"}
          </button>


        </div>
        )}
    </nav>
  );
}

export default Navbar;
