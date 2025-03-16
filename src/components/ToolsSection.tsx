
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";

const ToolsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Understanding Phishing Tools</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about the common tools used by attackers to create phishing campaigns. 
            Knowledge of these techniques helps you better identify and avoid falling victim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle className="text-xl mb-2">BlackEye</CardTitle>
              <CardDescription className="text-gray-600">
                A tool that creates fake login pages that look identical to legitimate websites.
              </CardDescription>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                  <p className="text-sm text-gray-600">
                    BlackEye creates clones of popular websites like banking portals, email services, 
                    and social media. When victims enter their credentials, the information is sent to 
                    the attacker while the victim is redirected to the real site.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-gray-900 mb-1">Warning signs</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>Incorrect or suspicious URLs (e.g., faceb00k.com)</li>
                    <li>HTTP instead of HTTPS connections</li>
                    <li>Subtle differences in page layout or logos</li>
                    <li>Redirection after entering credentials</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle className="text-xl mb-2">CamPhish</CardTitle>
              <CardDescription className="text-gray-600">
                A tool that targets mobile users by attempting to gain access to their camera.
              </CardDescription>
              
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                  <p className="text-sm text-gray-600">
                    CamPhish creates websites that request camera access using various pretexts 
                    (video calls, photo filters, etc.). Once access is granted, attackers can 
                    potentially capture images or video of the victim without their knowledge.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-gray-900 mb-1">Warning signs</h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>Unexpected camera permission requests</li>
                    <li>Websites offering too-good-to-be-true services</li>
                    <li>Suspicious URLs or links shared over social media</li>
                    <li>Pop-ups requesting immediate action</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-12 flex-shrink-0 flex justify-center">
            <ShieldAlert className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Educational Purpose Only</h3>
            <p className="text-gray-600">
              Information about these tools is provided solely for educational purposes to help you protect yourself. 
              Phishing Guardian does not provide instructions on using these tools and strongly condemns any malicious use. 
              Our goal is to increase awareness and improve your ability to identify and avoid phishing attempts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
