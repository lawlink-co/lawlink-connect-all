import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkPageSkeleton, LightPageSkeleton } from "@/components/PageSkeleton";

// Lazy load route components
const Home = lazy(() => import("./pages/Home"));
const LawFirms = lazy(() => import("./pages/LawFirms"));
const Clients = lazy(() => import("./pages/Clients"));
const Demo = lazy(() => import("./pages/Demo"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Also scroll to top on initial mount (page reload)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<DarkPageSkeleton />}>
              <Home />
            </Suspense>
          } />
          <Route path="/law-firms" element={
            <Suspense fallback={<DarkPageSkeleton />}>
              <LawFirms />
            </Suspense>
          } />
          <Route path="/clients" element={
            <Suspense fallback={<LightPageSkeleton />}>
              <Clients />
            </Suspense>
          } />
          <Route path="/demo" element={
            <Suspense fallback={<DarkPageSkeleton />}>
              <Demo />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<DarkPageSkeleton />}>
              <Contact />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Suspense fallback={<DarkPageSkeleton />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
