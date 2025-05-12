
import React from 'react';
import HeroSection from './document-processing/HeroSection';
import KeyFeatures from './document-processing/KeyFeatures';
import HowItWorks from './document-processing/HowItWorks';
import UseCases from './document-processing/UseCases';
import Testimonials from './document-processing/Testimonials';
import PricingSection from './document-processing/PricingSection';
import CTASection from '@/components/CTA';

const DocumentProcessing = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <CTASection 
        title="Ready to Transform Document Processing?"
        description="Contact us today to schedule a demo and learn how our Intelligent Document Processing solution can streamline your workflows."
        primaryButtonText="Request Demo"
        secondaryButtonText="Explore Other Solutions"
        primaryButtonLink="/contact"
        secondaryButtonLink="/solutions"
      />
    </div>
  );
};

export default DocumentProcessing;
