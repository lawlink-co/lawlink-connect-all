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
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Card configurations - 10X size, 50% reveal from behind main image
  const cards = [{
    src: cardSummaryJudgment,
    alt: "Summary Judgment card",
    // Top-left position
    finalX: -160,
    finalY: -40,
    finalRotate: -15,
    size: "w-[640px] md:w-[800px]"
  }, {
    src: cardDemolition,
    alt: "Demolition work card",
    // Top-right position
    finalX: 160,
    finalY: -30,
    finalRotate: 12,
    size: "w-[720px] md:w-[960px]"
  }, {
    src: cardCaseUpdate,
    alt: "Case Update card",
    // Bottom-left position
    finalX: -140,
    finalY: 60,
    finalRotate: -8,
    size: "w-[560px] md:w-[720px]"
  }, {
    src: cardTranscript,
    alt: "Transcript card",
    // Bottom-right position
    finalX: 150,
    finalY: 70,
    finalRotate: 15,
    size: "w-[520px] md:w-[640px]"
  }];
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
      transition: "transform 0.15s ease-out, opacity 0.15s ease-out"
    };
  };
  return <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12">
      {/* Secondary images that pop out */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {cards.map((card, index) => <img key={index} src={card.src} alt={card.alt} className={`absolute ${card.size} rounded-xl shadow-2xl z-10`} style={getCardStyle(index)} />)}
      </div>
      
    </div>;
};
export default ScrollRevealImages;