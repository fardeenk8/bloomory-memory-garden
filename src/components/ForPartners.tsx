
import { Button } from "@/components/ui/button";
import { Briefcase, Users, CreditCard, Share2, BarChart3, Settings } from "lucide-react";

const ForPartners = () => {
  const partnerFeatures = [
    { icon: Briefcase, text: "Dedicated partner dashboard" },
    { icon: Users, text: "Service listings & portfolio" },
    { icon: CreditCard, text: "Booking & payment integration" },
    { icon: Share2, text: "White-labeled client sharing" },
    { icon: BarChart3, text: "Analytics & client insights" },
    { icon: Settings, text: "Professional collaboration tools" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-blue-600">
                <Briefcase className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Professional Dashboard</p>
                <p className="text-sm opacity-75">Manage clients & showcase work</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                For Partners
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Creative Business
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're a photographer, videographer, event planner, or creative professional, 
                our platform provides everything you need to deliver exceptional client experiences and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partnerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Briefcase className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPartners;
