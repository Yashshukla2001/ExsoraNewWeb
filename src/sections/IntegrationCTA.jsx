import { motion } from 'framer-motion'
import {
  HiOutlineLink,
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineCircleStack,
  HiOutlineSquares2X2,
} from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

const ICONS = [HiOutlineBolt, HiOutlineArrowPath, HiOutlineSparkles, HiOutlineCube, HiOutlineCircleStack, HiOutlineSquares2X2]

export default function IntegrationCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-white/8 bg-surface p-5 sm:p-10 lg:grid-cols-2 lg:p-14">
          {/* starburst */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[1px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-gold to-transparent lg:block" />
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-[46%] top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold shadow-[0_0_40px_12px_rgba(255,193,94,0.5)] lg:block"
          />

          <Reveal variant="left">
            <Eyebrow icon={HiOutlineLink}>Integration</Eyebrow>
            <h2 className="mt-3 text-balance text-xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Smart Versatile Agent driven Integration
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
              Connect custom or pre-built connectors to your enterprise and third-party apps.
            </p>
            <Button variant="primary" className="mt-7" as="a" href="#pricing">
              Know More
            </Button>
          </Reveal>

          <Reveal variant="right" delay={0.1} className="grid grid-cols-3 gap-2 sm:gap-4">
            {ICONS.map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                className="grid aspect-square place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white shadow-[0_0_24px_rgba(255,193,94,0.08)] sm:rounded-2xl"
              >
                <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
