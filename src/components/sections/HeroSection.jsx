import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import LetterGlitch from '@/components/ui/LetterGlitch'

// Shared fade-up preset for entrance animations (above-the-fold, not scroll-triggered)
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden pt-14"
    >
      {/* Background Matrix/Glitch Effect */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Decorative radial blobs — pure CSS, no JS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 mix-blend-screen">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-900/30 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-violet-900/30 opacity-50 blur-3xl" />
      </div>

      <Container className="relative z-10 py-24 flex flex-col items-center text-center">

        {/* Availability badge */}
        <motion.span
          {...fadeUp(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
          Available for work
        </motion.span>

        {/* Name — gradient on the name itself */}
        <motion.h1
          {...fadeUp(0.15)}
          className="mb-4 text-5xl font-extrabold font-serif leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Ajit Paraskar
          </span>
        </motion.h1>

        {/* Role / title */}
        <motion.p
          {...fadeUp(0.25)}
          className="mb-5 text-xl font-medium text-gray-300 sm:text-2xl"
        >
          Full Stack Developer
          <span className="mx-3 font-light text-gray-600">|</span>
          AI/ML Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.35)}
          className="mb-10 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          I build scalable full-stack applications and AI-powered systems using modern technologies like React, Node.js, and Machine Learning.
        </motion.p>

        {/* CTA buttons — stacked on mobile, inline on sm+ */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row flex-wrap justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/50 hover:opacity-90 text-center"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/march-resume-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
            className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors text-center"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
            className="rounded-xl border border-white/20 bg-transparent px-8 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white backdrop-blur-md transition-colors text-center"
          >
            Contact Me
          </motion.a>
        </motion.div>

      </Container>
    </section>
  )
}

export default HeroSection
