import { memo } from "react";
import Navigation from "@/components/Navigation";

// Pre-define static animation styles to prevent object recreation
const ANIMATION_STYLES = {
  delay100: { animationDelay: '100ms', animationFillMode: 'forwards' as const },
  delay300: { animationDelay: '300ms', animationFillMode: 'forwards' as const },
  delay500: { animationDelay: '500ms', animationFillMode: 'forwards' as const, minHeight: '700px' },
};

const CALENDLY_URL = "https://calendly.com/case-amicusai/30min";

const Demo = memo(() => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-6 opacity-0 animate-fade-in" style={ANIMATION_STYLES.delay100}>
            Schedule Your Demo
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 font-light mb-12 opacity-0 animate-fade-in" style={ANIMATION_STYLES.delay300}>
            See how Amicus can transform your practice. Pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden opacity-0 animate-fade-in"
            style={ANIMATION_STYLES.delay500}
          >
            {/* Calendly inline widget */}
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=18181b&text_color=ffffff&primary_color=d4af37`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a demo"
              className="w-full"
            />
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
});
Demo.displayName = "Demo";

export default Demo;
