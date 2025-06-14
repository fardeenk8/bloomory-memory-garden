import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Shield, Heart, Camera, Users, Briefcase, ArrowRight, Star, Quote } from "lucide-react";
import Footer from "@/components/Footer";
import PartnerRegistrationModal from "@/components/PartnerRegistrationModal";
import PlanSelectionModal from "@/components/PlanSelectionModal";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { useState } from "react";

const NewIndex = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const userTypes = [
    {
      icon: Camera,
      title: "📷 Personal Users",
      description: "Enjoy AI-powered storage, filters, and memory curation for personal moments — from birthdays to travel."
    },
    {
      icon: Briefcase,
      title: "💼 Partners (Studios, Creators, Planners)",
      description: "Designed for both B2B and B2C — offer services via branded dashboards, manage clients, and monetize content with BloomoryAI's partner tools."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Photographer",
      content: "BloomoryAI has transformed how I deliver albums to my clients. The AI organization and white-labeled sharing are game-changers!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Family User",
      content: "Finally, a platform that understands my memories! The facial recognition and auto-tagging make finding old photos effortless.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Event Planner",
      content: "The event planning toolkit integrated with memory management is exactly what my business needed. Clients love the collaboration features.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "5 Ways AI is Revolutionizing Memory Management",
      excerpt: "Discover how artificial intelligence is changing the way we store, organize, and share our most precious moments.",
      date: "December 10, 2024",
      readTime: "5 min read"
    },
    {
      title: "Wedding Photography: Delivering Perfect Albums Every Time",
      excerpt: "Learn professional tips for photographers on creating stunning, organized wedding albums that clients will treasure forever.",
      date: "December 8, 2024",
      readTime: "7 min read"
    },
    {
      title: "Event Planning Made Simple with Digital Memory Tools",
      excerpt: "How modern event planners are using digital memory platforms to enhance client experience and streamline their workflow.",
      date: "December 5, 2024",
      readTime: "4 min read"
    }
  ];

  const handleBecomePartner = () => {
    setIsPartnerModalOpen(true);
  };

  const handleGetStarted = (plan: string = "freemium") => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Memory Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Memories.
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Beautifully Stored.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            AI-powered photo/video memory platform helping individuals and professionals beautifully store, organize, and share life's most meaningful moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleGetStarted("freemium")}
            >
              <Heart className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleBecomePartner}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
          
          {/* Video Demo Preview */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-1">
              <div className="bg-black rounded-xl aspect-video flex items-center justify-center">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Play className="w-6 h-6 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              End-to-End Encrypted
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              AI-Powered Organization
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2 text-pink-400" />
              Privacy First
            </div>
          </div>
        </div>
      </section>

      {/* User Types Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're preserving family memories or running a creative business, BloomoryAI has the perfect tools for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {userTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">See what our users are saying about BloomoryAI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">Stay updated with memory management tips and industry insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-purple-100 mb-8">
            Get the latest memory preservation tips, AI insights, and feature updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSubscription 
              placeholder="Enter your email"
              buttonText="Subscribe"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <PartnerRegistrationModal 
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
      <PlanSelectionModal 
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default NewIndex;
