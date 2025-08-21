import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import PenthouseDetail from "./pages/PenthouseDetail";
import YellowChiliDetail from "./pages/YellowChiliDetail";
import VillaLakesDetail from "./pages/VillaLakesDetail";
import VillaDubaiHillsDetail from "./pages/VillaDubaiHillsDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/projects/penthouse-palm-jumeirah" element={<PenthouseDetail />} />
          <Route path="/projects/yellow-chili-restaurant" element={<YellowChiliDetail />} />
          <Route path="/projects/villa-lakes-refurbishment" element={<VillaLakesDetail />} />
          <Route path="/projects/villa-dubai-hills" element={<VillaDubaiHillsDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
