import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Camera, Shield, AlertTriangle, Clock, Users, Bell, Wrench, RefreshCw } from 'lucide-react';

const CameraAI = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">Camera AI Platform</h1>
              <p className="text-xl text-gray-300 mb-8">
                Enhance workplace safety with our intelligent visual monitoring system that uses computer vision and deep learning to create safer environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-purple-800 hover:bg-gray-100 transition-all duration-300">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button variant="outline" className="border-white text-purple-300 hover:bg-white/10 hover:text-white transition-all duration-300">
                  <Link to="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                  alt="Camera AI Platform" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demonstration Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Camera AI in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our Camera AI Platform enhances workplace safety through intelligent visual monitoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for future images */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">PPE Detection Demo</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Human-Robot Safety Monitoring</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-64 flex items-center justify-center">
              <p className="text-gray-500 text-center">Abnormal Behavior Detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Key Features"
            subtitle="Our AI-powered Camera Platform enhances workplace safety with advanced visual monitoring capabilities"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="PPE Compliance Detection"
              description="Automatically detect and enforce proper use of safety equipment including helmets, vests, gloves, and eye protection."
              icon={Shield}
            />
            <FeatureCard
              title="Human-Robot Safety"
              description="Monitor interactions between workers and automated equipment to prevent accidents and ensure safe coworking."
              icon={Users}
            />
            <FeatureCard
              title="Abnormal Behavior Detection"
              description="Identify unusual activities or safety violations that could lead to accidents before they occur."
              icon={AlertTriangle}
            />
            <FeatureCard
              title="Real-time Monitoring"
              description="Continuous surveillance and instant alerts for immediate response to potential safety incidents."
              icon={Clock}
            />
            <FeatureCard
              title="Customizable Alerts"
              description="Configure notification rules based on your specific safety protocols and organizational needs."
              icon={Bell}
            />
            <FeatureCard
              title="Configuration Flexibility"
              description="Easily adapt the system to different environments, equipment types, and safety requirements."
              icon={Wrench}
            />
            <FeatureCard
              title="Continuous Learning"
              description="Our AI improves over time, learning from new data to enhance detection accuracy and reduce false alarms."
              icon={RefreshCw}
            />
            <FeatureCard
              title="Visual Evidence"
              description="Capture and store visual evidence of safety events for training, compliance, and incident review."
              icon={Camera}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="How It Works"
            subtitle="Our Camera AI Platform seamlessly integrates with your existing security infrastructure"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Installation & Setup</h3>
              <p className="text-gray-700">
                Our team integrates AI-powered cameras with your existing security infrastructure or installs new hardware as needed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Configuration</h3>
              <p className="text-gray-700">
                We configure the system to monitor specific safety parameters based on your workplace requirements and industry regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-700">
                The system continuously monitors operations, providing real-time alerts and generating insights to improve workplace safety.
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
            subtitle="Our Camera AI Platform is suitable for a variety of industries and applications"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" 
                alt="Manufacturing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  Ensure worker safety in environments with heavy machinery, robots, and automated systems. Monitor PPE compliance and prevent unauthorized access to restricted areas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Robot-human interaction safety</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>PPE compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Restricted area access control</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2670&auto=format&fit=crop" 
                alt="Construction" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Construction</h3>
                <p className="text-gray-700 mb-4">
                  Monitor construction sites for safety compliance, PPE usage, and unauthorized personnel. Detect potential hazards before they lead to accidents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Safety gear compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hazard zone monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Worker check-in/check-out</span>
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
            subtitle="Hear from businesses that have transformed their workplace safety with our Camera AI Platform"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Since implementing Primitive AI's Camera AI Platform, we've seen a 45% reduction in safety incidents and improved compliance with safety regulations."
              author="Robert Chen"
              role="Safety Manager"
              company="Global Manufacturing Inc."
              rating={5}
            />
            <TestimonialCard
              quote="The real-time alerts have been a game-changer for our construction sites. We can address safety issues immediately before they become serious problems."
              author="Lisa Johnson"
              role="Operations Director"
              company="BuildRight Construction"
              rating={5}
            />
            <TestimonialCard
              quote="The facial recognition feature has streamlined our access control process while improving security. Primitive AI's platform has exceeded our expectations."
              author="David Wilson"
              role="Security Director"
              company="TechManufacturing Co."
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
              title="Starter"
              price="$1,499"
              description="Perfect for small facilities with basic safety monitoring needs"
              features={[
                "Up to 5 camera integrations",
                "PPE compliance detection",
                "Basic facial recognition",
                "Email alerts",
                "8/5 support",
                "Weekly safety reports"
              ]}
            />
            <PricingCard
              title="Professional"
              price="$2,999"
              description="Ideal for medium-sized facilities with advanced safety requirements"
              features={[
                "Up to 15 camera integrations",
                "All Starter features",
                "Robot-human safety monitoring",
                "Abnormal behavior detection",
                "SMS & email alerts",
                "24/7 support",
                "Daily safety reports"
              ]}
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solution for large facilities with complex safety needs"
              features={[
                "Unlimited camera integrations",
                "All Professional features",
                "Custom safety protocols",
                "Advanced analytics dashboard",
                "API integration with existing systems",
                "Dedicated account manager",
                "Custom reporting"
              ]}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              All plans include hardware installation, configuration, and training.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">Contact Us for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Enhance Workplace Safety?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today to schedule a demo and learn how our Camera AI Platform can transform safety at your workplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-purple-800 hover:bg-gray-100">
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

export default CameraAI;
