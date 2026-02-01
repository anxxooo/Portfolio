import { useRef, useState } from "react";
import Navbar from "./components/layouts/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";

export default function App() {
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const [lang, setLang] = useState<"en" | "fr">("en");
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <div className="font-mono bg-[#0b0c10] text-gray-200 min-h-screen">
      <Navbar
        refs={{ homeRef, projectsRef, contactRef, aboutRef }}
        lang={lang}
        toggleLanguage={toggleLanguage}
      />

      <section ref={homeRef}  >
        <Home lang={lang} />
      </section>

      <section ref={aboutRef} >
        <About lang={lang} />
      </section>

      <section ref={projectsRef} lang={lang} >
        <Projects />
      </section>

      <section ref={contactRef} lang={lang} >
        <Contact />
      </section>
    </div>
  );
}
