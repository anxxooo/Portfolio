import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/layouts/Footer.tsx";
import ProjectWrapper from "./components/ProjectWrapper.tsx";

export default function App() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
      <HashRouter>
      <div className="font-mono bg-[#0b0c10] text-gray-200 min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing lang={lang} toggleLanguage={toggleLanguage}/>} />
            <Route
              path="/projects/:slug"
              element={<ProjectWrapper lang={lang} toggleLanguage={toggleLanguage} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
