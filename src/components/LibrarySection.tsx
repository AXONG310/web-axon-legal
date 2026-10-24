import React, { useState } from 'react';
import { Search, BookOpen, Download, FileText, ArrowRight, Bot, X, Check } from 'lucide-react';
import { LEGAL_CODES } from '../data/legalCodes';
import { LegalCode } from '../types';

interface LibrarySectionProps {
  onSelectCodeForConsultant: (codeName: string) => void;
}

export const LibrarySection: React.FC<LibrarySectionProps> = ({ onSelectCodeForConsultant }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCodeModal, setActiveCodeModal] = useState<LegalCode | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Códigos (25)' },
    { id: 'militar', label: 'Militar y Disciplinario' },
    { id: 'civil', label: 'Civil y Comercial' },
    { id: 'penal', label: 'Penal y Penitenciario' },
    { id: 'laboral', label: 'Laboral' },
    { id: 'publico', label: 'Público y CPACA' },
  ];

  const filteredCodes = LEGAL_CODES.filter((code) => {
    const matchesSearch =
      code.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (code.year && code.year.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || code.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSimulateDownload = (code: LegalCode) => {
    setDownloadSuccess(code.id);
    
    // Create text file payload representing the official statutes guide
    const fileContent = `========================================================================
AXON LEGAL | DIVISIÓN JURÍDICA AXON GLOBAL S.A.S.
Compendio Normativo Oficial: ${code.name} (${code.year || 'Colombia'})
========================================================================

DESCRIPCIÓN INSTITUCIONAL:
${code.description}

ARTÍCULOS Y DISPOSICIONES CLAVE:
${code.keyArticles.map((art, idx) => `${idx + 1}. ${art}`).join('\n')}

LÍNEA DE ATENCIÓN JURÍDICA PRIORITARIA:
WhatsApp / Teléfono: +57 318 0158629
Correo Electrónico: legal@axonglobal.org
Sede Principal: Bogotá, Colombia
========================================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${code.name.replace(/\s+/g, '_')}_AXON_Legal.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section id="biblioteca" className="py-24 bg-[#0A101F] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
            Aporte a la Comunidad y Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Biblioteca Virtual AXON Legal
          </h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ponemos a su disposición los <strong className="text-white">25 compendios normativos, estatutos y códigos matrices</strong> de la legislación colombiana. El conocimiento de sus derechos es el primer paso para su victoria jurídica.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por código, ley o palabra clave..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0F172A] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#0B132B] font-bold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Grid of 25 Codes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredCodes.map((code) => (
            <div
              key={code.id}
              onClick={() => setActiveCodeModal(code)}
              className="bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-red-950/40 border border-red-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  {code.year && (
                    <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {code.year}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-2">
                  {code.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {code.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                  Ver Disposiciones <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {code.keyArticles.length} Artículos clave
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCodes.length === 0 && (
          <div className="text-center py-16 bg-[#0B132B]/50 rounded-2xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No se encontraron códigos</h4>
            <p className="text-sm text-slate-400 mb-4">Pruebe con otros términos como "Civil", "Militar", "CGP" o "Disciplinario".</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-xs font-bold text-[#D4AF37] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>

      {/* Code Detail Modal */}
      {activeCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-[#0B132B] border border-slate-700 rounded-2xl p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveCodeModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-center text-rose-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-wider block">
                  Compendio Oficial · {activeCodeModal.year || 'Colombia'}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeCodeModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeCodeModal.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Artículos Relevantes para la Defensa:
              </h4>
              <div className="space-y-2">
                {activeCodeModal.keyArticles.map((art, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span>{art}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  const codeName = activeCodeModal.name;
                  setActiveCodeModal(null);
                  onSelectCodeForConsultant(codeName);
                }}
                className="w-full py-3 bg-[#D4AF37] hover:bg-[#C29B27] text-[#0B132B] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Bot className="w-4 h-4 text-[#0B132B]" />
                <span>Consultar cómo aplica este código a mi caso</span>
              </button>

              <button
                onClick={() => handleSimulateDownload(activeCodeModal)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {downloadSuccess === activeCodeModal.id ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">¡Compendio Descargado con Éxito!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-400" />
                    <span>Descargar Compendio Jurídico</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
