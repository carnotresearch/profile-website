"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Scale,
  WifiOff,
  Zap,
  SlidersHorizontal,
  Cpu,
  Layers,
  Boxes,
  Wrench,
  Workflow,
  Landmark,
  Shield,
  PiggyBank,
  HeartPulse,
  Factory,
  FileText,
  MessagesSquare,
  Search,
  Server,
  GitMerge,
  Cloud,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        <span>{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}>
        <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  )
}

// ─── Static icon/color data (position-indexed) ────────────────────────────────
const driverStyles = [
  { icon: ShieldCheck, iconBg: "bg-violet-50", iconColor: "text-violet-600", border: "border-violet-100" },
  { icon: Scale, iconBg: "bg-blue-50", iconColor: "text-blue-600", border: "border-blue-100" },
  { icon: WifiOff, iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100" },
  { icon: Zap, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-100" },
  { icon: SlidersHorizontal, iconBg: "bg-cyan-50", iconColor: "text-cyan-600", border: "border-cyan-100" },
]

const capabilityStyles = [
  { icon: Cpu, iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { icon: Layers, iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: Boxes, iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: Wrench, iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  { icon: Workflow, iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
]

const deploymentStyles = [
  { icon: Server, iconBg: "bg-violet-50", iconColor: "text-violet-600", accent: "#7c3aed" },
  { icon: GitMerge, iconBg: "bg-cyan-50", iconColor: "text-cyan-600", accent: "#06b6d4" },
  { icon: Cloud, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accent: "#059669" },
]

const environmentIcons = [Landmark, Shield, PiggyBank, HeartPulse, Factory]

const applicationIcons = [FileText, Search, MessagesSquare, Workflow, ShieldCheck]

export function OnPremAIContent() {
  const { tx } = useLanguage()
  const p = tx.onPremAIPage

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background min-h-hero-page-lg flex flex-col justify-center pt-16 pb-12 sm:pb-[7.5rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                {p.hero.badge}
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {p.hero.heading1}{" "}
                <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  {p.hero.headingAccent}
                </span>
              </h1>

              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {p.hero.desc}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="w-full bg-primary text-white shadow-lg hover:bg-primary/90 sm:w-auto">
                  <Link href="/contact">
                    {p.hero.discussBtn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full bg-transparent hover:bg-white/20 sm:w-auto">
                  <Link href="/solutions">{p.hero.viewAllBtn}</Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why On-Premise */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.drivers.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.drivers.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.drivers.desc}
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.drivers.items.map((d, i) => {
              const s = driverStyles[i]
              return (
                <FadeUp key={d.title} delay={i * 100}>
                  <div className={`group relative h-full overflow-hidden rounded-2xl border ${s.border} bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                      <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
          <FadeUp delay={600}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              {p.drivers.outro.split("completely under your control.")[0]}
              <span className="font-medium text-foreground">completely under your control.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.capabilities.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.capabilities.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.capabilities.desc}
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.items.map((c, i) => {
              const s = capabilityStyles[i]
              return (
                <FadeUp key={c.title} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
                    <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}>
                      <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.deployment.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.deployment.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.deployment.desc}
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {p.deployment.models.map((m, i) => {
              const s = deploymentStyles[i]
              return (
                <FadeUp key={m.title} delay={i * 120}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }}
                    />
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}>
                      <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* Environments + Applications */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.environments.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {p.environments.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p.environments.desc}
                </p>
              </FadeUp>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {p.environments.items.map((e, i) => {
                  const Icon = environmentIcons[i]
                  return (
                    <FadeUp key={e.title} delay={i * 80}>
                      <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                          <Icon className="h-5 w-5 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{e.title}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{e.text}</p>
                        </div>
                      </div>
                    </FadeUp>
                  )
                })}
              </div>
            </div>

            <FadeUp delay={120}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.applications.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {p.applications.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p.applications.desc}
                </p>
                <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <ul className="flex flex-col gap-4">
                    {p.applications.items.map((text, i) => {
                      const Icon = applicationIcons[i]
                      return (
                        <li key={text} className="flex items-start gap-4">
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                            <Icon className="h-4 w-4 text-cyan-600" />
                          </div>
                          <span className="text-sm leading-relaxed text-muted-foreground">{text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">{p.outcomes.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.outcomes.heading}
              </h2>
            </div>
          </FadeUp>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {p.outcomes.items.map((o, i) => (
              <FadeUp key={o.label} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                  <p className="text-2xl font-bold text-foreground">{o.stat}</p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{o.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.faq.heading}
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-border bg-card px-7 py-2 shadow-sm">
              {p.faq.items.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
