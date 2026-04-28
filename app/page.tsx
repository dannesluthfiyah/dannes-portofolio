import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F6F9FE] scroll-smooth snap-y snap-mandatory">
      <section id="home" className="snap-start snap-always">
        <Hero />
      </section>
      <section id="about" className="snap-start snap-always">
        <About />
      </section>
      <section id="projects" className="snap-start snap-always">
        <Projects />
      </section>
      <section id="skills" className="snap-start snap-always">
        <Skills />
      </section>
      <section id="experience" className="snap-start snap-always">
        <Experience />
      </section>
      <section id="contact" className="snap-start snap-always">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
