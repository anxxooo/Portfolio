import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarProject from "../components/layouts/NavbarProject"

interface ProjectPageProps {
  lang: "en" | "fr";
  project: {
    title: string;
    category: string;
    description: string;
    techs: string[];
    slug: string;
    github?: string;
    demo?: string;
    image?: string; 
  };
  toggleLanguage: ()=> void;
}

export default function ProjectPage({ lang, toggleLanguage, project }: ProjectPageProps) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-[#0b0c10] text-gray-200  py-12 flex flex-col gap-12">
      <NavbarProject lang={lang} toggleLanguage={toggleLanguage} />
      <div className="p-12 md: p-12">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          {project.title}
        </h1>
        <p className="text-green-400 text-sm md:text-base">{project.category}</p>
      </div>

      {project.image && (
        <div className="w-full flex justify-center md:justify-start">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl shadow-lg max-w-full md:max-w-2xl object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="md:w-3/4 text-gray-300 text-sm md:text-base">
        <p>{project.description}</p>
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

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {lang === "en" ? "Features" : "Fonctionnalités"}
        </h3>
        
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-400 text-[#0b0c10] font-semibold rounded hover:scale-105 transition"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-400 text-[#0b0c10] font-semibold rounded hover:scale-105 transition"
          >
            Live Demo
          </a>
        )}
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-600 text-gray-200 rounded hover:scale-105 transition"
        >
          {lang === "en" ? "Back" : "Retour"}
        </button>
      </div>
      </div>
    </section>
  );
}
