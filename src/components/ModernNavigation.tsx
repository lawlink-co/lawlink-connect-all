import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles, Users, Briefcase, Bell, Settings } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import amicusGoldenA from "@/assets/amicus-golden-a.png";

const ModernNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('[data-mobile-menu-trigger]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const productFeatures = [
    {
      icon: Sparkles,
      title: "AI Drafting",
      description: "Generate legal documents in seconds with AI-powered drafting",
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Empower clients with real-time case tracking and communication",
    },
    {
      icon: Briefcase,
      title: "Case Management",
      description: "Centralized dashboard for organizing and tracking all cases",
    },
    {
      icon: Bell,
      title: "Auto Updates",
      description: "Automatic notifications keep everyone informed automatically",
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor the platform to match your firm's unique workflows",
    },
  ];

  return (
    <>
      {/* Custom styles for NavigationMenu viewport */}
      <style>{`
        [data-radix-navigation-menu-viewport] {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/20 h-16"
            : "bg-black/80 backdrop-blur-xl border-b border-transparent h-20"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src={amicusGoldenA}
                alt="Amicus"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-8 w-8" : "h-10 w-10"
                }`}
              />
              <span className="text-xl font-semibold text-white">Amicus</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#e0b660] hover:bg-zinc-900/50 data-[state=open]:text-[#e0b660] data-[state=open]:bg-zinc-900/50 border-0 h-auto px-4 py-2">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-6 bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl">
                        <h3 className="text-lg font-semibold mb-4 text-white">
                          Product Features
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {productFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                              <Link
                                key={index}
                                to="/law-firms"
                                className="group p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-[#e0b660]/50 hover:bg-zinc-800/50 transition-all duration-200"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e0b660]/10 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors flex-shrink-0">
                                    <Icon className="h-5 w-5 text-[#e0b660]" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-white mb-1 group-hover:text-[#e0b660] transition-colors">
                                      {feature.title}
                                    </h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                      {feature.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <Link
                          to="/law-firms"
                          className="flex items-center gap-2 text-[#e0b660] hover:text-[#d4a556] font-medium group transition-colors"
                        >
                          View All Features
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/law-firms"
                className="text-white hover:text-[#e0b660] transition-colors px-4 py-2"
              >
                Solutions
              </Link>
              <Link
                to="/clients"
                className="text-white hover:text-[#e0b660] transition-colors px-4 py-2"
              >
                Clients
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#e0b660] transition-colors px-4 py-2"
              >
                About
              </Link>
              <Link
                to="/demo"
                className="text-white hover:text-[#e0b660] transition-colors px-4 py-2"
              >
                Demo
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link to="/demo">
                <Button
                  size="lg"
                  className="bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold px-6 py-6 shadow-lg shadow-[#e0b660]/20 hover:shadow-[#e0b660]/30 transition-all duration-300"
                >
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-mobile-menu-trigger
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#e0b660] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-black via-zinc-950 to-black backdrop-blur-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src={amicusGoldenA}
                alt="Amicus"
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold text-white">Amicus</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#e0b660] transition-colors p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="space-y-1">
              {/* Product Section */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 px-3">
                  Product
                </div>
                <div className="space-y-1">
                  {productFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Link
                        key={index}
                        to="/law-firms"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-900/50 hover:text-[#e0b660] transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e0b660]/10 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors flex-shrink-0">
                          <Icon className="h-5 w-5 text-[#e0b660]" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white mb-1">
                            {feature.title}
                          </div>
                          <div className="text-sm text-zinc-400">
                            {feature.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Main Menu Items */}
              <div className="space-y-1 pt-6 border-t border-zinc-800">
                <Link
                  to="/law-firms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-white hover:text-[#e0b660] hover:bg-zinc-900/50 rounded-lg transition-colors"
                >
                  Solutions
                </Link>
                <Link
                  to="/clients"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-white hover:text-[#e0b660] hover:bg-zinc-900/50 rounded-lg transition-colors"
                >
                  Clients
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-white hover:text-[#e0b660] hover:bg-zinc-900/50 rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-white hover:text-[#e0b660] hover:bg-zinc-900/50 rounded-lg transition-colors"
                >
                  Demo
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-zinc-800">
            <Link
              to="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button
                size="lg"
                className="w-full bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold py-6 text-lg shadow-lg shadow-[#e0b660]/20 hover:shadow-[#e0b660]/30 transition-all duration-300"
              >
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavigation;
