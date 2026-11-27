/**
 * Master Technical Skills Inventory.
 * Combines core technologies with specific implementation skills and libraries.
 */
export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & React Development',
    icon: 'Layout',
    description: 'Building responsive, component-driven web and mobile interfaces.',
    skills: [
      { name: 'React.js', level: 'Hands-on' },
      { name: 'React Native', level: 'Feature Work' },
      { name: 'JavaScript (ES6+)', level: 'Hands-on' },
      { name: 'TypeScript', level: 'Hands-on' },
      { name: 'HTML5 & CSS3', level: 'Hands-on' },
      { name: 'JSX / TSX', level: 'Hands-on' },
      { name: 'Hooks, Props & State', level: 'Hands-on' },
      { name: 'Component Reusability', level: 'Hands-on' },
      { name: 'Form Validation & Dynamic UI', level: 'Hands-on' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend, APIs & Auth',
    icon: 'Server',
    description: 'RESTful services, microservices architecture, validation, and JWT security.',
    skills: [
      { name: 'Node.js & Express.js', level: 'Hands-on' },
      { name: 'Python & FastAPI', level: 'Hands-on' },
      { name: 'Flask', level: 'Exploration' },
      { name: 'REST APIs & CRUD', level: 'Hands-on' },
      { name: 'Microservices & API Gateway', level: 'Hands-on' },
      { name: 'Middleware & Error Handling', level: 'Hands-on' },
      { name: 'Request Validation', level: 'Hands-on' },
      { name: 'JWT Auth & Authorization', level: 'Hands-on' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases, Caching & Vector Search',
    icon: 'Database',
    description: 'Relational data modeling, caching, and pgvector semantic search.',
    skills: [
      { name: 'PostgreSQL', level: 'Hands-on' },
      { name: 'SQL & Schema Design', level: 'Hands-on' },
      { name: 'Redis & Semantic Caching', level: 'Hands-on' },
      { name: 'pgvector & Embeddings', level: 'Integration' },
      { name: 'MySQL', level: 'Working' },
      { name: 'MongoDB', level: 'Needs Verification' },
    ],
  },
  {
    id: 'ai-libs-devops',
    title: 'AI, Libraries, Integrations & DevOps',
    icon: 'Layers',
    description: 'AI APIs, domain libraries, payment/shipping integrations, and deployment.',
    skills: [
      { name: 'Google Gemini API & RAG', level: 'Integration' },
      { name: 'OpenAI API & Prompting', level: 'Integration' },
      { name: 'Socket.IO', level: 'Hands-on' },
      { name: 'Razorpay & Shiprocket', level: 'Integration' },
      { name: 'NumPy, Shapely, Swiss Ephemeris', level: 'Exploration' },
      { name: 'Celery, Jinja2, WeasyPrint', level: 'Exploration' },
      { name: 'Docker, Coolify & VPS', level: 'Working' },
      { name: 'Git, GitHub & Postman', level: 'Hands-on' },
    ],
  },
];
