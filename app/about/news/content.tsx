"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Calendar, Trophy, Newspaper, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import type { ElementType } from "react"

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
      { threshold: 0.1 }
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

type ItemMeta = { icon: ElementType; iconBg: string; iconColor: string }

const itemMeta: ItemMeta[] = [
  { icon: Trophy,    iconBg: "bg-amber-50",  iconColor: "text-amber-600" },
  { icon: Newspaper, iconBg: "bg-blue-50",   iconColor: "text-blue-600"  },
  { icon: Newspaper, iconBg: "bg-green-50",  iconColor: "text-green-600" },
]

const itemOrg = [
  "JICA · Boston Consulting Group · FITT IIT Delhi",
  "Certificate No: ECI/2411/0710",
  "Certificate No: IN241123021",
]

const itemDate = ["February 2025", "January 2025", "December 2024"]

export function NewsContent() {
  const { tx } = useLanguage()
  const n = tx.newsPage

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {n.hero.badge}
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                {n.hero.heading}
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {n.hero.desc}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── News Timeline ────────────────────────────────────────── */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                {n.timeline.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {n.timeline.heading}
              </h2>
            </div>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-8">
            {n.items.map((item, i) => {
              const m = itemMeta[i]
              const Icon = m.icon
              return (
                <FadeUp key={i} delay={i * 100}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/25">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/70 to-primary/0" />

                    <div className="flex items-start gap-6">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${m.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className={`h-6 w-6 ${m.iconColor}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {item.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {itemDate[i]}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                          {item.description}
                        </p>

                        <p className="text-xs font-medium text-muted-foreground">
                          {itemOrg[i]}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Press & Media ────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                {n.press.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {n.press.desc}
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="/contact">
                    {n.press.btn}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
