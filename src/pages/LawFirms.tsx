import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiKnowsCases from "@/assets/ai-knows-cases.jpg";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-wide mb-8 animate-fade-in-slow">
            Push Cases, Draft Briefs,<br />
            Keep Clients Satisfied
          </h1>
          <p className="text-2xl sm:text-3xl text-zinc-400 font-light mb-12 animate-fade-in">
            All on One Platform
          </p>
          <div className="animate-slide-up">
            <Button size="lg" className="text-lg px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* CRM Demo Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 animate-scale-in">
            <img 
              src={aiKnowsCases} 
              alt="LAWLINK CRM Dashboard - Case management interface showing case details, timeline, and documents"
              className="w-full rounded-lg shadow-2xl border border-zinc-800"
            />
          </div>
          <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              AI Drafting Powered by Your Firm's Own Record
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed">
              LAWLINK learns from prior pleadings and deposition transcripts — adapting your firm's language, not replacing it.
            </p>
            <p className="text-lg text-zinc-400 font-sans">
              Documents are stored in AWS S3 buckets and vectorized into case-specific embeddings for retrieval and reuse.
            </p>
          </div>
        </div>
      </section>

      {/* Document Management Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Intelligent Document Management
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed max-w-4xl mx-auto">
              LAWLINK's ETL layer (Sapphire) transforms case files into structured data accessible across your firm. Upload once — reference forever.
            </p>
            <p className="text-lg text-zinc-400 font-sans max-w-3xl mx-auto">
              Every paragraph, every clause, every exhibit — searchable, reusable, and AI-ready.
            </p>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto font-sans">
            <li className="flex flex-col items-center text-center space-y-4 p-6 bg-zinc-950 border border-zinc-800 rounded-lg">
              <CheckCircle2 className="w-12 h-12 text-primary flex-shrink-0" />
              <span className="text-zinc-300 text-lg">Centralized document repository with version control</span>
            </li>
            <li className="flex flex-col items-center text-center space-y-4 p-6 bg-zinc-950 border border-zinc-800 rounded-lg">
              <CheckCircle2 className="w-12 h-12 text-primary flex-shrink-0" />
              <span className="text-zinc-300 text-lg">AI-powered discovery analysis and organization</span>
            </li>
            <li className="flex flex-col items-center text-center space-y-4 p-6 bg-zinc-950 border border-zinc-800 rounded-lg">
              <CheckCircle2 className="w-12 h-12 text-primary flex-shrink-0" />
              <span className="text-zinc-300 text-lg">Semantic search across all case documents</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <Shield className="w-20 h-20 text-primary mx-auto relative animate-pulse" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-8">
              Security & Compliance
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-sans leading-relaxed">
              Encrypted storage. JWT authentication. Confidential by design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Lock className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">End-to-End Encryption</h3>
                <p className="text-zinc-400 font-sans">
                  All data encrypted in transit and at rest with AES-256 encryption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Shield className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">Attorney-Client Privilege</h3>
                <p className="text-zinc-400 font-sans">
                  Full compliance with confidentiality requirements and privilege protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Database className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">SOC 2 Compliant</h3>
                <p className="text-zinc-400 font-sans">
                  Regular security audits and compliance with industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-3xl sm:text-4xl font-light mb-12 leading-relaxed">
            LAWLINK firms move faster, deliver better, and keep clients informed without lifting a finger.
          </p>
          <div className="pt-6">
            <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
              Book a Demo
            </Button>
          </div>
          <p className="text-sm text-zinc-500 mt-8 font-sans">
            No credit card required • White-glove onboarding
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center text-zinc-600">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LawFirms;
