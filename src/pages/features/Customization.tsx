import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Puzzle, Layers, Sliders, TextCursor, Users, LayoutGrid, X, Check } from "lucide-react";

const Customization = () => {
  return (
    <>
      <Helmet>
        <title>CRM Customization - Build Your PI Workflow System | Amicus</title>
        <meta name="description" content="Customizable CRM for personal injury firms. Build your system around your PI workflow with custom fields, pages, and data structures. No developers required." />
        <link rel="canonical" href="https://amicusai.com/features/customization" />
      </Helmet>
      <div className="min-h-screen bg-black text-white pt-24">
        {/* Section 1: Hero (Two-Column Layout) */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
                CUSTOMIZATION
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                CRM Customization - Build Your System Around Your PI Workflow
              </h1>
              <p className="text-zinc-400 text-lg mb-8 font-normal">
                Unlike generic legal practice management software, Amicus was designed from the ground up around the specific workflows, pain points, and demands of personal injury litigation. Customizable case pages let you add the data fields, contact types, and document categories your firm actually tracks—insurance adjusters, policy limits, medical providers, lien holders, expert witnesses. Structure cases to match real PI workflows, not force your practice into someone else's generic template. No implementation teams required. No extra fees for customization. The platform adapts to how your firm works.
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
                <Puzzle className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Modular building blocks</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Combine data fields, contact modules, and repeatable items to build case pages that match your exact workflow.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Custom pages per case</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Create dedicated pages for insurance info, medical providers, litigation details — whatever your firm needs to track.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Fits your workflow from day one</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No implementation delays or generic layouts. Configure Amicus around how your team actually works.
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
            <source src="https://websitebackgroundvideo.s3.us-east-2.amazonaws.com/customization-demo+2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 3: Building Blocks Explainer */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
          BUILDING BLOCKS
        </div>
        <h2 className="text-2xl font-light text-white mb-4 text-center">
          Three Components. Unlimited Possibilities.
        </h2>
        <p className="text-zinc-400 text-center mb-10">
          Every custom page in Amicus is made from these modular pieces:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Data Fields */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-[#e0b660]/50 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-6">
              <TextCursor className="w-8 h-8 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-xl mb-3">Data Fields</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Structured fields to store specific information — text, dates, numbers, dropdowns, checkboxes, and more.
            </p>
            <div className="text-zinc-600 text-xs uppercase tracking-wide mt-4 mb-2">Examples</div>
            <p className="text-zinc-500 text-sm">
              Policy numbers, settlement amounts, incident dates, case status
            </p>
          </div>

          {/* Card 2: Contacts */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-[#e0b660]/50 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-xl mb-3">Contacts</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              People and entities tied to the case — clients, adjusters, medical providers, opposing counsel, internal staff.
            </p>
            <div className="text-zinc-600 text-xs uppercase tracking-wide mt-4 mb-2">Examples</div>
            <p className="text-zinc-500 text-sm">
              Insurance adjuster, treating physician, expert witness, claims rep
            </p>
          </div>

          {/* Card 3: Items / Modules */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:border-[#e0b660]/50 transition-all text-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-6">
              <LayoutGrid className="w-8 h-8 text-[#e0b660]" />
            </div>
            <h3 className="text-white font-medium text-xl mb-3">Items / Modules</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Repeatable sections that group related fields together. Add as many as you need per case.
            </p>
            <div className="text-zinc-600 text-xs uppercase tracking-wide mt-4 mb-2">Examples</div>
            <p className="text-zinc-500 text-sm">
              Medical providers list, vehicle information, insurance policies, lien holders
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: What You Can Customize */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-zinc-950 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-light text-white mb-10 text-center">
            Make Every Part of Amicus Yours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Case page layouts</h3>
              <p className="text-zinc-500 text-sm">Design what information appears and how it's organized for each case type.</p>
            </div>

            {/* Option 2 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Custom fields</h3>
              <p className="text-zinc-500 text-sm">Add any field your firm needs — from policy limits to settlement breakdowns.</p>
            </div>

            {/* Option 3 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Case stages</h3>
              <p className="text-zinc-500 text-sm">Define stages that match your actual case progression, not generic defaults.</p>
            </div>

            {/* Option 4 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Document templates</h3>
              <p className="text-zinc-500 text-sm">Upload and manage your firm's templates for AI drafting.</p>
            </div>

            {/* Option 5 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Notification triggers</h3>
              <p className="text-zinc-500 text-sm">Set exactly when and how clients receive automatic updates.</p>
            </div>

            {/* Option 6 */}
            <div className="p-4 border-l-2 border-zinc-800 hover:border-[#e0b660] transition-colors">
              <h3 className="text-white font-medium mb-1">Contact types</h3>
              <p className="text-zinc-500 text-sm">Create categories for every type of person or entity you track on a case.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison to Rigid CRMs */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Other CRMs */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-zinc-400 font-medium mb-4">Other CRMs</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-sm">Fixed page layouts</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-sm">Limited custom fields</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-sm">Generic case stages</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-sm">Workarounds and spreadsheets</p>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                <p className="text-zinc-600 text-sm">Months of implementation</p>
              </div>
            </div>
          </div>

          {/* Right Card: Amicus */}
          <div className="bg-zinc-900/30 border border-[#e0b660]/30 p-6 rounded-xl">
            <h3 className="text-white font-medium mb-4">Amicus</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm">Build any page layout</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm">Unlimited custom fields</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm">Your stages, your workflow</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm">Everything in one system</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e0b660] flex-shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm">Configure in hours, not months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="w-24 h-px bg-zinc-800 mx-auto mb-10"></div>
        <h2 className="text-3xl font-light text-white mb-4">
          Your Firm. Your Rules.
        </h2>
        <p className="text-zinc-400 text-base mb-8 font-normal">
          See how Amicus adapts to your workflow in a 20-minute demo.
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
              <Link to="/features/ai-drafting" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                AI Document Drafting →
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

export default Customization;
