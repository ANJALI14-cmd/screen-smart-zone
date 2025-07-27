import { useState } from "react";
import { Menu, X, Home, FileQuestion, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "quiz", label: "Quiz", icon: FileQuestion },
    { id: "news", label: "News", icon: Newspaper },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card shadow-card"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-card/90 backdrop-blur-md rounded-lg shadow-elegant border border-border/50 p-2 min-w-[200px] animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => handleNavClick(item.id)}
                  className="justify-start gap-3 h-12"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};