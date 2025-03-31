
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Award, Check, Clock, Users } from 'lucide-react';

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
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Reasons to Choose Us"
            subtitle="We provide cutting-edge AI solutions tailored to your business needs"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                We leverage the latest advancements in AI to develop innovative solutions that address your unique challenges.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                Our solutions have a proven track record of delivering measurable results, including increased efficiency, reduced costs, and improved customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-muted-foreground">
                We are committed to delivering projects on time and within budget, without compromising on quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of AI experts has extensive experience in developing and deploying AI solutions across various industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-muted-foreground">
                We understand that every business is unique. That's why we offer custom AI solutions tailored to your specific needs and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing support and maintenance to ensure your AI solutions continue to deliver value over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to learn how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primitive-600 hover:bg-primitive-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-primitive-600 text-primitive-600 hover:bg-primitive-50">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
