
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, MessageCircle, FileText, Brain } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 'camera-ai',
      title: 'Camera AI Platform',
      subtitle: 'Enhance workplace safety with intelligent visual monitoring',
      description: 'Our Camera AI Platform uses computer vision and deep learning to ensure workplace safety by monitoring human-robot interactions, PPE compliance, facial recognition for secure access, and detecting abnormal behaviors in real-time.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
      features: [
        'Robot-human coworking safety monitoring',
        'PPE (Personal Protective Equipment) compliance detection',
        'Facial recognition for secure access control',
        'Abnormal behavior detection and alerts',
        'Real-time monitoring and incident prevention',
        'Customizable safety protocols and alerts'
      ]
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot & Voice Bot',
      subtitle: 'Deliver exceptional customer support and sales assistance',
      description: 'Powered by advanced LLMs, our conversational AI solutions provide natural, helpful interactions across text and voice channels to enhance customer support, drive sales, and improve user experience.',
      icon: MessageCircle,
      image: 'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2534&auto=format&fit=crop',
      features: [
        'Omnichannel support across web, mobile, and voice',
        'Natural language understanding and generation',
        'Seamless handoff to human agents when needed',
        'Integration with existing CRM and support systems',
        'Multi-language support for global businesses',
        'Analytics and insights on customer interactions'
      ]
    },
    {
      id: 'legalhub',
      title: 'LegalHub Platform',
      subtitle: 'Streamline legal document creation, management, and e-signing',
      description: 'LegalHub leverages AI to automate the creation, review, and management of legal documents with built-in e-signing capabilities, reducing time and costs associated with legal operations.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop',
      features: [
        'AI-powered document creation and templates',
        'Automated legal review and risk assessment',
        'Secure document management and version control',
        'Integrated e-signature platform',
        'Compliance monitoring and alerts',
        'Audit trails and reporting'
      ]
    },
    {
      id: 'document-processing',
      title: 'Intelligent Document Processing',
      subtitle: 'Extract, analyze, and process information with high accuracy',
      description: 'Our Intelligent Document Processing solution uses AI to automatically extract, classify, and validate information from various document types, streamlining workflows and reducing manual data entry.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2671&auto=format&fit=crop',
      features: [
        'Automated data extraction from structured and unstructured documents',
        'Document classification and routing',
        'Data validation and error detection',
        'Integration with existing business systems',
        'Support for multiple document formats and languages',
        'Continuous learning and improvement'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">AI Solutions for Modern Businesses</h1>
            <p className="text-xl text-gray-300 mb-8">
              Our comprehensive suite of AI-powered solutions helps businesses improve safety, enhance customer experiences, streamline legal operations, and optimize document processing.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Our AI Solutions"
            subtitle="Explore our range of innovative AI solutions designed to address specific business challenges"
            centered={true}
          />
          
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={solution.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
                      <div className="relative">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="rounded-lg shadow-xl w-full h-auto transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">{solution.title}</h2>
                    <p className="text-xl text-gray-600 mb-6">{solution.subtitle}</p>
                    <p className="mb-6 text-gray-700">{solution.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Key Features:</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="purple" className="shadow-md">
                      <Link to={`/solutions/${solution.id}`} className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Not Sure Which Solution is Right for You?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team of experts can help you identify the best solutions for your specific business needs. Contact us for a personalized consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="purple" className="shadow-md hover:shadow-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Link to="/why-choose-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
