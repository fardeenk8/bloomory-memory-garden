
import React from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
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
  );
};

export default NewsletterSection;
