/**
 * Dedicated data for System Architecture, AI/RAG, and Current Research (AstroVastu).
 */
export const grahavaniServices = [
  { name: 'API Gateway', port: '8080', role: 'Central request routing & entry point' },
  { name: 'Authentication', port: '3001', role: 'JWT issuance & access verification' },
  { name: 'User Service', port: '3002', role: 'Profiles, roles & account data' },
  { name: 'Client Service', port: '3008', role: 'Client records & astrologer workspace' },
  { name: 'Learning Service', port: '3013', role: 'LMS tiers, modules, MCQs & mastery' },
  { name: 'Astro Proxy', port: '3014', role: 'Calculation & astrology service proxy' },
];

export const aiIntegrationHighlights = [
  {
    title: 'Acharya Gautam AI Tutor (Grahavani)',
    points: [
      'Google Gemini API integration with Socratic learning guardrails',
      'Retrieval-Augmented Generation (RAG) powered by PostgreSQL + pgvector',
      'Semantic caching, suggested questions, and Text-to-Speech (TTS) workflows',
    ],
  },
  {
    title: 'Dual-LLM Backend (Astro Ratan)',
    points: [
      'Python FastAPI backend integrating OpenAI GPT-4o mini & Gemini 2.5 Flash-Lite',
      'AI response troubleshooting, prompt/API debugging, and production maintenance',
    ],
  },
];

export const astroVastuResearch = {
  title: 'Current Research & Exploration – AstroVastu',
  status: 'Research / Exploration (Not a completed production project)',
  statement:
    'Currently exploring and researching Python-based geometric and spatial analysis techniques for an AstroVastu application, including floor-plan processing, directional analysis, and application architecture.',
  areas: [
    'Vastu Shastra directional & building orientation concepts',
    'Floor-plan geometric processing with Python Shapely & NumPy',
    'Spatial calculations and competitor workflow analysis',
    'FastAPI backend & frontend architecture planning',
  ],
  tech: ['Python', 'Shapely', 'NumPy', 'FastAPI (Exploration)', 'Spatial Geometry'],
};
