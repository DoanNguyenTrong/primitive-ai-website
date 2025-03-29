
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-primitive-900 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading mb-6">Ready to Transform Document Processing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to schedule a demo and learn how our Intelligent Document Processing solution can streamline your workflows.
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
  );
};

export default CtaSection;
