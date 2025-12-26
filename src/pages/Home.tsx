import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FeatureCarousel from "@/components/FeatureCarousel";
import { useEffect, useRef, useState } from "react";
import amicusGoldenA from "@/assets/amicus-golden-a.png";

// Full typewriter text with line breaks (added dash after evolved)
const TYPEWRITER_TEXT = `Litigants don't trust lawyers.

Lawyers drown in admin.

The way legal work gets done hasn't evolved—

until now.`;

const Home = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [logoPhase, setLogoPhase] = useState(0); // 0 = hidden, 0-1 = transitioning (text fade out, logo fade in/scale)
  const [logoFadeOut, setLogoFadeOut] = useState(0); // 0 = fully visible, 1 = fully faded out
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const featureCarouselRef = useRef<HTMLDivElement>(null);
  
  // How It Works animation states
  const [howItWorksPhase, setHowItWorksPhase] = useState(0);
  const howItWorksSectionRef = useRef<HTMLDivElement>(null);
  const howItWorksTriggeredRef = useRef(false);

  // Calculate where "until now." starts in the text
  const untilNowStart = TYPEWRITER_TEXT.indexOf('until now.');
  const totalChars = TYPEWRITER_TEXT.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!problemSectionRef.current) return;
      
      const section = problemSectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      
      // Calculate scroll progress (0 to 1)
      // Section is now 300vh, so we have 200vh of scroll room
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));
      
      // Phase 1: Typewriter (0% - 50% scroll)
      // Phase 2: Text fade-out (50% - 60% scroll) 
      // Phase 3: Logo fade-in (60% - 80% scroll)
      // Phase 4: Logo hold at full opacity (80%+ scroll, until section top reaches viewport top)
      // Phase 5: Logo fade-out (when section.top <= 0)
      
      // Check if section top has reached viewport top (triggers fade-out)
      let fadeOutProgress = 0;
      if (rect.top <= 0) {
        // Calculate fade-out progress based on how far past the top we've scrolled
        // Fade out over ~200px of scroll past the top
        fadeOutProgress = Math.min(1, Math.abs(rect.top) / 200);
      }
      
      if (scrollProgress <= 0.5) {
        // Phase 1: Typewriter phase - map 0-50% to full text
        const typewriterProgress = scrollProgress / 0.5;
        
        let charIndex: number;
        if (typewriterProgress <= 0.7) {
          // Map 0-70% of typewriter phase to text before "until now."
          charIndex = Math.floor((typewriterProgress / 0.7) * untilNowStart);
        } else {
          // Map 70-100% of typewriter phase to "until now." (slower reveal)
          const slowProgress = (typewriterProgress - 0.7) / 0.3;
          charIndex = untilNowStart + Math.floor(slowProgress * (totalChars - untilNowStart));
        }
        
        setVisibleChars(Math.min(charIndex, totalChars));
        setLogoPhase(0);
        setLogoFadeOut(0);
      } else if (scrollProgress <= 0.6) {
        // Phase 2: Text fade-out phase (50% - 60% scroll)
        setVisibleChars(totalChars);
        const textFadeProgress = (scrollProgress - 0.5) / 0.1; // 0 to 1 over 10% scroll
        setLogoPhase(textFadeProgress * 0.6); // Maps to 0-0.6 for text fade-out
        setLogoFadeOut(0);
      } else if (scrollProgress <= 0.8) {
        // Phase 3: Logo fade-in phase (60% - 80% scroll) - text is fully faded by now
        setVisibleChars(totalChars);
        const logoFadeInProgress = (scrollProgress - 0.6) / 0.2; // 0 to 1 over 20% scroll
        // Map to 0.6-1.0 for logo fade-in (starts after text fade completes at 0.6)
        setLogoPhase(0.6 + logoFadeInProgress * 0.4);
        setLogoFadeOut(0);
      } else {
        // Phase 4: Logo hold phase (80%+ scroll) - logo at full opacity until section reaches top
        setVisibleChars(totalChars);
        setLogoPhase(1.0); // Logo at full opacity
        setLogoFadeOut(fadeOutProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [untilNowStart, totalChars]);

  // How It Works section animation
  useEffect(() => {
    const handleHowItWorksScroll = () => {
      if (!howItWorksSectionRef.current || howItWorksTriggeredRef.current) return;
      
      const section = howItWorksSectionRef.current;
      const rect = section.getBoundingClientRect();
      
      // Trigger when section is 40% visible
      if (rect.top < window.innerHeight * 0.6) {
        howItWorksTriggeredRef.current = true;
        // Phase 1: Icons appear with "Not Connected"
        setHowItWorksPhase(1);
        // Phase 2: Line connects after 800ms
        setTimeout(() => setHowItWorksPhase(2), 800);
        // Phase 3: Rest of content loads after 1400ms
        setTimeout(() => setHowItWorksPhase(3), 1400);
        // Phase 4: "For Both" section appears after 2000ms
        setTimeout(() => setHowItWorksPhase(4), 2000);
      }
    };

    window.addEventListener('scroll', handleHowItWorksScroll, { passive: true });
    handleHowItWorksScroll();
    
    return () => {
      window.removeEventListener('scroll', handleHowItWorksScroll);
    };
  }, []);

  return <div className="min-h-screen bg-black text-white font-caslon">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal mb-8 tracking-tight animate-fade-in-slow">
            Hello Legal
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-300 mb-16 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            An AI-powered platform that connects lawyers and clients through automation and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:min-w-[180px] text-lg bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-all duration-300 hover:scale-105 px-[34px]">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" className="w-full sm:min-w-[180px] text-lg px-12 bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - Scroll-Locked Typography with Typewriter + Logo Reveal */}
      <section 
        ref={problemSectionRef}
        className="relative h-[300vh] bg-gradient-to-b from-black via-zinc-950 to-black"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Typewriter Text - fades out during first phase (logoPhase 0-0.6) */}
          <div 
            className="container mx-auto max-w-5xl text-center absolute transition-opacity duration-500"
            style={{ opacity: logoPhase < 0.6 ? 1 - (logoPhase / 0.6) : 0 }}
          >
            <p className="text-3xl sm:text-4xl lg:text-5xl text-zinc-200 font-light leading-relaxed whitespace-pre-wrap">
              {TYPEWRITER_TEXT.slice(0, visibleChars)}
              {logoPhase === 0 && (
                <span className="inline-block w-[3px] h-[1em] bg-zinc-200 ml-1 align-middle animate-caret-blink" />
              )}
            </p>
          </div>
          
          {/* Logo - fades in after text fade-out, stays at full opacity, fades out when section top reaches viewport top */}
          {(() => {
            // Logo fade-in: logoPhase goes from 0.6 to 1.0 (text fade-out completes at 0.6)
            const logoFadeInOpacity = logoPhase <= 0.6 ? 0 : (logoPhase - 0.6) / 0.4;
            // Final opacity: combine fade-in with fade-out
            const finalOpacity = Math.max(0, Math.min(1, logoFadeInOpacity * (1 - logoFadeOut)));
            // Scale from 0.5 to 1.3 (30% larger) based on fade-in progress
            const scale = 0.5 + logoFadeInOpacity * 0.8;
            
            return (
              <div 
                className="absolute flex items-center justify-center transition-all duration-300"
                style={{ 
                  opacity: finalOpacity,
                  transform: `scale(${scale})`
                }}
              >
                <img 
                  src={amicusGoldenA} 
                  alt="Amicus" 
                  className="w-48 sm:w-64 lg:w-80 h-auto"
                />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Feature Carousel - The New Architecture */}
      <div ref={featureCarouselRef}>
        <FeatureCarousel />
      </div>

      {/* How It Works Section - Connection Between Client & Lawyer */}
      <section ref={howItWorksSectionRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-normal mb-8 text-center transition-all duration-500 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>How It Works</h2>
          <p className={`text-xl text-zinc-400 text-center mb-20 max-w-3xl mx-auto transition-all duration-500 delay-100 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Amicus bridges clients and their lawyers — making every case tangible, fast-moving, and transparent.
          </p>

          {/* Visual Connection */}
          <div className="relative mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* For Clients - Icon shows first */}
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-primary rounded-lg blur transition-opacity duration-500 ${howItWorksPhase >= 1 ? 'opacity-25 group-hover:opacity-40' : 'opacity-0'}`}></div>
                <div className={`relative bg-zinc-950 border border-zinc-800 rounded-lg p-10 transition-all duration-500 ${howItWorksPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:border-blue-500/50`}>
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className={`transition-all duration-500 delay-200 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h3 className="text-2xl font-normal mb-4 text-center">For Clients</h3>
                    <p className="text-zinc-400 text-center mb-6 leading-relaxed">
                      Your case becomes <span className="text-white font-normal">real</span> through an interactive app.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">→</span>
                        <span>See progress in real-time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">→</span>
                        <span>Receive instant updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">→</span>
                        <span>Understand what's happening</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connection Visual - Shows "Not Connected" first, then animates to "Connected" */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Glow appears when connected */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-blue-500 blur-xl transition-opacity duration-700 ${howItWorksPhase >= 2 ? 'opacity-50 animate-pulse' : 'opacity-0'}`}></div>
                  <div className="relative flex flex-col items-center gap-4">
                    {/* Top dot - always shows in phase 1 */}
                    <div className={`w-3 h-3 bg-blue-400 rounded-full transition-all duration-500 ${howItWorksPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} ${howItWorksPhase >= 2 ? 'animate-pulse' : ''}`}></div>
                    
                    {/* Top line - grows in phase 2 */}
                    <div className={`w-1 bg-gradient-to-b from-blue-400 to-primary transition-all duration-500 origin-top ${howItWorksPhase >= 2 ? 'h-16 opacity-100' : 'h-0 opacity-0'}`}></div>
                    
                    {/* Center node - appears in phase 2 */}
                    <div className={`w-6 h-6 bg-primary rounded-full flex items-center justify-center transition-all duration-300 ${howItWorksPhase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Bottom line - grows in phase 2 */}
                    <div className={`w-1 bg-gradient-to-b from-primary to-blue-400 transition-all duration-500 delay-200 origin-top ${howItWorksPhase >= 2 ? 'h-16 opacity-100' : 'h-0 opacity-0'}`}></div>
                    
                    {/* Bottom dot - always shows in phase 1 */}
                    <div className={`w-3 h-3 bg-blue-400 rounded-full transition-all duration-500 ${howItWorksPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} ${howItWorksPhase >= 2 ? 'animate-pulse' : ''}`}></div>
                  </div>
                </div>
                {/* Status text - changes from "Not Connected" to "Connected" */}
                <p className={`text-xs mt-6 text-center font-normal tracking-wider uppercase transition-all duration-500 ${howItWorksPhase >= 1 ? 'opacity-100' : 'opacity-0'} ${howItWorksPhase >= 2 ? 'text-primary' : 'text-zinc-500'}`}>
                  {howItWorksPhase >= 2 ? 'Connected' : 'Not Connected'}
                </p>
              </div>

              {/* For Lawyers - Icon shows first */}
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur transition-opacity duration-500 ${howItWorksPhase >= 1 ? 'opacity-25 group-hover:opacity-40' : 'opacity-0'}`}></div>
                <div className={`relative bg-zinc-950 border border-zinc-800 rounded-lg p-10 transition-all duration-500 delay-100 ${howItWorksPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} hover:border-primary/50`}>
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className={`transition-all duration-500 delay-300 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h3 className="text-2xl font-normal mb-4 text-center">For Lawyers</h3>
                    <p className="text-zinc-400 text-center mb-6 leading-relaxed">
                      A <span className="text-white font-normal">magnificent infrastructure</span> to handle litigation faster.
                    </p>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>AI-powered drafting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>Intelligent automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>Turn chaos into clarity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Outcome - appears in phase 4 */}
          <div className={`relative transition-all duration-700 ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-primary/10 to-blue-500/10 blur-3xl"></div>
            <div className="relative bg-zinc-950/80 border border-zinc-800 rounded-lg p-12 text-center backdrop-blur">
              <h3 className="text-2xl sm:text-3xl font-normal mb-6">
                For Both: Progress That Moves
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className={`flex flex-col items-center transition-all duration-500 delay-[100ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-normal mb-2">Faster Forward</p>
                  <p className="text-sm text-zinc-400">Every case moves at the speed of technology</p>
                </div>
                <div className={`flex flex-col items-center transition-all duration-500 delay-[200ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <p className="text-white font-normal mb-2">Instant Updates</p>
                  <p className="text-sm text-zinc-400">Shared in real-time, never missed</p>
                </div>
                <div className={`flex flex-col items-center transition-all duration-500 delay-[300ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-normal mb-2">Total Transparency</p>
                  <p className="text-sm text-zinc-400">No one feels left in the dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center space-y-12 animate-scale-in">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Where litigation meets intelligence.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-300 leading-relaxed">
            Amicus is shaping the future of litigation — where cases flow from intake to resolution with intelligence and ease.
          </p>
          <div className="pt-8">
            <p className="text-3xl font-normal text-white">Real context. Real results.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-normal mb-12">
            Choose Your Experience
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-all duration-300">
                Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-all duration-300">
                Clients
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-8">Explore the tech • View the AI</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm text-zinc-500">
            Amicus is built for confidentiality and reliability from the ground up.
          </p>
          <p className="text-zinc-500">&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Home;