"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  AlertTriangle,
  WifiOff,
  ShieldAlert,
  BrainCircuit,
  Clock,
  Shield,
  Activity,
  Landmark,
  Zap,
  BookOpen,
  Building2,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

function FadeUp({
  children, delay = 0, className = "",
}: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.06 }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const problemIcons = [WifiOff, ShieldAlert, BrainCircuit, Clock]
const problemStyles = [
  { iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { iconBg: "bg-red-50", iconColor: "text-red-500" },
  { iconBg: "bg-slate-100", iconColor: "text-slate-600" },
  { iconBg: "bg-amber-50", iconColor: "text-amber-600" },
]
const sectorIcons = [Shield, Activity, Landmark, Zap, BookOpen, Building2]
const sectorColors = [
  "text-blue-600", "text-red-500", "text-slate-600",
  "text-amber-600", "text-purple-600", "text-emerald-600",
]

export function TheProblemSection() {
  const { tx } = useLanguage()
  const p = tx.problem

  return (
    <section className="cv-auto bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Eyebrow */}
        <FadeUp>
          <div className="mb-8 sm:mb-10 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
              {p.eyebrow}
            </span>
          </div>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">

          {/* ── Left: problem statement + cards ── */}
          <div>
            <FadeUp delay={60}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {p.heading1}{" "}
                <span className="text-teal-700">{p.headingAccent}</span>{" "}
                {p.heading2}
              </h2>
            </FadeUp>

            <div className="mt-8 space-y-3">
              {p.problems.map((prob, i) => {
                const Icon = problemIcons[i]
                const style = problemStyles[i]
                return (
                  <FadeUp key={prob.title} delay={120 + i * 70}>
                    <div className="flex gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                        <Icon className={`h-5 w-5 ${style.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{prob.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{prob.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>

          {/* ── Right: sector cards ── */}
          <div className="space-y-2.5">
            {/* Section divider */}
            <div className="flex items-center gap-3 py-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {p.whoWeServe}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            {p.sectors.map((s, i) => {
              const SIcon = sectorIcons[i]
              const color = sectorColors[i]
              return (
                <FadeUp key={s.title} delay={80 + i * 55}>
                  <div className="group flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:shadow-md sm:items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <SIcon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{s.orgs}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5 sm:hidden">
                        {s.useCases.map((uc) => (
                          <span key={uc} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
                      {s.useCases.map((uc) => (
                        <span key={uc} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
