import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <Navigation />
      
      {/* Hero Section - The Vision */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-black pointer-events-none" />
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in-slow">
            Lawsuits, Reimagined.
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            LAWLINK is building the modern backbone a lagging industry doesn't know it needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-105">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-zinc-200 font-light">
                Litigants don't trust lawyers. Lawyers spend hours fielding calls from clients left in the dark.
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-zinc-200 font-light">
                The system is outdated — and nobody's fixing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The Solution
            </h2>
            <p className="text-2xl sm:text-3xl text-zinc-300 leading-relaxed font-light">
              LAWLINK makes lawsuits tangible. It connects lawyers and clients in real time through AI-driven clarity and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="space-y-12 animate-scale-in">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              LAWLINK isn't just software —<br />
              it's becoming the platform where cases begin, move, and close.
            </p>
            <div className="pt-8">
              <p className="text-xl text-zinc-400 mb-2">It reads your documents, case timeline, and discovery data,</p>
              <p className="text-xl text-zinc-400 mb-8">then drafts what you actually need.</p>
              <p className="text-2xl font-semibold text-white">Real context. Real results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
            Choose Your Experience
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-100 transition-all duration-300">
                Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="container mx-auto text-center text-zinc-500">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
