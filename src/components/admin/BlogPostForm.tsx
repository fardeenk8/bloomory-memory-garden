
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Save, Eye, Send } from 'lucide-react';
import ImageUpload from './ImageUpload';
import RichTextEditor from './RichTextEditor';
import { useBlogPost, BlogPostFormData } from '@/hooks/useBlogPost';

const BlogPostForm: React.FC = () => {
  const { isSubmitting, isDraft, generateSlugFromTitle, saveBlogPost } = useBlogPost();
  
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: '',
    slug: '',
    author: 'Team BloomoryAI',
    coverImage: '',
    excerpt: '',
    tags: [],
    publishDate: new Date().toISOString().split('T')[0],
    content: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  // Auto-generate slug when title changes
  useEffect(() => {
    if (formData.title) {
      const newSlug = generateSlugFromTitle(formData.title);
      setFormData(prev => ({ ...prev, slug: newSlug }));
    }
  }, [formData.title, generateSlugFromTitle]);

  const handleInputChange = (field: keyof BlogPostFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTagsChange = (value: string) => {
    setTagInput(value);
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleSubmit = async (asDraft = false) => {
    const success = await saveBlogPost(formData, asDraft);
    if (success && !asDraft) {
      // Reset form after successful publish
      setFormData({
        title: '',
        slug: '',
        author: 'Team BloomoryAI',
        coverImage: '',
        excerpt: '',
        tags: [],
        publishDate: new Date().toISOString().split('T')[0],
        content: ''
      });
      setTagInput('');
    }
  };

  if (isPreview) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">Preview Mode</h1>
          <Button onClick={() => setIsPreview(false)} variant="outline" className="w-full sm:w-auto">
            <Eye className="w-4 h-4 mr-2" />
            Exit Preview
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {formData.coverImage && (
              <img
                src={`${import.meta.env.BASE_URL}${formData.coverImage.startsWith('/') ? formData.coverImage.slice(1) : formData.coverImage}`}
                alt={formData.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
                onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')} // optional fallback
              />
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{formData.title || 'Untitled Post'}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 mb-6 gap-2 sm:gap-0">
              <span>By {formData.author}</span>
              <span className="hidden sm:inline">•</span>
              <span>{formData.publishDate}</span>
              {formData.tags.length > 0 && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span>{formData.tags.join(', ')}</span>
                </>
              )}
            </div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 italic">{formData.excerpt}</p>
            <div 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Create New Blog Post</h1>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:flex-shrink-0">
            <Button
              onClick={() => setIsPreview(true)}
              variant="outline"
              disabled={!formData.title}
              className="w-full sm:w-auto"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              onClick={() => handleSubmit(true)}
              variant="outline"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              <Save className="w-4 h-4 mr-2" />
              {isDraft ? 'Saving...' : 'Save Draft'}
            </Button>
            <Button
              onClick={() => handleSubmit(false)}
              disabled={isSubmitting || !formData.title || !formData.content}
              className="bg-gradient-to-r from-pink-500 to-purple-600 w-full sm:w-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>

        {/* Main Form - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Content Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Post Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Blog Title *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter your blog post title..."
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    URL Slug
                  </label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="auto-generated-from-title"
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-gray-500 break-all">
                    This will be the URL: /blog/{formData.slug}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Excerpt / Summary * (Max 200 chars)
                  </label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    placeholder="Write a compelling summary of your blog post..."
                    maxLength={200}
                    rows={3}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500">
                    {formData.excerpt.length}/200 characters
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rich Text Editor Card */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <RichTextEditor
                  value={formData.content}
                  onChange={(content) => handleInputChange('content', content)}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes 1 column on large screens, full width on mobile */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Author Name *
                  </label>
                  <Input
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                    placeholder="Author name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Publish Date
                  </label>
                  <Input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) => handleInputChange('publishDate', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <Input
                    value={tagInput}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    placeholder="AI, Memory, Photography (comma-separated)"
                  />
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Cover Image *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setFormData(prev => ({ ...prev, coverImage: url }));
                  }
                }}
                className="text-sm"
              />
              {formData.coverImage && (
                <div className="relative mt-2">
                  <img
                    src={formData.coverImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-md border"
                    onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')}
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, coverImage: '' }))}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
