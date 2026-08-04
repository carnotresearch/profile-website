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

const drivers = [
  {
    icon: ShieldCheck,
    title: "Data Sovereignty Requirements",
    desc: "Sensitive information must stay within controlled infrastructure with no exposure to third-party systems.",
    iconBg: "bg-violet-50", iconColor: "text-violet-600", border: "border-violet-100",
  },
  {
    icon: Scale,
    title: "Regulatory & Compliance Mandates",
    desc: "Industries like defense, finance, and government need strict access rules and comprehensive audit trails.",
    iconBg: "bg-blue-50", iconColor: "text-blue-600", border: "border-blue-100",
  },
  {
    icon: WifiOff,
    title: "Air-Gapped Environments",
    desc: "Some deployments cannot depend on internet connectivity due to operational or security requirements.",
    iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100",
  },
  {
    icon: Zap,
    title: "Latency & Reliability",
    desc: "Real-time systems need low-latency AI inference without depending on cloud availability or bandwidth.",
    iconBg: "bg-emerald-50", iconColor: "text-emerald-600", border: "border-emerald-100",
  },
  {
    icon: SlidersHorizontal,
    title: "Infrastructure Control",
    desc: "Organizations need full control over model updates, access policies, and system configuration.",
    iconBg: "bg-cyan-50", iconColor: "text-cyan-600", border: "border-cyan-100",
  },
]

const capabilities = [
  {
    icon: Cpu,
    title: "Offline LLM Deployment",
    desc: "Deploy and run large language models entirely within internal systems, without internet access.",
    iconBg: "bg-violet-50", iconColor: "text-violet-600",
  },
  {
    icon: Layers,
    title: "Multimodal AI Systems",
    desc: "Process text, voice, and visual input in fully secure, on-premise settings.",
    iconBg: "bg-cyan-50", iconColor: "text-cyan-600",
  },
  {
    icon: Boxes,
    title: "Containerized Architecture",
    desc: "Secure deployment with containerization for isolation, portability, and reproducibility.",
    iconBg: "bg-emerald-50", iconColor: "text-emerald-600",
  },
  {
    icon: Wrench,
    title: "Custom Model Fine-Tuning",
    desc: "AI models tailored to fit specific operational workflows, domain vocabulary, and compliance needs.",
    iconBg: "bg-orange-50", iconColor: "text-orange-600",
  },
  {
    icon: Workflow,
    title: "Scalable Infrastructure",
    desc: "Support from edge devices to enterprise servers and clustered environments.",
    iconBg: "bg-indigo-50", iconColor: "text-indigo-600",
  },
]

const deploymentModels = [
  {
    icon: Server,
    title: "Fully Air-Gapped Deployment",
    desc: "AI systems operate completely offline within isolated networks. No external connectivity required.",
    iconBg: "bg-violet-50", iconColor: "text-violet-600", accent: "#7c3aed",
  },
  {
    icon: GitMerge,
    title: "Private Data Center",
    desc: "Deployed as part of the existing enterprise infrastructure for seamless integration.",
    iconBg: "bg-cyan-50", iconColor: "text-cyan-600", accent: "#06b6d4",
  },
  {
    icon: Cloud,
    title: "Edge AI Deployment",
    desc: "Localized AI processing for real-time settings with constrained compute and connectivity.",
    iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accent: "#059669",
  },
]

const environments = [
  { icon: Landmark, title: "Government", text: "Ministries and public sector agencies." },
  { icon: Shield, title: "Defense", text: "Defense and strategic organizations." },
  { icon: PiggyBank, title: "Finance", text: "Financial institutions with regulated data." },
  { icon: HeartPulse, title: "Healthcare", text: "Healthcare systems managing sensitive records." },
  { icon: Factory, title: "Critical Infrastructure", text: "Infrastructure operators requiring isolation." },
]

const applications = [
  { icon: FileText, text: "Secure document intelligence and search" },
  { icon: Search, text: "Sensitive data analysis and classification" },
  { icon: MessagesSquare, text: "Offline conversational AI systems" },
  { icon: Workflow, text: "Mission-critical workflow automation" },
  { icon: ShieldCheck, text: "Internal decision-support systems" },
]

const outcomes = [
  { stat: "100%", label: "Data stays on-premise" },
  { stat: "Zero", label: "Cloud dependency" },
  { stat: "Air-gap", label: "Compatible deployments" },
  { stat: "Full", label: "Regulatory compliance" },
  { stat: "✓", label: "Controlled AI within security frameworks" },
]

const faqs = [
  {
    q: "Can AI function completely without internet connectivity?",
    a: "Yes. With the right setup, large language models and multimodal AI systems can operate entirely offline. By hosting models, data pipelines, and retrieval systems in controlled environments, organizations can enable full AI functionality without external network access.",
  },
  {
    q: "What hardware is needed for on-prem AI deployment?",
    a: "Hardware needs depend on the model size, inference load, and operational complexity. Deployments can range from high-performance GPU servers in enterprise data centers to optimized edge devices for local processing.",
  },
  {
    q: "Is on-prem AI more secure than cloud AI?",
    a: "On-premise AI offers more control over infrastructure, access policies, and data management. By keeping data within internal networks and implementing strict role-based access controls, organizations can lower exposure risks and better meet regulatory requirements.",
  },
  {
    q: "Can on-prem AI scale across multiple departments?",
    a: "Yes. On-prem AI systems can be set up for distributed deployment across departments, facilities, or regional offices with centralized governance and security standards.",
  },
  {
    q: "How does on-prem AI ensure compliance?",
    a: "Compliance is upheld through role-based access control, audit logging, encrypted data pipelines, and network isolation. These measures help organizations meet regulatory requirements while maintaining transparency in AI operations.",
  },
]

export function OnPremAIContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b1929] min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Secure Deployment
              </div>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
                On-Premise &amp;{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                  Offline AI
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
                Fully sovereign AI systems for data-sensitive, regulated, and mission-critical environments.
                Zero cloud dependency, complete infrastructure control, and compliance-ready by design.
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
                <Button
                  variant="outline" size="lg" asChild
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
                >
                  <Link href="/solutions">View All Solutions</Link>
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
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">The Problem</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why organizations move to on-premise AI
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                As AI adoption grows, cloud-based systems create critical gaps in security, compliance, and control.
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map((d, i) => (
              <FadeUp key={d.title} delay={i * 100}>
                <div className={`group relative h-full overflow-hidden rounded-2xl border ${d.border} bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}>
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${d.iconBg}`}>
                    <d.icon className={`h-5 w-5 ${d.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={600}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              On-premise AI deployment keeps your intelligence within your perimeter,{" "}
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
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our Approach</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                On-premise AI capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Secure, modular AI infrastructure that works reliably without outside connectivity or support.
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeUp key={c.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${c.iconBg}`}>
                    <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Deployment</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Flexible deployment models
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                We support multiple infrastructure configurations based on your security posture and operational needs.
              </p>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {deploymentModels.map((m, i) => (
              <FadeUp key={m.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{ background: `linear-gradient(to right, ${m.accent}, transparent)` }}
                  />
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${m.iconBg}`}>
                    <m.icon className={`h-6 w-6 ${m.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Environments + Applications */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <FadeUp>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Who We Serve</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Deployment environments
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our on-premise AI solutions are purpose-built for regulated and high-security sectors.
                  Each deployment is customized to meet operational requirements.
                </p>
              </FadeUp>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {environments.map((e, i) => (
                  <FadeUp key={e.title} delay={i * 80}>
                    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                        <e.icon className="h-5 w-5 text-violet-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{e.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{e.text}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            <FadeUp delay={120}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Applications</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Real-world use cases
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  On-premise AI systems are already supporting mission-critical workflows across sectors.
                </p>
                <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <ul className="flex flex-col gap-4">
                    {applications.map((a) => (
                      <li key={a.text} className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                          <a.icon className="h-4 w-4 text-cyan-600" />
                        </div>
                        <span className="text-sm leading-relaxed text-muted-foreground">{a.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative overflow-hidden bg-[#0b1929] py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Results</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What organizations achieve
              </h2>
            </div>
          </FadeUp>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {outcomes.map((o, i) => (
              <FadeUp key={o.label} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">{o.stat}</p>
                  <p className="mt-2 text-xs leading-snug text-slate-400">{o.label}</p>
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
