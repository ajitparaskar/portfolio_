import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import { FEATURES, TECH, RECS, ACCENT, STATS, WAVE_HEIGHTS } from '@/constants/features'

/* ── Icons ──────────────────────────────────────────────────────────────── */

const IconBrain = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M10 3.5C7.5 3.5 5.5 5.3 5.5 7.5c0 1 .3 2 .9 2.7C5.5 11 5 12 5 13c0 1.8 1.3 3.2 3 3.4V17h4v-.6c1.7-.2 3-1.6 3-3.4 0-1-.5-2-1.4-2.8.6-.7.9-1.7.9-2.7C14.5 5.3 12.5 3.5 10 3.5z" />
    <line x1="10" y1="3.5" x2="10" y2="8.5" />
    <line x1="7.5" y1="8.5" x2="12.5" y2="8.5" />
  </svg>
)

const IconPlay = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="10" cy="10" r="7.5" />
    <path d="M8.5 7l4.5 3-4.5 3V7z" fill="currentColor" stroke="none" />
  </svg>
)

const IconMusicNote = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M9 15.5a2 2 0 104 0 2 2 0 00-4 0z" />
    <path d="M13 15.5V6.5l4-1v3" />
    <path d="M9 15.5V9.5" />
  </svg>
)

const ICONS = { brain: IconBrain, play: IconPlay, music: IconMusicNote }

const IconExternalLink = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M15 11.5v4a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h4.5" />
    <polyline points="13,3 17,3 17,7" />
    <line x1="8.5" y1="11.5" x2="17" y2="3" />
  </svg>
)

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

/* ── Data ───────────────────────────────────────────────────────────────── */


const Waveform = () => (
  <div className="flex items-end gap-[2px] h-5 flex-shrink-0">
    {WAVE_HEIGHTS.map((h, i) => (
      <motion.div
        key={i}
        className="w-[3px] rounded-full bg-violet-400"
        animate={{ height: [`${h * 2}px`, `${h * 4}px`, `${h * 2}px`] }}
        transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
      />
    ))}
  </div>
)

/* ── App Visual (right panel) ───────────────────────────────────────────── */

const MusicNoteSmall = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-80">
    <path d="M9 15.5a2 2 0 104 0 2 2 0 00-4 0z" />
    <path d="M13 15.5V6.5l4-1v3" />
    <path d="M9 15.5V9.5" />
  </svg>
)

const AppVisual = () => (
  <div className="relative w-full rounded-2xl overflow-hidden bg-gray-900 border border-white/10
                  p-5 flex flex-col gap-4 min-h-[500px]">

    {/* Ambient glow blobs */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-52 h-52 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl" />
    </div>

    {/* ── Now Playing ── */}
    <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-4">
      <p className="text-[10px] text-white/35 font-semibold uppercase tracking-widest mb-3">
        Now Playing
      </p>

      <div className="flex items-center gap-3 mb-3">
        {/* Album art */}
        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600
                        flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-900/40">
          <MusicNoteSmall />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white/90 text-sm font-semibold leading-none mb-1">Blinding Lights</p>
          <p className="text-white/40 text-xs">The Weeknd · Synth-pop</p>
        </div>
        <Waveform />
      </div>

      {/* Progress bar */}
      <div className="w-full h-[3px] bg-white/10 rounded-full">
        <div className="h-full w-[62%] bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
      <div className="flex justify-between text-[10px] text-white/30 mt-1.5">
        <span>2:04</span>
        <span>3:22</span>
      </div>
    </div>

    {/* ── Recommendations ── */}
    <div className="relative z-10 flex-1 flex flex-col">
      <p className="text-[10px] text-white/35 font-semibold uppercase tracking-widest mb-2.5">
        Recommended for you
      </p>
      <div className="flex flex-col gap-2">
        {RECS.map(({ title, artist, match, gradient }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5"
          >
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} flex-shrink-0 shadow-sm`} />
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs font-medium leading-none mb-1 truncate">{title}</p>
              <p className="text-white/40 text-[10px]">{artist}</p>
            </div>
            <span className="text-xs font-semibold text-emerald-400 flex-shrink-0 tabular-nums">
              {match}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── Stats ── */}
    <div className="relative z-10 grid grid-cols-3 gap-2">
      {STATS.map(({ label, value }) => (
        <div key={label} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
          <p className="text-white text-sm font-bold leading-none mb-1">{value}</p>
          <p className="text-white/35 text-[10px] leading-snug">{label}</p>
        </div>
      ))}
    </div>
  </div>
)

/* ── Animation variants ─────────────────────────────────────────────────── */

const featureVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

/* ── Section ────────────────────────────────────────────────────────────── */

/**
 * FeaturedProjectSection Component:
 * A specialized highlight section for a single marquee project (e.g., AI Music Recommendation).
 * - Visually distinct from the standard `ProjectsSection` via a dark, high-contrast theme.
 * - Incorporates complex animated visuals (`AppVisual`, `Waveform`) simulating the system UI.
 * - Defensively maps over `FEATURES` and `TECH` constants to gracefully handle missing data.
 */
const FeaturedProjectSection = () => (
  <section id="featured" className="relative py-32 bg-gray-950">
    {/* Elegant dark section glowing divider */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: copy ── */}
        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-xs font-semibold text-violet-400 tracking-[0.2em] uppercase">
              Featured Project
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5"
          >
            AI Music{' '}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Recommendation
            </span>
            {' '}System
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            A machine learning system that analyses your listening history and mood to surface
            personalised recommendations using collaborative filtering and the Spotify API —
            with seamless YouTube playback and a persistent floating player.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-col gap-3 mb-8"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {FEATURES?.length > 0 ? (
              FEATURES.map(({ iconId, title, description, accent }) => {
                const { text, bg, border } = ACCENT[accent] || ACCENT.blue
                const Icon = ICONS[iconId] || ICONS.play
                return (
                  <motion.div
                    key={title}
                    variants={featureVariants}
                    className={`flex gap-4 p-4 rounded-xl border ${border} ${bg}`}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-white/10 border border-white/10
                                    flex items-center justify-center flex-shrink-0 ${text}`}>
                      <Icon />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold mb-1 ${text}`}>{title}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <p className="text-white/30 text-sm italic">Feature details are currently unavailable.</p>
            )}
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {TECH?.length > 0 ? (
              TECH.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-white/55 bg-white/5 border border-white/10
                             px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))
            ) : null}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="https://music-recomendation-system-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm
                         font-semibold shadow-lg shadow-violet-900/50 hover:opacity-90"
            >
              <IconExternalLink /> Live Demo
            </motion.a>
            <motion.a
              href="https://github.com/Ajit-Paraskar/ai-music-recommendation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         border border-white/15 text-white/70 text-sm font-semibold
                         hover:bg-white/5 hover:text-white transition-colors"
            >
              <IconGitHub /> GitHub
            </motion.a>
          </motion.div>

        </div>

        {/* ── Right: App visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
        >
          <AppVisual />
        </motion.div>

      </div>
    </Container>
  </section>
)

export default FeaturedProjectSection
