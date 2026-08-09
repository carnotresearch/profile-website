"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  ArrowRight, ArrowUpRight, Shield,
  Layers, FileText, MessageSquare, Trophy, Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { IcarKnoSlideshow } from "@/components/icarkno-slideshow"

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

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const icarKnoFeatures = [
  { icon: Layers,        text: "Multimodal ingestion",                    bg: "#fef3c7", color: "#d97706" }, // amber
  { icon: FileText,      text: "RAG with verifiable source citations",    bg: "#ede9fe", color: "#7c3aed" }, // violet
  { icon: Shield,        text: "Fully on-premise, zero cloud dependency", bg: "#dcfce7", color: "#16a34a" }, // green
  { icon: MessageSquare, text: "Agentic workflows & conversational AI",   bg: "#fee2e2", color: "#f43f5e" }, // rose pastel
]

// ── icarKno spotlight ─────────────────────────────────────────────────────────
export function IcarKnoShowcase() {
  return (
    <section className="cv-auto relative overflow-hidden bg-slate-50 py-14 lg:py-20">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <FadeUp className="mb-8 text-center">
          <h2 className="inline-flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <Sparkles className="h-7 w-7 text-blue-600" />
              Meet icarKno™
            </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            icarKno™ facilitates institutional Knowledge to be leveraged while ensuring privacy, security and reliability.
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="overflow-hidden rounded-2xl bg-white" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid lg:grid-cols-[1fr_380px]">

              {/* ── Left: content ── */}
              <div className="flex flex-col justify-center px-8 py-8 lg:px-10 lg:py-10">

                {/* Eyebrow */}
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  Featured Product
                </p>

                {/* Heading */}
                <h3 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl">
                  icarKno™
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-base font-medium text-gray-400">
                  Your institutional knowledge: searchable, citable, secure.
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Deploy a conversational AI that knows everything in your organization.
                  Policies, reports, manuals, scanned documents. Ask in plain language,
                  get answers with exact source citations. Runs 100% on your own servers,
                  with no internet required and no data leaving your environment.
                </p>

                {/* Feature list — icon only, no chip backgrounds */}
                <ul className="mt-5 space-y-2.5">
                  {icarKnoFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <f.icon className="h-4 w-4 shrink-0" style={{ color: f.color }} />
                      <span className="text-sm text-gray-700">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button size="default" asChild className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/products/icarkno">
                      Explore icarKno™ <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Link href="/contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">
                    Contact us <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* ── Right: image panel ── */}
              <div className="relative hidden lg:block bg-gray-50">
                {/* Hairline divider */}
                <div className="absolute inset-y-6 left-0 w-px bg-gray-100" />
                <IcarKnoSlideshow className="absolute inset-0 h-full w-full rounded-r-2xl" interval={3500} />
              </div>

              {/* Mobile image */}
              <div className="relative block w-full aspect-[3/4] bg-gray-50 lg:hidden">
                <IcarKnoSlideshow className="absolute inset-0 h-full w-full" interval={3500} />
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}

// ── More from icarKno™ (BharGati + SAATHI) ─────────────────────────────
const imageProducts = [
  {
    name: "SAATHI",
    nameColor: "#0f172a",
    taglineColor: "#64748b",
    tagline: "Delhi Public Transit AI",
    desc: "Award-winning multilingual AI assistant for Delhi commuters. Plan metro and bus journeys, check fares and timings, and get emergency help by voice or text in 22+ languages.",
    bullets: [
      "Metro, bus & multi-modal journey planning",
      "22+ languages including Indic languages",
      "JICA–BCG–FITT award winner 2025",
    ],
    accentFrom: "#0f172a",
    accentTo: "#1e293b",
    ctaColor: "#2563eb",
    image: "/assets/products/homepage/homepage_Saathi.png",
    href: "/products/saathi",
    award: true,
  },
  {
    name: "BharGati™ AI",
    nameColor: "#0f172a",
    taglineColor: "#64748b",
    tagline: "Sports & Performance AI",
    desc: "AI-powered biomechanical movement analysis from standard video. No wearables or lab setup needed. Measures joint angles, gait, posture, and performance metrics for coaches, athletes, and rehabilitation teams.",
    bullets: [
      "Vision-based pose & gait analysis",
      "Biomechanical metrics & coaching insights",
      "Sports, rehabilitation & elite training",
    ],
    accentFrom: "#0f172a",
    accentTo: "#1e293b",
    ctaColor: "#2563eb",
    image: "/assets/products/homepage/homepage_Bhargati.png",
    href: "/products/bhargati",
    award: false,
  },
]

export function MoreProducts() {
  return (
    <section className="cv-auto bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Divider header */}
        <FadeUp>
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Our other products
              </p>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
        </FadeUp>

        {/* Product cards */}
        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {imageProducts.map((p, i) => (
            <FadeUp key={p.name} delay={i * 100} className="flex">
              <Link
                href={p.href}
                className="group flex flex-col w-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className="relative flex h-52 items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.accentFrom}15 0%, ${p.accentTo}0a 100%)` }}
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] z-10"
                    style={{ background: `linear-gradient(90deg, ${p.accentFrom}, ${p.accentTo})` }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${B}${p.image}`} alt={p.name} className="h-full w-full object-cover" />
                  {p.award && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 ring-1 ring-slate-200 shadow-sm">
                      <Trophy className="h-3 w-3" /> Award Winner
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 px-6 py-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-2xl font-extrabold tracking-tight" style={{ color: p.nameColor }}>{p.name}</p>
                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider" style={{ color: p.taglineColor }}>{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/30 mt-1 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accentFrom }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Explore product</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: p.ctaColor }} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* GeM callout */}
        <FadeUp delay={220}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-secondary/40 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-foreground">Also listed on GeM (Government e-Marketplace)</p>
                <p className="text-xs text-muted-foreground">
                  Meeting Summarizer · On-Premise Knowledge Agent · Multilingual Chatbot · GenAI Conversational Agent
                </p>
              </div>
            </div>
            <Link href="/products" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
