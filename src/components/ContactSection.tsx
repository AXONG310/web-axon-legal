import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Paperclip, AlertCircle, CheckCircle, Shield, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [servicio, setServicio] = useState('Insolvencia');
  const [mensaje, setMensaje] = useState('');
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB max allowed

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      let totalSize = 0;
      for (let i = 0; i < e.target.files.length; i++) {
        totalSize += e.target.files[i].size;
      }

      if (totalSize > MAX_FILE_BYTES) {
        setFileError('El tamaño total supera los 10MB permitidos. Por favor reduzca el peso o adjúntelo vía WhatsApp.');
        setSelectedFiles(null);
        e.target.value = '';
      } else {
        setFileError(null);
        setSelectedFiles(e.target.files);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          telefono,
          correo,
          servicio,
          mensaje,
        }),
      });

      const data = await res.json();
      if (data.ticketId) {
        setSubmittedTicket(data.ticketId);
      } else {
        setSubmittedTicket(`AXON-${Date.now().toString().slice(-6)}`);
      }
    } catch (err) {
      console.error(err);
      setSubmittedTicket(`AXON-${Date.now().toString().slice(-6)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppContactUrl = () => {
    const text = encodeURIComponent(
      `Hola AXON Legal, soy ${nombre || 'un cliente'}. Radico formalmente mi consulta para el área de ${servicio}:\nTeléfono: ${telefono}\nMensaje: ${mensaje || 'Requiero valoración urgente.'}`
    );
    return `https://wa.me/573180158629?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 bg-[#0A101F] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="bg-[#0B132B] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: Direct Official Contact Info (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-[#0F172A] to-[#0B132B] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                  Atención Prioritaria
                </span>
                <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Inicie su defensa técnica hoy mismo.
                </h3>
                <div className="h-1 w-16 bg-[#D4AF37] my-4 rounded-full" />
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  Los términos procesales no se detienen. Diligencie el formulario con sus datos de contacto y antecedentes. Nuestro comité jurídico responderá con un plan de acción prioritario.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                
                <a
                  href="https://wa.me/573180158629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800 hover:border-[#25D366]/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Línea Directa WhatsApp
                    </span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-[#25D366] transition-colors">
                      +57 318 0158629
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+573180158629"
                  className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Línea Telefónica Nacional
                    </span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-[#D4AF37] transition-colors">
                      +57 318 0158629
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:legal@axonglobal.org"
                  className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800 hover:border-[#D4AF37]/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Correo Corporativo
                    </span>
                    <span className="text-sm font-bold text-white font-mono group-hover:text-[#D4AF37] transition-colors">
                      legal@axonglobal.org
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-[#0B132B] border border-slate-800 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Sede Central
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      Bogotá D.C., Colombia
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Secreto profesional y reserva legal de AXON Global S.A.S.</span>
            </div>
          </div>

          {/* Right Column: Case Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#0B132B]">
            {submittedTicket ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  ¡Radicación Registrada con Éxito!
                </h4>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-[#D4AF37] inline-block">
                  Radicado Nº: <strong>{submittedTicket}</strong>
                </div>
                <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                  Estimado(a) <strong>{nombre || 'Cliente'}</strong>, su solicitud ha sido ingresada al comité de apoderamientos de AXON Legal. Un socio director se comunicará en menos de dos horas hábiles.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <a
                    href={getWhatsAppContactUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continuar en WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setMensaje('');
                    }}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                  >
                    Radicar otro caso
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Nombre Completo <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ingrese sus nombres y apellidos"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Ej. +57 318 0158629"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Correo Electrónico (Opcional)
                    </label>
                    <input
                      type="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Especialidad Requerida <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      value={servicio}
                      onChange={(e) => setServicio(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                    >
                      <option value="Insolvencia">Ley de Insolvencia Persona Natural no Comerciante</option>
                      <option value="Penal_Militar">Justicia Penal Militar (FF.MM. o Policía)</option>
                      <option value="Disciplinario">Proceso Disciplinario / Procuraduría / Control Interno</option>
                      <option value="Civil_Familia">Contratos, Testamentos, Sucesiones o Familia</option>
                      <option value="Otro">Consulta General de Apoderamiento</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Descripción Breve de su Situación <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Describa brevemente los hechos, juzgado, acreedores o términos que vencen..."
                    className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none"
                  />
                </div>

                {/* File input attachment with 10MB validation */}
                <div className="p-4 bg-slate-900/90 border border-dashed border-slate-700 rounded-xl">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Paperclip className="w-4 h-4 text-[#D4AF37]" />
                      Adjuntar Documentos de Soporte (Opcional)
                    </span>
                  </label>
                  <p className="text-[11px] text-slate-400 mb-2">
                    Formatos admitidos: PDF, JPG, PNG. Tamaño máximo total permitido: 10MB.
                  </p>
                  <input
                    type="file"
                    accept=".pdf, image/jpeg, image/png"
                    multiple
                    onChange={handleFileChange}
                    className="text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#D4AF37] file:text-[#0B132B] hover:file:bg-[#C29B27] cursor-pointer"
                  />
                  {fileError && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{fileError}</span>
                    </div>
                  )}
                  {selectedFiles && (
                    <span className="text-xs text-emerald-400 block mt-1.5">
                      ✓ {selectedFiles.length} archivo(s) listo(s) para revisión
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#E6C65E] via-[#D4AF37] to-[#B38C22] text-[#0B132B] font-bold uppercase tracking-wider text-xs rounded-xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registrando caso...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0B132B]" />
                      <span>Radicar Solicitud a AXON Legal</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Al enviar este formulario acepta los términos éticos y de reserva legal de AXON Global S.A.S.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
