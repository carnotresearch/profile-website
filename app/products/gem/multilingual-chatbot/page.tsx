import type { Metadata } from "next"
import Link from "next/link"
import { Globe, Download, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Multilingual AI Chatbot | GeM | icarKno™",
  description:
    "Enterprise Conversational AI Platform with 24/7 support in 15+ languages, 93.2% accuracy. For Banking, Finance & Government. Listed on GeM.",
  openGraph: {
    title: "Multilingual AI Chatbot | Enterprise Conversational AI | icarKno™",
    description: "24/7 enterprise AI chatbot in 15+ languages, 93.2% accuracy. For banking, finance, and government. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/multilingual-chatbot",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/multilingual-chatbot" },
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const features = [
  "24/7 Automated Support: dramatically cuts call centre volume",
  "Multilingual NLP Engine: 15+ languages including Hindi, Telugu, Arabic, French",
  "Advanced Knowledge Base: 1,247+ policy documents, 5,832+ Q&A pairs",
  "Analytics Dashboard: intent trends, satisfaction scores, language usage",
  "Voice Integration: Speech-to-Text and Text-to-Speech (Google Cloud Speech API, Neural TTS)",
  "Security: SOC 2 Type II, GDPR compliance, HTTPS/TLS, RBAC",
  "Integrates with Salesforce, SAP, Oracle, Microsoft Dynamics, government portals",
]

const architecture = [
  { title: "Multilingual NLP Engine", desc: "State-of-the-art language models for accurate intent detection and entity extraction across 15+ languages." },
  { title: "Knowledge Base & Memory", desc: "1,247+ policy documents and 5,832+ Q&A pairs indexed for instant, accurate responses." },
  { title: "Secure API Connectors", desc: "REST APIs, webhooks, and function calls to connect with ERP, CRM, banking systems, and government databases." },
  { title: "Analytics & Monitoring", desc: "Real-time dashboards tracking conversation volume, satisfaction, workflow status, and language usage." },
]

const sectors = [
  {
    title: "Banking & Financial Services (BFSI)",
    desc: "Automates balance inquiries, transaction history, fund transfers, and fraud alerts. Financial institutions report 80% automation of Tier-1 questions and 30% cost savings.",
  },
  {
    title: "Ministry of Corporate Affairs & Government Services",
    desc: "Unified communication channel for corporate stakeholders, answering compliance queries and filing procedures in the user's preferred language and improving regulatory compliance.",
  },
]

export default function MultilingualChatbotPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-background min-h-hero-page flex items-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
          <Link href="/products" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-xs font-semibold text-foreground">🏛️ Listed on GeM</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fef3ff]">
                <Globe className="h-6 w-6 text-[#c11574]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Multilingual AI Chatbot
              </h1>
              <p className="mt-2 text-base font-medium text-muted-foreground">Enterprise Conversational AI Platform</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Handles 1,317+ conversations per day across 15+ languages. Designed for banking, financial services,
                and government with seamless multilingual support and secure enterprise system integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`${B}/gem/multilingual-chatbot-brochure.pdf`}
                  download="Multilingual_AI_Chatbot_Brochure.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-all"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </div>

            {/* Right: stats + features card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-500/10 via-purple-400/5 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { value: "93.2%", label: "Accuracy" },
                    { value: "15+", label: "Languages" },
                    { value: "30%", label: "Cost Savings" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-background p-3 text-center">
                      <p className="text-xl font-bold text-foreground">{s.value}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Capabilities</h3>
                <ul className="flex flex-col gap-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pink-500" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className="bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">System Architecture</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {architecture.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector Impact ── */}
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Sector Impact</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="mb-2 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-secondary/60 px-6 py-4 text-center text-sm text-muted-foreground">
            <strong className="text-foreground">Proven Results:</strong> 1,317+ conversations/day · 93.2% response accuracy · 30% reduction in support costs · 80% of routine queries automated
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-secondary/30 py-14 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Ready to deploy?</h2>
          <p className="mt-3 text-base text-muted-foreground">
            Contact us for a demo, pricing, or GeM procurement details.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
