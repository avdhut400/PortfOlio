import Navbar from "./layout/Navbar";
import { Hero } from "./section/Hero";
import About from "./section/About";
import Projects from "./section/projects";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Certificates from "./section/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Certificates/>
      <Contact />
    </>
  );
}

export default App;

