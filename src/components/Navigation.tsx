import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import amicusLogo from "@/assets/amicus-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={amicusLogo} alt="Amicus" className="h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/law-firms" className="text-white hover:text-primary transition-colors">
              For Law Firms
            </Link>
            <Link to="/clients" className="text-white hover:text-primary transition-colors">
              For Clients
            </Link>
            <Link to="/demo">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;