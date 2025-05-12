
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12">
      <div className="section-container">
        <SectionHeader
          title="Pricing Plans"
          subtitle="Choose the plan that works best for your document processing needs"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Standard"
            price="$1,499"
            description="Ideal for small businesses with basic document processing needs"
            features={[
              "Up to 5,000 pages/month",
              "Standard document types",
              "Basic data extraction",
              "Email support",
              "Standard integrations",
              "Basic analytics"
            ]}
            ctaText="Get Started"
            ctaLink="/contact"
          />
          <PricingCard
            title="Advanced"
            price="$2,999"
            description="Perfect for growing businesses with diverse document workflows"
            features={[
              "Up to 25,000 pages/month",
              "All Standard features",
              "Advanced data extraction",
              "Custom document types",
              "Workflow automation",
              "Priority support",
              "Advanced analytics"
            ]}
            isPopular={true}
            ctaText="Get Started"
            ctaLink="/contact"
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="Tailored solution for organizations with complex document processing requirements"
            features={[
              "Unlimited pages",
              "All Advanced features",
              "Custom integrations",
              "Advanced workflows",
              "Dedicated account manager",
              "SLA guarantees",
              "Custom reporting and analytics"
            ]}
            ctaText="Contact Us"
            ctaLink="/contact"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include setup, training, and regular updates.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link to="/contact">Contact Us for Custom Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
