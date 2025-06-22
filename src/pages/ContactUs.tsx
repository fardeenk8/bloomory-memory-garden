import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Users, Wrench, Loader2, Instagram, Linkedin, Facebook, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { post } from "@/utils/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await post('/api/contact', {
        name: formData.name,
        email: formData.email,
        type: formData.type,
        message: formData.message,
      });

      toast({
        title: 'Message Sent!',
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ 
        name: "", 
        email: "", 
        type: "general", 
        message: "", 
        phone: "" 
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "heybloomory@gmail.com",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 84520 45413",
      description: "Business hours: 9 AM - 6 PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Mumbai, India",
      description: "Headquarters & Development Center"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "partnership", label: "Partnership", icon: Users },
    { value: "support", label: "Technical Support", icon: Wrench }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/Bloomory-AI/61576679825298/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/bloomory-ai-592620370/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bloomoryai/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about BloomoryAI? Want to become a partner? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="type">Inquiry Type *</Label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone/WhatsApp (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us how we can help you..."
                        disabled={isLoading}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our team is here to help you make the most of BloomoryAI. Whether you're a personal user, potential partner, or need technical assistance, we're ready to assist.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-purple-600 font-medium mb-1">
                            {info.info}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Inquiry Types */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What can we help you with?
                </h3>
                <div className="space-y-3">
                  {inquiryTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <type.icon className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect with us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon === "custom-x" ? (
                        <img
                          src="/lovable-uploads/482b840d-6cd0-41d7-aba9-e846bb6daa78.png"
                          alt="X"
                          className="w-5 h-5 object-contain"
                          style={{ filter: 'contrast(1.1) brightness(0.92)' }}
                        />
                      ) : (
                        // @ts-ignore: If icon isn't a string, render it as a Lucide icon component
                        <social.icon className="w-5 h-5 text-gray-600" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
