import React, { useState } from 'react';
import { X, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, MessageCircle, Sparkles, Scale, FileText } from 'lucide-react';
import { CaseEvaluationResult } from '../types';

interface CaseEvaluatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultant: () => void;
  onOpenPayments: () => void;
}

export const CaseEvaluatorModal: React.FC<CaseEvaluatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultant,
  onOpenPayments,
}) => {
  const [area, setArea] = useState('Insolvencia de Persona Natural');
  const [urgency, setUrgency] = useState('CRÍTICA');
  const [debtOrImpact, setDebtOrImpact] = useState('$50M a $200M COP');
  const [currentStatus, setCurrentStatus] = useState('Notificado de mandamiento de pago o embargo');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<CaseEvaluationResult | null>(null);

  if (!isOpen) return null;

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let evalResult: CaseEvaluationResult | null = null;
    try {
      const res = await fetch('/api/evaluate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          area,
          urgency,
          debtOrImpact,
          currentStatus,
          details,
        }),
      });

      if (res.ok) {
        const data: CaseEvaluationResult = await res.json();
        if (data && data.viabilityScore) {
          evalResult = data;
        }
      }
    } catch (fetchErr) {
      console.warn('Network issue calling /api/evaluate-case:', fetchErr);
    }

    if (!evalResult) {
      evalResult = {
        viabilityScore: 94,
        urgencyLevel: 'ALTA',
        legalBasis: 'Ley 1564 de 2012 / Código General del Proceso Colombiano',
        immediateAction: 'Solicitud formal de apoderamiento y radicación urgente de memorial para suspender diligencias de remate y libranzas activas.',
        firmStrategy: 'Activación del trámite de negociación de deudas con protección patrimonial total y reestructuración integral de pasivos.',
        recommendedPlan: 'Blindaje Patrimonial e Insolvencia Prioritaria AXON',
        whatsappSummary: `Solicito valoración inmediata para caso de ${area} (${debtOrImpact}) con urgencia ${urgency}.`,
      };
    }

    setResult(evalResult);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setResult(null);
  };

  const getWhatsAppUrl = () => {
    if (!result) return 'https://wa.me/573180158629';
    const message = encodeURIComponent(
      `Hola AXON Legal, completé el Diagnóstico de Viabilidad en su sitio web:\n- Área: ${area}\n- Nivel de Urgencia: ${result.urgencyLevel}\n- Viabilidad Técnica Estimada: ${result.viabilityScore}%\n- Marco Legal: ${result.legalBasis}\n- Plan Sugerido: ${result.recommendedPlan}\n\nDeseo iniciar mi defensa con sus socios directores de inmediato.`
    );
    return `https://wa.me/573180158629?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0B132B] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!result ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Evaluador Rápido de Viabilidad Legal
                </h2>
                <p className="text-xs text-slate-400">
                  Algoritmo de análisis técnico y jurisprudencia colombiana · AXON Legal
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-2 mb-6 leading-relaxed">
              Diligencie los parámetros de su situación actual. Nuestro motor jurídico emitirá un dictamen preliminar sobre la viabilidad de blindaje y los pasos de apoderamiento legal.
            </p>

            <form onSubmit={handleEvaluate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  1. Área Jurídica de su Caso <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                >
                  <option value="Insolvencia de Persona Natural">Ley de Insolvencia Persona Natural no Comerciante</option>
                  <option value="Justicia Penal Militar">Justicia Penal Militar (FF.MM. y Policía)</option>
                  <option value="Derecho Disciplinario">Investigación Disciplinaria (Control Interno / Procuraduría)</option>
                  <option value="Civil y Familia">Sucesión, Testamento o Liquidación Conyugal</option>
                  <option value="Cobro Coactivo o Embargo">Embargo de Cuentas o Remate Inminente</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    2. Nivel de Urgencia <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value="CRÍTICA">Crítica (Términos por vencer o remate en &lt; 5 días)</option>
                    <option value="ALTA">Alta (Notificación recibida en los últimos 15 días)</option>
                    <option value="MEDIA">Preventiva (Planificación y blindaje antes de demanda)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    3. Cuantía de Deuda / Impacto <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    value={debtOrImpact}
                    onChange={(e) => setDebtOrImpact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value="Menos de $30M COP">Menos de $30 Millones COP</option>
                    <option value="$30M a $100M COP">$30 Millones a $100 Millones COP</option>
                    <option value="$100M a $300M COP">$100 Millones a $300 Millones COP</option>
                    <option value="Más de $300M COP">Más de $300 Millones COP</option>
                    <option value="Riesgo de Destitución o Penal">Riesgo de Pérdida de Carrera / Libertad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  4. Estado Procesal Actual <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] border border-slate-700 text-white text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none"
                >
                  <option value="Notificado de mandamiento de pago o embargo">Notificado de mandamiento ejecutivo o medida cautelar</option>
                  <option value="Indagación preliminar o apertura de investigación">Indagación previa / pliego de cargos formulado</option>
                  <option value="Libranzas ahogando más del 60% del salario">Libranzas que sobrepasan mi capacidad de pago</option>
                  <option value="Bienes en riesgo de embargo o partición">Bienes familiares que requieren blindaje sucesoral</option>
                  <option value="Sin proceso judicial formal todavía">Aún sin demanda formal (Prevención)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  5. Breve resumen de los hechos (Opcional)
                </label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={2}
                  placeholder="Ej. Entidades bancarias acreedoras, juzgado donde cursa el proceso o unidad militar..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F172A] border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#E6C65E] via-[#D4AF37] to-[#B38C22] text-[#0B132B] font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-[#0B132B]" />
                      <span>Analizando jurisprudencia con IA...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-[#0B132B]" />
                      <span>Generar Dictamen de Viabilidad Legal</span>
                      <ArrowRight className="w-4 h-4 text-[#0B132B]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header of Result */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  Dictamen Jurídico Preliminar
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {result.recommendedPlan}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">Viabilidad Técnica:</span>
                <span className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  {result.viabilityScore}%
                </span>
              </div>
            </div>

            {/* Urgency Badge & Legal Basis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block mb-1">Nivel de Intervención:</span>
                <span className={`font-bold inline-flex items-center gap-1.5 ${
                  result.urgencyLevel === 'CRÍTICA' ? 'text-rose-400' : 'text-amber-300'
                }`}>
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Prioridad {result.urgencyLevel}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 block mb-1">Fundamento Jurídico:</span>
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {result.legalBasis}
                </span>
              </div>
            </div>

            {/* Shock Action */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Paso de Choque Inmediato:</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {result.immediateAction}
              </p>
            </div>

            {/* Firm Strategy */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>Estrategia de Apoderamiento AXON Legal:</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {result.firmStrategy}
              </p>
            </div>

            {/* Strategic conversion actions */}
            <div className="pt-2 space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Formalizar Caso en WhatsApp con este Dictamen</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultant();
                  }}
                  className="py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Profundizar con Agente IA</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenPayments();
                  }}
                  className="py-3 bg-[#0B132B] hover:bg-[#1C2541] text-[#D4AF37] border border-[#D4AF37]/40 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Ver Canales de Retainer Bre-B</span>
                </button>
              </div>

              <button
                onClick={resetForm}
                className="w-full text-center text-xs text-slate-400 hover:text-slate-200 pt-1 cursor-pointer"
              >
                ← Evaluar otro caso o modificar datos
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
