import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Filter, Clock, List, Activity, CheckSquare, Calendar, Users, Search, X, Check } from "lucide-react";

const CaseDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Section 1: Hero (Two-Column Layout) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-4">
              CASE DASHBOARD
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              Every Case. One Screen. Zero Guesswork.
            </h1>
            <p className="text-zinc-400 text-lg mb-8 font-normal">
              See every active matter, its current stage, pending tasks, and recent activity — all in one view. Stop hunting through emails and spreadsheets to find out where a case stands.
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
                <LayoutDashboard className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Complete visibility</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every case displays its stage, assigned attorney, upcoming deadlines, and last activity. Nothing falls through the cracks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Filter className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">Find anything instantly</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Filter by attorney, case type, stage, priority, or custom tags. Get to the case you need in seconds.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#e0b660]" />
              </div>
              <h3 className="text-white font-medium text-lg mb-2">8+ hours saved weekly</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No more asking around or digging through systems. The answer is always on your dashboard.
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
            <source src="https://websitebackgroundvideo.s3.us-east-2.amazonaws.com/case-management-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 3: Dashboard Capabilities (Icon Grid) */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="text-xs uppercase tracking-widest text-[#e0b660] mb-3 text-center">
          DASHBOARD FEATURES
        </div>
        <h2 className="text-2xl font-light text-white mb-10 text-center">
          Everything You Need to Manage Your Caseload
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <List className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Case list view</h3>
            <p className="text-zinc-400 text-sm">
              See all active cases with status, stage, and key dates in a sortable table.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <Activity className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Activity feed</h3>
            <p className="text-zinc-400 text-sm">
              Recent actions across all cases — filings, client messages, task completions — in one stream.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <CheckSquare className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Task tracking</h3>
            <p className="text-zinc-400 text-sm">
              Assign tasks, set due dates, and track completion across your entire team.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <Calendar className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Deadline management</h3>
            <p className="text-zinc-400 text-sm">
              Upcoming deadlines and court dates surfaced automatically with reminders.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <Users className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Team workload</h3>
            <p className="text-zinc-400 text-sm">
              See case distribution across attorneys and staff at a glance.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-lg hover:border-[#e0b660]/50 transition-all">
            <Search className="w-10 h-10 text-[#e0b660] mb-4" />
            <h3 className="text-white font-medium text-lg mb-2">Quick search</h3>
            <p className="text-zinc-400 text-sm">
              Find any case, client, or document instantly with universal search.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Before/After Comparison */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="bg-zinc-950 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-light text-white mb-10 text-center">
            From Scattered to Streamlined
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Before */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-5 h-5 text-red-500" />
                <span className="text-zinc-400 font-medium">Without Amicus</span>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-500 text-sm">Check email for case updates</p>
                <p className="text-zinc-500 text-sm">Open spreadsheet for deadlines</p>
                <p className="text-zinc-500 text-sm">Search shared drive for documents</p>
                <p className="text-zinc-500 text-sm">Ask paralegal for status</p>
                <p className="text-zinc-500 text-sm">Manually update client</p>
              </div>
            </div>

            {/* Right Column: After */}
            <div className="bg-zinc-900/50 border border-[#e0b660]/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-[#e0b660]" />
                <span className="text-white font-medium">With Amicus</span>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-300 text-sm">One dashboard shows everything</p>
                <p className="text-zinc-300 text-sm">Deadlines surface automatically</p>
                <p className="text-zinc-300 text-sm">Documents attached to each case</p>
                <p className="text-zinc-300 text-sm">Status visible at a glance</p>
                <p className="text-zinc-300 text-sm">Clients updated automatically</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Key Metrics */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <div className="text-4xl font-light text-[#e0b660] mb-2">8+ hrs</div>
            <p className="text-zinc-400 text-sm">Saved weekly on case lookups</p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-4xl font-light text-[#e0b660] mb-2">100%</div>
            <p className="text-zinc-400 text-sm">Case visibility across your team</p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-4xl font-light text-[#e0b660] mb-2">0</div>
            <p className="text-zinc-400 text-sm">Cases falling through the cracks</p>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="w-24 h-px bg-zinc-800 mx-auto mb-10"></div>
        <h2 className="text-3xl font-light text-white mb-4">
          See Every Case. Miss Nothing.
        </h2>
        <p className="text-zinc-400 text-base mb-8 font-normal">
          Book a 20-minute demo to see your caseload in one view.
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

export default CaseDashboard;
