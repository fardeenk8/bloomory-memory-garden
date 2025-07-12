
import { Brain, Camera, Users, Palette, Shield, Calendar } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Organization",
      description: "Automatic tagging, facial recognition, and smart categorization make finding memories effortless."
    },
    {
      icon: Camera,
      title: "Professional Quality Storage",
      description: "High-resolution storage with beautification filters and background removal tools."
    },
    {
      icon: Users,
      title: "Secure Sharing",
      description: "Password-protected albums with expiring links and watermarking for complete control."
    },
    {
      icon: Palette,
      title: "Creative Enhancement",
      description: "Built-in filters, editing tools, and beautification features to make every moment shine."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Advanced nudity detection, content reporting, and end-to-end encryption."
    },
    {
      icon: Calendar,
      title: "Event Planning Toolkit",
      description: "Integrated planning tools for creating and managing memorable events."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of memory management with intelligent features that understand what matters most to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
