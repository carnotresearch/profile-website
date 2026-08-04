import type { Metadata } from "next"
import Link from "next/link"
import { Server, Download, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "On-Premise Knowledge Agent | GeM | icarKno™",
  description:
    "Enterprise AI Knowledge Management System for Banking, Financial Services & Government. 96.8% accuracy, 1.2s response time. Listed on GeM.",
  openGraph: {
    title: "On-Premise Knowledge Agent | Enterprise AI | icarKno™",
    description: "Secure on-premise AI knowledge management for banking, finance, and government. 96.8% accuracy. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/onpremise-knowledge-agent",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/onpremise-knowledge-agent" },
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const features = [
  "Hybrid Vector + Keyword search (GPT-4 Turbo, text-embedding-ada-002)",
  "Compliance Document Retrieval: RBI circulars, SEBI guidelines, KYC norms, AML policies",
  "Financial Policy Intelligence with contextual understanding",
  "Risk Management via ML-powered fraud pattern analytics",
  "Corporate Law Repository: Companies Act, MCA circulars, SEBI regulations",
  "Real-time analytics dashboard: query volume, accuracy, response latency",
  "Zero data leakage, RBAC, Make in India (DPIIT recognised)",
]

const sectors = [
  {
    emoji: "🏦",
    title: "Banking & Financial Services",
    points: [
      "Instant access to RBI circulars, SEBI guidelines, KYC norms via NLP-based semantic search",
      "Query internal banking policies, loan documentation, credit risk guidelines",
      "Staff can instantly retrieve product info, interest rates, and service charges",
      "Analyse historical fraud patterns, credit risk assessments, and compliance violations",
    ],
  },
  {
    emoji: "⚖️",
    title: "Ministry of Corporate Affairs",
    points: [
      "Instant NLP retrieval of Companies Act, MCA circulars, and corporate governance guidelines",
      "Query MCA-21 filing requirements, ROC forms, director KYC, and annual returns",
      "Analyse amendments, notifications, and policy changes using ML algorithms",
      "Access historical case laws, inspection reports, and enforcement actions",
    ],
  },
]

const techSpecs = [
  { label: "LLM Engine", value: "GPT-4 Turbo" },
  { label: "Embedding Model", value: "text-embedding-ada-002" },
  { label: "Vector Dimensions", value: "1536" },
  { label: "NLP Processing", value: "Tokenization, NER" },
  { label: "Search Type", value: "Hybrid Vector + Keyword" },
  { label: "Data Capacity", value: "52.3K embeddings" },
]

export default function OnPremiseKnowledgeAgentPage() {
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
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />

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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf3]">
                <Server className="h-6 w-6 text-[#15803d]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                On-Premise Knowledge Agent
              </h1>
              <p className="mt-2 text-base font-medium text-muted-foreground">Enterprise AI Knowledge Management System</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A secure on-premise AI agent that organises enterprise knowledge and answers complex queries instantly.
                All processing happens inside your network. GPT-4 Turbo inference, embedding-based search, and zero data leakage.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`${B}/gem/onpremise-knowledge-agent-brochure.pdf`}
                  download="OnPremise_Knowledge_Agent_Brochure.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-all"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </div>

            {/* Right: stats + features card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                {/* Stats row */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {[
                    { value: "96.8%", label: "Accuracy Rate" },
                    { value: "1.2s", label: "Response Time" },
                    { value: "52.3K", label: "Embeddings" },
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
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Specs ── */}
      <section className="bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Technical Specifications</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {techSpecs.map((t) => (
              <div key={t.label} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs text-muted-foreground">{t.label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{t.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sector Applications ── */}
      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Sector-Specific Applications</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((sector) => (
              <div key={sector.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="mb-4 text-base font-semibold text-foreground">
                  {sector.emoji} {sector.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {sector.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
