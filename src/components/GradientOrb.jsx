import { motion } from 'framer-motion'

export default function GradientOrb({ size = 260, className = '', children, spin = true, float = true }) {
  return (
    <div
      className={`relative flex items-center justify-center ${float ? 'animate-float-slow' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-sphere-gradient blur-[2px]"
        animate={spin ? { rotate: 360 } : {}}
        transition={spin ? { duration: 14, repeat: Infinity, ease: 'linear' } : {}}
        style={{ opacity: 0.9 }}
      />
      <div
        className="absolute inset-[6%] rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%)',
        }}
      />
      <div
        className="absolute -inset-6 rounded-full opacity-60 blur-3xl"
        style={{ background: 'inherit' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  )
}
