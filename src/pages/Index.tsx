
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { ArrowRight, Camera, MessageCircle, FileText, Brain, Shield, Zap, BarChart, Users } from 'lucide-react';
import CTASection from '@/components/CTA'

const Index = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.current?.observe(el);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section md:py-32 overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="hero-heading animate-fade-in">
                Transform Your Business with <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Advanced AI</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '100ms'}}>
                Primitive AI delivers cutting-edge AI solutions for workplace safety, customer support, legal operations, and document processing.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '200ms'}}>
                <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6 animate-bounce-subtle">
                  <Link to="/solutions">Explore Solutions</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-transparent hover:bg-white hover:text-purple-800 text-lg px-8 py-6 animate-bounce-subtle">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-purple-950 rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2678&auto=format&fit=crop" 
                  alt="AI Technology" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Our AI Solutions"
            subtitle="Discover how our suite of AI-powered solutions can transform your business operations"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll opacity-0">
              <FeatureCard
                title="VisionHub: Camera AI Platform"
                description="Enhance workplace safety with real-time monitoring for human-robot interaction, PPE compliance, and behavior detection."
                icon={Camera}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '100ms'}}>
              <FeatureCard
                title="SupportHub: AI Chatbot & Voice Bot"
                description="Deliver exceptional customer support and sales assistance with natural language understanding and voice interactions."
                icon={MessageCircle}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '200ms'}}>
              <FeatureCard
                title="LegalHub: AI-powered Document Generate and Management"
                description="Streamline legal document creation, management, and e-signing with intelligent automation."
                icon={FileText}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '300ms'}}>
              <FeatureCard
                title="Intelligent Document Processing"
                description="Extract, analyze, and process information from documents with high accuracy and efficiency."
                icon={Brain}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll opacity-0">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium group transition-all duration-300">
              <Link to="/solutions" className="flex items-center">
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Why Choose Primitive AI"
            subtitle="We combine cutting-edge AI technology with domain expertise to deliver solutions that drive real business value"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll opacity-0">
              <FeatureCard
                title="Advanced LLM Technology"
                description="Leverage the latest large language models to power intelligent solutions for your business needs."
                icon={Brain}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '100ms'}}>
              <FeatureCard
                title="Enterprise-Grade Security"
                description="Rest assured with our robust security measures that protect your sensitive data and systems."
                icon={Shield}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '200ms'}}>
              <FeatureCard
                title="Rapid Implementation"
                description="Get up and running quickly with our streamlined implementation process and dedicated support."
                icon={Zap}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '300ms'}}>
              <FeatureCard
                title="Measurable ROI"
                description="Track performance metrics and see tangible business results from our AI solutions."
                icon={BarChart}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center animate-on-scroll opacity-0">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium group transition-all duration-300">
              <Link to="/why-choose-us" className="flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about Primitive AI"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0">
              <TestimonialCard
                quote="The Camera AI Platform has significantly improved our workplace safety. We've seen a 40% reduction in incidents since implementation."
                author="Sarah Johnson"
                role="Safety Director"
                company="Manufacturing Co."
                rating={5}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '150ms'}}>
              <TestimonialCard
                quote="Our customer satisfaction scores increased by 30% after implementing the AI Chatbot. The natural conversations and quick responses have transformed our customer service."
                author="Michael Chen"
                role="CTO"
                company="RetailTech"
                rating={5}
              />
            </div>
            <div className="animate-on-scroll opacity-0" style={{animationDelay: '300ms'}}>
              <TestimonialCard
                quote="The LegalHub platform reduced our document processing time by 60% and improved accuracy. It's been a game-changer for our legal department."
                author="Jennifer Williams"
                role="General Counsel"
                company="Global Services Inc."
                rating={5}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 bg-purple-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="section-heading mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how Primitive AI can help your organization harness the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6 animate-bounce-subtle">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white text-lg px-8 py-6 animate-bounce-subtle">
                <Link to="/solutions">
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Request Demo
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <CTASection/>
    </div>
  );
};

export default Index;
