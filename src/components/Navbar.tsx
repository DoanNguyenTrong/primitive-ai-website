
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
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
  ];

  const solutionsLinks = [
    {
      name: 'Camera AI Platform',
      path: '/solutions/camera-ai',
      description: 'Enhance workplace safety with intelligent visual monitoring',
      icon: Camera,
    },
    {
      name: 'AI Chatbot & Voice Bot',
      path: '/solutions/chatbot',
      description: 'Deliver exceptional customer support and sales assistance',
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
              <span className="text-2xl font-bold text-primary">Primitive AI</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular nav links except Solutions */}
            {navLinks.filter(link => link.name !== 'Solutions').map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium hover:text-primary transition-colors",
                  isActive(link.path) ? "text-primary font-semibold" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Solutions dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-base font-medium hover:text-primary transition-colors bg-transparent hover:bg-transparent focus:bg-transparent", 
                      (isActive('/solutions') || location.pathname.startsWith('/solutions/')) 
                        ? "text-primary font-semibold" 
                        : "text-foreground"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.65fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-50 to-primary-100 p-6 no-underline outline-none focus:shadow-md"
                            to="/solutions"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-primary-600">
                              All Solutions
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              View our complete suite of AI-powered solutions designed to transform your business
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <ul className="grid gap-3 p-1 md:w-[400px] md:grid-rows-4">
                        {solutionsLinks.map((solution) => (
                          <li key={solution.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={solution.path}
                                className={cn(
                                  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                  isActive(solution.path)
                                    ? "bg-primary-100 text-primary-700"
                                    : "hover:bg-primary-50 hover:text-primary-700"
                                )}
                              >
                                <div className="flex items-center gap-2 text-sm font-medium leading-none mb-1">
                                  <solution.icon className="h-4 w-4 text-primary-600" />
                                  <span>{solution.name}</span>
                                </div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
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
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="bg-primary hover:bg-primary-600 text-black font-medium">
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
                  ? "bg-primary-50 text-primary"
                  : "text-foreground hover:bg-primary-50 hover:text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Sub-items for solutions in mobile */}
          {location.pathname.startsWith('/solutions') && (
            <div className="pl-6 space-y-1 border-l border-primary-100 ml-3">
              {solutionsLinks.map((solution) => (
                <Link
                  key={solution.path}
                  to={solution.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm",
                    isActive(solution.path)
                      ? "bg-primary-50 text-primary"
                      : "text-foreground hover:bg-primary-50 hover:text-primary"
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
            <Button className="w-full bg-primary hover:bg-primary-600 text-black font-medium">
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
