import { useState, useCallback, useEffect, useRef, memo, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import aiDraftingNew from "@/assets/ai-drafting-new.png";
import clientExperienceDemo from "@/assets/client-experience-demo.png";
import screenshotDashboard from "@/assets/screenshot-dashboard.png";

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const slides: CarouselSlide[] = [
  {
    title: "Intelligence That Understands Your Practice",
    description: "Amicus's AI reads every transcript, filing, and exhibit — transforming raw documents into organized, contextual knowledge. It doesn't just automate drafting — it understands the why behind your cases.",
    image: aiDraftingNew,
    imageAlt: "AI-powered summons and complaint drafting interface"
  },
  {
    title: "Infrastructure That Scales With Every Case",
    description: "Behind the interface is a layered system built for volume and precision. As your firm grows, customize your CRM to match: create new pages, reorganize your workspace, and set permissions to fit your evolving workflow. From intake to resolution, every document, update, and deadline connects across one living database — your firm's new operating system.",
    image: screenshotDashboard,
    imageAlt: "Case dashboard and management system"
  },
  {
    title: "Connection That Redefines the Client Experience",
    description: "Clients don't log into portals — they join the process. Amicus bridges the space between lawyer and client, translating every update into clarity, trust, and forward motion.",
    image: clientExperienceDemo,
    imageAlt: "Client case status tracking interface"
  }
];

// Memoized slide panel - renders slide content with positioned transform
const SlidePanel = memo(({ 
  slide, 
  position 
}: { 
  slide: CarouselSlide; 
  position: 'prev' | 'active' | 'next';
}) => {
  const positionStyles: Record<string, string> = {
    prev: 'translate-x-[-100%] opacity-0',
    active: 'translate-x-0 opacity-100',
    next: 'translate-x-[100%] opacity-0'
  };

  return (
    <div 
      className={`absolute inset-0 transition-[transform,opacity] duration-300 ease-out will-change-transform ${positionStyles[position]}`}
      aria-hidden={position !== 'active'}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center px-0 sm:px-4 h-full">
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h3 className="text-2xl sm:text-4xl font-normal text-white leading-tight">
            {slide.title}
          </h3>
          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
            {slide.description}
          </p>
        </div>
        <div className="relative w-full px-4 sm:px-0">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full pointer-events-none"></div>
          <img
            src={slide.image}
            alt={slide.imageAlt}
            className="relative rounded-sm sm:rounded-lg shadow-xl w-full"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
});
SlidePanel.displayName = "SlidePanel";

// Memoized navigation dot
const NavigationDot = memo(({ 
  index, 
  isActive, 
  onClick 
}: { 
  index: number; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`h-2 rounded-full transition-[transform,opacity] duration-300 ${
      isActive
        ? "w-8 bg-white"
        : "w-2 bg-zinc-600 hover:bg-zinc-500"
    }`}
    aria-label={`Go to slide ${index + 1}`}
  />
));
NavigationDot.displayName = "NavigationDot";

// Memoized navigation arrows
const NavigationArrows = memo(({ 
  onPrev, 
  onNext 
}: { 
  onPrev: () => void; 
  onNext: () => void;
}) => (
  <div className="hidden sm:flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none px-2 sm:px-4 lg:px-8">
    <Button
      variant="outline"
      size="icon"
      onClick={onPrev}
      className="pointer-events-auto bg-zinc-900/90 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
    >
      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
    <Button
      variant="outline"
      size="icon"
      onClick={onNext}
      className="pointer-events-auto bg-zinc-900/90 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
    >
      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
  </div>
));
NavigationArrows.displayName = "NavigationArrows";

// Mobile swipe hint component
const SwipeHint = memo(({ visible }: { visible: boolean }) => (
  <div 
    className={`absolute inset-0 pointer-events-none flex items-center justify-between px-2 transition-opacity duration-500 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div className="bg-black/60 rounded-full p-1.5 animate-pulse">
      <ChevronLeft className="h-4 w-4 text-white/70" />
    </div>
    <div className="bg-black/60 rounded-full p-1.5 animate-pulse">
      <ChevronRight className="h-4 w-4 text-white/70" />
    </div>
  </div>
));
SwipeHint.displayName = "SwipeHint";

const FeatureCarousel = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Touch gesture state - refs to avoid state updates during swipe
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const currentTranslateX = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);
  const isTransitionLocked = useRef<boolean>(false);

  const scrollTo = useCallback((index: number) => {
    if (isTransitionLocked.current || index === selectedIndex) return;
    
    isTransitionLocked.current = true;
    setHasInteracted(true);
    setSelectedIndex(index);
    
    // Unlock after transition completes
    setTimeout(() => {
      isTransitionLocked.current = false;
    }, prefersReducedMotion ? 0 : 300);
  }, [selectedIndex, prefersReducedMotion]);

  const scrollPrev = useCallback(() => {
    const newIndex = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    scrollTo(newIndex);
  }, [selectedIndex, scrollTo]);

  const scrollNext = useCallback(() => {
    const newIndex = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    scrollTo(newIndex);
  }, [selectedIndex, scrollTo]);

  // Touch handlers - only update refs during gesture, state at end
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (isTransitionLocked.current) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    currentTranslateX.current = 0;
    isSwiping.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isTransitionLocked.current) return;
    
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const deltaY = e.touches[0].clientY - touchStartY.current;
    
    // Determine if horizontal swipe
    if (!isSwiping.current && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      isSwiping.current = true;
    }
    
    // During swipe, update transform via ref (no state, no DOM mutation)
    if (isSwiping.current && containerRef.current) {
      currentTranslateX.current = deltaX;
      // Use CSS custom property for transform - single DOM write
      containerRef.current.style.setProperty('--swipe-offset', `${deltaX}px`);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isSwiping.current) return;
    
    const swipeThreshold = 50;
    const deltaX = currentTranslateX.current;
    
    // Reset custom property
    if (containerRef.current) {
      containerRef.current.style.setProperty('--swipe-offset', '0px');
    }
    
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        scrollPrev();
      } else {
        scrollNext();
      }
    }
    
    isSwiping.current = false;
    currentTranslateX.current = 0;
  }, [scrollPrev, scrollNext]);

  // Autoplay for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    autoplayRef.current = setInterval(() => {
      if (!isTransitionLocked.current) {
        const newIndex = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
        scrollTo(newIndex);
      }
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isMobile, selectedIndex, scrollTo]);

  // Compute virtualized slides: only active + neighbors
  const virtualizedSlides = useMemo(() => {
    const prevIndex = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    const nextIndex = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    
    return [
      { slide: slides[prevIndex], position: 'prev' as const, key: prevIndex },
      { slide: slides[selectedIndex], position: 'active' as const, key: selectedIndex },
      { slide: slides[nextIndex], position: 'next' as const, key: nextIndex },
    ];
  }, [selectedIndex]);

  // Memoize dot click handlers
  const dotClickHandlers = useMemo(() => 
    slides.map((_, index) => () => scrollTo(index)),
    [scrollTo]
  );

  return (
    <section className="py-32 px-0 sm:px-8 lg:px-16 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal mb-8 sm:mb-16 text-center text-white font-lora">
          The New Architecture of Legal Work
        </h2>
      </div>

      <div className="relative container mx-auto px-0 sm:px-0">
        <div className="max-w-6xl mx-auto">
          {/* Virtualized slide track - transform controlled via CSS variable during swipe */}
          <div 
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ 
              minHeight: '400px',
              // CSS variable for swipe offset, read by child transforms
              ['--swipe-offset' as string]: '0px'
            }}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            {/* Only render active + neighbors - no mount/unmount during swipe */}
            {virtualizedSlides.map(({ slide, position, key }) => (
              <SlidePanel 
                key={key} 
                slide={slide} 
                position={position}
              />
            ))}
            
            {/* Mobile swipe hint overlay */}
            {isMobile && <SwipeHint visible={!hasInteracted} />}
          </div>

          {/* Navigation Dots */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <NavigationDot
                  key={index}
                  index={index}
                  isActive={index === selectedIndex}
                  onClick={dotClickHandlers[index]}
                />
              ))}
            </div>
            {/* Mobile swipe hint text */}
            {isMobile && (
              <p 
                className={`text-xs text-zinc-500 transition-opacity duration-500 ${
                  hasInteracted ? 'opacity-0' : 'opacity-100'
                }`}
              >
                Swipe to explore
              </p>
            )}
          </div>
        </div>

        <NavigationArrows onPrev={scrollPrev} onNext={scrollNext} />
      </div>
    </section>
  );
};

export default memo(FeatureCarousel);
