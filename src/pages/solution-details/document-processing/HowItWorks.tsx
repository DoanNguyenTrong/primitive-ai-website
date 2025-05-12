
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Document Ingestion",
      description: "Capture documents from multiple sources and formats, including scanned papers, emails, and digital files."
    },
    {
      number: 2,
      title: "AI Processing",
      description: "Process documents using OCR, NLP, and machine learning to extract and classify information with high accuracy."
    },
    {
      number: 3,
      title: "Validation & Enrichment",
      description: "Validate extracted data against business rules and enrich it with additional context and metadata."
    },
    {
      number: 4,
      title: "Integration & Action",
      description: "Route processed data to relevant systems and trigger appropriate actions based on content and business rules."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="section-container">
        <SectionHeader
          title="How It Works"
          subtitle="Our Intelligent Document Processing solution transforms complex document workflows into streamlined processes"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
