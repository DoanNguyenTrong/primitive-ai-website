
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
            <div className="flex space-x-4 items-center justify-center">
              {/* <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Twitter size={22} />
              </a> */}
              <a href="https://www.linkedin.com/company/primitiveai" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={22} />
              </a>
              {/* <a href="#" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={22} />
              </a> */}
              <a href="mailto:doannt@prai.tech" className="text-purple-200 hover:text-white transition-colors hover:scale-110 transform duration-200">
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
                <span className="text-purple-100 text-left">
                  2261 Market Street STE 22919<br />
                  San Francisco, CA 94114<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-300" />
                <span className="text-purple-100">+1 (415) 634-3858</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-300" />
                <a href="mailto:doannt@prai.tech" className="text-purple-100 hover:text-white transition-colors">
                  doannt@prai.tech
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-5 w-5 mr-2 text-purple-300" />
                <a href="https://www.prai.tech" className="text-purple-100 hover:text-white transition-colors">
                  www.prai.tech
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
                  SupportHub
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
          </div>
        </div>
        
        <div className="border-t border-purple-800 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-purple-200 gap-2 sm:gap-4">
            <p className="text-left">
              &copy; {new Date().getFullYear()} Primitive AI. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <Link to="/terms" className="text-purple-100 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-purple-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
