function Projects() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0 scanline-bg animate-scanline pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0b0c10] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b0c10] to-transparent pointer-events-none"></div>
      <div className="relative z-10 text-white p-8">
      Projet
      </div>
    </section>
    );
}
export default Projects;