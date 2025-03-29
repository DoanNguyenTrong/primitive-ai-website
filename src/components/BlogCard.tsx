
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { formatDistance } from 'date-fns';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishDate: Date;
  category: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  publishDate,
  category,
  className,
}) => {
  return (
    <Link 
      to={`/blog/${id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm",
        "card-hover",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primitive-600 text-white text-xs font-medium px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          <time dateTime={publishDate.toISOString()}>
            {formatDistance(publishDate, new Date(), { addSuffix: true })}
          </time>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primitive-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto">
          <span className="text-primitive-600 font-medium inline-flex items-center">
            Read more
            <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
