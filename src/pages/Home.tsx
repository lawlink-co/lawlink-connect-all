import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import FeatureCarousel from "@/components/FeatureCarousel";
const Home = () => {
  return <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in-slow">
            Lawsuits, Reimagined.
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-300 mb-16 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            An AI-powered platform that connects lawyers and clients through automation and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:min-w-[180px] text-lg bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-all duration-300 hover:scale-105 px-[34px]">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" className="w-full sm:min-w-[180px] text-lg px-12 bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-all duration-300 hover:scale-105">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section - Scrolling Typography */}
      <section className="min-h-screen flex items-center pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black">
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

      {/* Feature Carousel - The New Architecture */}
      <FeatureCarousel />

      {/* How It Works Section - Connection Between Client & Lawyer */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">How It Works</h2>
          <p className="text-xl text-zinc-400 text-center mb-20 max-w-3xl mx-auto">
            LAWLINK bridges clients and their lawyers — making every case tangible, fast-moving, and transparent.
          </p>

          {/* Visual Connection */}
          <div className="relative mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* For Clients */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-primary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg p-10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">For Clients</h3>
                  <p className="text-zinc-400 text-center mb-6 leading-relaxed">
                    Your case becomes <span className="text-white font-semibold">real</span> through an interactive app.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>See progress in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>Receive instant updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>Understand what's happening</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Connection Visual */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-blue-500 blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative flex flex-col items-center gap-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-primary"></div>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-blue-400"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-6 text-center font-semibold tracking-wider uppercase">
                  Connected
                </p>
              </div>

              {/* For Lawyers */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg p-10 hover:border-primary/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">For Lawyers</h3>
                  <p className="text-zinc-400 text-center mb-6 leading-relaxed">
                    A <span className="text-white font-semibold">magnificent infrastructure</span> to handle litigation faster.
                  </p>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">→</span>
                      <span>AI-powered drafting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">→</span>
                      <span>Intelligent automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">→</span>
                      <span>Turn chaos into clarity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Outcome */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-primary/10 to-blue-500/10 blur-3xl"></div>
            <div className="relative bg-zinc-950/80 border border-zinc-800 rounded-lg p-12 text-center backdrop-blur">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                For Both: Progress That Moves
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Faster Forward</p>
                  <p className="text-sm text-zinc-400">Every case moves at the speed of technology</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Instant Updates</p>
                  <p className="text-sm text-zinc-400">Shared in real-time, never missed</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold mb-2">Total Transparency</p>
                  <p className="text-sm text-zinc-400">No one feels left in the dark</p>
                </div>
              </div>
            </div>
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
            LAWLINK is shaping the future of litigation — where cases flow from intake to resolution with intelligence and ease.
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
              <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-white text-black hover:bg-zinc-200 transition-all duration-300">
                Clients
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-8">Explore the tech • View the AI</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm text-zinc-500">
            LAWLINK is built for confidentiality and reliability from the ground up.
          </p>
          <p className="text-zinc-500">&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Home;