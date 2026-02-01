import AboutTerminal from "../components/layouts/AboutTerminal.tsx";
import Photo from "../assets/photo.png";
interface AboutProps {
  lang: "en" | "fr";
}

function About({ lang }: AboutProps) {
  return (
    <section className="relative bg-[#0b0c10] min-h-screen flex items-center justify-center p-8">
    <div className="w-full max-w-6xl mx-0  my-10 px-6">

    <h2 className="mx-20 text-3xl md:text-[4.5rem] font-bold text-white text-center md:text-left">
      {lang === "en" ? "About me" : "À propos de moi"}
    </h2>
    <div>
      {lang == "en" ? <div className="mx-20 bg-[#e5e5e5] w-60 h-1 rounded "></div>
      : <div className="mx-20 bg-[#e5e5e5] w-100 h-1 rounded "></div>}
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        {lang == "en" ? <img
          src={Photo}
          alt="image"
          className="w-64 h-64 md:w-95 md:h-95   
          bg-[#111218]
          rounded-xl
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.8)] object-cover"
        />
      : <img
          src={Photo}
          alt="image"
          className="w-100 h-100 md:w-105 md:h-105   
          bg-[#111218]
          rounded-xl
          shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.8)] object-cover"
        />}
        
      </div>

      {/* Terminal */}
      <div className="flex justify-center md:justify-start">
        <AboutTerminal lang={lang} />
      </div>

    </div>
  </div>
</section>

  );
};

export default About;

{/*
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            {[
              "Python",
              "Linux",
              "Docker",
              "Kubernetes",
              "React",
              "Tailwind",
              "Git",
              "Sécurité",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#1f2024] text-green-400 rounded-md hover:shadow-lg hover:shadow-green-400 transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>*/
        }
