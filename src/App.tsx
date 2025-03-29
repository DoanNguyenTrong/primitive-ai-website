
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import CameraAI from "./pages/solution-details/CameraAI";
import Chatbot from "./pages/solution-details/Chatbot";
import LegalHub from "./pages/solution-details/LegalHub";
import DocumentProcessing from "./pages/solution-details/DocumentProcessing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
          <Route path="/solutions/camera-ai" element={<Layout><CameraAI /></Layout>} />
          <Route path="/solutions/chatbot" element={<Layout><Chatbot /></Layout>} />
          <Route path="/solutions/legalhub" element={<Layout><LegalHub /></Layout>} />
          <Route path="/solutions/document-processing" element={<Layout><DocumentProcessing /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/why-choose-us" element={<Layout><WhyChooseUs /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
