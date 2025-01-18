import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Bookmark, Heart, Share2, Clock } from 'lucide-react';

const SpiritualBlog = () => {
  const [activeTab, setActiveTab] = useState('featured');

  // Sample blog data - in a real app, this would come from an API or database
  const blogPosts = [
    {
      id: 1,
      title: "Finding Inner Peace Through Meditation",
      excerpt: "Discover the ancient practices that can help you achieve mental clarity and spiritual balance.",
      author: "Sarah Williams",
      date: "2025-01-15",
      category: "Meditation",
      readTime: "5 min",
      likes: 245,
      featured: true
    },
    {
      id: 2,
      title: "The Power of Gratitude Practice",
      excerpt: "Learn how daily gratitude can transform your spiritual journey and enhance your connection with the divine.",
      author: "Michael Chen",
      date: "2025-01-14",
      category: "Mindfulness",
      readTime: "4 min",
      likes: 189,
      featured: true
    },
    {
      id: 3,
      title: "Understanding Sacred Texts",
      excerpt: "A deep dive into various spiritual texts and their contemporary relevance.",
      author: "David Kumar",
      date: "2025-01-13",
      category: "Scripture",
      readTime: "7 min",
      likes: 156,
      featured: false
    }
  ];

  const BlogPost = ({ post }) => (
    <Card className="mb-6 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600">{post.category}</span>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="text-xl font-serif hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            By {post.author} • {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-serif text-center mb-8">Spiritual Insights</h1>
      
      <Tabs defaultValue="featured" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="recent">Recent Posts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="featured">
          <div className="space-y-6">
            {blogPosts.filter(post => post.featured).map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent">
          <div className="space-y-6">
            {blogPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpiritualBlog;