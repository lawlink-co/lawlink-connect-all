const ScrollRevealImages = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-12 overflow-visible">
      <div className="relative z-20 flex justify-center">
        <video
          className="w-full mx-auto rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/ai-drafting-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ScrollRevealImages;
