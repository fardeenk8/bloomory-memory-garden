
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock, Brain } from "lucide-react";

const FeaturedPost = () => {
  const featuredPost = {
    title: "The Future of AI-Powered Memory Preservation: What's Coming in 2025",
    excerpt: "Discover the groundbreaking AI features coming to BloomoryAI that will revolutionize how we capture, organize, and share our most precious memories.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
    category: "AI Photography",
    featured: true
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "AI Photography":
        return Brain;
      default:
        return Tag;
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
        </div>
        <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                {React.createElement(getCategoryIcon(featuredPost.category), { 
                  className: "w-4 h-4 text-purple-600 mr-2" 
                })}
                <span className="text-purple-600 font-medium text-sm">{featuredPost.category}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-fit bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Read Article
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturedPost;
