import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Bell, FileCheck, Calendar, Shield, Smartphone } from "lucide-react";
import Navigation from "@/components/Navigation";

const Clients = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 animate-in fade-in duration-700">
            Know What's Going On<br />in <span className="text-primary">Your Case</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            LAWLINK clients get updates directly from their lawyer's case system — no waiting, no confusion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all">
              Find a LAWLINK Lawyer
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-gray-300 text-gray-900 hover:bg-white hover:shadow-lg rounded-full transition-all">
              Download the App
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Legal Clarity, Finally
          </h2>
          <p className="text-center text-gray-700 mb-16 text-lg max-w-2xl mx-auto">
            Everything you need to stay informed and engaged throughout your legal journey
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Chatbot That Knows Your Case</h3>
                <p className="text-gray-600">
                  Get instant answers 24/7. Our AI knows all the details and explains everything in plain English.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Case Timeline & Status Updates</h3>
                <p className="text-gray-600">
                  Never wonder what's happening. Get notifications whenever there's progress on your case.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Document Access</h3>
                <p className="text-gray-600">
                  Access all your case documents in one secure place. Review filings and correspondence anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
                <p className="text-gray-600">
                  Keep track of court dates and appointments. Get reminders so you're always prepared.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
                <p className="text-gray-600">
                  Your information is protected with bank-level security. Only you and your legal team have access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                <p className="text-gray-600">
                  Simple interface designed for everyone, accessible on your phone or computer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How LAWLINK Works for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="rounded-full bg-primary w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Your Lawyer Sets Up Your Case</h3>
              <p className="text-gray-600">
                Once you hire your attorney, they'll invite you to LAWLINK. You'll get access to all your case information instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stay Informed Every Step</h3>
              <p className="text-gray-600">
                Get updates when anything happens. Ask the AI assistant questions anytime you want to understand more.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
              <p className="text-gray-600">
                See your case timeline, upcoming events, and progress toward resolution. Know exactly where things stand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            LAWLINK Clients Get More
          </h2>
          <p className="text-center text-xl text-primary font-semibold mb-12">
            Friendly. Experienced. Prioritized.
          </p>
          
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  No More Phone Tag
                </h3>
                <p className="text-gray-600">
                  Get answers to simple questions instantly through our AI assistant, without waiting for a callback. 
                  Save your lawyer's time for the important conversations.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Bell className="w-6 h-6 text-primary mr-3" />
                  Always in the Loop
                </h3>
                <p className="text-gray-600">
                  Never wonder if something is happening with your case. You'll be the first to know about any developments, 
                  filings, or important dates.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  Your Information, Protected
                </h3>
                <p className="text-gray-600">
                  All your sensitive legal information is encrypted and secure. Only you and your legal team have access, 
                  maintaining full attorney-client privilege.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Take Control of Your Legal Matter
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Ask your attorney if they use LAWLINK, or find a LAWLINK partner firm near you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 rounded-full">
              Find a Law Firm
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-gray-300 text-gray-900 hover:bg-gray-100 rounded-full">
              Learn More
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
