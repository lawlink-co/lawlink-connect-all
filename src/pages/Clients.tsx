import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileSearch, Shield, Smartphone, Clock, Check, Calendar, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import clientHeaderPhone from "@/assets/client-header-phone.png";
import caseNotification from "@/assets/case-notification-new.png";
import phoneFrame from "@/assets/phone-frame.svg";
import carouselSlide1 from "@/assets/carousel-slide-1.svg";
import carouselSlide2 from "@/assets/carousel-slide-2.svg";
import carouselSlide3 from "@/assets/carousel-slide-3.svg";
import caseIconLeft from "@/assets/case-icon-left.svg";
import caseIconRight from "@/assets/case-icon-right.svg";
import casePhoneCenter from "@/assets/case-phone-center.svg";
import { useEffect, useRef, useState, useCallback } from "react";

const caseHubSlides = [
  { image: carouselSlide1, alt: "Amicus app - case updates" },
  { image: carouselSlide2, alt: "Amicus app - messaging" },
  { image: carouselSlide3, alt: "Amicus app - documents" },
];

const CaseHubCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % caseHubSlides.length);
  }, []);

  const scrollPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + caseHubSlides.length) % caseHubSlides.length);
  }, []);

  const scrollTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  // Calculate position for each slide
  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;
    // Handle wrap-around
    let normalizedDiff = diff;
    if (diff > 1) normalizedDiff = diff - caseHubSlides.length;
    if (diff < -1) normalizedDiff = diff + caseHubSlides.length;

    if (normalizedDiff === 0) {
      // Center (active)
      return {
        transform: 'translateX(-50%) scale(1)',
        zIndex: 20,
        opacity: 1,
      };
    } else if (normalizedDiff === -1) {
      // Left
      return {
        transform: 'translateX(-170%) scale(0.8)',
        zIndex: 10,
        opacity: 0.6,
      };
    } else if (normalizedDiff === 1) {
      // Right
      return {
        transform: 'translateX(70%) scale(0.8)',
        zIndex: 10,
        opacity: 0.6,
      };
    } else {
      // Hidden
      return {
        transform: 'translateX(-50%) scale(0.6)',
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        <FileSearch className="w-20 h-20 text-primary mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
          Everything you need in one app
        </h2>
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center h-[280px] sm:h-[340px]">
          {caseHubSlides.map((slide, index) => {
            const style = getSlideStyle(index);
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                onClick={() => {
                  const diff = index - activeIndex;
                  let normalizedDiff = diff;
                  if (diff > 1) normalizedDiff = diff - caseHubSlides.length;
                  if (diff < -1) normalizedDiff = diff + caseHubSlides.length;
                  
                  if (normalizedDiff === -1) scrollPrev();
                  else if (normalizedDiff === 1) scrollNext();
                }}
                className="absolute left-1/2 cursor-pointer transition-all duration-700 ease-in-out"
                style={style}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`h-auto rounded-xl shadow-lg transition-shadow duration-700 ${
                    isActive 
                      ? 'w-[175px] sm:w-[250px] lg:w-[300px] shadow-2xl' 
                      : 'w-[150px] sm:w-[200px] hover:opacity-80'
                  }`}
                />
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/90 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:bg-white transition-all shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/90 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-primary hover:bg-white transition-all shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseHubSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-8">
          No more endless phone calls or wondering what's happening with your case. Everything you need — documents, updates, messages, and deadlines — lives in one place, accessible anytime.
        </p>
      </div>
    </section>
  );
};

const AllCasesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
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
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl text-center">
        <Briefcase className="w-20 h-20 text-primary mx-auto mb-8" />
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16">
          The home of all your legal cases.
        </h2>
        
        {/* Icons Animation Container */}
        <div className="relative flex items-center justify-center h-[300px] sm:h-[400px]">
          {/* Left Icon */}
          <div 
            className={`absolute z-10 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'left-[5%] sm:left-[15%] opacity-100' 
                : 'left-1/2 -translate-x-1/2 opacity-0'
            }`}
          >
            <img 
              src={caseIconLeft} 
              alt="Case document" 
              className="w-[80px] sm:w-[120px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Center Phone */}
          <div className="relative z-20">
            <img 
              src={casePhoneCenter} 
              alt="Amicus app showing multiple cases" 
              className="w-[120px] sm:w-[180px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Icon */}
          <div 
            className={`absolute z-10 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'right-[5%] sm:right-[15%] opacity-100' 
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
        
        <p className={`text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-8 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNotificationVisible(true);
      }
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px'
    });
    if (notificationSectionRef.current) {
      observer.observe(notificationSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Know What's Happening<br />in Your Case.
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed">
                Amicus clients get real updates, real context, and real clarity.
              </p>
              <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Find an Amicus Lawyer
              </Button>
            </div>
            <div className="relative animate-scale-in flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
              <img src={clientHeaderPhone} alt="Amicus mobile app interface" className="relative mx-auto h-[425px] lg:h-[510px] w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Smartphone className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case, in One View
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
            Amicus turns lawsuits into something tangible. See every update, motion, and court filing — right in your pocket.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <Bell className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Updates</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get instant notifications about every important development in your case—filings, hearings, and settlements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <MessageSquare className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Chat</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Talk directly to an AI that knows your case — every filing, message, and deadline. Ask questions, get updates, and understand your case in plain language, anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <FileSearch className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Case Hub</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every document, update, and message lives in one place. Amicus becomes the central hub for your entire case — clear, connected, and always in motion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <Briefcase className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">All Your Cases, One App</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Keep all your ongoing cases organized in a single app, with appointments, deadlines, and updates for each — always at your fingertips.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catch Up Section */}
      <section ref={notificationSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Bell className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              Catch Up with Your Case
            </h2>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Phone Frame with Notification */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Frame */}
              <img src={phoneFrame} alt="Phone frame" className="w-full h-auto" />
              
              {/* Notification - Positioned at top of phone, animates down */}
              <div className={`absolute left-1/2 -translate-x-1/2 w-[85%] transition-all duration-700 ease-out ${notificationVisible ? 'opacity-100 top-[6%]' : 'opacity-0 -top-[6%]'}`}>
                <img src={caseNotification} alt="Case update notification" className="w-[140%] scale-140 drop-shadow-2xl" />
              </div>
            </div>
            
            {/* Text Content */}
            <div className={`mt-16 max-w-3xl text-center transition-all duration-700 delay-300 ease-out ${notificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                Get a micro-view of your case and feel the progress as it happens — every filing, every motion, every development delivered in clear, understandable language so you always know exactly what's happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary/10 to-indigo-100 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <MessageSquare className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
                Chat with Your Case — Literally
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Amicus's AI knows every document and event, so you never have to ask twice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
                  <p className="text-gray-700">Get answers to your questions any time of day or night.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Completely Secure</h4>
                  <p className="text-gray-700">Your conversations are encrypted and confidential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Context-Aware</h4>
                  <p className="text-gray-700">Understands your entire case history for accurate answers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Check className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Plain Language</h4>
                  <p className="text-gray-700">Complex legal terms explained in simple, clear language.</p>
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
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-gray-900 via-30% to-black">
        <div className="container mx-auto max-w-5xl text-center pt-[650px] pb-32">
          <Shield className="w-20 h-20 text-primary mx-auto mb-8" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Your Information, Secured.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Attorney-client privilege is sacred. Amicus is built from the ground up to protect your most sensitive information with enterprise-grade security.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">End-to-End Encryption</h3>
              <p className="text-gray-400">Every message, document, and update is encrypted in transit and at rest. Your data stays private.</p>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Attorney-Client Privilege</h3>
              <p className="text-gray-400">Amicus respects and preserves the confidentiality of all attorney-client communications. No exceptions.</p>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Access Control</h3>
              <p className="text-gray-400">Only you and your lawyer can access your case. No third parties, no data selling, no compromise.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Secure Infrastructure</h3>
              <p className="text-gray-400">Built on enterprise-grade cloud infrastructure with SOC 2 compliance and continuous security monitoring.</p>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Your Data, Your Control</h3>
              <p className="text-gray-400">You own your data. Period. We never share, sell, or use your information for anything other than serving you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case Deserves Better
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Find an Amicus Lawyer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm text-gray-600">
            Your information stays private. Only you and your lawyer have access.
          </p>
          <p className="text-gray-500">&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Clients;