const LOGOS = ['NIMBUS', 'LOQO', 'IPSUM', 'VERDA', 'ATLARA', 'ORBYTE', 'NIMBUS', 'LOQO', 'IPSUM', 'VERDA', 'ATLARA', 'ORBYTE']

export default function LogoStrip() {
  return (
    <section className="relative border-y border-white/5 py-7 sm:py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
      <div className="flex w-max animate-marquee gap-8 sm:gap-16">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <span
            key={i}
            className="select-none whitespace-nowrap text-base font-semibold tracking-widest text-white/60 sm:text-xl"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}
