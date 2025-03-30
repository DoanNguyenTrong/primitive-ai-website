
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-950 to-purple-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-bold text-white">Primitive AI</h3>
            <p className="text-purple-100">
              Transforming industries with advanced AI solutions for workplace safety, 
              customer service, legal operations, and document processing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={22} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-purple-300 mt-0.5" />
                <span className="text-purple-100">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-300" />
                <span className="text-purple-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-300" />
                <a href="mailto:info@primitiveai.com" className="text-purple-100 hover:text-white transition-colors">
                  info@primitiveai.com
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-5 w-5 mr-2 text-purple-300" />
                <a href="https://primitiveai.com" className="text-purple-100 hover:text-white transition-colors">
                  www.primitiveai.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/camera-ai" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Camera AI Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/chatbot" className="text-purple-100 hover:text-white transition-colors block py-1">
                  AI Chatbot & Voice Bot
                </Link>
              </li>
              <li>
                <Link to="/solutions/legalhub" className="text-purple-100 hover:text-white transition-colors block py-1">
                  LegalHub Platform
                </Link>
              </li>
              <li>
                <Link to="/solutions/document-processing" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Intelligent Document Processing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-purple-100 hover:text-white transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Contact
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold pt-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-purple-100 hover:text-white transition-colors block py-1">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-800 mt-12 pt-8">
          <p className="text-purple-200 text-center">
            &copy; {new Date().getFullYear()} Primitive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
