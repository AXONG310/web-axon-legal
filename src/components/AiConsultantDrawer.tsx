import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Shield, ArrowUpRight, Sparkles, User, RefreshCw, MessageCircle, AlertCircle, Copy, Check, Cloud, FileText, ExternalLink } from 'lucide-react';
import { ChatMessage } from '../types';

interface AiConsultantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPayments: () => void;
}

const STARTER_PROMPTS = [
  "Tengo deudas bancarias y me notificaron embargo de salario",
  "Soy militar y tengo una investigación en la Justicia Penal Militar",
  "Tengo pliego de cargos disciplinarios en la Procuraduría",
  "Quiero organizar una sucesión o liquidar sociedad conyugal",
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-1',
  role: 'assistant',
  content: `¡Bienvenido(a) a **AXON Legal**! Soy la **Dra. Andrea Morales**, Directora de Consultoría Estratégica de la firma.

Nuestra misión es proteger su patrimonio, su carrera y su tranquilidad jurídica con el máximo rigor de la ley colombiana.

¿Cuál es la situación jurídica que enfrenta hoy? Si gusta, puede seleccionar una de las opciones rápidas abajo o explicarme directamente los hechos.`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

export const AiConsultantDrawer: React.FC<AiConsultantDrawerProps> = ({ isOpen, onClose, onOpenPayments }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [showVertexInfo, setShowVertexInfo] = useState(false);
  const [vertexStatus, setVertexStatus] = useState<{
    configured: boolean;
    projectId: string | null;
    location: string;
    activeEngine: string;
    hasAgentId: boolean;
    hasDatastoreId: boolean;
  } | null>(null);

  const sessionIdRef = useRef<string>(`axon-session-${Math.random().toString(36).substring(2, 10)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check Vertex AI configuration status
  useEffect(() => {
    fetch('/api/vertex-status')
      .then((res) => res.json())
      .then((data) => setVertexStatus(data))
      .catch((err) => console.warn('Could not fetch Vertex status:', err));
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const conversationHistory = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      let botReply = '';
      let botEngine: 'vertex-agent-builder' | 'gemini' | 'legal-fallback' = 'gemini';
      let botSources: Array<{ title?: string; uri?: string }> | undefined = undefined;

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: conversationHistory,
            sessionId: sessionIdRef.current,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.reply === 'string' && data.reply.trim().length > 0) {
            botReply = data.reply;
            botEngine = data.engine || 'gemini';
            botSources = data.sources;
          }
        }
      } catch (fetchErr) {
        console.warn('Network issue calling /api/chat:', fetchErr);
      }

      if (!botReply) {
        botReply = `Hemos registrado los detalles preliminares de su caso bajo absoluta reserva legal. Para garantizar la protección inmediata de sus términos legales o suspender cualquier medida cautelar en curso, le sugiero continuar de inmediato vía WhatsApp oficial con nuestros socios directores: **+57 318 0158629**.`;
        botEngine = 'legal-fallback';
      }

      const assistantMsg: ChatMessage = {
        id: `ast-${Date.now()}`,
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        engine: botEngine,
        sources: botSources,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.warn('Asistente manejó la respuesta:', err);
      const fallbackMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `Hemos registrado los detalles preliminares de su caso. Para garantizar la protección inmediata de sus términos legales o suspender cualquier diligencia en curso, le sugiero continuar de inmediato vía WhatsApp oficial con nuestros socios directores: **+57 318 0158629**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        engine: 'legal-fallback',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    sessionIdRef.current = `axon-session-${Math.random().toString(36).substring(2, 10)}`;
    setMessages([INITIAL_MESSAGE]);
  };

  // Generate WhatsApp handover text
  const generateWhatsAppLink = () => {
    const summary = messages
      .filter((m) => m.role === 'user')
      .map((m) => m.content)
      .join(' | ');

    const text = encodeURIComponent(
      `Hola AXON Legal, estuve en su plataforma web con la Dra. Andrea Morales. Deseo agendar una Valoración Jurídica Prioritaria para mi caso:\n"${summary.slice(0, 300)}"`
    );
    return `https://wa.me/573180158629?text=${text}`;
  };

  const handleCopySummary = () => {
    const fullText = messages.map((m) => `[${m.role.toUpperCase()}]: ${m.content}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl h-full bg-[#0B132B] border-l border-slate-700/80 shadow-2xl flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[#070B14] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-200 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0F172A] rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0B132B] rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">Dra. Andrea Morales</h3>
                <span className="text-[10px] font-semibold text-[#D4AF37] border border-[#D4AF37]/30 px-1.5 py-0.5 rounded">AXON Legal</span>
              </div>
              <p className="text-xs text-slate-400">Directora Senior de Consultoría Jurídica</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Google Cloud / Vertex AI Agent Builder Status Badge */}
            <button
              onClick={() => setShowVertexInfo(true)}
              className="flex items-center gap-1.5 text-[11px] bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="Ver configuración de Vertex AI Agent Builder"
            >
              <Cloud className={`w-3.5 h-3.5 ${vertexStatus?.configured ? 'text-emerald-400' : 'text-amber-400'}`} />
              <span className="hidden sm:inline">
                {vertexStatus?.configured ? 'Vertex AI Activo' : 'Vertex AI Ready'}
              </span>
            </button>

            <button
              onClick={handleResetChat}
              title="Reiniciar conversación"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Cerrar asistente"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Security & Confidentiality Banner */}
        <div className="px-6 py-2.5 bg-amber-950/20 border-b border-amber-900/30 flex items-center justify-between text-xs text-amber-200/90">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Conversación amparada bajo secreto profesional corporativo</span>
          </div>
          <button 
            onClick={handleCopySummary}
            className="text-[11px] hover:underline flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer"
          >
            {hasCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{hasCopied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-[#1C2541] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-[#D4AF37]" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#1C2541] text-white border border-slate-700 shadow-md'
                    : 'bg-[#0F172A] text-slate-200 border border-slate-800 shadow-lg'
                }`}
              >
                {/* Engine indicator tag if from Vertex AI */}
                {msg.role === 'assistant' && msg.engine === 'vertex-agent-builder' && (
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mb-2 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded w-fit">
                    <Cloud className="w-3 h-3" />
                    <span>Vertex AI Agent Builder (Documentos de Empresa)</span>
                  </div>
                )}

                <div className="whitespace-pre-wrap space-y-2">
                  {msg.content.split('\n\n').map((paragraph, idx) => {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={idx} className="text-slate-200">
                        {parts.map((part, pIdx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={pIdx} className="font-semibold text-white text-[#F3E8B5]">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  })}
                </div>

                {/* Document Sources Cited from Vertex Data Store */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="font-semibold text-amber-300 flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Fuentes y documentos citados:
                    </span>
                    <ul className="space-y-0.5 pl-3 list-disc">
                      {msg.sources.map((src, sIdx) => (
                        <li key={sIdx}>
                          {src.uri ? (
                            <a href={src.uri} target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:underline">
                              {src.title || src.uri}
                            </a>
                          ) : (
                            <span>{src.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <span className="block text-[10px] text-slate-500 text-right mt-1.5 font-mono">
                  {msg.timestamp}
                </span>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4 text-slate-300" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-slate-400 text-xs py-2">
              <div className="w-8 h-8 rounded-full bg-[#1C2541] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="flex items-center gap-1.5 bg-[#0F172A] border border-slate-800 px-4 py-2.5 rounded-2xl">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" />
                <span className="ml-2 text-slate-400">Analizando marco procesal aplicable...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick starter chips (if initial state or few messages) */}
        {messages.length <= 3 && !isLoading && (
          <div className="px-6 py-2 border-t border-slate-800/80 bg-[#080E1C]">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Consultas Frecuentes de Alto Impacto:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-left text-xs bg-slate-900 hover:bg-[#1C2541] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Conversion Bar (Direct WhatsApp & Payment) */}
        <div className="px-6 py-3 bg-[#0A101F] border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Formalizar Caso en WhatsApp (+57 318 0158629)</span>
          </a>

          <button
            onClick={onOpenPayments}
            className="bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold py-2.5 px-3 rounded-lg border border-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ver Pasarela Bre-B</span>
          </button>
        </div>

        {/* Text Input Area */}
        <div className="p-4 bg-[#070B14] border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2"
          >
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describa su situación jurídica aquí (ej. embargos, proceso penal militar, disciplinario)..."
              rows={2}
              className="flex-1 bg-[#0F172A] text-white placeholder-slate-500 text-sm rounded-xl p-3 border border-slate-700 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-3 bg-[#D4AF37] hover:bg-[#C29B27] disabled:opacity-40 disabled:cursor-not-allowed text-[#0B132B] font-bold rounded-xl shadow-lg transition-all cursor-pointer shrink-0"
              title="Enviar consulta"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 px-1">
            <span>Presione Enter para enviar · Shift + Enter para salto de línea</span>
            <span className="text-amber-400 font-medium">AXON Legal S.A.S.</span>
          </div>
        </div>

      </div>

      {/* Vertex AI Agent Builder Integration Modal */}
      {showVertexInfo && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B132B] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl text-slate-100 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowVertexInfo(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Vertex AI Agent Builder</h4>
                <p className="text-xs text-amber-300">Despliegue y Entrenamiento en Google Cloud</p>
              </div>
            </div>

            {/* Connection Status Card */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 mb-5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400">Estado del Conector:</span>
                <span className={`font-bold px-2 py-0.5 rounded ${vertexStatus?.configured ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}`}>
                  {vertexStatus?.configured ? 'Conectado a Vertex Cloud' : 'Híbrido (Gemini Activo / Vertex Ready)'}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {vertexStatus?.configured
                  ? `Conectado al proyecto GCP ${vertexStatus.projectId} (${vertexStatus.location}). Los mensajes se responden con la información de tus documentos.`
                  : 'El servidor ya tiene integrado el conector de Vertex AI Agent Builder. Al desplegar en Google Cloud Run y configurar las variables de entorno, responderá con tus documentos entrenados automáticamente.'}
              </p>
            </div>

            {/* Step-by-Step Training Guide */}
            <div className="space-y-4 text-xs text-slate-300 mb-6">
              <h5 className="font-bold text-sm text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> Cómo entrenar tu agente en Google Cloud:
              </h5>

              <div className="space-y-3">
                <div className="bg-[#070B14] p-3 rounded-xl border border-slate-800">
                  <p className="font-bold text-white mb-1">1. Crear la App en Google Cloud Console</p>
                  <p className="text-slate-400">
                    Ingresa a <strong>Google Cloud Console &gt; Vertex AI &gt; Agent Builder</strong> y haz clic en <em>Crear aplicación</em> (Tipo <strong>Chat / Conversational</strong> o <strong>Search</strong>).
                  </p>
                </div>

                <div className="bg-[#070B14] p-3 rounded-xl border border-slate-800">
                  <p className="font-bold text-white mb-1">2. Crear el Data Store y Subir tus Documentos</p>
                  <p className="text-slate-400">
                    Selecciona <strong>Data Stores</strong> y sube los archivos de AXON Legal (PDFs con jurisprudencia colombiana, códigos legales, folletos de tarifas o minutas de contrato). Vertex indexará y aprenderá su contenido.
                  </p>
                </div>

                <div className="bg-[#070B14] p-3 rounded-xl border border-slate-800">
                  <p className="font-bold text-white mb-1">3. Configurar Variables en Cloud Run</p>
                  <p className="text-slate-400 mb-2">
                    En el despliegue de Cloud Run, añade las variables de entorno:
                  </p>
                  <pre className="bg-black/60 p-2.5 rounded text-[11px] font-mono text-emerald-400 overflow-x-auto border border-slate-800">
VERTEX_PROJECT_ID="tu-proyecto-gcp"&#10;VERTEX_LOCATION="global"&#10;VERTEX_AGENT_ID="id-de-tu-agente"&#10;VERTEX_DATASTORE_ID="id-del-datastore"
                  </pre>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setShowVertexInfo(false)}
                className="bg-[#D4AF37] hover:bg-[#C29B27] text-[#0B132B] font-bold text-xs py-2 px-5 rounded-xl transition cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
