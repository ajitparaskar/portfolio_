import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'
import { HIGHLIGHTS } from '@/constants/skills'

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
  },
}



const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-black to-gray-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-center">
          {/* Bio Text */}
          <div className="lg:col-span-7 max-w-2xl">
            <FadeIn>
              <p className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase mb-3">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white mb-6">
                A bit <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">about me</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                I'm a <span className="text-white font-medium">Full Stack Developer</span> with strong expertise in building <span className="text-white font-medium">scalable web applications</span> and <span className="text-white font-medium">AI-driven systems</span>. I have experience working with <span className="text-white font-medium">React, Node.js, Flask,</span> and <span className="text-white font-medium">Machine Learning models</span>.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                I enjoy solving real-world problems by combining <span className="text-white font-medium">backend architecture</span> with <span className="text-white font-medium">intelligent systems</span> like recommendation engines and knowledge-based AI tools.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                When I'm not coding, I'm exploring <span className="text-white font-medium">machine learning research</span>, experimenting with new
                frameworks, or tinkering with side projects that push my limits.
              </p>
            </FadeIn>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.2} className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-900/40 to-violet-900/40 rounded-[2rem] transform -rotate-6 scale-95 opacity-70 border border-white/5 -z-10 transition-transform duration-500 hover:rotate-0" />
              
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-gray-800 bg-gray-900 transform transition-transform duration-500 hover:scale-[1.02]">
                {/* Fallback avatar if hero.png is missing or generic. Replace src with your actual photo! */}
                <img 
                  src="/src/assets/hero.png" 
                  alt="Ajit Paraskar" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image path fails
                    e.target.src = "https://ui-avatars.com/api/?name=Ajit+Paraskar&size=512&background=1e293b&color=60a5fa"
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Highlighted projects */}
        <div>
          <FadeIn>
            <h3 className="text-lg font-semibold text-gray-200 mb-5">What I've been building</h3>
          </FadeIn>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {HIGHLIGHTS?.map(({ icon, title, summary, href }) => (
              <motion.a
                key={title}
                href={href}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-200"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                  {title}
                </span>
                <span className="text-xs text-gray-400 leading-relaxed">{summary}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
