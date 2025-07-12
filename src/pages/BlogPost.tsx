import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { getBlogPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">404 - Blog Not Found</h1>
            <p className="text-gray-500 mb-4">The blog post you’re looking for doesn’t exist.</p>
            <Link to="/blog" className="text-purple-600 underline font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><User className="w-4 h-4 mr-1" />{post.author.name}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</span>
            </div>
            <Link to="/blog" className="text-purple-600 hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <article
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <section className="my-12 border rounded-xl bg-gray-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Subscribe for Updates</h2>
              <p className="text-gray-500 mt-1 text-sm">
                Get more memory-keeping inspiration delivered to your inbox.
              </p>
            </div>
            <NewsletterSubscription className="w-full sm:w-auto mt-4 sm:mt-0" />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
