import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import FadeIn from '@/components/layout/FadeIn'

/* ─── Config ──────────────────────────────────────────────────────────────
   Update these with your actual platform handles
   ────────────────────────────────────────────────────────────────────── */
const USERNAMES = {
  github: 'ajitparaskar',
  leetcode: 'justajit',
  codeforces: 'ajitparaskar',
  gfg: 'ajitparaskar'
}

const LINKS = {
  github: `https://github.com/${USERNAMES.github}`,
  leetcode: `https://leetcode.com/u/${USERNAMES.leetcode}/`,
  codeforces: `https://codeforces.com/profile/${USERNAMES.codeforces}`,
  gfg: `https://auth.geeksforgeeks.org/user/${USERNAMES.gfg}/`
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const IconLeetCode = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.42 2.321-1.42 3.66 0 1.358.482 2.698 1.458 3.674l5.378 5.419c.983.981 2.308 1.459 3.66 1.459s2.698-.482 3.676-1.458l2.64-2.61c.516-.515.498-1.367-.037-1.902-.536-.535-1.388-.552-1.903-.038zm-1.862-5.463c0 .736-.596 1.333-1.333 1.333h-6.73c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333h6.73c.737 0 1.333.597 1.333 1.333z" />
  </svg>
)

const IconCodeforces = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5S3 20.328 3 19.5V9c0-.828.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5S12 20.328 12 19.5V9c0-.828.672-1.5 1.5-1.5zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5z" fill="#1f8acb" />
    <path d="M13.5 19.5V9c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v10.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5z" fill="#ffd12a" />
    <path d="M4.5 19.5V9c0-.828-.672-1.5-1.5-1.5S1.5 8.172 1.5 9v10.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5z" fill="#f84d2b" />
  </svg>
)

const IconGfG = () => (
  <div className="w-6 h-6 flex items-center justify-center font-extrabold text-[#2F8D46] bg-[#2F8D46]/10 rounded-full text-[10px] uppercase tracking-tighter">
    GFG
  </div>
)

const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

/* ─── Components ────────────────────────────────────────────────────────── */

const Skeleton = () => (
  <div className="h-20 w-full animate-pulse bg-white/5 rounded-xl border border-white/5 mt-2"></div>
)

const ProfileCard = ({ title, icon, url, data, loading, error, renderStats, delayIndex }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: delayIndex * 0.1, ease: 'easeOut' }}
      className="block group bg-gray-900 border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 hover:bg-white/5 transition-all duration-300 relative"
    >
      <div className="absolute top-5 right-5 text-gray-600 group-hover:text-blue-400 transition-colors">
        <IconExternalLink />
      </div>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gray-950 border border-white/5 rounded-xl text-white shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-200">{title}</h3>
      </div>

      {loading ? (
        <Skeleton />
      ) : error || !data ? (
        <div className="text-sm text-gray-500 mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
          <span>Profile available.</span>
          <span className="text-blue-400 group-hover:underline">Click to view &rarr;</span>
        </div>
      ) : (
        <div className="mt-5 pt-4 border-t border-white/5">
          {renderStats(data)}
        </div>
      )}
    </motion.a>
  )
}

/* ─── Main Section ──────────────────────────────────────────────────────── */

const GitHubStatsSection = () => {
  const [github, setGithub] = useState({ data: null, loading: true, error: false })
  const [leetcode, setLeetcode] = useState({ data: null, loading: true, error: false })
  const [codeforces, setCodeforces] = useState({ data: null, loading: true, error: false })
  const [gfg, setGfg] = useState({ data: null, loading: true, error: false })

  useEffect(() => {
    // 1. Fetch GitHub
    fetch(`https://api.github.com/users/${USERNAMES.github}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) throw new Error(data.message)
        setGithub({ data, loading: false, error: false })
      })
      .catch(() => setGithub({ data: null, loading: false, error: true }))

    // 2. Fetch LeetCode (Unofficial API Heroku)
    fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAMES.leetcode}`)
      .then(res => res.json())
      .then(data => {
        if (data.status !== 'success') throw new Error('API Error')
        setLeetcode({ data, loading: false, error: false })
      })
      .catch(() => setLeetcode({ data: null, loading: false, error: true }))

    // 3. Fetch Codeforces
    fetch(`https://codeforces.com/api/user.info?handles=${USERNAMES.codeforces}`)
      .then(res => res.json())
      .then(data => {
        if (data.status !== 'OK') throw new Error('API Error')
        setCodeforces({ data: data.result[0], loading: false, error: false })
      })
      .catch(() => setCodeforces({ data: null, loading: false, error: true }))

    // 4. GeeksforGeeks
    // Since reliable GfG APIs fluctuate, we try to fetch, if it fails, fallback kicks in smoothly.
    fetch(`https://geeks-for-geeks-api-two.vercel.app/${USERNAMES.gfg}`)
      .then(res => {
        if (!res.ok) throw new Error('API Error')
        return res.json()
      })
      .then(data => {
        if (!data || !data.info) throw new Error('Invalid Data')
        setGfg({ data: data.info, loading: false, error: false })
      })
      .catch(() => setGfg({ data: null, loading: false, error: true }))
  }, [])

  return (
    <section id="profiles" className="py-24 bg-gray-950 relative">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-blue-500"></div>
            <p className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase">
              Coding Profiles
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white mb-4">
            Stats & <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl leading-relaxed">
            Live metrics from my primary coding platforms, tracking my open-source
            contributions, problem-solving progress, and competitive programming standing.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* GitHub */}
          <ProfileCard
            delayIndex={0}
            title="GitHub"
            icon={<IconGitHub />}
            url={LINKS.github}
            loading={github.loading}
            error={github.error}
            data={github.data}
            renderStats={(data) => (
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">{data.public_repos || 0}</span>
                  <span className="text-gray-400 text-sm pb-1">Repositories</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1 font-medium tracking-wide">
                  <span><b className="text-blue-400">{data.followers || 0}</b> Followers</span>
                  <span>&middot;</span>
                  <span><b className="text-blue-400">{data.following || 0}</b> Following</span>
                </div>
              </div>
            )}
          />

          {/* LeetCode */}
          <ProfileCard
            delayIndex={1}
            title="LeetCode"
            icon={<IconLeetCode />}
            url={LINKS.leetcode}
            loading={leetcode.loading}
            error={leetcode.error}
            data={leetcode.data}
            renderStats={(data) => (
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">{data.totalSolved || 0}</span>
                  <span className="text-gray-400 text-sm pb-1">Problems Solved</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-1 font-medium">
                  <span className="text-green-400">{data.easySolved || 0} Easy</span>
                  <span className="text-yellow-500">{data.mediumSolved || 0} Med</span>
                  <span className="text-red-400">{data.hardSolved || 0} Hard</span>
                </div>
              </div>
            )}
          />

          {/* Codeforces */}
          <ProfileCard
            delayIndex={2}
            title="Codeforces"
            icon={<IconCodeforces />}
            url={LINKS.codeforces}
            loading={codeforces.loading}
            error={codeforces.error}
            data={codeforces.data}
            renderStats={(data) => (
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">{data.rating || 'N/A'}</span>
                  <span className="text-gray-400 text-sm pb-1">Current Rating</span>
                </div>
                <div className="flex flex-col gap-1 text-sm mt-2 font-medium text-gray-400">
                  <div className="capitalize text-purple-400">{data.rank || "Unrated"}</div>
                  <div>Max rating: <span className="text-gray-200">{data.maxRating || "N/A"}</span></div>
                </div>
              </div>
            )}
          />

          {/* GeeksforGeeks */}
          <ProfileCard
            delayIndex={3}
            title="GeeksforGeeks"
            icon={<IconGfG />}
            url={LINKS.gfg}
            loading={gfg.loading}
            error={gfg.error}
            data={gfg.data}
            renderStats={(data) => {
              // Fallback format for geeksforgeeks api shape
              const total = data.totalProblemsSolved || data.codingScore || 'Pro'
              return (
                <div className="flex flex-col gap-1">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">{total}</span>
                    <span className="text-gray-400 text-sm pb-1">Problems Solved</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mt-1 font-medium text-gray-400">
                    <span className="text-[#2F8D46]">Coding Enthusiast</span>
                  </div>
                </div>
              )
            }}
          />
        </div>
      </Container>
    </section>
  )
}

export default GitHubStatsSection
