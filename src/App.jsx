import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Process />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <About />
          <Technologies />
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
