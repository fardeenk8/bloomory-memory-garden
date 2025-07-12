
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Star, MessageCircle, Share2, CheckSquare, Calendar, UserPlus, Bell, Camera, Film, PartyPopper, Gift, GraduationCap, BarChart3, CreditCard, Shield } from "lucide-react";
import PartnerRegistrationModal from "@/components/PartnerRegistrationModal";
import { useState } from "react";

const Partners = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const whyPartnerReasons = [
    "Reach thousands of memory-conscious users actively planning events",
    "Get discovered in a curated marketplace",
    "Deliver professional albums with AI-powered enhancements",
    "Offer secure, branded, and smart delivery options to clients"
  ];

  const marketplaceFeatures = [
    { icon: Users, title: "Partner Registration & Profile Creation", description: "Quickly register and build a business profile with logo, description, gallery, service location, and contact details." },
    { icon: BarChart3, title: "Partner Dashboard", description: "Manage listings, bookings, payments, and analytics from a central dashboard." },
    { icon: DollarSign, title: "Service Listings", description: "Add multiple services with pricing, samples, and event-type filters (wedding, birthday, corporate, etc.)." },
    { icon: CreditCard, title: "Booking & Payment Integration", description: "Clients can book and pay directly from the platform with confirmation notifications." },
    { icon: Star, title: "Ratings & Reviews", description: "Build credibility through customer feedback." },
    { icon: MessageCircle, title: "Chat with Clients", description: "Real-time messaging for service inquiries, support, or delivery status." },
    { icon: Share2, title: "White-Labeled Sharing", description: "Deliver albums under your branding — powered by BloomoryAI." }
  ];

  const eventToolkitFeatures = [
    { icon: CheckSquare, title: "Task & Checklist Management", description: "Help clients stay organized with smart task management." },
    { icon: DollarSign, title: "Budget Overview", description: "Provide budget tracking and expense management tools." },
    { icon: Users, title: "Guest List Manager", description: "Streamline guest management and communication." },
    { icon: Calendar, title: "Event Timeline", description: "Create detailed timelines and schedules." },
    { icon: MessageCircle, title: "Group Chat & Collaboration", description: "Enable seamless communication between all parties." },
    { icon: UserPlus, title: "Vendor Booking from Your Profile", description: "Allow clients to book additional services." },
    { icon: Bell, title: "Event Reminders & Notifications", description: "Automated notifications keep everyone informed." },
    { icon: Users, title: "Invite Collaborators", description: "Invite clients or co-vendors to collaborate." }
  ];

  const partnerCategories = [
    { icon: Camera, title: "Photographers", description: "Deliver watermarked previews, high-res downloads, and interactive albums." },
    { icon: Film, title: "Videographers", description: "Share teaser reels, encrypted video delivery, and preview with watermark." },
    { icon: PartyPopper, title: "Event Planners", description: "Manage timelines, collaborate with families, assign tasks, and notify everyone." },
    { icon: Gift, title: "Gifting Shops", description: "Let users order personalized photo gifts directly from albums." },
    { icon: GraduationCap, title: "Institutions & Schools", description: "Share event media securely with parents and students." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Become a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              BloomoryAI Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Convert potential vendors and service providers into BloomoryAI Partners with powerful business tools and a curated marketplace.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg"
            onClick={() => setIsPartnerModalOpen(true)}
          >
            Join as a Partner Today
          </Button>
        </div>
      </section>

      {/* Why Become a Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🧩 Why Become a Partner?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartnerReasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🛠️ Partner Marketplace Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Memory & Planning Toolkit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📁 Event Memory & Planning Toolkit</h2>
            <p className="text-xl text-gray-600">Empower your clients with smart planning tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventToolkitFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <feature.icon className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📦 Partner Categories Supported</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🚀 Ready to Join?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your dashboard, your services, your branding — powered by BloomoryAI's smart memory platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-semibold"
            onClick={() => setIsPartnerModalOpen(true)}
          >
            Join as a Partner Today
          </Button>
        </div>
      </section>

      <Footer />
      {/* Partner Registration Modal */}
      <PartnerRegistrationModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </div>
  );
};

export default Partners;
