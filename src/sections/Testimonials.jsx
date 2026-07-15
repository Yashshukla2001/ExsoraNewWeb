import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'

const T = [
  { quote: "With Exsora's AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched — it's like having an expert team working 24/7 with consistency and accuracy.", name: 'Priya Nair', role: 'Head of Innovation', company: 'Altara Global', photo: 'https://i.pravatar.cc/200?img=47', gradient: 'from-orange-400/20 to-blue-600/20' },
  { quote: "Exsora agents transformed our customer operations almost overnight. What once took hours now takes minutes. Their adaptability and precision make them the most capable platform we've ever implemented.", name: 'Sarah Mitchell', role: 'VP Digital Transformation', company: 'Nexora', photo: 'https://i.pravatar.cc/200?img=32', gradient: 'from-sky-400/20 to-violet-600/20' },
  { quote: 'The depth of integrations and speed of deployment made Exsora an easy choice for our global rollout. Our teams now rely on it daily and the results speak for themselves across every region.', name: 'Marcus Lee', role: 'COO', company: 'Bridgeline Logistics', photo: 'https://i.pravatar.cc/200?img=12', gradient: 'from-violet-400/20 to-pink-600/20' },
  { quote: 'What stood out was how quickly our team adapted. Exsora feels less like a tool and more like a colleague that never sleeps — proactive, precise, and always improving with every interaction.', name: 'Elena Voss', role: 'Director of Operations', company: 'Northwind Retail', photo: 'https://i.pravatar.cc/200?img=45', gradient: 'from-emerald-400/20 to-blue-600/20' },
]

const AUTOPLAY = 5500

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const go = (d) => { setDir(d); setIdx((i) => (i + d + T.length) % T.length) }

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => go(1), AUTOPLAY)
    return () => clearInterval(timer.current)
  }, [paused, idx])

  const item = T[idx]

  return (
    <section className="px-4 py-14 sm:py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow icon={HiOutlineChatBubbleBottomCenterText}>Testimonials</Eyebrow>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">Trusted by customers</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-secondary">Proven outcomes shared by industry leaders and innovators.</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={idx} custom={dir}
                initial={{ opacity: 0, x: 40 * dir, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -40 * dir, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br ${item.gradient} bg-surface`}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative grid gap-0 lg:grid-cols-[320px_1fr]">
                  {/* Photo panel */}
                  <div className="relative overflow-hidden lg:h-full">
                    <div className="aspect-[16/9] w-full sm:aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img src={item.photo} alt={item.name}
                        className="h-full w-full object-cover"
                        style={{ minHeight: 220 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60 lg:bg-gradient-to-t" />
                    </div>
                  </div>
                  {/* Content panel */}
                  <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12">
                    <div>
                      {/* quote mark */}
                      <div className="mb-5 text-5xl font-serif leading-none text-white/15 select-none">"</div>
                      <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                        {item.quote}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <img src={item.photo} alt={item.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15" />
                      <div>
                        <div className="font-semibold text-white">{item.name}</div>
                        <div className="text-sm text-secondary">{item.role} · {item.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* progress bar */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5">
                  {!paused && (
                    <motion.div key={idx} initial={{ width: '0%' }} animate={{ width: '100%' }}
                      transition={{ duration: AUTOPLAY / 1000, ease: 'linear' }}
                      className="h-full bg-gradient-to-r from-accent-orange to-accent-blue"
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* nav buttons */}
            <button onClick={() => go(-1)} aria-label="Previous" data-cursor="link"
              className="absolute left-2 top-1/2 -translate-y-1/2 hidden h-9 w-9 sm:grid place-items-center rounded-full glass text-white shadow-glass hover:bg-white/10 z-10">
              <HiOutlineChevronLeft />
            </button>
            <button onClick={() => go(1)} aria-label="Next" data-cursor="link"
              className="absolute right-2 top-1/2 -translate-y-1/2 hidden h-9 w-9 sm:grid place-items-center rounded-full glass text-white shadow-glass hover:bg-white/10 z-10">
              <HiOutlineChevronRight />
            </button>
          </div>

          {/* dot navigation */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {T.map((_, i) => (
              <button key={i} data-cursor="link"
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === idx ? 'h-2 w-8 bg-white' : 'h-2 w-2 bg-white/25 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
