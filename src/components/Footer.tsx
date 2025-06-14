
import { Heart, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription for:", email);
    setEmail("");
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with BloomoryAI</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new features, memory management tips, and exclusive offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">BloomoryAI</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              AI-powered memory management platform helping individuals and professionals 
              beautifully store, organize, and share life's most meaningful moments.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
              <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
              <div className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/personal" className="hover:text-white transition-colors">Personal Features</a></li>
              <li><a href="/partners" className="hover:text-white transition-colors">Partner Tools</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                hello@bloomoryai.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BloomoryAI. All rights reserved. Made with ❤️ for memory keepers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
