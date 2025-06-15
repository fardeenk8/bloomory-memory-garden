
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogPostForm from '@/components/admin/BlogPostForm';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminAddBlog: React.FC = () => {
  // Simple auth check - in a real app, you'd use proper authentication
  const isAuthenticated = true; // Replace with actual auth logic
  const isAdmin = true; // Replace with actual role checking

  useEffect(() => {
    document.title = 'Add New Blog Post - BloomoryAI Admin';
  }, []);

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-4">You need admin privileges to access this page.</p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-purple-100">Blog Content Management</p>
              </div>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <BlogPostForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminAddBlog;
