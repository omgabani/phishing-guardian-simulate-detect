
import { Shield, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl">Phishing Guardian</span>
            </div>
            <p className="text-sm text-gray-300">
              An educational platform to help users identify and protect themselves from phishing attacks.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/learn" className="hover:text-secondary transition-colors">Learn</Link></li>
              <li><Link to="/simulator" className="hover:text-secondary transition-colors">Simulator</Link></li>
              <li><Link to="/quiz" className="hover:text-secondary transition-colors">Quiz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center">CISA Resources <ExternalLink className="ml-1 h-3 w-3" /></a></li>
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center">NIST Guidelines <ExternalLink className="ml-1 h-3 w-3" /></a></li>
              <li><a href="#" className="hover:text-secondary transition-colors flex items-center">Phishing Report Centers <ExternalLink className="ml-1 h-3 w-3" /></a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-300">
              This platform is for educational purposes only. The tools and techniques shown should only be used in authorized environments.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Phishing Guardian. All rights reserved.
          </p>
          <p className="text-sm text-gray-300 flex items-center mt-4 md:mt-0">
            Built with <Heart className="h-4 w-4 text-alertred mx-1" /> for cybersecurity education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
