import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Users, Bell, ArrowRight, Settings } from "lucide-react";

const NewLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8">
            Intelligence Meets
            <br />
            <span className="text-[#e0b660]">Litigation</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto font-display">
            AI-native case management for personal injury law. Draft in seconds, track every case, keep clients informed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-[#e0b660] text-black hover:bg-[#d4a850] font-medium px-8 py-6 font-sans">
                Book a Demo
              </Button>
            </Link>
            <Link to="/clients">
              <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-900 px-8 py-6 font-sans">
                For Clients
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1: Draft in Seconds */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
              Complete System. Zero Friction.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e0b660]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#e0b660]" />
                </div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Feature 01</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light">Draft in Seconds</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Generate demand letters, pleadings, and discovery. Your firm's templates, your language, AI speed.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500 pt-2">
                <span className="px-2 py-1 rounded bg-zinc-900/50">AI-Powered</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">Customizable</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">&lt;1 min</span>
              </div>
              <Link
                to="/law-firms"
                className="inline-flex items-center gap-2 text-[#e0b660] hover:text-[#d4a850] transition-colors font-medium group"
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full max-w-2xl mx-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden">
              {/* Placeholder for image/video - 16:9 aspect ratio */}
              <div className="text-zinc-600 text-sm">Video/Image Placeholder - Draft in Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: One Dashboard */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="w-full max-w-2xl mx-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden order-2 lg:order-1">
              {/* Placeholder for image/video - 16:9 aspect ratio */}
              <div className="text-zinc-600 text-sm">Video/Image Placeholder - One Dashboard</div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e0b660]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#e0b660]" />
                </div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Feature 02</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light">One Dashboard</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Every case, every task, every conversation—unified. No switching systems. No missed deadlines.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500 pt-2">
                <span className="px-2 py-1 rounded bg-zinc-900/50">Unified View</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">Real-Time</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">Multi-Task</span>
              </div>
              <Link
                to="/law-firms"
                className="inline-flex items-center gap-2 text-[#e0b660] hover:text-[#d4a850] transition-colors font-medium group"
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Client Experience */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e0b660]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#e0b660]" />
                </div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Feature 03</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light">Client Experience</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Real-time updates, secure messaging, plain-language explanations. Clients stay informed via text, email, or app.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500 pt-2">
                <span className="px-2 py-1 rounded bg-zinc-900/50">Secure</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">24/7 Access</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">Multi-Channel</span>
              </div>
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-[#e0b660] hover:text-[#d4a850] transition-colors font-medium group"
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full max-w-2xl mx-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden">
              {/* Placeholder for image/video - 16:9 aspect ratio */}
              <div className="text-zinc-600 text-sm">Video/Image Placeholder - Client Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Customization */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="w-full max-w-2xl mx-auto aspect-video bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden order-2 lg:order-1">
              {/* Placeholder for image/video - 16:9 aspect ratio */}
              <div className="text-zinc-600 text-sm">Video/Image Placeholder - Built Your Way</div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e0b660]/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-[#e0b660]" />
                </div>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Feature 04</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light">Built Your Way</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Customize workflows, templates, and data fields. Add pages, organize your workspace—Amicus adapts to your practice.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500 pt-2">
                <span className="px-2 py-1 rounded bg-zinc-900/50">Flexible</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">No-Code</span>
                <span className="px-2 py-1 rounded bg-zinc-900/50">Customizable</span>
              </div>
              <Link
                to="/law-firms"
                className="inline-flex items-center gap-2 text-[#e0b660] hover:text-[#d4a850] transition-colors font-medium group"
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Built for Personal Injury
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-16">
            From intake to settlement, Amicus handles the volume and complexity of plaintiff-side practice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-[#e0b660] mb-2">100%</div>
              <div className="text-zinc-400">Secure & Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-[#e0b660] mb-2">24/7</div>
              <div className="text-zinc-400">Client Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-[#e0b660] mb-2">&lt;1min</div>
              <div className="text-zinc-400">Document Drafting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl md:text-5xl font-light leading-[1.3] mb-12">
            Move <span className="text-[#e0b660] italic">faster</span>, work <span className="text-[#e0b660] italic">smarter</span>, deliver a client experience that feels <span className="text-[#e0b660] italic">effortless</span>.
          </p>
          <Link to="/demo">
            <Button size="lg" className="bg-[#e0b660] text-black hover:bg-[#d4a850] font-medium text-lg px-12 py-7 font-sans">
              See Amicus in Action
            </Button>
          </Link>
          <p className="text-sm text-zinc-500 mt-6">
            No credit card required • White-glove onboarding
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-zinc-600">
          <p>&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewLanding;
