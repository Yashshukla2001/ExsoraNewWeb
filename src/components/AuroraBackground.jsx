export default function AuroraBackground({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-black ${className}`}>
      <div className="absolute inset-0">
        <div className="aurora-beam aurora-beam-1" />
        <div className="aurora-beam aurora-beam-2" />
        <div className="aurora-beam aurora-beam-3" />
        <div className="aurora-beam aurora-beam-4" />
        <div className="aurora-beam aurora-beam-5" />
      </div>
      {/* fade the beams into black toward the top so headline stays readable */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black via-black/70 to-transparent" />
      {/* subtle starfield dots */}
      <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  )
}
