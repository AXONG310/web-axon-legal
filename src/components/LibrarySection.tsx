import React from 'react';
import { Download, BookOpen } from 'lucide-react';

interface LibrarySectionProps {
  onSelectCodeForConsultant: (codeName: string) => void;
}

export function LibrarySection({ onSelectCodeForConsultant }: LibrarySectionProps) {
  const codigosNormativos = [
    {
      titulo: "Código Civil Colombiano",
      descripcion: "Estatuto matriz que regula los derechos de las personas, obligaciones, contratos, bienes, sucesiones y testamentos.",
      pdfUrl: "./assets/astudio/libros/código_civil (1).pdf",
      docUrl: "./assets/astudio/libros/código_civil (1).doc"
    },
    {
      titulo: "Código Penal Colombiano",
      descripcion: "Catálogo de conductas punibles ordinarias, penas principales, medidas de seguridad y circunstancias de agravación.",
      pdfUrl: "./assets/astudio/libros/código_penal.pdf",
      docUrl: "./assets/astudio/libros/código_penal.doc"
    },
    {
      titulo: "Código General del Proceso",
      descripcion: "Norma procesal civil, comercial y de familia. Incluye el Título IV con el régimen de Insolvencia de Persona Natural.",
      pdfUrl: "./assets/astudio/libros/código_general_del_proceso.pdf",
      docUrl: "./assets/astudio/libros/código_general_del_proceso.doc"
    },
    {
      titulo: "Código Penal Militar",
      descripcion: "Régimen punitivo especial aplicable a los miembros de la Fuerza Pública (Ejército, Armada, Fuerza Aérea y Policía Nacional).",
      pdfUrl: "./assets/astudio/libros/código_penal_militar.pdf",
      docUrl: "./assets/astudio/libros/código_penal_militar.doc"
    },
    {
      titulo: "Código Nal. de Policía y Convivencia",
      descripcion: "Disposiciones orientadas a la convivencia pacífica, facultades de la Policía Nacional, órdenes de comparendo y medidas.",
      pdfUrl: "./assets/astudio/libros/código_nacional_de_policía_y_convivencia.pdf",
      docUrl: "./assets/astudio/libros/código_nacional_de_policía_y_convivencia.doc"
    }
  ];

  return (
    <section id="biblioteca" className="py-20 bg-[#070B14] text-slate-100 border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen className="w-4 h-4" /> Compendio Normativo
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] mb-4">
            Biblioteca Virtual - Axon Legal S.A.S.
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Consulte y descargue directamente los códigos matrices de la legislación colombiana. Conocimiento, seguridad, confianza y justicia respaldados en <strong className="text-[#D4AF37]">axonglobal.org</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codigosNormativos.map((codigo, index) => (
            <div key={index} className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#D4AF37] transition-all group">
              <div>
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#D4AF37]/80" /> {codigo.titulo}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">{codigo.descripcion}</p>
              </div>
              
              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-800">
                <div className="flex gap-2">
                  <a 
                    href={codigo.pdfUrl} 
                    download 
                    className="flex-1 bg-[#D4AF37] text-[#0B132B] text-center font-bold py-2 px-3 rounded-lg text-xs hover:bg-amber-400 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </a>
                  <a 
                    href={codigo.docUrl} 
                    download 
                    className="flex-1 bg-slate-800 text-[#D4AF37] text-center font-bold py-2 px-3 rounded-lg text-xs border border-[#D4AF37]/40 hover:bg-slate-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> DOC
                  </a>
                </div>
                <button 
                  onClick={() => onSelectCodeForConsultant(codigo.titulo)}
                  className="w-full bg-[#0B132B] text-slate-200 border border-[#D4AF37]/30 py-2 rounded-lg text-xs font-semibold hover:bg-slate-950 transition cursor-pointer"
                >
                  Consultar sobre este código
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}