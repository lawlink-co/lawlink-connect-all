import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Amicus - Built for Personal Injury Law Firms</title>
        <meta name="description" content="Amicus is an AI-powered CRM platform designed specifically for personal injury law firms. Purpose-built for PI litigation workflows and client management." />
        <link rel="canonical" href="https://amicusai.com/about" />
      </Helmet>
      <div className="min-h-screen bg-black text-white pt-24">
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
              ABOUT AMICUS
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Built for Plaintiff-Side Personal Injury Law Firms
            </h1>
          </div>

        <div className="prose prose-invert max-w-none space-y-6 text-zinc-400">
          <p className="text-lg">
            Amicus is an AI-powered case management platform designed specifically for personal injury law firms. We understand the unique challenges PI attorneys face—managing high-volume caseloads, keeping clients informed, drafting repetitive documents, and tracking deadlines across dozens of active matters.
          </p>

          <p>
            Unlike generic legal practice management software, Amicus was built from the ground up around how personal injury firms actually work. Our platform centralizes case management, document drafting, and client communication in one intelligent system that adapts to your firm's specific workflows.
          </p>

          <p>
            From initial intake through settlement, Amicus helps PI firms move cases forward faster, reduce administrative overhead, and deliver a client experience that keeps clients satisfied without constant phone calls.
          </p>

          <h2 className="text-2xl font-light text-white mt-12 mb-4">
            Our Mission
          </h2>
          <p>
            To eliminate the need for personal injury firms to duct-tape multiple tools together. One platform should handle everything—case tracking, file storage, client communication, task management, and document drafting. No more context-switching, no more monthly software sprawl, no more chaos.
          </p>

          <h2 className="text-2xl font-light text-white mt-12 mb-4">
            Built for PI Litigation
          </h2>
          <p>
            We're not trying to be everything to everyone. Amicus is purpose-built for plaintiff-side personal injury litigation. Every feature, every workflow, every customization option is designed around the specific needs of PI firms—whether you handle motor vehicle accidents, slip and falls, medical malpractice, or premises liability.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/book-demo">
            <Button className="bg-[#e0b660] text-black font-medium px-8 py-3 rounded hover:bg-[#c9a050] transition-colors">
              Book a Demo
            </Button>
          </Link>
        </div>

        {/* Internal Linking Section */}
        <div className="mt-16 pt-12 border-t border-zinc-800">
          <div className="text-center">
            <h2 className="text-xl font-light text-white mb-4">Explore Our Platform</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/features" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Features →
              </Link>
              <Link to="/clients" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Client Experience →
              </Link>
              <Link to="/law-firms" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                For Law Firms →
              </Link>
              <Link to="/book-demo" className="text-[#e0b660] hover:text-[#c9a050] text-sm transition-colors">
                Book a Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
