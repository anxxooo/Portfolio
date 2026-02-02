import { useParams } from "react-router-dom";
import ProjectPage from "../pages/ProjectPage";
import { projectList } from "../data/projects";

interface WrapperProps {
  lang: "en" | "fr";
  toggleLanguage : ()=>void;
}

export default function ProjectWrapper({ lang, toggleLanguage }: WrapperProps) {
  const { slug } = useParams<{ slug: string }>();
  const project = projectList.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-white">Project not found</p>;
  }

  return <ProjectPage lang={lang} toggleLanguage={toggleLanguage} project={project} />;
}
