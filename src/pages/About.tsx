
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTA';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Doan Nguyen',
      role: 'Founder & CEO',
      image: '/founders/doannt.jpg',
      bio: 'Serial Entrepreneur. AI expert with 10+ years of experience. Holds two Master degrees in AI and Robotics from Northern Arizona University and National Chiao Tung University.'
    },
    {
      name: 'Tung Ngo',
      role: 'COO',
      image: '/founders/tungnt.png',
      bio: 'Over 10 years of experience in Finance and Banking with strong expertise in operational management, process optimization, and cross-functional team leadership.'
    },
    {
      name: 'An Nguyen',
      role: 'CTO',
      image: '/founders/ann.png',
      bio: 'Experienced technology leader with 20+ years in software development and multiple CTO roles. Brings deep expertise across Insurance, Finance, Retail, Logistics, and e-Commerce, with a strong track record of driving innovation and building scalable solutions.'
    }
  ];

  const milestones = [
    {
      year: 'Jan - 2020',
      title: 'Company Founded',
      description: 'Primitive AI was established with a mission to make advanced AI accessible to businesses of all sizes.'
    },
    {
      year: 'Aug - 2020',
      title: 'First Product Launch - VisionHub',
      description: 'Launched our Camera AI Platform for workplace safety, expanding into the manufacturing and construction sectors.'
    },
    {
      year: 'Jun - 2023',
      title: 'SupportHub Launch',
      description: 'Launched our advanced LLM-powered chatbot and voice bot solution for customer support and sales.'
    },
    {
      year: 'Feb - 2024',
      title: 'Intelligent Document Processing',
      description: 'Released our first AI-powered document processing solution, gaining our initial enterprise customers.'
      
    },
    {
      year: 'Feb - 2025',
      title: 'LegalHub Launch',
      description: 'Released our LegalHub Platform, bringing AI-powered document creation and management to companies.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">About Primitive AI</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to transform businesses through innovative AI solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-white text-purple-800 border-transparent hover:bg-white/10 hover:text-white animate-bounce-subtle">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-transparent hover:bg-white hover:text-purple-800 animate-bounce-subtle">
                  <Link to="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="/founders/doannt-body.png" 
                  alt="Primitive AI Team" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Our Story"
            subtitle="From an idea to a leading AI solutions provider"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700">
                Primitive AI was founded in 2020 by Doan Nguyen, an AI expert with extensive experience in artificial intelligence and robotics. What began as a vision has quickly grown into a comprehensive AI solutions provider serving clients worldwide.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Our journey began with a simple belief: that advanced AI technology should be accessible to businesses of all sizes. We've expanded our offerings to include solutions for workplace safety, customer support, legal operations, and document processing—all powered by cutting-edge large language models.
              </p>
              <p className="text-lg text-gray-700">
                Today, Primitive AI employs AI specialists, engineers, and industry experts dedicated to developing innovative solutions that drive real business value. Our company is self-funded, allowing us to maintain our vision and focus on customer success without external pressures.
              </p>
            </div>
            <div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" 
                  alt="Primitive AI Office" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-600">
                We prioritize customer success and build solutions that address real business challenges with measurable results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from cutting-edge AI research to customer support and implementation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and push the boundaries of what's possible with AI to deliver transformative solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsibility</h3>
              <p className="text-gray-600">
                We develop and deploy AI responsibly, with a focus on ethics, security, and positive societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experts driving our mission forward"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-white">
        <div className="section-container">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our company's growth"
            centered={true}
          />
          
          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-center py-3 px-8 rounded-full font-bold z-10 shadow-md hover:shadow-lg transition-shadow duration-300">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className={`mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Join Us on Our Mission"
        description="We're always looking for talented individuals who share our passion for AI and our commitment to excellence."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Careers"
        primaryButtonLink="/contact"
        secondaryButtonLink="/"
      />
    </div>
  );
};

export default About;
