import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'
import { SOCIAL } from '@/constants/social'

const SOCIAL_ICONS = {
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}



/* ── Shared input style ───────────────────────────────────────────────── */
const INPUT =
  'w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-sm text-white ' +
  'placeholder:text-gray-500 outline-none focus:bg-gray-900 focus:border-blue-500 ' +
  'focus:ring-2 focus:ring-blue-500/20 transition'

/* ── Success state ────────────────────────────────────────────────────── */
const SuccessMessage = () => (
  <div className="flex flex-col items-center justify-center text-center h-full gap-4 py-12">
    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="w-7 h-7 text-emerald-400">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <div>
      <p className="text-base font-semibold text-white mb-1">Message sent!</p>
      <p className="text-sm text-gray-400">Thanks for reaching out — I'll get back to you soon.</p>
    </div>
  </div>
)

/* ── Section ──────────────────────────────────────────────────────────── */
const ContactSection = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 bg-gray-950">
      {/* Subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-100" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: info + social ── */}
          <FadeIn>
            <p className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white mb-4">
              Let's work <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">together</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Have a project in mind, a question, or just want to say hi? I'm always open
              to new opportunities and good conversations.
            </p>

            {/* Email link */}
            <a
              href="mailto:ajitparaskar87@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors mb-10 group"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="4" width="16" height="12" rx="2" />
                <polyline points="2,5 10,11 18,5" />
              </svg>
              ajitparaskar87@gmail.com
            </a>

            {/* Social cards */}
            <div className="flex flex-col gap-3">
              {SOCIAL?.map(({ label, handle, href }) => {
                const Icon = SOCIAL_ICONS[label]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${label}`}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white shrink-0 transition-colors">
                      {Icon && <Icon />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-200">{label}</p>
                      <p className="text-xs text-gray-500">{handle}</p>
                    </div>
                    {/* Arrow */}
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0">
                      <line x1="4" y1="10" x2="16" y2="10" />
                      <polyline points="11,5 16,10 11,15" />
                    </svg>
                  </a>
                )
              })}
            </div>
          </FadeIn>

          {/* ── Right: form ── */}
          <FadeIn delay={0.15} className="bg-gray-900 rounded-2xl border border-white/10 p-8 shadow-2xl">
            {sent ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500">Name</label>
                    <input
                      type="text"
                      placeholder="Ajit Paraskar"
                      required
                      className={INPUT}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500">Email</label>
                    <input
                      type="email"
                      placeholder="ajitparaskar87@gmail.com"
                      required
                      className={INPUT}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    required
                    className={`${INPUT} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
                  className="w-full bg-white text-gray-900 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </FadeIn>

        </div>
      </Container>
    </section>
  )
}

export default ContactSection
