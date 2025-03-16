
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const phishingScenarios = [
  {
    id: "email-1",
    type: "email",
    title: "Bank Account Alert",
    content: {
      sender: "support@bankssecurity-alert.com",
      subject: "URGENT: Your account has been limited",
      body: `Dear Valued Customer,
      
We have detected unusual activity on your account. To prevent further unauthorized access, your account has been limited.

Please click the link below to verify your information and restore full access to your account:
[Verify Account Now]

This is urgent and must be completed within 24 hours to avoid account suspension.

Thank you,
Bank Security Team`,
      redFlags: [
        "The sender email domain doesn't match the official bank domain",
        "Creates urgency with threats of account suspension",
        "Generic greeting instead of using your name",
        "Requests you to click a link to verify information",
        "Contains grammatical errors and awkward phrasing"
      ]
    },
    isPhishing: true
  },
  {
    id: "web-1",
    type: "website",
    title: "Social Media Login",
    content: {
      url: "https://faceboook-login.secure-access.com/login",
      pageDescription: "A login page that looks exactly like Facebook's login page with the company logo, color scheme, and layout. The page asks for your email/phone and password.",
      redFlags: [
        "The URL is not facebook.com but a similar-looking domain",
        "The domain includes hyphens and unnecessary words",
        "Using 'secure-access' in the URL is a common phishing tactic",
        "The page may have small visual inconsistencies compared to the real site",
        "The connection might not use HTTPS or have a valid certificate"
      ]
    },
    isPhishing: true
  },
  {
    id: "mobile-1",
    type: "mobile",
    title: "Camera Access Request",
    content: {
      appName: "FilterFun Pro",
      requestMessage: "FilterFun Pro would like to access your camera to apply cool photo effects. Allow camera access?",
      context: "You received a link to this app via text message from an unknown number saying you were selected to try a premium photo editing app for free.",
      redFlags: [
        "The app request came from an unsolicited text message",
        "The free premium offer seems too good to be true",
        "The app immediately requests camera access before showing any functionality",
        "The app wasn't downloaded from an official app store",
        "The message creates excitement about free premium features"
      ]
    },
    isPhishing: true
  },
  {
    id: "email-2",
    type: "email",
    title: "Order Confirmation",
    content: {
      sender: "orders@amazon.com",
      subject: "Your Amazon.com order #402-5798231-4563901",
      body: `Hello,

Thank you for your order. We'll send a confirmation when your item ships.

Order Details:
MacBook Pro 16" - $2,499.99
Expected delivery: June 15, 2023

If you have questions about your order, you can visit our Help Center.

Sincerely,
Customer Service
Amazon.com`,
      redFlags: []
    },
    isPhishing: false
  },
  {
    id: "web-2",
    type: "website",
    title: "Payment Portal",
    content: {
      url: "https://pay.paypal.com/checkout",
      pageDescription: "PayPal's standard checkout page asking you to confirm payment details for an online purchase. The site has PayPal's logo, color scheme, and security indicators.",
      redFlags: []
    },
    isPhishing: false
  }
];

const Simulator = () => {
  const { toast } = useToast();
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completedScenarios, setCompletedScenarios] = useState(0);

  const currentScenario = phishingScenarios[currentScenarioIndex];

  const handleAnswer = (isPhishingAnswer: boolean) => {
    setSelectedAnswer(isPhishingAnswer);
    setShowFeedback(true);
    
    if (isPhishingAnswer === currentScenario.isPhishing) {
      setCorrectAnswers(correctAnswers + 1);
      toast({
        title: "Correct!",
        description: currentScenario.isPhishing 
          ? "You successfully identified a phishing attempt!" 
          : "Good job! This is indeed legitimate.",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: currentScenario.isPhishing 
          ? "This was actually a phishing attempt." 
          : "This was actually legitimate.",
        variant: "destructive",
      });
    }
    
    setCompletedScenarios(completedScenarios + 1);
  };

  const nextScenario = () => {
    if (currentScenarioIndex < phishingScenarios.length - 1) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // All scenarios completed
      toast({
        title: "Simulation Completed!",
        description: `You correctly identified ${correctAnswers} out of ${phishingScenarios.length} scenarios.`,
      });
    }
  };

  const resetSimulation = () => {
    setCurrentScenarioIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCorrectAnswers(0);
    setCompletedScenarios(0);
  };

  const renderEmailContent = () => {
    const { sender, subject, body } = currentScenario.content as any;
    return (
      <div className="border rounded-md">
        <div className="border-b p-4 bg-gray-50">
          <div><span className="font-medium">From:</span> {sender}</div>
          <div><span className="font-medium">Subject:</span> {subject}</div>
        </div>
        <div className="p-4 whitespace-pre-line">{body}</div>
      </div>
    );
  };

  const renderWebsiteContent = () => {
    const { url, pageDescription } = currentScenario.content as any;
    return (
      <div className="border rounded-md">
        <div className="border-b p-2 bg-gray-50 flex items-center">
          <div className="flex items-center bg-white rounded px-2 py-1 text-sm text-gray-600 flex-1 mr-2">
            {url}
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="border border-dashed border-gray-300 rounded-md p-8 text-center text-gray-500">
            [Website Preview: {pageDescription}]
          </div>
        </div>
      </div>
    );
  };

  const renderMobileContent = () => {
    const { appName, requestMessage, context } = currentScenario.content as any;
    return (
      <div>
        <div className="mb-4 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600 mb-2">
            <Info className="h-4 w-4 inline mr-1" />
            Context: {context}
          </p>
        </div>
        <div className="border rounded-md max-w-xs mx-auto">
          <div className="border-b p-2 bg-gray-100 flex justify-center">
            <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <div className="p-4">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📱</span>
              </div>
              <div className="font-medium">{appName}</div>
            </div>
            <div className="bg-white border rounded-lg p-4 text-center">
              <p className="mb-4">{requestMessage}</p>
              <div className="flex justify-center space-x-2">
                <button className="px-4 py-1 bg-gray-200 rounded text-sm">Don't Allow</button>
                <button className="px-4 py-1 bg-blue-500 text-white rounded text-sm">Allow</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderScenarioContent = () => {
    switch (currentScenario.type) {
      case "email":
        return renderEmailContent();
      case "website":
        return renderWebsiteContent();
      case "mobile":
        return renderMobileContent();
      default:
        return <div>Unknown scenario type</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Phishing Simulator</h1>
            <p className="text-lg text-gray-600">
              Test your ability to identify phishing attempts in a safe environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-4 bg-primary text-white flex justify-between items-center">
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Simulation Exercise</span>
              </div>
              <div className="text-sm">
                Scenario {currentScenarioIndex + 1} of {phishingScenarios.length}
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{currentScenario.title}</h2>
                <p className="text-gray-600 mb-4">
                  Examine the {currentScenario.type} below and decide if it's legitimate or a phishing attempt.
                </p>
              </div>
              
              <div className="mb-8">
                {renderScenarioContent()}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => handleAnswer(false)}
                  disabled={showFeedback}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Legitimate
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                  onClick={() => handleAnswer(true)}
                  disabled={showFeedback}
                >
                  <XCircle className="h-5 w-5 mr-2" />
                  Phishing Attempt
                </Button>
              </div>
              
              {showFeedback && (
                <div className={`rounded-lg p-4 mb-6 ${currentScenario.isPhishing ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'}`}>
                  <h3 className="font-bold flex items-center mb-2">
                    {currentScenario.isPhishing ? (
                      <>
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        This is a PHISHING attempt!
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        This is LEGITIMATE
                      </>
                    )}
                  </h3>
                  
                  {currentScenario.isPhishing && currentScenario.content.redFlags && (
                    <div className="mt-2">
                      <h4 className="font-medium mb-1">Red Flags to Notice:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {currentScenario.content.redFlags.map((flag: string, index: number) => (
                          <li key={index}>{flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-end">
                    <Button onClick={nextScenario}>
                      {currentScenarioIndex < phishingScenarios.length - 1 ? "Next Scenario" : "Complete Simulation"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-2">
                  <span>Scenarios Completed</span>
                  <span className="font-medium">{completedScenarios} of {phishingScenarios.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${(completedScenarios / phishingScenarios.length) * 100}%` }}
                  />
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span>Correct Answers</span>
                  <span className="font-medium">{correctAnswers} of {completedScenarios}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${completedScenarios > 0 ? 'bg-green-500' : 'bg-gray-300'}`}
                    style={{ width: completedScenarios > 0 ? `${(correctAnswers / completedScenarios) * 100}%` : '0%' }}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={resetSimulation} className="ml-auto">
                  Reset Simulation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Simulator;
