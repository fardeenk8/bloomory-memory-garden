
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Shield, Heart } from "lucide-react";

const Hero = () => {
  return (
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
          Your Life's Most
          <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Beautiful Memories
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Store, organize, and share your precious moments with AI-powered intelligence. 
          Perfect for families preserving memories and professionals delivering exceptional experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 mr-2" />
            Start for Free
          </Button>
          <Button size="lg" className="bg-white/10 border-2 border-white/40 text-black hover:bg-white/20 hover:border-white/60 text-lg px-8 py-4 rounded-full backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Play className="w-5 h-5 mr-2 text-black" />
            Watch Demo
          </Button>
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
  );
};

export default Hero;
