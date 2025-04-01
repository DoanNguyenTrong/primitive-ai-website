
import React from 'react';
import HeroSection from './document-processing/HeroSection';
import KeyFeatures from './document-processing/KeyFeatures';
import HowItWorks from './document-processing/HowItWorks';
import UseCases from './document-processing/UseCases';
import Testimonials from './document-processing/Testimonials';
import PricingSection from './document-processing/PricingSection';
import CtaSection from './document-processing/CtaSection';

const DocumentProcessing = () => {
  return (
    <div>
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <PricingSection />
      <CtaSection />
    </div>
  );
};

export default DocumentProcessing;
