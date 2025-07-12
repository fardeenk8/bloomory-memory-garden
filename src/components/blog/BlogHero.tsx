
import React from "react";
import { Button } from "@/components/ui/button";
import { Tag, Camera, Brain, Lightbulb, Gift, TrendingUp } from "lucide-react";

interface Category {
  name: string;
  count: number;
  icon?: React.ComponentType<any>;
}

interface BlogHeroProps {
  activeCategory: string;
  onCategoryChange: (categoryName: string) => void;
}

const BlogHero = ({ activeCategory, onCategoryChange }: BlogHeroProps) => {
  const categories: Category[] = [
    { name: "All", count: 24, icon: undefined },
    { name: "Memory Tips", count: 8, icon: Camera },
    { name: "AI Photography", count: 6, icon: Brain },
    { name: "Business Guides", count: 5, icon: Lightbulb },
    { name: "Gift Ideas", count: 3, icon: Gift },
    { name: "Updates", count: 2, icon: TrendingUp }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            BloomoryAI Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and updates from the world of AI-powered memory preservation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon || Tag;
            const isActive = activeCategory === category.name;
            return (
              <Button
                key={index}
                variant={isActive ? "default" : "outline"}
                className={`${
                  isActive 
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" 
                    : "hover:bg-purple-50"
                }`}
                onClick={() => onCategoryChange(category.name)}
              >
                {category.icon && <IconComponent className="w-4 h-4 mr-2" />}
                {category.name} ({category.count})
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
