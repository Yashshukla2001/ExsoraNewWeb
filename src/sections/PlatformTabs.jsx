import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSquares2X2,
  HiOutlineCpuChip,
  HiOutlineCircleStack,
  HiOutlineHeart,
  HiOutlineWrenchScrewdriver,
  HiOutlineLifebuoy,
  HiOutlineSpeakerWave,
  HiOutlineSparkles,
  HiOutlineRectangleStack,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineCloud,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCube,
  HiOutlineArrowsRightLeft,
} from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'

const TABS = [
  { id: 'usage', label: 'Usage', icon: HiOutlineSquares2X2 },
  { id: 'technology', label: 'Technology', icon: HiOutlineCpuChip },
  { id: 'data', label: 'Data', icon: HiOutlineCircleStack },
]

const AGENTS = ['Banking Agent', 'Banking Agent', 'Banking Agent', 'Banking Agent']
const SOURCE_ICONS = [HiOutlineArrowsRightLeft, HiOutlineCircleStack, HiOutlineChatBubbleLeftEllipsis, HiOutlineCloud, HiOutlineDocumentText, HiOutlineCube]
const INTEGRATIONS = ['SharePoint', 'SAP', 'Slack', 'Confluence']

function UsagePanel() {
  return (
    <div className="grid h-full gap-8 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-medium text-white">AI Agent for work</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
          Connect to your business systems, understand your data and workflows, and activate
          agentic automation across every team.
        </p>
        <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
          {[
            ['Healthcare', HiOutlineHeart],
            ['Tech Assistance', HiOutlineWrenchScrewdriver],
            ['Support', HiOutlineLifebuoy],
            ['Marketer', HiOutlineSpeakerWave],
          ].map(([label, Icon]) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white"
            >
              <Icon className="h-4 w-4 text-accent-cyan" /> {label}
            </span>
          ))}
        </div>
        <Button variant="outline" className="mt-7">
          See Uses
        </Button>
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        {AGENTS.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-4"
          >
            <HiOutlineHeart className="mb-3 h-4 w-4 text-rose-300" />
            <div className="mb-3 text-sm text-white">{a}</div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: `${50 + i * 12}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-accent-orange to-accent-cyan"
              />
            </div>
          </motion.div>
        ))}
        <div className="col-span-2 mt-2 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent-orange to-accent-blue" />
          <span className="text-sm text-secondary">Help me with the billing workflow…</span>
        </div>
      </div>
    </div>
  )
}

function TechnologyPanel() {
  return (
    <div className="grid h-full gap-8 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-medium text-white">Alpha Technology</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
          Create valuable AI agents and agentic workflows with confidence and ongoing control.
        </p>
        <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
          {[
            ['Multi-Agent', HiOutlineSparkles],
            ['Latest Model', HiOutlineRectangleStack],
            ['Dialog GPT', HiOutlineChatBubbleLeftRight],
            ['Supervisor Agents', HiOutlineUserGroup],
          ].map(([label, Icon]) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white"
            >
              <Icon className="h-4 w-4 text-accent-cyan" /> {label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 py-12">
        <div className="h-40 w-40 rounded-full bg-sphere-gradient opacity-60 blur-2xl animate-spin-slow" />
        <span className="absolute text-4xl font-semibold tracking-tight text-white/90">EXSORA</span>
      </div>
    </div>
  )
}

function DataFlowVisual() {
  const width = 360
  const height = 220
  const cx = width / 2
  const topY = 18
  const sphereY = 170
  const positions = SOURCE_ICONS.map((_, i) => 20 + (i * (width - 40)) / (SOURCE_ICONS.length - 1))

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ad1ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3d7cff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {positions.map((x, i) => (
          <motion.path
            key={i}
            d={`M${x},${topY} C ${x},${topY + 60} ${cx},${sphereY - 70} ${cx},${sphereY - 30}`}
            stroke="url(#flowGrad)"
            strokeWidth="1.6"
            fill="none"
            strokeDasharray="5 7"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -120 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
          />
        ))}
      </svg>

      <div className="absolute inset-x-4 top-4 flex justify-between">
        {SOURCE_ICONS.map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-black/60 text-white"
          >
            <Icon className="h-4 w-4" />
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-3 h-28 w-28 rounded-full bg-sphere-gradient opacity-80 blur-[2px]"
      />
      <div className="absolute bottom-3 h-28 w-28 rounded-full" style={{ background: 'radial-gradient(circle at 35% 30%, transparent 0%, rgba(0,0,0,0.55) 70%)' }} />
    </div>
  )
}

function DataPanel() {
  return (
    <div className="grid h-full gap-8 lg:grid-cols-2">
      <div>
        <h3 className="text-2xl font-medium text-white">Enterprise data sources</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary">
          Our design approach is ecosystem agnostic, allowing you to choose how you connect data.
        </p>
        <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
          {INTEGRATIONS.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-center text-sm text-white"
            >
              {label}
            </span>
          ))}
        </div>
        <Button variant="outline" className="mt-7">
          Start Setup
        </Button>
      </div>
      <DataFlowVisual />
    </div>
  )
}

const PANELS = [
  { id: 'usage', Component: UsagePanel },
  { id: 'technology', Component: TechnologyPanel },
  { id: 'data', Component: DataPanel },
]

function PanelTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 rounded-3xl border border-white/8 bg-surface p-6 shadow-glass sm:p-10"
    >
      {children}
    </motion.div>
  )
}

export default function PlatformTabs() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState('usage')
  const [activeIdx, setActiveIdx] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(PANELS.length - 1, Math.max(0, Math.floor(v * PANELS.length)))
    setActiveIdx((prev) => {
      if (prev !== idx) { setActive(PANELS[idx].id); return idx }
      return prev
    })
  })

  const jumpTo = (id) => {
    const idx = PANELS.findIndex((p) => p.id === id)
    const el = sectionRef.current
    if (!el) return
    window.scrollTo({ top: el.offsetTop + (idx / PANELS.length) * el.offsetHeight + 4, behavior: 'smooth' })
  }

  const ActiveComponent = PANELS[activeIdx].Component

  return (
    <section id="platform" ref={sectionRef} className="relative" style={{ height: '320vh' }}>
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden px-5 py-24 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Eyebrow icon={HiOutlineSquares2X2}>Features</Eyebrow>
          </Reveal>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={0.05}>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                All-in-one AI for enterprise
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm text-secondary">
                Simplify, accelerate, and transform with one connected AI ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row">
            <div className="flex shrink-0 gap-1 rounded-2xl border border-white/8 bg-surface p-3 lg:w-56 lg:flex-col lg:p-5">
              {TABS.map((tab) => (
                <button key={tab.id} data-cursor="link" onClick={() => jumpTo(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${active === tab.id ? 'bg-white/10 text-white' : 'text-muted hover:text-white'}`}>
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative flex-1">
              <div className="relative h-[460px] sm:h-[380px]">
                <AnimatePresence mode="wait">
                  <PanelTransition key={active}>
                    <ActiveComponent />
                  </PanelTransition>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted lg:hidden">Scroll to move through Usage → Technology → Data</p>
        </div>
      </div>
    </section>
  )
}
