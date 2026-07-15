import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary', // primary | ghost | outline
  className = '',
  magnetic = true,
  as: Tag = 'button',
  ...rest
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!magnetic || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }
  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0,0)'
  }

   const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-out whitespace-nowrap select-none'

const styles = {
    primary:
  'btn-onbrand-text bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9] bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_45px_rgba(14,165,233,0.55)] transition-all duration-300 ease-out',
    // primary:
    //   'text-black bg-gradient-to-r from-[##2563EB] to-[#06B6D4] bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_28px_rgba(255,140,60,0.45)] hover:shadow-[0_0_40px_rgba(255,193,94,0.6)]',
    ghost:
  'btn-onbrand-text bg-[#0B1120]/60 backdrop-blur-lg border border-blue-500/15 hover:bg-[#111827]/80 hover:border-cyan-400/35 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300',
    outline:
  'btn-onbrand-text border border-transparent [background:linear-gradient(#0B1120,#0B1120)_padding-box,linear-gradient(90deg,#2563EB,#06B6D4)_border-box] hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] transition-all duration-300',
    glow:
  'btn-onbrand-text bg-[#0B1120] [background:linear-gradient(#0B1120,#0B1120)_padding-box,linear-gradient(90deg,#1D4ED8,#2563EB,#0EA5E9,#06B6D4)_border-box] shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_42px_rgba(14,165,233,0.6)] transition-all duration-300 ease-out',
  }

  if (variant === 'glow') {
    return (
      <motion.span
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        
        style={{ display: 'inline-block', transition: 'transform 0.2s ease-out' }}
        whileTap={{ scale: 0.95 }}
      >
        <Tag data-cursor="link" className={`${base} border-2 ${styles.glow} ${className}`} {...rest}>
          {children}
        </Tag>
      </motion.span>
    )
  }


  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: 'inline-block', transition: 'transform 0.2s ease-out' }}
      whileTap={{ scale: 0.95 }}
    >
      <Tag data-cursor="link" className={`${base} ${styles[variant]} ${className}`} {...rest}>
        {children}
      </Tag>
    </motion.span>
  )
}
