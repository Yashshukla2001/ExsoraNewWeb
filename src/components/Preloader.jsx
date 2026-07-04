import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'EXSORA'.split('')

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    // Stagger letter reveal
    LETTERS.forEach((_, i) => {
      setTimeout(() => setRevealed(i + 1), 180 + i * 110)
    })
    // progress bar
    const inc = setInterval(() => setProgress((p) => Math.min(p + Math.random() * 22, 100)), 100)
    // dismiss
    const hide = setTimeout(() => setVisible(false), 2200)
    return () => { clearInterval(inc); clearTimeout(hide) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="preloader"
          exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.06 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          {/* tech grid scan */}
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(90,209,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(90,209,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* horizontal scan line */}
          <motion.div className="pointer-events-none absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent"
            animate={{ top: ['-2%', '102%'] }}
            transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* corner brackets */}
          {['top-6 left-6 border-t border-l', 'top-6 right-6 border-t border-r', 'bottom-6 left-6 border-b border-l', 'bottom-6 right-6 border-b border-r'].map((cls, i) => (
            <motion.div key={i} className={`absolute h-10 w-10 border-accent-cyan/40 ${cls}`}
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
            />
          ))}

          {/* ambient glow */}
          <motion.div className="pointer-events-none absolute h-72 w-72 rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(61,124,255,0.2),rgba(90,209,255,0.08),transparent 70%)', filter: 'blur(50px)' }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* wordmark — letters build one by one */}
          <div className="relative z-10 flex items-center gap-[2px]">
            {LETTERS.map((ch, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={revealed > i ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl font-black tracking-tighter sm:text-6xl"
                style={{
                  background: 'linear-gradient(180deg,#ffffff 30%,rgba(90,209,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* tagline */}
          <motion.p className="relative z-10 mt-3 text-xs tracking-[0.35em] text-muted uppercase"
            initial={{ opacity: 0 }} animate={{ opacity: revealed >= LETTERS.length ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
           CUSTOM BUSINESS SOLUTION || YOUR GROWTH PARTNER
          </motion.p>

          {/* progress bar */}
          <motion.div className="relative z-10 mt-10 w-52"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/8">
              <motion.div animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-accent-orange via-accent-cyan to-accent-blue"
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted/60">
              <span>INITIALIZING</span>
              <span>{Math.round(Math.min(progress, 100))}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
