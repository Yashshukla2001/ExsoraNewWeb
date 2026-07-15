import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  HiOutlineSquares2X2, HiOutlineCpuChip, HiOutlineCircleStack,
  HiOutlineHeart, HiOutlineWrenchScrewdriver, HiOutlineLifebuoy, HiOutlineSpeakerWave,
  HiOutlineSparkles, HiOutlineRectangleStack, HiOutlineChatBubbleLeftRight, HiOutlineUserGroup,
  HiOutlineCloud, HiOutlineDocumentText, HiOutlineChatBubbleLeftEllipsis, HiOutlineCube, HiOutlineArrowsRightLeft,
} from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'

const TABS = [
  { id: 'usage',      label: 'Usage',      icon: HiOutlineSquares2X2 },
  { id: 'technology', label: 'Technology', icon: HiOutlineCpuChip },
  { id: 'data',       label: 'Data',       icon: HiOutlineCircleStack },
]

const AGENTS = ['Banking Agent', 'Banking Agent', 'Banking Agent', 'Banking Agent']
const SOURCE_ICONS = [HiOutlineArrowsRightLeft, HiOutlineCircleStack, HiOutlineChatBubbleLeftEllipsis, HiOutlineCloud, HiOutlineDocumentText, HiOutlineCube]
const INTEGRATIONS = ['SharePoint', 'SAP', 'Slack', 'Confluence']

function UsagePanel() {
  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h3 className="text-lg font-medium text-white sm:text-2xl">AI Agent for work</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">Connect to your business systems, understand your data and workflows, and activate agentic automation across every team.</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[['Healthcare', HiOutlineHeart], ['Tech Assistance', HiOutlineWrenchScrewdriver], ['Support', HiOutlineLifebuoy], ['Marketer', HiOutlineSpeakerWave]].map(([label, Icon]) => (
            <span key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white">
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />{label}
            </span>
          ))}
        </div>
        <Button variant="outline" className="mt-4 text-sm">See Uses</Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          {AGENTS.map((a, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-3">
              <HiOutlineHeart className="mb-2 h-3.5 w-3.5 text-rose-300" />
              <div className="mb-2 text-xs font-medium text-white">{a}</div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div initial={{ width: '0%' }} whileInView={{ width: `${50 + i * 12}%` }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.9 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-orange to-accent-cyan" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
          <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue" />
          <span className="text-xs text-secondary">Help me with the billing workflow…</span>
        </div>
      </div>
    </div>
  )
}

function TechnologyPanel() {
  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h3 className="text-lg font-medium text-white sm:text-2xl">Alpha Technology</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">Create valuable AI agents and agentic workflows with confidence and ongoing control.</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {[['Multi-Agent', HiOutlineSparkles], ['Latest Model', HiOutlineRectangleStack], ['Dialog GPT', HiOutlineChatBubbleLeftRight], ['Supervisor Agents', HiOutlineUserGroup]].map(([label, Icon]) => (
            <span key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white">
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />{label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 sm:h-44">
        <div className="h-28 w-28 rounded-full bg-sphere-gradient opacity-60 blur-2xl animate-spin-slow" />
        <span className="absolute text-2xl font-semibold tracking-tight text-white/90">EXSORA</span>
      </div>
    </div>
  )
}

function DataPanel() {
  const positions = SOURCE_ICONS.map((_, i) => 20 + (i * 320) / (SOURCE_ICONS.length - 1))
  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h3 className="text-lg font-medium text-white sm:text-2xl">Enterprise data sources</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">Our design approach is ecosystem agnostic, allowing you to choose how you connect data.</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {INTEGRATIONS.map((label) => (
            <span key={label} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs text-white">{label}</span>
          ))}
        </div>
        <Button variant="outline" className="mt-4 text-sm">Start Setup</Button>
      </div>
      <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 sm:h-44">
        <svg viewBox="0 0 360 200" className="absolute inset-0 h-full w-full" fill="none">
          {positions.map((x, i) => (
            <motion.path key={i} d={`M${x},18 C${x},80 180,130 180,155`}
              stroke="rgba(90,209,255,0.6)" strokeWidth="1.5" strokeDasharray="5 7" fill="none"
              initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -120 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: i * 0.15 }} />
          ))}
        </svg>
        <div className="absolute inset-x-3 top-2 flex justify-between">
          {SOURCE_ICONS.map((Icon, i) => (
            <motion.div key={i} animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              className="grid h-7 w-7 place-items-center rounded-lg border border-white/15 bg-black/60 text-white">
              <Icon className="h-3 w-3" />
            </motion.div>
          ))}
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-3 h-16 w-16 rounded-full bg-sphere-gradient opacity-80 blur-[2px]" />
      </div>
    </div>
  )
}

const PANELS = [
  { id: 'usage',      label: 'Usage',      icon: HiOutlineSquares2X2, Component: UsagePanel },
  { id: 'technology', label: 'Technology', icon: HiOutlineCpuChip,    Component: TechnologyPanel },
  { id: 'data',       label: 'Data',       icon: HiOutlineCircleStack, Component: DataPanel },
]

/* Shared header */
function SectionHeader() {
  return (
    <>
      <Reveal><Eyebrow icon={HiOutlineSquares2X2}>Features</Eyebrow></Reveal>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <Reveal delay={0.05}><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">All-in-one AI for enterprise</h2></Reveal>
        <Reveal delay={0.1}><p className="max-w-sm text-sm text-secondary">Simplify, accelerate, and transform with one connected AI ecosystem.</p></Reveal>
      </div>
    </>
  )
}

/* ── MOBILE VERSION — click-based, no scroll dependency ── */
function MobilePlatformTabs() {
  const [activeIdx, setActiveIdx] = useState(0)
  const Component = PANELS[activeIdx].Component
  return (
    <section className="px-4 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader />
        <div className="mt-5 flex gap-1 rounded-2xl border border-white/8 bg-surface p-2">
          {PANELS.map((p, i) => (
            <button key={p.id} onClick={() => setActiveIdx(i)}
              className={`flex flex-1 items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-xs font-medium transition-all duration-200 ${activeIdx === i ? 'bg-white/10 text-white' : 'text-muted'}`}>
              <p.icon className="h-3.5 w-3.5 shrink-0" />{p.label}
            </button>
          ))}
        </div>
        <motion.div key={activeIdx}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 rounded-3xl border border-white/8 bg-surface p-4 shadow-glass">
          <Component />
        </motion.div>
      </div>
    </section>
  )
}

/* ── DESKTOP VERSION — scroll-based sticky ── */
function DesktopPlatformTabs() {
  const sectionRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(PANELS.length - 1, Math.max(0, Math.floor(v * PANELS.length)))
    setActiveIdx((prev) => prev !== idx ? idx : prev)
  })

  const jumpTo = (id) => {
    const idx = PANELS.findIndex((p) => p.id === id)
    const el = sectionRef.current
    if (!el) return
    window.scrollTo({ top: el.offsetTop + (idx / PANELS.length) * el.offsetHeight + 4, behavior: 'smooth' })
  }

  const ActiveComponent = PANELS[activeIdx].Component

  return (
   <section ref={sectionRef} className="relative" style={{ height: '360vh' }}>
       <div className="sticky top-0 flex h-screen flex-col justify-center px-8 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader />
          <div className="mt-6 flex gap-4">
            <div className="flex w-52 shrink-0 flex-col gap-1 rounded-2xl border border-white/8 bg-surface p-4">
              {PANELS.map((tab, i) => (
                <button key={tab.id} onClick={() => jumpTo(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${activeIdx === i ? 'bg-white/10 text-white' : 'text-muted hover:text-white'}`}>
                  <tab.icon className="h-4 w-4 shrink-0" />{tab.label}
                </button>
              ))}
            </div>
            <div className="relative flex-1">
              {PANELS.map(({ id, Component }, i) => (
                <motion.div key={id}
                  animate={{ opacity: activeIdx === i ? 1 : 0, y: activeIdx === i ? 0 : 12, pointerEvents: activeIdx === i ? 'auto' : 'none' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: activeIdx === i ? 'relative' : 'absolute', top: 0, left: 0, right: 0, zIndex: activeIdx === i ? 2 : 1 }}
                  className="w-full rounded-3xl border border-white/8 bg-surface p-7 shadow-glass">
                  <Component />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PlatformTabs() {
  return (
    <div id="platform" className="scroll-mt-24">
      <div className="lg:hidden"><MobilePlatformTabs /></div>
      <div className="hidden lg:block"><DesktopPlatformTabs /></div>
    </div>
  )
}
