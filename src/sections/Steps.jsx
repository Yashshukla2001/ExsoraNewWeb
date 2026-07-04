import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { HiOutlineChartBar, HiOutlineCheckCircle } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

/* ─── Step progress bar (scroll-driven fill) ─── */
function StepBar({ index, total, scrollYProgress }) {
  const seg = 1 / total
  const w = useTransform(scrollYProgress, [index * seg, (index + 1) * seg], ['0%', '100%'])
  return (
    <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
      <motion.div style={{ width: w }} className="h-full bg-gradient-to-r from-accent-orange to-accent-blue" />
    </div>
  )
}

/* ══ STEP 1 — Orbital sign-in network ══ */
const ORBIT_OPTS = ['Google', 'GitHub', 'Apple', 'Email', 'Passkey', 'SSO']
function Step1Visual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-surface to-cyan-950/20">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(90,209,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(90,209,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
      <motion.div className="absolute h-36 w-36 rounded-full"
        animate={{ scale: [1, 1.14, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle,#5ad1ff,#3d7cff,transparent 70%)', filter: 'blur(32px)' }} />
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent-cyan/40 bg-black/60 backdrop-blur-sm">
        <motion.div className="absolute inset-0 rounded-full border border-accent-cyan/30"
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />
        <span className="text-[9px] font-bold tracking-widest text-white">EXSORA</span>
      </div>
      {ORBIT_OPTS.map((opt, i) => {
        const angle = (i / ORBIT_OPTS.length) * 2 * Math.PI
        const r = 82
        return (
          <motion.div key={opt} className="absolute flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white"
            style={{ left: '50%', top: '50%' }}
            animate={{ x: [Math.cos(angle)*r - 4, Math.cos(angle)*r + 4, Math.cos(angle)*r - 4], y: [Math.sin(angle)*r - 3, Math.sin(angle)*r + 3, Math.sin(angle)*r - 3], translateX: '-50%', translateY: '-50%' }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}>
            <motion.span className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
              animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }} />
            {opt}
          </motion.div>
        )
      })}
    </div>
  )
}

/* ══ STEP 2 — Agent marketplace ══ */
const AGENTS = [
  { name: 'HR Agent', cat: 'Operations', sel: false },
  { name: 'Banking Agent', cat: 'Finance', sel: true },
  { name: 'Healthcare Agent', cat: 'Medical', sel: false },
  { name: 'Legal Agent', cat: 'Compliance', sel: false },
]
function Step2Visual() {
  return (
    <div className="relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-orange-950/30 via-surface to-blue-950/20 p-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-widest text-white/50">EXSORA</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[9px] text-secondary">Select Agent</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {AGENTS.map((a, i) => (
          <motion.div key={a.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col rounded-xl border bg-black/40 p-2.5"
            style={{ borderColor: a.sel ? 'rgba(90,209,255,0.45)' : 'rgba(255,255,255,0.08)', boxShadow: a.sel ? '0 0 14px rgba(90,209,255,0.18)' : undefined }}>
            {a.sel && <motion.span className="mb-1 self-end rounded-full border border-accent-cyan/40 bg-accent-cyan/15 px-1.5 py-0.5 text-[8px] text-accent-cyan"
              animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.6, repeat: Infinity }}>Selected</motion.span>}
            <div className="text-[11px] font-medium text-white">{a.name}</div>
            <div className="text-[9px] text-muted">{a.cat}</div>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div className={`h-full rounded-full ${a.sel ? 'bg-gradient-to-r from-accent-orange to-accent-cyan' : 'bg-white/20'}`}
                initial={{ width: '0%' }} animate={{ width: a.sel ? '75%' : '40%' }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button className="flex items-center justify-center gap-2 rounded-full border border-accent-cyan/35 bg-accent-cyan/10 py-2 text-[11px] font-medium text-accent-cyan"
        animate={{ boxShadow: ['0 0 0 rgba(90,209,255,0)', '0 0 18px rgba(90,209,255,0.4)', '0 0 0 rgba(90,209,255,0)'] }}
        transition={{ duration: 2.2, repeat: Infinity }}>
        <motion.span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
        Activate Agent
      </motion.button>
    </div>
  )
}

/* ══ STEP 3 — Launch pipeline ══ */
const PIPELINE = [
  { label: 'Details', sub: 'Define agent training', emoji: '📋' },
  { label: 'Configure', sub: 'Set prompt & variables', emoji: '⚙️' },
  { label: 'Launch Agent', sub: 'Publish & go live', emoji: '🚀' },
]
function Step3Visual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-0 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-950/30 via-surface to-blue-950/20 px-5 py-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[10px] font-bold tracking-widest text-white/50">EXSORA</span>
        <motion.span className="ml-auto flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400"
          animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="h-1 w-1 rounded-full bg-emerald-400" /> Live
        </motion.span>
      </div>
      {PIPELINE.map((s, i) => (
        <div key={s.label} className="flex flex-col">
          {i > 0 && (
            <div className="ml-4 h-4 w-[2px] overflow-hidden bg-white/10">
              <motion.div className="h-full w-full bg-gradient-to-b from-accent-orange to-accent-cyan"
                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                style={{ transformOrigin: 'top' }} transition={{ delay: i * 0.28, duration: 0.55 }} />
            </div>
          )}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.16, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
            style={{ background: i === 2 ? 'linear-gradient(135deg,rgba(90,209,255,0.08),rgba(61,124,255,0.04))' : 'rgba(255,255,255,0.03)', borderColor: i === 2 ? 'rgba(90,209,255,0.35)' : 'rgba(255,255,255,0.08)' }}>
            <motion.div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm"
              animate={{ background: i === 2 ? ['rgba(90,209,255,0.2)', 'rgba(255,193,94,0.3)', 'rgba(90,209,255,0.2)'] : ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.08)'] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}>
              {s.emoji}
            </motion.div>
            <div>
              <div className="text-xs font-medium text-white">{s.label}</div>
              <div className="text-[10px] text-muted">{s.sub}</div>
            </div>
            {i === 2 && <motion.div className="ml-auto h-2 w-2 rounded-full bg-accent-cyan"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.3, repeat: Infinity }} />}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

const STEPS = [
  { n: '01', title: 'One account, endless sign-in choices',
    desc: 'Choose from Google, Apple, GitHub, or create an account with email and passkey.',
    points: ['Sign in instantly with Google or GitHub.', 'Create your own secure login credentials.'],
    Visual: Step1Visual },
  { n: '02', title: 'Choose the Agent You Want to Deploy',
    desc: 'From a vast universe of intelligent agents, pick the one that best fits your needs.',
    points: ['Choose agents tailored to your specific tasks.', 'Browse by industry, role, or workflow type.'],
    Visual: Step2Visual },
  { n: '03', title: 'Configure, launch, and let it run',
    desc: 'Prompt the agent and adjust workflows, then let the agent handle everything automatically.',
    points: ['Prompt the agent and adjust workflows.', 'Let the agent handle tasks end-to-end.', 'Switch between manual and automated.'],
    Visual: Step3Visual },
]

export default function Steps() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)))
    setActive((p) => p !== next ? next : p)
  })

  const s = STEPS[active]

  return (
    <section ref={sectionRef} className="relative" style={{ height: '260vh' }}>
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal><Eyebrow icon={HiOutlineChartBar}>Steps to use</Eyebrow></Reveal>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={0.05}><h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">3 Steps to Kickstart</h2></Reveal>
            <Reveal delay={0.1}><p className="max-w-sm text-sm text-secondary">From setup to measurable success made effortless in three steps.</p></Reveal>
          </div>

          {/* progress bars */}
          <div className="mt-7 grid grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex flex-col gap-2">
                <span className={`text-sm font-medium transition-colors duration-300 ${i <= active ? 'text-white' : 'text-muted'}`}>{step.n}.</span>
                <StepBar index={i} total={STEPS.length} scrollYProgress={scrollYProgress} />
              </div>
            ))}
          </div>

          {/* AnimatePresence — one card at a time */}
          <div className="relative mt-5" style={{ height: 'clamp(340px, 46vh, 420px)' }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-glass">
                <div className="grid h-full gap-6 p-7 sm:p-10 lg:grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-medium text-white sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p, pi) => (
                        <motion.li key={p} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + pi * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-2.5 text-sm text-white">
                          <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />{p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <s.Visual />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
