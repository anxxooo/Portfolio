import NavbarProject from "../components/layouts/NavbarProject";
import React, { useEffect } from "react";

interface ProjectPageProps {
  lang: "en" | "fr";
  project : {
  title: { en: string; fr: string };
  category: { en: string; fr: string };
  longDescription: { en: string; fr: string };
  shortDescription: { en: string; fr: string };
  techs: string[];
  slug: string;
  github?: string;
  content?: { en: React.ReactNode; fr: React.ReactNode };
};
  toggleLanguage: () => void;
}

export default function ProjectPage({ lang, toggleLanguage, project }: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll en haut au chargement
  }, []);
  return (
    <section className="min-h-screen w-full bg-[#0b0c10] text-gray-200 py-12 flex flex-col gap-12">
      <NavbarProject lang={lang} toggleLanguage={toggleLanguage} />

      <div className="p-20 md:p-20 flex flex-col gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {project.title[lang]}
          </h1>
          <p className="text-green-400 text-sm md:text-base">{project.category[lang]}</p>
        </div>

        {/* Description */}
        <div className="md:w-3/4 text-gray-300 text-sm md:text-base">
          <p>{project.longDescription[lang]}</p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded bg-[#111218] text-green-400 text-xs md:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Free content */}
        {project.content && (
          <div className="flex flex-col gap-6 mt-6">
            {project.content[lang]}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-400 text-[#0b0c10] font-semibold rounded hover:scale-105 transition"
            >
              {lang === "en" ? "GitHub Link" 
              : "Lien GitHub"}
            </a>
          )}

        </div>
      </div>
    </section>
  );
}
