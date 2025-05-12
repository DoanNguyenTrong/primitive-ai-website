
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  animationDelay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className,
  animationDelay = 0
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col justify-between p-6 rounded-xl border bg-card shadow-sm h-full", 
        "card-hover animate-fade-in",
        className
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="h-12 w-12 mx-auto rounded-xl bg-primitive-100 text-primitive-600 flex items-center justify-center mb-6">
        <Icon className="h-10 w-10 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
