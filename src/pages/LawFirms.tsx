import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock, Database, Briefcase, FileText, MessageCircle, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import ScrollRevealImages from "@/components/ScrollRevealImages";
import { useEffect, useRef, useState } from "react";
const LawFirms = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const securitySectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger the card animations
          [0, 1, 2].forEach(index => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          });
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.3
    });
    if (securitySectionRef.current) {
      observer.observe(securitySectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-black text-white font-caslon">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-wide mb-8">
            <div className="flex flex-col">
              <span className="opacity-0 animate-fade-in" style={{
              animationDelay: '0ms',
              animationFillMode: 'forwards'
            }}>Push Cases,</span>
              <span className="opacity-0 animate-fade-in" style={{
              animationDelay: '500ms',
              animationFillMode: 'forwards'
            }}>Draft Briefs,</span>
              <span className="opacity-0 animate-fade-in" style={{
              animationDelay: '1000ms',
              animationFillMode: 'forwards'
            }}>Keep Clients Satisfied.</span>
            </div>
          </h1>
          <p className="text-4xl sm:text-5xl text-white font-light mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: '1500ms',
          animationFillMode: 'forwards',
          animationDuration: '600ms'
        }}>
            All On One Platform.
          </p>
          <p style={{
          animationDelay: '2000ms',
          animationFillMode: 'forwards'
        }} className="text-xl text-zinc-400 font-light mb-12 opacity-0 animate-fade-in sm:text-lg">
            From drafting to client updates, every part of your practice connected by AI.
          </p>
          <div className="opacity-0 animate-fade-in" style={{
          animationDelay: '2000ms',
          animationFillMode: 'forwards'
        }}>
            <Button size="lg" className="text-lg px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* All-in-One System Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-normal">
              The All-in-One System for Modern Litigation
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed max-w-4xl mx-auto">
              Amicus connects every part of a case — drafting, discovery, management, and client communication — under one intelligent infrastructure.
            </p>
          </div>

          <Tabs defaultValue="case-management" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-zinc-950 border border-zinc-800 mb-12 items-center h-auto min-h-14">
              <TabsTrigger value="case-management" className="text-base sm:text-lg py-4 h-full flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                <Briefcase className="w-5 h-5 mr-2 hidden sm:inline" />
                Case Management
              </TabsTrigger>
              <TabsTrigger value="drafting" className="text-base sm:text-lg py-4 h-full flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                <FileText className="w-5 h-5 mr-2 hidden sm:inline" />
                Drafting
              </TabsTrigger>
              <TabsTrigger value="client-communication" className="text-base sm:text-lg py-4 h-full flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                <MessageCircle className="w-5 h-5 mr-2 hidden sm:inline" />
                Client Experience
              </TabsTrigger>
              <TabsTrigger value="customization" className="text-base sm:text-lg py-4 h-full flex items-center justify-center data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                <Settings className="w-5 h-5 mr-2 hidden sm:inline" />
                Customization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="case-management">
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

            <TabsContent value="drafting">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-lg overflow-hidden">
                  <video className="w-full aspect-video rounded-lg" autoPlay loop muted playsInline>
                    <source src="/videos/drafting-demo.mp4?v=1" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Amicus's AI drafting engine learns from your prior work to produce new filings in your firm's own language.
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


            <TabsContent value="client-communication">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-lg overflow-hidden">
                  <video className="w-full aspect-video rounded-lg" autoPlay loop muted playsInline>
                    <source src="/videos/mobile-ai-chat.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Keep clients informed without lifting a finger.
                </p>
                <ul className="space-y-4 font-sans">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-zinc-300 text-lg">Automatic updates sent through the Amicus client app</span>
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

            <TabsContent value="customization">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-lg overflow-hidden">
                  <video className="w-full aspect-video rounded-lg" autoPlay loop muted playsInline>
                    <source src="/videos/customization-demo.mp4?v=5" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-white">
                  Build the Perfect Legal CRM — Your Way.
                </h3>
                
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Amicus lets every firm create a completely personalized CRM experience. Within your dashboard, you can add or remove pages, contacts, and data fields to match your exact litigation workflow.
                </p>

                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-8">
                  <p className="text-lg text-zinc-300 font-sans leading-relaxed mb-6">
                    Each section of your CRM can be structured with <span className="text-white font-normal">items</span> (subpages or tabs) that contain <span className="text-white font-normal">fields</span> (data text fields) and <span className="text-white font-normal">contacts</span> (people or corporations). You can easily:
                  </p>
                  
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Add or delete titles, descriptions, contacts, and fields</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Drag, drop, and stretch items across a two-column layout to organize your workspace</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Save layouts as templates for future use</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Restrict access — only users with permissions will see the "+" buttons for creating or editing fields</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed italic border-l-4 border-primary pl-6">
                  This flexibility allows firms to design their own CRM architecture, ensuring that every page, field, and contact list fits their unique needs. Amicus is not a one-size-fits-all platform — it's a modular system where firms can craft their own structure for case management, data, and client relationships.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Drafting Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <ScrollRevealImages />
          </div>
          <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-normal">
              AI Drafting Powered by Your Firm's Own Record
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed">
              Amicus learns from prior pleadings and deposition transcripts — adapting your firm's language, not replacing it.
            </p>
          </div>
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

          <div ref={securitySectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className={`bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500 ${visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="pt-8 text-center">
                <Lock className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-normal mb-4 text-white">End-to-End Encryption</h3>
                <p className="text-zinc-400 font-sans">
                  All data encrypted in transit and at rest with AES-256 encryption.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500 ${visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="pt-8 text-center">
                <Shield className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-normal mb-4 text-white">Attorney-Client Privilege</h3>
                <p className="text-zinc-400 font-sans">
                  Full compliance with confidentiality requirements and privilege protection.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-zinc-950 border-zinc-800 hover:border-primary transition-all duration-500 ${visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <CardContent className="pt-8 text-center">
                <Database className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-normal mb-4 text-white">SOC 2 Compliant</h3>
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
            Amicus firms move <em className="italic" style={{
            color: '#e4bf6c'
          }}>faster</em>, work <em className="italic" style={{
            color: '#e4bf6c'
          }}>smarter</em>, and deliver a client experience that feels <em className="italic" style={{
            color: '#e4bf6c'
          }}>effortless</em>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
              See a Demo
            </Button>
            <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
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
          <p>&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default LawFirms;