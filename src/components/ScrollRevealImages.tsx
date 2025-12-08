import aiAgentDrafting from "@/assets/ai-agent-drafting.png";

const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="relative z-20">
        <img
          src={aiAgentDrafting}
          alt="LAWLINK AI Agent - Case management interface with AI drafting capabilities"
          className="w-full max-w-[3072px] mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;