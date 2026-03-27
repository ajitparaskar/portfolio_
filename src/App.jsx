import React, { Suspense } from 'react'

/**
 * App Architecture Overview:
 * - Component Tree: One-page scrollable layout where main sections map to discrete concepts.
 * - Lazy Loading: All major sections are loaded asynchronously (React.lazy) to optimize Time to Interactive (TTI).
 * - Suspense Boundary: Ensures a graceful fallback loading state during component chunk fetching.
 * - State Management: Simple local component state keeps data paths clean and performant.
 * - Imports: Aliased absolute paths (@/...) ensure consistency and prevent deeply nested relative links.
 */
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/ui/ChatBot'

const HeroSection = React.lazy(() => import('@/components/sections/HeroSection'))
const AboutSection = React.lazy(() => import('@/components/sections/AboutSection'))
const SkillsSection = React.lazy(() => import('@/components/sections/SkillsSection'))
const ProjectsSection = React.lazy(() => import('@/components/sections/ProjectsSection'))
const GitHubStatsSection = React.lazy(() => import('@/components/sections/GitHubStatsSection'))
const ContactSection = React.lazy(() => import('@/components/sections/ContactSection'))

const Loader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GitHubStatsSection />
          <ContactSection />
        </Suspense>
      </main>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App
