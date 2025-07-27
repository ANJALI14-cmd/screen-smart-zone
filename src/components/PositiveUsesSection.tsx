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
      id: "photography",
      title: "Digital Photography",
      icon: Camera,
      brief: "Capture and share life's precious moments with high-quality cameras.",
      detailed: "Smartphone cameras have democratized photography, making it accessible to everyone. High-resolution sensors capture professional-quality images, while AI-enhanced features automatically optimize photos. Cloud storage preserves memories indefinitely, and instant sharing spreads joy to loved ones. Document scanning apps digitize important papers, QR code readers provide quick information access, and augmented reality filters create engaging content for social media and communication."
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
      id: "education",
      title: "Educational Access",
      icon: GraduationCap,
      brief: "Access unlimited learning resources and educational content.",
      detailed: "Smartphones have democratized education by providing access to vast learning resources. Online courses offer skill development opportunities, language learning apps facilitate multilingual communication, and educational videos explain complex concepts visually. Digital libraries provide access to countless books and research papers, while study apps help organize learning schedules. Virtual field trips explore distant places, and educational games make learning engaging for children and adults alike."
    },
    {
      id: "social",
      title: "Social Connection",
      icon: Users,
      brief: "Build communities and maintain social relationships digitally.",
      detailed: "Social networking apps help build and maintain meaningful relationships across distances. Community platforms connect people with shared interests, support groups provide emotional assistance, and professional networks facilitate career development. Social media keeps friends updated on life events, while dating apps help people find romantic connections. Online forums provide platforms for knowledge sharing, and social activism apps enable coordinated community action for positive change."
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
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant border-primary/20 ${
                  isExpanded 
                    ? 'fixed inset-4 z-50 overflow-auto animate-zoom-in bg-card' 
                    : 'hover:scale-105 bg-card/80 backdrop-blur-sm'
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
                  <p className={`text-muted-foreground ${isExpanded ? 'text-lg leading-relaxed' : 'text-sm'} transition-all duration-300`}>
                    {isExpanded ? use.detailed : use.brief}
                  </p>
                  
                  {!isExpanded && (
                    <p className="text-xs text-primary mt-3 font-medium">
                      Click to read more →
                    </p>
                  )}
                  
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