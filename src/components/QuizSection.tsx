import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Smartphone, CheckCircle, AlertCircle, Info } from "lucide-react";

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How often do you check your phone without any specific reason?",
      options: [
        { text: "Rarely or never", value: 0 },
        { text: "A few times a day", value: 1 },
        { text: "Several times an hour", value: 2 },
        { text: "Constantly throughout the day", value: 3 }
      ]
    },
    {
      question: "How do you feel when your phone battery dies or you forget your phone?",
      options: [
        { text: "Relieved and free", value: 0 },
        { text: "Slightly inconvenienced", value: 1 },
        { text: "Anxious and worried", value: 2 },
        { text: "Panicked and desperate", value: 3 }
      ]
    },
    {
      question: "Do you use your phone during meals or social gatherings?",
      options: [
        { text: "Never, I keep it away", value: 0 },
        { text: "Only for emergencies", value: 1 },
        { text: "Sometimes when bored", value: 2 },
        { text: "Frequently, even mid-conversation", value: 3 }
      ]
    },
    {
      question: "How much time do you spend on your phone daily?",
      options: [
        { text: "Less than 2 hours", value: 0 },
        { text: "2-4 hours", value: 1 },
        { text: "4-8 hours", value: 2 },
        { text: "More than 8 hours", value: 3 }
      ]
    },
    {
      question: "Do you check your phone first thing in the morning or last thing at night?",
      options: [
        { text: "Neither, I have phone-free mornings/nights", value: 0 },
        { text: "Occasionally", value: 1 },
        { text: "Usually one or the other", value: 2 },
        { text: "Always both", value: 3 }
      ]
    }
  ];

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    const answerValue = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);
    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + answer, 0);
  };

  const getResultData = (score: number) => {
    if (score <= 3) {
      return {
        level: "Healthy Usage",
        color: "text-green-600",
        icon: CheckCircle,
        description: "Great job! You have a healthy relationship with your phone. You use it as a tool without letting it control your life.",
        suggestions: [
          "Continue maintaining phone-free times",
          "Keep up your balanced digital habits",
          "Be a positive example for others"
        ]
      };
    } else if (score <= 8) {
      return {
        level: "Moderate Concern",
        color: "text-yellow-600",
        icon: Info,
        description: "You show some signs of phone dependency. Consider making small changes to improve your digital wellness.",
        suggestions: [
          "Set specific times for phone-free activities",
          "Turn off non-essential notifications",
          "Try the 20-20-20 rule for screen breaks"
        ]
      };
    } else {
      return {
        level: "High Risk of Addiction",
        color: "text-red-600",
        icon: AlertCircle,
        description: "Your phone usage patterns suggest a high risk of addiction. Consider taking active steps to reduce dependency.",
        suggestions: [
          "Implement digital detox periods",
          "Use app timers and restrictions",
          "Seek support from friends, family, or professionals"
        ]
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const score = calculateScore();
  const resultData = getResultData(score);
  const ResultIcon = resultData.icon;

  if (showResults) {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-accent/5 to-primary/5 flex items-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-elegant border-border/50">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <ResultIcon className={`h-16 w-16 ${resultData.color}`} />
              </div>
              <CardTitle className="text-3xl mb-4">Quiz Results</CardTitle>
              <p className="text-lg text-muted-foreground">
                Your score: <span className="font-bold">{score}/15</span>
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-3 ${resultData.color}`}>
                  {resultData.level}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {resultData.description}
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-foreground">Recommendations:</h4>
                <ul className="space-y-2">
                  {resultData.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Button onClick={resetQuiz} className="bg-gradient-primary">
                  Take Quiz Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-accent/5 to-primary/5 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Smartphone className="h-16 w-16 mx-auto text-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Are You Addicted to Your Phone?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take this quick assessment to evaluate your phone usage patterns and digital wellness.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm shadow-elegant border-border/50">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-xl">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="mb-4" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h3 className="text-lg font-medium leading-relaxed">
              {questions[currentQuestion].question}
            </h3>
            
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === ""}
                className="bg-gradient-primary"
              >
                {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};