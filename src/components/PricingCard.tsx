
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  return (
    <div className={cn(
      "relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm",
      "transition-all duration-300 hover:shadow-lg",
      isPopular ? "border-primitive-500 border-purple-600 border-2 shadow-md" : ""
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
        </div>
      </div>
      
      <ul className="mb-6 space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-purple-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          className={cn(
            "w-full", 
            isPopular 
              ? "bg-purple-600 hover:bg-purple-700 text-white" 
              : "bg-purple-100 text-purple-600 hover:bg-purple-200"
          )}
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
