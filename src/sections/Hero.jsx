import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import DashboardMock from '../components/DashboardMock'
import AuroraBackground from '../components/AuroraBackground'

const HeroParticles = lazy(() => import('../three/HeroParticles'))

/* animated pill — words fly in one at a time */
const PILL_WORDS = ['Beta', 'Version', 'is', 'launching', 'on', '6th', 'July', '2026']

function AnimatedPill() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="mb-6 inline-flex items-center gap-1.5 overflow-hidden rounded-full glass px-4 py-1.5"
    >
      {/* pulsing dot */}
      <motion.span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <span className="flex items-center gap-[0.28em] text-xs font-medium text-secondary">
        {PILL_WORDS.map((w, i) => (
          <motion.span key={i}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
        ))}
      </span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <AuroraBackground />

      {/* 3-D particle field */}
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <Suspense fallback={null}>
          <HeroParticles />
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <AnimatedPill />

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Next-gen enterprise <br className="hidden sm:block" />
          with AI Agents
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-6 max-w-xl text-balance text-base text-secondary sm:text-lg"
        >
          Accelerate the speed of business with the EXSORA Platform and our AI solutions for
          work, service, and process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button variant="primary" as="a" href="#pricing">Get Started</Button>
          <Button variant="outline" as="a" href="#platform">Explore Platform</Button>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 px-5 sm:mt-20 sm:px-8">
        <DashboardMock />
      </div>
    </section>
  )
}
