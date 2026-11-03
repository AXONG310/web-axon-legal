// web axon legal/src/components/Biblioteca.tsx
import React from 'react';

// Estructura de los datos para los documentos de la biblioteca
interface DocumentoLegal {
  id: string;
  titulo: string;
  descripcion: string;
  rutaPdf: string;
  rutaWord: string;
}

// Asegúrate de que los nombres de archivo coincidan exactamente con los que subas a la carpeta public/biblioteca/
const documentos: DocumentoLegal[] = [
  {
    id: '1',
    titulo: 'Código Civil Colombiano',
    descripcion: 'Normativa actualizada. Descarga gratuita en el formato de su preferencia.',
    rutaPdf: '/biblioteca/codigo-civil.pdf', // Ruta basada en la carpeta public/
    rutaWord: '/biblioteca/codigo-civil.docx',
  },
  // Puedes agregar más libros o códigos aquí copiando el bloque anterior
];

export const Biblioteca: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-[#002B5B] mb-6 border-b pb-4">
        Biblioteca Gratuita Axon Legal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentos.map((doc) => (
          <div key={doc.id} className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
            <h3 className="text-xl font-bold text-gray-800">{doc.titulo}</h3>
            <p className="text-gray-600 mt-2 mb-5 text-sm">{doc.descripcion}</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              {/* Botón de descarga PDF */}
              <a
                href={doc.rutaPdf}
                download={`AxonLegal_${doc.titulo.replace(/\s+/g, '_')}.pdf`}
                className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar PDF
              </a>
              
              {/* Botón de descarga Word */}
              <a
                href={doc.rutaWord}
                download={`AxonLegal_${doc.titulo.replace(/\s+/g, '_')}.docx`}
                className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar Word
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};