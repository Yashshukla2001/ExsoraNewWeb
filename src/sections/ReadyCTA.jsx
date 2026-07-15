import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

/* Animated network / particle field for the right panel */
const NET_NODES = [
  [72,55],[180,30],[290,60],[350,140],[280,210],[160,230],[60,175],[200,130],
]
const NET_EDGES = [[0,7],[7,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[7,4],[1,7],[3,7]]

function AuroraNet() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
      {/* background glows */}
      <motion.div className="absolute left-[15%] top-[20%] h-48 w-48 rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(255,140,60,0.35),transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute right-[10%] bottom-[15%] h-48 w-48 rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(61,124,255,0.4),transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

      {/* SVG network */}
      <svg viewBox="0 0 420 280" className="absolute inset-0 h-full w-full" fill="none">
        {NET_EDGES.map(([a, b], i) => (
          <motion.line key={i}
            x1={NET_NODES[a][0]} y1={NET_NODES[a][1]} x2={NET_NODES[b][0]} y2={NET_NODES[b][1]}
            stroke="rgba(255,255,255,0.08)" strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: [0.04, 0.2, 0.04] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }} />
        ))}
        {NET_NODES.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={3}
            fill="rgba(255,255,255,0)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"
            animate={{ r: [3, 5, 3], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.28 }} />
        ))}
        {/* two travelling data packets */}
        {[[0,7,1,2],[4,5,6,0]].map((path, pi) => (
          <motion.circle key={pi} r={2.5} fill={pi === 0 ? '#ffc15e' : '#5ad1ff'}
             cx={NET_NODES[path[0]][0]} cy={NET_NODES[path[0]][1]}
            animate={{
              cx: path.map(idx => NET_NODES[idx][0]),
              cy: path.map(idx => NET_NODES[idx][1]),
            }}
            transition={{ duration: 5 + pi * 0.8, repeat: Infinity, ease: 'linear', delay: pi * 1.5,
              times: path.map((_, i) => i / (path.length - 1)) }} />
        ))}
      </svg>

      {/* centre EXSORA orb */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <motion.div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm"
          animate={{ boxShadow: ['0 0 0 0 rgba(90,209,255,0)', '0 0 0 20px rgba(90,209,255,0)', '0 0 0 0 rgba(90,209,255,0)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}>
          <span className="text-[11px] font-bold tracking-widest text-white">EXSORA</span>
        </motion.div>
        <motion.p className="text-[10px] tracking-widest text-white/30 uppercase"
          animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.4, repeat: Infinity }}>
          Custom Business Solutions
        </motion.p>
      </div>
    </div>
  )
}

export default function ReadyCTA() {
  return (
    <section className="px-4 py-14 sm:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="scale">
         <div className="cta-dark-shell relative overflow-hidden rounded-3xl border border-white/8 bg-surface"
            style={{ background: 'linear-gradient(135deg,rgba(12,15,22,0.98) 0%,rgba(8,10,18,0.96) 100%)' }}>
            {/* subtle grid */}
            <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative grid min-h-0 items-center gap-0 lg:grid-cols-2 lg:min-h-[340px]">
              {/* LEFT — CTA text */}
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to get<br />started?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 max-w-sm text-base text-secondary">
                  Let's make this happen. We're ready when you are.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 flex flex-col gap-3">
                  {/* Get Started — white filled */}
                  <a href="#pricing" data-cursor="link"
                    className="flex items-center justify-center rounded-full bg-white py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)]">
                    Get Started
                  </a>
                  {/* Get in touch — dark glass */}
                  <a href="#faq" data-cursor="link"
                    className="flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/30 hover:text-white">
                    Get in touch
                  </a>
                </motion.div>
              </div>

              {/* RIGHT — animated aurora network */}
              <div className="hidden h-full lg:block" style={{ minHeight: 340 }}>
                <AuroraNet />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
