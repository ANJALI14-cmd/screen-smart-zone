import { Smartphone, Zap, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-float mb-8">
          <Smartphone className="h-20 w-20 mx-auto text-primary mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Cell Phone: Blessing or Curse?
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover the double-edged nature of mobile technology in our modern world. 
          Explore the benefits, understand the risks, and find your digital balance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={() => onNavigate("positive")}
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 group"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Explore Benefits
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("negative")}
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 group"
          >
            <AlertTriangle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Understand Risks
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-primary">Interactive Content</h3>
            <p className="text-muted-foreground">Click on cards to zoom in and explore detailed information</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-accent">Self Assessment</h3>
            <p className="text-muted-foreground">Take our quiz to evaluate your phone usage habits</p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-primary">Real Stories</h3>
            <p className="text-muted-foreground">Read real news about mobile technology's impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};