import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineCurrencyDollar } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'

const PLANS = [
  {
    name: 'Sonic', monthly: 49, yearly: 490, yearSub: '500+ teams trusted this plan',
    features: ['Access to core AI Agents', 'Workflow automation for teams', 'Basic integrations', 'Standard reporting & analytics'],
    featuresYearly: ['Access to all AI Agents', 'Extended workflow automation', 'Premium integrations', 'Advanced reporting & analytics', 'Priority email support', '10,000 AI actions per year'],
  },
  {
    name: 'Supersonic', monthly: 99, yearly: 990, yearSub: '400+ growing enterprises', highlight: true,
    features: ['Everything in Sonic Monthly', 'Advanced AI Agents for workflows', 'Priority integrations', 'Enhanced dashboards'],
    featuresYearly: ['Everything in Sonic Yearly', 'AI Agent collaboration across teams', 'API access & custom integrations', 'Predictive analytics & insights', 'Priority 24/7 support', '50,000 AI actions per year'],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow icon={HiOutlineCurrencyDollar}>Pricing</Eyebrow>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Simple pricing for every scale
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-secondary">Pick a plan that grows with your enterprise — switch or cancel anytime.</p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-8 flex">
          <div className="inline-flex items-center rounded-full glass p-1.5">
            {['Monthly', 'Yearly'].map((label) => (
              <button key={label} data-cursor="link" onClick={() => setYearly(label === 'Yearly')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  (label === 'Yearly') === yearly ? 'bg-white text-black' : 'text-secondary hover:text-white'
                }`}
              >
                {label}
                {label === 'Yearly' && <span className="text-emerald-400 text-xs">30% off</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} variant="scale" delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-3xl border p-8 ${plan.highlight ? 'border-accent-blue/40 bg-surface shadow-glow-blue' : 'border-white/8 bg-surface'}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-orange to-accent-blue px-4 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <motion.span key={yearly ? 'y' : 'm'}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-white"
                  >
                    ${yearly ? plan.yearly : plan.monthly}
                  </motion.span>
                  <span className="pb-1.5 text-sm text-muted">/{yearly ? 'year' : 'month'}</span>
                </div>
                <Button variant="glow" className="mt-6 w-full" as="a" href="#faq">Contact Us</Button>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {(yearly ? plan.featuresYearly : plan.features).map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                      <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />{f}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-xs text-muted">{plan.yearSub}</p>
              </div>
            </Reveal>
          ))}

          <Reveal variant="scale" delay={0.18}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/8 bg-gradient-to-br from-surface to-black p-8">
              <div>
                <span className="text-sm text-secondary">Go for more power</span>
                <h3 className="mt-1 text-3xl font-bold tracking-tight text-white">HyperSonic</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">Unlimited automation with dedicated enterprise support.</p>
                <hr className="my-6 border-white/8" />
                <ul className="space-y-3.5">
                  {['Enterprise-grade AI Agent', 'Full custom API access', 'Unlimited workflows & automation', 'Dedicated success manager'].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-secondary">
                      <HiOutlineCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="glow" className="mt-8 w-full" as="a" href="#faq">Contact Us</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
