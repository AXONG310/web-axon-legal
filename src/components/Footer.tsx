import React from 'react';
import { Scale, Phone, Mail, Globe, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t-2 border-[#D4AF37]/50 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-800">
          
          {/* Brand & Matrix Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#99791D] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0B132B] rounded-[7px] flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-wider text-white">
                  AXON<span className="text-[#D4AF37] ml-1">LEGAL</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase">
                  División de AXON Global S.A.S.
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-300">AXON Legal</strong> es una marca registrada y la división jurídica estratégica perteneciente a <strong>AXON Global S.A.S.</strong> Brindamos conocimiento, seguridad, confianza y justicia, salvaguardando el patrimonio y los derechos de nuestros clientes con los más altos estándares éticos.
            </p>

            <div className="flex items-center gap-2 text-slate-500 pt-1">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>Sede de operaciones estructurada en Bogotá, Colombia</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors">
                  Especialidades Jurídicas
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-[#D4AF37] transition-colors">
                  Experiencia (+15 Años)
                </a>
              </li>
              <li>
                <a href="#biblioteca" className="hover:text-[#D4AF37] transition-colors">
                  Biblioteca 25 Códigos
                </a>
              </li>
              <li>
                <a href="#pagos" className="hover:text-[#D4AF37] transition-colors">
                  Canales Bre-B & Aportes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#D4AF37] transition-colors">
                  Radicar Caso Prioritario
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Contacto Oficial
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:legal@axonglobal.org"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#D4AF37] transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono">legal@axonglobal.org</span>
              </a>

              <a
                href="tel:+573180158629"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#D4AF37] transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-mono">+57 318 0158629</span>
              </a>

              <a
                href="https://www.axonglobal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#D4AF37] transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>www.axonglobal.org</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} AXON Global S.A.S. División AXON Legal. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Bogotá D.C. · Cobertura Nacional en Colombia</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
