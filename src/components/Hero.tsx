
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden phishing-gradient py-16 md:py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Secure Your Digital Life from Phishing Attacks
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Learn to identify, prevent, and report phishing attempts with our interactive 
              training platform. Stay one step ahead of cybercriminals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                asChild
              >
                <Link to="/learn">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link to="/simulator">
                  Try Simulator
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 relative">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-4 max-w-md">
                <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                  <h3 className="font-medium text-white">Did you know?</h3>
                  <p className="text-gray-200 text-sm">
                    Phishing accounts for over 80% of reported security incidents
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                  <h3 className="font-medium text-white">Warning Signs</h3>
                  <p className="text-gray-200 text-sm">
                    Suspicious URLs, urgent requests, and grammatical errors
                  </p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30 animate-pulse-slow">
                  <h3 className="font-medium text-white">Stay Protected</h3>
                  <p className="text-gray-200 text-sm">
                    Learn how to identify and defend against attack techniques like BlackEye and CamPhish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
