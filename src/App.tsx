import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/dashboards/UserDashboard";
import VendorDashboard from "./pages/dashboards/VendorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import MechanicDashboard from "./pages/dashboards/MechanicDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/:role" element={<Auth />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/vendor" element={<VendorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/mechanic" element={<MechanicDashboard />} />
          {/* Legacy route for compatibility */}
          <Route path="/index" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
