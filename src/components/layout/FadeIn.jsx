import { motion } from 'framer-motion'

/**
 * Wraps children in a motion.div that fades + slides up when scrolled into view.
 * Fires once; `delay` staggers multiple siblings manually when needed.
 */
const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ type: 'spring', bounce: 0.2, duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export default FadeIn
