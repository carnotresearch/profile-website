"use client"

import Link from "next/link"
import {
  ArrowRight,
  Check,
  X,
  Server,
  Languages,
  FileText,
  Layers,
  Workflow,
  Shield,
  Megaphone,
  Plane,
  Scale,
  Building2,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IcarKnoClientContent } from "./icarkno-client"
import { VideoWithSkeleton } from "./video-skeleton"
import { useLanguage } from "@/lib/language-context"

const capabilityIcons = [Server, Languages, FileText, Layers, Workflow, Shield]
const capabilityStyles = [
  { bg: "#dcfce7", color: "#16a34a" },
  { bg: "#dbeafe", color: "#2563eb" },
  { bg: "#ede9fe", color: "#7c3aed" },
  { bg: "#fef3c7", color: "#d97706" },
  { bg: "#cffafe", color: "#0891b2" },
  { bg: "#fee2e2", color: "#dc2626" },
]

const useCaseIcons = [Megaphone, Shield, Plane, Scale, Building2, Database]
const useCaseStyles = [
  { bg: "#ffedd5", color: "#ea580c", video: "Disaster Management.mp4" },
  { bg: "#fee2e2", color: "#dc2626", video: "Defense & Field Intelligence.mp4" },
  { bg: "#dbeafe", color: "#2563eb", video: "Aviation & Flight Operations.mp4" },
  { bg: "#ede9fe", color: "#7c3aed", video: "Legal & Policy Analysis.mp4" },
  { bg: "#dcfce7", color: "#16a34a", video: "Government Field Operations.mp4" },
  { bg: "#cffafe", color: "#0891b2", video: "Enterprise Knowledge Systems.mp4" },
]

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function IcarKnoContent() {
  const { tx } = useLanguage()
  const t = tx.icarKnoPage

  const capabilities = t.capabilities.items.map((item, i) => ({
    ...item,
    icon: capabilityIcons[i],
    ...capabilityStyles[i],
  }))

  const useCases = t.useCases.items.map((item, i) => ({
    ...item,
    icon: useCaseIcons[i],
    ...useCaseStyles[i],
  }))

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#3b82f6]/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  icarKno™
                </span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-[2.75rem]">
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
                  <a href="https://iknow.carnotresearch.com/" target="_blank" rel="noopener noreferrer">
                    {t.hero.btn}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#2563eb]/10 via-[#06b6d4]/5 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <IcarKnoClientContent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is icarKno ──────────────────────────────────────────────────── */}
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
              {t.whatIs.features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#dbeafe]">
                    <Check className="h-4 w-4 text-[#2563eb]" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Problem icarKno Solves ───────────────────────────────────────── */}
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
              <li
                key={problem}
                className="flex items-start gap-3 text-muted-foreground"
              >
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
          <p className="mx-auto mt-4 text-center text-lg font-semibold text-foreground">
            {t.problem.closing2}
          </p>
        </div>
      </section>

      {/* ─── Core Capabilities ────────────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.capabilities.heading}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: cap.bg }}>
                  <cap.icon className="h-5 w-5" style={{ color: cap.color }} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Use Cases ────────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.useCases.heading}
          </h2>
          <div className="mt-12 space-y-16">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: uc.bg }}>
                    <uc.icon className="h-6 w-6" style={{ color: uc.color }} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{uc.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{uc.description}</p>
                </div>
                <div
                  className={`flex items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/50 ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <VideoWithSkeleton
                    src={`${B}/assets/products/icarkno/use-cases/${encodeURIComponent(uc.video)}`}
                    ariaLabel={`${uc.title} demo`}
                    className="h-auto w-full rounded-xl object-cover"
                    skeletonClassName="w-full h-64"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The icarKno Difference ───────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.comparison.heading}
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="bg-muted/50 px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {t.comparison.col1}
                </h3>
              </div>
              <div className="bg-[#eff6ff] px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-[#1d4ed8] sm:text-base">{t.comparison.col2}</h3>
              </div>
            </div>
            {t.comparison.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-border border-t border-border"
              >
                <div className="px-3 py-3 text-xs text-muted-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.cloud}
                </div>
                <div className="bg-card/50 px-3 py-3 text-xs text-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.icarkno}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.faq.heading}
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {t.faq.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.cta.desc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t.cta.btn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
