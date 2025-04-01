
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
      
      {/* Image showcase section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Document Processing in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our Intelligent Document Processing solution transforms unstructured documents into valuable structured data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for future images */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Invoice Processing Visualization</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Form Extraction Demo</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Document Classification Example</p>
            </div>
          </div>
        </div>
      </section>
      
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
