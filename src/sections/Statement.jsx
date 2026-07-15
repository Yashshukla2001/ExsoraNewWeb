import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform, useInView } from 'framer-motion'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Reveal from '../components/Reveal'
import GradientOrb from '../components/GradientOrb'
import { useTheme } from '../hooks/useTheme'

const INDUSTRIES = [
  { label: 'Retail',      icon: HiOutlineShoppingBag },
  { label: 'Healthcare',  icon: HiOutlineShoppingBag },
  { label: 'Finance',     icon: HiOutlineShoppingBag },
  { label: 'Logistics',   icon: HiOutlineShoppingBag },
]

const TEXT = 'We help enterprises reimagine business growth with our AI Platform, Work Solutions, and Intelligent Marketplace. Unlock efficiency, automation, and innovation across every workflow.'

/* Desktop: scroll-driven word-by-word colour reveal */
/* Desktop: scroll-driven word-by-word colour reveal */
function DesktopRevealText({ dark }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.25'] })
  const words = TEXT.split(' ')
  const brightColor = dark ? '#ffffff' : '#0a0e1a'
  return (
    <p ref={ref} className="relative text-balance text-xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl">
      {words.map((w, i) => {
        const opacity = useTransform(scrollYProgress, [i / words.length, (i + 1) / words.length], [0.25, 1])
        const color   = useTransform(scrollYProgress, [i / words.length, (i + 1) / words.length], ['#6b7690', brightColor])
        return (
          <motion.span key={i} style={{ opacity, color }} className="mr-[0.3em] inline-block">{w}</motion.span>
        )
      })}
    </p>
  )
}

/* Mobile: simple whileInView stagger — no scroll tracking needed */
function MobileRevealText({ dark }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const words = TEXT.split(' ')
  const brightColor = dark ? '#ffffff' : '#0a0e1a'
  return (
    <p ref={ref} className="text-balance text-xl font-medium leading-snug tracking-tight">
      {words.map((w, i) => (
        <motion.span key={i}
          className="mr-[0.3em] inline-block"
          initial={{ opacity: 0.25, color: '#6b7690' }}
          animate={inView ? { opacity: 1, color: brightColor } : {}}
          transition={{ duration: 0.4, delay: i * 0.025, ease: 'easeOut' }}
        >
          {w}
        </motion.span>
      ))}
    </p>
  )
}
export default function Statement() {
  const [index, setIndex] = useState(0)
  const Current = INDUSTRIES[index]
  const { dark } = useTheme()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % INDUSTRIES.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-14 sm:py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Mobile version */}
        {/* Mobile version */}
        <div className="lg:hidden">
          <MobileRevealText dark={dark} />
        </div>
        {/* Desktop version */}
        <div className="hidden lg:block">
          <DesktopRevealText dark={dark} />
        </div>

        <Reveal variant="scale" delay={0.15} className="flex justify-center lg:justify-end">
          <GradientOrb size={180}>
            <AnimatePresence mode="wait">
              <motion.div key={Current.label}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-2">
                <Current.icon className="h-8 w-8 text-white drop-shadow" />
                <span className="text-lg font-medium text-white drop-shadow">{Current.label}</span>
              </motion.div>
            </AnimatePresence>
          </GradientOrb>
        </Reveal>
      </div>
    </section>
  )
}
