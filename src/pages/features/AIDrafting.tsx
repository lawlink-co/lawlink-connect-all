import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { FileText, PenLine, Database, Clock, FileCheck, Search, Gavel, ArrowDown } from "lucide-react";

const AIDrafting = () => {
  return (
    <>
      <Helmet>
        <title>AI Document Drafting - Generate Legal Docs from CRM | Amicus</title>
        <meta name="description" content="AI document drafting for personal injury firms. Generate demand letters, complaints, and motions in seconds using case data and firm templates. Save 2+ hours per document." />
        <link rel="canonical" href="https://amicusai.com/features/ai-drafting" />
      </Helmet>
      <div className="min-h-screen bg-black text-white pt-24">
        {/* Section 1: Hero (Two-Column Layout) */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
                AI DRAFTING
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                AI Document Drafting - Generate Legal Documents from CRM Data
              </h1>
              <p className="text-zinc-400 text-lg mb-8 font-normal">
                Generate first drafts of demand letters, complaints, and motions in seconds instead of hours. Amicus pulls case details automatically from your structured case information—plaintiff data, defendant information, incident facts, medical records, and damages calculations—then applies your firm's templates and formatting preferences. First drafts are generated in seconds, not hours, allowing your team to move straight to review and refinement rather than starting from a blank page. Consistent formatting across all documents. Estimated time saved: 2+ hours per document.
              </p>
            <Link to="/demo">
              <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Right Column: 3 Stacked Benefit Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <PenLine className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Draft with your voice</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Amicus learns from your prior pleadings, templates, and firm-specific language — so drafts sound like your attorneys wrote them.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Draft with context</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Case facts, medical records, and incident details are pulled in automatically. No more copying and pasting from other documents.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Draft in seconds</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                What used to take 2+ hours now takes under a minute. Review and refine instead of starting from scratch.
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
            <source src="https://websitebackgroundvideo.s3.us-east-2.amazonaws.com/ai-drafting-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 3: How It Works (Horizontal Steps) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-zinc-950 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-light text-white mb-10 text-center">
            From Case File to First Draft
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full border border-[#e0b660] flex items-center justify-center mb-4">
                <span className="text-[#e0b660] text-sm font-medium">1</span>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-4 left-full w-full h-px border-t border-dashed border-zinc-700"></div>
              <h3 className="text-white font-medium text-lg mb-2">Select document type</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Choose from demand letters, complaints, discovery requests, motions, or any template your firm has uploaded.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full border border-[#e0b660] flex items-center justify-center mb-4">
                <span className="text-[#e0b660] text-sm font-medium">2</span>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-4 left-full w-full h-px border-t border-dashed border-zinc-700"></div>
              <h3 className="text-white font-medium text-lg mb-2">AI pulls case details</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Amicus gathers relevant facts, medical records, dates, and party information from your case file automatically.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full border border-[#e0b660] flex items-center justify-center mb-4">
                <span className="text-[#e0b660] text-sm font-medium">3</span>
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Review and refine</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Get a complete first draft in seconds. Edit in a familiar interface, then export to Word or PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What It Drafts (Document Types Grid) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
          DOCUMENT TYPES
        </div>
        <h2 className="text-2xl font-light text-white mb-10 text-center">
          Everything Your Firm Drafts. Faster.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: Demand Letters */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg hover:border-[#e0b660]/50 hover:bg-zinc-900/50 transition-all text-center">
            <FileText className="w-8 h-8 mx-auto mb-3 text-[#e0b660]" />
            <h3 className="text-white font-medium text-sm">Demand Letters</h3>
          </div>

          {/* Card 2: Complaints */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg hover:border-[#e0b660]/50 hover:bg-zinc-900/50 transition-all text-center">
            <FileCheck className="w-8 h-8 mx-auto mb-3 text-[#e0b660]" />
            <h3 className="text-white font-medium text-sm">Complaints</h3>
          </div>

          {/* Card 3: Discovery */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg hover:border-[#e0b660]/50 hover:bg-zinc-900/50 transition-all text-center">
            <Search className="w-8 h-8 mx-auto mb-3 text-[#e0b660]" />
            <h3 className="text-white font-medium text-sm">Discovery</h3>
          </div>

          {/* Card 4: Motions */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-lg hover:border-[#e0b660]/50 hover:bg-zinc-900/50 transition-all text-center">
            <Gavel className="w-8 h-8 mx-auto mb-3 text-[#e0b660]" />
            <h3 className="text-white font-medium text-sm">Motions</h3>
          </div>
        </div>
      </section>

      {/* Section 5: Key Benefits (Redesigned) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Benefits List */}
          <div>
            <h2 className="text-2xl font-light text-white mb-8">
              Why Firms Draft with Amicus
            </h2>
            <div className="space-y-0">
              {/* Benefit 1 */}
              <div className="border-l-2 border-zinc-800 pl-6 py-2 mb-6 hover:border-[#e0b660] transition-colors">
                <h3 className="text-white font-medium mb-1">2+ hours saved per document</h3>
                <p className="text-zinc-400 text-sm">Stop spending half your day on first drafts that could write themselves.</p>
              </div>

              {/* Benefit 2 */}
              <div className="border-l-2 border-zinc-800 pl-6 py-2 mb-6 hover:border-[#e0b660] transition-colors">
                <h3 className="text-white font-medium mb-1">Consistent formatting every time</h3>
                <p className="text-zinc-400 text-sm">No more fixing margins, fonts, or spacing. Every document matches your standards.</p>
              </div>

              {/* Benefit 3 */}
              <div className="border-l-2 border-zinc-800 pl-6 py-2 mb-6 hover:border-[#e0b660] transition-colors">
                <h3 className="text-white font-medium mb-1">Your templates, your language</h3>
                <p className="text-zinc-400 text-sm">Amicus uses what your firm has already created — not generic AI output.</p>
              </div>

              {/* Benefit 4 */}
              <div className="border-l-2 border-zinc-800 pl-6 py-2 mb-6 hover:border-[#e0b660] transition-colors">
                <h3 className="text-white font-medium mb-1">Automatic citation to sources</h3>
                <p className="text-zinc-400 text-sm">Medical records, bills, and case facts are cited correctly without manual lookup.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Widget */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="text-5xl font-light text-[#e0b660] mb-2">2hrs</div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
              <ArrowDown className="w-4 h-4 text-green-500" />
              <span>to under 1 minute</span>
            </div>
            <p className="text-zinc-500 text-sm mb-6">Average time to first draft</p>
            
            <div className="border-t border-zinc-800 my-6"></div>
            
            <div className="text-4xl font-light text-white mb-2">85%</div>
            <p className="text-zinc-500 text-sm">Less time spent on document prep</p>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="w-24 h-px bg-zinc-800 mx-auto mb-10"></div>
        <h2 className="text-3xl font-light text-white mb-4">
          Stop Starting from Scratch
        </h2>
        <p className="text-zinc-400 text-base mb-8 font-normal">
          See how Amicus drafts documents using your templates in a 20-minute demo.
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
              <Link to="/book-demo" className="text-[#e0b660] text-sm hover:text-[#c9a050] transition-colors font-normal">
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
        {/* Internal Linking Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-800">
          <div className="text-center mb-8">
            <h2 className="text-xl font-light text-white mb-4">Explore More Features</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/features/case-dashboard" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Case Dashboard →
              </Link>
              <Link to="/features/client-experience" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Client Experience →
              </Link>
              <Link to="/features/customization" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Customization →
              </Link>
              <Link to="/features" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                All Features →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDrafting;
