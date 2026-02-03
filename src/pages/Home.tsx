import Glitch from "../components/Glitch.tsx";
import MatrixRain from "../components/MatrixRain.tsx";
interface HomeProps {
  lang: "en" | "fr";
}

function Home({ lang }: HomeProps) {
  return (
    <section className="flex flex-col items-center justify-center h-[110vh] text-center px-6">
      <MatrixRain />
      <Glitch text="Malak TOUAT"/>
      <div className="space-x-6 text-sm items-center my-10">

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-0">
        {lang === "en"
          ? "Exploring cybersecurity, systems, and DevOps with curiosity and rigor."
          : "Explorant la cybersécurité, les systèmes et le DevOps avec curiosité et rigueur."}
      </p>
      </div>
      
    </section>
  );
}
export default Home;