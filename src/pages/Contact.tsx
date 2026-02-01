interface ContactProps {
  lang: "en" | "fr";
}

function Contact({ lang }: ContactProps) {
  return (
    <section className="w-full bg-[#0b0c10] py-24 px-6">
  <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-12 mx-20 text-white ">
    {lang === "en" ? "Contact" : "Contactez-moi"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <a
    href="mailto:malak.touat.04@gmail.com"
    className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] 
             hover:scale-105 transition-transform flex items-center gap-4"
    >
    <span className="text-green-400 text-2xl">📧</span>
    <p className="text-gray-300 font-mono text-sm">malak.touat.04@gmail.com</p>
    </a>

    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform flex items-center gap-4">
      <span className="text-green-400 text-2xl">📞</span>
      <p className="text-gray-300 font-mono text-sm">+33 7 44 93 79 60</p>
    </div>

    
    <div className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform flex items-center gap-4">
      <span className="text-green-400 text-2xl">📍</span>
      <p className="text-gray-300 font-mono text-sm">Lille (mobilité IDF)</p>
    </div>

    
    <a
      href="https://www.linkedin.com/in/malak-touat-2aa604274/"
      target="_blank"
      className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform flex items-center gap-4"
    >
      <span className="text-blue-400 text-2xl">🔗</span>
      <p className="text-gray-300 font-mono text-sm">LinkedIn</p>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/anxxooo"
      target="_blank"
      className="bg-[#111218] rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,255,128,0.12),0_10px_25px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform flex items-center gap-4"
    >
      <span className="text-gray-400 text-2xl">💻</span>
      <p className="text-gray-300 font-mono text-sm">GitHub</p>
    </a>

  </div>
</section>
    );
}
export default Contact;