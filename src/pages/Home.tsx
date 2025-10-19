import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Users, Shield, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiKnowsCases from "@/assets/ai-knows-cases.jpg";

const Home = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#434854' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            Lawsuits, Reimagined
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            LAWLINK modernizes litigation with AI that reads every document, 
            understands every case, and drives results faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/law-firms">
              <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100">
                For Law Firms
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-10 py-7 border-white text-black bg-white hover:bg-white/90">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3a3f4a' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-white">
            Where Law Meets Automation
          </h2>
          <p className="text-center text-gray-200 mb-16 text-xl max-w-3xl mx-auto">
            LAWLINK's AI reads pleadings, depositions, and discovery data to help lawyers work faster 
            and clients get real clarity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-white transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-white/10 w-14 h-14 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Faster Resolutions</h3>
                <p className="text-gray-300">
                  Accelerate case progress with AI-powered document analysis and drafting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-white transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-white/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Better Client Experience</h3>
                <p className="text-gray-300">
                  Keep clients informed and engaged with transparent, real-time updates.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-white transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-white/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Less Confusion</h3>
                <p className="text-gray-300">
                  AI that understands context eliminates miscommunication and guesswork.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-white transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-white/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Real Results</h3>
                <p className="text-gray-300">
                  Proven outcomes through intelligent automation and better communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2e3238' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Your AI Should Know Your Cases
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Join law firms and clients who trust LAWLINK for modern litigation management.
          </p>
          <Button size="lg" className="text-lg px-10 py-7 bg-white text-gray-900 hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2e3238' }}>
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
