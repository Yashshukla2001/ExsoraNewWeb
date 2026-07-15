import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { HiOutlineChartBar, HiOutlineCheckCircle } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

/* ── progress bar (desktop only) ── */
function StepBar({ index, total, scrollYProgress }) {
  const seg = 1 / total
  const w = useTransform(scrollYProgress, [index * seg, (index + 1) * seg], ['0%', '100%'])
  return (
    <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
      <motion.div style={{ width: w }} className="h-full bg-gradient-to-r from-accent-orange to-accent-blue" />
    </div>
  )
}

/* ── Step visuals ── */
const ORBIT_OPTS = ['Google', 'GitHub', 'Apple', 'Email', 'Passkey', 'SSO']
function Step1Visual() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-950/40 via-surface to-cyan-950/20 sm:h-52">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(90,209,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(90,209,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
      <motion.div className="absolute h-24 w-24 rounded-full"
        animate={{ scale: [1, 1.14, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(circle,#5ad1ff,#3d7cff,transparent 70%)', filter: 'blur(28px)' }} />
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-cyan/40 bg-black/60">
        <motion.div className="absolute inset-0 rounded-full border border-accent-cyan/30"
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }} />
        <span className="text-[8px] font-bold tracking-widest text-white">EXSORA</span>
      </div>
      {ORBIT_OPTS.map((opt, i) => {
        const angle = (i / ORBIT_OPTS.length) * 2 * Math.PI
        const r = 60
        return (
          <motion.div key={opt}
            className="absolute flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white"
            style={{ left: '50%', top: '50%' }}
            animate={{ x: [Math.cos(angle)*r-3, Math.cos(angle)*r+3, Math.cos(angle)*r-3], y: [Math.sin(angle)*r-2, Math.sin(angle)*r+2, Math.sin(angle)*r-2], translateX: '-50%', translateY: '-50%' }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}>
            <span className="h-1 w-1 rounded-full bg-accent-cyan" />{opt}
          </motion.div>
        )
      })}
    </div>
  )
}

const AGENTS = [
  { name: 'HR Agent',         cat: 'Operations', sel: false },
  { name: 'Banking Agent',    cat: 'Finance',    sel: true  },
  { name: 'Healthcare Agent', cat: 'Medical',    sel: false },
  { name: 'Legal Agent',      cat: 'Compliance', sel: false },
]
function Step2Visual() {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-orange-950/30 via-surface to-blue-950/20 p-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold tracking-widest text-white/50">EXSORA</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[8px] text-secondary">Select Agent</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {AGENTS.map((a, i) => (
          <div key={a.name} className="relative flex flex-col rounded-xl border bg-black/40 p-2"
            style={{ borderColor: a.sel ? 'rgba(90,209,255,0.45)' : 'rgba(255,255,255,0.08)' }}>
            {a.sel && <span className="mb-1 self-end rounded-full border border-accent-cyan/40 bg-accent-cyan/15 px-1 py-0.5 text-[7px] text-accent-cyan">Selected</span>}
            <div className="text-[10px] font-medium text-white">{a.name}</div>
            <div className="text-[9px] text-muted">{a.cat}</div>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div className={`h-full rounded-full ${a.sel ? 'bg-gradient-to-r from-accent-orange to-accent-cyan' : 'bg-white/20'}`}
                initial={{ width: '0%' }} whileInView={{ width: a.sel ? '75%' : '40%' }}
                viewport={{ once: false }} transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }} />
            </div>
          </div>
        ))}
      </div>
      <motion.div className="flex items-center justify-center gap-2 rounded-full border border-accent-cyan/35 bg-accent-cyan/10 py-1.5 text-[10px] font-medium text-accent-cyan"
        animate={{ boxShadow: ['0 0 0 rgba(90,209,255,0)', '0 0 14px rgba(90,209,255,0.4)', '0 0 0 rgba(90,209,255,0)'] }}
        transition={{ duration: 2.2, repeat: Infinity }}>
        <motion.span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
        Activate Agent
      </motion.div>
    </div>
  )
}

const PIPELINE = [
  { label: 'Details',      sub: 'Define agent training',  emoji: '📋' },
  { label: 'Configure',    sub: 'Set prompt & variables', emoji: '⚙️' },
  { label: 'Launch Agent', sub: 'Publish & go live',      emoji: '🚀' },
]
function Step3Visual() {
  return (
    <div className="flex w-full flex-col justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-950/30 via-surface to-blue-950/20 px-4 py-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[9px] font-bold tracking-widest text-white/50">EXSORA</span>
        <motion.span className="ml-auto flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[8px] font-medium text-emerald-400"
          animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="h-1 w-1 rounded-full bg-emerald-400" /> Live
        </motion.span>
      </div>
      {PIPELINE.map((s, i) => (
        <div key={s.label} className="flex flex-col">
          {i > 0 && (
            <div className="ml-3.5 h-3 w-[2px] overflow-hidden bg-white/10">
              <motion.div className="h-full w-full bg-gradient-to-b from-accent-orange to-accent-cyan"
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: false }}
                style={{ transformOrigin: 'top' }} transition={{ delay: i * 0.28, duration: 0.55 }} />
            </div>
          )}
          <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}
            transition={{ delay: i * 0.16, duration: 0.45 }}
            className="flex items-center gap-2 rounded-xl border px-3 py-2"
            style={{ background: i === 2 ? 'rgba(90,209,255,0.08)' : 'rgba(255,255,255,0.03)', borderColor: i === 2 ? 'rgba(90,209,255,0.35)' : 'rgba(255,255,255,0.08)' }}>
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs"
              style={{ background: i === 2 ? 'rgba(90,209,255,0.2)' : 'rgba(255,255,255,0.08)' }}>
              {s.emoji}
            </div>
            <div>
              <div className="text-xs font-medium text-white">{s.label}</div>
              <div className="text-[9px] text-muted">{s.sub}</div>
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
  { n: '01', label: 'Sign In', title: 'One account, endless sign-in choices',
    desc: 'Choose from Google, Apple, GitHub, or create an account with email and passkey.',
    points: ['Sign in instantly with Google or GitHub.', 'Create your own secure login credentials.'],
    Visual: Step1Visual },
  { n: '02', label: 'Pick Agent', title: 'Choose the Agent You Want to Deploy',
    desc: 'From a vast universe of intelligent agents, pick the one that best fits your needs.',
    points: ['Choose agents tailored to your specific tasks.', 'Browse by industry, role, or workflow type.'],
    Visual: Step2Visual },
  { n: '03', label: 'Launch', title: 'Configure, launch, and let it run',
    desc: 'Prompt the agent and adjust workflows, then let the agent handle everything automatically.',
    points: ['Prompt the agent and adjust workflows.', 'Let the agent handle tasks end-to-end.', 'Switch between manual and automated.'],
    Visual: Step3Visual },
]

function StepCard({ s }) {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
      <div className="flex flex-col">
        <h3 className="text-base font-medium text-white sm:text-xl">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
        <ul className="mt-3 space-y-2">
          {s.points.map((p) => (
            <li key={p} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white">
              <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />{p}
            </li>
          ))}
        </ul>
      </div>
      <s.Visual />
    </div>
  )
}

function SectionHeader({ active }) {
  return (
    <>
      <Reveal><Eyebrow icon={HiOutlineChartBar}>Steps to use</Eyebrow></Reveal>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <Reveal delay={0.05}><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">3 Steps to Kickstart</h2></Reveal>
        <Reveal delay={0.1}><p className="max-w-sm text-sm text-secondary">From setup to measurable success in three steps.</p></Reveal>
      </div>
    </>
  )
}

/* ── MOBILE — click-based tabs ── */
function MobileSteps() {
  const [active, setActive] = useState(0)
  const s = STEPS[active]
  return (
    <section className="px-4 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader />
        {/* step pills */}
        <div className="mt-5 flex gap-2">
          {STEPS.map((step, i) => (
            <button key={step.n} onClick={() => setActive(i)}
              className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border py-2.5 text-xs font-medium transition-all duration-200 ${active === i ? 'border-accent-cyan/40 bg-white/5 text-white' : 'border-white/8 text-muted'}`}>
              <span className={`text-[10px] font-bold ${active === i ? 'text-accent-cyan' : 'text-muted'}`}>{step.n}</span>
              {step.label}
            </button>
          ))}
        </div>
        {/* active card */}
        <motion.div key={active}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-glass">
          <StepCard s={s} />
        </motion.div>
      </div>
    </section>
  )
}

/* ── DESKTOP — scroll-based sticky ── */
function DesktopSteps() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)))
    setActive((p) => p !== next ? next : p)
  })

  return (
    <section ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center px-8 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader />
          <div className="mt-5 grid grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex flex-col gap-2">
                <span className={`text-sm font-medium transition-colors duration-300 ${i <= active ? 'text-white' : 'text-muted'}`}>{step.n}.</span>
                <StepBar index={i} total={STEPS.length} scrollYProgress={scrollYProgress} />
              </div>
            ))}
          </div>
          <div className="relative mt-4">
            {STEPS.map((step, i) => (
              <motion.div key={step.n}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 10, pointerEvents: active === i ? 'auto' : 'none' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: active === i ? 'relative' : 'absolute', top: 0, left: 0, right: 0, zIndex: active === i ? 2 : 1 }}
                className="w-full overflow-hidden rounded-3xl border border-white/8 bg-surface shadow-glass">
                <StepCard s={step} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Steps() {
  return (
    <>
      <div className="lg:hidden"><MobileSteps /></div>
      <div className="hidden lg:block"><DesktopSteps /></div>
    </>
  )
}
