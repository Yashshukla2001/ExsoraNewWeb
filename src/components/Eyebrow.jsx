export default function Eyebrow({ icon: Icon, children, align = 'left' }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-medium tracking-wide text-accent-blue/90 ${
        align === 'center' ? 'justify-center' : ''
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span className="uppercase">{children}</span>
    </div>
  )
}

export function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full glass px-4 py-1.5 text-xs font-medium text-secondary ${className}`}
    >
      {children}
    </span>
  )
}
