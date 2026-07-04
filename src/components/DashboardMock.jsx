import { motion } from 'framer-motion'
import { HiOutlineSparkles, HiOutlineSearch } from 'react-icons/hi'
import CountUp from './CountUp'

const NAV = ['Dashboard', 'Analytics', 'Orders', 'Source', 'Settings']
const STATS = [
  { label: 'Total Sales',    value: 2,   prefix: '$', suffix: 'K', sub: '+8% from yesterday',  subColor: 'text-emerald-400' },
  { label: 'Total Order',   value: 432,  sub: '+5% from yesterday',  subColor: 'text-emerald-400' },
  { label: 'Product Sold',  value: 9,    sub: '+1.2% from yesterday', subColor: 'text-emerald-400' },
  { label: 'New Customers', value: 42,   sub: '+3% from yesterday',  subColor: 'text-emerald-400' },
]
const TOP_PRODUCTS = [
  { name: 'Home Decor Range',     pct: 45, color: '#3d7cff' },
  { name: 'Analytics Dashboard',  pct: 29, color: '#22c55e' },
  { name: 'Bathroom Essentials',  pct: 18, color: '#a855f7' },
  { name: 'Smart Wearables',      pct: 25, color: '#f59e0b' },
]
const SALES_MAPPING = [62, 90, 55, 78, 44, 85, 70, 50]
const VOL_SERVICE   = [
  { a: 48, b: 72 }, { a: 65, b: 45 }, { a: 85, b: 60 },
  { a: 52, b: 80 }, { a: 70, b: 55 }, { a: 40, b: 90 },
]
const RANDOM_SEARCHES = ['Automation ROI report', 'Agent performance Q2', 'Banking compliance score', 'New customer trends', 'Workflow efficiency']

export default function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl"
      style={{ background: 'rgba(10,12,20,0.92)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(24px)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
    >
      <div className="flex min-h-[440px]">

        {/* ── Sidebar ── */}
        <div className="hidden w-44 shrink-0 flex-col border-r border-white/5 bg-black/30 p-5 sm:flex">
          <span className="mb-6 text-base font-bold tracking-tight text-white">EXSORA</span>
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <motion.div key={n}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.45 }}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${n === 'Analytics' ? 'bg-white/10 text-white' : 'text-muted hover:text-white'}`}
              >
                {n}
              </motion.div>
            ))}
          </nav>
        </div>

        {/* ── Main content ── */}
        <div className="flex flex-1 flex-col">
          {/* top bar */}
          <div className="flex items-center gap-4 border-b border-white/5 px-5 py-3.5">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <HiOutlineSparkles className="text-amber-400" />
              Analytics Agent
            </div>
            <div className="relative ml-auto flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-secondary">
              <HiOutlineSearch className="shrink-0" />
              {/* animated search text */}
              <div className="relative h-4 w-40 overflow-hidden">
                {RANDOM_SEARCHES.map((q, i) => (
                  <motion.span key={q} className="absolute left-0 top-0 whitespace-nowrap text-xs text-muted"
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: [16, 0, 0, -16], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, delay: i * 3, repeat: Infinity, repeatDelay: (RANDOM_SEARCHES.length - 1) * 3, ease: 'easeInOut' }}
                  >
                    {q}
                  </motion.span>
                ))}
              </div>
            </div>
           <img src="/logo.png" alt="EXSORA" className="h-8 w-8 shrink-0 rounded-full object-contain" />
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.16,1,0.3,1] }}
                className="rounded-xl border border-white/6 bg-white/[0.04] p-4"
              >
                <div className="text-2xl font-bold text-white">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} delay={0.3 + i * 0.1} duration={1.2} />
                </div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
                <div className={`mt-1.5 text-[11px] font-medium ${s.subColor}`}>{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* bottom panels */}
          <div className="grid flex-1 grid-cols-1 gap-3 p-4 pt-0 sm:grid-cols-3">
            {/* Top Products */}
            <div className="rounded-xl border border-white/6 bg-white/[0.03] p-4">
              <div className="mb-3 text-sm font-semibold text-white">Top Products</div>
              <div className="space-y-3">
                {TOP_PRODUCTS.map((p, i) => (
                  <div key={p.name}>
                    <div className="mb-1 flex items-center justify-between text-[11px]">
                      <span className="truncate text-secondary">{p.name}</span>
                      <span className="ml-2 shrink-0 text-white">{p.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: '0%' }} whileInView={{ width: `${p.pct * 1.5}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.9, ease: [0.16,1,0.3,1] }}
                        className="h-full rounded-full"
                        style={{ background: p.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Mapping */}
            <div className="rounded-xl border border-white/6 bg-white/[0.03] p-4">
              <div className="mb-3 text-sm font-semibold text-white">Sales Mapping</div>
              <div className="flex h-28 items-end gap-1.5">
                {SALES_MAPPING.map((h, i) => (
                  <div key={i} className="relative flex flex-1 flex-col items-center gap-0.5" style={{ height: '100%' }}>
                    <div className="relative w-full flex-1">
                      <motion.div
                        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: `${h}%`, background: 'linear-gradient(to top, #ff8a3d, #ffc15e)', transformOrigin: 'bottom', position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: 2 }}
                      />
                    </div>
                    {i % 2 === 0 && (
                      <div className="relative w-full" style={{ height: `${h * 0.45}%` }}>
                        <motion.div
                          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 + 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', background: 'rgba(61,124,255,0.4)', transformOrigin: 'bottom', borderRadius: 2 }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Volume vs Service */}
            <div className="rounded-xl border border-white/6 bg-white/[0.03] p-4">
              <div className="mb-3 text-sm font-semibold text-white">Volume vs Service</div>
              <div className="flex h-28 gap-2">
                {VOL_SERVICE.map((pair, i) => (
                  <div key={i} className="flex flex-1 items-end gap-0.5">
                    <div className="relative flex-1" style={{ height: '100%' }}>
                      <motion.div
                        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: `${pair.a}%`, background: 'linear-gradient(to top,#3d7cff,#5ad1ff)', transformOrigin: 'bottom', position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: 2 }}
                      />
                    </div>
                    <div className="relative flex-1" style={{ height: '100%' }}>
                      <motion.div
                        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + 0.04, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: `${pair.b}%`, background: 'linear-gradient(to top,#ff8a3d,#ffc15e)', transformOrigin: 'bottom', position: 'absolute', bottom: 0, left: 0, right: 0, borderRadius: 2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-4 text-[10px] text-muted">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-accent-blue" />Volume</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-accent-orange" />Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
