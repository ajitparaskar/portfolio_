import { image } from "framer-motion/client";

export const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'AI Music Recommendation System',
    description:
      'Developed a machine learning-based music recommendation system using TF-IDF and cosine similarity on a 113k-song dataset. Integrated YouTube API for real-time playback and built a dynamic React-based music player.',
    tech: [
      'Python',
      'Scikit-learn',
      'Flask',
      'React',
      'YouTube API',
    ],
    demo: 'https://music-recomendation-system-five.vercel.app/',
    github: 'https://github.com/Ajit-Paraskar/ai-music-recommendation',
    image: '/assets/ai.png',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
  },
  {
    id: 2,
    num: '02',
    title: 'Smart Knowledge Explorer',
    description:
      'Built an AI-powered knowledge explorer using RAG architecture with OpenAI API to extract and summarize information from documents and external sources.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'OpenAI API',
    ],
    demo: 'https://smart-knowledge-explorer.vercel.app',
    github: 'https://github.com/Ajit-Paraskar/smart-knowledge-explorer',
    image : '/assets/kno.png',
    gradient: 'from-blue-500 via-cyan-400 to-sky-500',
  },
  {
    id: 3,
    num: '03',
    title: 'Zerodha Clone',
    description:
      'Developed a full-stack stock trading platform with real-time data visualization, order management, and JWT authentication using Node.js, Express, and MongoDB.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    demo: 'https://zerodha-clone-ajit.vercel.app',
    github: 'https://github.com/Ajit-Paraskar/zerodha-clone',
    image: '/assets/zeroda.png',
    gradient: 'from-emerald-400 via-teal-500 to-green-600',
  },
]