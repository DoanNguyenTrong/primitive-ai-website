
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
