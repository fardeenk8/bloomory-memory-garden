
import { Button } from "@/components/ui/button";
import { Heart, Users, Camera, Sparkles, Shield, Wand2 } from "lucide-react";

const ForPersonal = () => {
  const personalFeatures = [
    { icon: Camera, text: "AI-powered photo & video storage" },
    { icon: Sparkles, text: "Automatic tagging & organization" },
    { icon: Users, text: "Facial recognition technology" },
    { icon: Shield, text: "Password-protected albums" },
    { icon: Wand2, text: "Background removal & beautification" },
    { icon: Heart, text: "Event planning toolkit" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                For Personal Use
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Preserve Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  Family Moments
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform how you capture, store, and share life's precious memories. 
                Our AI understands what matters most, making every photo and video easier to find and more beautiful to share.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-purple-600">
                <Camera className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Beautiful Memory Preview</p>
                <p className="text-sm opacity-75">Your photos organized intelligently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPersonal;
