"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Search,
  ShieldCheck,
  FileText,
  AlertTriangle,
  FolderOpen,
  Layers,
  Lock,
  Scale,
  BookOpen,
  Landmark,
  TrendingUp,
  Server,
  Cloud,
  GitMerge,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

// ─── FadeUp utility ───────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      {children}
    </div>
  )
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  )
}

// ─── Static icon/color data (position-indexed) ────────────────────────────────
const painPointStyles = [
  { icon: AlertTriangle, iconBg: "bg-red-50", iconColor: "text-red-600", border: "border-red-100" },
  { icon: FolderOpen, iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100" },
  { icon: Scale, iconBg: "bg-blue-50", iconColor: "text-blue-600", border: "border-blue-100" },
]

const architectureStyles = [
  { icon: Database, iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { icon: Search, iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: ShieldCheck, iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: Lock, iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  { icon: FileText, iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
]

const deploymentStyles = [
  { icon: Server, iconBg: "bg-violet-50", iconColor: "text-violet-600", accent: "#7c3aed" },
  { icon: GitMerge, iconBg: "bg-cyan-50", iconColor: "text-cyan-600", accent: "#06b6d4" },
  { icon: Cloud, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accent: "#059669" },
]

const useCaseStyles = [
  { icon: Scale, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: BookOpen, iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { icon: Landmark, iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
  { icon: TrendingUp, iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
]

// ─── Main Export ──────────────────────────────────────────────────────────────
export function EnterpriseRAGContent() {
  const { tx } = useLanguage()
  const p = tx.enterpriseRAGPage

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background min-h-hero-page-lg flex flex-col justify-center pt-16 pb-12 sm:pb-[7.5rem]">
        {/* Dot-grid overlay (dark dots on light bg) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow blobs — softer for light bg */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                {p.hero.badge}
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {p.hero.heading1}{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {p.hero.headingAccent}
                </span>
              </h1>

              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {p.hero.desc}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-primary text-white shadow-lg hover:bg-primary/90 sm:w-auto"
                >
                  <Link href="/contact">
                    {p.hero.demoBtn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full bg-transparent hover:bg-white/20 sm:w-auto"
                >
                  <Link href="/solutions">{p.viewAllBtn}</Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What is RAG? ──────────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Text */}
            <div>
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {p.ragSection.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {p.ragSection.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {p.ragSection.intro}
                </p>
              </FadeUp>

              <div className="mt-8 flex flex-col gap-5">
                <FadeUp delay={100}>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-secondary/40 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {p.ragSection.stage1Title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.ragSection.stage1Desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={180}>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-secondary/40 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {p.ragSection.stage2Title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.ragSection.stage2Desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              <FadeUp delay={260}>
                <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                    {p.ragSection.businessMeansLabel}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.ragSection.businessMeansItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            </div>

            {/* Visual flow diagram */}
            <FadeUp delay={120} className="lg:pl-8">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.ragSection.diagramTitle}
                </p>
                <div className="flex flex-col items-center gap-3">
                  {/* Step 1 */}
                  <div className="w-full rounded-xl border border-violet-200 bg-violet-50 px-5 py-4 text-center">
                    <Database className="mx-auto mb-1.5 h-5 w-5 text-violet-600" />
                    <p className="text-sm font-semibold text-violet-900">
                      {p.ragSection.diagramStep1Title}
                    </p>
                    <p className="mt-0.5 text-xs text-violet-600">
                      {p.ragSection.diagramStep1Sub}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {p.ragSection.diagramConn1}
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Step 2 */}
                  <div className="w-full rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-4 text-center">
                    <Search className="mx-auto mb-1.5 h-5 w-5 text-cyan-600" />
                    <p className="text-sm font-semibold text-cyan-900">
                      {p.ragSection.diagramStep2Title}
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-600">
                      {p.ragSection.diagramStep2Sub}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {p.ragSection.diagramConn2}
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Step 3 */}
                  <div className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center">
                    <Layers className="mx-auto mb-1.5 h-5 w-5 text-emerald-600" />
                    <p className="text-sm font-semibold text-emerald-900">
                      {p.ragSection.diagramStep3Title}
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-600">
                      {p.ragSection.diagramStep3Sub}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {p.ragSection.diagramConn3}
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Output */}
                  <div className="w-full rounded-xl border border-border bg-secondary/60 px-5 py-4 text-center">
                    <ShieldCheck className="mx-auto mb-1.5 h-5 w-5 text-foreground" />
                    <p className="text-sm font-semibold text-foreground">
                      {p.ragSection.diagramOutputTitle}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {p.ragSection.diagramOutputSub}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Why Enterprises Need RAG ──────────────────────────────────────── */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {p.painPoints.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.painPoints.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.painPoints.desc}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-3">
            {p.painPoints.items.map((item, i) => {
              const s = painPointStyles[i]
              return (
                <FadeUp key={item.title} delay={i * 120}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border ${s.border} bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                  >
                    {/* Top accent */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}
                    >
                      <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          <FadeUp delay={400}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              {p.painPoints.tailNote}{" "}
              <span className="font-medium text-foreground">
                {p.painPoints.tailNoteHighlight}
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Architecture ──────────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {p.architecture.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.architecture.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.architecture.desc}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.architecture.items.map((item, i) => {
              const s = architectureStyles[i]
              return (
                <FadeUp key={item.title} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    {/* Gradient top stripe */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${s.iconBg}`}
                    >
                      <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Deployment Models ─────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {p.deployment.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.deployment.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.deployment.desc}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-3">
            {p.deployment.models.map((model, i) => {
              const s = deploymentStyles[i]
              return (
                <FadeUp key={model.title} delay={i * 120}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div
                      className="absolute inset-x-0 top-0 h-[2px]"
                      style={{
                        background: `linear-gradient(to right, ${s.accent}, transparent)`,
                      }}
                    />
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}
                    >
                      <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {model.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {model.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {p.useCases.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {p.useCases.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {p.useCases.desc}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2">
            {p.useCases.items.map((uc, i) => {
              const s = useCaseStyles[i]
              return (
                <FadeUp key={uc.title} delay={i * 100}>
                  <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${s.iconBg}`}
                    >
                      <s.icon className={`h-5 w-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {uc.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {uc.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Outcomes ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {p.outcomes.eyebrow}
              </p>
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
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">
                    {o.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
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
