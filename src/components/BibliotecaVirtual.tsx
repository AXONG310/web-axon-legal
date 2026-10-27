import React from 'react';
import { BookOpen, Download, FileText } from 'lucide-react';

interface LibroCodigo {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  pdfUrl: string;
  docUrl: string;
}

const codigosNormativos: LibroCodigo[] = [
  {
    titulo: "Código Civil Colombiano",
    subtitulo: "Obligaciones, bienes y sucesiones",
    descripcion: "Estatuto matriz que regula los derechos de las personas, obligaciones, contratos, bienes, sucesiones y testamentos.",
    pdfUrl: "/assets/astudio/libros/código_civil (1).pdf",
    docUrl: "/assets/astudio/libros/código_civil (1).doc"
  },
  {
    titulo: "Código Penal Colombiano",
    subtitulo: "Conductas punibles y penas",
    descripcion: "Catálogo de conductas punibles ordinarias, penas principales, medidas de seguridad y circunstancias de agravación.",
    pdfUrl: "/assets/astudio/libros/código_penal.pdf",
    docUrl: "/assets/astudio/libros/código_penal.doc"
  },
  {
    titulo: "Código General del Proceso",
    subtitulo: "Civil, comercial, familia e insolvencia",
    descripcion: "Norma procesal civil, comercial y de familia. Incluye el Título IV con el régimen de Insolvencia de la Persona Natural.",
    pdfUrl: "/assets/astudio/libros/código_general_del_proceso.pdf",
    docUrl: "/assets/astudio/libros/código_general_del_proceso.doc"
  },
  {
    titulo: "Código Penal Militar",
    subtitulo: "Régimen especial Fuerza Pública",
    descripcion: "Régimen punitivo especial aplicable a los miembros de la Fuerza Pública (Ejército, Armada, Fuerza Aérea y Policía Nacional).",
    pdfUrl: "/assets/astudio/libros/código_penal_militar.pdf",
    docUrl: "/assets/astudio/libros/código_penal_militar.doc"
  },
  {
    titulo: "Código Nal. de Policía y Convivencia",
    subtitulo: "Seguridad y orden ciudadano",
    descripcion: "Disposiciones orientadas a la convivencia pacífica, facultades de la Policía Nacional, órdenes de comparendo y medios.",
    pdfUrl: "/assets/astudio/libros/código_nacional_de_policía_y_convivencia.pdf",
    docUrl: "/assets/astudio/libros/código_nacional_de_policía_y_convivencia.doc"
  },
  {
    titulo: "Código de Procedimiento Penal",
    subtitulo: "Sistema penal acusatorio y juicio",
    descripcion: "Estructura del sistema penal acusatorio, facultades de la Fiscalía, garantías procesales y etapas del juicio oral.",
    pdfUrl: "/assets/astudio/libros/código_de_procedimiento_penal.pdf",
    docUrl: "/assets/astudio/libros/código_de_procedimiento_penal.doc"
  },
  {
    titulo: "Código de Comercio",
    subtitulo: "Sociedades y títulos valores",
    descripcion: "Regulación de los actos mercantiles, obligaciones de los comerciantes, sociedades comerciales y títulos valores.",
    pdfUrl: "/assets/astudio/libros/código_de_comercio.pdf",
    docUrl: "/assets/astudio/libros/código_de_comercio.doc"
  },
  {
    titulo: "Código Sustantivo del Trabajo",
    subtitulo: "Relaciones laborales individuales",
    descripcion: "Normativa reguladora de las relaciones laborales individuales y colectivas entre empleadores y trabajadores.",
    pdfUrl: "/assets/astudio/libros/código_sustantivo_del_trabajo.pdf",
    docUrl: "/assets/astudio/libros/código_sustantivo_del_trabajo.doc"
  },
  {
    titulo: "Código Procesal del Trabajo y de la S.S.",
    subtitulo: "Litigio laboral y seguridad social",
    descripcion: "Procedimientos aplicables en la resolución de conflictos jurídicos laborales y del sistema de seguridad social.",
    pdfUrl: "/assets/astudio/libros/código_procesal_del_trabajo_y_de_la_seguridad_social.pdf",
    docUrl: "/assets/astudio/libros/código_procesal_del_trabajo_y_de_la_seguridad_social.doc"
  },
  {
    titulo: "Código de Procedimiento Administrativo",
    subtitulo: "CPACA - Ley 1437 de 2011",
    descripcion: "Regula los procedimientos administrativos y el medio de control ante la jurisdicción contenciosa.",
    pdfUrl: "/assets/astudio/libros/código_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo.pdf",
    docUrl: "/assets/astudio/libros/código_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo.doc"
  },
  {
    titulo: "Código Disciplinario Único",
    subtitulo: "Servidores públicos y control",
    descripcion: "Estatuto aplicable a los servidores públicos y particulares que ejerzan funciones públicas.",
    pdfUrl: "/assets/astudio/libros/código_disciplinario_único.pdf",
    docUrl: "/assets/astudio/libros/código_disciplinario_único.doc"
  },
  {
    titulo: "Código Nal. de Tránsito Terrestre",
    subtitulo: "Regulación vial y comparendos",
    descripcion: "Normas de circulación peatonal y vehicular, régimen de infracciones, comparendos y licencias.",
    pdfUrl: "/assets/astudio/libros/código_nacional_de_tránsito_terrestre.pdf",
    docUrl: "/assets/astudio/libros/código_nacional_de_tránsito_terrestre.doc"
  },
  {
    titulo: "Código de Infancia y Adolescencia",
    subtitulo: "Protección integral de menores",
    descripcion: "Protección integral de los niños, niñas y adolescentes, responsabilidades penales juveniles y sistema familiar.",
    pdfUrl: "/assets/astudio/libros/código_de_la_infancia_y_la_adolescencia.pdf",
    docUrl: "/assets/astudio/libros/código_de_la_infancia_y_la_adolescencia.doc"
  }
];

export function BibliotecaVirtual() {
  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
      // Fallback de respaldo si fetch falla
      window.open(url, '_blank');
    }
  };

  return (
    <section id="biblioteca" className="py-20 bg-[#070B14] text-slate-100 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
            Axon Global Tech S.A.S. &bull; Axon Legal (axonglobal.org)
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-6 tracking-tight font-heading">
            Biblioteca Virtual de Códigos Matrices
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Compendio completo de la legislación colombiana bajo el respaldo de <strong className="text-[#D4AF37]">axonglobal.org</strong>. Descargue los estatutos en formato PDF o DOC con un solo clic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codigosNormativos.map((codigo, index) => {
            const pdfFilename = codigo.pdfUrl.split('/').pop() || 'codigo.pdf';
            const docFilename = codigo.docUrl.split('/').pop() || 'codigo.doc';

            return (
              <div key={index} className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl p-6 flex flex-col justify-between shadow-xl hover:border-[#D4AF37] transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      Normativa Vigente
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-1">{codigo.titulo}</h3>
                  <span className="text-xs text-slate-400 font-semibold block mb-3">{codigo.subtitulo}</span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{codigo.descripcion}</p>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  <button 
                    onClick={() => handleDownload(codigo.pdfUrl, pdfFilename)}
                    className="flex-1 bg-[#D4AF37] hover:bg-amber-400 text-[#0B132B] font-bold py-2.5 px-3 rounded-lg text-xs text-center flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                  <button 
                    onClick={() => handleDownload(codigo.docUrl, docFilename)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 px-3 rounded-lg text-xs text-center flex items-center justify-center gap-1.5 border border-slate-700 transition cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" /> DOC
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}