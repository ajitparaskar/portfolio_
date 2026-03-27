import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'
import { PROJECTS } from '@/constants/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 } 
  },
}

/* ── Inline SVG icons ───────────────────────────────────────────────── */
const IconExternalLink = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth="2.5"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const IconGitHub = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"
       fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

/* ── Card ──────────────────────────────────────────────────────────────────── */
const ProjectCard = ({ title, description, tech, demo, github, gradient, image }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.01, transition: { type: 'spring', bounce: 0.4, duration: 0.6 } }}
    className="group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-white/10 transition-all duration-500 shadow-2xl"
  >
    {/* Header with Image or Fallback Gradient */}
    <div className={`relative h-48 sm:h-56 flex items-center justify-center shrink-0 overflow-hidden ${!image ? `bg-gradient-to-br ${gradient}` : 'bg-gray-900'}`}>
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
      )}

      {/* Dark gradient overlay on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40" />

      {/* Action buttons Overlay (appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-full shadow-lg transition-transform hover:scale-110"
          >
            <IconGitHub />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-full shadow-lg transition-transform hover:scale-110"
          >
            <IconExternalLink />
          </a>
        )}
      </div>
    </div>

    {/* Card body */}
    <div className="p-5 sm:p-6 flex flex-col flex-1 bg-[#0a0a0a]">
      <h3 className="text-2xl font-bold font-serif text-white mb-2 leading-snug group-hover:text-[#c084fc] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-[15px] leading-relaxed mb-5 flex-1">{description}</p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech?.map((t) => (
          <span
            key={t}
            className="text-[12px] text-[#d8b4fe] bg-[#a855f7]/10 border border-[#a855f7]/30 px-3 py-1.5 rounded-full font-medium tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

/* ── Section ──────────────────────────────────────────────────────────────────── */

const ProjectsSection = () => (
  <section id="projects" className="relative py-28 bg-gray-950">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <Container className="max-w-7xl">
      <FadeIn className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white mb-4">
          Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of my work in modern web development and clean UI/UX design.
        </p>
      </FadeIn>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {PROJECTS?.length > 0 ? (
          PROJECTS.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No projects to display at the moment.</p>
        )}
      </motion.div>
    </Container>
  </section>
)

export default ProjectsSection
