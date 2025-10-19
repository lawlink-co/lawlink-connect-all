import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileSearch, Shield, Smartphone, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Clients = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Light, Clear, Empowering */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 animate-fade-in-slow">
            Know What's Happening<br />in Your Case
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            LAWLINK clients get more — real updates, real context, real clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Find a LAWLINK Lawyer
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105">
              Download the App
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Demo Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Smartphone className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
              Your Case, in Your Pocket
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              No more waiting on callbacks or reading confusing letters. LAWLINK gives you instant access to your case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <Bell className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Updates</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Get instant notifications about every important development in your case—filings, hearings, and settlements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <MessageSquare className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Direct Messaging</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Message your lawyer securely anytime. No more phone tag or waiting days for a response.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-8">
                <FileSearch className="w-12 h-12 text-primary mb-6" />
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
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-gradient-to-br from-primary/10 to-indigo-100 rounded-3xl p-12 shadow-xl">
            <MessageSquare className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
              Chat with an AI That Knows Your Case
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every document, every update, every step. Ask questions anytime and get instant, accurate answers about your lawsuit.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">24/7 Availability</h4>
                  <p className="text-gray-700">Get answers to your questions any time of day or night.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Completely Secure</h4>
                  <p className="text-gray-700">Your conversations are encrypted and confidential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Plain English</h4>
                  <p className="text-gray-700">No legal jargon. Clear explanations you can understand.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
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

      {/* Why Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-900">
            Why LAWLINK?
          </h2>
          <div className="space-y-8 text-left max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Transparency:</strong> See exactly what's happening in your case, when it's happening.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Control:</strong> You're not left in the dark. LAWLINK puts you in the driver's seat.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Peace of Mind:</strong> Stop worrying about what's next. Get real-time clarity instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case Deserves Better
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Join thousands of clients who trust LAWLINK for modern, transparent legal representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-7 bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Find a LAWLINK Lawyer
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-12 py-7 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105">
              Download the App
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
