
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Brain, FileText, Zap, Database, BarChart, Search } from 'lucide-react';

const DocumentProcessing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primitive-900 via-primitive-800 to-primitive-950 text-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">Intelligent Document Processing</h1>
              <p className="text-xl text-gray-300 mb-8">
                Automate document processing workflows with AI that extracts, classifies, and validates information with high accuracy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primitive-800 hover:bg-gray-100">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primitive-400 to-primitive-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop" 
                  alt="Intelligent Document Processing" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="How It Works"
            subtitle="Our Intelligent Document Processing solution transforms complex document workflows into streamlined processes"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Document Ingestion</h3>
              <p className="text-muted-foreground">
                Capture documents from multiple sources and formats, including scanned papers, emails, and digital files.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Processing</h3>
              <p className="text-muted-foreground">
                Process documents using OCR, NLP, and machine learning to extract and classify information with high accuracy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Validation & Enrichment</h3>
              <p className="text-muted-foreground">
                Validate extracted data against business rules and enrich it with additional context and metadata.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integration & Action</h3>
              <p className="text-muted-foreground">
                Route processed data to relevant systems and trigger appropriate actions based on content and business rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Use Cases"
            subtitle="Our Intelligent Document Processing solution is applicable across various industries and document types"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2676&auto=format&fit=crop" 
                alt="Invoice Processing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Invoice Processing</h3>
                <p className="text-muted-foreground mb-4">
                  Automate invoice capture, data extraction, validation, and approval workflows to reduce processing time and costs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Data extraction from invoices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic validation and matching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ERP integration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop" 
                alt="Customer Onboarding" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Customer Onboarding</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline customer onboarding by automatically processing ID documents, forms, and supporting materials.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ID verification and extraction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Form data capture and validation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>CRM integration and workflow automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their document processing with our solution"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our accounts payable process is now 75% faster with Primitive AI's Intelligent Document Processing. What used to take days now takes hours."
              author="James Wilson"
              role="Finance Director"
              company="Global Logistics Inc."
              rating={5}
            />
            <TestimonialCard
              quote="We've reduced data entry errors by 90% and cut processing costs significantly. The ROI on this solution was evident within the first quarter."
              author="Maria Rodriguez"
              role="Operations Manager"
              company="Healthcare Systems"
              rating={5}
            />
            <TestimonialCard
              quote="Customer onboarding that used to take days now happens in minutes. The accuracy of data extraction has completely transformed our customer experience."
              author="Thomas Lee"
              role="Digital Transformation Lead"
              company="Financial Services Group"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
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
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include setup, training, and regular updates.
            </p>
            <Button className="bg-primitive-600 hover:bg-primitive-700">
              <Link to="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primitive-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Transform Document Processing?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demo and learn how our Intelligent Document Processing solution can streamline your workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primitive-800 hover:bg-gray-100">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/solutions">Explore Other Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocumentProcessing;
