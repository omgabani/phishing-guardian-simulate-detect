
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-secondary" />
          <span className="font-bold text-xl">Phishing Guardian</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/learn" className="hover:text-secondary transition-colors">
            Learn
          </Link>
          <Link to="/simulator" className="hover:text-secondary transition-colors">
            Simulator
          </Link>
          <Link to="/tools" className="hover:text-secondary transition-colors">
            Tools
          </Link>
          <Link to="/quiz" className="hover:text-secondary transition-colors">
            Quiz
          </Link>
          <Link to="/resources">
            <Button variant="secondary">
              <BookOpen className="mr-2 h-4 w-4" /> Resources
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700 mt-4">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className="py-2 hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Learn
            </Link>
            <Link
              to="/simulator"
              className="py-2 hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Simulator
            </Link>
            <Link
              to="/tools"
              className="py-2 hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Tools
            </Link>
            <Link
              to="/quiz"
              className="py-2 hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              Quiz
            </Link>
            <Link to="/resources" onClick={toggleMenu}>
              <Button variant="secondary" className="w-full">
                <BookOpen className="mr-2 h-4 w-4" /> Resources
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
