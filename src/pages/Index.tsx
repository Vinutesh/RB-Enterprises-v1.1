import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PastWorkCarousel from "@/components/PastWorkCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PastWorkCarousel />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
