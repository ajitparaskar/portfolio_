import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'
import { CATEGORIES } from '@/constants/skills'

const ICONS = {
  react: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
  ),
  nodejs: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z" /><path d="M12 2v9" /><path d="M12 11l9-4.5" /><path d="M12 11l-9-4.5" /></svg>
  ),
  express: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /><line x1="2" y1="16" x2="22" y2="16" /><line x1="6" y1="13" x2="6.01" y2="13" /><line x1="6" y1="19" x2="6.01" y2="19" /></svg>
  ),
  javascript: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 15c-1 0-1.5-.5-2-1" /><path d="M14 15c0 1 1.5 1 2 0v-4c0-1-1.5-1-2 0s-2 .5-2 1" /></svg>
  ),
  html: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M4 2l1.5 17L12 22l6.5-3L20 2z" /><path d="M9 7h8l-.5 5H9l.5 5 2.5 1 2.5-1 .2-2" /></svg>
  ),
  css: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M4 2l1.5 17L12 22l6.5-3L20 2z" /><path d="M9 7h6l-.5 4.5H9l.5 4.5 2.5 1 2.5-1 .3-3" /></svg>
  ),
  python: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M18 10h-6V4a2 2 0 0 0-4 0v6H4v4h6v6a2 2 0 0 0 4 0v-6h4v-4z" /></svg>
  ),
  git: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a2 2 0 0 0-2-2H8" /><path d="M6 9v6" /></svg>
  ),

  // ✅ NEW (Flask + FastAPI using Python icon)
  flask: () => ICONS.python(),
  fastapi: () => ICONS.python(),
}

const SkillCard = ({ skill }) => {
  const Icon = ICONS[skill.icon] || ICONS.python // ✅ safe fallback

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-3 bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors py-2.5 px-3 rounded-md min-w-0"
    >
      <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${skill.color}`}>
        <Icon />
      </div>
      <span className="text-[13px] sm:text-sm font-semibold text-gray-200 tracking-wide truncate">
        {skill.name}
      </span>
    </motion.div>
  )
}

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0c0c0c] overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <FadeIn>
          <div className="flex justify-center mb-16 sm:mb-24 px-4">
            <div className="relative inline-flex items-center justify-center px-8 py-2 md:px-12 md:py-3">

              <div className="absolute top-0 left-0 w-[50%] h-[60%] border-t-[3px] border-l-[3px] border-[#a855f7] rounded-tl-[20px] shadow-[[-2px_-2px_15px_rgba(168,85,247,0.5)]]"></div>

              <div className="absolute bottom-0 right-0 w-[50%] h-[60%] border-b-[3px] border-r-[3px] border-[#a855f7] rounded-br-[20px] shadow-[2px_2px_15px_rgba(168,85,247,0.5)]"></div>

              <h2 className="text-3xl md:text-5xl font-bold text-white relative z-10">
                Skills
              </h2>
            </div>
          </div>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
        >
          {CATEGORIES.map(cat => (
            <motion.div key={cat.id}>
              <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
              <div className={`w-12 border-b-[3px] rounded-full mb-6 ${cat.borderColor}`} />

              <div className="flex flex-col gap-[10px]">
                {cat.skills.map(skill => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default SkillsSection