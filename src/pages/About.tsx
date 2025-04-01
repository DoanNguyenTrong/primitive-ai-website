import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Lightbulb, Users, Code, MessageSquare, CheckCircle } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = React.useState('our-story');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const timelineEvents = [
    {
      year: "2020",
      title: "Founding of Primitive AI",
      description: "Primitive AI was founded by Doan Nguyen with a vision to make AI accessible and practical for businesses of all sizes."
    },
    {
      year: "2021",
      title: "Product Development",
      description: "Developed our core AI infrastructure and launched beta versions of our first solutions."
    },
    {
      year: "2022",
      title: "Market Validation",
      description: "Successfully deployed our solutions with early adopters, gathered feedback, and refined our offerings."
    },
    {
      year: "2023",
      title: "Product Expansion",
      description: "Expanded our product portfolio with the launch of SupportHub, LegalHub, and Document Processing solutions."
    },
    {
      year: "2024",
      title: "Growth and Innovation",
      description: "Continued to innovate and expand our customer base, with a focus on enhancing our AI capabilities."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-heading mb-6">About Primitive AI</h1>
            <p className="text-xl text-gray-300 mb-8">
              We are a team of passionate AI experts dedicated to providing innovative solutions that drive business growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="purple" className="shadow-md hover:shadow-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-50">
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'our-story'
                  ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
              onClick={() => handleTabClick('our-story')}
            >
              Our Story
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'mission-vision'
                  ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
              onClick={() => handleTabClick('mission-vision')}
            >
              Mission & Vision
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'our-team'
                  ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
              onClick={() => handleTabClick('our-team')}
            >
              Our Team
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'our-story' && (
            <div>
              <SectionHeader
                title="Our Story"
                subtitle="From a vision to reality, discover our journey in making AI accessible for all businesses"
                centered={true}
              />
              <div className="mt-12">
                <ul className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <li key={index} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{event.year}: {event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      {index < timelineEvents.length - 1 && (
                        <div className="absolute top-5 left-1.5 h-full border-l border-purple-300"></div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'mission-vision' && (
            <div>
              <SectionHeader
                title="Our Mission & Vision"
                subtitle="Empowering businesses with AI solutions that drive growth, efficiency, and innovation"
                centered={true}
              />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize AI by providing accessible, practical, and impactful solutions that enable businesses of all sizes to thrive in the AI-driven era.
                  </p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg shadow-sm">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading AI solutions provider, recognized for our innovation, customer success, and commitment to ethical AI practices.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'our-team' && (
            <div>
              <SectionHeader
                title="Our Team"
                subtitle="Meet the passionate experts behind Primitive AI"
                centered={true}
              />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop"
                    alt="Team Member 1"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Doan Nguyen</h3>
                  <p className="text-gray-600 mb-2">Founder & CEO</p>
                  <p className="text-gray-500">
                    Passionate about making AI accessible and impactful for businesses.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d674308?q=80&w=2561&auto=format&fit=crop"
                    alt="Team Member 2"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Alice Johnson</h3>
                  <p className="text-gray-600 mb-2">Lead AI Scientist</p>
                  <p className="text-gray-500">
                    Expert in machine learning and natural language processing.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-78329e14c224?q=80&w=2670&auto=format&fit=crop"
                    alt="Team Member 3"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Bob Williams</h3>
                  <p className="text-gray-600 mb-2">Chief Technology Officer</p>
                  <p className="text-gray-500">
                    Experienced in building scalable and reliable AI solutions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-purple-50">
        <div className="section-container">
          <SectionHeader
            title="Our Core Values"
            subtitle="Guiding principles that define our culture and drive our success"
            centered={true}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We are committed to pushing the boundaries of AI technology and creating innovative solutions that solve real-world problems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Success</h3>
              <p className="text-gray-600">
                We prioritize our customers' success and work closely with them to ensure they achieve their business goals with our AI solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of ethics and integrity in all our interactions, ensuring transparency, honesty, and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hook-section">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI solutions can drive growth, efficiency, and innovation for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-purple-800 hover:bg-gray-100">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-white text-purple-300 hover:bg-white/10">
                <Link to="/why-choose-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
