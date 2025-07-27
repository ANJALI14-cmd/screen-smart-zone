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
      detailed: "Smartphone addiction, or nomophobia, affects millions worldwide. Constant notifications trigger dopamine releases, creating addictive cycles similar to gambling. Users experience anxiety when separated from devices, leading to phantom vibration syndrome. Sleep patterns suffer from blue light exposure and bedtime scrolling. Social media algorithms exploit psychological vulnerabilities, keeping users engaged for hours. The average person checks their phone 96 times daily, often unconsciously, disrupting focus and productivity throughout the day."
    },
    {
      id: "privacy",
      title: "Privacy Concerns",
      icon: Shield,
      brief: "Personal data collection and surveillance threaten individual privacy.",
      detailed: "Mobile devices collect vast amounts of personal data, including location history, browsing habits, contacts, and communication patterns. Apps often request excessive permissions, accessing cameras, microphones, and personal files unnecessarily. Data breaches expose sensitive information to criminals, while government surveillance programs monitor citizens without consent. Location tracking enables stalking and harassment, and facial recognition technology eliminates anonymity in public spaces. Third-party data brokers sell personal information without user knowledge or consent."
    },
    {
      id: "distraction",
      title: "Attention Disruption",
      icon: Brain,
      brief: "Constant notifications and multitasking reduce focus and cognitive performance.",
      detailed: "Smartphone notifications fragment attention spans, reducing productivity and increasing errors. The average office worker checks email every 6 minutes, preventing deep focus states necessary for creative and analytical work. Multitasking between devices and tasks reduces cognitive efficiency by up to 40%. Students using phones during lectures show significantly lower comprehension and retention rates. The constant availability of entertainment and information creates an expectation of instant gratification, reducing patience and perseverance for challenging tasks."
    },
    {
      id: "social-isolation",
      title: "Social Isolation",
      icon: Users,
      brief: "Excessive screen time can reduce face-to-face social interactions.",
      detailed: "Paradoxically, devices designed to connect us can create social isolation. People increasingly choose digital communication over in-person interactions, leading to reduced empathy and social skills. 'Phubbing' (phone snubbing) damages relationships and reduces conversation quality. Social media creates curated realities that promote comparison and inadequacy feelings. Virtual relationships may lack the depth and authenticity of face-to-face connections, leading to loneliness despite constant digital contact. Children show delayed social development when excessive screen time replaces human interaction."
    },
    {
      id: "health-issues",
      title: "Physical Health Problems",
      icon: Eye,
      brief: "Prolonged use causes eye strain, neck pain, and sleep disorders.",
      detailed: "Extended smartphone use causes 'tech neck' from looking down, leading to cervical spine problems and chronic pain. Blue light exposure disrupts circadian rhythms, causing insomnia and sleep quality deterioration. Digital eye strain results in dry eyes, blurred vision, and headaches from prolonged screen focus. Repetitive strain injuries affect thumbs and wrists from excessive typing and swiping. Sedentary behavior increases when physical activities are replaced by screen time, contributing to obesity and cardiovascular problems. Poor posture during device use creates long-term musculoskeletal issues."
    },
    {
      id: "dangerous-use",
      title: "Dangerous Usage",
      icon: Car,
      brief: "Using phones while driving or in hazardous situations increases accident risk.",
      detailed: "Distracted driving due to phone use causes thousands of accidents annually, with texting while driving being six times more dangerous than drunk driving. Pedestrians using phones experience 'inattentional blindness,' walking into traffic or obstacles. Taking selfies in dangerous locations has resulted in numerous deaths and injuries. Phone use during medical procedures or in hazardous work environments creates safety risks. Emergency situations may be worsened when people prioritize filming over helping victims or evacuating safely."
    },
    {
      id: "cyberbullying",
      title: "Cyberbullying Platform",
      icon: AlertTriangle,
      brief: "Mobile devices enable harassment, trolling, and online abuse.",
      detailed: "Smartphones provide 24/7 access for cyberbullies to harass victims through multiple platforms and apps. Anonymous messaging enables cruel behavior without consequences, while screenshot sharing spreads humiliation permanently. Group harassment campaigns coordinate attacks on individuals, causing severe psychological damage. Revenge sharing of private images destroys reputations and relationships. Online harassment follows victims home, eliminating safe spaces that previously existed offline. Younger users are particularly vulnerable to cyberbullying, with serious mental health consequences including depression and suicide ideation."
    },
    {
      id: "misinformation",
      title: "Misinformation Spread",
      icon: Brain,
      brief: "Easy sharing of false information contributes to societal problems.",
      detailed: "Mobile devices facilitate rapid misinformation spread through social media shares and messaging apps. Confirmation bias algorithms show users content that reinforces existing beliefs, creating echo chambers and polarization. Fake news spreads six times faster than true news on social platforms, influencing elections and public health decisions. Deep fake technology enables convincing video and audio manipulation, making truth increasingly difficult to discern. Conspiracy theories find new audiences through targeted advertising and recommendation algorithms, undermining trust in legitimate institutions and scientific consensus."
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
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant border-destructive/20 ${
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
                    <Icon className={`${isExpanded ? 'h-8 w-8' : 'h-6 w-6'} text-destructive transition-all duration-300`} />
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
                    <p className="text-xs text-destructive mt-3 font-medium">
                      Click to read more →
                    </p>
                  )}
                  
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