import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogGridProps {
  posts: BlogPost[];
  hasMorePosts: boolean;
  onLoadMore: () => void;
}

const BlogGrid = ({ posts, hasMorePosts, onLoadMore }: BlogGridProps) => {
  const navigate = useNavigate();

  const handleAdminAccess = () => {
    const password = prompt("Enter admin password to continue:");
    if (password === "bloomory@admin") {
      navigate("/admin/add-blog");
    } else if (password !== null) {
      alert("Incorrect password. Access denied.");
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest insights and tips</p>
          </div>
          <Button
            onClick={handleAdminAccess}
            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            + Create Blog Post
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Link to={`/blog/${post.slug}`} className="block">
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>
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
                    <span className="text-purple-600 hover:underline text-sm">Read More</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {hasMorePosts && (
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={onLoadMore}
            >
              Load More Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
