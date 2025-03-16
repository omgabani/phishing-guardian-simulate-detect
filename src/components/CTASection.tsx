
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 alert-gradient text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Your Phishing Awareness?</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Take our interactive quiz to see if you can identify common phishing attempts and 
          protect yourself from cyber threats.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-alertred hover:bg-gray-100 font-semibold text-lg"
            asChild
          >
            <Link to="/quiz">
              Take the Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white/10 text-lg"
            asChild
          >
            <Link to="/learn">
              Learn More First
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
