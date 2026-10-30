"use client"

import Link from "next/link"
import {
  Activity,
  ArrowRight,
  BarChart3,
  Crosshair,
  FileText,
  Gauge,
  LayoutDashboard,
  Scale,
  Shield,
  Video,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

const capabilityHighlightStyles = [
  { icon: Video,           bg: "#dbeafe", color: "#2563eb" },
  { icon: Activity,        bg: "#dcfce7", color: "#16a34a" },
  { icon: Gauge,           bg: "#fef3c7", color: "#d97706" },
  { icon: Shield,          bg: "#fee2e2", color: "#dc2626" },
]

const coreCapabilityStyles = [
  { icon: Video,           bg: "#dbeafe", color: "#2563eb" },
  { icon: Scale,           bg: "#ede9fe", color: "#7c3aed" },
  { icon: Activity,        bg: "#dcfce7", color: "#16a34a" },
  { icon: FileText,        bg: "#fef3c7", color: "#d97706" },
  { icon: LayoutDashboard, bg: "#cffafe", color: "#0891b2" },
  { icon: BarChart3,       bg: "#ffedd5", color: "#ea580c" },
]

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function BharGatiMockDashboard({ d }: { d: ReturnType<typeof useLanguage>["tx"]["bharGatiPage"]["dashboard"] }) {
  return (
    <div className="w-full max-w-[720px] rounded-2xl border border-border bg-card shadow-xl">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-[#ecfdf3] flex items-center justify-center">
            <Crosshair className="h-5 w-5 text-[#15803d]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">BharGati™ Console</p>
            <p className="text-xs text-muted-foreground">{d.consoleSubtitle}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
            {d.session}
          </span>
          <span className="inline-flex items-center rounded-full bg-[#ecfdf3] px-2.5 py-1 text-xs font-medium text-[#15803d] ring-1 ring-[#bbf7d0]">
            {d.live}
          </span>
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-background overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              {d.cameraFeed}
            </p>
            <p className="text-xs text-muted-foreground">{d.cameraSubtitle}</p>
          </div>
          <div className="relative aspect-[16/10] bg-gradient-to-br from-foreground/5 via-foreground/0 to-foreground/5">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[70%] w-[40%]">
                {[
                  { x: "50%", y: "10%" }, { x: "45%", y: "22%" }, { x: "55%", y: "22%" },
                  { x: "50%", y: "34%" }, { x: "40%", y: "42%" }, { x: "60%", y: "42%" },
                  { x: "38%", y: "58%" }, { x: "62%", y: "58%" }, { x: "45%", y: "70%" },
                  { x: "55%", y: "70%" }, { x: "42%", y: "88%" }, { x: "58%", y: "88%" },
                ].map((p, i) => (
                  <span
                    key={i}
                    className="absolute h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
                    style={{ left: p.x, top: p.y, transform: "translate(-50%,-50%)" }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/70 backdrop-blur px-4 py-3">
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <p className="text-muted-foreground">{d.cadence}</p>
                  <p className="font-semibold text-foreground">176 spm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{d.symmetry}</p>
                  <p className="font-semibold text-foreground">96%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{d.kneeAngle}</p>
                  <p className="font-semibold text-foreground">42°</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              {d.keyMetrics}
            </p>
          </div>
          <div className="p-4 space-y-3">
            {[
              { label: d.postureScore,  value: "8.6/10" },
              { label: d.gaitStability, value: d.gaitStabilityVal },
              { label: d.hipSymmetry,   value: "94%" },
              { label: d.impactLoad,    value: d.impactLoadVal },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
              >
                <span className="text-xs text-muted-foreground">{m.label}</span>
                <span className="text-xs font-semibold text-foreground">{m.value}</span>
              </div>
            ))}
            <div className="mt-4 rounded-lg border border-border bg-card p-3">
              <p className="text-xs font-semibold text-foreground">{d.insight}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {d.insightText}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 rounded-xl border border-border bg-background overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              {d.trend}
            </p>
            <p className="text-xs text-muted-foreground">{d.trendSubtitle}</p>
          </div>
          <div className="p-4">
            <div className="h-28 rounded-lg bg-gradient-to-r from-[#22c55e]/10 via-[#22c55e]/5 to-transparent border border-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-end gap-1.5 px-3 pb-3">
                {[72, 76, 79, 81, 85, 84, 86, 89, 91, 90, 92, 94].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-[#15803d]/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>0:00</span>
              <span>10:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BharGatiContent() {
  const { tx } = useLanguage()
  const t = tx.bharGatiPage

  const capabilityHighlights = capabilityHighlightStyles.map((s, i) => ({
    ...s,
    label: t.whatIs.highlights[i],
  }))

  const coreCapabilities = coreCapabilityStyles.map((s, i) => ({
    ...s,
    title: t.capabilities.items[i].title,
    description: t.capabilities.items[i].description,
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(21,128,61,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#22c55e]/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#10b981]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-lg font-semibold tracking-tight text-foreground">BharGati™</span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t.hero.heading}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {t.hero.p1}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t.hero.p2}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://bhargati.ai/" target="_blank" rel="noopener noreferrer">
                    {t.hero.btnDemo}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{t.hero.btnBrochure}</Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#22c55e]/12 via-[#10b981]/6 to-transparent blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${B}/assets/products/homepage/homepage_Bhargati.png`}
                alt="BharGati™ AI in action - athletic movement analysis"
                className="relative w-full max-w-[560px] rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is BharGati */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.whatIs.heading}
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t.whatIs.p1}</p>
              <p>{t.whatIs.p2}</p>
              <p className="font-medium text-foreground">{t.whatIs.p3}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilityHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: item.bg }}>
                    <item.icon className="h-4 w-4" style={{ color: item.color }} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem BharGati solves */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.problem.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {t.problem.desc}
          </p>
          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {t.problem.items.map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-3 w-3 text-destructive" />
                </span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {t.problem.closing}
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg font-semibold text-foreground">
            {t.problem.closing2}
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base leading-relaxed text-muted-foreground">
            {t.problem.closing3}
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.capabilities.heading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: cap.bg }}>
                  <cap.icon className="h-5 w-5" style={{ color: cap.color }} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference table */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.comparison.heading}
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="bg-muted/50 px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{t.comparison.col1}</h3>
              </div>
              <div className="bg-[#ecfdf3] px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-[#15803d] sm:text-base">{t.comparison.col2}</h3>
              </div>
            </div>
            {t.comparison.rows.map((row, i) => (
              <div key={i} className="grid grid-cols-2 divide-x divide-border border-t border-border">
                <div className="px-3 py-3 text-xs text-muted-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.traditional}
                </div>
                <div className="bg-card/50 px-3 py-3 text-xs text-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.bhargati}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock Dashboard */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <BharGatiMockDashboard d={t.dashboard} />
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.faq.heading}
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <a href="https://bhargati.ai/" target="_blank" rel="noopener noreferrer">
                {t.faq.btn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
