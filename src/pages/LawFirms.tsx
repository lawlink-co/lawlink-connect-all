import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock, Database, Briefcase, FileText, FolderSearch, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import aiKnowsCases from "@/assets/what-lawyers-used-to-do.svg";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-wide mb-8 animate-fade-in-slow">
            <div className="flex flex-col">
              <span>Push Cases,</span>
              <span>Draft Briefs,</span>
              <span>Keep Clients Satisfied.</span>
            </div>
          </h1>
          <p className="text-4xl sm:text-5xl text-white font-light mb-6 animate-fade-in">
            All On One Platform.
          </p>
          <p className="text-xl sm:text-2xl text-zinc-400 font-light mb-12 animate-fade-in">
            From drafting to client updates, every part of your practice connected by AI.
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
          </div>
        </div>
      </section>

      {/* All-in-One System Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              The All-in-One System for Modern Litigation
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed max-w-4xl mx-auto">
              LAWLINK connects every part of a case — drafting, discovery, management, and client communication — under one intelligent infrastructure.
            </p>
          </div>

          <Tabs defaultValue="case-management" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-zinc-950 border border-zinc-800 mb-12">
              <TabsTrigger 
                value="case-management" 
                className="text-base sm:text-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <Briefcase className="w-5 h-5 mr-2 hidden sm:inline" />
                Case Management
              </TabsTrigger>
              <TabsTrigger 
                value="drafting"
                className="text-base sm:text-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <FileText className="w-5 h-5 mr-2 hidden sm:inline" />
                Drafting
              </TabsTrigger>
              <TabsTrigger 
                value="discovery"
                className="text-base sm:text-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <FolderSearch className="w-5 h-5 mr-2 hidden sm:inline" />
                Discovery
              </TabsTrigger>
              <TabsTrigger 
                value="client-communication"
                className="text-base sm:text-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <MessageCircle className="w-5 h-5 mr-2 hidden sm:inline" />
                Client Communication
              </TabsTrigger>
            </TabsList>

            <TabsContent value="case-management" className="animate-fade-in">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Organize, assign, and move cases through every stage with total visibility.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Unified dashboard for all active matters</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Task and deadline tracking tied directly to documents</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Secure collaboration within your team</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="drafting" className="animate-fade-in">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  LAWLINK's AI drafting engine learns from your prior work to produce new filings in your firm's own language.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Draft motions, memos, and pleadings automatically from your case data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Built-in legal formatting and citation awareness</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Export directly to Word or PDF</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="discovery" className="animate-fade-in">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Turn piles of evidence into structured knowledge.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Upload and tag transcripts, exhibits, and discovery responses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">AI-powered summarization and key-fact extraction</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Search across every document semantically</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="client-communication" className="animate-fade-in">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Keep clients informed without lifting a finger.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Automatic updates sent through the LAWLINK client app</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Real-time progress tracking and notifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Built-in chat assistant that answers client questions instantly</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
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
            LAWLINK firms move faster, work smarter, and deliver a client experience that feels effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
              See a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-14 py-8 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-sans">
              Talk to Our Team
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
