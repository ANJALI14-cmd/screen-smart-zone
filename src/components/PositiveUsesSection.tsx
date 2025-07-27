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
      detailed: "Mobile phones have revolutionized communication by enabling instant global connectivity. Video calls bridge geographical gaps, messaging apps facilitate quick exchanges, and social platforms help maintain relationships. Emergency communication capabilities have saved countless lives, allowing people to call for help in critical situations. Group chats keep families connected, and translation apps break down language barriers, fostering international relationships and understanding."
    },
    {
      id: "navigation",
      title: "GPS Navigation",
      icon: MapPin,
      brief: "Never get lost with real-time GPS navigation and location services.",
      detailed: "GPS technology in smartphones has transformed how we navigate the world. Real-time traffic updates help avoid congestion, saving time and fuel. Location sharing ensures safety during travels, while offline maps work even without internet. Emergency services can locate people in distress, and ride-sharing apps have revolutionized transportation. Geofencing helps parents monitor children's whereabouts, and location-based services provide relevant local information and recommendations."
    },
    {
      id: "health",
      title: "Health Monitoring",
      icon: Heart,
      brief: "Track fitness, monitor health metrics, and access medical information.",
      detailed: "Health apps transform smartphones into personal wellness assistants. Step counters encourage physical activity, heart rate monitors track cardiovascular health, and medication reminders ensure proper treatment adherence. Telemedicine apps provide remote medical consultations, while health record apps organize medical information. Mental health apps offer guided meditation and stress management, and emergency medical ID features provide critical information to first responders during emergencies."
    },
    {
      id: "productivity",
      title: "Business Productivity",
      icon: Briefcase,
      brief: "Manage work tasks, attend meetings, and collaborate remotely.",
      detailed: "Mobile productivity tools enable flexible work arrangements and efficient task management. Cloud-based document editing allows real-time collaboration, video conferencing supports remote meetings, and project management apps keep teams synchronized. Calendar integration ensures schedule coordination, email access maintains communication flow, and note-taking apps capture ideas instantly. Mobile banking and payment apps streamline financial transactions, while productivity metrics help optimize work efficiency."
    },
    {
      id: "emergency",
      title: "Emergency Services",
      icon: Clock,
      brief: "Quick access to emergency services and safety features.",
      detailed: "Emergency features in smartphones can be life-saving tools. One-touch emergency calling connects to local services instantly, location sharing helps rescuers find people quickly, and emergency contacts receive automatic notifications. Medical alert apps provide critical health information to first responders, while safety check-ins notify loved ones during travels. Weather alert systems warn of dangerous conditions, and emergency backup power modes extend battery life during crises."
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
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant border-primary/20 bg-card/80 backdrop-blur-sm ${
                  isExpanded 
                    ? 'scale-110 z-10 shadow-2xl' 
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