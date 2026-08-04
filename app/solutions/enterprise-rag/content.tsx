"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  Search,
  ShieldCheck,
  Users,
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const painPoints = [
  {
    icon: AlertTriangle,
    title: "AI Hallucinations",
    desc: "Traditional language models can produce plausible but incorrect responses. This is dangerous in regulated industries where accuracy is non-negotiable.",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    border: "border-red-100",
  },
  {
    icon: FolderOpen,
    title: "Knowledge Silos",
    desc: "Important documents, policies, and technical manuals are often scattered across disconnected systems, making unified AI access impossible.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: Scale,
    title: "Compliance & Governance",
    desc: "Regulated sectors require traceable AI outputs and fine-grained access controls. Standard LLMs offer no built-in compliance layer.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
  },
]

const architecture = [
  {
    icon: Database,
    title: "Secure Data Ingestion",
    desc: "Integrates with structured and unstructured sources: document repositories, internal knowledge bases, policy databases, and technical manuals.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Search,
    title: "Semantic Retrieval Layer",
    desc: "Vector-based indexing and contextual search mechanisms ensure precise, meaning-aware information matching, not just keyword lookup.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: ShieldCheck,
    title: "Governed Response Generation",
    desc: "Language models generate responses only from retrieved content, grounding every answer in verified organizational knowledge.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "Users access only the data permitted by organizational policies. Sensitive knowledge stays within the right teams and departments.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: FileText,
    title: "Audit Logging & Traceability",
    desc: "Every response is traceable to its source documents, creating a full accountability trail for compliance and governance reviews.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
]

const deploymentModels = [
  {
    icon: Server,
    title: "On-Premise Deployment",
    desc: "Fully controlled infrastructure within organizational boundaries. Zero cloud dependency, ideal for air-gapped and defense environments.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: "#7c3aed",
  },
  {
    icon: GitMerge,
    title: "Hybrid Architecture",
    desc: "Sensitive data stays on-premises while non-sensitive processing selectively uses cloud resources for scale and flexibility.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    accent: "#06b6d4",
  },
  {
    icon: Cloud,
    title: "Private Cloud Environments",
    desc: "Secure virtualized infrastructure with all the isolation benefits of on-premise and the operational convenience of cloud.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "#059669",
  },
]

const useCases = [
  {
    icon: Scale,
    title: "Legal & Compliance Teams",
    desc: "Instant access to policies, regulatory documents, and audit-ready references, with citations rather than summaries.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Internal Knowledge Assistants",
    desc: "AI-powered support for employees seeking technical or operational information from internal documentation.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Landmark,
    title: "Governance & Public Sector",
    desc: "Secure document analysis and policy advisory support with traceable, source-backed responses.",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: TrendingUp,
    title: "Strategic & Research Units",
    desc: "Context-aware document synthesis and knowledge mapping across large, multi-source research repositories.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
]

const outcomes = [
  { stat: "↓ 70%", label: "Document search time" },
  { stat: "↑ High", label: "Decision accuracy" },
  { stat: "↓ Low", label: "Compliance risk" },
  { stat: "↑ Full", label: "Knowledge accessibility" },
  { stat: "✓", label: "Controlled AI within security frameworks" },
]

const faqs = [
  {
    q: "How does RAG reduce AI hallucinations?",
    a: "RAG systems retrieve relevant data before generating responses. This ensures outputs are based on verified sources rather than the model's pre-trained memory alone, grounding every answer in your organization's actual documents.",
  },
  {
    q: "Can Enterprise RAG be deployed on-premise?",
    a: "Yes. RAG architectures can be fully deployed in on-premise or air-gapped environments, depending on infrastructure requirements. icarKno™ specializes in exactly this kind of sovereign deployment.",
  },
  {
    q: "Is Enterprise RAG secure?",
    a: "When implemented correctly with role-based access control, encryption, and audit logging, RAG systems meet enterprise and government security standards. All responses are traceable to source documents.",
  },
  {
    q: "What types of data can be used in a RAG system?",
    a: "Structured databases, PDFs, knowledge bases, internal documents, policy repositories, and more can all be integrated. icarKno™ supports multimodal ingestion including scanned documents and audio transcripts.",
  },
  {
    q: "How is Enterprise RAG different from a chatbot?",
    a: "Traditional chatbots rely on predefined scripts or static models. Enterprise RAG systems dynamically retrieve relevant organizational data before generating contextual, source-cited responses, making them far more accurate and auditable.",
  },
]

// ─── Main Export ──────────────────────────────────────────────────────────────
export function EnterpriseRAGContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0b1929] min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        {/* Dot-grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Enterprise Solutions
              </div>
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Enterprise{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
                  RAG Systems
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
                Governed AI responses powered by your organization's trusted
                data. We design and deploy enterprise-grade
                Retrieval-Augmented Generation systems that eliminate AI
                hallucinations, improve knowledge access, and ensure
                compliance-ready AI use in secure environments.
              </p>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-white shadow-lg hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30"
                >
                  <Link href="/solutions">View All Solutions</Link>
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
                  The Technology
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  What is Retrieval-Augmented Generation?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  RAG is an AI architecture with two core stages working
                  in sequence. Unlike standard AI that depends solely on
                  pre-trained knowledge, RAG provides responses that are
                  relevant, current, and linked to reliable sources.
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
                        Information Retrieval
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Relevant content is fetched from your trusted enterprise
                        data sources, including documents, knowledge bases, and policy
                        repositories, using semantic vector search.
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
                        Response Generation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        A language model synthesizes answers using only the
                        retrieved information, with citations, so every
                        response is grounded, accurate, and traceable.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              <FadeUp delay={260}>
                <div className="mt-8 rounded-xl border border-border bg-secondary/30 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                    For businesses, this means
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Reduced chances of false information",
                      "Better factual accuracy with source citations",
                      "Managed, role-based knowledge access",
                      "Compliance-ready, auditable AI outputs",
                    ].map((item) => (
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
                  How RAG Works
                </p>
                <div className="flex flex-col items-center gap-3">
                  {/* Step 1 */}
                  <div className="w-full rounded-xl border border-violet-200 bg-violet-50 px-5 py-4 text-center">
                    <Database className="mx-auto mb-1.5 h-5 w-5 text-violet-600" />
                    <p className="text-sm font-semibold text-violet-900">
                      Enterprise Data Sources
                    </p>
                    <p className="mt-0.5 text-xs text-violet-600">
                      PDFs, manuals, policies, knowledge bases
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Semantic Search
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Step 2 */}
                  <div className="w-full rounded-xl border border-cyan-200 bg-cyan-50 px-5 py-4 text-center">
                    <Search className="mx-auto mb-1.5 h-5 w-5 text-cyan-600" />
                    <p className="text-sm font-semibold text-cyan-900">
                      Retrieval Layer
                    </p>
                    <p className="mt-0.5 text-xs text-cyan-600">
                      Vector indexing · Contextual matching
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Retrieved Context
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Step 3 */}
                  <div className="w-full rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center">
                    <Layers className="mx-auto mb-1.5 h-5 w-5 text-emerald-600" />
                    <p className="text-sm font-semibold text-emerald-900">
                      Language Model
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-600">
                      On-premise LLM · Governed generation
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="h-6 w-px bg-border" />
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Cited Answer
                    </span>
                    <div className="h-6 w-px bg-border" />
                  </div>

                  {/* Output */}
                  <div className="w-full rounded-xl border border-border bg-secondary/60 px-5 py-4 text-center">
                    <ShieldCheck className="mx-auto mb-1.5 h-5 w-5 text-foreground" />
                    <p className="text-sm font-semibold text-foreground">
                      Verified, Cited Response
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Traceable · Accurate · Compliant
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
                The Problem
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why enterprises need RAG
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                As organizations adopt AI assistants and decision-support tools,
                critical risks emerge that standard LLMs cannot address.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-3">
            {painPoints.map((p, i) => (
              <FadeUp key={p.title} delay={i * 120}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border ${p.border} bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                >
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${p.iconBg}`}
                  >
                    <p.icon className={`h-5 w-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={400}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Enterprise RAG systems tackle these issues by grounding AI
              responses in{" "}
              <span className="font-medium text-foreground">
                verified, controlled knowledge repositories.
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
                Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Enterprise RAG architecture
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Built for security, scalability, and performance across the full
                knowledge lifecycle.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {architecture.map((item, i) => (
              <FadeUp key={item.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  {/* Gradient top stripe */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/60 via-accent/60 to-transparent" />
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}
                  >
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deployment Models ─────────────────────────────────────────────── */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Deployment
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Flexible deployment models
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                We support multiple enterprise configurations based on your
                security posture and operational requirements.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-3">
            {deploymentModels.map((model, i) => (
              <FadeUp key={model.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${model.accent}, transparent)`,
                    }}
                  />
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${model.iconBg}`}
                  >
                    <model.icon className={`h-6 w-6 ${model.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {model.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {model.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Applications
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Enterprise use cases
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                RAG systems are already transforming how organizations manage and
                act on institutional knowledge.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc, i) => (
              <FadeUp key={uc.title} delay={i * 100}>
                <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${uc.iconBg}`}
                  >
                    <uc.icon className={`h-5 w-5 ${uc.iconColor}`} />
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0b1929] py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Results
              </p>
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
                  <p className="mt-2 text-xs leading-snug text-slate-400">
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
