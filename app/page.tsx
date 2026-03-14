import MatrixRain from "@/components/MatrixRain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import SoccerGame from "@/components/SoccerGame";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated matrix background */}
      <MatrixRain />

      {/* Navigation */}
      <Nav />

      {/* Page sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <SoccerGame />
      <Contact />
    </main>
  );
}
