import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultant: () => void;
  onOpenEvaluator: () => void;
}

export function HeroSection({ onOpenConsultant, onOpenEvaluator }: HeroSectionProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-[#070B14] text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
            Axon Global Tech S.A.S. &bull; Axon Legal S.A.S.
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-6 tracking-tight font-heading">
            Conocimiento, Seguridad, Confianza, Justicia
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            Firma líder en litigio estratégico y consultoría jurídica integral en Colombia. Amparados bajo estricto secreto profesional y tecnología de vanguardia en <strong className="text-[#D4AF37]">axonglobal.org</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onOpenConsultant}
              className="bg-[#D4AF37] text-[#0B132B] font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-amber-400 transition-all cursor-pointer"
            >
              Consultar con Agente Especializado
            </button>
            <a 
              href="https://wa.me/573180158629?text=Hola%20Axon%20Legal,%20deseo%20asesor%C3%ADa%20inmediata."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-[#D4AF37]/40 text-slate-200 font-bold px-6 py-3 rounded-lg hover:bg-slate-800 transition-all"
            >
              WhatsApp (+573180158629)
            </a>
          </div>
        </div>

        {/* Tarjetas Principales con Rutas Públicas Directas y Respaldo Fallback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          
          {/* Tarjeta 1: Sede Bogotá */}
          <div className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden bg-slate-950">
              <img 
                src="/assets/images/hero_legal_firm_179254173260.jpg" 
                alt="Sede corporativa de Axon Legal en Bogotá" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute top-3 left-3 bg-[#0B132B]/90 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded border border-[#D4AF37]/40 flex items-center gap-1.5 shadow">
                <MapPin className="w-3.5 h-3.5" /> Bogotá, D.C.
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Sede corporativa de Axon Legal en Bogotá</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Ubicados estratégicamente en el centro institucional de la capital, bajo el respaldo de <strong>Axon Global Tech S.A.S.</strong> Litigio estratégico en <strong>axonglobal.org</strong>.
              </p>
              <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex justify-between items-center">
                <span>Tel / WhatsApp: +573180158629</span>
                <span className="text-[#D4AF37] font-semibold">legal@axonglobal.org</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Defensa Técnica / Litigio Estratégico */}
          <div className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden bg-slate-950">
              <img 
                src="/assets/images/legal_defense_counsel_1792541731898.jpg" 
                alt="Defensa técnica de Axon Legal" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute top-3 left-3 bg-[#0B132B]/90 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded border border-[#D4AF37]/40 flex items-center gap-1.5 shadow">
                <ShieldCheck className="w-3.5 h-3.5" /> Litigio Especializado
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Defensa técnica de Axon Legal</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Representación judicial y extrajudicial de máximo nivel con rigor científico y jurídico. Conocimiento, seguridad, confianza y justicia bajo estricto secreto profesional.
              </p>
              <div className="text-xs text-slate-400 border-t border-slate-800 pt-3 flex justify-between items-center">
                <span>CEO: ceo@axonglobal.org</span>
                <span className="text-[#D4AF37] font-semibold">Axon Legal S.A.S.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}