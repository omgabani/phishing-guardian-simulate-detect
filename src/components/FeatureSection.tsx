
import { Mail, MessageSquare, SmartphoneCharging, Globe, ShieldAlert, BookOpen } from "lucide-react";
import PhishingCard from "./PhishingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn to Identify Different Types of Phishing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Phishing attacks come in many forms. Our platform helps you recognize and defend 
            against the most common techniques used by cybercriminals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <PhishingCard
            icon={<Mail className="h-12 w-12 text-secondary" />}
            title="Email Phishing"
            description="Learn to spot fraudulent emails that attempt to steal your credentials or install malware."
          />
          <PhishingCard
            icon={<Globe className="h-12 w-12 text-secondary" />}
            title="Website Spoofing"
            description="Identify fake websites designed to mimic legitimate services using tools like BlackEye."
          />
          <PhishingCard
            icon={<SmartphoneCharging className="h-12 w-12 text-secondary" />}
            title="Mobile Phishing"
            description="Protect your mobile devices from attacks using techniques like CamPhish and SMS phishing."
          />
          <PhishingCard
            icon={<MessageSquare className="h-12 w-12 text-secondary" />}
            title="Social Media Scams"
            description="Recognize dangerous links and fake profiles on popular social platforms."
          />
          <PhishingCard
            icon={<ShieldAlert className="h-12 w-12 text-secondary" />}
            title="Spear Phishing"
            description="Defend against targeted attacks that use personal information to appear more convincing."
          />
          <PhishingCard
            icon={<BookOpen className="h-12 w-12 text-secondary" />}
            title="Educational Resources"
            description="Access guides, tutorials, and tools to strengthen your cybersecurity knowledge."
          />
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/learn">
              Explore All Phishing Types
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
