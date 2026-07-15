import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlinePlus, HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const FAQS = [
  { q: 'What is EXSORA?', a: 'EXSORA is an AI-powered enterprise platform that helps teams deploy intelligent agents across work, service, and process workflows.' },
  { q: 'How quickly can EXSORA be implemented?', a: 'Most teams are up and running within days thanks to pre-built agents, guided setup, and ecosystem-agnostic integrations.' },
  { q: 'How are AI Agents different from automation tools?', a: 'Unlike static automation, EXSORA agents understand context, adapt to changing data, and make decisions within guardrails you define.' },
  { q: 'Can AI Agents replace human employees?', a: 'Agents are designed to augment your team — handling repetitive, high-volume tasks so people can focus on judgment-driven work.' },
  { q: 'Can EXSORA integrate with our existing systems?', a: 'Yes. EXSORA connects with major platforms like SharePoint, SAP, Slack, and Confluence, plus custom APIs for bespoke systems.' },
  { q: 'How does EXSORA improve customer service?', a: 'Agents triage, respond, and escalate customer requests in real time, reducing response times while maintaining consistency.' },
  { q: 'Is EXSORA secure for enterprise use?', a: 'EXSORA uses end-to-end encryption, real-time threat detection, and compliance tooling across every layer of the platform.' },
  { q: 'Is EXSORA scalable for global operations?', a: 'Absolutely — the platform is built on standardized infrastructure designed to scale across regions, teams, and workloads.' },
]

function FaqItem({ q, a, open, onClick }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-surface">
      <button
        data-cursor="link"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white sm:text-base">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-white/70">
          <HiOutlinePlus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm leading-relaxed text-secondary sm:px-6 sm:pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
   <section id="faq" className="scroll-mt-24 px-4 py-14 sm:py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow icon={HiOutlineQuestionMarkCircle}>FAQ</Eyebrow>
        </Reveal>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={0.05}>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Curious About EXSORA?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-secondary">
              Answers about our AI-powered enterprise platform.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.05}>
              <FaqItem q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
