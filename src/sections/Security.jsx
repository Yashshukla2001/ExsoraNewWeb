import { motion } from 'framer-motion'
import { HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineEye, HiOutlineEnvelope } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const FEATURES = [
  { label: 'End-to-end Encryption', icon: HiOutlineLockClosed },
  { label: 'Real-Time Threat Detection', icon: HiOutlineEye },
  { label: 'Seamless Compliance', icon: HiOutlineEnvelope },
]

export default function Security() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* ── LEFT – text content ── */}
        <Reveal variant="left">
          <Eyebrow icon={HiOutlineShieldCheck}>Data and privacy</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Multi-Layer Security
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary">
            Protect your enterprise with multi-layered AI security. From data encryption to
            behavior monitoring, every layer works together to keep your operations safe.
          </p>
          <div className="mt-7 space-y-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 text-sm text-white"
              >
                <f.icon className="h-4 w-4 shrink-0 text-accent-cyan" />
                {f.label}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── RIGHT – live motion visual ── */}
        <Reveal variant="right" delay={0.1}>
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/15 via-surface to-blue-500/15">

            {/* dot grid */}
            <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* slow-rotating ambient glow — pinned to center */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute h-52 w-52 rounded-full"
              style={{ background: 'conic-gradient(from 0deg,#ff8a3d,#ffc15e,#5ad1ff,#3d7cff,#ff8a3d)', filter: 'blur(48px)', opacity: 0.28 }}
            />

            {/* 3 concentric pulse rings — all centred */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute rounded-full border border-accent-cyan/35"
                initial={{ width: 96, height: 96, opacity: 0.55 }}
                animate={{ width: [96, 260], height: [96, 260], opacity: [0.55, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: i * 0.95 }}
              />
            ))}

            {/* shield — centred, breathing */}
            <motion.div
              className="relative z-10 flex h-24 w-24 items-center justify-center"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <HiOutlineShieldCheck
                className="h-24 w-24 text-white"
                style={{ filter: 'drop-shadow(0 0 18px rgba(90,209,255,0.55))' }}
              />
            </motion.div>

            {/* scanning sweep */}
            <motion.div
              className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-accent-cyan/12 to-transparent"
              animate={{ y: ['-100%', '250%'] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  )
}
