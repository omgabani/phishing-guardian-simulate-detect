
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Learn from "./pages/Learn";
import Simulator from "./pages/Simulator";
import Tools from "./pages/Tools";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

// Create a component that wraps the app with providers to avoid React hook errors
const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AppProviders>
);

export default App;
