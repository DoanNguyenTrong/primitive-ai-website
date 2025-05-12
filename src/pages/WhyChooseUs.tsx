import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import { Link } from 'react-router-dom';
import { Award, Check, Clock, Users, Wrench, LifeBuoy } from 'lucide-react';
import CTASection from '@/components/CTA';

const WhyChooseUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hook-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">Why Choose Primitive AI?</h1>
            <p className="text-xl text-gray-300 mb-8">
              We are committed to delivering innovative AI solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="py-12">
        <div className="section-container">
          <SectionHeader
            title="Reasons to Choose Us"
            subtitle="We provide cutting-edge AI solutions tailored to your business needs"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Innovative Solutions"
              description="We leverage the latest advancements in AI to develop innovative solutions that address your unique challenges."
              icon={Award}
              animationDelay={100}
            />
            
            <FeatureCard
              title="Proven Results"
              description="Our solutions have a proven track record of delivering measurable results, including increased efficiency, reduced costs, and improved customer satisfaction."
              icon={Check}
              animationDelay={200}
            />
            
            <FeatureCard
              title="Timely Delivery"
              description="We are committed to delivering projects on time and within budget, without compromising on quality."
              icon={Clock}
              animationDelay={300}
            />
            
            <FeatureCard
              title="Expert Team"
              description="Our team of AI experts has extensive experience in developing and deploying AI solutions across various industries."
              icon={Users}
              animationDelay={400}
            />

            <FeatureCard
              title="Custom Solutions"
              description="We understand that every business is unique. That's why we offer custom AI solutions tailored to your specific needs and goals."
              icon={Wrench}
              animationDelay={500}
            />

            <FeatureCard
              title="Ongoing Support"
              description="We provide ongoing support and maintenance to ensure your AI solutions continue to deliver value over time."
              icon={LifeBuoy}
              animationDelay={600}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their operations with our AI solutions"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Primitive AI's solutions have helped us automate key processes, reduce costs, and improve customer satisfaction. Their team is highly skilled and responsive."
              author="John Smith"
              role="CEO"
              company="Acme Corp"
              rating={5}
            />
            <TestimonialCard
              quote="We were impressed with Primitive AI's ability to understand our unique business challenges and develop custom AI solutions that delivered real results. Their ongoing support has been invaluable."
              author="Alice Johnson"
              role="CTO"
              company="Beta Inc"
              rating={5}
            />
            <TestimonialCard
              quote="Primitive AI's solutions have transformed our operations, enabling us to make better decisions, improve efficiency, and drive growth. We highly recommend their services."
              author="Bob Williams"
              role="VP of Operations"
              company="Gamma Ltd"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Import and use the shared CTASection component */}
      <CTASection />
    </div>
  );
};

export default WhyChooseUs;
