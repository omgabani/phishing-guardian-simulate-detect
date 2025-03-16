
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, AlertTriangle, PanelLeft, Eye, Lock, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="phishing-gradient py-16">
          <div className="container mx-auto px-6">
            <div className="text-center text-white mb-8">
              <h1 className="text-4xl font-bold mb-4">Phishing Tools & Techniques</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Understanding how attackers operate helps you better protect yourself. 
                Learn about the common tools and techniques used in phishing attacks.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10 flex flex-col md:flex-row items-center gap-6 mb-8">
                <div className="md:w-12 flex-shrink-0 flex justify-center">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Educational Purpose Only</h3>
                  <p className="text-gray-600">
                    This information is provided solely for educational purposes to help you protect yourself and your organization. 
                    Phishing Guardian does not provide instructions on using these tools and strongly condemns any malicious use.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* BlackEye Tool */}
              <Card className="card-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">BlackEye</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    A tool used to create convincing replicas of popular websites to steal credentials.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                      <p className="text-sm text-gray-600">
                        BlackEye creates near-perfect clones of legitimate websites like banking portals, 
                        email services, and social media platforms. When victims enter their credentials 
                        on these fake pages, their information is captured and sent to the attacker.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-1">Common targets</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Banking and financial institutions</li>
                        <li>Email providers (Gmail, Outlook, Yahoo)</li>
                        <li>Social media platforms (Facebook, Instagram)</li>
                        <li>Cloud storage services (Dropbox, OneDrive)</li>
                        <li>Corporate VPN and single sign-on portals</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-1">How to protect yourself</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Always check the URL before entering credentials</li>
                        <li>Look for HTTPS and valid certificate information</li>
                        <li>Enable two-factor authentication on all accounts</li>
                        <li>Use a password manager that won't auto-fill on suspicious sites</li>
                        <li>Report suspected phishing pages to your organization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CamPhish Tool */}
              <Card className="card-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">CamPhish</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    A tool designed to trick users into granting camera access through deceptive websites.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                      <p className="text-sm text-gray-600">
                        CamPhish creates malicious websites that request camera access using various pretexts 
                        like photo filters, video calls, or camera tests. Once permission is granted, attackers 
                        can potentially capture images or video of the victim without their knowledge.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-1">Common tactics</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Fake video conferencing meeting invites</li>
                        <li>"Try our new filter" promotional websites</li>
                        <li>Dating app profile verification scams</li>
                        <li>Fake webcam testing services</li>
                        <li>Social media "challenges" requiring camera access</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-1">How to protect yourself</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Be extremely cautious about granting camera permissions</li>
                        <li>Only allow camera access on trusted, verified websites</li>
                        <li>Consider using camera covers when not in use</li>
                        <li>Check browser permission settings regularly</li>
                        <li>Be suspicious of unsolicited requests to use your camera</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Engineering Toolkit */}
              <Card className="card-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <PanelLeft className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">Social Engineering Toolkit (SET)</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    A comprehensive framework for creating and managing social engineering attacks.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                      <p className="text-sm text-gray-600">
                        SET provides attackers with a range of tools for creating convincing phishing 
                        campaigns, including website cloning, email templates, and SMS modules. It can 
                        automate complex attacks that combine multiple techniques.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-1">Attack vectors</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Spear phishing email campaigns</li>
                        <li>Website cloning and credential harvesting</li>
                        <li>QR code phishing</li>
                        <li>SMS phishing (smishing)</li>
                        <li>Malicious USB delivery</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-1">How to protect yourself</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Stay vigilant with all digital communications</li>
                        <li>Verify unexpected requests through separate channels</li>
                        <li>Keep software and security tools updated</li>
                        <li>Participate in security awareness training</li>
                        <li>Report suspicious activities to IT security teams</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Credential Harvesting */}
              <Card className="card-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">Credential Harvesting</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Techniques used to collect usernames, passwords, and other authentication data.
                  </CardDescription>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <h4 className="font-medium text-gray-900 mb-1">How it works</h4>
                      <p className="text-sm text-gray-600">
                        Credential harvesting uses various methods to trick users into revealing their login 
                        information. This can include fake login pages, email forms, pop-ups claiming to need 
                        password verification, or malware that logs keystrokes.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900 mb-1">Common scenarios</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>"Your account has been compromised" alerts</li>
                        <li>"Verify your identity" requests</li>
                        <li>"Login to view a shared document" pages</li>
                        <li>"Update your payment information" emails</li>
                        <li>"Security check required" notifications</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-medium text-gray-900 mb-1">How to protect yourself</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Always go directly to websites by typing the URL</li>
                        <li>Use unique passwords for each account</li>
                        <li>Enable multi-factor authentication</li>
                        <li>Be suspicious of unexpected login requests</li>
                        <li>Check for URL discrepancies and HTTP vs HTTPS</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/simulator">Try the Phishing Simulator</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
