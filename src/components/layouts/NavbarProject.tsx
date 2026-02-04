import enFlag from "../../assets/en.svg";
import frFlag from "../../assets/fr.svg";

interface NavbarProjectProps {
  lang: "en" | "fr";
  toggleLanguage: () => void;
}

function NavbarProject({ lang, toggleLanguage }: NavbarProjectProps) {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-800 fixed top-0 bg-gray-950 z-50">
      {/* Left side (logo or empty for now) */}
      <div className="flex items-center">
        {/* You can put your logo or project title here */}
      </div>

      {/* Right side: language button */}
      <div className="flex items-center">
        <button
          onClick={toggleLanguage}
          className="font-semibold px-2 py-1 rounded border border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors duration-300"
        >
          <img
            src={lang === "en" ? enFlag : frFlag}
            alt="language"
            className="w-6 h-6"
          />
        </button>
      </div>
    </nav>
  );
}

export default NavbarProject;
