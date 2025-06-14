
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
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
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
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
