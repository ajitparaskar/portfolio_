import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'
import { CATEGORIES } from '@/constants/skills'

const ICONS = {
  frontend: () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5,7 2,10 5,13" />
      <polyline points="15,7 18,10 15,13" />
      <line x1="11" y1="5" x2="9" y2="15" />
    </svg>
  ),
  backend: () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2.5" width="16" height="4" rx="1.5" />
      <rect x="2" y="8"   width="16" height="4" rx="1.5" />
      <rect x="2" y="13.5" width="16" height="4" rx="1.5" />
      <circle cx="5.5" cy="4.5"  r="0.8" fill="currentColor" stroke="none" />
      <circle cx="5.5" cy="10"   r="0.8" fill="currentColor" stroke="none" />
      <circle cx="5.5" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  database: () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="10" cy="5" rx="7" ry="2.5" />
      <path d="M3 5v4.5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
      <path d="M3 9.5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" />
    </svg>
  ),
  aiml: () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10"  cy="10" r="2.2" />
      <circle cx="3.5" cy="5.5" r="1.5" />
      <circle cx="16.5" cy="5.5" r="1.5" />
      <circle cx="3.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
      <line x1="5"    y1="6"    x2="8"    y2="8.5" />
      <line x1="15"   y1="6"    x2="12"   y2="8.5" />
      <line x1="5"    y1="14"   x2="8"    y2="11.5" />
      <line x1="15"   y1="14"   x2="12"   y2="11.5" />
    </svg>
  ),
  tools: () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.8 3.2a4 4 0 00-5.1 5.4L3.5 14.8a1.5 1.5 0 002.1 2.1l6.2-6.2a4 4 0 005.4-5.1l-2.7 2.7-2-2 2.3-3.1z" />
    </svg>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 } 
  },
}



/* ── Card ────────────────────────────────────────────────────────────────────── */
const CategoryCard = ({ id, label, color, iconBg, chipClass, skills, wide }) => {
  const Icon = ICONS[id]
  return (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className={`bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4
    hover:bg-white/10 hover:border-white/20 transition-all duration-300
    ${wide ? 'sm:col-span-2 lg:col-span-1' : ''}`}>

    {/* Header */}
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        <span className={color}>{Icon && <Icon />}</span>
      </div>
      <h3 className={`text-sm font-semibold ${color}`}>{label}</h3>
    </div>

    {/* Divider */}
    <div className="h-px bg-white/10" />

    {/* Skill chips */}
    <div className="flex flex-wrap gap-2">
      {skills?.map((s) => (
        <span key={s} className={`text-xs font-medium px-2.5 py-1 rounded-full ${chipClass}`}>
          {s}
        </span>
      ))}
    </div>
    </motion.div>
  )
}

/* ── Section ────────────────────────────────────────────────────────────────── */
const SkillsSection = () => (
  <section id="skills" className="relative py-28 bg-gray-950">
    {/* Subtle top divider */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-100" />
    <Container>
      <FadeIn>
        <p className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-3">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white mb-3">
          What I <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">work with</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl">
          A snapshot of the technologies and tools I reach for when building things.
        </p>
      </FadeIn>

      {/* 1 col → 2 col (sm) → 3 col (lg)
          Last card spans 2 cols on sm so it doesn't sit alone at half-width */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {CATEGORIES?.map((cat, i) => (
          <CategoryCard key={cat.id} {...cat} wide={i === CATEGORIES.length - 1} />
        ))}
      </motion.div>
    </Container>
  </section>
)

export default SkillsSection
