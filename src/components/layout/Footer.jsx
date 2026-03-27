import Container from './Container'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ajitparaskar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajit-paraskar-21b923287/' },
  { label: 'Twitter', href: '#' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 py-8">
        <p className="text-xs text-gray-500">
          © {2026} Ajit Paraskar. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
