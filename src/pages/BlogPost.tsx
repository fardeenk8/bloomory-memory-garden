
import { useParams, Link, useNavigate } from "react-router-dom";
import blogPosts from "@/data/blogPosts";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useEffect } from "react";

// Social share links generator
const getShareUrl = (slug: string) => `${window.location.origin}/blog/${slug}`;
const socialPlatforms = [
  {
    name: "Twitter",
    url: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: "/lovable-uploads/482b840d-6cd0-41d7-aba9-e846bb6daa78.png",
  },
  {
    name: "LinkedIn",
    url: (url: string, title: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
  },
  {
    name: "WhatsApp",
    url: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg",
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post && post.seo?.title) {
      document.title = post.seo.title;
    }
    if (post && post.seo?.description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', post.seo.description);
      } else {
        const tag = document.createElement('meta');
        tag.name = "description";
        tag.content = post.seo.description;
        document.head.appendChild(tag);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">404 - Post Not Found</h1>
            <Link to="/blog" className="underline text-purple-600">Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = getShareUrl(post.slug);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Featured image */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg max-h-96 object-cover mb-8"
            loading="lazy"
          />

          {/* Post meta */}
          <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><User className="w-4 h-4 mr-1" />{post.author?.name}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{post.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</span>
            </div>
            <Link to="/blog" className="text-purple-600 hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          {/* Rich HTML content */}
          <article
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social sharing */}
          <div className="mt-12 flex items-center space-x-4">
            <span className="font-semibold text-gray-700">Share:</span>
            {socialPlatforms.map(platform => (
              <a
                key={platform.name}
                href={platform.url(shareUrl, post.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border hover:bg-gray-100 flex items-center"
                aria-label={platform.name}
              >
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="w-5 h-5"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
