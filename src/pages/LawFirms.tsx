import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Users2, BarChart3, Shield, Lock, Database, Brain } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiKnowsCases from "@/assets/ai-knows-cases.jpg";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navigation />
      
      {/* Hero Section - Sleek and Modern */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-wide animate-fade-in-slow">
              Push Cases, Draft Briefs,<br />
              Keep Clients Satisfied
            </h1>
            <p className="text-2xl sm:text-3xl text-zinc-400 font-light animate-fade-in">
              All on One Platform
            </p>
            <div className="pt-6 animate-slide-up">
              <Button size="lg" className="text-lg px-14 py-8 bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-105 rounded-sm font-sans">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Image Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <img 
            src={aiKnowsCases} 
            alt="Your AI Should Know Your Cases - LAWLINK AI Interface" 
            className="w-full rounded-sm shadow-2xl mb-16 animate-scale-in"
          />
          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-xl sm:text-2xl text-zinc-300 font-light max-w-4xl mx-auto">
              It reads your documents, case timeline, and discovery data, then drafts what you actually need.
            </p>
            <p className="text-3xl sm:text-4xl font-semibold text-white">
              Real context. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <FileText className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">Case Management</h3>
                <p className="text-zinc-400 text-sm font-sans">Complete oversight of all active cases</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <Brain className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">Document Drafting</h3>
                <p className="text-zinc-400 text-sm font-sans">AI-assisted legal writing</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <Users2 className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">Client Communication</h3>
                <p className="text-zinc-400 text-sm font-sans">Automatic updates via mobile app</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <BarChart3 className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">Case Analytics</h3>
                <p className="text-zinc-400 text-sm font-sans">Efficiency tracking & insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features with Tabs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-light text-center mb-16 tracking-wide">
            Platform Features
          </h2>
          
          <Tabs defaultValue="drafting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-zinc-900/50 border border-zinc-800">
              <TabsTrigger value="drafting" className="text-base font-sans">AI Drafting</TabsTrigger>
              <TabsTrigger value="workflows" className="text-base font-sans">Automated Workflows</TabsTrigger>
              <TabsTrigger value="satisfaction" className="text-base font-sans">Client Satisfaction</TabsTrigger>
              <TabsTrigger value="access" className="text-base font-sans">Easy Data Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="drafting" className="space-y-6 animate-fade-in">
              <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10">
                  <h3 className="text-3xl font-semibold mb-6 text-white">Context-Aware AI Drafting</h3>
                  <p className="text-zinc-300 mb-8 text-lg font-sans leading-relaxed">
                    The AI reads your entire case file—pleadings, depositions, discovery—to draft accurate, 
                    relevant legal documents. Generate motions, memos, and briefs in minutes, not hours.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Pre-built templates for common motions customized to your jurisdiction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Automatic citation of relevant case law and statutes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Built-in review and approval workflow for quality control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="workflows" className="space-y-6 animate-fade-in">
              <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10">
                  <h3 className="text-3xl font-semibold mb-6 text-white">Automated Workflows</h3>
                  <p className="text-zinc-300 mb-8 text-lg font-sans leading-relaxed">
                    Streamline repetitive tasks and focus on strategy. LAWLINK automates timeline generation, 
                    deadline tracking, and client notifications.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Automated timeline generation from case events and document dates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Calendar integration with automatic deadline reminders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Push notifications to clients for case updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="satisfaction" className="space-y-6 animate-fade-in">
              <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10">
                  <h3 className="text-3xl font-semibold mb-6 text-white">Client Satisfaction</h3>
                  <p className="text-zinc-300 mb-8 text-lg font-sans leading-relaxed">
                    Give your clients a mobile app with real-time case updates and an AI assistant that knows their case. 
                    Reduce routine calls and increase transparency.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">24/7 AI chatbot answers client questions about their case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Automatic push notifications for important case developments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Secure document sharing and messaging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="access" className="space-y-6 animate-fade-in">
              <Card className="bg-zinc-900/30 border-zinc-800 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10">
                  <h3 className="text-3xl font-semibold mb-6 text-white">Easy Data Access</h3>
                  <p className="text-zinc-300 mb-8 text-lg font-sans leading-relaxed">
                    All case documents, discovery, and communications in one secure location. 
                    AI-powered search makes finding what you need instant.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Centralized document repository with version control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">AI-powered discovery analysis and organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                      <span className="text-zinc-300 font-sans">Semantic search across all case documents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl sm:text-5xl font-light mb-8 tracking-wide">
              Security & Compliance
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-sans leading-relaxed">
              Your clients' data is protected with enterprise-grade security that meets 
              the highest standards for legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Lock className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">End-to-End Encryption</h3>
                <p className="text-zinc-400 font-sans">
                  All data encrypted in transit and at rest with AES-256 encryption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500">
              <CardContent className="pt-8 text-center">
                <Shield className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-white">Attorney-Client Privilege</h3>
                <p className="text-zinc-400 font-sans">
                  Full compliance with confidentiality requirements and privilege protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-zinc-800 hover:border-primary transition-all duration-500">
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
          <p className="text-3xl sm:text-4xl font-light mb-8 leading-relaxed">
            LAWLINK firms move faster, deliver better, and keep clients informed without lifting a finger.
          </p>
          <div className="pt-6">
            <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-100 transition-all duration-300 hover:scale-105 rounded-sm font-sans">
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
