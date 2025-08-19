import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIService from "./pages/services/AIService";
import DataAnalytics from "./pages/services/DataAnalytics";
import CloudSolutions from "./pages/services/CloudSolutions";
import CognitiveOperations from "./pages/services/CognitiveOperations";
import ITConsultancy from "./pages/services/ITConsultancy";
import BusinessIntelligence from "./pages/services/BusinessIntelligence";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/ai-machine-learning" element={<AIService />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cognitive-operations" element={<CognitiveOperations />} />
          <Route path="/services/it-consultancy" element={<ITConsultancy />} />
          <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
