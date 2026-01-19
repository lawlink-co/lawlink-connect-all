import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Workflow = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Section 1: Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3">
          YOUR WORKFLOW
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
          Built Around How Your Firm Actually Works.
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mb-8 font-normal">
          No two PI firms run the same way. Customize case stages, document templates, client update triggers, notification preferences, and CRM fields to match your exact process—not some generic workflow.
        </p>
        <Link to="/demo">
          <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
            Book a Demo
          </Button>
        </Link>
      </section>

      {/* Section 2: Video/Screenshot */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-12">
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="YOUR_WORKFLOW_VIDEO_URL" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 3: Key Benefits */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-zinc-950/50 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-light text-white mb-8">
            Make It Yours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Create custom pages for firm-specific tracking and workflows
              </span>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Define case stages that match how your cases actually progress
              </span>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Customize the case layout and fields your team uses
              </span>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Set your own triggers for automatic client notifications
              </span>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Import and manage your own document templates
              </span>
            </div>

            {/* Benefit 6 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Add custom fields to track what matters to your firm
              </span>
            </div>

            {/* Benefit 7 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Control notification frequency and channels per client
              </span>
            </div>

            {/* Benefit 8 */}
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#e0b660] mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-base font-normal">
                Keep documents and data organized the way your firm expects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="w-24 h-px bg-zinc-800 mx-auto mb-8"></div>
        <h2 className="text-3xl font-light text-white mb-4">
          Your Firm. Your Process. Your Platform.
        </h2>
        <p className="text-zinc-400 text-base mb-8 font-normal">
          See how Amicus adapts to your workflow in a 20-minute demo.
        </p>
        <Link to="/demo">
          <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
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
                Features
              </Link>
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

export default Workflow;
