import { Project, Skill, MindStage, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: "Surendra Batikiri",
  editorialName: "Marcus — Bennet",
  email: "batikirisurendra1211@gmail.com",
  phone: "+91 8074053175",
  location: "Hyderabad, India",
  liveStoreUrl: "https://sssilksarees.vercel.app",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  summary: "Computer Science graduate and Full Stack Developer with strong Python backend fundamentals, SQL database modeling, and AI/ML integrations. Independently designed, built, and shipped a live e-commerce production application.",
  status: "Open to Opportunities"
};

export const MIND_STAGES: MindStage[] = [
  {
    w: 'IDEA',
    icon: 'Lightbulb',
    sub: 'Every build starts with a real problem worth solving — like a sarees retail store that needed to thrive online.',
    code: 'stage 01/07 — framing the problem',
    details: 'Understanding customer behavior, business constraints, and user friction points before writing any software.'
  },
  {
    w: 'CODE',
    icon: 'Code2',
    sub: 'Python, FastAPI, and clean, readable backend logic you can actually trust under load.',
    code: 'stage 02/07 — writing the layer that thinks',
    details: 'Writing modular code with OOP principles, strict typing, and separation of concerns.'
  },
  {
    w: 'API',
    icon: 'Network',
    sub: 'REST endpoints designed with consistent resource schemas and deterministic response models.',
    code: 'stage 03/07 — exposing the interface',
    details: 'FastAPI routing, automated OpenAPI documentation, query pagination, and payload validation.'
  },
  {
    w: 'DATABASE',
    icon: 'Database',
    sub: 'PostgreSQL schemas modeled for data integrity and real business relationships, not just for demos.',
    code: 'stage 04/07 — persisting the truth',
    details: 'Foreign key constraints, composite indexing, and transactions supporting inventory concurrency.'
  },
  {
    w: 'AI',
    icon: 'BrainCircuit',
    sub: 'Machine learning, NLP, and adaptive features layered in where they deliver tangible utility.',
    code: 'stage 05/07 — teaching the system',
    details: 'Feature fusion for spatial-temporal flow forecasting and sentiment classification for dynamic playlists.'
  },
  {
    w: 'DEPLOY',
    icon: 'Rocket',
    sub: 'From localhost to a live URL on Vercel with automated Git versioning and continuous checks.',
    code: 'stage 06/07 — shipping it',
    details: 'Configuring edge CDN caching, environment secrets, and live health monitors.'
  },
  {
    w: 'PRODUCT',
    icon: 'Smartphone',
    sub: 'Software people can genuinely use. Then: measure metrics, analyze logs, and iterate relentlessly.',
    code: 'stage 07/07 — it is alive',
    details: 'Monitoring conversion rates, API response latencies, and ongoing user feedback.'
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Python', category: 'lang', icon: 'FileCode', desc: 'Primary language — backend logic, data transformation, ML pipelines', level: 95 },
  { name: 'Core Java', category: 'lang', icon: 'Coffee', desc: 'OOP fundamentals from intensive 6-month full-stack bootcamp', level: 85 },
  { name: 'C', category: 'lang', icon: 'Binary', desc: 'Foundational programming & low-level memory problem solving', level: 80 },
  { name: 'SQL', category: 'lang', icon: 'Table', desc: 'Complex joins, aggregates, triggers & relational schema design', level: 90 },
  { name: 'FastAPI', category: 'be', icon: 'Zap', desc: 'Async Python framework — my go-to for high-throughput REST APIs', level: 92 },
  { name: 'REST APIs', category: 'be', icon: 'Plug', desc: 'Resource-oriented endpoint design, HTTP status codes, error handling', level: 92 },
  { name: 'Spring Boot', category: 'be', icon: 'Layers', desc: 'Enterprise Java architecture fundamentals & dependency injection', level: 75 },
  { name: 'HTML5', category: 'fe', icon: 'Code', desc: 'Semantic, accessible markup and modern web standards', level: 90 },
  { name: 'CSS3', category: 'fe', icon: 'Palette', desc: 'Responsive grid systems, flexbox layouts & micro-animations', level: 88 },
  { name: 'PostgreSQL', category: 'db', icon: 'Database', desc: 'Primary production DB — models the live Sri Someshwara Silk Sarees store', level: 90 },
  { name: 'MySQL', category: 'db', icon: 'Database', desc: 'Relational database schema modeling and query optimization', level: 84 },
  { name: 'Oracle', category: 'db', icon: 'Database', desc: 'Enterprise database querying, constraints, and PL/SQL basics', level: 78 },
  { name: 'Machine Learning', category: 'ai', icon: 'Brain', desc: 'Supervised & unsupervised algorithms, feature extraction & regression', level: 88 },
  { name: 'Deep Learning', category: 'ai', icon: 'Cpu', desc: 'Neural networks, Adaptive Feature Fusion (AFFN) for time-series', level: 85 },
  { name: 'NLP', category: 'ai', icon: 'MessageSquare', desc: 'Text classification, tokenization & emotional sentiment mapping', level: 82 },
  { name: 'AI Integration', category: 'ai', icon: 'Sparkles', desc: 'Connecting trained models into production API endpoints', level: 86 },
  { name: 'Git & GitHub', category: 'tools', icon: 'GitBranch', desc: 'Branching strategies, pull requests, and commit discipline', level: 92 },
  { name: 'Postman', category: 'tools', icon: 'Send', desc: 'API testing, automated collection runners & mock servers', level: 90 },
  { name: 'Vercel', category: 'cloud', icon: 'Triangle', desc: 'Production deployment platform — my live e-commerce site runs here', level: 88 },
  { name: 'Docker', category: 'cloud', icon: 'Box', desc: 'Containerization basics, Dockerfile creation and environment replication', level: 78 },
  { name: 'Linux (OS)', category: 'cloud', icon: 'Terminal', desc: 'Bash command-line environment, system administration & server workflows', level: 85 }
];

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'ALL SKILLS' },
  { id: 'lang', label: 'LANGUAGES' },
  { id: 'be', label: 'BACKEND' },
  { id: 'fe', label: 'FRONTEND' },
  { id: 'db', label: 'DATABASES' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'tools', label: 'TOOLS' },
  { id: 'cloud', label: 'CLOUD / DEVOPS' }
];

export const ARCHITECTURE_STEPS = [
  { step: '01', title: 'CLIENT LAYER', tech: 'React + TypeScript / Responsive HTML5', desc: 'Delivers fast user experiences with client-side state management and instant updates.' },
  { step: '02', title: 'REST API GATEWAY', tech: 'Python · FastAPI · OpenAPI', desc: 'Validates incoming payloads, manages auth tokens, and routes traffic asynchronously.' },
  { step: '03', title: 'BUSINESS CORE', tech: 'Clean Architecture · Python / Java', desc: 'Implements business rules, order processing, and feature extraction pipelines.' },
  { step: '04', title: 'PERSISTENCE', tech: 'PostgreSQL · SQL Indexes', desc: 'Maintains referential integrity with ACID guarantees for inventory & user records.' },
  { step: '05', title: 'AI INFERENCE', tech: 'Deep Learning · NLP Engine', desc: 'Executes lightweight prediction pipelines and maps user emotions to output streams.' },
  { step: '06', title: 'EDGE HOSTING', tech: 'Vercel Deployment · Git CI', desc: 'Global CDN distribution, automated redeploys on commit, and production monitoring.' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'silk-sarees',
    idx: '01',
    tag: 'FEATURED — PRODUCTION E-COMMERCE',
    title: 'Sri Someshwara Silk Sarees',
    short: 'An independently designed, built, and deployed full-stack e-commerce web application for a silk sarees retail business — from database schema to a live production URL on Vercel.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Vercel', 'REST APIs'],
    live: 'https://sssilksarees.vercel.app',
    viz: 'browser',
    metrics: {
      "Deployment": "Live on Vercel",
      "API Response": "< 95ms",
      "Catalog Search": "Instant SQL",
      "Ownership": "100% Solo Built"
    },
    study: {
      overview: 'A full-fledged commercial web application created for Sri Someshwara Silk Sarees. Built completely from scratch to enable a physical retail business to showcase exquisite saree collections and handle customer digital orders seamlessly.',
      problem: 'The business operated solely as a physical store with no web presence. Customers outside their immediate vicinity could not explore inventory or place orders, and third-party marketplace fees cut deeply into margins.',
      arch: 'Client Web Interface → FastAPI REST Layer (Python) → PostgreSQL Database, hosted end-to-end on Vercel with zero downtime.',
      challenges: [
        'Architecting a clean relational schema that accommodates varied saree weaves, fabric blends, and inventory counts.',
        'Implementing fast, parameterized search queries across price ranges and categories.',
        'Managing the full production deployment lifecycle solo on Vercel with proper environment security.'
      ],
      learnings: [
        'Gained deep end-to-end expertise shipping a real product used by actual retail customers.',
        'Learned how deployment constraints directly influence backend architecture choices.',
        'Mastered FastAPI routing, request validation via Pydantic, and PostgreSQL database normalization.'
      ]
    }
  },
  {
    id: 'passenger-flow',
    idx: '02',
    tag: 'RESEARCH — DEEP LEARNING',
    title: 'Adaptive Feature Fusion Network (AFFN)',
    short: 'End-to-end deep learning pipeline to predict metro passenger flow using an Adaptive Feature Fusion Network for origin-destination analysis in smart transit systems.',
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Feature Fusion'],
    viz: 'pipeline',
    metrics: {
      "Accuracy Boost": "+14.8%",
      "Data Dimensions": "Spatial + Temporal",
      "Pipeline Stages": "7 Nodes",
      "Optimization": "Hyperparameter Tuned"
    },
    study: {
      overview: 'A deep learning model for transit intelligence that predicts high-density metro passenger flow by dynamically combining spatial topology signals with temporal schedule patterns.',
      problem: 'Passenger volume fluctuates unpredictably due to both physical station connectivity (spatial) and time-of-day rush patterns (temporal). Traditional single-channel models miss cross-dimensional correlations.',
      arch: 'Raw Transit Ingestion → Normalization & Cleaning → Spatial Convolution Branch + Temporal RNN Branch → Adaptive Attention Fusion Gate → Final Flow Regression.',
      challenges: [
        'Dynamically weighting spatial versus temporal importance during unexpected transit events.',
        'Structuring and normalizing massive raw sequence datasets without memory bottlenecks.',
        'Rigorous benchmarking against baseline regression techniques across standard MSE and MAE metrics.'
      ],
      learnings: [
        'Feature fusion design yields higher real-world reliability than simply scaling parameter count.',
        'Developing disciplined data preprocessing pipelines in Python is critical for deep learning success.'
      ]
    }
  },
  {
    id: 'emotion-music',
    idx: '03',
    tag: 'INTELLIGENT APPLICATION — NLP',
    title: 'Emotion-Based Music Recommendation System',
    short: 'Intelligent recommender that detects human emotions from input signals and text using NLP classification, dynamically mapping emotional states to curated playlists.',
    tech: ['Python', 'Machine Learning', 'NLP', 'API Integration'],
    viz: 'emotion',
    metrics: {
      "Emotions": "5 Core Profiles",
      "Latency": "< 75ms",
      "Architecture": "Modular Micro-Pipeline",
      "Matching": "Valence / Arousal Grid"
    },
    study: {
      overview: 'An NLP-driven recommendation engine that prioritizes how the listener is feeling in the exact moment, instead of relying purely on historical playback repetition.',
      problem: 'Conventional streaming algorithms repeatedly suggest familiar tracks based on history, failing to provide mood-appropriate music when a user feels stressed, energetic, or contemplative.',
      arch: 'Text Ingestion → Preprocessing & Tokenization → Sentiment & Emotion Classifier → Musical Valence / Energy Mapper → Curated Playlist Response.',
      challenges: [
        'Extracting nuanced sentiment from informal, colloquial user inputs.',
        'Calibrating musical parameters (tempo, mode, valence) to accurately match emotional states.',
        'Designing a clean modular architecture allowing plug-and-play swapping of classification models.'
      ],
      learnings: [
        'User-facing AI must provide transparent, explainable recommendations to feel natural.',
        'Heuristic scoring combined with statistical classification produces superior music curation.'
      ]
    }
  },
  {
    id: 'portfolio-os',
    idx: '04',
    tag: 'FEATURED — 3D & FULL-STACK PLATFORM',
    title: 'Surendra Batikiri — 3D Editorial Portfolio & Developer OS',
    short: 'An immersive editorial portfolio and interactive developer operating system built with React, TypeScript, TailwindCSS, WebGL 3D scenes, and a FastAPI Python backend, deployed globally on Vercel.',
    tech: ['React 18', 'TypeScript', 'TailwindCSS', 'Python / FastAPI', 'Vercel Edge', 'WebGL / Canvas'],
    live: 'https://portfoliodemo-pied.vercel.app',
    viz: 'portfolio',
    metrics: {
      "Deployment": "Live on Vercel Edge",
      "Interactive Modes": "4 WebGL Shaders",
      "Lighthouse Score": "99 / 100",
      "Architecture": "Vite SPA + FastAPI"
    },
    study: {
      overview: 'A state-of-the-art personal engineering portfolio and interactive developer console designed to merge high-fashion editorial typography with low-latency software engineering demos. Features live interactive WebGL visualizers, interactive CLI terminal emulator, live API health telemetry, dynamic scene switchers, and full responsive design.',
      problem: 'Generic developer portfolios fail to showcase genuine depth in full-stack architecture, API integration, and bespoke UI engineering. Modern recruiters and technical leads expect both visual wow-factor and clean, production-grade code.',
      arch: 'React 18 + TypeScript Client → TailwindCSS Design System → Three.js / Canvas WebGL Layer → Python FastAPI Backend (Telemetry & Analytics) → Vercel Edge Global CDN.',
      challenges: [
        'Orchestrating multi-shader WebGL background simulations with zero frame drops across mobile and desktop viewports.',
        'Engineering an in-browser interactive terminal emulator with real command execution, history parsing, and API inspection.',
        'Balancing editorial serif/grotesk typography with strict accessibility standards and blazing fast load times.'
      ],
      learnings: [
        'Engineered a complete modular design token system blending warm stone (#ECEAE5) with terracotta (#C87A3E) accents.',
        'Integrated real-time API health checks and visitor analytics with Python FastAPI.',
        'Mastered advanced Vercel Edge configuration, SPA rewrite rules, and automated CI/CD pipeline deployments.'
      ]
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    year: 'Oct 2025 — July 2026',
    title: 'Certified Java Full Stack Development',
    institution: 'Pentagon Coaching Center, Bangalore',
    score: 'Certified'
  },
  {
    year: '2022 — 2025',
    title: 'B.Tech — Computer Science & Engineering',
    institution: 'Siddhartha Institute of Engineering and Technology, Hyderabad',
    score: '65.45%'
  },
  {
    year: '2019 — 2022',
    title: 'Diploma — Mechanical Engineering',
    institution: 'Government Polytechnic College, Vaddepally',
    score: '60.00%'
  },
  {
    year: '2018 — 2019',
    title: 'SSC (10th Grade)',
    institution: 'Zilla Parishad High School, Rajoli',
    score: '73.00%'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'End-to-End Product Launch',
    icon: 'Rocket',
    desc: 'Independently designed, built, and deployed a live e-commerce application for a real business — from database design to production release on Vercel.'
  },
  {
    title: 'Deep Learning Transit Research',
    icon: 'BrainCircuit',
    desc: 'Engineered an Adaptive Feature Fusion Network (AFFN) integrating spatial and temporal streams to predict complex metro passenger transit flow.'
  },
  {
    title: 'NLP Sentiment Application',
    icon: 'Sparkles',
    desc: 'Built an intelligent music recommendation system mapping detected emotion labels to dynamic genre playlists in real-time.'
  },
  {
    title: 'Certified Java Full Stack Developer',
    icon: 'Award',
    desc: 'Completed a rigorous 6-month full-stack development bootcamp at Pentagon Coaching Center, Bangalore, covering OOP, Java, SQL, and REST APIs.'
  },
  {
    title: 'Multilingual Communicator',
    icon: 'Languages',
    desc: 'Fluent in English, Telugu, Kannada, and Hindi — enabling seamless collaboration across cross-functional and multidisciplinary engineering teams.'
  },
  {
    title: 'Self-Driven Continuous Learner',
    icon: 'BookOpen',
    desc: 'Mastered modern Python backend frameworks (FastAPI), database modeling (PostgreSQL), and AI architectures through hands-on project execution.'
  }
];
