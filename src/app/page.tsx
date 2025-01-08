import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex max-w-[1920px] mx-auto">
      <Sidebar />

      <div className="w-full px-12 overflow-auto max-h-screen">
        <Hero />
        <Experience />
        <Skills />
        <Projects/>
        <Awards/>
        <Footer />
      </div>
    </div>
  );
}
