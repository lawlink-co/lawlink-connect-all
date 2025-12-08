import aiAgentDrafting from "@/assets/ai-agent-drafting-v2.png";
import summaryJudgmentCard from "@/assets/summary-judgment-card.png";

const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Background card - top right */}
      <div className="absolute -top-8 -right-32 z-10">
        <img
          src={summaryJudgmentCard}
          alt="Defendants Move for Summary Judgment card"
          className="w-80 rounded-xl shadow-lg"
        />
      </div>
      
      {/* Main image */}
      <div className="relative z-20">
        <img
          src={aiAgentDrafting}
          alt="LAWLINK AI Agent - Case management interface with AI drafting capabilities"
          className="w-full max-w-[6144px] mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;
