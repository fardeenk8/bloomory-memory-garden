
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
              Memory Experience?
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who are already preserving and sharing their most precious moments 
            with the power of AI. Start your journey today, completely free.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 mr-2" />
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-full backdrop-blur-sm">
            Become a Partner
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">Free</div>
            <div className="text-gray-300">Forever Plan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">30s</div>
            <div className="text-gray-300">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">AI Protection</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
