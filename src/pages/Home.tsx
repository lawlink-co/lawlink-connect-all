import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FeatureCarousel from "@/components/FeatureCarousel";
import { useEffect, useRef, useState, useMemo, memo } from "react";
import amicusGoldenA from "@/assets/amicus-golden-a.png";
import amicusALogo from "@/assets/amicus-a-logo.png";
import amicusGoldenASmall from "@/assets/amicus-golden-a-small.png";

// Full typewriter text with line breaks (added dash after evolved)
const TYPEWRITER_TEXT = `Litigants don't trust lawyers.

Lawyers drown in admin.

The way legal work gets done hasn't evolved—

until now.`;

// Pre-calculate static values outside component
const UNTIL_NOW_START = TYPEWRITER_TEXT.indexOf('until now.');
const TOTAL_CHARS = TYPEWRITER_TEXT.length;

// Memoized inline style objects to prevent re-renders
const ANIMATION_STYLES = {
  fadeIn500: { animationDelay: '0.5s', animationFillMode: 'forwards' as const },
  fadeIn800: { animationDelay: '0.8s', animationFillMode: 'forwards' as const },
  fadeIn1500: { animationDelay: '1500ms', animationFillMode: 'forwards', animationDuration: '600ms' as const },
  fadeIn2000: { animationDelay: '2000ms', animationFillMode: 'forwards' as const },
};

// Static gold color style for reuse
const GOLD_COLOR_STYLE = { color: '#e0b660' } as const;

// Memoized typewriter text component - CSS animation driven, no per-char state updates
const TypewriterText = memo(({ isTyping, textFadedOut }: { isTyping: boolean; textFadedOut: boolean }) => {
  // CSS-driven typewriter: text is always full, overflow hidden animates width
  const showCursor = !textFadedOut && isTyping;
  
  return (
    <p 
      className={`text-2xl sm:text-4xl lg:text-5xl text-zinc-200 font-light leading-tight sm:leading-relaxed whitespace-pre-wrap transition-opacity duration-300 ${isTyping || textFadedOut ? '' : 'opacity-0'}`}
      style={{
        // CSS typewriter animation via clip-path or overflow
        animation: isTyping && !textFadedOut ? 'typewriter-reveal 3.5s steps(60, end) forwards' : 'none',
      }}
    >
      {TYPEWRITER_TEXT}
      {showCursor && <span className="inline-block w-[3px] h-[1em] bg-zinc-200 ml-1 align-middle animate-caret-blink" />}
    </p>
  );
});
TypewriterText.displayName = "TypewriterText";

const Home = () => {
  // Animation phases - set once, never updated during motion
  const [problemPhase, setProblemPhase] = useState(0); // 0: initial, 1: typewriter, 2: text visible, 3: logo visible, 4: exiting
  const [howItWorksPhase, setHowItWorksPhase] = useState(0);
  
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const howItWorksSectionRef = useRef<HTMLDivElement>(null);

  // Derived values from phase - no state updates during animation
  const isTyping = problemPhase >= 1 && problemPhase < 3;

  const textFadedOut = problemPhase >= 3;
  const logoVisible = problemPhase >= 3;
  const logoFadeOut = problemPhase >= 4;

  // Problem section observer - triggers phase changes at thresholds
  useEffect(() => {
    if (!problemSectionRef.current) return;

    const section = problemSectionRef.current;
    
    // Create observers for different scroll positions
    const observers: IntersectionObserver[] = [];
    
    // Phase 1: Section enters viewport (start typewriter)
    // Uses single timeout to phase 2 instead of per-char state updates
    const phase1Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProblemPhase(1);
          // Calculate total typewriter duration and set single timeout to phase 2
          // Total chars / 2 chars per tick * 50ms per tick
          const typewriterDuration = (TOTAL_CHARS / 2) * 50;
          setTimeout(() => {
            setProblemPhase(2);
          }, typewriterDuration);
          phase1Observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    // Phase 2->3: Text fades out, logo fades in (40% scrolled through)
    const phase3Observer = new IntersectionObserver(
      (entries) => {
        // When top 55% of section is out of view
        if (!entries[0].isIntersecting) {
          setProblemPhase(3);
        }
      },
      { threshold: 0.55, rootMargin: '0px 0px 0px 0px' }
    );
    
    // Phase 4: Logo fades out (section exiting)
    const phase4Observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setProblemPhase(4);
        }
      },
      { threshold: 0.1 }
    );
    
    phase1Observer.observe(section);
    phase3Observer.observe(section);
    phase4Observer.observe(section);
    
    observers.push(phase1Observer, phase3Observer, phase4Observer);
    
    return () => observers.forEach(o => o.disconnect());
  }, []);

  // How It Works section observer - triggers once
  useEffect(() => {
    if (!howItWorksSectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Phase 1: Icons appear with "Not Connected"
          setHowItWorksPhase(1);
          // Phase 2: Line connects after 800ms
          setTimeout(() => setHowItWorksPhase(2), 800);
          // Phase 3: Rest of content loads after 1400ms
          setTimeout(() => setHowItWorksPhase(3), 1400);
          // Phase 4: "For Both" section appears after 2000ms
          setTimeout(() => setHowItWorksPhase(4), 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    
    observer.observe(howItWorksSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-caslon">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <div className="mx-auto w-full max-w-6xl text-center relative z-10 px-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal mb-6 sm:mb-8 tracking-tight animate-fade-in-slow text-center w-full mx-auto">
            Lawsuits, Reimagined.
          </h1>
          <p className="text-lg sm:text-3xl text-zinc-300 mb-6 sm:mb-16 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={ANIMATION_STYLES.fadeIn500}>
            An AI-powered platform that connects lawyers and clients through automation and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-slide-up" style={ANIMATION_STYLES.fadeIn800}>
            <Link to="/law-firms">
              <Button size="lg" className="w-auto sm:min-w-[180px] text-base sm:text-lg bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-transform duration-300 hover:scale-105 px-6 sm:px-[34px] py-2.5 sm:py-3 h-auto">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" className="w-auto sm:min-w-[180px] text-base sm:text-lg bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-transform duration-300 hover:scale-105 px-6 sm:px-12 py-2.5 sm:py-3 h-auto">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - Scroll-Locked Typography with Typewriter + Logo Reveal */}
      <section ref={problemSectionRef} className="relative h-[300vh] bg-gradient-to-b from-black via-zinc-950 to-black contain-paint">
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Typewriter Text - CSS-only opacity transition */}
          <div 
            className={`container mx-auto max-w-5xl text-center absolute transition-opacity duration-700 ${textFadedOut ? 'opacity-0' : 'opacity-100'}`}
          >
            <TypewriterText isTyping={isTyping} textFadedOut={textFadedOut} />
          </div>
          
          {/* Logo - CSS-only opacity and transform transitions */}
          <div 
            className={`absolute flex items-center justify-center transition-opacity duration-700 ${logoVisible ? (logoFadeOut ? 'opacity-0' : 'opacity-100') : 'opacity-0'}`}
            style={{ transform: 'scale(1.3)' }}
          >
            <img src={amicusGoldenA} alt="Amicus" className="w-48 sm:w-64 lg:w-80 h-auto" />
          </div>
        </div>
      </section>

      {/* Feature Carousel - The New Architecture */}
      <div className="contain-paint">
        <FeatureCarousel />
      </div>

      {/* How It Works Section - Connection Between Client & Lawyer */}
      <section ref={howItWorksSectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 text-center transition-[transform,opacity] duration-500 leading-tight ${howItWorksPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${howItWorksPhase >= 3 ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-4'}`}>How It Works</h2>
          <p className={`text-lg text-zinc-400 text-center mb-10 lg:mb-16 max-w-2xl mx-auto transition-[transform,opacity] duration-500 delay-100 leading-relaxed ${howItWorksPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${howItWorksPhase >= 3 ? 'lg:opacity-100 lg:translate-y-0' : 'lg:opacity-0 lg:translate-y-4'}`}>
            Amicus bridges clients and their lawyers — making every case tangible, fast-moving, and transparent.
          </p>

          {/* Gold accent divider under heading */}
          <div className={`flex justify-center mb-8 lg:mb-12 transition-opacity duration-500 delay-150 ${howItWorksPhase >= 1 ? 'opacity-100' : 'opacity-0'} ${howItWorksPhase >= 3 ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
            <div className="w-12 h-0.5 bg-gold rounded-full"></div>
          </div>

          {/* Visual Connection - Horizontal layout */}
          <div className="relative mb-16">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-center gap-0">
              {/* For Lawyers Card */}
              <div className={`flex-1 max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 transition-[transform,opacity] duration-500 ${howItWorksPhase >= 1 ? 'opacity-100' : 'opacity-0'} hover:border-gold/40 hover:bg-zinc-900/80`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white">For Lawyers</h3>
                </div>
                <div className={`transition-[transform,opacity] duration-500 delay-200 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
                    A magnificent infrastructure to handle litigation faster.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>AI-powered drafting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>Intelligent automation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>Turn chaos into clarity</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Left Connector */}
              <div className={`w-16 flex items-center transition-opacity duration-700 ${howItWorksPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full border-t-2 border-dashed border-gold/50"></div>
              </div>

              {/* Center Logo - shadow on static wrapper */}
              <div className="flex-shrink-0 relative">
                {/* Static shadow layer */}
                <div className="absolute inset-0 w-24 h-24 rounded-2xl shadow-xl shadow-black/40 pointer-events-none" />
                <div className={`flex flex-col items-center transition-[transform,opacity] duration-500 delay-100 ${howItWorksPhase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden">
                    <img src={amicusALogo} alt="Amicus" className="w-full h-full object-cover" />
                  </div>
                  <img src={amicusGoldenASmall} alt="Amicus" className="w-10 h-auto mt-2" />
                </div>
              </div>

              {/* Right Connector */}
              <div className={`w-16 flex items-center transition-opacity duration-700 ${howItWorksPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full border-t-2 border-dashed border-gold/50"></div>
              </div>

              {/* For Clients Card */}
              <div className={`flex-1 max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 transition-[transform,opacity] duration-500 delay-100 ${howItWorksPhase >= 1 ? 'opacity-100' : 'opacity-0'} hover:border-gold/40 hover:bg-zinc-900/80`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white">For Clients</h3>
                </div>
                <div className={`transition-[transform,opacity] duration-500 delay-300 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
                    Cases become real with an interactive app.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>See progress in real-time</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>Receive instant updates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>Understand what's happening</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col items-center gap-0">
              {/* For Lawyers Card - Phase 1 */}
              <div className={`w-full max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 transition-[transform,opacity] duration-500 ${howItWorksPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">For Lawyers</h3>
                </div>
                <p className="text-zinc-400 mb-4 text-sm">A magnificent infrastructure to handle litigation faster.</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>AI-powered drafting</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Intelligent automation</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Turn chaos into clarity</li>
                </ul>
              </div>

              {/* Mobile Connector - Phase 2 */}
              <div className={`h-12 border-l-2 border-dashed border-gold/50 transition-opacity duration-500 delay-100 ${howItWorksPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}></div>

              {/* Center Logo - Phase 2 (delayed) - shadow on static wrapper */}
              <div className="relative">
                {/* Static shadow layer */}
                <div className="absolute inset-0 w-20 h-20 rounded-xl shadow-lg shadow-black/40 pointer-events-none" />
                <div className={`flex flex-col items-center transition-[transform,opacity] duration-500 delay-200 ${howItWorksPhase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="w-20 h-20 rounded-xl overflow-hidden">
                    <img src={amicusALogo} alt="Amicus" className="w-full h-full object-cover" />
                  </div>
                  <img src={amicusGoldenASmall} alt="Amicus" className="w-[7.5rem] h-auto mt-1" />
                </div>
              </div>

              {/* Mobile Connector - Phase 3 */}
              <div className={`h-6 border-l-2 border-dashed border-gold/50 transition-opacity duration-500 ${howItWorksPhase >= 3 ? 'opacity-100' : 'opacity-0'}`}></div>

              {/* For Clients Card - Phase 3 (delayed) */}
              <div className={`w-full max-w-sm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 transition-[transform,opacity] duration-500 delay-100 ${howItWorksPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">For Clients</h3>
                </div>
                <p className="text-zinc-400 mb-4 text-sm">Cases become real with an interactive app.</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>See progress in real-time</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Receive instant updates</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Understand what's happening</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shared Outcome - appears in phase 4 */}
          <div className={`transition-[transform,opacity] duration-700 ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-zinc-950 border border-zinc-800/50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-px bg-gold/40"></div>
                <h3 className="text-lg sm:text-xl font-medium leading-tight">
                  <span className="block sm:inline">For Both:</span><br className="sm:hidden" /><span style={GOLD_COLOR_STYLE} className="italic">Progress That Moves</span>
                </h3>
                <div className="w-8 h-px bg-gold/40"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
                <div className={`flex flex-col items-center transition-[transform,opacity] duration-500 delay-[100ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-11 h-11 bg-zinc-900 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium mb-1 text-sm">Faster <span className="text-[#e0b660] italic">Forward</span></p>
                  <p className="text-xs text-zinc-500">Every case moves at the speed of technology</p>
                </div>
                <div className={`flex flex-col items-center transition-[transform,opacity] duration-500 delay-[200ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-11 h-11 bg-zinc-900 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <p className="text-white font-medium mb-1 text-sm"><span className="text-[#e0b660] italic">Instant</span> Updates</p>
                  <p className="text-xs text-zinc-500">Shared in real-time, never missed</p>
                </div>
                <div className={`flex flex-col items-center transition-[transform,opacity] duration-500 delay-[300ms] ${howItWorksPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="w-11 h-11 bg-zinc-900 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-medium mb-1 text-sm">Total <span className="text-[#e0b660] italic">Transparency</span></p>
                  <p className="text-xs text-zinc-500">No one feels left in the dark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center space-y-12 animate-scale-in">
          <p className="sm:text-5xl lg:text-6xl font-normal leading-snug sm:leading-normal text-3xl">
            Where litigation meets intelligence.
          </p>
          <p className="sm:text-xl text-zinc-300 leading-relaxed text-base">Amicus is shaping the future of litigation — where cases flow from intake to resolution with intelligence and ease.</p>
          <div className="pt-8">
            <p className="text-3xl font-normal text-white"><span className="text-[#e0b660] italic">Real</span> context.<br className="sm:hidden" /> <span className="text-[#e0b660] italic">Real</span> results.</p>
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
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-transform duration-300">
                Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-transform duration-300">
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
    </div>
  );
};

export default Home;
