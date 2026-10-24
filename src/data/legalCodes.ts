import { LegalCode, BankAccount } from '../types';

export const LEGAL_CODES: LegalCode[] = [
  {
    id: 'cpm',
    name: 'Código Penal Militar',
    category: 'militar',
    year: 'Ley 1407 de 2010',
    description: 'Régimen punitivo especial aplicable a los miembros de la Fuerza Pública (Ejército, Armada, Fuerza Aérea y Policía Nacional) en actos relacionados con el servicio militar o policial.',
    keyArticles: ['Art. 1: Principios rectores', 'Art. 2: Delito relacionado con el servicio', 'Art. 93: Abandono del puesto', 'Art. 96: Desobediencia']
  },
  {
    id: 'cc',
    name: 'Código Civil Colombiano',
    category: 'civil',
    year: 'Ley 84 de 1873 / Reformas',
    description: 'Estatuto matriz que regula los derechos de las personas, obligaciones, contratos, bienes, sucesiones, testamentos y régimen de propiedad en Colombia.',
    keyArticles: ['Art. 1008 y ss.: Sucesión por causa de muerte', 'Art. 1494: De las obligaciones en general', 'Art. 1602: El contrato es ley para las partes']
  },
  {
    id: 'cgp',
    name: 'Código General del Proceso',
    category: 'civil',
    year: 'Ley 1564 de 2012',
    description: 'Norma procesal civil, comercial y de familia. Incluye el Título IV con el régimen de Insolvencia de la Persona Natural No Comerciante (Arts. 538 al 576).',
    keyArticles: ['Art. 538: Supuestos de la insolvencia', 'Art. 545: Efectos de la aceptación de la solicitud', 'Art. 563: Liquidación patrimonial']
  },
  {
    id: 'cp',
    name: 'Código Penal Colombiano',
    category: 'penal',
    year: 'Ley 599 de 2000',
    description: 'Catálogo de conductas punibles ordinarias, penas principales, medidas de seguridad y circunstancias de agravación o atenuación punitiva.',
    keyArticles: ['Art. 9: Conducta punible', 'Art. 22: Dolo', 'Art. 23: Culpa', 'Art. 32: Ausencia de responsabilidad']
  },
  {
    id: 'cpp',
    name: 'Código de Procedimiento Penal',
    category: 'penal',
    year: 'Ley 906 de 2004',
    description: 'Sistema penal acusatorio oral en Colombia. Regula indagación, imputación, acusación, juicio oral, medidas de aseguramiento y recursos.',
    keyArticles: ['Art. 8: Garantías de la defensa', 'Art. 286: Audiencia de imputación', 'Art. 308: Requisitos para medida de aseguramiento']
  },
  {
    id: 'ccom',
    name: 'Código de Comercio',
    category: 'civil',
    year: 'Decreto 410 de 1971',
    description: 'Regulación de los actos y contratos mercantiles, sociedades comerciales, títulos valores (letras, pagarés, cheques) y títulos de crédito.',
    keyArticles: ['Art. 20: Actos mercantiles', 'Art. 619: De los títulos valores', 'Art. 793: Prescripción de acciones cambiarias']
  },
  {
    id: 'cnpc',
    name: 'Código Nal. de Policía y Convivencia',
    category: 'militar',
    year: 'Ley 1801 de 2016',
    description: 'Disposiciones orientadas a la convivencia pacífica, facultades de la Policía Nacional, órdenes de comparendo y medios materiales e inmateriales de policía.',
    keyArticles: ['Art. 149: Medios de policía', 'Art. 150: Orden de policía', 'Art. 218: Proceso verbal abreviado']
  },
  {
    id: 'cnt',
    name: 'Código Nal. de Tránsito Terrestre',
    category: 'publico',
    year: 'Ley 769 de 2002',
    description: 'Regula la circulación de peatones, usuarios, pasajeros, conductores, motociclistas, ciclistas y vehículos por las vías públicas o privadas abiertas al público.',
    keyArticles: ['Art. 131: Multas e infracciones', 'Art. 135: Procedimiento ante comparendos', 'Art. 159: Caducidad y prescripción']
  },
  {
    id: 'cia',
    name: 'Código de la Infancia y la Adolescencia',
    category: 'civil',
    year: 'Ley 1098 de 2006',
    description: 'Garantiza a los niños, niñas y adolescentes su pleno desarrollo armónico, derechos de custodia, alimentos, patria potestad y responsabilidad penal juvenil.',
    keyArticles: ['Art. 24: Derecho a los alimentos', 'Art. 111: Fijación provisional de alimentos', 'Art. 129: Medidas cautelares']
  },
  {
    id: 'cca',
    name: 'Código Contencioso Administrativo (Histórico)',
    category: 'publico',
    year: 'Decreto 01 de 1984',
    description: 'Norma previa procesal para litigios contra el Estado colombiano, relevante para el análisis de jurisprudencia y casos en transición de tutela y reparación.',
    keyArticles: ['Acción de nulidad y restablecimiento', 'Reparación directa por falla del servicio']
  },
  {
    id: 'cpaca',
    name: 'Código de Proc. Administrativo (CPACA)',
    category: 'publico',
    year: 'Ley 1437 de 2011 / Ley 2080',
    description: 'Regula las relaciones entre los ciudadanos y la administración pública, derechos de petición, recursos en vía administrativa, demandas contra el Estado y Consejo de Estado.',
    keyArticles: ['Art. 13: Derecho de petición', 'Art. 138: Nulidad y restablecimiento del derecho', 'Art. 140: Reparación directa']
  },
  {
    id: 'cminas',
    name: 'Código de Minas',
    category: 'publico',
    year: 'Ley 685 de 2001',
    description: 'Rige las relaciones jurídicas del Estado con los particulares en exploración y explotación de recursos mineros y concesiones.',
    keyArticles: ['Art. 14: Título minero', 'Art. 45: Contrato de concesión', 'Art. 249: Servidumbres mineras']
  },
  {
    id: 'cdu',
    name: 'Código General Disciplinario',
    category: 'militar',
    year: 'Ley 1952 de 2019 / Ley 2094 de 2021',
    description: 'Estatuto disciplinario de los servidores públicos de Colombia, régimen de faltas leves, graves y gravísimas, y procedimiento ante la Procuraduría.',
    keyArticles: ['Art. 26: Formas de culpabilidad (dolo y culpa)', 'Art. 54: Faltas gravísimas', 'Art. 211: Notificación del pliego de cargos']
  },
  {
    id: 'cst',
    name: 'Código Sustantivo del Trabajo',
    category: 'laboral',
    year: 'Decreto Ley 2663 de 1950',
    description: 'Relaciones de derecho individual del trabajo entre empleadores y trabajadores particulares, salarios, prestaciones sociales, fueros y despidos.',
    keyArticles: ['Art. 23: Elementos del contrato de trabajo', 'Art. 64: Indemnización por despido sin justa causa', 'Art. 154: Inembargabilidad del salario mínimo']
  },
  {
    id: 'cpt',
    name: 'Código Procesal del Trabajo y Seg. Social',
    category: 'laboral',
    year: 'Decreto Ley 2158 de 1948 / Actualizaciones',
    description: 'Procedimiento judicial en litigios laborales y pensionales ante los Juzgados de Circuito Laboral y Salas Laborales de Tribunales y Corte Suprema.',
    keyArticles: ['Art. 25: Forma y contenido de la demanda', 'Art. 77: Audiencia de conciliación y saneamiento']
  },
  {
    id: 'ce',
    name: 'Código Electoral Colombiano',
    category: 'publico',
    year: 'Decreto 2241 de 1986 / Normativa vigente',
    description: 'Estructura electoral de la Registraduría Nacional del Estado Civil, elecciones de corporaciones públicas, inscripción de cédulas y escrutinios.',
    keyArticles: ['Art. 1: Garantías del sufragio', 'Art. 164: Reclamaciones ante jurados de votación']
  },
  {
    id: 'cpcpenit',
    name: 'Código Penitenciario y Carcelario',
    category: 'penal',
    year: 'Ley 65 de 1993 / Ley 1709 de 2014',
    description: 'Normas sobre reclusión penitenciaria, derechos de las personas privadas de la libertad, régimen de beneficios administrativos y centros de detención militar.',
    keyArticles: ['Art. 9: Respeto a la dignidad humana', 'Art. 27: Centros de reclusión para miembros de la Fuerza Pública']
  },
  {
    id: 'csn',
    name: 'Código Sanitario Nacional',
    category: 'publico',
    year: 'Ley 9 de 1979',
    description: 'Regulaciones para la protección del medio ambiente de trabajo, alimentos, fármacos, vigilancia epidemiológica y salud pública.',
    keyArticles: ['Art. 80: De la salud ocupacional', 'Art. 576: Medidas sanitarias de seguridad']
  },
  {
    id: 'crn',
    name: 'Código Nal. de Recursos Naturales y del Medio Ambiente',
    category: 'publico',
    year: 'Decreto Ley 2811 de 1974',
    description: 'Protección ecológica integral, uso de aguas no marítimas, calidad del aire, flora, fauna terrestre y régimen sancionatorio ambiental.',
    keyArticles: ['Art. 1: El ambiente como patrimonio común', 'Art. 8: Factores de deterioro ambiental']
  },
  {
    id: 'crd',
    name: 'Código de Régimen Departamental',
    category: 'publico',
    year: 'Decreto 1222 de 1986',
    description: 'Organización política, administrativa y fiscal de los departamentos de Colombia, atribuciones de asambleas departamentales y gobernadores.',
    keyArticles: ['Competencias de los entes territoriales de segundo nivel']
  },
  {
    id: 'crm',
    name: 'Código de Régimen Municipal',
    category: 'publico',
    year: 'Decreto 1333 de 1986 / Ley 136 de 1994',
    description: 'Estatuto de organización, funciones, concejos municipales, alcaldes y servicios públicos descentralizados a nivel territorial.',
    keyArticles: ['Art. 91: Funciones del alcalde municipal como primera autoridad de policía local']
  },
  {
    id: 'cpciv_hist',
    name: 'Código de Procedimiento Civil (Histórico)',
    category: 'civil',
    year: 'Decreto 1400 de 1970',
    description: 'Cuerpo normativo procesal previo al Código General del Proceso, fundamental en la interpretación de procesos civiles en liquidación o títulos emitidos con anterioridad.',
    keyArticles: ['Reglas históricas de ejecución forzosa y remates de bienes']
  },
  {
    id: 'cmenor',
    name: 'Código del Menor (Histórico)',
    category: 'civil',
    year: 'Decreto 2737 de 1989',
    description: 'Marco histórico de protección especial al menor de edad en Colombia previo a la entrada en vigor de la Ley 1098 de 2006.',
    keyArticles: ['Doctrina de la situación irregular y protección tutelar del menor']
  },
  {
    id: 'const',
    name: 'Constitución Política de Colombia',
    category: 'publico',
    year: '1991 / Reformas',
    description: 'Norma de normas superior. Fundamento de la Acción de Tutela (Art. 86), Habeas Corpus, Debido Proceso (Art. 29) y Fuero Penal Militar (Art. 221).',
    keyArticles: ['Art. 29: Debido proceso administrativo y judicial', 'Art. 86: Acción de tutela preferente y sumaria', 'Art. 221: Fuero penal militar para miembros de la Fuerza Pública']
  },
  {
    id: 'etn',
    name: 'Estatuto Tributario Nacional',
    category: 'civil',
    year: 'Decreto 624 de 1989 / Reformas DIAN',
    description: 'Normativa impositiva sobre impuesto de renta, IVA, retención en la fuente, procedimiento de cobro coactivo de la DIAN y régimen sancionatorio tributario.',
    keyArticles: ['Art. 823 y ss.: Procedimiento administrativo coactivo de cobro', 'Art. 837: Embargo y secuestro de bienes']
  }
];

export const PAYMENT_METHODS: BankAccount[] = [
  {
    id: 'bancolombia',
    name: 'Bancolombia',
    type: 'Cuenta de Ahorros / Bre-B',
    key: '@inversionessyt',
    qrImage: '/assets/aistudio/WhatsApp_Image_2026-09-22_at_3.10.04_PM_4824cbca.jpeg',
    holder: 'Inversiones Syt (Titular Autorizado AXON)',
    instructions: 'Transfiere fácil y al instante desde la App Bancolombia o cualquier entidad financiera colombiana mediante la llave Bre-B.'
  },
  {
    id: 'nequi',
    name: 'Nequi',
    type: 'Billetera Digital / Bre-B',
    key: '3024979668',
    phone: '302 497 9668',
    qrImage: '/assets/aistudio/WhatsApp_Image_2026-09-22_at_3.08.08_PM_538c9633.jpeg',
    holder: 'Cuenta Nequi Oficial AXON',
    instructions: 'Envía desde tu app Nequi escaneando el código QR o ingresando al número de celular 302 497 9668.'
  },
  {
    id: 'davivienda',
    name: 'DaviPlata / Davivienda',
    type: 'Billetera Digital / Bre-B',
    key: '@PLATA3025186263',
    qrImage: '/assets/aistudio/_Escanea_este_QR_desde_tu_banco_o_billetera_digital_para_Pasarme_Plata__64a48ef8.pdf',
    holder: 'DaviPlata Autorizado AXON',
    instructions: 'Escanea el QR DaviPlata Bre-B desde Davivienda, DaviPlata o cualquier banco aliado con la llave @PLATA3025186263.'
  },
  {
    id: 'popular',
    name: 'Banco Popular (Grupo Aval)',
    type: 'Bre-B Interbancario',
    key: '@BPJSC721',
    qrImage: '/assets/aistudio/WhatsApp_Image_2026-09-22_at_3.06.18_PM_596cf71f.jpeg',
    holder: 'Banco Popular AXON Bre-B',
    instructions: 'Transfiere desde cualquier banco de Colombia escaneando el código QR Bre-B con la llave @BPJSC721.'
  }
];
