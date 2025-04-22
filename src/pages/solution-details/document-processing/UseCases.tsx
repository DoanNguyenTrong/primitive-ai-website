
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const UseCases = () => {
  const useCases = [
    {
      id: 'invoice',
      title: 'Invoice Processing',
      description: 'Automate invoice capture, data extraction, validation, and approval workflows to reduce processing time and costs.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2676&auto=format&fit=crop',
      features: [
        'Data extraction from invoices',
        'Automatic validation and matching',
        'ERP integration'
      ]
    },
    {
      id: 'onboarding',
      title: 'Customer Onboarding',
      description: 'Streamline customer onboarding by automatically processing ID documents, forms, and supporting materials.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop',
      features: [
        'ID verification and extraction',
        'Form data capture and validation',
        'CRM integration and workflow automation'
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="section-container">
        <SectionHeader
          title="Use Cases"
          subtitle="Our Intelligent Document Processing solution is applicable across various industries and document types"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
