import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Scale, Target, Users, Briefcase, Folder, MessageSquare, CheckSquare, ArrowRight } from "lucide-react";
import draftingInterfaceImage from "@/assets/drafting-interface.png";
import caseIntakeImage from "../assets/Case-intake.png";

const NewLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-28 px-6 md:px-8 border-b border-zinc-800/50" style={{ minHeight: '77vh' }}>
        {/* Background video - hidden on mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 hidden md:block"
          onError={(e) => {
            console.error('Video failed to load:', e);
            const video = e.target as HTMLVideoElement;
            if (video) {
              video.style.display = 'none';
            }
          }}
          onLoadedData={() => {
            console.log('Video loaded successfully');
          }}
        >
          <source src="https://websitebackgroundvideo.s3.us-east-2.amazonaws.com/customization-demo_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        
        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col justify-center" style={{ minHeight: 'calc(77vh - 8rem)' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-normal text-white">
            Push Cases,<br />
            Draft Briefs,<br />
            Keep Clients Satisfied.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mt-8 font-normal">
            From drafting to client updates, every part of your practice on one platform.
          </p>
          <Link to="/demo" className="inline-block">
            <Button className="mt-10 bg-[#e0b660] text-black font-medium px-10 py-4 text-lg rounded hover:bg-[#c9a050] transition-all duration-200 hover:scale-[1.02] font-sans">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Lifecycle Section */}
      <section className="bg-[#09090b] py-20 px-6 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between relative">
              {/* Stage 1: Intake */}
              <div className="flex flex-col items-center text-center w-1/3 relative z-10">
                <h3 className="text-white font-medium text-xl mb-5">Intake</h3>
                <div className="aspect-[3/4] w-full max-w-[336px] mx-auto mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={caseIntakeImage} 
                    alt="Case intake form interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-zinc-400 text-base mt-6 mb-4 px-3 font-normal">
                  Capture facts, documents, and timelines in a structured intake that powers every document and update that follows.
                </p>
                <p className="text-zinc-500 text-sm font-normal">60% fewer onboarding emails</p>
              </div>

              {/* Stage 2: Document Drafting */}
              <div className="flex flex-col items-center text-center w-1/3 relative z-10">
                <h3 className="text-white font-medium text-xl mb-5">Document Drafting</h3>
                <div className="aspect-[3/4] w-full max-w-[336px] mx-auto mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={draftingInterfaceImage} 
                    alt="Document drafting interface showing draft progress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-zinc-400 text-base mt-6 mb-4 px-3 font-normal">
                  Draft demand letters, complaints, and motions using your templates in seconds instead of hours.
                </p>
                <p className="text-zinc-500 text-sm font-normal">2+ hours saved per document</p>
              </div>

              {/* Stage 3: Litigation */}
              <div className="flex flex-col items-center text-center w-1/3 relative z-10">
                <h3 className="text-white font-medium text-xl mb-5">Litigation</h3>
                <div className="aspect-[3/4] w-full max-w-[336px] mx-auto mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/case-updates.png" 
                    alt="Case updates interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-zinc-400 text-base mt-6 mb-4 px-3 font-normal">
                  Amicus centralizes litigation data and documents while automatically updating clients on real case events, reducing coordination and follow-ups.
                </p>
                <p className="text-zinc-500 text-sm font-normal">60% fewer status calls</p>
              </div>
            </div>
          </div>

          {/* Mobile Cards - Visible on mobile, hidden on desktop */}
          <div className="md:hidden flex flex-col gap-8">
            {/* Stage 1: Intake */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-5">
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg mb-4">Intake</h3>
                  <div className="aspect-[4/5] w-full mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={caseIntakeImage} 
                      alt="Case intake form interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-zinc-400 text-base mt-6 mb-3 font-normal">
                    Capture facts, documents, and timelines in a structured intake that powers every document and update that follows.
                  </p>
                  <p className="text-zinc-500 text-sm font-normal">60% fewer onboarding emails</p>
                </div>
              </div>
            </div>

            {/* Stage 2: Document Drafting */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-5">
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg mb-4">Document Drafting</h3>
                  <div className="aspect-[4/5] w-full mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={draftingInterfaceImage} 
                      alt="Document drafting interface showing draft progress"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-zinc-400 text-base mt-6 mb-3 font-normal">
                    Draft demand letters, complaints, and motions using your templates in seconds instead of hours.
                  </p>
                  <p className="text-zinc-500 text-sm font-normal">2+ hours saved per document</p>
                </div>
              </div>
            </div>

            {/* Stage 3: Litigation */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6">
              <div className="flex gap-5">
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg mb-4">Litigation</h3>
                  <div className="aspect-[4/5] w-full mb-6 rounded-lg overflow-hidden">
                    <img 
                      src="/case-updates.png" 
                      alt="Case updates interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-zinc-400 text-base mt-6 mb-3 font-normal">
                    Amicus centralizes litigation data and documents while automatically updating clients on real case events, reducing coordination and follow-ups.
                  </p>
                  <p className="text-zinc-500 text-sm font-normal">60% fewer status calls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose-Built Section */}
      <section className="bg-black py-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
            PURPOSE-BUILT
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
            Built for Plaintiff-Side Personal Injury
          </h2>
          <p className="text-zinc-400 text-lg text-center max-w-2xl mx-auto mb-12 font-normal">
            Amicus was designed around the specific workflows, pain points, and demands of PI litigation.
          </p>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors text-center">
              <Scale className="w-8 h-8 text-[#e0b660] mb-4 mx-auto" />
              <h3 className="text-white font-medium text-lg mb-2">PI-Specific Workflows</h3>
              <p className="text-zinc-400 text-sm font-normal">
                Personal injury cases do not move like generic matters, so Amicus was built around how PI firms actually work day to day. The CRM is customizable so firms can add pages and structure cases to match real PI workflows.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors text-center">
              <Target className="w-8 h-8 text-[#e0b660] mb-4 mx-auto" />
              <h3 className="text-white font-medium text-lg mb-2">Demand Letters in Seconds</h3>
              <p className="text-zinc-400 text-sm font-normal">
                Drafting documents is repetitive, time sensitive, and easy to bottleneck a team. Amicus reduces that friction by drafting documents quickly and consistently from structured case information.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-colors text-center">
              <Users className="w-8 h-8 text-[#e0b660] mb-4 mx-auto" />
              <h3 className="text-white font-medium text-lg mb-2">Client Communication That Fits</h3>
              <p className="text-zinc-400 text-sm font-normal">
                Your clients need frequent updates, but manual follow ups slow teams down. Amicus turns real case activity into clear client updates without constant calls or emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive: Case Dashboard */}
      <section className="bg-black py-16 px-6 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
                CASE DASHBOARD
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
                Every Case. One Platform
              </h2>
              <p className="text-zinc-400 text-base mb-6 font-normal">
                Personal injury work moves fast, and the details live in too many places. Amicus puts stage, tasks, deadlines, and recent activity in one view so the team always knows where a case stands.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">See every active case with stage, tasks, and recent activity</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Filter by attorney, stage, and priority</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Track deadlines and follow ups without digging through emails</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Know which clients need an update at a glance</span>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-[#e0b660] font-medium text-base">Estimated time saved: 8+ hours per week on case lookups and internal follow ups</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/dashboard-screenshot.png" 
                alt="Dashboard screenshot showing main case list view with status columns, filters, and activity feed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive: Client Experience */}
      <section className="bg-[#09090b] py-16 px-6 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Placeholder (Phone Mockup) */}
            <div className="order-2 lg:order-none">
              <div className="relative mx-auto lg:mx-0">
                <img 
                  src="/Untitled design (68).png" 
                  alt="Phone mockup showing client portal with case status, next steps, and message thread with attorney"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-1 lg:order-none">
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
                CLIENT EXPERIENCE
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
                Keep Clients In The Loop Without Calling.
              </h2>
              <p className="text-zinc-400 text-base mb-6 font-normal">
                Clients can see where their case stands, review key documents, and message your team in one place. When the case moves, Amicus pushes a clear update so clients do not need to call to find out what happened.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Plain language status clients understand</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Key documents available without emailing the office</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Messages stay tied to the case, not scattered</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Fewer interruptions from routine update calls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive: AI Drafting */}
      <section className="bg-black py-16 px-6 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
                AI DRAFTING
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
                First Drafts in Seconds.
              </h2>
              <p className="text-zinc-400 text-base mb-6 font-normal">
                Create clean first drafts without starting from a blank page. Amicus handles the structure and fills in the details so your team can move straight to review and refinement.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">First drafts generated in seconds, not hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Consistent formatting without copy and paste</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Case details pulled in automatically</span>
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-[#e0b660] font-medium text-base">Estimated time saved: 2+ hours per document</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/drafting-fig.png" 
                alt="Drafting interface showing document editor with AI-generated demand letter, Sources Used panel visible on the side, and firm template selector"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive: Your Workflow */}
      <section className="bg-[#09090b] py-16 px-6 md:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Placeholder */}
            <div className="order-2 lg:order-none">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/customization-stuff.png"
                  alt="Customization panel showing workflow builder, custom fields, template manager, and notification rules"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-1 lg:order-none">
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
                YOUR WORKFLOW
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
                Built Around How Your Firm Actually Works
              </h2>
              <p className="text-zinc-400 text-base mb-6 font-normal">
                Every firm tracks cases differently. Amicus lets you shape the system around your process, including creating custom pages for whatever your team needs to track beyond the standard case view.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Create custom pages for firm specific tracking and internal workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Customize the case layout and fields your team actually uses</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Set up stages that match how your cases progress</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-400 text-base font-normal">Keep documents and data organized the way your firm expects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="bg-black py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
            ONE PLATFORM
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center">
            Punch Above Your Weight
          </h2>
          <p className="text-zinc-400 text-lg text-center max-w-2xl mx-auto mb-12 font-normal">
            Stop duct-taping together 5 different tools.
          </p>

          {/* Tools You Replace Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Tool 1: Case Management */}
            <div className="text-left">
              <Briefcase className="w-8 h-8 text-[#e0b660] mb-3" />
              <h3 className="text-white font-medium text-base mb-2">Case Management</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Track every case, deadline, and task in one dashboard. No more spreadsheets or jumping between apps.
              </p>
            </div>

            {/* Tool 2: File Storage */}
            <div className="text-left">
              <Folder className="w-8 h-8 text-[#e0b660] mb-3" />
              <h3 className="text-white font-medium text-base mb-2">File Storage</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                All case documents organized automatically. Upload once, access anywhere, share securely with clients.
              </p>
            </div>

            {/* Tool 3: Client Communication */}
            <div className="text-left">
              <MessageSquare className="w-8 h-8 text-[#e0b660] mb-3" />
              <h3 className="text-white font-medium text-base mb-2">Client Communication</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Have client updates sent automatically, or directly communicate through Amicus.
              </p>
            </div>

            {/* Tool 4: Task Management */}
            <div className="text-left">
              <CheckSquare className="w-8 h-8 text-[#e0b660] mb-3" />
              <h3 className="text-white font-medium text-base mb-2">Task Management</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Assign tasks, set deadlines, and track progress. Everyone knows what needs to happen next.
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-zinc-500 text-sm text-center mt-12 font-normal">
            Less context-switching. Less monthly spend. Less chaos.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-zinc-950 to-black py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Line */}
          <div className="w-full max-w-xs mx-auto h-px bg-zinc-800 mb-8"></div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
            Ready to Take Back 15+ Hours Every Week?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto font-normal">
            Move <span className="text-[#e0b660] italic">faster</span>, work <span className="text-[#e0b660] italic">smarter</span>, deliver a client experience that feels <span className="text-[#e0b660] italic">effortless</span>.
          </p>
          
          <Link to="/demo" className="inline-block">
            <Button className="bg-[#e0b660] text-black font-medium px-10 py-4 rounded hover:bg-[#c9a050] transition-all duration-200 hover:scale-[1.02] text-lg">
              Book a Demo
            </Button>
          </Link>
          
          <a 
            href="mailto:hello@amicuslegal.com" 
            className="block text-zinc-500 text-sm mt-4 hover:text-zinc-300 transition-colors font-normal"
          >
            or email us at hello@amicuslegal.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left Side */}
            <div>
              <div className="text-white font-medium text-lg mb-2">Amicus</div>
              <div className="text-zinc-500 text-sm font-normal">Built for plaintiff-side personal injury</div>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link to="/law-firms" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                Features
              </Link>
              <Link to="/about" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                About
              </Link>
              <Link to="/contact" className="text-zinc-400 text-sm hover:text-white transition-colors font-normal">
                Contact
              </Link>
              <Link to="/demo" className="text-[#e0b660] text-sm hover:text-[#c9a050] transition-colors font-normal">
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="border-t border-zinc-900 mt-8 pt-8">
            <p className="text-zinc-600 text-xs text-center font-normal">
              © 2025 Amicus Legal Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLanding;
