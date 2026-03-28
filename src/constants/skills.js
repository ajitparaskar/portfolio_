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

export const CATEGORIES = [
  {
    id: 'development',
    title: 'Development',
    borderColor: 'border-cyan-400',
    skills: [
      { name: 'Flask', icon: 'flask', color: 'text-cyan-400' },
      { name: 'FastAPI', icon: 'fastapi', color: 'text-cyan-400' },
      { name: 'React.js', icon: 'react', color: 'text-cyan-400' },
      { name: 'Node.js', icon: 'nodejs', color: 'text-cyan-400' },
      { name: 'Express.js', icon: 'express', color: 'text-cyan-400' },
      { name: 'JavaScript', icon: 'javascript', color: 'text-cyan-400' },
      { name: 'HTML5', icon: 'html', color: 'text-cyan-400' },
      { name: 'CSS3', icon: 'css', color: 'text-cyan-400' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    borderColor: 'border-red-400/80',
    skills: [
      { name: 'Java', icon: 'java', color: 'text-cyan-400' },
      { name: 'Python', icon: 'python', color: 'text-cyan-400' },
      { name: 'C++', icon: 'cpp', color: 'text-cyan-400' },
      { name: 'Data Structures', icon: 'datastructure', color: 'text-cyan-400' },
      { name: 'Algorithms', icon: 'algorithm', color: 'text-cyan-400' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Tools',
    borderColor: 'border-emerald-400',
    skills: [
      { name: 'PostgreSQL', icon: 'database', color: 'text-cyan-400' },
      { name: 'MySQL', icon: 'database', color: 'text-cyan-400' },
      { name: 'Git', icon: 'git', color: 'text-cyan-400' },
      { name: 'GitHub', icon: 'github', color: 'text-white' },
      { name: 'VS Code', icon: 'vscode', color: 'text-cyan-400' }
    ]
  },
  {
    id: 'softskills',
    title: 'Soft Skills',
    borderColor: 'border-yellow-400/80',
    skills: [
      { name: 'Problem Solving', icon: 'bulb', color: 'text-cyan-400' },
      { name: 'Communication', icon: 'chat', color: 'text-cyan-400' },
      { name: 'Team Leadership', icon: 'users', color: 'text-cyan-400' },
      { name: 'Time Management', icon: 'clock', color: 'text-cyan-400' },
      { name: 'Critical Thinking', icon: 'brain', color: 'text-cyan-400' }
    ]
  }
]