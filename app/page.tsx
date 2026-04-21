import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F6F9FE] scroll-smooth">
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
