import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import {
  HiOutlineRectangleGroup, HiOutlineCheckCircle,
  HiOutlineHeart, HiOutlineMegaphone, HiOutlineShoppingCart,
  HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineBuildingLibrary,
} from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const PANELS = [
  { id: 'automation', label: 'Automation', title: 'Process Automation',
    desc: 'Streamline complex workflows with intelligent AI agents that enhance efficiency, accuracy, and speed across your enterprise.',
    points: ['Automate Tasks — Reduce manual effort', 'Optimize Workflows — Boost productivity', 'Stay Compliant — Ensure accuracy'] },
  { id: 'banking', label: 'Banking', title: 'Banking Intelligence',
    desc: 'Deploy specialized agents for risk, compliance, and customer servicing across financial operations.',
    points: ['Fraud Detection — Real-time monitoring', 'Smart Approvals — Faster decisions', 'Audit Ready — Built-in compliance'] },
  { id: 'recruitment', label: 'Recruitment', title: 'Talent Operations',
    desc: 'Find, screen, and onboard the right talent faster with agents tuned for end-to-end hiring.',
    points: ['Automated Hiring — Less manual work', 'Improved Experience — Personalized hiring', 'Faster Onboarding — Day-one ready'] },
]

const AGENT_CARDS = ['Blog generator', 'Banking Agent', 'Insurance Agent', 'Summarisation']

const INDUSTRIES = [
  { label: 'Healthcare',    desc: 'Boost sales with smart automation tools.',        icon: HiOutlineHeart },
  { label: 'Marketing',    desc: 'Optimize campaigns with intelligent automation.',   icon: HiOutlineMegaphone },
  { label: 'Ecommerce',    desc: 'Accelerate coding and improve complex workflows.',  icon: HiOutlineShoppingCart },
  { label: 'Enterprise',   desc: 'Scale operations with enterprise-grade agents.',    icon: HiOutlineBriefcase },
  { label: 'Education',    desc: 'Personalize learning with adaptive AI agents.',     icon: HiOutlineAcademicCap },
  { label: 'Public Sector',desc: 'Modernize services with secure automation.',        icon: HiOutlineBuildingLibrary },
]

function PanelContent({ p }) {
  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium text-white sm:text-2xl">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{p.desc}</p>
        <ul className="mt-3 space-y-2">
          {p.points.map((pt, pi) => (
            <motion.li key={pt}
              initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: pi * 0.09, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white">
              <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />{pt}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 p-3">
        <div className="grid grid-cols-2 gap-2">
          {AGENT_CARDS.map((a, ai) => (
            <div key={a} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <div className="mb-1.5 text-xs font-medium text-white">{a}</div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${45 + ai * 15}%` }}
                  transition={{ delay: 0.15 + ai * 0.12, duration: 0.9 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-orange to-accent-cyan" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IndustriesGrid() {
  return (
    <div className="px-4 pb-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.label} variant="up" delay={i * 0.06}>
              <div className="group flex flex-col items-start gap-3">
                {/* <div className="grid h-12 w-12 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: 'linear-gradient(#000,#000) padding-box, linear-gradient(135deg,#ff8a3d,#ffc15e 35%,transparent 60%,#3d7cff) border-box', border: '1.5px solid transparent', boxShadow: '0 0 18px rgba(255,193,94,0.18)' }}>
                  <ind.icon className="h-5 w-5" />
                </div> */}
                <div className="industry-badge grid h-12 w-12 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ border: '1.5px solid transparent', boxShadow: '0 0 18px rgba(255,193,94,0.18)' }}>
                  <ind.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{ind.label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{ind.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── MOBILE — click-based ── */
function MobileProducts() {
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <>
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><Eyebrow icon={HiOutlineRectangleGroup}>Products</Eyebrow></Reveal>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={0.05}><h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Multiple Products</h2></Reveal>
            <Reveal delay={0.1}><p className="max-w-sm text-sm text-secondary">Covers all major verticals with top intelligence.</p></Reveal>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {PANELS.map((p, i) => (
              <button key={p.id} onClick={() => setActiveIdx(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${activeIdx === i ? 'bg-white text-black' : 'glass text-secondary'}`}>
                {p.label}
              </button>
            ))}
          </div>
          <motion.div key={activeIdx}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 overflow-hidden rounded-3xl border border-white/8 bg-surface p-4 shadow-glass">
            <PanelContent p={PANELS[activeIdx]} />
          </motion.div>
        </div>
      </section>
      <IndustriesGrid />
    </>
  )
}

/* ── DESKTOP — scroll-based sticky ── */
function DesktopProducts() {
  const sectionRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(PANELS.length - 1, Math.max(0, Math.floor(v * PANELS.length)))
    setActiveIdx((p) => p !== idx ? idx : p)
  })

  const jumpTo = (idx) => {
    const el = sectionRef.current
    if (!el) return
    window.scrollTo({ top: el.offsetTop + (idx / PANELS.length) * el.offsetHeight + 4, behavior: 'smooth' })
  }

  return (
    <>
      <section ref={sectionRef} className="relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center px-8 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal><Eyebrow icon={HiOutlineRectangleGroup}>Products</Eyebrow></Reveal>
            <div className="mt-2 flex items-end justify-between">
              <Reveal delay={0.05}><h2 className="text-4xl font-semibold tracking-tight text-white">Multiple Products</h2></Reveal>
              <Reveal delay={0.1}><p className="max-w-sm text-sm text-secondary">Covers all major verticals with top intelligence.</p></Reveal>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {PANELS.map((p, i) => (
                <button key={p.id} onClick={() => jumpTo(i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${activeIdx === i ? 'bg-white text-black' : 'glass text-secondary hover:text-white'}`}>
                  {p.label}
                </button>
              ))}
            </div>
            <div className="relative mt-4">
              {PANELS.map((p, i) => (
                <motion.div key={p.id}
                  animate={{ opacity: activeIdx === i ? 1 : 0, y: activeIdx === i ? 0 : 10, pointerEvents: activeIdx === i ? 'auto' : 'none' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: activeIdx === i ? 'relative' : 'absolute', top: 0, left: 0, right: 0, zIndex: activeIdx === i ? 2 : 1 }}
                  className="w-full overflow-hidden rounded-3xl border border-white/8 bg-surface p-7 shadow-glass">
                  <PanelContent p={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <IndustriesGrid />
    </>
  )
}

export default function Products() {
  return (
    <>
      <div className="lg:hidden"><MobileProducts /></div>
      <div className="hidden lg:block"><DesktopProducts /></div>
    </>
  )
}
