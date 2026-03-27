import { motion } from 'framer-motion'
import Container from './Container'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#featured' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <Container className="flex items-center justify-between h-14">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
        >
          Ajit Paraskar
        </a>

        {/* Nav links — visible on all sizes, tighten gap on mobile */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 sm:gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <motion.a
                href="/march-resume-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs sm:text-sm font-semibold text-gray-900 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors shadow-sm"
              >
                Download Resume
              </motion.a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
