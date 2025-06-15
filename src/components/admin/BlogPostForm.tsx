
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
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Preview Mode</h1>
          <Button onClick={() => setIsPreview(false)} variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Exit Preview
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-8">
            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt={formData.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl font-bold mb-4">{formData.title || 'Untitled Post'}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <span>By {formData.author}</span>
              <span>•</span>
              <span>{formData.publishDate}</span>
              {formData.tags.length > 0 && (
                <>
                  <span>•</span>
                  <span>{formData.tags.join(', ')}</span>
                </>
              )}
            </div>
            <p className="text-lg text-gray-600 mb-6 italic">{formData.excerpt}</p>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Create New Blog Post</h1>
        <div className="flex space-x-2">
          <Button
            onClick={() => setIsPreview(true)}
            variant="outline"
            disabled={!formData.title}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            onClick={() => handleSubmit(true)}
            variant="outline"
            disabled={isSubmitting}
          >
            <Save className="w-4 h-4 mr-2" />
            {isDraft ? 'Saving...' : 'Save Draft'}
          </Button>
          <Button
            onClick={() => handleSubmit(false)}
            disabled={isSubmitting || !formData.title || !formData.content}
            className="bg-gradient-to-r from-pink-500 to-purple-600"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Publishing...' : 'Publish'}
          </Button>
        </div>
      </div>

      {/* Main Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Title *
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter your blog post title..."
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL Slug
                </label>
                <Input
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  placeholder="auto-generated-from-title"
                  className="font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This will be the URL: /blog/{formData.slug}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excerpt / Summary * (Max 200 chars)
                </label>
                <Textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  placeholder="Write a compelling summary of your blog post..."
                  maxLength={200}
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.excerpt.length}/200 characters
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <RichTextEditor
                value={formData.content}
                onChange={(content) => handleInputChange('content', content)}
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author Name *
                </label>
                <Input
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="Author name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Publish Date
                </label>
                <Input
                  type="date"
                  value={formData.publishDate}
                  onChange={(e) => handleInputChange('publishDate', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <Input
                  value={tagInput}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  placeholder="AI, Memory, Photography (comma-separated)"
                />
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <ImageUpload
            value={formData.coverImage}
            onChange={(url) => handleInputChange('coverImage', url)}
            onRemove={() => handleInputChange('coverImage', '')}
            label="Cover Image *"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
