"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Cpu,
  Eye,
  Zap,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

// ─── FadeUp ───────────────────────────────────────────────────────────────────
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
      { threshold: 0.06 }
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

// ─── Static meta (style/layout only — no visible text) ───────────────────────
const guidesMeta = [
  { id: "start-ai-project",        number: "01", icon: Cpu,           iconBg: "bg-violet-50",  iconColor: "text-violet-600",  accentFrom: "#7c3aed", steps: 9 },
  { id: "computer-vision-workflow", number: "02", icon: Eye,           iconBg: "bg-cyan-50",    iconColor: "text-cyan-600",    accentFrom: "#06b6d4", steps: 9 },
  { id: "real-time-deployment",    number: "03", icon: Zap,           iconBg: "bg-amber-50",   iconColor: "text-amber-600",   accentFrom: "#f59e0b", steps: 6 },
  { id: "common-mistakes",         number: "04", icon: AlertTriangle, iconBg: "bg-red-50",     iconColor: "text-red-600",     accentFrom: "#ef4444", steps: 5 },
  { id: "choosing-ai-solution",    number: "05", icon: Lightbulb,     iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accentFrom: "#10b981", steps: 5 },
]

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({
  n,
  title,
  body,
  accent,
}: {
  n: string
  title: string
  body: string
  accent: string
}) {
  return (
    <div className="group relative flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm"
        style={{ background: accent }}
      >
        {n}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground leading-snug">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function GuidesContent() {
  const { tx } = useLanguage()
  const t = tx.guidesPage

  const guides = guidesMeta.map((meta, i) => ({
    ...meta,
    title: t.guides[i].title,
    summary: t.guides[i].summary,
    steps_content: t.guides[i].steps_content,
  }))

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0b1929] py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full bg-accent/12 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                icarKno™
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
                {t.hero.heading}{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                  {t.hero.headingAccent}
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
                {t.hero.desc}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Guide Index Cards ─────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                {t.index.eyebrow}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t.index.heading}
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g, i) => (
              <FadeUp key={g.id} delay={i * 80}>
                <a
                  href={`#${g.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${g.accentFrom}, transparent)`,
                    }}
                  />

                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${g.iconBg}`}
                    >
                      <g.icon className={`h-5 w-5 ${g.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-border">
                      {g.number}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {g.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {g.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {g.steps} {t.stepsLabel}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      {t.readGuide} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Individual Guide Sections ─────────────────────────────────────── */}
      {guides.map((guide, gi) => (
        <section
          key={guide.id}
          id={guide.id}
          className={`py-20 lg:py-28 ${gi % 2 === 0 ? "bg-secondary/25" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${guide.iconBg}`}
                  >
                    <guide.icon className={`h-6 w-6 ${guide.iconColor}`} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: guide.accentFrom }}
                    >
                      {t.guidePrefix} {guide.number}
                    </p>
                    <h2 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
                      {guide.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-2xl">
                      {guide.summary}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground self-start">
                  {guide.steps} {t.stepsLabel}
                </span>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guide.steps_content.map((step, si) => (
                <FadeUp key={step.title} delay={si * 70}>
                  <StepCard
                    n={String(si + 1).padStart(2, "0")}
                    title={step.title}
                    body={step.body}
                    accent={guide.accentFrom}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0b1929] px-8 py-14 text-center shadow-xl">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />

              <div className="relative mx-auto max-w-xl">
                <div className="mb-4 flex justify-center">
                  <CheckCircle2 className="h-10 w-10 text-accent/70" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t.cta.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  {t.cta.desc}
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      {t.cta.btnPrimary}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60"
                  >
                    <Link href="/solutions">{t.cta.btnSecondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
