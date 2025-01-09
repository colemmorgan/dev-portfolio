import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1920px] mx-auto">
      <Navbar />

      <div className="w-full px-6 md:px-8 lg:px-10 xl:px-12 lg:overflow-auto max-h-screen">
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
