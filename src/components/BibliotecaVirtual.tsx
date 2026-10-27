import React from 'react';
import { BookOpen, Download, FileText } from 'lucide-react';

interface LibroCodigo {
  titulo: string;
  descripcion: string;
  pdfUrl: string;
  docUrl: string;
}

const codigosNormativos: LibroCodigo[] = [
  {
    titulo: "Código Civil Colombiano",
    descripcion: "Estatuto matriz que regula los derechos de las personas, obligaciones, contratos, bienes, sucesiones y testamentos.",
    pdfUrl: "/assets/astudio/libros/código_civil (1).pdf",
    docUrl: "/assets/astudio/libros/código_civil (1).doc"
  },
  {
    titulo: "Código Penal Colombiano",
    descripcion: "Catálogo de conductas punibles ordinarias, penas principales, medidas de seguridad y circunstancias de agravación.",
    pdfUrl: "/assets/astudio/libros/código_penal.pdf",
    docUrl: "/assets/astudio/libros/código_penal.doc"
  },
  {
    titulo: "Código General del Proceso",
    descripcion: "Norma procesal civil, comercial y de familia. Incluye el Título IV con el régimen de Insolvencia de la Persona Natural.",
    pdfUrl: "/assets/astudio/libros/código_general_del_proceso.pdf",
    docUrl: "/assets/astudio/libros/código_general_del_proceso.doc"
  },
  {
    titulo: "Código Penal Militar",
    descripcion: "Régimen punitivo especial aplicable a los miembros de la Fuerza Pública (Ejército, Armada, Fuerza Aérea y Policía Nacional).",
    pdfUrl: "/assets/astudio/libros/código_penal_militar.pdf",
    docUrl: "/assets/astudio/libros/código_penal_militar.doc"
  },
  {
    titulo: "Código Nal. de Policía y Convivencia",
    descripcion: "Disposiciones orientadas a la convivencia pacífica, facultades de la Policía Nacional, órdenes de comparendo y medios.",
    pdfUrl: "/assets/astudio/libros/código_nacional_de_policía_y_convivencia.pdf",
    docUrl: "/assets/astudio/libros/código_nacional_de_policía_y_convivencia.doc"
  },
  {
    titulo: "Código de Procedimiento Penal",
    descripcion: "Estructura del sistema penal acusatorio, facultades de la Fiscalía, garantías procesales y etapas del juicio oral.",
    pdfUrl: "/assets/astudio/libros/código_de_procedimiento_penal.pdf",
    docUrl: "/assets/astudio/libros/código_de_procedimiento_penal.doc"
  },
  {
    titulo: "Código de Comercio",
    descripcion: "Regulación de los actos mercantiles, obligaciones de los comerciantes, sociedades comerciales y títulos valores.",
    pdfUrl: "/assets/astudio/libros/código_de_comercio.pdf",
    docUrl: "/assets/astudio/libros/código_de_comercio.doc"
  },
  {
    titulo: "Código Sustantivo del Trabajo",
    descripcion: "Normativa reguladora de las relaciones laborales individuales y colectivas entre empleadores y trabajadores.",
    pdfUrl: "/assets/astudio/libros/código_sustantivo_del_trabajo.pdf",
    docUrl: "/assets/astudio/libros/código_sustantivo_del_trabajo.doc"
  },
  {
    titulo: "Código Procesal del Trabajo y de la S.S.",
    descripcion: "Procedimientos aplicables en la resolución de conflictos jurídicos laborales y del sistema de seguridad social.",
    pdfUrl: "/assets/astudio/libros/código_procesal_del_trabajo_y_de_la_seguridad_social.pdf",
    docUrl: "/assets/astudio/libros/código_procesal_del_trabajo_y_de_la_seguridad_social.doc"
  },
  {
    titulo: "Código de Procedimiento Administrativo (CPACA)",
    descripcion: "Ley 1437 de 2011. Regula los procedimientos administrativos y el medio de control ante la jurisdicción contenciosa.",
    pdfUrl: "/assets/astudio/libros/código_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo.pdf",
    docUrl: "/assets/astudio/libros/código_de_procedimiento_administrativo_y_de_lo_contencioso_administrativo.doc"
  },
  {
    titulo: "Código Disciplinario Único",
    descripcion: "Estatuto aplicable a los servidores públicos y particulares que ejerzan funciones públicas (Leyes disciplinarias).",
    pdfUrl: "/assets/astudio/libros/código_disciplinario_único.pdf",
    docUrl: "/assets/astudio/libros/código_disciplinario_único.doc"
  },
  {
    titulo: "Código Nal. de Tránsito Terrestre",
    descripcion: "Normas de circulación peatonal y vehicular, régimen de infracciones, comparendos y licencias de conducción.",
    pdfUrl: "/assets/astudio/libros/código_nacional_de_tránsito_terrestre.pdf",
    docUrl: "/assets/astudio/libros/código_nacional_de_tránsito_terrestre.doc"
  },
  {
    titulo: "Código de Infancia y Adolescencia",
    descripcion: "Protección integral de los niños, niñas y adolescentes, responsabilidades penales juveniles y sistema familiar.",
    pdfUrl: "/assets/astudio/libros/código_de_la_infancia_y_la_adolescencia.pdf",
    docUrl: "/assets/astudio/libros/código_de_la_infancia_y_la_adolescencia.doc"
  },
  {
    titulo: "Código Penitenciario y Carcelario",
    descripcion: "Régimen de ejecución de penas, derechos y deberes de las personas privadas de la libertad y sistema carcelario.",
    pdfUrl: "/assets/astudio/libros/código_penitenciario_y_carcelario.pdf",
    docUrl: "/assets/astudio/libros/código_penitenciario_y_carcelario.doc"
  },
  {
    titulo: "Código Electoral",
    descripcion: "Disposiciones sobre organización electoral, partidos políticos, sufragio y escrutinios en Colombia.",
    pdfUrl: "/assets/astudio/libros/código_electoral.pdf",
    docUrl: "/assets/astudio/libros/código_electoral.doc"
  },
  {
    titulo: "Código de Minas",
    descripcion: "Normativa que regula la propiedad de los recursos mineros, contratos de concesión y explotación técnica.",
    pdfUrl: "/assets/astudio/libros/código_de_minas.pdf",
    docUrl: "/assets/astudio/libros/código_de_minas.doc"
  },
  {
    titulo: "Código Sanitario Nacional",
    descripcion: "Disposiciones orientadas a la protección de la salud humana, control de alimentos, medicamentos y salubridad.",
    pdfUrl: "/assets/astudio/libros/código_sanitario_nacional.pdf",
    docUrl: "/assets/astudio/libros/código_sanitario_nacional.doc"
  },
  {
    titulo: "Código de Recursos Naturales Renovables",
    descripcion: "Legislación ambiental sobre preservación, defensa y uso sostenible de los recursos naturales y el medio ambiente.",
    pdfUrl: "/assets/astudio/libros/código_nacional_de_recursos_naturales_renovables_y_de_protección_al_medio_ambiente.pdf",
    docUrl: "/assets/astudio/libros/código_nacional_de_recursos_naturales_renovables_y_de_protección_al_medio_ambiente.doc"
  },
  {
    titulo: "Código de Régimen Departamental",
    descripcion: "Estructura administrativa, funciones de las gobernaciones, asambleas departamentales y control fiscal.",
    pdfUrl: "/assets/astudio/libros/código_de_régimen_departamental.pdf",
    docUrl: "/assets/astudio/libros/código_de_régimen_departamental.doc"
  },
  {
    titulo: "Código de Régimen Municipal",
    descripcion: "Organización de los municipios, concejos municipales, alcaldías y descentralización administrativa.",
    pdfUrl: "/assets/astudio/libros/código_de_régimen_municipal.pdf",
    docUrl: "/assets/astudio/libros/código_de_régimen_municipal.doc"
  },
  {
    titulo: "Código del Menor (Histórico)",
    descripcion: "Estatuto normativo antecedente sobre protección de menores y familia en la legislación colombiana.",
    pdfUrl: "/assets/astudio/libros/código_del_menor.pdf",
    docUrl: "/assets/astudio/libros/código_del_menor.doc"
  }
];

export function BibliotecaVirtual() {
  return (
    <section id="biblioteca" className="py-20 lg:py-28 bg-[#070B14] text-slate-100 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
            Axon Global Tech S.A.S. &bull; Axon Legal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-6 tracking-tight font-heading">
            Biblioteca Virtual de Códigos Matrices
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Como parte de nuestro compromiso con el rigor jurídico, ponemos a su disposición el compendio completo de la legislación colombiana bajo el respaldo de <strong className="text-[#D4AF37]">axonglobal.org</strong>. Descargue los estatutos en formato PDF o DOC con un solo clic.
          </p>
        </div>

        {/* Cuadrícula Completa de Códigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codigosNormativos.map((codigo, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-[#D4AF37]/30 rounded-xl p-6 flex flex-col justify-between shadow-xl hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    Normativa Vigente
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2 group-hover:text-amber-300 transition-colors">
                  {codigo.titulo}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {codigo.descripcion}
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <a 
                  href={codigo.pdfUrl} 
                  download 
                  className="flex-1 bg-[#D4AF37] hover:bg-amber-400 text-[#0B132B] font-bold py-2.5 px-3 rounded-lg text-xs text-center flex items-center justify-center gap-1.5 transition shadow"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
                <a 
                  href={codigo.docUrl} 
                  download 
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2.5 px-3 rounded-lg text-xs text-center flex items-center justify-center gap-1.5 border border-slate-700 transition"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D4AF37]" /> DOC
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pie Normativo */}
        <div className="text-center mt-12 text-xs text-slate-400">
          <p>
            Soporte y consultas institucionales: <span className="text-[#D4AF37]">legal@axonglobal.org</span> &bull; Línea directa: <strong className="text-slate-200">+573180158629</strong>
          </p>
        </div>

      </div>
    </section>
  );
}