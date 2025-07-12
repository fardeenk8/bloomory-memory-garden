
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSubscription from "./NewsletterSubscription";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Personal Features", href: "/personal" },
      { name: "Partner Program", href: "/partners" },
      { name: "Pricing", href: "/pricing" },
      // { name: "API Documentation", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "/about" },
      // { name: "Blog", href: "/blog" },
      // { name: "Careers", href: "#" },
      // { name: "Press Kit", href: "#" }
    ],
    Support: [
      // { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ],
    Community: [
      { name: "Testimonials", href: "/testimonials" },
      { name: "Facebook", href: "https://www.facebook.com/people/Bloomory-AI/61576679825298/" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/bloomory-ai-592620370/" },
      { name: "Instagram", href: "https://www.instagram.com/bloomoryai/" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the latest updates on new features, memory preservation tips, and exclusive content delivered to your inbox.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterSubscription 
              placeholder="Enter your email address"
              buttonText="Subscribe"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex flex-col items-center mb-6 mt-1">
              <img
                src="bloomoryAI-logo.png"
                alt="BloomoryAI Logo"
                // style={{ height: "10rem", marginBottom: "-9rem" , marginTop: "-20rem", marginLeft: "-5rem"}} 
                className="w-24 -mb-2 -mt-10"
              />
              {/* <div className="-ml-16"> */}
              <span className="text-4xl font-bold text-white leading-none">BloomoryAI</span>
              {/* </div> */}
            </Link>


            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered memory platform helping individuals and professionals beautifully store, organize, and share life's most meaningful moments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                heybloomory@gmail.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                +91 84520-45413
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BloomoryAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
