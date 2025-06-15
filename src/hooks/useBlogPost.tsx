
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import blogPosts, { BlogPost } from '@/data/blogPosts';
import { generateUniqueSlug } from '@/utils/slugify';

export interface BlogPostFormData {
  title: string;
  slug: string;
  author: string;
  coverImage: string;
  excerpt: string;
  tags: string[];
  publishDate: string;
  content: string;
}

export const useBlogPost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  const validateForm = (formData: BlogPostFormData): string[] => {
    const errors: string[] = [];
    
    if (!formData.title.trim()) errors.push('Title is required');
    if (!formData.author.trim()) errors.push('Author is required');
    if (!formData.excerpt.trim()) errors.push('Excerpt is required');
    if (!formData.content.trim()) errors.push('Content is required');
    if (!formData.coverImage) errors.push('Cover image is required');
    
    if (formData.excerpt.length > 200) {
      errors.push('Excerpt must be less than 200 characters');
    }
    
    return errors;
  };

  const generateSlugFromTitle = (title: string): string => {
    const existingSlugs = blogPosts.map(post => post.slug);
    return generateUniqueSlug(title, existingSlugs);
  };

  const saveBlogPost = async (formData: BlogPostFormData, asDraft = false): Promise<boolean> => {
    setIsSubmitting(true);
    setIsDraft(asDraft);
    
    try {
      // Validate form if not saving as draft
      if (!asDraft) {
        const errors = validateForm(formData);
        if (errors.length > 0) {
          toast({
            title: "Validation Error",
            description: errors.join(', '),
            variant: "destructive"
          });
          return false;
        }
      }

      // Create blog post object
      const newBlogPost: BlogPost = {
        slug: formData.slug,
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: {
          name: formData.author,
        },
        date: formData.publishDate,
        readTime: `${Math.ceil(formData.content.length / 1000)} min read`,
        image: formData.coverImage,
        category: formData.tags[0] || 'General',
        tags: formData.tags,
        seo: {
          title: formData.title,
          description: formData.excerpt,
          keywords: formData.tags
        }
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would save to your backend/CMS here
      console.log('Saving blog post:', newBlogPost);
      
      toast({
        title: asDraft ? "✅ Draft saved!" : "✅ Blog post published!",
        description: asDraft 
          ? "Your draft has been saved successfully" 
          : "Your blog post has been published and is now live"
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: asDraft 
          ? "Failed to save draft. Please try again." 
          : "Failed to publish blog post. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSubmitting(false);
      setIsDraft(false);
    }
  };

  return {
    isSubmitting,
    isDraft,
    validateForm,
    generateSlugFromTitle,
    saveBlogPost
  };
};
