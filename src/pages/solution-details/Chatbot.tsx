
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Clock, BarChart, Headphones, Speech } from 'lucide-react';

const Chatbot = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primitive-900 via-primitive-800 to-primitive-950 text-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">AI Chatbot & Voice Bot Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform customer support and sales with intelligent conversational AI that delivers natural, helpful interactions across text and voice channels.
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" 
                  alt="AI Chatbot & Voice Bot" 
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
            subtitle="Our AI-powered conversational solutions deliver exceptional customer experiences"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Omnichannel Support"
              description="Provide consistent support across web, mobile, social media, and voice channels with a unified conversational experience."
              icon={Globe}
            />
            <FeatureCard
              title="Natural Conversations"
              description="Leverage advanced LLMs for human-like conversations that understand context, nuance, and user intent."
              icon={MessageCircle}
            />
            <FeatureCard
              title="Voice Interaction"
              description="Enable natural voice interactions with speech recognition and text-to-speech capabilities for phone support."
              icon={Speech}
            />
            <FeatureCard
              title="Human Handoff"
              description="Seamlessly transfer complex conversations to human agents with complete context and conversation history."
              icon={Headphones}
            />
            <FeatureCard
              title="24/7 Availability"
              description="Provide round-the-clock support to customers regardless of time zone or business hours."
              icon={Clock}
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Track performance metrics, conversation quality, and customer satisfaction to continuously improve."
              icon={BarChart}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="How It Works"
            subtitle="Our AI Chatbot & Voice Bot solutions seamlessly integrate with your existing systems"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Training & Setup</h3>
              <p className="text-muted-foreground">
                We train the AI on your specific products, services, policies, and customer interactions to ensure accurate and helpful responses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integration</h3>
              <p className="text-muted-foreground">
                We integrate the solution with your existing customer support systems, websites, mobile apps, and phone systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                The system learns and improves from each interaction, with regular updates to enhance performance and capabilities.
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
            subtitle="Our AI Chatbot & Voice Bot solutions are versatile and applicable across various industries"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2666&auto=format&fit=crop" 
                alt="Customer Support" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground mb-4">
                  Provide instant, accurate responses to common customer queries, troubleshoot issues, and escalate complex problems to human agents when necessary.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instant response to FAQs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Order status and tracking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2670&auto=format&fit=crop" 
                alt="Sales Assistance" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sales Assistance</h3>
                <p className="text-muted-foreground mb-4">
                  Guide potential customers through the sales process, recommend products, answer questions, and facilitate purchases.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Product recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pricing and feature comparisons</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Guided checkout process</span>
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
            subtitle="Hear from businesses that have transformed their customer interactions with our AI Chatbot & Voice Bot solutions"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our customer satisfaction scores increased by 35% after implementing Primitive AI's chatbot. The natural conversations and quick responses have been game-changing."
              author="Sarah Thompson"
              role="Customer Experience Director"
              company="RetailGiant Inc."
              rating={5}
            />
            <TestimonialCard
              quote="The voice bot has reduced our call wait times by 70% while maintaining high-quality customer interactions. Our team can now focus on complex issues that truly need human attention."
              author="Michael Rodriguez"
              role="Support Operations Manager"
              company="TechSolutions Corp"
              rating={5}
            />
            <TestimonialCard
              quote="The integration with our existing systems was seamless, and the continuous improvements have made the bot smarter over time. It's like having an expert support agent available 24/7."
              author="Jennifer Wu"
              role="CTO"
              company="E-Commerce Leaders"
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
            subtitle="Choose the plan that works best for your business needs"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$999"
              description="Ideal for small businesses with standard customer support needs"
              features={[
                "AI Chatbot for website",
                "5,000 conversations/month",
                "Basic pre-built templates",
                "Email support",
                "Standard analytics",
                "Business hours support"
              ]}
            />
            <PricingCard
              title="Business"
              price="$2,499"
              description="Perfect for growing companies with multi-channel support requirements"
              features={[
                "All Basic features",
                "AI Chatbot & Voice Bot",
                "25,000 conversations/month",
                "Custom training and templates",
                "CRM integration",
                "Advanced analytics",
                "24/7 support"
              ]}
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solution for large organizations with complex support needs"
              features={[
                "All Business features",
                "Unlimited conversations",
                "Multiple language support",
                "Custom integrations",
                "Dedicated account manager",
                "Enterprise-grade security",
                "99.9% uptime SLA"
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
            <h2 className="section-heading mb-6">Ready to Transform Customer Interactions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demo and learn how our AI Chatbot & Voice Bot solutions can enhance your customer support and sales operations.
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

export default Chatbot;
