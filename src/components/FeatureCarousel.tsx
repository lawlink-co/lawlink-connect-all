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

// Memoized slide content component - only re-renders when slide data changes
const SlideContent = memo(({ slide }: { slide: CarouselSlide }) => (
  <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
    <h3 className="text-2xl sm:text-4xl font-normal text-white leading-tight">
      {slide.title}
    </h3>
    <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
      {slide.description}
    </p>
  </div>
));
SlideContent.displayName = "SlideContent";

// Memoized slide image component - only re-renders when image changes
const SlideImage = memo(({ slide, preloadImages }: { slide: CarouselSlide; preloadImages: string[] }) => (
  <>
    <div className="absolute inset-0 bg-blue-500/10 rounded-full pointer-events-none"></div>
    <img
      src={slide.image}
      alt={slide.imageAlt}
      className="relative rounded-sm sm:rounded-lg shadow-xl w-full"
    />
    {/* Preload neighbor images */}
    {preloadImages.map((src) => (
      <link key={src} rel="preload" as="image" href={src} />
    ))}
  </>
));
SlideImage.displayName = "SlideImage";

// Memoized navigation dot - only re-renders when active state changes
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

// Memoized navigation arrows - never re-renders unless callbacks change
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
    <div className="bg-black/40 backdrop-blur-sm rounded-full p-1.5 animate-pulse">
      <ChevronLeft className="h-4 w-4 text-white/70" />
    </div>
    <div className="bg-black/40 backdrop-blur-sm rounded-full p-1.5 animate-pulse">
      <ChevronRight className="h-4 w-4 text-white/70" />
    </div>
  </div>
));
SwipeHint.displayName = "SwipeHint";

const FeatureCarousel = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Touch gesture refs
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  // Faster transition timing for snappier feel
  const fadeOutDuration = prefersReducedMotion ? 0 : 200;
  const fadeInDelay = prefersReducedMotion ? 0 : 50;

  const scrollTo = useCallback((index: number) => {
    if (isTransitioning || index === selectedIndex) return;
    
    setIsTransitioning(true);
    setHasInteracted(true);
    
    // After fade out completes, switch slides
    setTimeout(() => {
      setSelectedIndex(index);
      // After a brief moment, end transition to fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, fadeInDelay);
    }, fadeOutDuration);
  }, [isTransitioning, selectedIndex, fadeOutDuration, fadeInDelay]);

  const scrollPrev = useCallback(() => {
    const newIndex = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    scrollTo(newIndex);
  }, [selectedIndex, scrollTo]);

  const scrollNext = useCallback(() => {
    const newIndex = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    scrollTo(newIndex);
  }, [selectedIndex, scrollTo]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const deltaX = e.touches[0].clientX - touchStartX.current;
    const deltaY = e.touches[0].clientY - touchStartY.current;
    
    // If horizontal movement > vertical, it's a swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      isSwiping.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50;
    
    if (isSwiping.current && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        scrollPrev(); // Swipe right = previous
      } else {
        scrollNext(); // Swipe left = next
      }
    }
  }, [scrollPrev, scrollNext]);

  // Autoplay for mobile (pauses after interaction for better UX)
  useEffect(() => {
    if (!isMobile) return;
    
    autoplayRef.current = setInterval(() => {
      if (!isTransitioning) {
        const newIndex = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
        scrollTo(newIndex);
      }
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isMobile, selectedIndex, isTransitioning, scrollTo]);

  // Memoize current slide to prevent object recreation
  const currentSlide = useMemo(() => slides[selectedIndex], [selectedIndex]);

  // Memoize preload images array
  const preloadImages = useMemo(() => {
    const prev = selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    const next = selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    return [slides[prev].image, slides[next].image];
  }, [selectedIndex]);

  // Memoize dot click handlers to prevent recreation
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

      {/* Full-width container for button positioning */}
      <div className="relative container mx-auto px-0 sm:px-0">
        {/* Content container with max-width */}
        <div className="max-w-6xl mx-auto">
          {/* Slide Content with fade animation and touch handlers */}
          <div 
            className={`transition-opacity duration-200 ease-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center px-0 sm:px-4">
              <SlideContent slide={currentSlide} />
              
              <div className="relative w-full px-4 sm:px-0">
                <SlideImage slide={currentSlide} preloadImages={preloadImages} />
                
                {/* Mobile swipe hint - shows chevrons until first interaction */}
                {isMobile && <SwipeHint visible={!hasInteracted} />}
                
                {/* Mobile Navigation Dots - Inside each slide, below image */}
                {isMobile && (
                  <div className="flex flex-col items-center gap-2 mt-6">
                    <div className="flex justify-center gap-2">
                      {slides.map((_, dotIndex) => (
                        <NavigationDot
                          key={dotIndex}
                          index={dotIndex}
                          isActive={dotIndex === selectedIndex}
                          onClick={dotClickHandlers[dotIndex]}
                        />
                      ))}
                    </div>
                    {/* Swipe hint text */}
                    <p 
                      className={`text-xs text-zinc-500 transition-opacity duration-500 ${
                        hasInteracted ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Swipe to explore
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Dots */}
          {!isMobile && (
            <div className="flex justify-center gap-2 mt-12">
              {slides.map((_, index) => (
                <NavigationDot
                  key={index}
                  index={index}
                  isActive={index === selectedIndex}
                  onClick={dotClickHandlers[index]}
                />
              ))}
            </div>
          )}
        </div>

        <NavigationArrows onPrev={scrollPrev} onNext={scrollNext} />
      </div>
    </section>
  );
};

export default memo(FeatureCarousel);
