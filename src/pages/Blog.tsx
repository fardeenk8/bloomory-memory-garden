
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock, Camera, Brain, Lightbulb, Gift, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import blogPosts from "@/data/blogPosts";

const Blog = () => {
  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Memory Tips", count: 8, icon: Camera },
    { name: "AI Photography", count: 6, icon: Brain },
    { name: "Business Guides", count: 5, icon: Lightbulb },
    { name: "Gift Ideas", count: 3, icon: Gift },
    { name: "Updates", count: 2, icon: TrendingUp }
  ];

  const featuredPost = {
    title: "The Future of AI-Powered Memory Preservation: What's Coming in 2025",
    excerpt: "Discover the groundbreaking AI features coming to BloomoryAI that will revolutionize how we capture, organize, and share our most precious memories.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "AI Photography",
    featured: true
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.icon || Tag;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => {
              const IconComponent = category.icon || Tag;
              return (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`${
                    category.active 
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" 
                      : "hover:bg-purple-50"
                  }`}
                >
                  {category.icon && <IconComponent className="w-4 h-4 mr-2" />}
                  {category.name} ({category.count})
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
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

// -- show the actual cards from data and link to individual posts --
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest insights and tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Tag className="w-3 h-3 text-purple-600 mr-1" />
                        <span className="text-purple-600 font-medium text-xs">{post.category}</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-purple-700 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt.substring(0, 150)}{post.excerpt.length > 150 ? "..." : ""}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author.name}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-purple-100 mb-8">
            Get the latest memory preservation tips, AI insights, and feature updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
