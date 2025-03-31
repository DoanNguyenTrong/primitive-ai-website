
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hook-section">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="hero-heading mb-6">Intelligent Document Processing</h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform unstructured documents into structured data with our AI-powered document processing solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-800 hover:bg-gray-100">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button variant="outline" className="text-purple-300 border-white hover:bg-white/10">
                <Link to="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur opacity-75"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop" 
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
