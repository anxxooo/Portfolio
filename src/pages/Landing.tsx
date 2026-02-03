import { useRef} from "react";

import Navbar from "../components/layouts/Navbar.tsx";
import Home from "./Home.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import About from "./About.tsx";
import Skills from "./Skills.tsx";

interface LandingProps {
  lang: "en" | "fr";
  toggleLanguage : ()=>void;
}

function Landing({ lang, toggleLanguage }: LandingProps ) {
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  return (
    <div className="font-mono bg-[#0b0c10] text-gray-200 min-h-screen">
    <Navbar
        refs={{ homeRef, projectsRef, skillsRef, contactRef, aboutRef }}
        lang={lang}
        toggleLanguage={toggleLanguage}
      />

      <section ref={homeRef}  >
        <Home lang={lang} />
      </section>

      <section ref={aboutRef} >
        <About lang={lang} />
      </section>

      <section ref={skillsRef}  >
        <Skills lang={lang}/>
      </section>

      <section ref={projectsRef}  >
        <Projects lang={lang}/>
      </section>

      <section ref={contactRef}  >
        <Contact lang={lang}/>
      </section>

    </div>
     );
}
export default Landing;