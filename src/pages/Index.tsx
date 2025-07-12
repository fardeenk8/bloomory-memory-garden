
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ForPersonal from "@/components/ForPersonal";
import ForPartners from "@/components/ForPartners";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ForPersonal />
      <ForPartners />
      <Pricing />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
