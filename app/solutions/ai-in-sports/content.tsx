"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Activity,
  Video,
  Gauge,
  ShieldAlert,
  Check,
  ChevronDown,
  Users,
  Trophy,
  Target,
  TrendingUp,
  Zap,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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

const transformPoints = [
  { icon: Activity, text: "Real-time motion analysis and pose estimation" },
  { icon: Target, text: "Objective performance assessment with measurable metrics" },
  { icon: ShieldAlert, text: "Predictive injury risk modeling from workload data" },
  { icon: Brain, text: "Tactical and gameplay insights from video feeds" },
  { icon: TrendingUp, text: "Training optimization based on biomechanical indicators" },
]

const capabilities = [
  {
    icon: Activity,
    title: "Biomechanics and Motion Analysis",
    desc: "AI-based analysis of movement patterns to improve technique, balance, and efficiency during training and competition.",
    iconBg: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-100",
  },
  {
    icon: Video,
    title: "Computer Vision Video Intelligence",
    desc: "Automated breakdown of gameplay and training sessions with pose estimation and event detection.",
    iconBg: "bg-blue-50", iconColor: "text-blue-600", border: "border-blue-100",
  },
  {
    icon: Gauge,
    title: "Performance Optimization Modeling",
    desc: "Data-driven insights into endurance, strength metrics, and recovery cycles for peak athletic output.",
    iconBg: "bg-violet-50", iconColor: "text-violet-600", border: "border-violet-100",
  },
  {
    icon: ShieldAlert,
    title: "Injury Risk Prediction",
    desc: "Predictive modeling using workload, fatigue indicators, and biomechanical stress markers to prevent injuries.",
    iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100",
  },
]

const beneficiaries = [
  { icon: Trophy, title: "Professional Teams", text: "Elite sports teams and franchise organizations." },
  { icon: Target, title: "Training Academies", text: "High-performance sports training programs." },
  { icon: Brain, title: "Sports Science Labs", text: "Research institutions and biomechanics labs." },
  { icon: Zap, title: "Athletic Labs", text: "Performance testing and conditioning centers." },
  { icon: Users, title: "Elite Athletes", text: "Individual athletes seeking a competitive edge." },
]

const outcomes = [
  { stat: "↓ Injury", label: "Downtime through early risk detection" },
  { stat: "↑ Training", label: "Efficiency with objective metrics" },
  { stat: "Real-time", label: "Motion and pose analysis" },
  { stat: "Video-only", label: "Input required (no wearables needed)" },
  { stat: "✓", label: "Data-driven competition strategy" },
]

const faqs = [
  {
    q: "How is AI used in sports training?",
    a: "AI analyzes video footage, biomechanical data, and performance metrics to offer clear insights into movement patterns, fatigue levels, and tactical decisions. This helps coaches improve training programs and increase efficiency.",
  },
  {
    q: "Can AI predict sports injuries?",
    a: "AI systems can spot patterns in workload, biomechanics, and fatigue indicators that relate to injury risk. While these systems are not a substitute for medical expertise, they support proactive injury prevention strategies through predictive modeling.",
  },
  {
    q: "Is computer vision accurate for motion tracking in sports?",
    a: "Modern computer vision models can estimate body pose and movement paths accurately, especially when using sport-specific datasets and controlled settings.",
  },
  {
    q: "What sports can benefit from AI performance analytics?",
    a: "AI applications can be used in team sports, individual athletics, racquet sports, endurance events, and strength training environments.",
  },
  {
    q: "Does AI replace coaches or sports analysts?",
    a: "AI does not replace coaches or analysts. Instead, it improves their decision-making by providing data-driven insights that enhance human expertise. Coaches keep strategic control while using AI to improve technique, manage workloads, and prepare tactics.",
  },
  {
    q: "What data does BharGati™ need to analyze performance?",
    a: "BharGati™ needs only video footage of the athlete to work. This allows for performance and biomechanics analysis without requiring extra wearable sensors or tracking devices, making it practical for field and field-level deployment.",
  },
  {
    q: "Can AI provide real-time feedback during training?",
    a: "Yes. With the right infrastructure and optimized models, AI systems can analyze motion or performance data almost in real-time, allowing for immediate corrective feedback during practice sessions.",
  },
]

export function AiInSportsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Applied AI Solutions
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                AI in{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Sports Performance
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Data-driven intelligence for improving performance, analyzing movement, and preventing injuries.
                AI systems for biomechanics modeling, video analysis, and predictive analytics.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-primary text-white shadow-lg hover:bg-primary/90">
                  <Link href="/contact">
                    Discuss This Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How AI Transforms Sports */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">The Opportunity</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  How AI is transforming sports performance
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Modern sports demand precision. Small performance improvements, injury prevention,
                  and better recovery now depend more on objective data than intuition alone.
                  By combining computer vision and machine learning, AI systems provide insights
                  beyond what traditional analytics can deliver.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={120}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What AI enables
                </p>
                <ul className="flex flex-col gap-4">
                  {transformPoints.map((p) => (
                    <li key={p.text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                      </div>
                      <span className="text-sm leading-relaxed text-muted-foreground">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Approach</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Core capabilities in sports AI
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                AI systems designed and validated for real sports performance environments.
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 100}>
                <div className={`group relative h-full overflow-hidden rounded-2xl border ${cap.border} bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${cap.iconBg}`}>
                    <cap.icon className={`h-5 w-5 ${cap.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who We Serve</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Who benefits from AI in sports
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                From elite professional teams to individual athletes, AI-powered insights raise performance at every level.
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beneficiaries.map((b, i) => (
              <FadeUp key={b.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500/60 via-cyan-500/60 to-transparent" />
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <b.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </FadeUp>
            ))}
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
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Results</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What teams and athletes achieve
              </h2>
            </div>
          </FadeUp>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {outcomes.map((o, i) => (
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
                FAQ
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-border bg-card px-7 py-2 shadow-sm">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
