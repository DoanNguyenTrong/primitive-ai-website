
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import { Link } from 'react-router-dom';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2676&auto=format&fit=crop',
      bio: 'Former AI Research Lead at Tech Giant with 15+ years of experience in AI and machine learning. PhD in Computer Science from MIT.'
    },
    {
      name: 'David Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=2574&auto=format&fit=crop',
      bio: 'Computer vision expert and former lead engineer at Computer Vision Corp. Masters in AI from Stanford University.'
    },
    {
      name: 'Michael Johnson',
      role: 'Chief AI Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop',
      bio: 'Specializes in natural language processing and LLM applications. Previously led NLP research at AI Research Institute.'
    },
    {
      name: 'Jennifer Williams',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop',
      bio: 'Product management expert with experience scaling AI products from concept to market leaders. MBA from Harvard Business School.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Primitive AI was established with a mission to make advanced AI accessible to businesses of all sizes.'
    },
    {
      year: '2019',
      title: 'First Product Launch',
      description: 'Released our first AI-powered document processing solution, gaining our initial enterprise customers.'
    },
    {
      year: '2020',
      title: 'Series A Funding',
      description: 'Secured $10M in Series A funding to expand our product offerings and team.'
    },
    {
      year: '2021',
      title: 'Camera AI Platform',
      description: 'Launched our Camera AI Platform for workplace safety, expanding into the manufacturing and construction sectors.'
    },
    {
      year: '2022',
      title: 'LegalHub Launch',
      description: 'Released our LegalHub Platform, bringing AI-powered document creation and management to legal teams.'
    },
    {
      year: '2023',
      title: 'Series B Funding',
      description: 'Secured $30M in Series B funding to accelerate growth and international expansion.'
    },
    {
      year: '2024',
      title: 'AI Chatbot Platform',
      description: 'Launched our advanced LLM-powered chatbot and voice bot solution for customer support and sales.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primitive-900 via-primitive-800 to-primitive-950 text-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="hero-heading mb-6">About Primitive AI</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to transform businesses through innovative AI solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-primitive-800 hover:bg-gray-100">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/why-choose-us">Why Choose Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primitive-400 to-primitive-600 rounded-lg blur opacity-75"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" 
                  alt="Primitive AI Team" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Our Story"
            subtitle="From a small startup to a leading AI solutions provider"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Primitive AI was founded in 2018 by Sarah Chen and David Rodriguez, two AI researchers who saw the potential for artificial intelligence to transform businesses across industries. What began as a small startup focused on intelligent document processing has grown into a comprehensive AI solutions provider serving clients worldwide.
              </p>
              <p className="text-lg mb-6">
                Our journey began with a simple belief: that advanced AI technology should be accessible to businesses of all sizes. We've since expanded our offerings to include solutions for workplace safety, customer support, legal operations, and document processing—all powered by cutting-edge large language models.
              </p>
              <p className="text-lg">
                Today, Primitive AI employs over 150 AI specialists, engineers, and industry experts dedicated to developing innovative solutions that drive real business value. Our commitment to excellence, continuous innovation, and customer success remains at the core of everything we do.
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
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-muted-foreground">
                We prioritize customer success and build solutions that address real business challenges with measurable results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from cutting-edge AI research to customer support and implementation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate and push the boundaries of what's possible with AI to deliver transformative solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsibility</h3>
              <p className="text-muted-foreground">
                We develop and deploy AI responsibly, with a focus on ethics, security, and positive societal impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the experts driving our mission forward"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primitive-600 font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our company's growth"
            centered={true}
          />
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primitive-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-primitive-600 text-white text-center py-2 px-6 rounded-full font-bold z-10">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
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
      <section className="py-20 bg-primitive-900 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Join Us on Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for AI and our commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primitive-800 hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/careers">View Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
