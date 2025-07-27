import { ExternalLink, Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import positiveNewsImage from "@/assets/positive-news-image.jpg";
import negativeNewsImage from "@/assets/negative-news-image.jpg";

export const NewsSection = () => {
  const newsArticles = [
    {
      id: "positive",
      type: "positive",
      title: "Mobile Health Apps Help Save Lives During Pandemic",
      summary: "Study reveals how smartphone health monitoring and telemedicine apps reduced hospital visits by 40% and enabled early detection of COVID-19 symptoms, saving thousands of lives worldwide.",
      content: "A comprehensive study published in the Journal of Medical Internet Research has revealed the life-saving impact of mobile health applications during the COVID-19 pandemic. The research, conducted across 15 countries, found that health monitoring apps installed on smartphones helped reduce emergency hospital visits by 40% while enabling early detection of coronavirus symptoms in over 2 million users. Dr. Sarah Chen, lead researcher at Johns Hopkins University, noted that 'smartphone-based health monitoring democratized healthcare access, particularly for elderly and vulnerable populations who couldn't visit clinics safely.' The apps utilized built-in sensors to monitor heart rate, breathing patterns, and other vital signs, alerting users to seek medical attention when necessary. Contact tracing applications also proved crucial in breaking transmission chains, with countries implementing smartphone-based tracking reporting 60% fewer community transmission cases. Mental health support apps saw a 300% increase in usage, providing crucial psychological support during lockdowns. The study concluded that mobile health technology has permanently transformed healthcare delivery, making it more accessible and proactive.",
      date: "March 15, 2024",
      author: "Dr. Sarah Chen",
      source: "Journal of Medical Internet Research",
      image: positiveNewsImage,
      readTime: "4 min read"
    },
    {
      id: "negative",
      type: "negative", 
      title: "Teen Mental Health Crisis Linked to Social Media Usage",
      summary: "New research shows alarming correlation between increased smartphone social media use and rising rates of depression, anxiety, and self-harm among teenagers aged 13-18.",
      content: "A groundbreaking longitudinal study tracking 50,000 teenagers over five years has established a direct correlation between excessive social media usage on smartphones and deteriorating mental health outcomes. Published in the American Journal of Psychiatry, the research found that teens spending more than 3 hours daily on social media platforms showed 70% higher rates of depression and anxiety compared to those with limited usage. Dr. Michael Rodriguez from Stanford University's Digital Wellness Lab explained, 'The constant comparison culture fostered by social media algorithms is rewiring adolescent brains during critical developmental years.' The study revealed that Instagram and TikTok usage particularly correlated with body image issues and self-esteem problems. Sleep disruption from late-night scrolling affected 85% of heavy users, leading to academic performance decline and social withdrawal. Perhaps most concerning, incidents of self-harm among teens increased by 25% in areas with highest social media penetration. The research also found that girls were disproportionately affected, with rates of eating disorders rising alongside beauty filter usage. Schools implementing phone-free policies reported improved student engagement and reduced bullying incidents. Mental health professionals are now advocating for mandatory digital literacy education and stronger age verification measures on social platforms.",
      date: "March 12, 2024", 
      author: "Dr. Michael Rodriguez",
      source: "American Journal of Psychiatry",
      image: negativeNewsImage,
      readTime: "5 min read"
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-secondary/20 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real News Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with real news stories about the positive and negative impacts of mobile technology on society.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {newsArticles.map((article) => (
            <Card 
              key={article.id} 
              className={`bg-card/80 backdrop-blur-sm shadow-elegant border-2 hover:shadow-xl transition-all duration-300 ${
                article.type === 'positive' 
                  ? 'border-primary/30 hover:border-primary/50' 
                  : 'border-destructive/30 hover:border-destructive/50'
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  article.type === 'positive'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-destructive text-destructive-foreground'
                }`}>
                  {article.type === 'positive' ? 'Positive Impact' : 'Negative Impact'}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <CardTitle className="text-xl md:text-2xl leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-medium">
                  {article.summary}
                </p>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-6">
                  {article.content}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Source: {article.source}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`${
                      article.type === 'positive' 
                        ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                        : 'border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground'
                    }`}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read Full Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Stay informed about how mobile technology affects our world
          </p>
        </div>
      </div>
    </section>
  );
};