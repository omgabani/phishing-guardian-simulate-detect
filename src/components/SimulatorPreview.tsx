
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardFooter, CardHeader, Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

const SimulatorPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Phishing Simulator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Test your ability to identify phishing attempts with our interactive simulator.
            Practice in a safe environment and learn from mistakes without real-world consequences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="overflow-hidden border-2 border-secondary/20 card-shadow">
              <CardHeader className="p-6 bg-secondary/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center bg-white rounded px-2 py-1 text-xs text-gray-600">
                    <AlertCircle className="h-3 w-3 text-alertred mr-1" />
                    Simulation Mode
                  </div>
                </div>
                <div className="bg-white rounded p-2 text-sm truncate font-mono text-gray-700">
                  https://mybank-secure-login.com/account
                </div>
              </CardHeader>
              <div className="p-6">
                <div className="mb-6">
                  <img 
                    src="https://placehold.co/600x200/19A7CE/FFFFFF/png?text=Bank+Login+Form" 
                    alt="Simulated phishing page" 
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username/Email</label>
                      <div className="h-10 rounded-md border bg-gray-50 px-3"></div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <div className="h-10 rounded-md border bg-gray-50 px-3"></div>
                    </div>
                    <Button variant="default" className="w-full">Login to Account</Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <XCircle className="mr-1 h-4 w-4 text-alertred" />
                    Phishing Site
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                    Legitimate Site
                  </Button>
                </div>
              </div>
              <CardFooter className="bg-gray-50 p-4 text-sm">
                Can you spot the signs of a phishing attempt in this example?
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Test Your Phishing Detection Skills</h3>
              <p className="text-gray-600 mb-4">
                Our simulator presents realistic scenarios based on real-world phishing techniques including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span>Simulated BlackEye phishing pages targeting popular websites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span>Mock CamPhish camera access attempts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span>Suspicious email identification challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span>URL and domain authenticity verification exercises</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/simulator">Try the Simulator</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/learn">Learn More First</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorPreview;
