
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTA';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Globe, Clock, BarChart, Headphones, 
  Speech, Palette, Zap, Code 
} from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const Chatbot = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">SupportHub: AI Chatbot & Voice Bot</h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform customer support and sales with our fully customizable intelligent conversational AI platform that delivers natural, helpful interactions across text and voice channels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white animate-bounce-subtle">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-transparent hover:bg-white hover:text-purple-800 animate-bounce-subtle">
                  <Link to="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop" 
                  alt="SupportHub: AI Chatbot & Voice Bot" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="SupportHub Dashboard"
            subtitle="A powerful, intuitive interface for managing customer communications across all channels"
            centered={true}
          />
          
          <div className="mt-12 space-y-16">
            {/* Dashboard Overview */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Analytics Dashboard</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/46cf1a4f-859d-4c73-9cc8-5fd496e2ae80.png" 
                  alt="SupportHub Analytics Dashboard" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Get a complete overview of your customer support performance with real-time metrics and visualizations
              </p>
            </div>
            
            {/* Ticket Management */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Ticket Management</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/b8b1f634-740d-46da-a6a7-74b7488fd3d4.png" 
                  alt="SupportHub Ticket Management" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Efficiently manage support tickets with status tracking, priority flags, and AI-assisted responses
              </p>
            </div>
            
            {/* Communication Channels */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Multi-Channel Support</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/51cfee29-f2f5-45d1-b1bc-6273fb432132.png" 
                  alt="SupportHub Communication Channels" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Connect with customers across multiple channels - website, email, social media, and more
              </p>
            </div>
            
            {/* Customer Management */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Customer Management</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/33b37c77-db0f-44c7-9281-18a94b010538.png" 
                  alt="SupportHub Customer Management" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Keep track of all customer interactions and history in one unified interface
              </p>
            </div>
            
            {/* AI Scenarios */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">AI Scenarios Management</h3>
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/lovable-uploads/5f9395b2-7d5f-4b1e-8dab-d966c5fd751f.png" 
                  alt="SupportHub AI Scenarios" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Create and manage AI knowledge base scenarios to automate responses to common customer inquiries
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="purple" className="shadow-lg">
              <Link to="/contact">Schedule a Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Key Features"
            subtitle="Our AI-powered SupportHub platform delivers exceptional customer experiences with extensive customization options"
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
            <FeatureCard
              title="Fully Customizable"
              description="Tailor the look and feel of your chatbot to match your brand with custom colors, fonts, and interface elements."
              icon={Palette}
            />
            <FeatureCard
              title="Integration Options"
              description="Connect SupportHub to your existing CRM, help desk, and other business systems with our robust API."
              icon={Code}
            />
            <FeatureCard
              title="No-Code Configuration"
              description="Set up and modify your chatbot flows without technical knowledge using our intuitive drag-and-drop interface."
              icon={Zap}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="How SupportHub Works"
            subtitle="Our AI Chatbot & Voice Bot platform seamlessly integrates with your existing systems"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customization & Setup</h3>
              <p className="text-muted-foreground">
                We customize SupportHub for your specific products, services, policies, and customer interactions to ensure accurate and helpful responses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integration</h3>
              <p className="text-muted-foreground">
                We integrate SupportHub with your existing customer support systems, websites, mobile apps, and phone systems.
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
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Use Cases"
            subtitle="SupportHub is versatile and applicable across various industries"
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
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their customer interactions with SupportHub"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our customer satisfaction scores increased by 35% after implementing SupportHub. The natural conversations, quick responses, and ability to customize it to match our brand have been game-changing."
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
              quote="The integration with our existing systems was seamless, and the continuous improvements have made the bot smarter over time. The customization options let us make it perfectly aligned with our brand voice."
              author="Jennifer Wu"
              role="CTO"
              company="E-Commerce Leaders"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12">
        <div className="section-container">
          <SectionHeader
            title="SupportHub Pricing Plans"
            subtitle="Choose the plan that works best for your business needs"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$999"
              description="Ideal for small businesses with standard customer support needs"
              features={[
                "SupportHub chatbot for website",
                "5,000 conversations/month",
                "Basic customization options",
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
                "SupportHub chatbot & voice bot",
                "25,000 conversations/month",
                "Advanced customization options",
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
              description="Tailored SupportHub solution for large organizations with complex support needs"
              features={[
                "All Business features",
                "Unlimited conversations",
                "Full white-label customization",
                "Multiple language support",
                "Custom integrations",
                "Dedicated account manager",
                "Enterprise-grade security",
                "99.9% uptime SLA"
              ]}
            />
          </div>
          
          {/* <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include setup, training, and regular updates.
            </p>
            <Button className="bg-primitive-600 hover:bg-primitive-700">
              <Link to="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Chatbot;
