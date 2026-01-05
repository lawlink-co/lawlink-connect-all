import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import aiDraftingDemo from "@/assets/ai-drafting-demo.png";
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
    image: aiDraftingDemo,
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

const FeatureCarousel = () => {
  const isMobile = useIsMobile();
  const plugins = isMobile 
    ? [Fade(), Autoplay({ delay: 5000, stopOnInteraction: false })]
    : [Fade()];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false, duration: 40 }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

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
            {/* Carousel Container */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {slides.map((slide, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 transition-opacity duration-700 ease-out"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center px-0 sm:px-4">
                      {/* Text Content */}
                      <div className="space-y-4 sm:space-y-6 px-4 sm:px-0">
                        <h3 className="text-2xl sm:text-4xl font-normal text-white leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-base sm:text-xl text-zinc-400 leading-relaxed">
                          {slide.description}
                        </p>
                      </div>

                      {/* Image */}
                      <div className="relative w-full px-4 sm:px-0">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className="relative rounded-sm sm:rounded-lg shadow-2xl w-full"
                        />
                        
                        {/* Mobile Navigation Dots - Inside each slide, below image */}
                        {isMobile && (
                          <div className="flex justify-center gap-2 mt-6">
                            {slides.map((_, dotIndex) => (
                              <button
                                key={dotIndex}
                                onClick={() => scrollTo(dotIndex)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  dotIndex === selectedIndex
                                    ? "w-8 bg-white"
                                    : "w-2 bg-zinc-600 hover:bg-zinc-500"
                                }`}
                                aria-label={`Go to slide ${dotIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Navigation Dots */}
            {!isMobile && (
              <div className="flex justify-center gap-2 mt-12">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-zinc-600 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden sm:flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none px-2 sm:px-4 lg:px-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="pointer-events-auto bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="pointer-events-auto bg-zinc-900/80 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </section>
  );
};

export default FeatureCarousel;