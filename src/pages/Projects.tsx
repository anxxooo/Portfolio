import { useNavigate } from "react-router-dom";
import { projectList } from "../data/projects"; 

interface ProjectsProps {
  lang: "en" | "fr";
}

export default function Projects({ lang }: ProjectsProps) {
  const navigate = useNavigate();


  return (
    <section className="relative w-full min-h-screen py-24 bg-[#0b0c10]">
<div className="absolute inset-0 scanline-bg animate-scanline pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0b0c10] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b0c10] to-transparent pointer-events-none"></div>

      <h2 className="text-4xl md:text-6xl font-bold text-white text-center m-12">
        {lang === "en" ? "Projects" : "Projets"}
      </h2>

      <div
        className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-6 py-8 hide-scrollbar"
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="snap-center min-w-[320px] max-w-[320px] bg-[#111218] rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,255,140,0.35)] relative"
          >

            <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-gradient-to-br from-green-400/10 to-transparent pointer-events-none" />

            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-green-400 mb-3">{project.category}</p>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-[#0b0c10] text-green-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
