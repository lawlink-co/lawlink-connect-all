import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, Send, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

// Memoized static contact info sidebar - never needs to re-render
const ContactInfoSidebar = memo(() => (
  <div className="lg:col-span-2">
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 sticky top-32">
      <h2 className="text-2xl font-display mb-6 text-white">Contact Information</h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#e4bf6c]/10 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-[#e4bf6c]" />
          </div>
          <div>
            <p className="text-zinc-400 text-sm mb-1">Email us at</p>
            <a 
              href="mailto:case@amicusai.com" 
              className="text-white hover:text-[#e4bf6c] transition-colors text-lg font-body"
            >
              case@amicusai.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#e4bf6c]/10 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#e4bf6c]" />
          </div>
          <div>
            <p className="text-zinc-400 text-sm mb-1">Call us at</p>
            <a 
              href="tel:+12125882922" 
              className="text-white hover:text-[#e4bf6c] transition-colors text-lg font-body"
            >
              (212) 588-2922
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-400 text-sm leading-relaxed">
            Our team typically responds within 24 hours during business days. For urgent matters, please call us directly.
          </p>
        </div>
      </div>
    </div>
  </div>
));
ContactInfoSidebar.displayName = "ContactInfoSidebar";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground dark">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/law-firms" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Law Firms
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6" style={{ color: '#e4bf6c' }}>
            Reach Out to Our Team
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-body">
            Have questions about Amicus? We'd love to hear from you. Fill out the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-display mb-6 text-white">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e4bf6c] focus:ring-[#e4bf6c]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e4bf6c] focus:ring-[#e4bf6c]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-zinc-300">
                        Phone <span className="text-zinc-500">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e4bf6c] focus:ring-[#e4bf6c]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-zinc-300">
                        Company / Law Firm <span className="text-zinc-500">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e4bf6c] focus:ring-[#e4bf6c]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-300">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-[#e4bf6c] focus:ring-[#e4bf6c] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full sm:w-auto bg-[#e4bf6c] text-black hover:bg-[#d4af5c] transition-transform duration-300 hover:scale-105 font-sans text-lg px-8 py-6"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <ContactInfoSidebar />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center text-zinc-600">
          <p>&copy; 2025 Amicus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
