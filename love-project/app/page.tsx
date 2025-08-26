"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Star, Flower2, Crown, Gift } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "I am so happy every time I talk to you",
    subtitle:
      "",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 2,
    question: "For Me You are Perfect",
    subtitle:
      "",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 3,
    question: "You are the one I want to talk To Every Day😊",
    subtitle:
      "",
    icon: <Star className="w-8 h-8" />,
  },
  {
    id: 4,
    question:
      "You are the person That I don't want to lose😄",
    subtitle:
      "",
    icon: <Crown className="w-8 h-8" />,
  },
  {
    id: 5,
    question: "You are always Beautiful",
    subtitle:
      "",
    icon: <Gift className="w-8 h-8" />,
  },
  {
    id: 6,
    question: "<<I Love YOU>>",
    subtitle:
      "",
    icon: <Gift className="w-8 h-8" />,
  },

];

const RosePetal = ({ delay }: { delay: number }) => (
  <div
    className="absolute animate-rose-petal-fall"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${5 + Math.random() * 4}s`,
    }}
  >
    <Flower2 className="w-4 h-4 text-pink-400/60" />
  </div>
);

const FloatingHeart = ({ delay, size }: { delay: number; size: string }) => (
  <Heart
    className={`absolute text-rose-300/40 animate-float ${size}`}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${5 + Math.random() * 2}s`,
    }}
  />
);

export default function ProposalPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [showProposal, setShowProposal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowQuestion(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleQuestionAnswer = (questionId: number) => {
    setAnsweredQuestions((prev) => [...prev, questionId]);

    if (questionId === 6) {
      setShowProposal(true);
      setShowConfetti(true);
    }
  };

  const handleProposalAnswer = (answer: "yes" | "maybe") => {
    if (answer === "yes") {
      setShowCelebration(true);
      setShowConfetti(true);
    }
  };

  if (showProposal) {
    return (
      <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <RosePetal key={i} delay={Math.random() * 5} />
          ))}
        </div>

        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {i % 3 === 0 ? (
                  <Heart className="w-3 h-3 text-rose-500 fill-current" />
                ) : i % 3 === 1 ? (
                  <Star className="w-3 h-3 text-pink-500 fill-current" />
                ) : (
                  <Sparkles className="w-3 h-3 text-purple-500" />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <FloatingHeart
              key={i}
              delay={Math.random() * 3}
              size={i % 3 === 0 ? "w-6 h-6" : "w-4 h-4"}
            />
          ))}
        </div>

        <Card className="max-w-3xl w-full glass-card shadow-2xl animate-love-burst border-2 border-rose-200/50">
          <CardContent className="p-8 md:p-16 text-center relative">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 animate-pulse-glow flex items-center justify-center">
                <span className="text-2xl">💍</span>
              </div>
            </div>

            <div className="mt-16 mb-8">
              <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight animate-text-glow">
                Will You Marry Me?
              </h1>

              <div className="space-y-6 mb-12">
                <p className="text-xl md:text-md text-gray-700 leading-relaxed font-light">
                  You are my everything, my best friend, my soulmate, and my
                  greatest love.
                  <span className="font-medium text-rose-600">
                    {" "}
                    I can’t imagine a single moment of my future without you by my side.
                  </span>
                </p>

                <p className="text-lg md:text-md text-gray-600 leading-relaxed">
                  With you, every day feels brighter, every moment becomes more meaningful, and every dream turns more beautiful. In your love, I’ve found my home, my peace, and my forever.
                </p>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  I promise to love you unconditionally, to stand beside you in every challenge, to celebrate your every victory, and to hold your hand through every journey life brings.
                  <span className="font-medium text-pink-600">
                    {" "}
                    You are not just my love, you are my destiny.
                  </span>
                </p>
                <p className="font-medium text-pink-600">Today, I ask you from the deepest part of my heart — will you be mine, not just for today, but for always? 💍❤️</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                onClick={() => handleProposalAnswer("yes")}
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 animate-gentle-bounce border-2 border-white/20"
              >
                <Heart className="w-6 h-6 mr-3 fill-current animate-heartbeat" />
                Yes, Forever! 💍
              </Button>
            </div>

            {showCelebration && (
              <div className="animate-love-burst">
                <div className="flex justify-center space-x-3 mb-6">
                  {[...Array(7)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current animate-sparkle"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <p className="text-2xl font-bold text-rose-600 animate-text-glow">
                  🎉 Thank you for trusting me, I’ll spend my whole life proving that you made the right choice.🎉
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen romantic-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <RosePetal key={`petal-${i}`} delay={Math.random() * 8} />
        ))}
        {[...Array(20)].map((_, i) => (
          <FloatingHeart
            key={`heart-${i}`}
            delay={Math.random() * 4}
            size="w-5 h-5"
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-3xl w-full">
          {currentStep === 0 && (
            <div
              className={`text-center transition-all duration-1500 ${
                showQuestion
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-12">
                <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight animate-text-glow">
                  Meeting You was a Nice Accident
                </h1>
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full mb-8 animate-pulse-glow shadow-2xl">
                  <Heart className="w-16 h-16 text-rose-600 fill-current animate-heartbeat" />
                </div>

                {/* <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight animate-text-glow">
                  Aayu
                </h1> */}

                <p className="text-xl md:text-md text-gray-700 mb-6 leading-relaxed font-semibold">
                  Aayu Temi lai tha nai xa, I Love You. But you don’t know how much I love you. Maile tmlai derai hurt garaxu but Aayu Promise Temi maya bayek aru kei feel garaudina aba. hehe
                </p>

                <p className="text-xs md:text-sm text-gray-600 mb-12 leading-relaxed flex flex-col"></p>
              </div>

              <Button
                onClick={() => setCurrentStep(1)}
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 cursor-pointer hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 animate-gentle-bounce"
              >
                <Heart className="w-6 h-6 mr-3 fill-current animate-heartbeat" />
                Next ❤️
              </Button>
            </div>
          )}

          {currentStep > 0 && currentStep <= questions.length && (
            <Card className="glass-card shadow-2xl animate-fade-in-up border-2 border-rose-200/50">
              <CardContent className="p-8 md:p-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full mb-8 animate-pulse-glow shadow-xl">
                    <div className="text-rose-600">
                      {questions[currentStep - 1].icon}
                    </div>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
                    {questions[currentStep - 1].question}
                  </h2>

                  <p className="text-xs md:text-sm text-gray-600 font-semibold mb-12 leading-relaxed">
                    {questions[currentStep - 1].subtitle}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Button
                    onClick={() => {
                      handleQuestionAnswer(questions[currentStep - 1].id);
                      if (currentStep < questions.length) {
                        setTimeout(() => setCurrentStep(currentStep + 1), 1000);
                      }
                    }}
                    size="lg"
                    className="bg-gradient-to-r cursor-pointer from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    Next
                    <Heart className="w-5 h-5 mr-2 fill-current" />
                  </Button>
                </div>

                <div className="flex justify-center space-x-4">
                  {questions.map((question, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                        index < currentStep
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                          : index === currentStep - 1
                          ? "bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg animate-pulse-glow"
                          : "bg-rose-100 text-rose-300"
                      }`}
                    >
                      {index < currentStep ? (
                        <Heart className="w-5 h-5 fill-current" />
                      ) : (
                        <span className="text-sm font-bold">{index + 1}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
