import { useState } from "react";
import { Eye, Brain, Users, Car, Shield, Clock, Zap, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const NegativeUsesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const negativeUses = [
    {
      id: "addiction",
      title: "Digital Addiction",
      icon: Zap,
      brief: "Excessive phone use can lead to compulsive behavior and dependency.",
      detailed: "Smartphone addiction affects millions worldwide. Constant notifications trigger dopamine releases, creating addictive cycles. Users experience anxiety when separated from devices. Sleep patterns suffer from blue light exposure and bedtime scrolling."
    },
    {
      id: "privacy",
      title: "Privacy Concerns",
      icon: Shield,
      brief: "Personal data collection and surveillance threaten individual privacy.",
      detailed: "Mobile devices collect vast personal data including location, browsing habits, and communications. Apps request excessive permissions, while data breaches expose sensitive information. Location tracking enables stalking and harassment."
    },
    {
      id: "distraction",
      title: "Attention Disruption",
      icon: Brain,
      brief: "Constant notifications and multitasking reduce focus and cognitive performance.",
      detailed: "Smartphone notifications fragment attention spans, reducing productivity. Multitasking between devices reduces cognitive efficiency by up to 40%. Students using phones during lectures show lower comprehension rates."
    },
    {
      id: "health-issues",
      title: "Physical Health Problems",
      icon: Eye,
      brief: "Prolonged use causes eye strain, neck pain, and sleep disorders.",
      detailed: "Extended smartphone use causes 'tech neck' and chronic pain. Blue light exposure disrupts sleep cycles. Digital eye strain results in dry eyes and headaches. Sedentary behavior contributes to obesity and cardiovascular problems."
    },
    {
      id: "cyberbullying",
      title: "Cyberbullying Platform",
      icon: AlertTriangle,
      brief: "Mobile devices enable harassment, trolling, and online abuse.",
      detailed: "Smartphones provide 24/7 access for cyberbullies to harass victims. Anonymous messaging enables cruel behavior, while screenshot sharing spreads humiliation. Online harassment follows victims home, eliminating safe spaces."
    }
  ];

  const handleCardClick = (cardId: string) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  const handleOutsideClick = () => {
    setExpandedCard(null);
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-destructive/5 to-orange-500/5" onClick={handleOutsideClick}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-destructive">
            Misuses & Negative Impacts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the potential risks and negative consequences of excessive or inappropriate mobile phone usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {negativeUses.map((use) => {
            const Icon = use.icon;
            const isExpanded = expandedCard === use.id;
            
            return (
              <Card
                key={use.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant border-destructive/20 bg-card/80 backdrop-blur-sm relative ${
                  isExpanded 
                    ? 'transform scale-125 z-10 shadow-2xl' 
                    : 'hover:scale-105'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(use.id);
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`${isExpanded ? 'h-8 w-8' : 'h-6 w-6'} text-destructive transition-all duration-300`} />
                    <CardTitle className={`${isExpanded ? 'text-2xl' : 'text-lg'} transition-all duration-300`}>
                      {use.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className={`text-muted-foreground ${isExpanded ? 'text-lg leading-relaxed font-semibold' : 'text-sm'} transition-all duration-300`}>
                    {isExpanded ? use.detailed : use.brief}
                  </p>
                  
                  {isExpanded && (
                    <p className="text-sm text-destructive mt-4 font-medium">
                      Click outside to close
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};