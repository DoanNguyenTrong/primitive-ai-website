
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    toast.success('Your message has been sent! We will get back to you soon.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primitive-900 via-primitive-800 to-primitive-950 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions about our AI solutions? We're here to help you find the right technology for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below, and one of our AI specialists will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="solution" className="block text-sm font-medium mb-2">I'm interested in</label>
                  <select
                    id="solution"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                  >
                    <option value="">Select a solution</option>
                    <option value="camera-ai">Camera AI Platform</option>
                    <option value="chatbot">AI Chatbot & Voice Bot</option>
                    <option value="legalhub">LegalHub Platform</option>
                    <option value="document-processing">Intelligent Document Processing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primitive-500 focus:border-primitive-500 outline-none"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primitive-600 hover:bg-primitive-700 py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@primitive-ai.com</p>
                      <p className="text-muted-foreground">support@primitive-ai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">123 AI Innovation Center</p>
                      <p className="text-muted-foreground">San Francisco, CA 94103</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primitive-100 text-primitive-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM PST</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primitive-600 text-white p-2 rounded-full hover:bg-primitive-700 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-primitive-600 text-white p-2 rounded-full hover:bg-primitive-700 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-primitive-600 text-white p-2 rounded-full hover:bg-primitive-700 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our AI solutions"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">How long does implementation typically take?</h3>
              <p className="text-muted-foreground">
                Implementation timelines vary based on the solution and your specific requirements. Generally, our AI chatbot and document processing solutions can be deployed within 2-4 weeks, while more complex solutions like Camera AI may take 4-8 weeks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you offer customized solutions?</h3>
              <p className="text-muted-foreground">
                Yes, we specialize in tailoring our AI solutions to meet your specific business needs. During the initial consultation, we'll discuss your requirements and develop a customized implementation plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">What kind of support do you provide?</h3>
              <p className="text-muted-foreground">
                We offer comprehensive support, including 24/7 technical assistance, regular maintenance updates, and dedicated account management for enterprise clients. Our support team is always available to address any issues or questions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">How secure are your AI solutions?</h3>
              <p className="text-muted-foreground">
                Security is our top priority. All our solutions employ enterprise-grade security measures, including data encryption, secure authentication, and regular security audits. We also comply with industry-specific regulations like GDPR, HIPAA, and SOC 2.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-4">Don't see your question here?</p>
            <Button className="bg-primitive-600 hover:bg-primitive-700">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
