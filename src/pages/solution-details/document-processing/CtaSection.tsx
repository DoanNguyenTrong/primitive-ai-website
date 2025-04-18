
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="hook-section">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-6">Ready to Transform Document Processing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to schedule a demo and learn how our Intelligent Document Processing solution can streamline your workflows.
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
  );
};

export default CtaSection;
