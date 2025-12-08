import { useEffect, useState } from "react";
import aiAgentDrafting from "@/assets/ai-agent-drafting-new.png";
import summaryJudgmentCard from "@/assets/summary-judgment-card.png";
import caseUpdateCard from "@/assets/case-update-card.png";
import demolitionCard from "@/assets/demolition-card.png";
import transcriptCard from "@/assets/transcript-card.png";

const ScrollRevealImages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-24 overflow-visible">
      {/* Main image - rendered first so cards can position relative to it */}
      <div className="relative z-20 flex justify-center">
        <img
          src={aiAgentDrafting}
          alt="LAWLINK AI Agent - Case management interface with AI drafting capabilities"
          className="w-[80%] mx-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Left side upper - Summary Judgment card */}
      <div 
        className={`absolute top-[5%] left-[5%] z-10 transition-all duration-700 ease-out
          ${isVisible ? '-rotate-12 opacity-100 translate-x-0' : '-rotate-6 opacity-0 -translate-x-12'}`}
        style={{ transitionDelay: '0.1s' }}
      >
        <img
          src={summaryJudgmentCard}
          alt="Defendants Move for Summary Judgment card"
          className="w-80 rounded-xl shadow-lg"
        />
      </div>

      {/* Right side upper - Demolition card */}
      <div 
        className={`absolute top-[5%] right-[5%] z-10 transition-all duration-700 ease-out
          ${isVisible ? 'rotate-12 opacity-100 translate-x-0' : 'rotate-6 opacity-0 translate-x-12'}`}
        style={{ transitionDelay: '0.3s' }}
      >
        <img
          src={demolitionCard}
          alt="Demolition work exhibit card"
          className="w-80 rounded-xl shadow-lg"
        />
      </div>

      {/* Left side lower - Case Update card */}
      <div 
        className={`absolute bottom-[5%] left-[8%] z-10 transition-all duration-700 ease-out
          ${isVisible ? '-rotate-6 opacity-100 translate-x-0' : '-rotate-3 opacity-0 -translate-x-12'}`}
        style={{ transitionDelay: '0.5s' }}
      >
        <img
          src={caseUpdateCard}
          alt="Case Update notification card"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>

      {/* Right side lower - Transcript card */}
      <div 
        className={`absolute bottom-[5%] right-[8%] z-10 transition-all duration-700 ease-out
          ${isVisible ? 'rotate-6 opacity-100 translate-x-0' : 'rotate-3 opacity-0 translate-x-12'}`}
        style={{ transitionDelay: '0.7s' }}
      >
        <img
          src={transcriptCard}
          alt="Deposition transcript card"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;
