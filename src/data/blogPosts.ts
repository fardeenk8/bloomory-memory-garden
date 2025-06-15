
// Centralized blog post data structure for use throughout the app
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // This is HTML or rich content in string form
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// In-memory blog posts storage (in a real app, this would be in a database)
let blogPosts: BlogPost[] = [
  {
    slug: "future-of-ai-powered-memory-preservation",
    title: "The Future of AI-Powered Memory Preservation: What's Coming in 2025",
    excerpt: "Discover the groundbreaking AI features coming to BloomoryAI that will revolutionize how we capture, organize, and share our most precious memories.",
    content: `
      <h2>Introduction</h2>
      <p>BloomoryAI is set to unveil its most ambitious set of AI-powered features, redefining how memories are preserved for families and professionals alike.</p>
      <img src="/placeholder.svg" alt="AI Future Preview" class="rounded-lg w-full my-6"/>
      <h3>Key Upcoming Features</h3>
      <ul>
        <li><strong>Smart Photo Sorting:</strong> Instantly organizes decades of photos by people, date, place, and event.</li>
        <li><strong>AI-Guided Memory Curation:</strong> Create beautiful stories from scattered moments.</li>
        <li><strong>Voice & Video Narration:</strong> Attach personal voice notes or video to your albums.</li>
      </ul>
      <blockquote>"AI isn't just about automation—it's about making our connections to the past richer and more meaningful."</blockquote>
      <h3>Conclusion</h3>
      <p>With 2025 on the horizon, BloomoryAI's innovations will make reliving and sharing memories easier and more joyful than ever before. Stay tuned for updates!</p>
      <p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="Product Demo" frameborder="0" allowfullscreen class="my-6"></iframe>
      </p>
    `,
    author: {
      name: "Sarah Chen",
    },
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "AI Photography",
    tags: ["AI", "Memory", "Future"],
    seo: {
      title: "The Future of AI-Powered Memory Preservation",
      description: "Explore what's coming to BloomoryAI in 2025: AI-powered photo sorting, memory curation, and more.",
      keywords: ["AI", "Memory", "BloomoryAI", "2025"]
    }
  },
  {
    slug: "creative-ways-to-preserve-holiday-memories",
    title: "10 Creative Ways to Preserve Your Family's Holiday Memories",
    excerpt: "From AI-organized photo albums to custom gift creation, discover innovative methods to make your holiday memories last forever.",
    content: `
      <h2>Make Your Holidays Unforgettable</h2>
      <p>Preserving family moments doesn't have to be boring! Try these creative solutions using the latest technology.</p>
      <ul>
        <li>AI-powered photo books</li>
        <li>Augmented reality memory scavenger hunts</li>
        <li>Personalized voice-over video slideshows</li>
      </ul>
    `,
    author: { name: "Emily Watson" },
    date: "March 12, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg",
    category: "Memory Tips",
    tags: ["Holidays", "Family", "Tips"],
    seo: {
      title: "Creative Ways to Preserve Holiday Memories",
      description: "Holiday memory preservation ideas, from AI photo books to AR scavenger hunts.",
      keywords: ["Holidays", "Memories", "Family", "AI"]
    }
  },
];

// Functions to manage blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const addBlogPost = (newPost: BlogPost): void => {
  blogPosts.unshift(newPost); // Add to beginning for latest first
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllSlugs = (): string[] => {
  return blogPosts.map(post => post.slug);
};

export default blogPosts;
