import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Gavel, FileText, ShieldCheck, History, Zap, Lock, Scale, Search } from 'lucide-react';

const LegalHub = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">LegalHub Platform</h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline legal document creation, management, and e-signing with our AI-powered platform that automates routine tasks and ensures compliance.
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop" 
                  alt="LegalHub Platform" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Image Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">LegalHub in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our platform transforms legal document creation and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for future images */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Document Generation Interface</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-dashed border-gray-300 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">E-Signature Process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Key Features"
            subtitle="Our AI-powered LegalHub platform streamlines legal document workflows and ensures compliance"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Document Generation"
              description="Create legal documents in minutes using our AI-powered templates and customization options."
              icon={FileText}
            />
            <FeatureCard
              title="Automated Legal Review"
              description="Our AI scans documents for potential legal issues and suggests improvements based on best practices."
              icon={Search}
            />
            <FeatureCard
              title="Risk Assessment"
              description="Identify and mitigate legal risks with our built-in analysis and recommendation system."
              icon={Scale}
            />
            <FeatureCard
              title="Secure Document Management"
              description="Store, organize, and control access to all your legal documents in one secure location."
              icon={Lock}
            />
            <FeatureCard
              title="E-Signature Integration"
              description="Streamline document signing with legally binding electronic signatures that meet regulatory requirements."
              icon={Gavel}
            />
            <FeatureCard
              title="Compliance Monitoring"
              description="Stay compliant with changing regulations through automatic updates and alerts."
              icon={ShieldCheck}
            />
            <FeatureCard
              title="Audit Trails"
              description="Maintain comprehensive records of all document activities for transparency and accountability."
              icon={History}
            />
            <FeatureCard
              title="Workflow Automation"
              description="Streamline approval processes and document workflows with customizable automation rules."
              icon={Zap}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="How It Works"
            subtitle="Our LegalHub Platform seamlessly integrates into your legal workflow"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Document Creation</h3>
              <p className="text-muted-foreground">
                Create new documents from scratch or use AI-powered templates tailored to your specific needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Review & Collaboration</h3>
              <p className="text-muted-foreground">
                Collaborate with team members and stakeholders to review and refine documents in real-time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">E-Signatures</h3>
              <p className="text-muted-foreground">
                Securely collect legally binding electronic signatures from all required parties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Storage & Management</h3>
              <p className="text-muted-foreground">
                Securely store, organize, and manage all documents with powerful search and analytics capabilities.
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
            subtitle="Our LegalHub Platform is versatile and applicable across various legal operations"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop" 
                alt="Contract Management" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Contract Management</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline the entire contract lifecycle from creation to renewal, with automated workflows, version control, and approval tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated contract generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Electronic signature collection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Renewal and expiration tracking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop" 
                alt="Corporate Governance" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Governance</h3>
                <p className="text-muted-foreground mb-4">
                  Manage board documents, resolutions, and corporate records with secure access control, audit trails, and compliance monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Board meeting management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Resolution tracking and approvals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primitive-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regulatory compliance documentation</span>
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
            subtitle="Hear from legal professionals who have transformed their operations with our LegalHub Platform"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The LegalHub Platform has reduced our contract processing time by 65%. The AI document generation and e-signature features have been transformative for our legal department."
              author="Daniel Martinez"
              role="General Counsel"
              company="Global Enterprises"
              rating={5}
            />
            <TestimonialCard
              quote="The platform's compliance monitoring features ensure we stay on top of regulatory requirements. It's like having an extra compliance officer on the team."
              author="Emily Johnson"
              role="Compliance Director"
              company="Financial Services Inc."
              rating={5}
            />
            <TestimonialCard
              quote="We've seen a significant ROI since implementing LegalHub. Document retrieval time has decreased by 80%, and our team can focus on high-value legal work instead of administrative tasks."
              author="Robert Chang"
              role="Legal Operations Manager"
              company="Tech Innovations Corp"
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
            subtitle="Choose the plan that works best for your legal operations"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Essential"
              price="$1,299"
              description="Ideal for small legal teams and solo practitioners"
              features={[
                "Up to 5 users",
                "Basic document templates",
                "E-signature capabilities",
                "Secure document storage",
                "Basic search functionality",
                "Email and chat support"
              ]}
            />
            <PricingCard
              title="Professional"
              price="$2,799"
              description="Perfect for mid-sized legal departments with advanced needs"
              features={[
                "Up to 20 users",
                "All Essential features",
                "Advanced AI document generation",
                "Custom template creation",
                "Advanced search and analytics",
                "Compliance monitoring",
                "Priority support"
              ]}
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solution for large legal teams with complex requirements"
              features={[
                "Unlimited users",
                "All Professional features",
                "Custom integrations with existing systems",
                "Advanced security and compliance features",
                "Custom workflows and automation",
                "Dedicated account manager",
                "24/7 premium support"
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
      <section className="py-20 hook-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Transform Your Legal Operations?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to schedule a demo and learn how our LegalHub Platform can streamline your legal document processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-purple-800 hover:bg-gray-100">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button variant="outline" className="border-white text-purple-300 hover:bg-white/10 hover:text-white">
                <Link to="/solutions">Explore Other Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalHub;
