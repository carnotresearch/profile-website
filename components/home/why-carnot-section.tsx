"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FlaskConical, ShieldCheck, Zap, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: FlaskConical,
    eyebrow: "47+ Research Projects",
    title: "Research that ships as real products",
    desc: "Our founders are active IIT Delhi professors. We don't publish and stop. Every research breakthrough becomes production-grade software deployed and used by real organizations across India.",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.07)",
  },
  {
    icon: ShieldCheck,
    eyebrow: "100% On-Premise Available",
    title: "Data sovereignty for regulated sectors",
    desc: "For government, defense, and enterprise clients who can't use the cloud, we deploy AI entirely within your own infrastructure. Air-gap capable, no external API calls, zero third-party data access.",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
  },
  {
    icon: Zap,
    eyebrow: "3 Products · 6 Domains",
    title: "Breadth across AI, vision & NLP",
    desc: "We build across enterprise knowledge AI, computer vision, sports analytics, multilingual NLP, and public transit intelligence, not a one-trick company locked into a single AI trend.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.07)",
  },
]

function PillarCard({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative flex flex-col rounded-2xl border border-white/8 p-7"
      style={{ background: pillar.bg }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[1.5px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${pillar.color}88, transparent)`,
        }}
      />
      <pillar.icon className="mb-5 h-6 w-6" style={{ color: pillar.color }} />
      <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
        {pillar.eyebrow}
      </span>
      <h3 className="mb-3 text-lg font-semibold leading-snug text-white">{pillar.title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{pillar.desc}</p>
    </motion.div>
  )
}

export function WhyCarnotSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "#080d1a" }}>
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glows */}
      <div
        className="pointer-events-none absolute -top-32 left-1/3 h-72 w-72 rounded-full blur-[100px] opacity-20"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full blur-[100px] opacity-15"
        style={{ background: "radial-gradient(circle, #818cf8, transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-1.5 text-xs font-medium text-cyan-400">
            Why icarKno™
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What makes us{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              different
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/45">
            Three things that set icarKno™ apart: from how we build, to who we build for,
            to the breadth of what we can deliver.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-cyan-500/25 hover:bg-white/8 hover:text-white"
          >
            Learn more about our approach
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
