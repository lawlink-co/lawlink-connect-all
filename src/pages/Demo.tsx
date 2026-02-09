import { Helmet } from "react-helmet-async";

const Demo = () => {
  // Replace this with your actual Calendly link
  const CALENDLY_URL = "https://calendly.com/case-amicusai/30min";

  return (
    <>
      <Helmet>
        <title>Book a Demo - See Amicus CRM for PI Firms | Amicus</title>
        <meta name="description" content="Schedule a demo to see how Amicus CRM transforms personal injury law firm workflows. Case management, AI drafting, and client communication in one platform." />
        <link rel="canonical" href="https://amicusai.com/book-demo" />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wide mb-6 opacity-0 animate-fade-in" style={{
              animationDelay: '100ms',
              animationFillMode: 'forwards'
            }}>
              Book a Demo - See Amicus CRM for Personal Injury Firms
            </h1>
          <p className="text-lg sm:text-xl text-zinc-400 font-light mb-12 opacity-0 animate-fade-in" style={{
            animationDelay: '300ms',
            animationFillMode: 'forwards'
          }}>
            See how Amicus can transform your practice. Pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden opacity-0 animate-fade-in"
            style={{
              animationDelay: '500ms',
              animationFillMode: 'forwards',
              minHeight: '700px'
            }}
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
    </>
  );
};

export default Demo;
