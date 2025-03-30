
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

interface BlogPostProps {
  id: string;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
  publishDate: Date;
  author: string;
  category: string;
}

const BlogPost = ({
  id,
  title,
  content,
  imageUrl,
  publishDate,
  author,
  category
}: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Link 
          to="/blog" 
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left gradient-text">{title}</h1>
        
        <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={publishDate.toISOString()}>
              {publishDate.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>
          
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            <Link 
              to={`/blog?category=${category}`} 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="w-full h-96 mb-10 overflow-hidden rounded-xl shadow-lg animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className="prose prose-lg max-w-none text-left space-y-6 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
        {content}
      </div>
      
      <div className="mt-16 border-t border-gray-200 pt-8 animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full text-blue-600 hover:text-white hover:bg-blue-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.6,2.56h4.88L14.4,8h5.92l-4.8,3.52,1.84,5.52L12,13.84l-5.28,3.28,1.76-5.52L3.68,8H9.6Zm2.4-1.44H7.52L7.2,1H2.4L8,5.44,6,12l6-3.84L18,12l-2-6.56L21.68,1h-4.8L16.48,1.12Z"></path>
                </svg>
                <span className="sr-only">Share via Email</span>
              </Button>
            </div>
          </div>
          
          <Button variant="purple" className="shadow-md">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
