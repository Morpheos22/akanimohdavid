import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Speaking from "@/components/portfolio/Speaking";
import Testimonials from "@/components/portfolio/Testimonials";
import CTA from "@/components/portfolio/CTA";
import Footer from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  const ref = useReveal();

  return (
    <div ref={ref} className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Speaking />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
