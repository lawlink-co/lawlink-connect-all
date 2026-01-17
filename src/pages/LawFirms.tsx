import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Lock, Database, Briefcase, FileText, MessageCircle, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import ScrollRevealImages from "@/components/ScrollRevealImages";
import HLSVideo from "@/components/HLSVideo";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
const LawFirms = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<string>("case-management");
  const securitySectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
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
          <h1 className="text-[2.625rem] sm:text-6xl lg:text-7xl xl:text-7xl font-light leading-tight tracking-wide mb-8">
            <div className="flex flex-col gap-1 sm:gap-2">
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
          <p className="text-2xl sm:text-3xl text-white font-light mb-4 opacity-0 animate-fade-in" style={{
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
            <Link to="/demo">
              <Button size="lg" className="w-auto sm:min-w-[180px] text-base sm:text-lg bg-white text-black border-2 border-transparent hover:bg-zinc-200 transition-transform duration-300 hover:scale-105 px-6 sm:px-[34px] py-2.5 sm:py-3 h-auto font-sans">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All-in-One System Section */}
      <section className="py-24 px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto w-full sm:container sm:max-w-7xl">
          <div className="text-center mb-12 space-y-6 animate-fade-in px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl font-normal">
              The All-in-One System for Modern Litigation
            </h2>
            <p className="text-xl text-zinc-300 font-sans leading-relaxed max-w-4xl mx-auto">
              Amicus connects every part of a case — drafting, discovery, and client communication — under one intelligent infrastructure.
            </p>
          </div>

          <Tabs defaultValue="case-management" className="w-full">
            <div className="overflow-x-auto scrollbar-hide px-4 sm:px-0 mb-12">
              <TabsList className="inline-flex w-max sm:grid sm:w-full sm:grid-cols-4 bg-zinc-950 border border-zinc-800 items-center h-auto min-h-14 gap-1 sm:gap-0">
                <TabsTrigger value="case-management" className="text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-2 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Case Management
                </TabsTrigger>
                <TabsTrigger value="drafting" className="text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-2 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Drafting
                </TabsTrigger>
                <TabsTrigger value="customization" className="text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-2 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Customization
                </TabsTrigger>
                <TabsTrigger value="client-communication" className="text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-2 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Client Experience
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="case-management">
              <div className="bg-zinc-950 border border-zinc-800 rounded-none sm:rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-none sm:rounded-lg overflow-hidden">
                  <HLSVideo
                    src="/videos/case-management-demo.m3u8"
                    fallbackSrc="/videos/case-management-demo.mp4"
                    poster="/videos/case-management-demo-poster.jpg"
                    className="w-full aspect-video rounded-none sm:rounded-lg"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-white">
                  Command Every Case From a Single Dashboard.
                </h3>
                
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Amicus gives your firm complete oversight of every active matter — from intake to resolution. No more switching between systems or losing track of critical deadlines.
                </p>

                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-8">
                  <p className="text-lg text-zinc-300 font-sans leading-relaxed mb-6">
                    Your case management hub provides <span className="text-white font-normal">real-time visibility</span> across all matters, with tools designed for how litigators actually work:
                  </p>
                  
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Unified dashboard displaying all active matters with status, deadlines, and assigned counsel</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Task and deadline tracking tied directly to documents and court filings</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Secure collaboration tools for seamless coordination across your team</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Instant access to case history, notes, and related documents from anywhere</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed italic border-l-4 border-primary pl-6">
                  Stop managing cases across scattered spreadsheets and email threads. Amicus consolidates everything into one intelligent system — so you can focus on practicing law, not hunting for information.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="drafting">
              <div className="bg-zinc-950 border border-zinc-800 rounded-none sm:rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-none sm:rounded-lg overflow-hidden">
                  <HLSVideo
                    src="/videos/drafting-demo.m3u8"
                    fallbackSrc="/videos/drafting-demo.mp4"
                    poster="/videos/drafting-demo-poster.jpg"
                    className="w-full aspect-video rounded-none sm:rounded-lg"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-white">
                  Draft Smarter — With AI That Knows Your Voice.
                </h3>
                
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  Amicus's AI drafting engine learns from your firm's prior work to produce new filings in your own language. No generic templates — just intelligent drafts built from your case record.
                </p>

                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-8">
                  <p className="text-lg text-zinc-300 font-sans leading-relaxed mb-6">
                    The drafting engine pulls from <span className="text-white font-normal">your depositions, prior pleadings, and case facts</span> to generate documents that sound like you wrote them:
                  </p>
                  
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Draft motions, memos, and pleadings automatically from your case data</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Built-in legal formatting and citation awareness for court-ready documents</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Export directly to Word or PDF with proper formatting preserved</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Continuously improves as it learns from your firm's writing style</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed italic border-l-4 border-primary pl-6">
                  Hours spent drafting from scratch become minutes of review. Amicus handles the first draft — you refine and file. That's time back in your day, every day.
                </p>
              </div>
            </TabsContent>


            <TabsContent value="client-communication">
              <div className="bg-zinc-950 border border-zinc-800 rounded-none sm:rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-none sm:rounded-lg overflow-hidden">
                  <HLSVideo
                    src="/videos/client-experience.m3u8"
                    fallbackSrc="/videos/client-experience.mp4"
                    poster="/videos/client-experience-poster.jpg"
                    className="w-full aspect-video rounded-none sm:rounded-lg"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-normal mb-6 text-white">
                  Stop Fielding "What's Happening With My Case?" Calls.
                </h3>
                
                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-8">
                  You didn't become a personal injury lawyer to spend your day giving status updates. Yet case after case, the phone rings with the same questions — not because clients are unreasonable, but because they lack visibility. Amicus removes that drag on your practice. Clients stay informed automatically, without pulling you away from depositions, motion practice, or case strategy.
                </p>

                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-8">
                  <p className="text-lg text-zinc-300 font-sans leading-relaxed mb-6">
                    The Amicus client app gives clients <span className="text-white font-normal">structured, real-time insight</span> into their case — without requiring your involvement:
                  </p>
                  
                  <ul className="space-y-3 font-sans">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Automatic status updates triggered by real case activity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Live progress tracking so clients always know where their case stands</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">AI-powered assistant that handles routine questions instantly, 24/7</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg">Secure messaging built directly into the app</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed mb-6">
                  When clients understand the process, they call less. When they call less, you litigate more.
                </p>

                <p className="text-xl text-zinc-300 font-sans leading-relaxed italic border-l-4 border-primary pl-6 mb-6">
                  Better-informed clients are more confident, more patient, and easier to manage through long PI timelines. You stay focused on building value in the case — not explaining it.
                </p>

                <p className="text-xl text-white font-bold font-sans leading-relaxed">
                  Less noise. More leverage. More time where it matters.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="customization">
              <div className="bg-zinc-950 border border-zinc-800 rounded-none sm:rounded-lg p-8 sm:p-12">
                {/* Demo Video */}
                <div className="mb-10 rounded-none sm:rounded-lg overflow-hidden">
                  <HLSVideo
                    src="/videos/customization-demo.m3u8"
                    fallbackSrc="/videos/customization-demo.mp4"
                    poster="/videos/customization-demo-poster.jpg"
                    className="w-full aspect-video rounded-none sm:rounded-lg"
                  />
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
          <div className="mb-6 sm:mb-16">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <Shield className="w-20 h-20 mx-auto mb-8" style={{ color: '#e4bf6c' }} />
            <h2 className="text-4xl sm:text-5xl font-light mb-8">
              Security & Compliance
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-sans leading-relaxed">
              Encrypted storage. JWT authentication. Confidential by design.
            </p>
          </div>

          <div ref={securitySectionRef} className="space-y-40">
            {/* End-to-End Encryption - Icon Left, Text Right */}
            <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-[transform,opacity] duration-500 ${visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
                <Lock className="w-48 h-48" style={{ color: '#e4bf6c' }} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-normal mb-6 text-white">End-to-End Encryption</h3>
                <p className="text-xl text-zinc-400 font-sans leading-relaxed">
                  All data encrypted in transit and at rest with AES-256 encryption. Your client data and case files are protected with the same standards used by financial institutions.
                </p>
              </div>
            </div>

            {/* Attorney-Client Privilege - Text Left, Icon Right */}
            <div className={`flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 transition-[transform,opacity] duration-500 ${visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
                <Shield className="w-48 h-48" style={{ color: '#e4bf6c' }} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-normal mb-6 text-white">Attorney-Client Privilege</h3>
                <p className="text-xl text-zinc-400 font-sans leading-relaxed">
                  Full compliance with confidentiality requirements and privilege protection. Amicus is designed from the ground up to respect the sanctity of the attorney-client relationship.
                </p>
              </div>
            </div>

            {/* SOC 2 Compliant - Icon Left, Text Right */}
            <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-[transform,opacity] duration-500 ${visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3">
                <Database className="w-48 h-48" style={{ color: '#e4bf6c' }} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl font-normal mb-6 text-white">SOC 2 Compliant</h3>
                <p className="text-xl text-zinc-400 font-sans leading-relaxed">
                  Regular security audits and compliance with industry standards. Our infrastructure meets the rigorous requirements that law firms and their clients expect.
                </p>
              </div>
            </div>
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
            <Link to="/demo">
              <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
                See a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="text-xl px-14 py-8 bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 font-sans">
                Talk to Our Team
              </Button>
            </Link>
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
