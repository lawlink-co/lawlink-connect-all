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
      
      // Calculate progress based on element position
      // Start animation when element enters viewport, complete when it's centered
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Progress from 0 (element just entering) to 1 (element centered/past)
      const distanceFromTop = windowHeight - rect.top;
      const totalDistance = windowHeight + rect.height;
      const progress = Math.max(0, Math.min(1, distanceFromTop / totalDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms for secondary elements based on scroll
  const getSecondaryStyle = (index: number) => {
    // Stagger the reveal for each card
    const staggeredProgress = Math.max(0, Math.min(1, (scrollProgress - 0.1 * index) * 2));
    
    const configs = [
      { x: -180, y: -120, rotate: -12 }, // top-left card
      { x: 220, y: -80, rotate: 8 },     // top-right card
      { x: -160, y: 140, rotate: -8 },   // bottom-left card  
      { x: 200, y: 160, rotate: 12 },    // bottom-right card
    ];
    
    const config = configs[index];
    
    return {
      transform: `
        translateX(${config.x * staggeredProgress}px) 
        translateY(${config.y * staggeredProgress}px) 
        rotate(${config.rotate * staggeredProgress}deg)
        scale(${0.8 + 0.2 * staggeredProgress})
      `,
      opacity: staggeredProgress,
      transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
    };
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12">
      {/* Secondary images that pop out */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Top-left card */}
        <img
          src={cardSummaryJudgment}
          alt="Summary Judgment card"
          className="absolute w-[480px] md:w-[640px] rounded-lg shadow-2xl z-10"
          style={getSecondaryStyle(0)}
        />
        
        {/* Top-right card */}
        <img
          src={cardTranscript}
          alt="Transcript card"
          className="absolute w-[400px] md:w-[560px] rounded-lg shadow-2xl z-10"
          style={getSecondaryStyle(1)}
        />
        
        {/* Bottom-left card */}
        <img
          src={cardCaseUpdate}
          alt="Case Update card"
          className="absolute w-[440px] md:w-[600px] rounded-lg shadow-2xl z-10"
          style={getSecondaryStyle(2)}
        />
        
        {/* Bottom-right card */}
        <img
          src={cardDemolition}
          alt="Demolition work card"
          className="absolute w-[480px] md:w-[640px] rounded-lg shadow-2xl z-10"
          style={getSecondaryStyle(3)}
        />
      </div>
      
      {/* Main image */}
      <div className="relative z-20">
        <img
          src={aiAgentMain}
          alt="LAWLINK AI Agent - Case management interface with AI drafting capabilities"
          className="w-full rounded-xl shadow-2xl border border-zinc-800"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;
