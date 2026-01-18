import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import amicusLogo from "@/assets/amicus-logo.png";
import amicusLogoBlack from "@/assets/amicus-logo-black.png";

const Navigation = memo(() => {
  const location = useLocation();
  const isClientsPage = location.pathname === "/clients";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${isClientsPage ? 'bg-white border-black/10' : 'bg-black border-white/10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={isClientsPage ? amicusLogoBlack : amicusLogo} alt="Amicus" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isClientsPage ? 'text-black' : 'text-white/90'} hover:text-primary transition-colors`}>
              Home
            </Link>
            <Link to="/law-firms" className={`${isClientsPage ? 'text-black' : 'text-white/90'} hover:text-primary transition-colors`}>
              For Law Firms
            </Link>
            <Link to="/clients" className={`${isClientsPage ? 'text-black' : 'text-white/90'} hover:text-primary transition-colors`}>
              For Clients
            </Link>
            <Link to="/demo">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={`${isClientsPage ? 'text-black hover:bg-black/10' : 'text-white hover:bg-white/10'}`}>
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-zinc-900 border-zinc-800">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full text-white hover:text-primary cursor-pointer">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/law-firms" className="w-full text-white hover:text-primary cursor-pointer">
                    For Law Firms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/clients" className="w-full text-white hover:text-primary cursor-pointer">
                    For Clients
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/demo" className="w-full text-primary font-medium cursor-pointer">
                    Book a Demo
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
