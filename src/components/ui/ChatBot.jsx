import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Icons ──────────────────────────────────────────────────────────────── */

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
       strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" stroke="none" />
  </svg>
)

/* ── Bot responses ──────────────────────────────────────────────────────── */

const QUICK_REPLIES = [
  'Tell me about your projects',
  'What technologies do you use?',
  'How can I contact you?',
  'Who are you?',
]

/**
 * AI Response Parser:
 * Simulates an LLM backend capability internally. Utilizes RegEx matching against predefined
 * trigger lexicons (e.g. "project", "stack") to return sophisticated, contextual strings 
 * regarding personal infrastructure capabilities directly to the user instance.
 */
function getBotResponse(msg) {
  const m = msg.toLowerCase()

  if (m.match(/project|build|made|created|portfolio|music|zerodha|knowledge/)) {
    return "I engineered an AI Music Recommendation System (TF-IDF, Cosine Similarity, 113k track dataset, YouTube integration), a Smart Knowledge Explorer utilizing LLM/RAG pipelines, and a high-concurrency Zerodha trading clone via Node/Express/MongoDB. They are actively deployed!"
  }
  if (m.match(/tech|technolog|stack|language|framework|tool|skill/)) {
    return "I specialize in robust full-stack architecture. Frontend: React, Tailwind. Backend: Node.js, Express, Flask. Databases: MongoDB, PostgreSQL. ML Suite: Python, Scikit-learn, Pandas, OpenAI APIs, and LangChain."
  }
  if (m.match(/contact|reach|email|hire|available|opportunit/)) {
    return "I'm actively open to exciting engineering opportunities! You can drop an email via the Contact form below, or reach out to me directly on LinkedIn. Let's build something brilliant!"
  }
  if (m.match(/who|about|yourself|background|experience|ajit/)) {
    return "I am Ajit Paraskar, a Full Stack Developer and AI integration specialist. I focus on bridging the gap between complex machine learning pipelines and seamless, fault-tolerant web applications."
  }

  return "I'm an AI assistant built exclusively for Ajit's portfolio. Probe me on his backend architecture, ML implementations, or how to get in touch!"
}

/* ── Typing indicator ───────────────────────────────────────────────────── */

const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-2.5">
    {[0, 0.15, 0.3].map((delay) => (
      <motion.span
        key={delay}
        className="w-1.5 h-1.5 bg-gray-400 rounded-full block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

/* ── Message bubble ─────────────────────────────────────────────────────── */

const BotBubble = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="flex items-end gap-2"
  >
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0 mb-0.5">
      <span className="text-white text-[9px] font-bold select-none">AI</span>
    </div>
    <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[82%]">
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
)

const UserBubble = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="flex justify-end"
  >
    <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl rounded-br-sm px-3 py-2 max-w-[82%]">
      <p className="text-white text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
)

/* ── ChatBot ────────────────────────────────────────────────────────────── */

const WELCOME = { id: 0, role: 'bot', text: "Hi! 👋 I'm a portfolio assistant. Ask me anything or try a quick reply below." }

/**
 * ChatBot Component:
 * A reusable floating conversational UI serving as an interactive AI guide for the portfolio.
 * - Maintains local dialogue state (`messages`) initialized with a welcome message.
 * - Leverages Framer Motion for performant layout animations and typing indicators.
 * - Uses `getBotResponse` as a static client-side NLP matcher to provide contextual answers.
 */
const ChatBot = () => {
  const [isOpen,   setIsOpen]   = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input,    setInput]    = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Focus input when window opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200)
  }, [isOpen])

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: getBotResponse(trimmed) },
      ])
    }, 950)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  return (
    <>
      {/* ── Chat window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-20 right-4 sm:right-6 z-50
                       w-[calc(100vw-2rem)] max-w-[360px] h-[520px]
                       bg-white rounded-2xl shadow-2xl border border-gray-100
                       flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0
                            bg-gradient-to-r from-blue-600 to-violet-600">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold select-none">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold leading-none">Portfolio Assistant</p>
                <p className="text-white/65 text-[10px] mt-0.5">Ask me anything</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 flex items-center justify-center rounded-full
                           bg-white/10 hover:bg-white/25 transition-colors text-white flex-shrink-0"
              >
                <IconClose />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
              style={{ scrollbarWidth: 'none' }}
            >
              {messages.map((msg) =>
                msg.role === 'bot'
                  ? <BotBubble key={msg.id} text={msg.text} />
                  : <UserBubble key={msg.id} text={msg.text} />
              )}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[9px] font-bold select-none">AI</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-bl-sm">
                    <TypingDots />
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div
              className="px-3 pb-2 flex gap-2 overflow-x-auto flex-shrink-0"
              style={{ scrollbarWidth: 'none' }}
            >
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => send(reply)}
                  disabled={isTyping}
                  className="flex-shrink-0 text-xs text-blue-600 bg-blue-50 border border-blue-100
                             px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors
                             disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-1 flex-shrink-0">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl
                              px-3 py-2 focus-within:border-blue-400 focus-within:ring-2
                              focus-within:ring-blue-100 transition">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-sm text-gray-800
                             placeholder:text-gray-400 outline-none disabled:opacity-50"
                />
                <motion.button
                  onClick={() => send(input)}
                  disabled={!input.trim() || isTyping}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.12 }}
                  className="w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0
                             bg-gradient-to-r from-blue-600 to-violet-600 text-white
                             disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  <IconSend />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating action button ── */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50
                   w-12 h-12 rounded-full
                   bg-gradient-to-r from-blue-600 to-violet-600
                   text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200
                   flex items-center justify-center transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="x"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <IconClose />
            </motion.span>
          ) : (
            <motion.span key="chat"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <IconChat />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}

export default ChatBot
