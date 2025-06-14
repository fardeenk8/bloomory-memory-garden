
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Camera, Film, Users } from "lucide-react";
import PlanSelectionModal from "@/components/PlanSelectionModal";
import { useState } from "react";

const PricingPage = () => {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelection = (planType: string) => {
    setSelectedPlan(planType);
    setIsPlanModalOpen(true);
  };

  const plans = [
    {
      name: "Freemium",
      price: "$0",
      period: "year",
      description: "Anyone — individuals or partners just getting started",
      icon: Star,
      features: [
        "Full access to all personal features",
        "Mobile app & secure cloud backup",
        "1000 photos / year",
        "10 high-quality videos / year",
        "Limited storage only"
      ],
      limitations: ["Limited storage only"],
      cta: "Get Started Free",
      popular: false,
      planType: "freemium"
    },
    {
      name: "Personal",
      price: "$6.99",
      period: "year",
      description: "Individuals, families, and creators who want advanced tools",
      icon: Zap,
      features: [
        "All Freemium features",
        "AI photo/video editing tools",
        "Password-protected & QR album sharing",
        "Event planning toolkit",
        "Auto-tagging, smart organizing, face-based search",
        "End-to-end encrypted cloud backup",
        "5000 photos / year",
        "200 high-quality videos / year"
      ],
      cta: "Choose Personal",
      popular: true,
      badge: "Perfect for memory collectors",
      planType: "personal"
    },
    {
      name: "Partner",
      price: "$24.99",
      period: "year",
      description: "Photographers, videographers, event planners, schools, vendors",
      icon: Crown,
      features: [
        "All Personal + Partner features",
        "Partner dashboard with service listings",
        "Booking, payments, and client management",
        "Ratings, reviews, white-labeled sharing",
        "Vendor marketplace profile",
        "Full event memory planning toolkit for clients",
        "10000 photos / year",
        "200 high-quality videos / year"
      ],
      cta: "Go Professional",
      popular: false,
      badge: "Grow your creative business",
      planType: "partner"
    }
  ];

  const comparisonFeatures = [
    { name: "AI Photo/Video Storage", freemium: true, personal: true, partner: true },
    { name: "Mobile App Support", freemium: true, personal: true, partner: true },
    { name: "AI Editing & Filters", freemium: true, personal: true, partner: true },
    { name: "Event Planning Toolkit", freemium: true, personal: true, partner: true },
    { name: "Partner Tools & Marketplace", freemium: false, personal: false, partner: true },
    { name: "Booking & Payment Integration", freemium: false, personal: false, partner: true },
    { name: "White-Labeled Sharing", freemium: false, personal: false, partner: true },
    { name: "Storage – Photos", freemium: "1000", personal: "5000", partner: "10000" },
    { name: "Storage – Videos", freemium: "10", personal: "200", partner: "200" },
    { name: "Yearly Price", freemium: "$0", personal: "$6.99", partner: "$24.99" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BloomoryAI Global Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            All plans are billed yearly. Start free and upgrade anytime as your needs grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-purple-600 to-pink-600 transform scale-105 text-white' : 'bg-gray-50 text-gray-900'} ${plan.popular ? 'ring-4 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${plan.popular ? 'bg-white/20' : 'bg-purple-600'}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? 'text-gray-100' : 'text-gray-500'}`}>/ {plan.period}</span>
                  </div>
                  <p className={`text-sm ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  {plan.badge && (
                    <div className={`mt-3 text-sm font-medium ${plan.popular ? 'text-yellow-200' : 'text-purple-600'}`}>
                      🎁 {plan.badge}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  className={`w-full ${plan.popular ? 'bg-white text-purple-600 hover:bg-gray-100' : 'bg-purple-600 hover:bg-purple-700 text-white'} rounded-full py-4 text-lg font-semibold transition-all duration-300`}
                  onClick={() => handlePlanSelection(plan.planType)}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📊 Plan Comparison Table</h2>
            <p className="text-xl text-gray-600">Compare all features across our plans</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 mr-2" />
                        Freemium
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">
                      <div className="flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Personal ($6.99/yr)
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      <div className="flex items-center justify-center">
                        <Crown className="w-4 h-4 mr-2" />
                        Partner ($24.99/yr)
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{feature.name}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof feature.freemium === 'boolean' ? (
                          feature.freemium ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature.freemium}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof feature.personal === 'boolean' ? (
                          feature.personal ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature.personal}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof feature.partner === 'boolean' ? (
                          feature.partner ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-400">—</span>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature.partner}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Camera className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">📷 Personal Users</h3>
              <p className="text-gray-600">Perfect for families and memory collectors</p>
            </div>
            <div>
              <Film className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">🎥 Creative Professionals</h3>
              <p className="text-gray-600">Ideal for photographers and videographers</p>
            </div>
            <div>
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">💼 Business Partners</h3>
              <p className="text-gray-600">Built for event planners and institutions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Plan Selection Modal */}
      <PlanSelectionModal 
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default PricingPage;
