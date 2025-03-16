
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, Book, Shield } from "lucide-react";

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4 text-primary">Phishing Education Resources</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expand your knowledge about phishing attacks and cybersecurity best practices with these carefully selected resources.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <FileText className="mr-2 h-5 w-5 text-secondary" />
                    Articles & Guides
                  </CardTitle>
                  <CardDescription>
                    Comprehensive reading materials on phishing prevention
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-medium mb-1">CISA: Avoiding Social Engineering and Phishing Attacks</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Learn how to recognize and avoid phishing attacks from the Cybersecurity and Infrastructure Security Agency.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://www.cisa.gov/topics/avoid-scams-and-fraud/avoiding-social-engineering-and-phishing" target="_blank" rel="noopener noreferrer">
                        Read Article <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium mb-1">FTC: How to Recognize and Avoid Phishing Scams</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Federal Trade Commission's guide to identifying and avoiding common phishing tactics.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" target="_blank" rel="noopener noreferrer">
                        Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">SANS Security Awareness: Phishing</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Expert resources from SANS Institute on preventing phishing attacks in organizations.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://www.sans.org/security-awareness-training/resources/phishing" target="_blank" rel="noopener noreferrer">
                        Access Resources <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Video className="mr-2 h-5 w-5 text-secondary" />
                    Videos & Training
                  </CardTitle>
                  <CardDescription>
                    Visual learning resources for better understanding
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-3">
                    <h3 className="font-medium mb-1">Google: Phishing Quiz</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Interactive quiz by Google to test your ability to identify phishing attempts.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://phishingquiz.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                        Take the Quiz <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h3 className="font-medium mb-1">KnowBe4: Phishing Training Videos</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Security awareness training videos focused on recognizing and preventing phishing attacks.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://www.knowbe4.com/free-phishing-security-test" target="_blank" rel="noopener noreferrer">
                        Watch Videos <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-1">NIST: Phishing Training and Awareness Videos</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Educational videos from the National Institute of Standards and Technology.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing" target="_blank" rel="noopener noreferrer">
                        Access Materials <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-shadow mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Book className="mr-2 h-5 w-5 text-secondary" />
                  Additional Learning Resources
                </CardTitle>
                <CardDescription>
                  Comprehensive resources for deeper understanding of cybersecurity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-1 flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-secondary" />
                      Cybersecurity Courses
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Free and paid courses to enhance your cybersecurity knowledge and skills.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li><a href="https://www.coursera.org/learn/cybersecurity-roles-processes-operating-system-security" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Coursera: Introduction to Cybersecurity</a></li>
                      <li><a href="https://www.edx.org/learn/cybersecurity" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">edX: Cybersecurity Programs</a></li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-1 flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-secondary" />
                      Government Resources
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Official cybersecurity guidance from government agencies.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li><a href="https://www.cisa.gov/stopthinkconnect" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CISA: Stop Think Connect</a></li>
                      <li><a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/spoofing-and-phishing" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FBI: Spoofing and Phishing</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
