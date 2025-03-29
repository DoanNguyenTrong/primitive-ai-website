
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatarUrl,
  className,
}) => {
  return (
    <div className={cn(
      "flex flex-col p-6 rounded-xl border bg-card shadow-sm",
      "card-hover",
      className
    )}>
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-5 h-5",
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
      )}
      
      {/* Quote */}
      <blockquote className="text-lg mb-6">
        "{quote}"
      </blockquote>
      
      {/* Author Info */}
      <div className="flex items-center mt-auto">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={author}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
