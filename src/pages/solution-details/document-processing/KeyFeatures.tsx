
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import { Brain, FileText, Zap, Database, BarChart, Search } from 'lucide-react';

const KeyFeatures = () => {
  return (
    <section className="py-12">
      <div className="section-container">
        <SectionHeader
          title="Key Features"
          subtitle="Our Intelligent Document Processing solution leverages advanced AI to streamline document workflows"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Automated Data Extraction"
            description="Extract data from structured and unstructured documents with high accuracy using advanced OCR and NLP."
            icon={Brain}
          />
          <FeatureCard
            title="Document Classification"
            description="Automatically categorize and route documents based on content, type, and purpose."
            icon={FileText}
          />
          <FeatureCard
            title="Intelligent Processing"
            description="Process information based on business rules and workflows with minimal human intervention."
            icon={Zap}
          />
          <FeatureCard
            title="Data Integration"
            description="Seamlessly integrate extracted data with your existing business systems and databases."
            icon={Database}
          />
          <FeatureCard
            title="Advanced Analytics"
            description="Track processing metrics, accuracy rates, and operational efficiency with detailed analytics."
            icon={BarChart}
          />
          <FeatureCard
            title="Semantic Search"
            description="Find specific information across your document repository using natural language queries."
            icon={Search}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
