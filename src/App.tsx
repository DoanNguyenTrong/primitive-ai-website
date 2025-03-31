
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Solutions from '@/pages/Solutions';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import WhyChooseUs from '@/pages/WhyChooseUs';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

// Solution detail pages
import CameraAI from '@/pages/solution-details/CameraAI';
import SupportHub from '@/pages/solution-details/Chatbot';
import LegalHub from '@/pages/solution-details/LegalHub';
import DocumentProcessing from '@/pages/solution-details/DocumentProcessing';

// Blog post pages
import BlogPost1 from '@/pages/blog-posts/BlogPost1';
import BlogPost2 from '@/pages/blog-posts/BlogPost2';
import BlogPost3 from '@/pages/blog-posts/BlogPost3';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Solution detail routes */}
            <Route path="/solutions/camera-ai" element={<CameraAI />} />
            <Route path="/solutions/supportHub" element={<SupportHub />} />
            <Route path="/solutions/legalhub" element={<LegalHub />} />
            <Route path="/solutions/document-processing" element={<DocumentProcessing />} />
            
            {/* Blog post routes */}
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
            <Route path="/blog/3" element={<BlogPost3 />} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
