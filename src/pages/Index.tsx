import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PositiveUsesSection } from "@/components/PositiveUsesSection";
import { NegativeUsesSection } from "@/components/NegativeUsesSection";
import { QuizSection } from "@/components/QuizSection";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "positive", "negative", "quiz", "news"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigation} />
      
      <div id="home">
        <HeroSection onNavigate={scrollToSection} />
      </div>
      
      <div id="positive">
        <PositiveUsesSection />
      </div>
      
      <div id="negative">
        <NegativeUsesSection />
      </div>
      
      <div id="quiz">
        <QuizSection />
      </div>
      
      <div id="news">
        <NewsSection />
      </div>
    </div>
  );
};

export default Index;
