
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Camera, Share2, Shield, Calendar, MessageCircle, Smartphone, Printer, Search, Tag, FolderOpen, Copy, Edit, Film, QrCode, Lock, Eye, AlertTriangle, CloudUpload, Users, Download, Heart, CheckSquare, DollarSign, UserPlus, Clock, Bell } from "lucide-react";

const Personal = () => {
  const aiFeatures = [
    { icon: CloudUpload, title: "AI-Powered Photo & Video Storage", description: "Smart storage with auto-optimization and facial recognition." },
    { icon: Search, title: "AI-Based Search", description: "Find images using face recognition or contextual keywords." },
    { icon: Tag, title: "Auto-Tagging", description: "Automatically tag photos with themes like 'beach,' 'family,' 'birthday,' etc." },
    { icon: FolderOpen, title: "Auto-Organizing", description: "Albums are dynamically created based on AI recognition and tags." },
    { icon: Copy, title: "Duplicate/Similar Image Detection", description: "Prevent clutter by detecting and sorting out near-identical media." }
  ];

  const editingFeatures = [
    { icon: Edit, title: "AI Photo Editing Tools", description: "Smart enhancement, blemish removal, filters." },
    { icon: Camera, title: "AI Image Filters", description: "Beautify and apply mood-based or theme filters." },
    { icon: Users, title: "AI-Based Background Removal", description: "Remove cluttered or unwanted backgrounds." },
    { icon: Film, title: "Video Editing – Reels", description: "Quickly create highlight videos from photos/videos." }
  ];

  const sharingFeatures = [
    { icon: QrCode, title: "Event-Based Sharing with QR Codes", description: "Share albums via QR at weddings, parties, etc." },
    { icon: Share2, title: "Album Sharing with Friends & Family", description: "Share password-protected or public links." },
    { icon: Clock, title: "Expiring Album Access", description: "Time-limited access for added control." },
    { icon: Shield, title: "Watermarking", description: "Protect your content with custom watermarks." },
    { icon: Download, title: "Download Restrictions", description: "Disable downloads to keep control." },
    { icon: Heart, title: "Like, Comment & Download", description: "Social interaction within shared albums." }
  ];

  const privacyFeatures = [
    { icon: CloudUpload, title: "Secure Cloud Backup", description: "End-to-end encrypted storage." },
    { icon: Lock, title: "Password-Protected Albums", description: "Keep your memories secure with password protection." },
    { icon: Eye, title: "Nudity Detection", description: "AI scan to ensure family-safe content." },
    { icon: AlertTriangle, title: "Report Inappropriate Content", description: "Allow users to flag content." },
    { icon: Shield, title: "Safe Environment Tools", description: "Controls and filters to promote safe sharing." }
  ];

  const eventFeatures = [
    { icon: Calendar, title: "Event-Based Memory Curation", description: "Auto-group photos/videos by events like birthdays, trips, etc." },
    { icon: CheckSquare, title: "Task & Checklist Management", description: "Keep track of event planning tasks." },
    { icon: DollarSign, title: "Budget Overview", description: "Monitor and manage event expenses." },
    { icon: UserPlus, title: "Guest List Management", description: "Organize and track your event attendees." },
    { icon: Clock, title: "Event Timeline & Reminders", description: "Stay on schedule with automated reminders." },
    { icon: MessageCircle, title: "Event Chat & Collaboration", description: "Coordinate with family and friends." },
    { icon: Users, title: "Vendor Booking & Service Selection", description: "Find and book services directly." },
    { icon: Bell, title: "Notifications for updates", description: "Stay informed about event changes." }
  ];

  const FeatureSection = ({ title, subtitle, features, bgColor = "bg-white" }: any) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Memories for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Personal Users
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the full power of BloomoryAI's smart features tailored for everyday users and event-based memories.
          </p>
        </div>
      </section>

      <FeatureSection
        title="🧠 AI & Smart Memory Features"
        subtitle="Intelligent organization and discovery powered by advanced AI"
        features={aiFeatures}
      />

      <FeatureSection
        title="🎨 Photo & Video Editing"
        subtitle="Professional-grade editing tools powered by AI"
        features={editingFeatures}
        bgColor="bg-gray-50"
      />

      <FeatureSection
        title="📲 Sharing & Collaboration"
        subtitle="Share your memories safely and beautifully"
        features={sharingFeatures}
      />

      <FeatureSection
        title="🛡️ Privacy & Safety"
        subtitle="Your memories are protected with enterprise-grade security"
        features={privacyFeatures}
        bgColor="bg-gray-50"
      />

      <FeatureSection
        title="📅 Event Memory & Planning Toolkit"
        subtitle="Complete event planning and memory curation in one place"
        features={eventFeatures}
      />

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">💬 Chat & Social</h3>
              <p className="text-gray-600">Marketplace chat with vendors and family chat for memory discussions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Printer className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">🖨️ Print & Personalization</h3>
              <p className="text-gray-600">Create and order photo books, calendars, prints, and more.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">📱 Device Support</h3>
              <p className="text-gray-600">Fully responsive experience across Android and iOS.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Personal;
