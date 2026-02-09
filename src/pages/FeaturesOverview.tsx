import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, Settings, ArrowRight } from "lucide-react";

const FeaturesOverview = () => {
  return (
    <>
      <Helmet>
        <title>CRM Features for Personal Injury Law Firms | Amicus</title>
        <meta name="description" content="Complete CRM features for personal injury firms: case dashboard, client portal, AI document drafting, and workflow customization. Built for PI litigation." />
        <link rel="canonical" href="https://amicusai.com/features" />
      </Helmet>
      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
              CRM FEATURES
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              CRM Features for Personal Injury Law Firms
            </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Everything you need to manage cases, communicate with clients, and draft documents—all in one intelligent platform built specifically for PI litigation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Case Dashboard */}
          <Link
            to="/features/case-dashboard"
            className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg hover:border-[#e0b660]/50 transition-all group"
          >
            <Shield className="w-12 h-12 text-[#e0b660] mb-4" />
            <h2 className="text-2xl font-light text-white mb-3 group-hover:text-[#e0b660] transition-colors">
              Case Dashboard
            </h2>
            <p className="text-zinc-400 mb-4">
              Centralized client and case tracking for PI firms. Track every active case with real-time visibility into stage progression, upcoming deadlines, and recent activity.
            </p>
            <div className="flex items-center text-[#e0b660] text-sm font-medium">
              Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Client Experience */}
          <Link
            to="/features/client-experience"
            className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg hover:border-[#e0b660]/50 transition-all group"
          >
            <Users className="w-12 h-12 text-[#e0b660] mb-4" />
            <h2 className="text-2xl font-light text-white mb-3 group-hover:text-[#e0b660] transition-colors">
              Client Experience
            </h2>
            <p className="text-zinc-400 mb-4">
              Automated communication and self-service portal. Keep clients informed automatically with real-time case status and document access without constant phone calls.
            </p>
            <div className="flex items-center text-[#e0b660] text-sm font-medium">
              Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* AI Drafting */}
          <Link
            to="/features/ai-drafting"
            className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg hover:border-[#e0b660]/50 transition-all group"
          >
            <Zap className="w-12 h-12 text-[#e0b660] mb-4" />
            <h2 className="text-2xl font-light text-white mb-3 group-hover:text-[#e0b660] transition-colors">
              AI Document Drafting
            </h2>
            <p className="text-zinc-400 mb-4">
              Generate legal documents from CRM data. Create demand letters, complaints, and motions in seconds using your case data and firm templates.
            </p>
            <div className="flex items-center text-[#e0b660] text-sm font-medium">
              Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Customization */}
          <Link
            to="/features/customization"
            className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg hover:border-[#e0b660]/50 transition-all group"
          >
            <Settings className="w-12 h-12 text-[#e0b660] mb-4" />
            <h2 className="text-2xl font-light text-white mb-3 group-hover:text-[#e0b660] transition-colors">
              Customization
            </h2>
            <p className="text-zinc-400 mb-4">
              Build your system around your PI workflow. Customize case pages, data fields, and document categories without developers or extra fees.
            </p>
            <div className="flex items-center text-[#e0b660] text-sm font-medium">
              Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-zinc-900/30 border border-zinc-800 rounded-lg p-12">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready to See It in Action?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Book a demo to see how Amicus can transform your personal injury practice.
          </p>
          <Link to="/book-demo">
            <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default FeaturesOverview;
