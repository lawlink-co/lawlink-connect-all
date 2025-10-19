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
                LAWLINK clients get more — real updates, real context, real clarity.
              </p>
              <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Find a LAWLINK Lawyer
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
              <img 
                src={phoneMockup} 
                alt="LAWLINK mobile app showing case overview with timeline and AI chat interface"
                className="relative mx-auto max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Smartphone className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case, Tangible
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
            LAWLINK turns lawsuits into something tangible. See every update, motion, and court filing — right in your pocket.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <Bell className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Updates</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get instant notifications about every important development in your case—filings, hearings, and settlements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <MessageSquare className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Direct Messaging</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Message your lawyer securely anytime. No more phone tag or waiting days for a response.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <FileSearch className="w-12 h-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Document Access</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  View all your case documents, pleadings, and evidence in one secure place on your phone.
                </p>
              </CardContent>
            </Card>
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
                LAWLINK's AI knows every document and event, so you don't have to ask twice.
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
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join thousands of clients who trust LAWLINK for modern, transparent legal representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Find a LAWLINK Lawyer
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg">
              LAWLINK Clients Get More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Clients;
