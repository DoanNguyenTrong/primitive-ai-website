
import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our accounts payable process is now 75% faster with Primitive AI's Intelligent Document Processing. What used to take days now takes hours.",
      author: "James Wilson",
      role: "Finance Director",
      company: "Global Logistics Inc.",
      rating: 5
    },
    {
      quote: "We've reduced data entry errors by 90% and cut processing costs significantly. The ROI on this solution was evident within the first quarter.",
      author: "Maria Rodriguez",
      role: "Operations Manager",
      company: "Healthcare Systems",
      rating: 5
    },
    {
      quote: "Customer onboarding that used to take days now happens in minutes. The accuracy of data extraction has completely transformed our customer experience.",
      author: "Thomas Lee",
      role: "Digital Transformation Lead",
      company: "Financial Services Group",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from businesses that have transformed their document processing with our solution"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
