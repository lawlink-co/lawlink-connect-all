import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileSearch, Shield, Smartphone, Clock, Check, Calendar, Briefcase, Lock, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import phoneAppMockup from "@/assets/phone-app-mockup.svg";
import notificationMockup from "@/assets/notification-mockup.png";
import circuitBoardHub from "@/assets/circuit-board-hub.png";
import casesFilingMockup from "@/assets/cases-filing-mockup.png";
import lawlinkLogo from "@/assets/lawlink-logo.png";

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
            <div className="relative animate-scale-in flex items-center justify-center h-full">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
              <img 
                src={phoneAppMockup} 
                alt="LAWLINK mobile app interface"
                className="relative mx-auto h-[425px] lg:h-[510px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Case, in One View - Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl text-center">
          <Smartphone className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
            Your Case, in One View
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            LAWLINK turns lawsuits into something tangible. See every update, motion, and court filing — right in your pocket.
          </p>
        </div>
      </section>

      {/* Real-Time Updates Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Bell className="w-16 h-16 text-primary mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Real-Time Updates
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Be informed at every stage of your case. Never miss a filing, hearing, or important deadline again.
            </p>
          </div>

          {/* Notification Mockup - Center Screen */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl"></div>
              <img 
                src={notificationMockup}
                alt="Case update notification on phone"
                className="relative max-w-lg w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Instant Alerts</h3>
              <p className="text-gray-700">Get notified the moment something happens in your case.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Deadline Reminders</h3>
              <p className="text-gray-700">Never miss important dates or court appearances.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Full Visibility</h3>
              <p className="text-gray-700">See exactly what's happening, when it's happening.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
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

      {/* Case Hub Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <FileSearch className="w-16 h-16 text-primary mx-auto mb-6 animate-scale-in" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Your Central Case Hub
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every document, update, and message lives in one place. LAWLINK becomes the central hub for your entire case.
            </p>
          </div>

          {/* Circuit Board Image with Glowing Logo */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full"></div>
            <div className="relative bg-gray-900 rounded-3xl p-8 overflow-hidden">
              <img 
                src={circuitBoardHub}
                alt="LAWLINK connected hub visualization"
                className="w-full max-w-3xl mx-auto rounded-xl"
              />
              {/* Glowing LAWLINK Logo Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary blur-xl opacity-70 rounded-full scale-150"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hub Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="pt-6 text-center">
                <FileSearch className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2 text-white">All Documents</h3>
                <p className="text-gray-300 text-sm">Every filing and document in one searchable place.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="pt-6 text-center">
                <MessageSquare className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2 text-white">Messages</h3>
                <p className="text-gray-300 text-sm">Communication with your lawyer, organized and accessible.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="pt-6 text-center">
                <Calendar className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2 text-white">Timeline</h3>
                <p className="text-gray-300 text-sm">Track every event and milestone in your case.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="pt-6 text-center">
                <Bell className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2 text-white">Updates</h3>
                <p className="text-gray-300 text-sm">Real-time notifications for everything important.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Your Cases, One App Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <Briefcase className="w-16 h-16 text-primary" />
              <h2 className="text-4xl sm:text-5xl font-bold">
                All Your Cases, One App
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Keep all your ongoing cases organized in a single app. Track appointments, deadlines, and updates for each case — always at your fingertips.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-gray-200">Multiple cases in one dashboard</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-gray-200">Track dates and events for each case</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-gray-200">Quick access to all case documents</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-gray-200">Separate notifications per case</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src={casesFilingMockup}
                alt="LAWLINK app showing multiple cases filing cabinet interface"
                className="relative h-[500px] lg:h-[600px] w-auto object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <Shield className="w-20 h-20 text-primary mx-auto mb-8 animate-scale-in" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Your Information, Secured.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Every lawyer on LAWLINK uses the same secure infrastructure.<br />No confusion. No lost files. No silence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">End-to-End Encryption</h3>
              <p className="text-gray-300">Your data is encrypted at rest and in transit.</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Private Access</h3>
              <p className="text-gray-300">Only you and your lawyer can see your case.</p>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">SOC 2 Compliant</h3>
              <p className="text-gray-300">Enterprise-grade security standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
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
