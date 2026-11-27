/**
 * Company & Engineering Projects (main showcase + Resume).
 * Practice & early learning projects are kept separately in `practiceProjects`.
 */
export const projects = [
  {
    id: 'grahavani',
    title: 'Grahavani – AI-Powered Vedic Astrology Platform',
    category: 'Production & Full Stack',
    scopeBadge: 'Full Stack · AI Integration',
    timeline: 'Jul 2025 – Present',
    description:
      'AI-powered Vedic Astrology platform for astrologers, clients, and learners featuring consultation booking, astrology services, an integrated LMS, and Acharya Gautam AI Tutor.',
    role: 'Full Stack Developer · AstroCorp Techlab',
    features: [
      'Astrologer & client management, Normal and Tatkal 30-min slot booking',
      'Astrology services: Match Making, Numerology, Muhurtham, Panchang & Ayanamsa options',
      'Integrated LMS (Tier → Module → Chapter → Lesson, MCQs, gamification, mastery)',
      'Acharya Gautam AI Tutor with Gemini API, RAG, pgvector, semantic caching & TTS',
    ],
    architectureNote:
      'Microservices routed behind an API Gateway: Auth, User, Client, Learning, and Astro Proxy services with Socket.IO realtime updates.',
    techStack: ['React.js', 'React Native', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Gemini API', 'pgvector', 'Docker'],
    caseStudy: {
      frontend: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'JSX / TSX', 'Functional Components', 'React Hooks', 'Component Reusability', 'State Management', 'Dynamic Forms', 'Conditional Rendering', 'Responsive UI', 'Dashboard Development', 'Real-time UI Updates'],
      backend: ['Node.js', 'Express.js', 'TypeScript', 'Microservices Architecture', 'REST API Development', 'API Gateway Integration', 'JWT Authentication & Authorization', 'Middleware Development', 'Service-to-Service Communication', 'Request Validation', 'Error Handling', 'Background Processing', 'Notification Management'],
      database: ['PostgreSQL', 'Redis', 'SQL Queries', 'Database Schema Management', 'Data Relationships', 'CRUD Operations', 'Semantic Caching', 'Query Optimization'],
      integrations: ['Google Gemini API', 'Retrieval-Augmented Generation (RAG)', 'pgvector & Vector Embeddings', 'Semantic Search', 'Contextual Retrieval', 'Prompt Engineering', 'Socratic Learning Workflows', 'Text-to-Speech (TTS)', 'Socket.IO'],
      devops: ['Docker', 'Coolify', 'VPS Deployment', 'Microservices Deployment', 'Environment Configuration', 'Production Debugging'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: 'https://app.grahvani.in/',
  },
  {
    id: 'corporate-astro',
    title: 'Corporate Astro – Consultation & Booking Platform',
    category: 'Production & Full Stack',
    scopeBadge: 'Full Stack · Booking',
    timeline: '2025 – Present',
    description:
      'Corporate astrology platform supporting personal and business consultation services, user management, date/time slot selection, and end-to-end appointment booking workflows.',
    role: 'Full Stack Developer · AstroCorp Techlab',
    features: [
      'User registration, authentication, and personal & business consultation services',
      'Consultation booking workflow with date/time slot selection and status tracking',
      'Normal & Tatkal booking, customer management, and admin booking management',
    ],
    architectureNote: 'Full-stack consultation booking platform with REST APIs and relational database.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
    caseStudy: {
      frontend: ['React.js', 'JavaScript (ES6+)', 'JSX', 'Reusable React Components', 'React Hooks (useState, useEffect)', 'Props & State Management', 'HTML5 & CSS3', 'Responsive Web Design', 'Form Handling & Validation', 'API Integration', 'Dynamic UI Rendering'],
      backend: ['Node.js', 'Express.js', 'RESTful API Development', 'Request & Response Handling', 'Authentication & Authorization', 'Booking Workflow & Slot Management', 'Consultation Management', 'Server-side Validation', 'Error Handling'],
      database: ['PostgreSQL', 'Database Schema Design', 'CRUD Operations', 'Query Handling', 'User & Booking Data Management'],
      integrations: ['Third-party API Integration', 'Consultation Slot & Booking APIs'],
      devops: ['Git & GitHub', 'Debugging', 'Deployment & Production Support'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: 'https://corporateastro.com/',
  },
  {
    id: 'gowraj',
    title: 'Gowraj Desi Ghee – E-commerce Platform',
    category: 'Production & Full Stack',
    scopeBadge: 'Full Stack · Support',
    timeline: 'Jun 2025 – Dec 2025',
    description:
      'E-commerce and product management platform supporting customer orders, Razorpay payments, Shiprocket shipping workflows, COD handling, and admin order operations.',
    role: 'Full Stack & Production Support Developer · AstroCorp Techlab',
    features: [
      'Dynamic product pages, cart UI, checkout UI, and admin order dashboard',
      'Razorpay payment gateway integration and payment status synchronization',
      'Shiprocket API: shipment tracking, pickup scheduling, and reverse-pickup workflows',
    ],
    architectureNote: 'React.js storefront & admin portal with Node.js/Express.js APIs deployed via Coolify.',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Razorpay', 'Shiprocket', 'Coolify'],
    caseStudy: {
      frontend: ['React.js', 'JavaScript', 'JSX', 'React Components & Hooks', 'State Management', 'Dynamic Product Pages', 'Cart & Checkout UI', 'Order Management UI', 'Admin Dashboard', 'Form Validation', 'Responsive Design'],
      backend: ['Node.js', 'Express.js', 'REST API Development', 'Order Management APIs', 'Payment Processing', 'Order Status Management', 'Shipping API Integration', 'Return & Reverse Pickup Workflows', 'COD Handling', 'Server-side Validation', 'Error Handling'],
      database: ['PostgreSQL', 'SQL', 'CRUD Operations', 'Order & Customer Data Management'],
      integrations: ['Razorpay Payment Gateway (Active)', 'Shiprocket API (Tracking, Pickup, Reverse Pickup)', 'Payment Status Sync'],
      devops: ['Git & GitHub', 'Coolify', 'Production Debugging', 'Deployment', 'API & End-to-End Testing'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: 'https://gowraj.in/',
    adminUrl: 'https://admin.gowraj.com/',
  },
  {
    id: 'instaride',
    title: 'InstaRide – Ride-Hailing App & Real-Time Backend',
    category: 'Production & Full Stack',
    scopeBadge: 'Mobile · Real-Time Backend',
    timeline: 'Mar 2024 – Jan 2025',
    description:
      'Full-stack ride-hailing platform developed at GENAMPLIFY SOLUTIONS HUB, combining a TypeScript React Native (Expo) mobile app with a real-time Node.js/Express backend powered by Socket.IO, Apache Kafka, and PostgreSQL.',
    role: 'Software Developer · GENAMPLIFY SOLUTIONS HUB',
    features: [
      'REST APIs for users, drivers, trips, ratings, and OTP authentication (Routes → Controllers → DAL → Sequelize)',
      'Real-time ride request & driver acceptance pipelines using Socket.IO and Apache Kafka (KafkaJS)',
      'React Native (Expo) TypeScript app with React Navigation, React Native Maps, Expo Location & Google Places',
      'Separate JWT auth middlewares for users/drivers, Express Validator, Multer, and Firebase Admin',
    ],
    architectureNote:
      'Layered TypeScript backend (Routes → Controllers → DAL → Sequelize/PostgreSQL) with Socket.IO + Kafka event pipelines and Expo React Native client.',
    techStack: ['TypeScript', 'React Native', 'Expo', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Socket.IO', 'Apache Kafka'],
    caseStudy: {
      frontend: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'React Native Maps', 'Expo Location', 'Google Places Autocomplete', 'Axios & AsyncStorage', 'React Native Paper / Elements', 'OTP Auth & Wallet / Ride History Flows'],
      backend: ['Node.js', 'Express.js', 'TypeScript', 'Layered Architecture (Routes → Controllers → DAL)', 'Separate User & Driver JWT Middlewares', 'Express Validator', 'Multer', 'Firebase Admin'],
      database: ['PostgreSQL', 'Sequelize ORM', 'Model Associations (User, Driver, Trip, Rating, Subscription, Documents)'],
      integrations: ['Socket.IO Real-Time Ride Events', 'Apache Kafka (KafkaJS) Event Pipelines', 'Google Maps & Places APIs'],
      devops: ['Git & GitHub', 'Nodemon & ts-node', 'Postman API Testing', 'EAS Build Config'],
    },
    githubUrl: 'https://github.com/orgs/GenAmplifySolutionHub/repositories?type=all',
    liveUrl: '',
  },
  {
    id: 'astro-ratan',
    title: 'Astro Ratan – AI Astrology Application',
    category: 'AI & Backend',
    scopeBadge: 'Backend · AI Integration',
    timeline: 'Jan 2026 – Present',
    description:
      'Standalone AI-powered astrology application delivering AI-generated interpretations, user interactions, and notification workflows.',
    role: 'Backend & Production Support Developer · AstroCorp Techlab',
    features: [
      'FastAPI backend integrating OpenAI GPT-4o mini and Google Gemini 2.5 Flash-Lite',
      'AI response troubleshooting, API debugging, and production maintenance',
      'Time-management and notification feature updates',
    ],
    architectureNote: 'Independent Python FastAPI backend with dual-LLM API integration.',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'Google Gemini API', 'REST APIs'],
    caseStudy: {
      frontend: ['React.js', 'JavaScript', 'API Integration', 'Dynamic UI', 'Form Handling', 'Responsive Design'],
      backend: ['Python', 'FastAPI', 'REST APIs', 'API Request Handling', 'JSON Processing', 'Backend Debugging', 'Error Handling'],
      database: ['Project Database Integration'],
      integrations: ['OpenAI API (GPT-4o mini)', 'Google Gemini API (Gemini 2.5 Flash-Lite)', 'Prompt Engineering', 'AI Response Integration', 'AI Output Troubleshooting'],
      devops: ['Production Support', 'API Testing', 'Integration Debugging'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: 'https://astroratan.ai/',
  },
  {
    id: 'astrocorp-web',
    title: 'AstroCorp Techlab – Corporate Website',
    category: 'Production & Full Stack',
    scopeBadge: 'Full Stack Web',
    timeline: 'Mar 2025 – Jan 2026',
    description:
      'Responsive corporate website for AstroCorp Techlab Private Limited featuring reusable UI components, dynamic content, and admin workflows.',
    role: 'Full Stack Website Developer · AstroCorp Techlab',
    features: [
      'Responsive corporate UI with reusable React.js components',
      'REST API integration and admin features for blogs, services, and media',
      'Ongoing maintenance, performance fixes, and responsive refinements',
    ],
    architectureNote: 'React.js frontend integrated with Node.js REST APIs.',
    techStack: ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'Git'],
    caseStudy: {
      frontend: ['React.js', 'JavaScript', 'HTML5 & CSS3', 'Reusable UI Components', 'Responsive Layout', 'Dynamic Content Rendering'],
      backend: ['Node.js', 'REST API Integration', 'Admin Content Workflows (Blogs, Services, Media)'],
      database: ['Content & Media Persistence'],
      integrations: ['Third-party Service & API Integration'],
      devops: ['Git & GitHub', 'Website Maintenance & Bug Fixing'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: 'https://astrocorp.in/',
  },
  {
    id: 'astro-engine',
    title: 'Astro Engine – Vedic Calculation Engine',
    category: 'AI & Backend',
    scopeBadge: 'Backend · API Integration',
    timeline: '2025 – Present',
    description:
      'Astronomical and Vedic astrology calculation engine computing planetary positions, divisional charts, and dasha systems.',
    role: 'Backend Integration & Technical Exploration · AstroCorp Techlab',
    features: [
      'Flask-based Python service powered by Swiss Ephemeris calculations',
      'Lahiri Ayanamsa, Whole Sign houses, and D1–D60 divisional charts',
      'Dasha calculations, KP astrology, Varshaphala, Sarvatobhadra Chakra & Yogas/Doshas',
    ],
    architectureNote: 'Python/Flask calculation service integrated via REST APIs.',
    techStack: ['Python', 'Flask', 'Swiss Ephemeris', 'NumPy', 'REST APIs'],
    caseStudy: {
      frontend: ['Consumed via Astrology Platform Clients'],
      backend: ['Python', 'Flask', 'FastAPI', 'REST API Development', 'Mathematical Calculations', 'Data Processing', 'JSON Response Handling'],
      database: ['Stateless Calculation / JSON Responses'],
      integrations: ['Swiss Ephemeris / PySwissEph', 'NumPy', 'Planetary Positions, Lahiri Ayanamsa, Whole Sign, D1–D60, Vimshottari Dasha, KP, Varshaphala'],
      devops: ['API Testing', 'Calculation Validation', 'Debugging', 'Python Backend Integration'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: '',
  },
  {
    id: 'report-engine',
    title: 'Report Engine – PDF Generation Architecture',
    category: 'Architecture & Exploration',
    scopeBadge: 'System Architecture',
    timeline: 'Architecture & Planning',
    description:
      'Scalable asynchronous report-generation architecture designed to produce branded, client-specific astrology PDF reports.',
    role: 'Architecture & Workflow Design · AstroCorp Techlab',
    features: [
      'Async pipeline: Node.js service → Redis queue → FastAPI + Celery workers',
      'Jinja2 HTML templates rendered via WeasyPrint with SVG/PNG chart assets',
      'PostgreSQL metadata tracking and secure object storage download URLs',
    ],
    architectureNote: 'Asynchronous worker architecture planned for multi-page branded reports.',
    techStack: ['Node.js', 'Redis', 'Python', 'FastAPI', 'Celery', 'Jinja2', 'WeasyPrint', 'PostgreSQL'],
    caseStudy: {
      frontend: ['React.js (Report Request Forms, Status Display, PDF Download Workflow)'],
      backend: ['Node.js', 'Python', 'FastAPI', 'REST API Integration', 'Celery', 'Asynchronous Background Job Processing'],
      database: ['Redis Job Queue', 'PostgreSQL Metadata Management'],
      integrations: ['Jinja2 HTML Templates', 'WeasyPrint HTML-to-PDF', 'SVG & PNG Chart Rendering', 'Object Storage & Secure Download URLs'],
      devops: ['Background Worker Architecture', 'Integration Planning'],
    },
    githubUrl: 'https://github.com/NaveenMotika12',
    liveUrl: '',
  },
];

/**
 * Practice & Early Learning Projects — displayed in a separate subsection
 * so they are clearly distinguished from production company work.
 */
export const practiceProjects = [
  {
    id: 'lms',
    title: 'Learning Management System (LMS)',
    timeline: 'Practice Project',
    description:
      'Web-based LMS practice project for organizing courses, structured learning content, and student progress.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'SQL'],
  },
  {
    id: 'booking-coaching',
    title: 'Booking & Coaching Management System',
    timeline: 'Practice Project',
    description:
      'Practice platform built for scheduling sessions, managing user profiles, and coordinating coaching workflows.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'SQL'],
  },
  {
    id: 'employee-mgmt',
    title: 'Employee Management System',
    timeline: 'Training Practice',
    description:
      'Early training CRUD application for employee records management and role-based access.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL / MySQL', 'JPA / Hibernate'],
  },
];
