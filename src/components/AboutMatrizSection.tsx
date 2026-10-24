import React from 'react';
import { Lock, Scale, Award, Building, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutMatrizSection: React.FC = () => {
  return (
    <section id="trayectoria" className="py-24 bg-[#0B132B] relative border-t border-slate-800 text-white">
      
      {/* Subtle lighting */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block">
              Institucional · Respaldo Corporativo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              El respaldo de una matriz jurídica sólida en Colombia.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              <strong className="text-white font-semibold">AXON Legal</strong> no opera de manera aislada ni como una asesoría particular improvisada. Somos la división especializada de <strong className="text-white font-semibold">AXON Global S.A.S.</strong>, una organización estructurada bajo los más exigentes estándares de auditoría jurídica, confidencialidad y ética corporativa.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Al elegir a AXON Legal, usted contrata a un equipo de litigantes y consultores sénior que audita, supervisa y respalda cada memorial, recurso y audiencia judicial, garantizando que su patrimonio y su hoja de vida queden absolutamente protegidos.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Supervisión de cada actuación procesal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Especialistas dedicados por rama del derecho</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sede principal en Bogotá con presencia nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tecnología e Inteligencia Artificial para triage</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="bg-[#0F172A] border border-slate-800 hover:border-[#D4AF37]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">
                Secreto Profesional
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blindaje absoluto de su información sensible y confidencialidad.
              </p>
            </div>

            <div className="bg-[#0F172A] border border-slate-800 hover:border-[#D4AF37]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">
                Rigor Jurídico
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Doctrina profunda y jurisprudencia actualizada de Altas Cortes.
              </p>
            </div>

            <div className="bg-[#0F172A] border border-slate-800 hover:border-[#D4AF37]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">
                Empatía Militar
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                +15 años defendiendo la carrera y el honor de la Fuerza Pública.
              </p>
            </div>

            <div className="bg-[#0F172A] border border-slate-800 hover:border-[#D4AF37]/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1">
                Visión Corporativa
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Estructura societaria, solvencia y estándares de AXON Global.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
