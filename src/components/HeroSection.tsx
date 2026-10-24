import React from 'react';
import { Shield, ArrowRight, Bot, Lock, Award, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultant: () => void;
  onOpenEvaluator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultant, onOpenEvaluator }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070B14] via-[#0B132B] to-[#0A101F]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300/90 border border-amber-500/20 bg-amber-950/20 px-3.5 py-1.5 rounded-md">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bufete Jurídico Especializado en Colombia · AXON Global S.A.S.</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight [text-wrap:balance]">
              Protegemos su patrimonio, su carrera y su tranquilidad jurídica.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Defensa técnica y contundente en <strong className="text-white font-semibold">Ley de Insolvencia</strong> para frenar embargos, <strong className="text-white font-semibold">Justicia Penal Militar</strong> para miembros de la Fuerza Pública, y blindaje integral en <strong className="text-white font-semibold">Derecho Disciplinario y Civil</strong> en Colombia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultant}
                className="w-full sm:w-auto px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0B132B] bg-gradient-to-r from-[#E8CA66] via-[#D4AF37] to-[#B38C22] rounded-lg shadow-xl shadow-amber-950/40 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Bot className="w-4 h-4 text-[#0B132B] transition-transform group-hover:scale-110" />
                <span>Hablar con Agente IA Especialista</span>
                <ArrowRight className="w-4 h-4 text-[#0B132B] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenEvaluator}
                className="w-full sm:w-auto px-7 py-4 text-sm font-semibold tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calcular Viabilidad de mi Caso</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Suspensión inmediata de embargos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Secreto profesional 100% amparado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Respaldo AXON Global S.A.S.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Outer frame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/30 via-slate-800 to-[#1C2541]/40 rounded-2xl blur-sm" />

              {/* Main Card */}
              <div className="relative bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="/src/assets/images/hero_legal_firm_1792541732260.jpg"
                    alt="Sede corporativa de AXON Legal en Bogotá"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0B132B]/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <div>
                        <span className="block font-bold text-white text-sm">Firma Jurídica AXON Legal</span>
                        <span className="text-amber-300 text-xs font-medium">Conocimiento · Seguridad · Confianza · Justicia</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-emerald-400 font-bold text-sm">Atención 24/7</span>
                        <span className="text-[11px] text-slate-400">Bogotá & Nacional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Social Proof & Metrics Full-Width Row below Hero Split */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#D4AF37] font-mono tabular-nums">
                +15 Años
              </span>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Trayectoria Especializada
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Expertos en doctrina y normatividad de la Fuerza Pública Colombiana y régimen civil.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="block text-3xl md:text-4xl font-extrabold text-[#D4AF37] font-mono tabular-nums">
                +100 Casos
              </span>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Blindaje e Insolvencia
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Personas naturales que recuperaron su paz mental, frenando embargos y remates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="block text-3xl md:text-4xl font-extrabold text-white font-mono tabular-nums">
                100%
              </span>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Reserva y Ética
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Secreto profesional amparado bajo auditoría y estándares de AXON Global S.A.S.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums">
                Inmediato
              </span>
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                Triage con Agente IA
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Diagnóstico estratégico preliminar en segundos y contacto directo vía WhatsApp.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
