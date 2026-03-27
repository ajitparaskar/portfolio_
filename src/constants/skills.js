// src/constants/skills.js

// 🔹 Highlighted Projects (Used in About Section)
export const HIGHLIGHTS = [
  {
    icon: '🎵',
    title: 'AI Music Recommendation',
    summary:
      'Built using TF-IDF and cosine similarity on a 113k-song dataset with real-time YouTube playback integration.',
    href: '#projects',
  },
  {
    icon: '🧠',
    title: 'Smart Knowledge Explorer',
    summary:
      'RAG-based system using OpenAI API to extract and summarize information from documents and external data.',
    href: '#projects',
  },
  {
    icon: '📈',
    title: 'Zerodha Clone',
    summary:
      'Full-stack trading platform with JWT authentication, REST APIs, and real-time data visualization.',
    href: '#projects',
  },
]

// 🔹 Skills grouped by category (Main Skills Section)
export const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    chipClass: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    chipClass: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Python',
      'Flask',
      'JWT Authentication',
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    chipClass: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
    skills: [
      'MongoDB',
      'Redis',
      'MySQL',
      'PostgreSQL'
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    chipClass: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    skills: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenAI API',
      'LangChain',
      'TF-IDF',
      'Cosine Similarity',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    chipClass: 'bg-rose-500/10 text-rose-300 border border-rose-500/20',
    skills: [
      'Git',
      'GitHub',
      'vercel',
      'render',
      'Docker',
      'VS Code',
      'Postman',
      'Figma',
    ],
  },
]