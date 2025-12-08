import aiAgentDrafting from "@/assets/ai-agent-drafting-v2.png";
import summaryJudgmentCard from "@/assets/summary-judgment-card.png";
import caseUpdateCard from "@/assets/case-update-card.png";
import demolitionCard from "@/assets/demolition-card.png";
import transcriptCard from "@/assets/transcript-card.png";

const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Top left - Summary Judgment card */}
      <div className="absolute -top-4 -left-48 z-10 -rotate-12">
        <img
          src={summaryJudgmentCard}
          alt="Defendants Move for Summary Judgment card"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>

      {/* Top right - Demolition card */}
      <div className="absolute -top-4 -right-48 z-10 rotate-12">
        <img
          src={demolitionCard}
          alt="Demolition work exhibit card"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>

      {/* Bottom left - Case Update card */}
      <div className="absolute -bottom-4 -left-48 z-10 -rotate-6">
        <img
          src={caseUpdateCard}
          alt="Case Update notification card"
          className="w-72 rounded-xl shadow-lg"
        />
      </div>

      {/* Bottom right - Transcript card */}
      <div className="absolute -bottom-4 -right-48 z-10 rotate-6">
        <img
          src={transcriptCard}
          alt="Deposition transcript card"
          className="w-72 rounded-xl shadow-lg"
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
