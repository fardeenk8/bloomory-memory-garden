
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterSection from "@/components/blog/NewsletterSection";
import { getAllBlogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Get fresh blog posts data
  const blogPosts = getAllBlogPosts();
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = displayedPosts.length < filteredPosts.length;

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    setVisiblePosts(6); // Reset visible posts when changing category
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <BlogHero 
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <FeaturedPost />

      <BlogGrid 
        posts={displayedPosts}
        hasMorePosts={hasMorePosts}
        onLoadMore={handleLoadMore}
      />

      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default Blog;
