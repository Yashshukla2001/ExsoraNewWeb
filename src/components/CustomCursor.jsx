import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

let pointId = 0

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default') // default | link
  const [trail, setTrail] = useState([])
  const [bursts, setBursts] = useState([])
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const coreX = useSpring(mx, { stiffness: 900, damping: 45, mass: 0.25 })
  const coreY = useSpring(my, { stiffness: 900, damping: 45, mass: 0.25 })
  const lastSpawn = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return

    document.documentElement.classList.add('cursor-enabled')

    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)

      const now = performance.now()
      if (now - lastSpawn.current > 28) {
        lastSpawn.current = now
        const id = pointId++
        setTrail((t) => {
          const next = [...t, { id, x: e.clientX, y: e.clientY }]
          return next.slice(-14)
        })
        setTimeout(() => {
          setTrail((t) => t.filter((p) => p.id !== id))
        }, 650)
      }

      const target = e.target.closest('a, button, [data-cursor="link"]')
      setVariant(target ? 'link' : 'default')
    }

    const down = (e) => {
      const id = pointId++
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 550)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mousedown', down)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      document.documentElement.classList.remove('cursor-enabled')
    }
  }, [mx, my])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]" aria-hidden="true">
      {/* fading splash trail */}
      {trail.map((p, i) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="fixed left-0 top-0 h-2.5 w-2.5 rounded-full"
          style={{
            x: p.x,
            y: p.y,
            translateX: '-50%',
            translateY: '-50%',
            background:
              i % 2 === 0
                ? 'radial-gradient(circle, #ffc15e, transparent 70%)'
                : 'radial-gradient(circle, #5ad1ff, transparent 70%)',
          }}
        />
      ))}

      {/* click burst splashes */}
      {bursts.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.7, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="fixed left-0 top-0 h-8 w-8 rounded-full border border-accent-cyan/70"
          style={{ x: p.x, y: p.y, translateX: '-50%', translateY: '-50%' }}
        />
      ))}

      {/* core cursor dot, expands into a glowing ring over interactive elements */}
      <motion.div
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: variant === 'link' ? '0 0 24px rgba(90,209,255,0.45)' : '0 0 8px rgba(255,255,255,0.6)',
        }}
        animate={{
          width: variant === 'link' ? 38 : 10,
          height: variant === 'link' ? 38 : 10,
          backgroundColor: variant === 'link' ? 'rgba(90,209,255,0.08)' : '#ffffff',
          borderWidth: variant === 'link' ? 1.5 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 rounded-full border-accent-cyan/70"
      />
    </div>
  )
}
