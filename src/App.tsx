import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import OrcamentoModal from "@/components/OrcamentoModal";
import { OrcamentoProvider } from "@/context/OrcamentoContext";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Atibaia from "./pages/Atibaia";
import BomJesus from "./pages/BomJesus";
import NazarePaulista from "./pages/NazarePaulista";
import Catalogo from "./pages/Catalogo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <OrcamentoProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/atibaia" element={<Atibaia />} />
              <Route path="/bom-jesus-dos-perdoes" element={<BomJesus />} />
              <Route path="/nazare-paulista" element={<NazarePaulista />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <OrcamentoModal />
        </BrowserRouter>
      </OrcamentoProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
