import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SculpturePage from "./pages/SculpturePage";
import FurniturePage from "./pages/FurniturePage";
import CommissionsPage from "./pages/CommissionsPage";
import AboutPage from "./pages/AboutPage";
import CVPage from "./pages/CVPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sculpture" element={<SculpturePage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/commissions" element={<CommissionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
