
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, AlertTriangle, RotateCw, Eye, Fingerprint, Check } from "lucide-react";

type QuizQuestion = {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  imageUrl?: string;
};

type QuizResult = {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
};

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of the following is a common sign of a phishing email?",
    options: [
      { id: "a", text: "Contains your full name", isCorrect: false },
      { id: "b", text: "Sent from someone in your contacts", isCorrect: false },
      { id: "c", text: "Creates a sense of urgency or threat", isCorrect: true },
      { id: "d", text: "Includes the company's official logo", isCorrect: false }
    ],
    explanation: "Phishing emails often create a false sense of urgency to pressure you into acting quickly without thinking. They may claim your account will be closed, you'll face legal action, or you'll miss out on something important if you don't respond immediately."
  },
  {
    id: 2,
    question: "What should you do if you receive an unexpected email asking you to confirm your password?",
    options: [
      { id: "a", text: "Click the link and enter your current password to verify", isCorrect: false },
      { id: "b", text: "Reply directly to the email with your password", isCorrect: false },
      { id: "c", text: "Call the company using a phone number from their official website", isCorrect: true },
      { id: "d", text: "Enter a fake password to see what happens", isCorrect: false }
    ],
    explanation: "Never click on links in suspicious emails or provide passwords. Instead, contact the company directly through their official phone number or website that you find independently, not through the email."
  },
  {
    id: 3,
    question: "Which of these URLs is most likely to be a phishing attempt?",
    options: [
      { id: "a", text: "https://www.paypal.com/account/login", isCorrect: false },
      { id: "b", text: "https://www.paypa1.com/account/signin", isCorrect: true },
      { id: "c", text: "https://accounts.paypal.com/signin", isCorrect: false },
      { id: "d", text: "https://paypal.com/login", isCorrect: false }
    ],
    explanation: "The URL 'paypa1.com' uses the number '1' instead of the letter 'l' in 'paypal' - a common trick in phishing URLs. Always check URLs carefully for misspellings, substituted characters, or unexpected domains."
  },
  {
    id: 4,
    question: "What is a primary goal of the BlackEye phishing tool?",
    options: [
      { id: "a", text: "To install ransomware on your computer", isCorrect: false },
      { id: "b", text: "To create clones of legitimate websites to steal credentials", isCorrect: true },
      { id: "c", text: "To intercept Wi-Fi traffic", isCorrect: false },
      { id: "d", text: "To hack into security cameras", isCorrect: false }
    ],
    explanation: "BlackEye is a tool used to create convincing replicas of popular websites like banking portals and social media. When victims enter their credentials on these fake pages, their login information is sent to the attacker."
  },
  {
    id: 5,
    question: "What should you be suspicious of when a website unexpectedly asks for camera access?",
    options: [
      { id: "a", text: "It might be using CamPhish techniques to spy on you", isCorrect: true },
      { id: "b", text: "The website is trying to improve your user experience", isCorrect: false },
      { id: "c", text: "Your camera is malfunctioning", isCorrect: false },
      { id: "d", text: "The website is verifying you're not a robot", isCorrect: false }
    ],
    explanation: "Unexpected camera access requests could be a sign of CamPhish techniques. Legitimate websites typically only ask for camera access for specific functions like video calls, and explain clearly why they need this permission."
  },
  {
    id: 6,
    question: "What is the safest action when you receive an unexpected email attachment?",
    options: [
      { id: "a", text: "Open it to see what it contains", isCorrect: false },
      { id: "b", text: "Open it only if it's a PDF or image file", isCorrect: false },
      { id: "c", text: "Scan it with antivirus before opening", isCorrect: false },
      { id: "d", text: "Verify with the sender through a different channel before opening", isCorrect: true }
    ],
    explanation: "Even if an email appears to come from someone you know, it's best to verify through a different channel (like a phone call) before opening unexpected attachments, as email addresses can be spoofed and malware can be disguised as any file type."
  },
  {
    id: 7,
    question: "Which of these is a strong cybersecurity practice?",
    options: [
      { id: "a", text: "Using the same password for all accounts so you remember it", isCorrect: false },
      { id: "b", text: "Writing passwords down on sticky notes near your computer", isCorrect: false },
      { id: "c", text: "Using multi-factor authentication when available", isCorrect: true },
      { id: "d", text: "Clicking 'Remember me' on public computers", isCorrect: false }
    ],
    explanation: "Multi-factor authentication adds an extra layer of security by requiring something you know (password) and something you have (like a code sent to your phone), making it much harder for attackers to gain access to your accounts."
  },
  {
    id: 8,
    question: "What should you check before entering sensitive information on a website?",
    options: [
      { id: "a", text: "That the website has a professional design", isCorrect: false },
      { id: "b", text: "That the URL starts with 'https://' and shows a padlock icon", isCorrect: true },
      { id: "c", text: "That the website has a privacy policy", isCorrect: false },
      { id: "d", text: "That the website loads quickly", isCorrect: false }
    ],
    explanation: "The 'https://' prefix and padlock icon indicate that the connection to the website is encrypted. While this doesn't guarantee the site is legitimate, it does ensure that the data you send is protected from interception."
  },
  {
    id: 9,
    question: "Why do phishers often create a sense of urgency in their messages?",
    options: [
      { id: "a", text: "To help you resolve problems quickly", isCorrect: false },
      { id: "b", text: "To prevent their servers from overloading", isCorrect: false },
      { id: "c", text: "To make you act before you have time to think critically", isCorrect: true },
      { id: "d", text: "To test your response time", isCorrect: false }
    ],
    explanation: "Creating urgency is a psychological tactic to pressure victims into making hasty decisions without proper verification. When you feel rushed, you're less likely to notice warning signs of a scam."
  },
  {
    id: 10,
    question: "What is 'spear phishing'?",
    options: [
      { id: "a", text: "Sending thousands of generic phishing emails hoping some will work", isCorrect: false },
      { id: "b", text: "Targeted phishing attacks customized for specific individuals or organizations", isCorrect: true },
      { id: "c", text: "Phishing during certain seasons when people are more vulnerable", isCorrect: false },
      { id: "d", text: "Attacks specifically targeting financial institutions", isCorrect: false }
    ],
    explanation: "Spear phishing involves highly targeted attacks that use personal information about the victim to create more convincing deceptions. These attacks may reference your colleagues, recent activities, or specific details about your work to appear legitimate."
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (selectedOption === null) {
      setSelectedOption(optionId);
      
      const currentQuestion = quizQuestions[currentQuestionIndex];
      const isCorrect = currentQuestion.options.find(opt => opt.id === optionId)?.isCorrect || false;
      
      setResults([...results, {
        questionId: currentQuestion.id,
        selectedOptionId: optionId,
        isCorrect
      }]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setResults([]);
    setQuizCompleted(false);
  };

  const getCorrectAnswersCount = () => {
    return results.filter(result => result.isCorrect).length;
  };

  const getScorePercentage = () => {
    return (getCorrectAnswersCount() / quizQuestions.length) * 100;
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Excellent! You're well-prepared to identify phishing attempts.";
    if (percentage >= 70) return "Good job! You have a solid understanding of phishing techniques.";
    if (percentage >= 50) return "Not bad, but there's room for improvement in your phishing awareness.";
    return "You should review the phishing materials and try again to better protect yourself.";
  };

  const getScoreColor = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <Card className="max-w-3xl mx-auto card-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Quiz Completed!</CardTitle>
                  <CardDescription>
                    You answered {getCorrectAnswersCount()} out of {quizQuestions.length} questions correctly.
                  </CardDescription>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 text-center">Your Score</h3>
                  <div className="flex justify-center mb-4">
                    <div className={`text-4xl font-bold ${getScoreColor()}`}>
                      {getScorePercentage().toFixed(0)}%
                    </div>
                  </div>
                  <p className="text-center text-gray-700">{getScoreMessage()}</p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Result Breakdown</h3>
                    <div className="space-y-4">
                      {results.map((result, index) => {
                        const question = quizQuestions.find(q => q.id === result.questionId);
                        return (
                          <div key={index} className="p-4 rounded-lg border bg-white">
                            <div className="flex items-start">
                              {result.isCorrect ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              ) : (
                                <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                              )}
                              <div>
                                <p className="font-medium">
                                  Question {index + 1}: {question?.question}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  Your answer: {question?.options.find(o => o.id === result.selectedOptionId)?.text}
                                </p>
                                {!result.isCorrect && (
                                  <p className="text-sm text-green-600 mt-1">
                                    Correct answer: {question?.options.find(o => o.isCorrect)?.text}
                                  </p>
                                )}
                                <p className="text-sm text-gray-700 mt-2 bg-gray-50 p-2 rounded">
                                  {question?.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <Button onClick={resetQuiz} className="flex items-center">
                    <RotateCw className="mr-2 h-4 w-4" />
                    Restart Quiz
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/learn">
                      Learn More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto card-shadow">
            <CardContent className="pt-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {progress.toFixed(0)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedOption === option.id;
                    const showCorrect = selectedOption !== null;
                    
                    let optionClass = "p-4 rounded-lg border hover:border-primary cursor-pointer transition-colors";
                    
                    if (isSelected) {
                      optionClass += option.isCorrect 
                        ? " border-green-500 bg-green-50" 
                        : " border-red-500 bg-red-50";
                    } else if (showCorrect && option.isCorrect) {
                      optionClass += " border-green-500 bg-green-50";
                    } else if (showCorrect) {
                      optionClass += " opacity-60";
                    }

                    return (
                      <div 
                        key={option.id}
                        className={optionClass}
                        onClick={() => handleOptionSelect(option.id)}
                      >
                        <div className="flex items-center">
                          <div className="mr-3 flex-shrink-0">
                            {showCorrect ? (
                              option.isCorrect ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              ) : isSelected ? (
                                <XCircle className="h-5 w-5 text-red-500" />
                              ) : (
                                <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                              )
                            ) : (
                              <div className={`w-5 h-5 rounded-full border ${isSelected ? 'bg-primary border-primary' : 'border-gray-300'}`}></div>
                            )}
                          </div>
                          <div>{option.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedOption && (
                <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Explanation</h4>
                      <p className="text-sm text-gray-600">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button 
                  onClick={handleNextQuestion} 
                  disabled={selectedOption === null}
                >
                  {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "Complete Quiz"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
