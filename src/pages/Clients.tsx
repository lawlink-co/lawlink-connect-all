import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileSearch, Shield, Smartphone, Clock, Check, Calendar, Briefcase } from "lucide-react";
import clientHeaderPhone from "@/assets/client-header-phone.png";
import caseNotification from "@/assets/case-notification-v2.png";
import phoneFrame from "@/assets/phone-frame.svg";
import clientApp1 from "@/assets/client-app-1.png";
import clientApp2 from "@/assets/client-app-2.png";
import clientApp3 from "@/assets/client-app-3.png";
import caseIconLeft from "@/assets/case-icon-left.svg";
import caseIconRight from "@/assets/case-icon-right.svg";
import casePhoneCenter from "@/assets/case-phone-center.png";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const caseHubSlides = [
  { image: clientApp1, alt: "Amicus app - medical treatment" },
  { image: clientApp2, alt: "Amicus app - case update" },
  { image: clientApp3, alt: "Amicus app - attorney chat" },
];

const CaseHubCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-transition every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseHubSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        <FileSearch className="w-20 h-20 text-[#e0b660] mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
          Everything you need in one app
        </h2>
        
        {/* Fade Image Container */}
        <div className="relative flex items-center justify-center h-[320px] sm:h-[400px]">
          {caseHubSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.alt}
              className={`absolute left-1/2 -translate-x-1/2 h-[304px] sm:h-[384px] w-auto transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseHubSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#e0b660]"
                  : "w-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-8 font-normal">
          No more endless phone calls or wondering what's happening with your case. Everything you need — documents, updates, messages, and deadlines — lives in one place, accessible anytime.
        </p>
      </div>
    </section>
  );
};

const AllCasesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phoneAnimationComplete, setPhoneAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Trigger card animations after phone animation completes (800ms)
        setTimeout(() => setPhoneAnimationComplete(true), 800);
      }
    }, {
      threshold: 0.3,
      rootMargin: '-10% 0px -10% 0px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="container mx-auto max-w-5xl text-center">
        <Briefcase className="w-20 h-20 text-[#e0b660] mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16">
          The home of all your legal cases.
        </h2>
        
        {/* Icons Animation Container */}
        <div className="relative flex items-center justify-center h-[300px] sm:h-[400px]">
          {/* Left Icon */}
          <div 
            className={`absolute z-10 transition-all duration-700 ease-out ${
              phoneAnimationComplete 
                ? 'left-0 sm:left-[22%] opacity-100' 
                : 'left-1/2 -translate-x-1/2 opacity-0'
            }`}
          >
            <img 
              src={caseIconLeft} 
              alt="Case document" 
              className="w-[80px] sm:w-[120px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Center Phone - Fade in while expanding */}
          <div 
            className={`relative z-20 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-50'
            }`}
          >
            <img 
              src={casePhoneCenter} 
              alt="Amicus app showing multiple cases" 
              className="w-[132px] sm:w-[198px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Icon */}
          <div 
            className={`absolute z-10 transition-all duration-700 ease-out ${
              phoneAnimationComplete 
                ? 'right-0 sm:right-[22%] opacity-100' 
                : 'right-1/2 translate-x-1/2 opacity-0'
            }`}
          >
            <img 
              src={caseIconRight} 
              alt="Case files" 
              className="w-[80px] sm:w-[120px] h-auto drop-shadow-xl"
            />
          </div>
        </div>
        
        <p className={`text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-8 font-normal transition-all duration-700 ${
          phoneAnimationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Ditch the scattered paperwork and endless folders. Amicus brings all your cases together — with appointments, deadlines, and updates for each — always at your fingertips.
        </p>
      </div>
    </section>
  );
};
const Clients = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const notificationSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNotificationVisible(true);
      }
    }, {
      threshold: isMobile ? 0.2 : 0.5,
      rootMargin: isMobile ? '0px' : '-20% 0px -20% 0px'
    });
    if (notificationSectionRef.current) {
      observer.observe(notificationSectionRef.current);
    }
    return () => observer.disconnect();
  }, [isMobile]);
  return <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-slow">
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">CLIENT EXPERIENCE</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                Cases Become Real<br />With Amicus.
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed font-normal">
                An interactive app that delivers real updates, real context, and real clarity.
              </p>
              <a href="tel:2125882922">
                <Button size="lg" className="text-lg px-10 py-7 bg-[#e0b660] text-black font-medium rounded hover:bg-[#c9a050] transition-all duration-300 hover:scale-105">
                  Download the App
                </Button>
              </a>
            </div>
            <div className="relative animate-scale-in flex items-center justify-center h-full">
              <img src={clientHeaderPhone} alt="Amicus mobile app interface" className="relative mx-auto h-[425px] lg:h-[510px] w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
        <div className="container mx-auto max-w-6xl text-center">
          <Smartphone className="w-20 h-20 text-[#e0b660] mx-auto mb-8 animate-scale-in" />
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
            Every Case, in One View
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-16 font-normal">
            Lawsuits become tangible. Every update, motion, and court filing — accessible in one pocket-sized app.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
              <CardContent className="pt-8">
                <Bell className="w-12 h-12 text-[#e0b660] mb-6 mx-auto" />
                <h3 className="text-2xl font-medium mb-4 text-white">Real-Time Updates</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-normal">
                  Instant notifications deliver every important development — filings, hearings, and settlements — as they happen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
              <CardContent className="pt-8">
                <MessageSquare className="w-12 h-12 text-[#e0b660] mb-6 mx-auto" />
                <h3 className="text-2xl font-medium mb-4 text-white">AI Chat</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-normal">
                  An AI that knows every filing, message, and deadline. Questions get answered and complex legal terms become plain language, anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
              <CardContent className="pt-8">
                <FileSearch className="w-12 h-12 text-[#e0b660] mb-6 mx-auto" />
                <h3 className="text-2xl font-medium mb-4 text-white">Case Hub</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-normal">
                  Every document, update, and message lives in one place. The entire case becomes a central hub — clear, connected, and always in motion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
              <CardContent className="pt-8">
                <Briefcase className="w-12 h-12 text-[#e0b660] mb-6 mx-auto" />
                <h3 className="text-2xl font-medium mb-4 text-white">All Cases, One App</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-normal">
                  Multiple ongoing cases stay organized in a single app, with appointments, deadlines, and updates for each — always accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catch Up Section */}
      <section ref={notificationSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Bell className="w-16 h-16 text-[#e0b660] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Progress Becomes Visible
            </h2>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Phone Frame with Notification */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Frame */}
              <img src={phoneFrame} alt="Phone frame" className="w-full h-auto" />
              
              {/* Notification - Positioned at top of phone, animates down */}
              <div className={`absolute left-1/2 -translate-x-1/2 w-[97%] transition-all duration-700 ease-out ${notificationVisible ? 'opacity-100 top-[8%]' : 'opacity-0 -top-[6%]'}`}>
                <img src={caseNotification} alt="Case update notification" className="w-full scale-[1.14] drop-shadow-2xl" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className={`mt-16 max-w-3xl text-center transition-all duration-700 delay-300 ease-out ${notificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed font-normal">
                A micro-view of every case reveals progress as it happens — every filing, every motion, every development delivered in clear, understandable language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-3xl p-12">
            <div className="text-center mb-12">
              <MessageSquare className="w-20 h-20 text-[#e0b660] mx-auto mb-8 animate-scale-in" />
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
                Cases That Talk Back
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal">
                AI that knows every document and event — questions get answered once, clearly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
                <Clock className="w-8 h-8 text-[#e0b660] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white mb-2">24/7 Availability</h4>
                  <p className="text-zinc-400 font-normal">Answers available any time of day or night.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
                <Shield className="w-8 h-8 text-[#e0b660] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white mb-2">Completely Secure</h4>
                  <p className="text-zinc-400 font-normal">Conversations stay encrypted and confidential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
                <Calendar className="w-8 h-8 text-[#e0b660] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white mb-2">Context-Aware</h4>
                  <p className="text-zinc-400 font-normal">Full case history understood for accurate answers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg">
                <Check className="w-8 h-8 text-[#e0b660] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-lg text-white mb-2">Plain Language</h4>
                  <p className="text-zinc-400 font-normal">Complex legal terms explained in simple, clear language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Hub Carousel */}
      <CaseHubCarousel />

      {/* All Cases Section */}
      <AllCasesSection />

      {/* Security Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-black">
        <div className="container mx-auto max-w-5xl text-center">
          <Shield className="w-20 h-20 text-[#e0b660] mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
            Sensitive Information, Secured.
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 mb-16 max-w-3xl mx-auto leading-relaxed font-normal">
            Attorney-client privilege stays sacred. Built from the ground up with enterprise-grade security to protect the most sensitive information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="w-16 h-16 bg-[#e0b660]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#e0b660]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">End-to-End Encryption</h3>
              <p className="text-zinc-400 font-normal">Every message, document, and update encrypted in transit and at rest. Data stays private.</p>
            </div>
            
            <div className="text-center bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="w-16 h-16 bg-[#e0b660]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#e0b660]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Attorney-Client Privilege</h3>
              <p className="text-zinc-400 font-normal">Amicus respects and preserves the confidentiality of all attorney-client communications. No exceptions.</p>
            </div>
            
            <div className="text-center bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="w-16 h-16 bg-[#e0b660]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#e0b660]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Access Control</h3>
              <p className="text-zinc-400 font-normal">Only you and your lawyer can access your case. No third parties, no data selling, no compromise.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="w-16 h-16 bg-[#e0b660]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#e0b660]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Secure Infrastructure</h3>
              <p className="text-zinc-400 font-normal">Built on enterprise-grade cloud infrastructure with SOC 2 compliance and continuous security monitoring.</p>
            </div>
            
            <div className="text-center bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="w-16 h-16 bg-[#e0b660]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#e0b660]" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Your Data, Your Control</h3>
              <p className="text-zinc-400 font-normal">You own your data. Period. We never share, sell, or use your information for anything other than serving you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="w-full max-w-xs mx-auto h-px bg-zinc-800 mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
            Your Case Deserves Better
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:2125882922">
              <Button size="lg" className="text-lg px-10 py-7 bg-[#e0b660] text-black font-medium rounded hover:bg-[#c9a050] transition-all duration-300 hover:scale-105">
                Download the App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-white font-medium text-lg mb-2">Amicus</div>
              <div className="text-zinc-500 text-sm font-normal">Built for plaintiff-side personal injury</div>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <Link to="/law-firms" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                Features
              </Link>
              <Link to="/law-firms" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                About
              </Link>
              <Link to="/contact" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                Contact
              </Link>
              <Link to="/demo" className="text-[#e0b660] text-sm hover:text-[#c9a050] transition-colors font-normal">
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="border-t border-zinc-900 mt-8 pt-8">
            <p className="text-zinc-600 text-xs text-center font-normal">
              © 2025 Amicus Legal Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Clients;