"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowUpRight, Brain, Route, MessageCircle, Trophy } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.08 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const icarKnoFeatures = [
  "Multimodal data ingestion",
  "LLM-based RAG with verifiable source citations",
  "Conversational AI with agentic workflows",
  "Fully on-premise, zero cloud dependency",
]

export function ProductsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a57eb]">
              Engineered Intelligence Platforms
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Products built for production
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Enterprise-grade AI systems powering intelligent decision-making across
              government and industry.
            </p>
          </div>
        </FadeUp>

        {/* Featured icarKno + side products */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* icarKno — featured, spans 2 cols */}
          <FadeUp delay={0} className="lg:col-span-2 h-full">
            <Link
              href="/products#icarkno"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#1d4ed8]/30"
            >
              {/* Blue gradient stripe */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#1d4ed8] via-[#1a57eb] to-[#1d4ed8]/0" />

              <div className="flex flex-1 flex-col p-8 lg:p-10">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e0f2fe] transition-transform duration-300 group-hover:scale-110">
                      <Brain className="h-7 w-7 text-[#1d4ed8]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">icarKno™</h3>
                      <p className="text-sm font-medium text-[#1d4ed8]">Enterprise Knowledge GenAI Platform</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#1a57eb] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Description */}
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Context-aware conversational AI with multimodal data ingestion,
                  LLM-based RAG with verifiable citations, and enterprise knowledge
                  management, deployed fully on-premise with zero cloud dependency.
                </p>

                {/* Feature checklist */}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {icarKnoFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1a57eb]">
                  Explore icarKno™
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Right column: BharGati + SAATHI stacked */}
          <div className="flex flex-col gap-6">

            {/* BharGati AI */}
            <FadeUp delay={120} className="flex-1">
              <Link
                href="/products/bhargati"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#15803d]/30"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#15803d] to-[#15803d]/0" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3] transition-transform duration-300 group-hover:scale-110">
                      <Route className="h-6 w-6 text-[#15803d]" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#15803d] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">BharGati™ AI</h3>
                  <p className="text-xs font-medium text-[#15803d]">Multimodal Transport Analytics AI</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    AI-driven movement analysis and transport analytics combining computer
                    vision, NLP, and multimodal data fusion.
                  </p>
                </div>
              </Link>
            </FadeUp>

            {/* SAATHI */}
            <FadeUp delay={220} className="flex-1">
              <Link
                href="/products#saathi"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#c11574]/30"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#c11574] to-[#c11574]/0" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3ff] transition-transform duration-300 group-hover:scale-110">
                        <MessageCircle className="h-6 w-6 text-[#c11574]" />
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">
                        <Trophy className="h-3 w-3" /> Award Winner
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#c11574] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">SAATHI</h3>
                  <p className="text-xs font-medium text-[#c11574]">Conversational AI Assistant</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Hyper-personalized multilingual AI agent. Winner of the Transport Stack
                    Open Innovation Challenge by JICA & BCG.
                  </p>
                </div>
              </Link>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  )
}
