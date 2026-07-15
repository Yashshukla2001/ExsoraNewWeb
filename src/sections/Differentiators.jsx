import { useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'
import Reveal from '../components/Reveal'

/* ══════════════════════════════════════
   CARD 1 — SPEED: black-hole vortex with
   particle streaks and grid overlay
══════════════════════════════════════ */
function SpeedVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden sm:h-56">
      {/* grid */}
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
      {/* rotating glow orb */}
      <motion.div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle,#ff8a3d 0%,#ffc15e 30%,rgba(61,124,255,0.4) 60%,transparent 80%)', filter: 'blur(18px)' }}
        animate={{ scale: [1, 1.12, 1], rotate: [0, 360] }}
        transition={{ scale: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
      />
      {/* particle streaks */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * 360
        const rad = (angle * Math.PI) / 180
        const r = 48 + (i % 3) * 18
        return (
          <motion.div key={i}
            className="absolute h-px rounded-full"
            style={{ left: '50%', top: '50%', width: 14 + i * 4, background: i % 2 === 0 ? '#5ad1ff' : '#ffc15e', transformOrigin: '0 0', rotate: angle, opacity: 0 }}
            animate={{ x: [r * Math.cos(rad), (r + 30) * Math.cos(rad)], opacity: [0, 0.9, 0], scaleX: [0.5, 1.3, 0.2] }}
            transition={{ duration: 1.6 + i * 0.15, repeat: Infinity, delay: i * 0.18, ease: 'easeOut' }}
          />
        )
      })}
    </div>
  )
}

/* ══════════════════════════════════════
   CARD 2 — DEEP CAPABILITIES: animated
   circuit-board / neural-net illustration
══════════════════════════════════════ */
const CIRCUIT_PATHS = [
  'M80,40 L160,40 L160,80 L220,80',
  'M220,80 L280,80 L280,120',
  'M80,40 L80,120 L160,120 L160,160',
  'M220,80 L220,140 L160,140',
  'M280,120 L280,180 L220,180',
  'M160,160 L220,160 L220,180',
]
const NODES = [[80,40],[160,40],[220,80],[280,120],[160,120],[80,120],[160,160],[220,160],[220,180],[280,180],[160,140]]

function CapabilitiesVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden sm:h-56">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 70% 50%,rgba(255,140,60,0.18),rgba(61,124,255,0.18),transparent 80%)' }} />
      <svg viewBox="0 0 360 220" className="absolute inset-0 h-full w-full" fill="none">
        {CIRCUIT_PATHS.map((d, i) => (
          <motion.path key={i} d={d} stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: i * 0.18, ease: 'easeInOut' }}
          />
        ))}
        {/* travelling dots — animate cx/cy along path waypoints, no TS casts */}
        {[
          { points: [[80,40],[160,40],[160,80],[220,80]], color: '#5ad1ff', delay: 0 },
          { points: [[80,40],[80,120],[160,120],[160,160]], color: '#ffc15e', delay: 0.8 },
          { points: [[280,120],[280,180],[220,180],[160,140]], color: '#5ad1ff', delay: 1.6 },
        ].map((dot, idx) => (
          <motion.circle key={idx} r={3} fill={dot.color}
           cx={dot.points[0][0]} cy={dot.points[0][1]}
            animate={{
              cx: dot.points.map(p => p[0]),
              cy: dot.points.map(p => p[1]),
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', delay: dot.delay, times: dot.points.map((_, i) => i / (dot.points.length - 1)) }}
          />
        ))}
        {NODES.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={4} fill="transparent" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"
            animate={{ r: [4, 6, 4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ══════════════════════════════════════
   CARD 3 — CONTROL: 3 animated vertical
   sliders with glowing knobs
══════════════════════════════════════ */
const SLIDER_CONFIGS = [
  { pct: 65, color: '#5ad1ff', delay: 0 },
  { pct: 30, color: '#ffc15e', delay: 0.2 },
  { pct: 75, color: '#5ad1ff', delay: 0.4 },
]
function ControlVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden sm:h-56">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 40% 60%,rgba(255,140,60,0.2),rgba(61,124,255,0.15),transparent 75%)' }} />
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        {SLIDER_CONFIGS.map((s, i) => (
          <div key={i} className="relative flex h-28 w-7 flex-col items-center sm:h-40 sm:w-9">
            {/* track */}
            <div className="relative h-full w-[3px] overflow-hidden rounded-full bg-white/10">
              <motion.div className="absolute bottom-0 w-full rounded-full"
                style={{ background: `linear-gradient(to top, ${s.color}, transparent)` }}
                initial={{ height: '0%' }} whileInView={{ height: `${s.pct}%` }}
                viewport={{ once: false }}
                transition={{ delay: s.delay, duration: 1.1, ease: [0.16,1,0.3,1] }}
              />
            </div>
            {/* knob */}
            <motion.div className="absolute w-9 h-9 -translate-x-1/2 left-1/2 flex items-center justify-center rounded-full"
              style={{ bottom: `calc(${s.pct}% - 18px)`, background: 'rgba(0,0,0,0.7)', border: `1.5px solid ${s.color}`, boxShadow: `0 0 16px ${s.color}80` }}
              animate={{ boxShadow: [`0 0 12px ${s.color}50`, `0 0 24px ${s.color}90`, `0 0 12px ${s.color}50`] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: s.delay }}
            >
              <div className="h-2 w-2 rounded-full" style={{ background: s.color }} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   CARD 4 — FLEXIBILITY: 2×4 icon grid
   with hover pulse and glow effects
══════════════════════════════════════ */
const FLEX_ICONS = ['⚡', '✳', '◎', '⊕', '🛡', '⚡', '✦', '❊']
function FlexibilityVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden sm:h-56">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 55%,rgba(255,140,60,0.15),rgba(61,124,255,0.2),transparent 75%)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {FLEX_ICONS.map((ic, i) => (
            <motion.div key={i}
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg text-white"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              animate={{ scale: [1, 1.08, 1], boxShadow: ['0 0 0px rgba(90,209,255,0)', '0 0 16px rgba(90,209,255,0.3)', '0 0 0px rgba(90,209,255,0)'] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.22 }}
            >
              {ic}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Card wrapper ── */
const ITEMS = [
  { title: 'Speed', desc: 'Faster time-to-value with our enterprise AI solutions and AI agent marketplace behavior, and enterprise.', Visual: SpeedVisual },
  { title: 'Deep capabilities', desc: 'An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise.', Visual: CapabilitiesVisual },
  { title: 'Control', desc: 'The power of a standardized platform built for the demands of growing enterprises.', Visual: ControlVisual },
  { title: 'Flexibility', desc: 'Our design approach is ecosystem agnostic, allowing you to choose how you connect.', Visual: FlexibilityVisual },
]

export default function Differentiators() {
  return (
    <section className="px-4 py-14 sm:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              What sets EXSORA apart
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-secondary">Smarter, faster, and more adaptive than traditional AI solutions.</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} variant="scale" delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface transition-colors duration-300 hover:border-white/20">
                <item.Visual />
                <div className="border-t border-white/8 bg-black/30 p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
