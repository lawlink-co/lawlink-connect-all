import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/frame-1.jpg";
import solutionVisual from "@/assets/special-discount.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in-slow">
            Lawsuits, Reimagined.
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            LAWLINK is building the modern backbone a lagging industry doesn't know it needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            <img 
              src={heroBackground} 
              alt="LAWLINK Platform Vision"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Problem Section - Scrolling Typography */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <div className="space-y-8 animate-fade-in">
            <p className="text-3xl sm:text-4xl lg:text-5xl text-zinc-200 font-light leading-tight">
              Litigants don't trust lawyers.
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl text-zinc-200 font-light leading-tight">
              Lawyers drown in admin.
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl text-zinc-200 font-light leading-tight">
              The way legal work gets done hasn't evolved — until now.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Tech Flash */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Neural Infrastructure for Law
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed">
                LAWLINK isn't just a case manager — it's a neural infrastructure for the practice of law.
              </p>
              <p className="text-lg text-zinc-400">
                Every document, transcript, and deposition is parsed, embedded, and understood.
              </p>
              <p className="text-lg text-zinc-400">
                Our AI agents work behind the scenes to analyze, summarize, and draft with human-grade precision.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src={solutionVisual} 
                alt="AI-powered legal drafting interface"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-primary transition-all duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Albert</h3>
              <p className="text-zinc-400">Orchestrates workflow</p>
            </div>
            
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-primary transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ruben</h3>
              <p className="text-zinc-400">Extracts and summarizes case data</p>
            </div>
            
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-primary transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Charles</h3>
              <p className="text-zinc-400">Strategizes legal positioning</p>
            </div>
            
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-primary transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">V</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vivian</h3>
              <p className="text-zinc-400">Drafts with context-aware intelligence</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-zinc-950/50 border border-zinc-800 rounded-lg">
            <p className="text-sm text-zinc-400 leading-relaxed">
              LAWLINK runs on a multi-repo architecture — Ruby on Rails backend, Vue.js frontend, and a Python agentic service (Sapphire) powered by FastAPI, LangGraph, and Nomic embeddings. It's more than automation; it's orchestration.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center space-y-12 animate-scale-in">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Where litigation meets intelligence.
          </p>
          <p className="text-2xl sm:text-3xl text-zinc-300 leading-relaxed">
            LAWLINK will become the platform where lawsuits begin, move, and close.
          </p>
          <div className="pt-8">
            <p className="text-3xl font-semibold text-white">Real context. Real results.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Choose Your Experience
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-all duration-300">
                Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                Clients
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-8">Explore the tech • View the AI</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center text-zinc-500">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
