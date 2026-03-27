// src/constants/features.js

export const FEATURES = [
  {
    iconId: 'brain',
    title: 'TF-IDF & Cosine Similarity',
    description:
      'Implemented a recommendation system using TF-IDF to convert song metadata into vectors and cosine similarity to find similar tracks from a 113k-song dataset.',
    accent: 'violet',
  },
  {
    iconId: 'play',
    title: 'YouTube API Integration',
    description:
      'Integrated YouTube API to fetch and play songs in real time based on recommendations, ensuring smooth and continuous playback.',
    accent: 'blue',
  },
  {
    iconId: 'music',
    title: 'Dynamic Music Player UI',
    description:
      'Built a floating music player in React that maintains playback state across navigation using component state and props.',
    accent: 'cyan',
  },
]

export const TECH = [
  'Python',
  'Scikit-learn',
  'Pandas',
  'Flask',
  'React',
  'YouTube API',
]

export const RECS = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    match: '98%',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    match: '94%',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Stay',
    artist: 'The Kid LAROI',
    match: '91%',
    gradient: 'from-pink-500 to-rose-500',
  },
]

export const ACCENT = {
  violet: {
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
}

export const STATS = [
  { label: 'Songs Indexed', value: '113k' },
  { label: 'Model Accuracy', value: '96%' },
  { label: 'Mood Tags', value: '48' },
]

export const WAVE_HEIGHTS = [4, 7, 5, 9, 3, 7, 5, 8, 4, 6]