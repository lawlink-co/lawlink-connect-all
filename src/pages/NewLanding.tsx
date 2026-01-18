import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Shield,
  FileText,
  Clock,
  Sparkles,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import amicusGoldenA from "@/assets/amicus-golden-a.png";

const NewLanding = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  // Scroll animation handler
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = [
      problemSectionRef.current,
      solutionSectionRef.current,
      featuresSectionRef.current,
    ].filter(Boolean) as Element[];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
        {/* Floating Golden A Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-20">
            <img
              src={amicusGoldenA}
              alt="Amicus"
              className="w-full h-full object-contain animate-pulse"
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl text-center px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">
            Intelligence Meets
            <br />
            <span className="text-[#e0b660]">Litigation</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed font-light">
            The AI platform that centralizes case communication, automates
            document drafting, and keeps clients informed—built specifically for
            personal injury firms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold px-8 py-6 text-lg shadow-lg shadow-[#e0b660]/20 hover:shadow-[#e0b660]/40 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/law-firms">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-700 hover:border-[#e0b660] hover:text-[#e0b660] text-white px-8 py-6 text-lg transition-all duration-300"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e0b660]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Problem Section */}
      <section
        ref={problemSectionRef}
        id="problem"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#18181b]"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 lg:mb-6">
            The Personal Injury Paradox
          </h2>
          <p className="text-xl text-zinc-400 text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
            Three fundamental challenges that hold back modern law firms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div
              className={`transition-all duration-700 ${
                isVisible.problem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20">
                  <Shield className="h-8 w-8 text-[#e0b660]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Clients Don't Trust the Process
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Communication gaps create anxiety. Clients feel left in the
                  dark about case progress, leading to frustration and lost
                  opportunities.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible.problem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20">
                  <FileText className="h-8 w-8 text-[#e0b660]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Lawyers Drown in Admin Work
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Endless document drafting, case updates, and client
                  communication consume valuable time that should be spent on
                  strategy and advocacy.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible.problem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20">
                  <Clock className="h-8 w-8 text-[#e0b660]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Cases Move Too Slowly
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Manual processes create bottlenecks. Delays in documentation
                  and communication slow down case resolution and reduce client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={solutionSectionRef}
        id="solution"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      >
        {/* Gold accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e0b660]/5 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 lg:mb-6">
            One Platform. Complete Control.
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-[#e0b660] italic text-center mb-16 lg:mb-20 font-light">
            Amicus changes everything
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
            {/* For Law Firms Card */}
            <div
              className={`transition-all duration-700 ${
                isVisible.solution
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-[#e0b660]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e0b660]/10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e0b660]/20 mb-6 border border-[#e0b660]/30">
                  <Briefcase className="h-8 w-8 text-[#e0b660]" />
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  For Law Firms
                </h3>
                <h4 className="text-xl text-[#e0b660] mb-6 font-semibold">
                  A Command Center for Litigation
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      AI-powered document drafting reduces admin time by 70%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Centralized case management streamlines workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Automated client updates keep everyone informed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Real-time insights into case status and performance
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Connecting Line with Logo */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
              <div className="flex items-center gap-4">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#e0b660]/50 to-[#e0b660]/50"></div>
                <div className="relative w-20 h-20 rounded-full bg-black border-2 border-[#e0b660] p-2 shadow-lg shadow-[#e0b660]/20">
                  <img
                    src={amicusGoldenA}
                    alt="Amicus"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-[#e0b660]/50 to-[#e0b660]/50"></div>
              </div>
            </div>

            {/* For Clients Card */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible.solution
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 lg:p-10 hover:border-[#e0b660]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e0b660]/10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e0b660]/20 mb-6 border border-[#e0b660]/30">
                  <Users className="h-8 w-8 text-[#e0b660]" />
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  For Clients
                </h3>
                <h4 className="text-xl text-[#e0b660] mb-6 font-semibold">
                  Cases That Feel Real
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Instant access to case updates and documents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Clear, jargon-free communication about case progress
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Direct messaging with legal team
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#e0b660] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">
                      Transparent timeline and milestone tracking
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section
        ref={featuresSectionRef}
        id="features"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#18181b]"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 lg:mb-20">
            Built for the Modern Practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div
              className={`group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-[#e0b660]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e0b660]/20 ${
                isVisible.features
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors">
                <Sparkles className="h-7 w-7 text-[#e0b660]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI Document Drafting</h3>
              <p className="text-zinc-400 leading-relaxed">
                Generate legal documents in seconds with AI that understands
                personal injury law. Review, edit, and file with confidence.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className={`group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-[#e0b660]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e0b660]/20 delay-100 ${
                isVisible.features
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors">
                <Users className="h-7 w-7 text-[#e0b660]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Client Portal</h3>
              <p className="text-zinc-400 leading-relaxed">
                Empower clients with a dedicated portal where they can track
                case progress, access documents, and communicate directly.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className={`group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-[#e0b660]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e0b660]/20 delay-200 ${
                isVisible.features
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors">
                <Briefcase className="h-7 w-7 text-[#e0b660]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Case Management</h3>
              <p className="text-zinc-400 leading-relaxed">
                Centralized dashboard for all cases. Organize, prioritize, and
                track every detail with intuitive tools built for legal teams.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className={`group relative bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-[#e0b660]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e0b660]/20 delay-300 ${
                isVisible.features
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#e0b660]/10 mb-6 border border-[#e0b660]/20 group-hover:bg-[#e0b660]/20 transition-colors">
                <Bell className="h-7 w-7 text-[#e0b660]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Auto Updates</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automatic notifications keep clients informed about case
                milestones, deadlines, and important updates—no manual work
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#27272a]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 lg:mb-20">
            Trusted by Leading Firms
          </h2>

          {/* Logo Placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-24 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-[#e0b660]/30 transition-all duration-300"
              >
                <div className="text-zinc-600 text-sm font-medium">
                  Law Firm {i}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#e0b660]/20 border border-[#e0b660]/30 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-[#e0b660]" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Managing Partner</div>
                  <div className="text-zinc-400 text-sm">Personal Injury Firm</div>
                </div>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed italic">
                "Amicus transformed how we manage cases and communicate with
                clients. The time savings alone justify the investment, but the
                improved client satisfaction is the real win."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#e0b660]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e0b660]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
            Join the firms building the future of personal injury law
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-[#e0b660] hover:bg-[#d4a556] text-black font-semibold px-10 py-7 text-lg shadow-lg shadow-[#e0b660]/30 hover:shadow-[#e0b660]/50 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-zinc-500">
              Free consultation • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Add CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NewLanding;
