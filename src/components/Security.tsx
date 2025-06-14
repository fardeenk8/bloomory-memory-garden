
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Globe } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Your memories are protected with military-grade encryption from upload to sharing."
    },
    {
      icon: Lock,
      title: "Privacy Controls",
      description: "Complete control over who sees what with granular privacy settings and access controls."
    },
    {
      icon: Eye,
      title: "Content Moderation",
      description: "Advanced AI detects inappropriate content and provides automated content reporting."
    },
    {
      icon: AlertTriangle,
      title: "Secure Sharing",
      description: "Expiring links, password protection, and watermarking keep your content secure."
    },
    {
      icon: FileCheck,
      title: "Data Integrity",
      description: "Regular backups and data verification ensure your memories are never lost."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "GDPR, CCPA compliant with transparent data handling and user rights protection."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that your memories are irreplaceable. That's why we've built BloomoryAI 
            with enterprise-grade security and privacy features from the ground up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
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
        
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Users Worldwide
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join families and professionals who trust BloomoryAI to keep their most precious memories safe and secure.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2 text-blue-500" />
              256-bit Encryption
            </div>
            <div className="flex items-center">
              <FileCheck className="w-4 h-4 mr-2 text-purple-500" />
              GDPR Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
