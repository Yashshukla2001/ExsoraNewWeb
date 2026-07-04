import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 40, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  scale: { hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' }, show: { opacity: 1, scale: 1, filter: 'blur(0px)' } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -40, filter: 'blur(8px)' }, show: { opacity: 1, x: 0, filter: 'blur(0px)' } },
  right: { hidden: { opacity: 0, x: 40, filter: 'blur(8px)' }, show: { opacity: 1, x: 0, filter: 'blur(0px)' } },
}

export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.25,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
