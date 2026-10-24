export type LegalArea = 
  | 'insolvencia'
  | 'penal_militar'
  | 'disciplinario'
  | 'civil_familia'
  | 'general';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  engine?: 'vertex-agent-builder' | 'gemini' | 'legal-fallback';
  sources?: Array<{ title?: string; uri?: string }>;
}

export interface LegalCode {
  id: string;
  name: string;
  category: 'militar' | 'civil' | 'laboral' | 'publico' | 'penal';
  description: string;
  year?: string;
  keyArticles: string[];
}

export interface CaseEvaluationResult {
  viabilityScore: number;
  urgencyLevel: 'ALTA' | 'CRÍTICA' | 'MEDIA';
  legalBasis: string;
  immediateAction: string;
  firmStrategy: string;
  recommendedPlan: string;
  whatsappSummary: string;
}

export interface BankAccount {
  id: string;
  name: string;
  type: string;
  key: string;
  phone?: string;
  qrImage: string;
  holder: string;
  instructions: string;
}
