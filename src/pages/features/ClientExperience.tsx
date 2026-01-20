import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, MessageSquare, Eye, FileSearch, Download, MessageCircle, Calendar, Upload, Check, Sparkles, ArrowUp } from "lucide-react";

const ClientExperience = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Section 1: Hero (Two-Column Layout) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
              CLIENT EXPERIENCE
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Keep Clients Informed. Without the Phone Calls.
            </h1>
            <p className="text-zinc-400 text-lg mb-8 font-normal">
              Give clients a portal to check their case, view documents, and message your team. Automatic updates mean they always know what's happening — without calling the office.
            </p>
            <Link to="/demo">
              <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Right Column: 4 Stacked Benefit Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Bell className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Automatic updates</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Clients get notified instantly when something happens — new filings, court dates, settlement activity — via text, email, or app.
              </p>
            </div>


            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">AI case assistant</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Clients ask questions in plain language and get immediate, case-specific answers — 24/7, without waiting for a callback.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">24/7 case visibility</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Clients check their case status anytime, on any device. Plain language they understand, not legal jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Video */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://websitebackgroundvideo.s3.us-east-2.amazonaws.com/client-experience.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 3: What Clients Can Do (3-Column Feature Grid) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
          CLIENT PORTAL
        </div>
        <h2 className="text-2xl font-light text-white mb-10 text-center">
          Everything Clients Need. One Place.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <FileSearch className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">View case status</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Current stage, next steps, and recent activity — explained in plain language.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Access documents</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Download settlement letters, medical records, and case documents securely.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Message the team</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Ask questions and get answers without playing phone tag.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">See upcoming dates</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Depositions, court appearances, and deadlines all in one calendar.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Upload files</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Share photos, documents, and records directly to their case file.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-lg mb-2">Get notified</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Automatic alerts via text, email, or push notification when things change.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Impact (Stats Section) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-zinc-950 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-light text-white mb-10 text-center">
            What Happens When Clients Stay Informed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#e0b660] mb-2">60%</div>
              <p className="text-zinc-400 text-sm">Fewer status calls</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#e0b660] mb-2">24/7</div>
              <p className="text-zinc-400 text-sm">Case access for clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits List (Alternating Layout) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        {/* Section A: Text Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
              FOR YOUR CLIENTS
            </div>
            <h2 className="text-2xl font-light text-white mb-4">
              An experience that builds trust
            </h2>
            <p className="text-zinc-400 mb-6">
              Clients feel informed and valued when they can see their case progress in real time. No more anxiety about what's happening behind the scenes.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">Plain-language status updates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">Branded portal with your firm's logo</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">Mobile-friendly on any device</span>
              </div>
            </div>
          </div>

          {/* Right - Notification Widget */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm mx-auto">
            <div className="text-xs text-zinc-500 mb-2">Amicus</div>
            <div className="text-white font-medium mb-1">Case Update</div>
            <p className="text-zinc-400 text-sm mb-3">
              Your demand letter was sent to the insurance company today.
            </p>
            <div className="text-zinc-600 text-xs">Just now</div>
          </div>
        </div>

        {/* Section B: Visual Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - AI Chat Widget Mockup */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 max-w-sm mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800">
              <Sparkles className="w-5 h-5 text-[#e0b660]" />
              <span className="text-white font-medium text-sm">Case Assistant</span>
              <div className="w-2 h-2 rounded-full bg-green-500 ml-auto"></div>
            </div>

            {/* Chat messages */}
            <div className="flex flex-col gap-3">
              {/* Message 1 (from client - RIGHT side) */}
              <div className="bg-zinc-800 rounded-lg rounded-br-none p-3 max-w-[85%] ml-auto">
                <p className="text-zinc-300 text-sm">What's the status of my demand letter?</p>
              </div>

              {/* Message 2 (from AI - LEFT side) */}
              <div className="bg-[#e0b660]/10 border border-[#e0b660]/20 rounded-lg rounded-bl-none p-3 max-w-[85%]">
                <p className="text-zinc-300 text-sm">
                  Your demand letter was sent to State Farm on January 15th. They have 30 days to respond, so you should expect to hear back by February 14th. I'll notify you as soon as we receive their response.
                </p>
              </div>

              {/* Message 3 (from client - RIGHT side) */}
              <div className="bg-zinc-800 rounded-lg rounded-br-none p-3 max-w-[85%] ml-auto">
                <p className="text-zinc-300 text-sm">What happens after they respond?</p>
              </div>

              {/* Message 4 (from AI - LEFT side) */}
              <div className="bg-[#e0b660]/10 border border-[#e0b660]/20 rounded-lg rounded-bl-none p-3 max-w-[85%]">
                <p className="text-zinc-300 text-sm">
                  Once they respond, your attorney Sarah will review their offer and discuss next steps with you. This usually involves either negotiating a higher amount or preparing to file a lawsuit.
                </p>
              </div>
            </div>

            {/* Input area */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800">
              <div className="bg-zinc-800 rounded-lg px-4 py-2 flex-1">
                <span className="text-zinc-500 text-sm">Ask about your case...</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#e0b660] flex items-center justify-center">
                <ArrowUp className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
              FOR YOUR TEAM
            </div>
            <h2 className="text-2xl font-light text-white mb-4">
              Less time on updates. More time on cases.
            </h2>
            <p className="text-zinc-400 mb-6">
              Your staff stops answering the same questions over and over. Automatic updates and self-service access mean clients get answers without interrupting your workflow.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">Zero manual status updates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">All messages tied to the case record</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">Automatic notification triggers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="w-24 h-px bg-zinc-800 mx-auto mb-10"></div>
        <h2 className="text-3xl font-light text-white mb-4">
          Deliver an Experience Clients Remember
        </h2>
        <p className="text-zinc-400 text-base mb-8 font-normal">
          See how Amicus keeps your clients informed in a 20-minute demo.
        </p>
        <Link to="/demo">
          <Button className="bg-[#e0b660] text-black font-medium px-10 py-4 rounded hover:bg-[#c9a050] transition-colors text-lg">
            Book a Demo
          </Button>
        </Link>
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

export default ClientExperience;
