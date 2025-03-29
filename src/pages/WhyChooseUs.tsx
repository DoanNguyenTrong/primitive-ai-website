
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Brain, Shield, Clock, BarChart, Users, Briefcase, Code, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primitive-900 via-primitive-800 to-primitive-950 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">Why Choose Primitive AI</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover what sets us apart as a leading provider of AI solutions for businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Our Competitive Advantages"
            subtitle="We combine cutting-edge AI technology with deep domain expertise to deliver solutions that drive real business value"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Cutting-Edge LLM Technology"
              description="We leverage the latest large language models and fine-tune them for specific business applications to deliver superior results."
              icon={Brain}
            />
            <FeatureCard
              title="Enterprise-Grade Security"
              description="Our solutions are built with security at the core, ensuring your sensitive data and systems are protected at all times."
              icon={Shield}
            />
            <FeatureCard
              title="Rapid Implementation"
              description="Our streamlined implementation process gets you up and running quickly, with minimal disruption to your operations."
              icon={Clock}
            />
            <FeatureCard
              title="Measurable ROI"
              description="We focus on delivering solutions that provide tangible business results, with clear metrics to track performance and ROI."
              icon={BarChart}
            />
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Industry Expertise"
            subtitle="Our team brings deep domain knowledge across key industries"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <p className="text-muted-foreground mb-6">
                We understand the unique challenges of manufacturing environments, from safety compliance to process optimization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Safety monitoring expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experience with robotics integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Production process optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Legal & Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Our legal experts ensure our solutions meet the complex requirements of legal operations and regulatory compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Legal document automation expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regulatory compliance knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>E-signature best practices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <p className="text-muted-foreground mb-6">
                We build AI solutions that enhance customer experiences while reducing support costs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conversational AI expertise</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CX optimization experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Omnichannel support knowledge</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Our Technology Stack"
            subtitle="We leverage the most advanced AI technologies to build our solutions"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Brain className="h-6 w-6 text-primitive-600 mr-2" />
                    Advanced Large Language Models
                  </h3>
                  <p className="text-muted-foreground">
                    We use state-of-the-art LLMs like GPT-4 and fine-tune them for specific business applications to deliver superior results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Code className="h-6 w-6 text-primitive-600 mr-2" />
                    Custom AI Frameworks
                  </h3>
                  <p className="text-muted-foreground">
                    Our proprietary AI frameworks are optimized for specific use cases, delivering greater accuracy and efficiency than generic solutions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Shield className="h-6 w-6 text-primitive-600 mr-2" />
                    Enterprise Security Architecture
                  </h3>
                  <p className="text-muted-foreground">
                    Our security architecture ensures data protection, privacy compliance, and secure operations at all levels.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Briefcase className="h-6 w-6 text-primitive-600 mr-2" />
                    Enterprise Integration Platform
                  </h3>
                  <p className="text-muted-foreground">
                    Our solutions seamlessly integrate with existing business systems, from ERP and CRM to custom applications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primitive-400 to-primitive-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
                  alt="AI Technology" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Client Success Stories"
            subtitle="Don't just take our word for it. Here's what our clients have to say."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Primitive AI's Camera AI Platform has completely transformed our workplace safety. The implementation was smooth, and the results were immediate and measurable."
              author="James Wilson"
              role="Head of Operations"
              company="Global Manufacturing Inc."
              rating={5}
              avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
            />
            <TestimonialCard
              quote="The LegalHub Platform reduced our document processing time by 70% and improved accuracy. The team's legal expertise was evident throughout the implementation."
              author="Sarah Thompson"
              role="General Counsel"
              company="Financial Services Group"
              rating={5}
              avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
            />
            <TestimonialCard
              quote="We evaluated several AI chatbot vendors, but Primitive AI stood out for their technical expertise and customer-focused approach. The results have exceeded our expectations."
              author="Michael Rodriguez"
              role="CTO"
              company="E-Commerce Solutions"
              rating={5}
              avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Awards & Recognition"
            subtitle="Our commitment to excellence has been recognized by industry leaders"
            centered={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Best AI Solution</h3>
              <p className="text-sm text-muted-foreground">Tech Innovation Awards 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Top AI Startup</h3>
              <p className="text-sm text-muted-foreground">Venture Capital Summit 2022</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">Safety Innovation</h3>
              <p className="text-sm text-muted-foreground">Manufacturing Excellence 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">LegalTech Innovator</h3>
              <p className="text-sm text-muted-foreground">Legal Technology Awards 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primitive-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how Primitive AI's solutions can help your organization harness the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primitive-800 hover:bg-gray-100">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
