import aiKnowsCases from "@/assets/ai-knows-cases.png";

const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 overflow-visible">
      <div className="relative z-20 flex justify-center">
        <img
          src={aiKnowsCases}
          alt="Your AI Should Know Your Cases - Amicus AI interface"
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;