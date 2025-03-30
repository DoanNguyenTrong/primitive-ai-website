
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-bold">Primitive AI</h3>
            <p className="text-gray-300">
              Transforming industries with advanced AI solutions for workplace safety, 
              customer service, legal operations, and document processing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:info@primitiveai.com" className="text-gray-300 hover:text-white transition-colors">
                  info@primitiveai.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/camera-ai" className="text-gray-300 hover:text-white transition-colors">
                  Camera AI Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/chatbot" className="text-gray-300 hover:text-white transition-colors">
                  AI Chatbot & Voice Bot
                </Link>
              </li>
              <li>
                <Link to="/solutions/legalhub" className="text-gray-300 hover:text-white transition-colors">
                  LegalHub Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/document-processing" className="text-gray-300 hover:text-white transition-colors">
                  Intelligent Document Processing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold pt-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Primitive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
