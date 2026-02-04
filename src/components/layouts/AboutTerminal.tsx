interface TerminalProps {
  lang: "en" | "fr";
}

function AboutTerminal({ lang }: TerminalProps) {
  return (
    <section className="relative rounded-xl
    p-8 max-w-3xl mx-auto my-16 text-gray-200 font-mono
    bg-[#111218] rounded-xl shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_20px_40px_rgba(0,0,0,0.85)]">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-400">$</span>
        <span className="text-white">whoami</span>
        <span className="animate-blink ml-1 text-white">|</span>
      </div>

      <div className="pl-4">
        <div>
           {lang === "en"
  ? <p>
    Computer Science undergraduate student, I enjoy exploring areas such as 
    <span className="text-green-400"> cybersecurity</span>, 
    <span className="text-blue-400"> systems</span>, and 
    <span className="text-purple-400"> DevOps</span>. 
    Throughout my studies, I have gained experience in software development and data science, while also developing a strong interest in system security and infrastructure optimization. 
    Curious and motivated, I enjoy understanding how technologies work and building practical solutions, whether through software projects or security experiments.
  </p>
  : <p>
    Étudiante en Licence Informatique, je m'intéresse à des domaines tels que la 
    <span className="text-green-400"> cybersécurité</span>, les 
    <span className="text-blue-400"> systèmes</span> et le 
    <span className="text-purple-400"> DevOps</span>. 
    Au cours de mon parcours, j'ai acquis de l'expérience en développement logiciel et en science des données, tout en développant un intérêt marqué pour la sécurité des systèmes et l'optimisation des infrastructures. 
    Curieuse et motivée, j'aime comprendre le fonctionnement des technologies et construire des solutions concrètes, que ce soit à travers des projets logiciels ou des expériences en sécurité.
  </p>
}


        </div>
        <div>
        {lang === "en"
          ? <p className="mt-2">
          Every new project for me is a chance to {" "}
          <span className="text-green-400">test</span>,{" "}
          <span className="text-blue-400">secure</span> and{" "}
          <span className="text-purple-400">optimise</span> my skills.
        </p>
        : <p className="mt-2">
          Chaque nouveau projet est pour moi une occasion de {" "}
          <span className="text-green-400">tester</span>, {" "}
          <span className="text-blue-400">sécuriser</span> et {" "}
          <span className="text-purple-400">optimiser</span> mes compétences.
        </p>
        }
        </div>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AboutTerminal;
