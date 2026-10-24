import React from 'react';
import { DollarSign, ShieldAlert, Award, Home, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultant: () => void;
  onOpenEvaluator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultant, onOpenEvaluator }) => {
  return (
    <section id="especialidades" className="py-24 bg-[#070B14] relative border-t border-slate-800/80">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
            Áreas de Práctica de Alto Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Especialidades jurídicas diseñadas para ganar y proteger su futuro.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            En AXON Legal no improvisamos. Desplegamos estrategias procesales probadas en los juzgados y tribunales de Colombia, con dedicación exclusiva y acompañamiento continuo.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Insolvencia Persona Natural (Featured Marquee Card - 7 cols) */}
          <div className="lg:col-span-7 bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 rounded-2xl p-8 lg:p-10 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors">
                  <DollarSign className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase bg-amber-950/40 px-3 py-1 rounded border border-amber-900/40">
                  +100 Casos Exitosos
                </span>
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                01. Régimen Patrimonial
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Insolvencia de Persona Natural No Comerciante
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                ¿Las libranzas bancarias, embargos a nómina o deudas asfixiantes le impiden vivir con tranquilidad? La ley colombiana (Arts. 538 y ss. del CGP) le otorga el derecho de suspender inmediatamente remates y cobros, negociar con quitas sustanciales de capital y reinsertarse limpiamente en el sistema financiero.
              </p>

              <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suspensión de embargos a nómina</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Freno a libranzas asfixiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cese inmediato de llamadas de cobro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reorganización integral o liquidación</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenEvaluator}
                className="text-sm font-bold text-[#D4AF37] hover:text-amber-200 transition-colors flex items-center gap-2 cursor-pointer group-hover:translate-x-1"
              >
                <span>Calcular viabilidad de mi insolvencia</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/573180158629?text=Hola%20AXON%20Legal,%20deseo%20asesor%C3%ADa%20inmediata%20para%20Ley%20de%20Insolvencia%20Persona%20Natural."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Atención Inmediata WhatsApp →
              </a>
            </div>
          </div>

          {/* Card 2: Strategic Image Anchor (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B132B] border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="/src/assets/images/legal_defense_counsel_1792541731898.jpg"
                alt="Defensa técnica de AXON Legal"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Defensa de Élite en Colombia
                </span>
                <h4 className="text-xl font-bold text-white mb-2">
                  Litigio Estratégico y Auditoría de Procesos
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Cada actuación judicial es supervisada por socios con más de 15 años de conocimiento específico en doctrina castrense, derecho sancionatorio y civil.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenConsultant}
                  className="text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Consultar con Agente IA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Justicia Penal Militar (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 rounded-2xl p-8 lg:p-9 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors mb-6">
                <ShieldAlert className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                02. Fuero Militar y Policial
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Justicia Penal Militar y Policial
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Entendemos el honor y el rigor del servicio. Ofrecemos defensa técnica integral para oficiales, suboficiales, soldados y patrulleros de las <strong>Fuerzas Militares y de la Policía Nacional de Colombia</strong> vinculados a investigaciones penales militares (Ley 1407 de 2010), garantizando el debido proceso y salvaguardando su libertad.
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Defensa en audiencias preliminares y juicio oral</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acreditación estricta de la relación con el servicio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atención prioritaria y desplazamientos a nivel nacional</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="https://wa.me/573180158629?text=Hola%20AXON%20Legal,%20requiero%20defensa%20t%C3%A9cnica%20en%20Justicia%20Penal%20Militar."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#D4AF37] hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                <span>Solicitar defensa técnica militar urgente</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Derecho Disciplinario (6 cols) */}
          <div className="lg:col-span-6 bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 rounded-2xl p-8 lg:p-9 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors mb-6">
                <Award className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                03. Protección de la Carrera
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Derecho Disciplinario y Control Interno
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Su hoja de vida intachable es su mayor activo profesional. Asumimos la representación jurídica ante investigaciones disciplinarias de <strong>Control Interno, Oficinas de Inspección General y la Procuraduría General de la Nación</strong> (Leyes 1952 de 2019, 2094 de 2021 y 2196 de 2022).
              </p>

              <div className="space-y-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Contestación oportuna a pliegos de cargos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Recursos de apelación y nulidades procesales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Protección ante sanciones de suspensión e inhabilidad</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="https://wa.me/573180158629?text=Hola%20AXON%20Legal,%20tengo%20una%20investigaci%C3%B3n%20disciplinaria%20y%20necesito%20apoderado."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#D4AF37] hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                <span>Blindar mi hoja de vida disciplinaria</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 5: Civil y Familia (12 cols full width bottom accent) */}
          <div className="lg:col-span-12 bg-gradient-to-r from-[#0B132B] via-[#101A38] to-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 rounded-2xl p-8 lg:p-10 transition-all duration-300 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#D4AF37]">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  04. Seguridad y Legado Familiar
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Derecho Civil, Sucesiones, Contratos y Familia
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Anticipar contingencias es la decisión más rentable. Redacción experta de <strong>minutas y contratos patrimoniales blindados</strong>, trámites ágiles de <strong>sucesiones y herencias</strong> notariales o judiciales, testamentos solemnes y procesos de <strong>liquidación de sociedad conyugal</strong> sin desgastes innecesarios.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={onOpenConsultant}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#C29B27] text-[#0B132B] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all text-center cursor-pointer"
              >
                Consultar con Asesor IA
              </button>
              <a
                href="tel:+573180158629"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-all text-center"
              >
                Llamar a la Firma (+57 318 0158629)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
