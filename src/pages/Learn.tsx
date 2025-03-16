
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Globe, Smartphone, AlertTriangle, Shield, EyeOff } from "lucide-react";

const Learn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Learn About Phishing</h1>
            <p className="text-lg text-gray-600">
              Explore different types of phishing attacks, how they work, and how to protect yourself.
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="web">Website</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="protection">Protection</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What is Phishing?</h2>
                  <p className="text-gray-700 mb-4">
                    Phishing is a type of social engineering attack often used to steal user data, 
                    including login credentials and credit card numbers. It occurs when an attacker, 
                    masquerading as a trusted entity, dupes a victim into opening an email, instant 
                    message, or text message.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The recipient is then tricked into clicking a malicious link, which can lead to 
                    the installation of malware, the freezing of the system as part of a ransomware 
                    attack, or the revealing of sensitive information.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Common Phishing Types</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Mail className="h-5 w-5 text-secondary mr-2" />
                        <span>Email Phishing - Fraudulent emails targeting a wide audience</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="h-5 w-5 text-secondary mr-2" />
                        <span>Website Spoofing - Fake websites mimicking legitimate ones</span>
                      </li>
                      <li className="flex items-center">
                        <Smartphone className="h-5 w-5 text-secondary mr-2" />
                        <span>Mobile Phishing - Attacks targeting mobile users via SMS or apps</span>
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2" />
                        <span>Spear Phishing - Targeted attacks on specific individuals</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Why Phishing Works</h2>
                  <p className="text-gray-700 mb-4">
                    Phishing attacks exploit human psychology and behavior rather than technical 
                    vulnerabilities. They rely on:
                  </p>
                  <ul className="space-y-3">
                    <li className="p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Trust</span> - Impersonating trusted entities or contacts
                    </li>
                    <li className="p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Urgency</span> - Creating time pressure to force quick decisions
                    </li>
                    <li className="p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Fear</span> - Threatening negative consequences
                    </li>
                    <li className="p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Curiosity</span> - Offering something intriguing or valuable
                    </li>
                    <li className="p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Familiarity</span> - Using design elements and language from legitimate sources
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Email Phishing</h2>
                  <p className="text-gray-700 mb-4">
                    Email phishing is the most common form of phishing, where attackers send emails 
                    pretending to be from legitimate organizations to trick recipients into revealing 
                    sensitive information.
                  </p>
                  
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                    <h3 className="font-semibold mb-2">Warning Signs in Phishing Emails</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-alertred mr-2 mt-0.5" />
                        <span>Mismatched or suspicious email domains (e.g., amazon-support.com instead of amazon.com)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-alertred mr-2 mt-0.5" />
                        <span>Poor grammar, spelling errors, or unusual language</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-alertred mr-2 mt-0.5" />
                        <span>Generic greetings like "Dear Customer" instead of your name</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-alertred mr-2 mt-0.5" />
                        <span>Requests for personal information or credentials</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-alertred mr-2 mt-0.5" />
                        <span>Urgent calls to action or threats</span>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="font-semibold mb-2">Common Email Phishing Scenarios</h3>
                  <ul className="space-y-4">
                    <li className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900">Account Issue Notifications</h4>
                      <p className="text-sm text-gray-700">
                        Emails claiming your account has been locked or compromised and requesting you 
                        to "verify" your information by clicking a link.
                      </p>
                    </li>
                    <li className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900">Payment Problems</h4>
                      <p className="text-sm text-gray-700">
                        Messages about failed payments or billing issues requiring immediate action.
                      </p>
                    </li>
                    <li className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-medium text-gray-900">Prize or Refund Notifications</h4>
                      <p className="text-sm text-gray-700">
                        Emails claiming you've won a contest or are eligible for a refund, requiring you 
                        to enter personal information to claim it.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Website Phishing</h2>
                  <p className="text-gray-700 mb-4">
                    Website phishing involves creating fake websites that mimic legitimate ones, 
                    designed to steal login credentials or personal information.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                    <h3 className="font-semibold flex items-center mb-2">
                      <EyeOff className="h-5 w-5 text-alertred mr-2" />
                      BlackEye: A Common Website Spoofing Tool
                    </h3>
                    <p className="text-gray-700 mb-2">
                      BlackEye is a tool used by attackers to create fake login pages that look identical 
                      to legitimate websites. These clones are designed to steal credentials when users 
                      attempt to log in.
                    </p>
                    <p className="text-gray-700">
                      These spoofed sites often have URLs that are similar but not identical to legitimate sites, 
                      such as "faceboook.com" or "paypa1.com".
                    </p>
                  </div>
                  
                  <h3 className="font-semibold mb-2">How to Identify Fake Websites</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span><strong>Check the URL:</strong> Verify the domain name is correct and look for HTTPS and a padlock icon</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span><strong>Look for design inconsistencies:</strong> Poor layout, fuzzy logos, or unusual fonts</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span><strong>Check for broken links:</strong> Test a few links to see if they work properly</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span><strong>Be wary of unexpected redirects:</strong> If you arrived via an email link, be suspicious</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span><strong>Trust your browser warnings:</strong> Heed security alerts from your browser</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Mobile Phishing</h2>
                  <p className="text-gray-700 mb-4">
                    Mobile phishing targets smartphone users through various channels, including 
                    SMS messages, apps, and mobile browsers.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                    <h3 className="font-semibold flex items-center mb-2">
                      <Smartphone className="h-5 w-5 text-alertred mr-2" />
                      CamPhish: Camera Access Exploitation
                    </h3>
                    <p className="text-gray-700">
                      CamPhish is a tool that creates websites that trick users into granting camera 
                      access. Once permission is given, attackers can potentially capture images or 
                      video without the user's knowledge. These attacks often use pretexts like:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Fake video calling applications</li>
                      <li>• Photo filter or editing services</li>
                      <li>• AR (augmented reality) games or apps</li>
                      <li>• Fake contests requiring photo submission</li>
                    </ul>
                  </div>
                  
                  <h3 className="font-semibold mb-3">Mobile Phishing Attack Types</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">SMS Phishing (Smishing)</h4>
                      <p className="text-sm text-gray-700">
                        Text messages that contain malicious links or that ask for personal information, 
                        often claiming to be from banks, delivery services, or government agencies.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">Malicious Apps</h4>
                      <p className="text-sm text-gray-700">
                        Fake applications that mimic legitimate ones but contain malware or request 
                        excessive permissions to access your personal data.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">QR Code Phishing</h4>
                      <p className="text-sm text-gray-700">
                        Malicious QR codes that direct users to fraudulent websites when scanned.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Phishing Tools Understanding</h2>
                  <p className="text-gray-700 mb-4">
                    Understanding the tools attackers use helps you better identify potential phishing 
                    attempts. This information is provided for educational purposes only.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="font-semibold text-gray-900 mb-2">BlackEye</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        A website spoofing tool that creates replicas of popular websites.
                      </p>
                      <h4 className="font-medium text-gray-900 mb-1">Capabilities:</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mb-3">
                        <li>• Clones login pages of popular services</li>
                        <li>• Captures entered credentials</li>
                        <li>• Often redirects to legitimate site after stealing data</li>
                        <li>• Can include company logos and design elements</li>
                      </ul>
                      <h4 className="font-medium text-gray-900 mb-1">Defense:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Always check the URL before entering credentials</li>
                        <li>• Look for HTTPS and valid certificates</li>
                        <li>• Use bookmarks for sensitive websites</li>
                        <li>• Enable two-factor authentication</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="font-semibold text-gray-900 mb-2">CamPhish</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        A tool that creates websites designed to trick users into granting camera access.
                      </p>
                      <h4 className="font-medium text-gray-900 mb-1">Capabilities:</h4>
                      <ul className="text-sm text-gray-700 space-y-1 mb-3">
                        <li>• Creates sites requesting camera permissions</li>
                        <li>• Can capture images or video once access is granted</li>
                        <li>• Often uses social engineering to encourage access</li>
                        <li>• May target mobile users specifically</li>
                      </ul>
                      <h4 className="font-medium text-gray-900 mb-1">Defense:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Question why a site needs camera access</li>
                        <li>• Only grant permissions to trusted websites</li>
                        <li>• Cover your camera when not in use</li>
                        <li>• Check browser permission settings regularly</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Educational Purpose Statement
                    </h3>
                    <p className="text-sm text-gray-700">
                      This information is provided solely for educational purposes to help you 
                      understand and identify phishing attempts. Phishing Guardian does not provide 
                      instructions on using these tools and strongly condemns any malicious use. 
                      Our goal is to increase awareness and improve your ability to identify and 
                      avoid phishing attempts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="protection" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Phishing Protection Strategies</h2>
                  <p className="text-gray-700 mb-6">
                    Protect yourself from phishing attacks with these best practices and preventive measures.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h3 className="font-semibold mb-3">Email Security</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Be suspicious of unexpected emails, especially those requesting personal information</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Hover over links to see the actual URL before clicking</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Use email filtering tools to reduce spam and phishing attempts</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Verify suspicious emails by contacting the sender through official channels</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h3 className="font-semibold mb-3">Web Browsing Safety</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Always check the website URL before entering any information</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Use bookmarks for sensitive websites instead of clicking links</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Look for HTTPS and the padlock icon in the address bar</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Use a web browser with phishing protection features</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h3 className="font-semibold mb-3">Account Protection</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Enable two-factor authentication (2FA) on all important accounts</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Use unique, strong passwords for each account</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Consider using a password manager to generate and store secure passwords</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Regularly check account activity for unauthorized access</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h3 className="font-semibold mb-3">Mobile Device Security</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Only download apps from official app stores</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Be cautious of SMS messages from unknown numbers with links</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Review app permissions and only grant what's necessary</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                          <span>Cover your camera when not in use</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
