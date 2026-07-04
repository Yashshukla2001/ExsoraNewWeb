import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa6'
import Button from './Button'

const LINKS = [
  { label: 'AI Solutions', href: '#platform' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#faq' },
]

const WHATSAPP_NUMBER = '1234567890' // replace with real number
const EMAIL_ADDRESS   = 'hello@exsora.ai'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        {/* Logo */}
      <a href="#top" data-cursor="link" className="flex items-center gap-0.5">
  <img src="/logo.png" alt="EXSORA" className="h-12 w-13 shrink-0 object-contain" />
  <span className="text-xl font-bold tracking-tighter text-white">EXSORA</span>
</a>

        {/* Centre nav pill */}
        <nav
          className={`hidden items-center gap-1 rounded-full border border-white/15 px-2 py-2 backdrop-blur-xl transition-all duration-500 lg:flex ${
            scrolled ? 'bg-black/40 shadow-glass' : 'bg-white/[0.02]'
          }`}
        >
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} data-cursor="link"
              className="rounded-full px-4 py-2 text-sm text-secondary transition-colors duration-200 hover:bg-white/5 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side — contact icons + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank" rel="noopener noreferrer"
            data-cursor="link"
            aria-label="Chat on WhatsApp"
            className="group grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-secondary transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <FaWhatsapp size={16} />
          </a>
          {/* Email */}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            data-cursor="link"
            aria-label="Send an email"
            className="group grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-secondary transition-all duration-200 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-accent-cyan"
          >
            <HiOutlineEnvelope size={16} />
          </a>

          <Button variant="glow" as="a" href="#pricing" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="grid h-10 w-10 place-items-center rounded-full glass text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 overflow-hidden rounded-3xl glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-secondary hover:bg-white/5 hover:text-white">
                  {l.label}
                </a>
              ))}
              {/* Mobile contact row */}
              <div className="mt-2 flex gap-2">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm text-secondary hover:text-emerald-400">
                  <FaWhatsapp size={16} /> WhatsApp
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm text-secondary hover:text-accent-cyan">
                  <HiOutlineEnvelope size={16} /> Email
                </a>
              </div>
              <Button variant="glow" as="a" href="#pricing" className="mt-1 w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
