import { useEffect, useRef, useState } from "react";
import aiAgentMain from "@/assets/ai-agent-main.png";
import cardSummaryJudgment from "@/assets/card-summary-judgment.png";
import cardTranscript from "@/assets/card-transcript.png";
import cardDemolition from "@/assets/card-demolition.png";
import cardCaseUpdate from "@/assets/card-case-update.png";

const ScrollRevealImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Progress from 0 (element just entering) to 1 (element centered/past)
      const distanceFromTop = windowHeight - rect.top;
      const totalDistance = windowHeight + rect.height;
      const progress = Math.max(0, Math.min(1, distanceFromTop / totalDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card configurations matching the reference image
  const cards = [
    {
      src: cardSummaryJudgment,
      alt: "Summary Judgment card",
      // Top-left position
      finalX: -320,
      finalY: -80,
      finalRotate: -15,
      size: "w-64 md:w-80",
    },
    {
      src: cardDemolition,
      alt: "Demolition work card", 
      // Top-right position
      finalX: 320,
      finalY: -60,
      finalRotate: 12,
      size: "w-72 md:w-96",
    },
    {
      src: cardCaseUpdate,
      alt: "Case Update card",
      // Bottom-left position
      finalX: -280,
      finalY: 120,
      finalRotate: -8,
      size: "w-56 md:w-72",
    },
    {
      src: cardTranscript,
      alt: "Transcript card",
      // Bottom-right position
      finalX: 300,
      finalY: 140,
      finalRotate: 15,
      size: "w-52 md:w-64",
    },
  ];

  const getCardStyle = (index: number) => {
    const card = cards[index];
    // Stagger the reveal for each card
    const staggeredProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05 * index) * 1.8));
    
    return {
      transform: `
        translateX(${card.finalX * staggeredProgress}px) 
        translateY(${card.finalY * staggeredProgress}px) 
        rotate(${card.finalRotate * staggeredProgress}deg)
      `,
      opacity: staggeredProgress,
      transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
    };
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12">
      {/* Secondary images that pop out */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {cards.map((card, index) => (
          <img
            key={index}
            src={card.src}
            alt={card.alt}
            className={`absolute ${card.size} rounded-xl shadow-2xl z-10`}
            style={getCardStyle(index)}
          />
        ))}
      </div>
      
      {/* Main image */}
      <div className="relative z-20">
        <img
          src={aiAgentMain}
          alt="LAWLINK AI Agent - Case management interface with AI drafting capabilities"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;
