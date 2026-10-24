import React, { useState } from 'react';
import { Scale, Menu, X, Bot, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConsultant: () => void;
  onOpenEvaluator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultant, onOpenEvaluator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B14]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single clean brand wordmark element */}
          <a href="#" className="flex items-center gap-3 text-white tracking-tight shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#99791D] p-0.5 shadow-lg shadow-amber-950/30 flex items-center justify-center">
              <div className="w-full h-full bg-[#0B132B] rounded-[7px] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-['Plus_Jakarta_Sans']">
                AXON<span className="text-[#D4AF37] ml-1">LEGAL</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-0.5">
                División AXON Global S.A.S.
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a 
              href="#especialidades" 
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Especialidades
            </a>
            <a 
              href="#trayectoria" 
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Experiencia
            </a>
            <a 
              href="#biblioteca" 
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Biblioteca 25 Códigos
            </a>
            <a 
              href="#pagos" 
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            >
              Canales Bre-B
            </a>
            <button
              onClick={onOpenEvaluator}
              className="text-amber-300 hover:text-amber-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Diagnóstico Viabilidad</span>
            </button>
          </nav>

          {/* Zone 3: Exactly 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultant}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B132B] bg-gradient-to-r from-[#E6C65E] via-[#D4AF37] to-[#B38C22] rounded-lg shadow-lg shadow-amber-900/20 hover:brightness-110 hover:shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-[#0B132B]" />
              <span>Consultar Caso con IA</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultant}
              className="p-2 text-xs font-bold text-[#0B132B] bg-[#D4AF37] rounded-md sm:hidden"
              aria-label="Abrir asistente IA"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A101F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800/50 rounded-md"
          >
            Especialidades Jurídicas
          </a>
          <a
            href="#trayectoria"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800/50 rounded-md"
          >
            Nuestra Experiencia (+15 Años)
          </a>
          <a
            href="#biblioteca"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800/50 rounded-md"
          >
            Biblioteca Virtual (25 Códigos)
          </a>
          <a
            href="#pagos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800/50 rounded-md"
          >
            Pasarela de Aportes Bre-B
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEvaluator();
            }}
            className="w-full text-left px-3 py-2 text-base font-medium text-amber-300 hover:bg-slate-800/50 rounded-md flex items-center justify-between"
          >
            <span>Evaluar Viabilidad de mi Caso</span>
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultant();
              }}
              className="w-full py-3 text-center font-bold text-[#0B132B] bg-[#D4AF37] rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Iniciar Asesoría Prioritaria</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
