import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutMatrizSection } from './components/AboutMatrizSection';
import { LibrarySection } from './components/LibrarySection';
import { PaymentGatewaySection } from './components/PaymentGatewaySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiConsultantDrawer } from './components/AiConsultantDrawer';
import { CaseEvaluatorModal } from './components/CaseEvaluatorModal';
import { Bot, MessageCircle } from 'lucide-react';

export default function App() {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [isEvaluatorOpen, setIsEvaluatorOpen] = useState(false);

  const handleOpenConsultant = () => {
    setIsConsultantOpen(true);
  };

  const handleCloseConsultant = () => {
    setIsConsultantOpen(false);
  };

  const handleOpenEvaluator = () => {
    setIsEvaluatorOpen(true);
  };

  const handleCloseEvaluator = () => {
    setIsEvaluatorOpen(false);
  };

  const handleSelectCodeForConsultant = (codeName: string) => {
    setIsConsultantOpen(true);
  };

  const scrollToPayments = () => {
    setIsConsultantOpen(false);
    setIsEvaluatorOpen(false);
    const element = document.getElementById('pagos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col selection:bg-[#D4AF37] selection:text-[#0B132B]">
      
      {/* Top Navbar */}
      <Navbar
        onOpenConsultant={handleOpenConsultant}
        onOpenEvaluator={handleOpenEvaluator}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenConsultant={handleOpenConsultant}
          onOpenEvaluator={handleOpenEvaluator}
        />

        <ServicesSection
          onOpenConsultant={handleOpenConsultant}
          onOpenEvaluator={handleOpenEvaluator}
        />

        <AboutMatrizSection />

        <LibrarySection
          onSelectCodeForConsultant={handleSelectCodeForConsultant}
        />

        <PaymentGatewaySection />

        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* AI Consultant Floating Button */}
        <button
          onClick={handleOpenConsultant}
          className="group relative flex items-center gap-2.5 bg-[#0B132B] hover:bg-[#121B3B] text-white border border-[#D4AF37]/50 py-3 px-4 rounded-full shadow-2xl hover:shadow-amber-900/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Abrir Asesor Jurídico IA"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-200 flex items-center justify-center text-[#0B132B] shadow-inner">
            <Bot className="w-4 h-4 text-[#0B132B]" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline pr-1">
            Asesor IA AXON
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#070B14] rounded-full" />
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/573180158629?text=Hola%20AXON%20Legal,%20deseo%20asesor%C3%ADa%20jur%C3%ADdica%20inmediata%20para%20mi%20caso."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl hover:shadow-emerald-900/40 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-[#0B132B] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
            Asesoría Inmediata (+57 318 0158629)
          </span>
        </a>

      </div>

      {/* AI Consultant Drawer */}
      <AiConsultantDrawer
        isOpen={isConsultantOpen}
        onClose={handleCloseConsultant}
        onOpenPayments={scrollToPayments}
      />

      {/* Interactive Case Evaluator Modal */}
      <CaseEvaluatorModal
        isOpen={isEvaluatorOpen}
        onClose={handleCloseEvaluator}
        onOpenConsultant={handleOpenConsultant}
        onOpenPayments={scrollToPayments}
      />

    </div>
  );
}
