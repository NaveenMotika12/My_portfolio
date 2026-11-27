/**
 * System Architecture, Implemented AI/RAG Workflows, and Active R&D (AstroVastu).
 */
export const grahavaniServices = [
  { name: 'API Gateway', layer: 'Edge', role: 'Centralized request routing, rate limiting & CORS' },
  { name: 'Auth Service', layer: 'Security', role: 'JWT token issuance & role-based access control' },
  { name: 'User Service', layer: 'Core', role: 'Account profiles, preferences & astrologer data' },
  { name: 'Client Service', layer: 'Domain', role: 'Client records, consultations & workspace data' },
  { name: 'Learning Service', layer: 'LMS', role: 'Tiers, modules, MCQs, gamification & mastery' },
  { name: 'Astro Proxy', layer: 'Compute', role: 'Bridge to astronomical & Vedic calculation engine' },
];

export const aiIntegrationHighlights = [
  {
    title: 'Acharya Gautam AI Tutor (Implemented in Grahavani)',
    points: [
      'Production Google Gemini API integration with Socratic learning guardrails',
      'End-to-end RAG pipeline backed by PostgreSQL + pgvector semantic retrieval',
      'Redis semantic caching, suggested follow-ups, and Text-to-Speech (TTS) audio',
    ],
  },
  {
    title: 'Dual-LLM Backend (Astro Ratan)',
    points: [
      'Python FastAPI service integrating OpenAI GPT-4o mini and Gemini 2.5 Flash-Lite',
      'Prompt orchestration, response troubleshooting, and production API maintenance',
    ],
  },
];

export const astroVastuResearch = {
  title: 'Active R&D – AstroVastu Spatial Analysis',
  status: 'Active Research & Architecture',
  statement:
    'Researching Python-based geometric and spatial computation for AstroVastu floor-plan processing, directional orientation mapping, and backend service architecture.',
  areas: [
    'Vastu Shastra directional & building orientation mapping',
    'Floor-plan polygon & point-in-polygon analysis with Shapely & NumPy',
    'Spatial zone calculations and coordinate geometry processing',
    'FastAPI service architecture and JSON serialization design',
  ],
  tech: ['Python', 'Shapely', 'NumPy', 'FastAPI', 'Spatial Geometry'],
};
