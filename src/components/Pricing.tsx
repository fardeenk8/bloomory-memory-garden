
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Freemium",
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started with BloomoryAI",
      icon: Star,
      features: [
        "5GB storage space",
        "Basic AI organization",
        "Standard photo sharing",
        "Mobile app access",
        "Community support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Personal",
      price: "$9.99",
      period: "per month",
      description: "Ideal for individuals and families",
      icon: Zap,
      features: [
        "Unlimited storage",
        "Advanced AI features",
        "Facial recognition",
        "Password protection",
        "Background removal",
        "Beautification filters",
        "Event planning tools",
        "Priority support"
      ],
      cta: "Start Personal Plan",
      popular: true
    },
    {
      name: "Partner",
      price: "$29.99",
      period: "per month",
      description: "Built for creative professionals",
      icon: Crown,
      features: [
        "Everything in Personal",
        "Partner dashboard",
        "Client collaboration",
        "White-labeled sharing",
        "Payment integration",
        "Analytics & insights",
        "Custom branding",
        "Dedicated support"
      ],
      cta: "Go Professional",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free and upgrade as you grow. Every plan includes our core AI-powered features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-purple-600 to-pink-600 transform scale-105' : 'bg-gray-800'} ${plan.popular ? 'ring-4 ring-purple-400' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${plan.popular ? 'bg-white/20' : 'bg-purple-600'}`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-300 ml-2">{plan.period}</span>}
                </div>
                <p className={`${plan.popular ? 'text-gray-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className={`${plan.popular ? 'text-gray-100' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                size="lg" 
                className={`w-full ${plan.popular ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 hover:bg-purple-700'} rounded-full py-4 text-lg font-semibold transition-all duration-300`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
