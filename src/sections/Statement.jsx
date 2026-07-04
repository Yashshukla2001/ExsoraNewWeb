import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Reveal from '../components/Reveal'
import GradientOrb from '../components/GradientOrb'

const INDUSTRIES = [
  { label: 'Retail', icon: HiOutlineShoppingBag },
  { label: 'Healthcare', icon: HiOutlineShoppingBag },
  { label: 'Finance', icon: HiOutlineShoppingBag },
  { label: 'Logistics', icon: HiOutlineShoppingBag },
]

const TEXT =
  'We help enterprises reimagine business growth with our AI Platform, Work Solutions, and Intelligent Marketplace. Unlock efficiency, automation, and innovation across every workflow.'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.25, 1])
  const color = useTransform(progress, range, ['#6b7690', '#ffffff'])
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.3em] inline-block">
      {children}
    </motion.span>
  )
}

function ScrollRevealText() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.25'],
  })
  const words = TEXT.split(' ')

  return (
    <p
      ref={ref}
      className="text-balance text-3xl font-medium leading-snug tracking-tight sm:text-4xl md:text-[2.6rem]"
    >
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}

export default function Statement() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % INDUSTRIES.length), 2400)
    return () => clearInterval(id)
  }, [])

  const Current = INDUSTRIES[index]

  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollRevealText />

        <Reveal variant="scale" delay={0.15} className="flex justify-center lg:justify-end">
          <GradientOrb size={240}>
            <AnimatePresence mode="wait">
              <motion.div
                key={Current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
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
