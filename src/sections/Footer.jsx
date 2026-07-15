import { motion } from 'framer-motion'
import { HiOutlineCamera } from 'react-icons/hi2'
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaReddit } from 'react-icons/fa6'
import Reveal from '../components/Reveal'

const COLUMNS = [
  { title: 'Navigation', links: ['Home', 'About', 'Integration', 'Contact'] },
  { title: 'Documentation', links: ['Blogs', 'Changelog', 'Privacy policy', 'Terms and Conditions'] },
  { title: 'Other Pages', links: ['Launching Soon…', '404'] },
  { title: 'Social Connect', links: ['Instagram', 'X / Twitter', 'LinkedIn', 'Reddit'] },
]

const SOCIALS = [
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaXTwitter, label: 'X / Twitter' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaReddit, label: 'Reddit' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-footer-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal variant="scale" className="overflow-hidden">
          <motion.h2
            aria-hidden="true"
            className="select-none text-center text-[14vw] font-bold leading-none tracking-tighter sm:text-[9rem] lg:text-[11rem]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              backgroundImage:
                'linear-gradient(90deg, #ff8a3d 0%, #ffc15e 20%, #ffffff 40%, #5ad1ff 60%, #3d7cff 80%, #ff8a3d 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            EXSORA
          </motion.h2>
        </Reveal>

        <div className="relative mt-8 grid grid-cols-2 gap-6 pb-14 sm:mt-14 sm:grid-cols-4 sm:gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-medium text-white">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" data-cursor="link" className="text-sm text-secondary transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-muted sm:flex-row">
          <span>All rights reserved for @EXSORA — {new Date().getFullYear()}</span>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#top"
                aria-label={s.label}
                data-cursor="link"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-secondary transition-colors hover:border-white/30 hover:text-white"
              >
                <s.icon size={13} />
              </a>
            ))}
          </div>
          <a href="#top" data-cursor="link" className="flex items-center gap-1.5 hover:text-white">
            <HiOutlineCamera className="h-3.5 w-3.5" /> Designed by EXSORA.
          </a>
        </div>
      </div>
    </footer>
  )
}
