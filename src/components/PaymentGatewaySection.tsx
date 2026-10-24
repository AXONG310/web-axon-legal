import React, { useState } from 'react';
import { QrCode, Copy, Check, MessageCircle, ShieldCheck, CreditCard, Building2, Smartphone } from 'lucide-react';
import { PAYMENT_METHODS } from '../data/legalCodes';

export const PaymentGatewaySection: React.FC = () => {
  const [selectedBankId, setSelectedBankId] = useState('bancolombia');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const currentBank = PAYMENT_METHODS.find((b) => b.id === selectedBankId) || PAYMENT_METHODS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="pagos" className="py-24 bg-[#070B14] relative border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Dual Box Container */}
        <div className="bg-[#0B132B] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Side: Explanatory & Reassurance (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-gradient-to-br from-[#0B132B] to-[#111A38] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-amber-950/30 border border-amber-900/40 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Canales Oficiales y Verificados Bre-B</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pasarela de Pagos, Honorarios y Aportes
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Para formalizar la contratación de su defensa técnica, cubrir honorarios de apoderamiento o realizar aportes a nuestra labor social de democratización legal, AXON Legal dispone de canales bancarios integrados con la red <strong className="text-white font-semibold">Bre-B de Colombia</strong>.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CreditCard className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Transferencias instantáneas desde cualquier entidad bancaria</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soporte para Nequi, DaviPlata, Bancolombia y Grupo Aval</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Comprobante validado inmediatamente por la dirección financiera</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                href="https://wa.me/573180158629?text=Hola%20AXON%20Legal,%20adjunto%20mi%20comprobante%20de%20pago%20para%20radicaci%C3%B3n%20formal%20de%20mi%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notificar Pago / Enviar Voucher (+57 318 0158629)</span>
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Bank Tabs & QR Viewer (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#090E1F] flex flex-col items-center justify-center">
            
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Seleccione su Entidad Bancaria
            </h3>

            {/* Bank Tab Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mb-8">
              {PAYMENT_METHODS.map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => setSelectedBankId(bank.id)}
                  className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all text-center cursor-pointer flex flex-col items-center justify-center gap-1 ${
                    selectedBankId === bank.id
                      ? 'bg-[#D4AF37] text-[#0B132B] border-[#D4AF37] shadow-lg shadow-amber-950/40'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="truncate w-full">{bank.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Bank Card */}
            <div className="w-full max-w-sm bg-[#0B132B] border border-slate-800 rounded-2xl p-6 shadow-xl text-center flex flex-col items-center">
              
              {/* QR Image Display */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 bg-white p-3 rounded-2xl shadow-inner border border-slate-700 flex items-center justify-center overflow-hidden mb-5">
                {currentBank.id === 'davivienda' ? (
                  /* Davivienda QR from PDF preview */
                  <div className="w-full h-full bg-[#E31B23] rounded-xl p-3 flex flex-col items-center justify-between text-white text-center">
                    <div className="flex items-center justify-between w-full px-1">
                      <span className="font-extrabold text-sm tracking-wider">Bre-B</span>
                      <span className="text-[11px] font-bold">DaviPlata</span>
                    </div>
                    <div className="bg-white p-2 rounded-lg my-1">
                      <QrCode className="w-32 h-32 text-slate-900" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/90 block">Llave DaviPlata Bre-B:</span>
                      <span className="text-xs font-mono font-bold">@PLATA3025186263</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentBank.qrImage}
                    alt={`Código QR ${currentBank.name} AXON Legal`}
                    className="w-full h-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Bank Metadata & Key */}
              <div className="space-y-1 w-full">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                  {currentBank.type}
                </span>
                <h4 className="text-base font-bold text-white">
                  {currentBank.holder}
                </h4>

                <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2">
                  <div className="text-left overflow-hidden">
                    <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                      Llave Bre-B Oficial:
                    </span>
                    <span className="text-sm font-mono font-bold text-emerald-400 truncate block">
                      {currentBank.key}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(currentBank.key)}
                    className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#C29B27] text-[#0B132B] font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {copiedKey === currentBank.key ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                {currentBank.phone && (
                  <div className="p-2.5 mt-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Número Celular: <strong className="text-white font-mono">{currentBank.phone}</strong></span>
                    <button
                      onClick={() => handleCopy(currentBank.phone!)}
                      className="text-[11px] text-[#D4AF37] hover:underline cursor-pointer"
                    >
                      Copiar número
                    </button>
                  </div>
                )}
              </div>

              <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                {currentBank.instructions}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
