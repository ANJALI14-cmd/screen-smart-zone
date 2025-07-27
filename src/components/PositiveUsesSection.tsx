import { useState } from "react";
import { MessageCircle, MapPin, Camera, Heart, Briefcase, GraduationCap, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PositiveUsesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const positiveUses = [
    {
      id: "communication",
      title: "Enhanced Communication",
      icon: MessageCircle,
      brief: "Stay connected with family and friends worldwide through calls, texts, and video chats.",
      detailed: "Mobile phones enable instant global connectivity through video calls, messaging apps, and social platforms. Emergency communication capabilities save lives by allowing quick calls for help. Translation apps break language barriers, fostering international relationships."
    },
    {
      id: "navigation",
      title: "GPS Navigation",
      icon: MapPin,
      brief: "Never get lost with real-time GPS navigation and location services.",
      detailed: "GPS technology transforms navigation with real-time traffic updates, saving time and fuel. Emergency services can locate people in distress, while ride-sharing apps revolutionize transportation. Location-based services provide relevant local information."
    },
    {
      id: "health",
      title: "Health Monitoring",
      icon: Heart,
      brief: "Track fitness, monitor health metrics, and access medical information.",
      detailed: "Health apps transform smartphones into wellness assistants with step counters, heart rate monitors, and medication reminders. Telemedicine provides remote consultations, while emergency medical ID features help first responders."
    },
    {
      id: "productivity",
      title: "Business Productivity",
      icon: Briefcase,
      brief: "Manage work tasks, attend meetings, and collaborate remotely.",
      detailed: "Mobile productivity tools enable flexible work with cloud-based editing, video conferencing, and project management. Calendar integration ensures coordination, while mobile banking streamlines financial transactions."
    },
    {
      id: "emergency",
      title: "Emergency Services",
      icon: Clock,
      brief: "Quick access to emergency services and safety features.",
      detailed: "Emergency features provide life-saving tools with one-touch calling, location sharing for rescuers, and automatic notifications to contacts. Weather alerts warn of dangers, while backup power modes extend battery life during crises."
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
    <section className="min-h-screen py-20 bg-gradient-to-br from-primary/5 to-accent/5" onClick={handleOutsideClick}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Positive Uses of Cell Phones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how mobile technology enhances our daily lives and creates positive impacts across various aspects of modern living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {positiveUses.map((use) => {
            const Icon = use.icon;
            const isExpanded = expandedCard === use.id;
            
            return (
              <Card
                key={use.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant border-primary/20 bg-card/80 backdrop-blur-sm relative ${
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
                    <Icon className={`${isExpanded ? 'h-8 w-8' : 'h-6 w-6'} text-primary transition-all duration-300`} />
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
                    <p className="text-sm text-primary mt-4 font-medium">
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