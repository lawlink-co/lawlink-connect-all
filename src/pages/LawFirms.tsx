import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Users2, BarChart3, Shield, Lock, Database } from "lucide-react";
import Navigation from "@/components/Navigation";

const LawFirms = () => {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-12 leading-tight text-center">
            Push Cases.<br />
            Draft Briefs.<br />
            Keep Clients Satisfied.<br />
            <span className="text-primary">All on One Platform.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-white text-white hover:bg-white hover:text-black">
              Join the Network
            </Button>
          </div>
        </div>
      </section>

      {/* Core Themes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Case Management</h3>
                <p className="text-gray-400 text-sm">Complete oversight of all active cases</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Document Drafting</h3>
                <p className="text-gray-400 text-sm">AI-assisted legal writing</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <Users2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Client Communication</h3>
                <p className="text-gray-400 text-sm">Automatic updates via mobile app</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Case Analytics</h3>
                <p className="text-gray-400 text-sm">Efficiency tracking & insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features with Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Platform Features
          </h2>
          
          <Tabs defaultValue="drafting" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-gray-900">
              <TabsTrigger value="drafting" className="text-base">AI Drafting</TabsTrigger>
              <TabsTrigger value="workflows" className="text-base">Automated Workflows</TabsTrigger>
              <TabsTrigger value="satisfaction" className="text-base">Client Satisfaction</TabsTrigger>
              <TabsTrigger value="access" className="text-base">Easy Data Access</TabsTrigger>
            </TabsList>
            
            <TabsContent value="drafting" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Context-Aware AI Drafting</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    The AI reads your entire case file—pleadings, depositions, discovery—to draft accurate, 
                    relevant legal documents. Generate motions, memos, and briefs in minutes, not hours.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Pre-built templates for common motions customized to your jurisdiction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Automatic citation of relevant case law and statutes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Built-in review and approval workflow for quality control</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="workflows" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Automated Workflows</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Streamline repetitive tasks and focus on strategy. LAWLINK automates timeline generation, 
                    deadline tracking, and client notifications.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Automated timeline generation from case events and document dates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Calendar integration with automatic deadline reminders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Push notifications to clients for case updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="satisfaction" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Client Satisfaction</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    Give your clients a mobile app with real-time case updates and an AI assistant that knows their case. 
                    Reduce routine calls and increase transparency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">24/7 AI chatbot answers client questions about their case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Automatic push notifications for important case developments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Secure document sharing and messaging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="access" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Easy Data Access</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    All case documents, discovery, and communications in one secure location. 
                    AI-powered search makes finding what you need instant.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Centralized document repository with version control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">AI-powered discovery analysis and organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-300">Semantic search across all case documents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your clients' data is protected with enterprise-grade security that meets 
              the highest standards for legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
                <p className="text-gray-400">
                  All data encrypted in transit and at rest with AES-256 encryption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Attorney-Client Privilege</h3>
                <p className="text-gray-400">
                  Full compliance with confidentiality requirements and privilege protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-primary/30">
              <CardContent className="pt-6 text-center">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">SOC 2 Compliant</h3>
                <p className="text-gray-400">
                  Regular security audits and compliance with industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join leading plaintiff attorneys who are winning more cases with LAWLINK.
          </p>
          <Button size="lg" className="text-xl px-12 py-8 bg-primary hover:bg-primary/90">
            Book a Demo
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • White-glove onboarding
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2025 LAWLINK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LawFirms;
