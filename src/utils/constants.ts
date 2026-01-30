// Site Information
export const SITE_INFO = {
  name: 'José Carlos Benítez',
  role: 'Frontend Developer',
  email: 'josseerme@proton.me',
  tagline: 'Creando experiencias web modernas y accesibles',
  bio: 'Desarrollador frontend apasionado por crear interfaces intuitivas y experiencias de usuario excepcionales.',
  location: 'Paraguarí, Paraguay',
  availableForWork: true,
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/DigitalJCB',
  email: 'mailto:josseerme@proton.me',
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

// Skills Data
export const SKILLS = {
  frontend: [
    { name: 'HTML', icon: 'logos:html-5', level: 'Intermedio' },
    { name: 'CSS', icon: 'logos:css-3', level: 'Intermedio' },
    { name: 'Astro', icon: 'logos:astro-icon', level: 'Básico' },
  ],
  backend: [
    { name: 'MySQL', icon: 'logos:mysql-icon', level: 'Intermedio' },
  ],
  tools: [
    { name: 'GitHub', icon: 'logos:github-icon', level: 'Intermedio' },
  ],
  aiCollaborators: [
    { name: 'GitHub Copilot', icon: 'simple-icons:githubcopilot', level: 'Colaborador IA' },
    { name: 'Claude Code', icon: 'simple-icons:anthropic', level: 'Colaborador IA' },
  ],
};

// Projects Data (Placeholders)
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico moderna con carrito de compras, pagos integrados y panel de administración.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con pronósticos de 7 días, gráficos y geolocalización.',
    image: '/images/projects/weather.jpg',
    tags: ['Next.js', 'OpenWeather API', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con drag & drop, categorías y sincronización en tiempo real.',
    image: '/images/projects/tasks.jpg',
    tags: ['Vue', 'Pinia', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Template',
    description: 'Plantilla de portafolio responsive con tema oscuro y animaciones suaves.',
    image: '/images/projects/portfolio.jpg',
    tags: ['Astro', 'Tailwind', 'Alpine.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

// FAQ Data (opcional)
export const FAQS = [
  {
    question: '¿Qué tecnologías dominas?',
    answer: 'Me especializo en desarrollo frontend con React, TypeScript, Next.js y Tailwind CSS. También tengo experiencia con Vue, Astro y tecnologías backend como Node.js.',
  },
  {
    question: '¿Estás disponible para proyectos freelance?',
    answer: 'Sí, actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. No dudes en contactarme.',
  },
  {
    question: '¿Cuál es tu proceso de trabajo?',
    answer: 'Mi proceso incluye: 1) Entender los requisitos, 2) Diseñar la arquitectura, 3) Desarrollo iterativo, 4) Testing exhaustivo, 5) Deployment y monitoreo.',
  },
  {
    question: '¿Haces diseño UI/UX?',
    answer: 'Sí, tengo experiencia en diseño de interfaces con Figma y puedo ayudar con wireframes, prototipos y diseño visual.',
  },
];
