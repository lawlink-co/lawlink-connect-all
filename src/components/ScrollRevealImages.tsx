import sourcesUsedImage from "@/assets/sources-used-in-draft.png";

const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 overflow-visible">
      <div className="relative z-20 flex justify-center">
        <img
          src={sourcesUsedImage}
          alt="Sources Used in This Draft - Prior Complaints & Bills Of Particulars, Motion Papers Filed by Your Firm, Deposition Transcripts, Prior Verdicts & Settlements, Firm-Specific Clause Library"
          className="w-full mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ScrollRevealImages;
