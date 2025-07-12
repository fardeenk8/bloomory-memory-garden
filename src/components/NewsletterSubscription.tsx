import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { post } from "@/utils/api";

interface NewsletterSubscriptionProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

const NewsletterSubscription = ({ 
  className = "", 
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}: NewsletterSubscriptionProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  // Track input focus for placeholder logic
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await post('/api/newsletter', { email });

      toast({
        title: 'Thank you for subscribing!',
        description: "You'll receive the latest updates and memory preservation tips.",
      });

      setEmail('');
      setIsSubscribed(true);

      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={!isFocused && !email ? placeholder : ""}
        className="flex-1 text-black placeholder-gray-400 caret-black"
        disabled={isLoading}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Button 
        type="submit" 
        disabled={isLoading || !email.trim()}
        className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : isSubscribed ? (
          "Subscribed!"
        ) : (
          buttonText
        )}
      </Button>
    </form>
  );
};

export default NewsletterSubscription;