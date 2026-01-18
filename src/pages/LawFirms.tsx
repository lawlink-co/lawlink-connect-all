import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Lock, Database, Briefcase, FileText, MessageCircle, Settings, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollRevealImages from "@/components/ScrollRevealImages";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10 px-4">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 lg:mb-12 leading-tight tracking-tight">
            <div className="space-y-2 lg:space-y-4">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms", animationFillMode: "forwards" }}>
                Push Cases,
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                Draft Briefs,
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                Keep Clients Satisfied.
              </div>
            </div>
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-light mb-6 lg:mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            All On One Platform.
          </p>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-light mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            From drafting to client updates, every part of your practice connected by AI.
          </p>
          
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <Link to="/demo">
              <Button size="lg" className="bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold px-10 py-7 text-lg shadow-lg shadow-[#e0b660]/20 hover:shadow-[#e0b660]/30 transition-all duration-300">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* All-in-One System Section */}
      <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 lg:mb-32 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              The All-in-One System for Modern Litigation
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto">
              Amicus connects every part of a case — drafting, discovery, and client communication — under one intelligent infrastructure.
            </p>
          </div>

          <Tabs defaultValue="case-management" className="w-full">
            <div className="overflow-x-auto scrollbar-hide px-4 sm:px-0 mb-16">
              <TabsList className="inline-flex w-max sm:grid sm:w-full sm:grid-cols-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl items-center h-auto min-h-14 gap-1 sm:gap-2 p-1">
                <TabsTrigger 
                  value="case-management" 
                  className="text-sm sm:text-base py-4 px-6 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-zinc-800/50 data-[state=active]:text-white data-[state=active]:border-none rounded-lg transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Case Management
                </TabsTrigger>
                <TabsTrigger 
                  value="drafting" 
                  className="text-sm sm:text-base py-4 px-6 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-zinc-800/50 data-[state=active]:text-white data-[state=active]:border-none rounded-lg transition-all duration-200"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Drafting
                </TabsTrigger>
                <TabsTrigger 
                  value="customization" 
                  className="text-sm sm:text-base py-4 px-6 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-zinc-800/50 data-[state=active]:text-white data-[state=active]:border-none rounded-lg transition-all duration-200"
                >
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Customization
                </TabsTrigger>
                <TabsTrigger 
                  value="client-communication" 
                  className="text-sm sm:text-base py-4 px-6 h-full flex items-center justify-center whitespace-nowrap data-[state=active]:bg-zinc-800/50 data-[state=active]:text-white data-[state=active]:border-none rounded-lg transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Client Experience
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="case-management">
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Demo Video */}
                <div className="mb-12 rounded-xl overflow-hidden border border-zinc-800/50">
                  <video className="w-full aspect-video rounded-xl" autoPlay loop muted playsInline>
                    <source src="/videos/Case___Management.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                  Command Every Case From a Single Dashboard.
                </h3>
                
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-4xl">
                  Amicus gives your firm complete oversight of every active matter — from intake to resolution. No more switching between systems or losing track of critical deadlines.
                </p>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-8 lg:p-10 mb-12 hover:border-zinc-700/50 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-8">
                    Your case management hub provides <span className="text-white font-semibold">real-time visibility</span> across all matters, with tools designed for how litigators actually work:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Unified dashboard displaying all active matters with status, deadlines, and assigned counsel</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Task and deadline tracking tied directly to documents and court filings</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Secure collaboration tools for seamless coordination across your team</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Instant access to case history, notes, and related documents from anywhere</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed italic border-l-4 border-[#e0b660]/50 pl-8 max-w-4xl">
                  Stop managing cases across scattered spreadsheets and email threads. Amicus consolidates everything into one intelligent system — so you can focus on practicing law, not hunting for information.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="drafting">
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Demo Video */}
                <div className="mb-12 rounded-xl overflow-hidden border border-zinc-800/50">
                  <video className="w-full aspect-video rounded-xl" autoPlay loop muted playsInline>
                    <source src="/videos/drafting-demo.mp4?v=1" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                  Draft Smarter — With AI That Knows Your Voice.
                </h3>
                
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-4xl">
                  Amicus's AI drafting engine learns from your firm's prior work to produce new filings in your own language. No generic templates — just intelligent drafts built from your case record.
                </p>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-8 lg:p-10 mb-12 hover:border-zinc-700/50 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-8">
                    The drafting engine pulls from <span className="text-white font-semibold">your depositions, prior pleadings, and case facts</span> to generate documents that sound like you wrote them:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Draft motions, memos, and pleadings automatically from your case data</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Built-in legal formatting and citation awareness for court-ready documents</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Export directly to Word or PDF with proper formatting preserved</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Continuously improves as it learns from your firm's writing style</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed italic border-l-4 border-[#e0b660]/50 pl-8 max-w-4xl">
                  Hours spent drafting from scratch become minutes of review. Amicus handles the first draft — you refine and file. That's time back in your day, every day.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="client-communication">
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Demo Video */}
                <div className="mb-12 rounded-xl overflow-hidden border border-zinc-800/50">
                  <video className="w-full aspect-video rounded-xl" autoPlay loop muted playsInline>
                    <source src="/videos/client-experience.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                  Stop Fielding "What's Happening With My Case?" Calls.
                </h3>
                
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-4xl">
                  You didn't become a personal injury lawyer to spend your day giving status updates. Yet case after case, the phone rings with the same questions — not because clients are unreasonable, but because they lack visibility. Amicus removes that drag on your practice. Clients stay informed automatically, without pulling you away from depositions, motion practice, or case strategy.
                </p>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-8 lg:p-10 mb-12 hover:border-zinc-700/50 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-8">
                    The Amicus client app gives clients <span className="text-white font-semibold">structured, real-time insight</span> into their case — without requiring your involvement:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Automatic status updates triggered by real case activity</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Live progress tracking so clients always know where their case stands</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">AI-powered assistant that handles routine questions instantly, 24/7</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Secure messaging built directly into the app</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-8 max-w-4xl">
                  When clients understand the process, they call less. When they call less, you litigate more.
                </p>

                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed italic border-l-4 border-[#e0b660]/50 pl-8 mb-8 max-w-4xl">
                  Better-informed clients are more confident, more patient, and easier to manage through long PI timelines. You stay focused on building value in the case — not explaining it.
                </p>

                <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed max-w-4xl">
                  Less noise. More leverage. More time where it matters.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="customization">
              <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Demo Video */}
                <div className="mb-12 rounded-xl overflow-hidden border border-zinc-800/50">
                  <video className="w-full aspect-video rounded-xl" autoPlay loop muted playsInline>
                    <source src="/videos/customization-demo.mp4?v=5" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                  Build the Perfect Legal CRM — Your Way.
                </h3>
                
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-4xl">
                  Amicus lets every firm create a completely personalized CRM experience. Within your dashboard, you can add or remove pages, contacts, and data fields to match your exact litigation workflow.
                </p>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-8 lg:p-10 mb-12 hover:border-zinc-700/50 transition-all duration-300">
                  <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-8">
                    Each section of your CRM can be structured with <span className="text-white font-semibold">items</span> (subpages or tabs) that contain <span className="text-white font-semibold">fields</span> (data text fields) and <span className="text-white font-semibold">contacts</span> (people or corporations). You can easily:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Add or delete titles, descriptions, contacts, and fields</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Drag, drop, and stretch items across a two-column layout to organize your workspace</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Save layouts as templates for future use</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#e0b660] flex-shrink-0 mt-1" />
                      <span className="text-zinc-300 text-lg leading-relaxed">Restrict access — only users with permissions will see the "+" buttons for creating or editing fields</span>
                    </li>
                  </ul>
                </div>

                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed italic border-l-4 border-[#e0b660]/50 pl-8 max-w-4xl">
                  This flexibility allows firms to design their own CRM architecture, ensuring that every page, field, and contact list fits their unique needs. Amicus is not a one-size-fits-all platform — it's a modular system where firms can craft their own structure for case management, data, and client relationships.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Drafting Section */}
      <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#18181b]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <ScrollRevealImages />
          </div>
          <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI Drafting Powered by Your Firm's Own Record
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed">
              Amicus learns from prior pleadings and deposition transcripts — adapting your firm's language, not replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24 lg:mb-32 px-4">
            <Shield className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-8 text-[#e0b660]" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Security & Compliance
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
              Encrypted storage. JWT authentication. Confidential by design.
            </p>
          </div>

          <div className="space-y-32 lg:space-y-40">
            {/* End-to-End Encryption */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl">
                  <Lock className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[#e0b660]" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">End-to-End Encryption</h3>
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed">
                  All data encrypted in transit and at rest with AES-256 encryption. Your client data and case files are protected with the same standards used by financial institutions.
                </p>
              </div>
            </div>

            {/* Attorney-Client Privilege */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl">
                  <Shield className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[#e0b660]" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">Attorney-Client Privilege</h3>
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed">
                  Full compliance with confidentiality requirements and privilege protection. Amicus is designed from the ground up to respect the sanctity of the attorney-client relationship.
                </p>
              </div>
            </div>

            {/* SOC 2 Compliant */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl">
                  <Database className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-[#e0b660]" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left max-w-2xl">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">SOC 2 Compliant</h3>
                <p className="text-xl sm:text-2xl text-zinc-400 font-light leading-relaxed">
                  Regular security audits and compliance with industry standards. Our infrastructure meets the rigorous requirements that law firms and their clients expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section className="py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#18181b] relative overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 px-4">
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:mb-16 leading-tight">
            Amicus firms move <em className="italic text-[#e0b660]">faster</em>, work <em className="italic text-[#e0b660]">smarter</em>, and deliver a client experience that feels <em className="italic text-[#e0b660]">effortless</em>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Link to="/demo">
              <Button size="lg" className="bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold px-10 py-7 text-lg shadow-lg shadow-[#e0b660]/20 hover:shadow-[#e0b660]/30 transition-all duration-300">
                See a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-zinc-700 hover:border-[#e0b660] hover:text-[#e0b660] text-white px-10 py-7 text-lg transition-all duration-300">
                Talk to Our Team
              </Button>
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-8 font-light">
            No credit card required • White-glove onboarding
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center text-zinc-600">
          <p>&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LawFirms;
