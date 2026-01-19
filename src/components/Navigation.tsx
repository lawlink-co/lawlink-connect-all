import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, Zap, Users, Bell, ChevronDown, Menu, X } from "lucide-react";
import amicusLogo from "@/assets/amicus-logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isClientsPage = location.pathname === "/clients";
  
  // Text colors based on page
  const textColor = isClientsPage ? "text-gray-700" : "text-zinc-400";
  const textHoverColor = isClientsPage ? "hover:text-gray-900" : "hover:text-white";
  const borderColor = isClientsPage ? "border-gray-200" : "border-white/10";
  const bgColor = isClientsPage ? "bg-white/95" : "bg-black/80";
  const dropdownBg = isClientsPage ? "bg-white border-gray-200" : "bg-zinc-900 border-zinc-800";
  const dropdownText = isClientsPage ? "text-gray-900" : "text-white";
  const dropdownHover = isClientsPage ? "hover:bg-gray-50" : "hover:bg-zinc-800";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-sm border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src={amicusLogo} 
              alt="Amicus" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 ${textColor} ${textHoverColor} transition-colors focus:outline-none`}>
                Features
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className={`w-56 ${dropdownBg} ${dropdownText}`}
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/law-firms"
                    className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                  >
                    <Zap className="h-4 w-4 text-[#e0b660]" />
                    <span>Draft in Seconds</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/law-firms"
                    className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                  >
                    <Shield className="h-4 w-4 text-[#e0b660]" />
                    <span>One Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/clients"
                    className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                  >
                    <Users className="h-4 w-4 text-[#e0b660]" />
                    <span>Client Portal</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/law-firms"
                    className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                  >
                    <Bell className="h-4 w-4 text-[#e0b660]" />
                    <span>Auto Updates</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clients Link */}
            <Link
              to="/clients"
              className={`${textColor} ${textHoverColor} transition-colors`}
            >
              Clients
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              className={`${textColor} ${textHoverColor} transition-colors`}
            >
              About
            </Link>
          </div>

          {/* Right - Book Demo Button */}
          <div className="flex items-center gap-4 z-10">
            <Link
              to="/old-land"
              className={`hidden md:block ${textColor} ${textHoverColor} transition-colors text-sm font-medium`}
            >
              Old Land
            </Link>
            <div className="hidden md:block">
              <Link to="/demo">
                <Button className="bg-[#e0b660] text-black hover:bg-[#d4a850] font-medium font-sans">
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${textColor} ${textHoverColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${borderColor}`}>
            <div className="flex flex-col gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center justify-between w-full text-left ${textColor} ${textHoverColor} transition-colors`}>
                  Features
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className={`w-full ${dropdownBg} ${dropdownText}`}
                >
                  <DropdownMenuItem asChild>
                    <Link
                      to="/law-firms"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                    >
                      <Zap className="h-4 w-4 text-[#e0b660]" />
                      <span>Draft in Seconds</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/law-firms"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                    >
                      <Shield className="h-4 w-4 text-[#e0b660]" />
                      <span>One Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/clients"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                    >
                      <Users className="h-4 w-4 text-[#e0b660]" />
                      <span>Client Portal</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/law-firms"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 cursor-pointer ${dropdownHover}`}
                    >
                      <Bell className="h-4 w-4 text-[#e0b660]" />
                      <span>Auto Updates</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                to="/clients"
                onClick={() => setMobileMenuOpen(false)}
                className={`${textColor} ${textHoverColor} transition-colors`}
              >
                Clients
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`${textColor} ${textHoverColor} transition-colors`}
              >
                About
              </Link>
              <Link
                to="/old-land"
                onClick={() => setMobileMenuOpen(false)}
                className={`${textColor} ${textHoverColor} transition-colors`}
              >
                Old Land
              </Link>
              <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#e0b660] text-black hover:bg-[#d4a850] font-medium font-sans">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
