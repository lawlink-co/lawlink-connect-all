import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileSearch, Shield, Smartphone, Clock, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import phoneMockup from "@/assets/phone-mockup.png";

const Clients = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Know What's Happening<br />in Your Case.
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed">
                LAWLINK clients get real updates, real context, and real clarity.
              </p>
              <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Find a LAWLINK Lawyer
              </Button>
            </div>
            <div className="relative animate-scale-in lg:scale-125">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
              <img 
                src={phoneMockup} 
                alt="LAWLINK mobile app showing case overview with timeline and AI chat interface"
                className="relative mx-auto max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Case, Made Tangible Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Your Case, Made Tangible.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              LAWLINK turns your case into something you can follow, question, and understand — every moment, every update, every step.
            </p>
          </div>

          {/* Large Centered Visual */}
          <div className="relative mb-24 animate-fade-in">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
            <img 
              src={phoneMockup}
              alt="LAWLINK app interface showing AI chat and case progress"
              className="relative mx-auto max-w-2xl drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Experience Statements */}
          <div className="space-y-20 max-w-5xl mx-auto">
            {/* Statement 1 */}
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Talk to Your Case
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed">
                LAWLINK's built-in AI isn't generic — it knows your case like your lawyer does. Ask it questions, get updates, and understand filings in plain language.
              </p>
            </div>

            {/* Statement 2 */}
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                A Constant Flow of Updates
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed">
                No more waiting for callbacks. As your lawyer files, uploads, or receives new information, you see it — instantly.
              </p>
            </div>

            {/* Statement 3 */}
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Something You Can Follow
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed">
                Every document, update, and message lives in one place. LAWLINK becomes the central hub for your entire case — clear, connected, and always in motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary/10 to-indigo-100 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <MessageSquare className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
                Chat with Your Case — Literally
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                LAWLINK's AI knows every document and event, so you never have to ask twice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
                  <p className="text-gray-700">Get answers to your questions any time of day or night.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Completely Secure</h4>
                  <p className="text-gray-700">Your conversations are encrypted and confidential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Plain English</h4>
                  <p className="text-gray-700">No legal jargon. Clear explanations you can understand.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/50 p-6 rounded-xl">
                <FileSearch className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Complete Context</h4>
                  <p className="text-gray-700">The AI knows every detail of your specific case.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900">
            Every Lawyer on LAWLINK
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Every lawyer on LAWLINK uses the same secure infrastructure. No confusion. No lost files. No silence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Transparency</h3>
              <p className="text-gray-700">See exactly what's happening in your case, when it's happening.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Control</h3>
              <p className="text-gray-700">You're not left in the dark. LAWLINK puts you in the driver's seat.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Peace of Mind</h3>
              <p className="text-gray-700">Stop worrying about what's next. Get real-time clarity instead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case Deserves Better
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Find a LAWLINK Lawyer
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-sm text-gray-600">
            Your information stays private. Only you and your lawyer have access.
          </p>
          <p className="text-gray-500">&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Clients;
