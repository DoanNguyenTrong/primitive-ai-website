
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Camera, MessageCircle, FileText, Brain } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const solutionsLinks = [
    {
      name: 'Camera AI Platform',
      path: '/solutions/camera-ai',
      description: 'Enhance workplace safety with intelligent visual monitoring',
      icon: Camera,
    },
    {
      name: 'SupportHub: AI Chatbot & Voice Bot',
      path: '/solutions/chatbot',
      description: 'Deliver exceptional customer support with a fully customizable platform',
      icon: MessageCircle,
    },
    {
      name: 'LegalHub Platform',
      path: '/solutions/legalhub',
      description: 'Streamline legal document creation, management, and e-signing',
      icon: FileText,
    },
    {
      name: 'Intelligent Document Processing',
      path: '/solutions/document-processing',
      description: 'Extract, analyze, and process information with high accuracy',
      icon: Brain,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">Primitive AI</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-purple-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home link */}
            <Link
              to="/"
              className={cn(
                "text-base font-medium hover:text-purple-600 transition-colors",
                isActive('/') ? "text-purple-600 font-semibold" : "text-foreground"
              )}
            >
              Home
            </Link>
            
            {/* Solutions dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-base font-medium hover:text-purple-600 transition-colors bg-transparent hover:bg-transparent focus:bg-transparent", 
                      (isActive('/solutions') || location.pathname.startsWith('/solutions/')) 
                        ? "text-purple-600 font-semibold" 
                        : "text-foreground"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <div className="grid gap-3 p-6 md:w-[600px] lg:w-[700px] grid-cols-[200px_1fr]">
                      <div className="flex items-center">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                            to="/solutions"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-purple-600">
                              All Solutions
                            </div>
                            <p className="text-sm leading-tight text-purple-600">
                              View our complete suite of AI-powered solutions designed to transform your business
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <ul className="grid gap-3 p-1 md:w-full grid-rows-4">
                        {solutionsLinks.map((solution) => (
                          <li key={solution.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={solution.path}
                                className={cn(
                                  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                  isActive(solution.path)
                                    ? "bg-purple-100 text-purple-700"
                                    : "hover:bg-purple-50 hover:text-purple-700"
                                )}
                              >
                                <div className="flex items-center gap-2 text-sm font-medium leading-none mb-1">
                                  <solution.icon className="h-4 w-4 text-purple-600" />
                                  <span>{solution.name}</span>
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-purple-600">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Regular nav links except Home and Solutions */}
            {navLinks.filter(link => link.name !== 'Home' && link.name !== 'Solutions').map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium hover:text-purple-600 transition-colors",
                  isActive(link.path) ? "text-purple-600 font-semibold" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive(link.path)
                  ? "bg-purple-50 text-purple-600"
                  : "text-foreground hover:bg-purple-50 hover:text-purple-600"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Sub-items for solutions in mobile */}
          {location.pathname.startsWith('/solutions') && (
            <div className="pl-6 space-y-1 border-l border-purple-100 ml-3">
              {solutionsLinks.map((solution) => (
                <Link
                  key={solution.path}
                  to={solution.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm",
                    isActive(solution.path)
                      ? "bg-purple-50 text-purple-600"
                      : "text-foreground hover:bg-purple-50 hover:text-purple-600"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <solution.icon className="h-4 w-4 mr-2" />
                  {solution.name}
                </Link>
              ))}
            </div>
          )}
          
          <div className="mt-4 px-3">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md">
              <Link to="/contact" className="w-full block text-center">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
