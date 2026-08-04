import type { Metadata } from "next"
import Link from "next/link"
import { FileText, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Meeting Summarizer | GeM | icarKno™",
  description:
    "AI-powered meeting intelligence: auto-transcription, context tagging, and actionable summaries. On-premise capable. Listed on GeM by icarKno™.",
  openGraph: {
    title: "Meeting Summarizer | AI-Powered Meeting Intelligence | icarKno™",
    description: "Auto-transcription, context tagging, and actionable summaries from meetings. On-premise capable. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/meeting-summarizer",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/meeting-summarizer" },
}

const features = [
  "Real-time AI transcription with speaker diarization",
  "Automatic context tagging: decisions, action items, and deadlines extracted instantly",
  "Multilingual meeting support across Indian and global languages",
  "Integration with major video conferencing platforms",
  "Searchable meeting archive with semantic search",
  "Exportable summaries in PDF, Word, and email formats",
  "On-premise deployment for confidential and sensitive meetings",
]

const useCases = [
  { title: "Enterprise Meetings", desc: "Auto-document board meetings, standups, and client calls, reducing manual note-taking effort to zero." },
  { title: "Government Committees", desc: "Capture minutes of parliamentary committees, policy reviews, and inter-departmental sessions with full accuracy." },
  { title: "Legal & Compliance", desc: "Maintain a searchable, timestamped record of legal proceedings, audit meetings, and compliance reviews." },
  { title: "Board Meetings", desc: "Generate structured board minutes with tagged decisions, resolutions, and action items for governance documentation." },
]

export default function MeetingSummarizerPage() {
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
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0f2fe]">
                <FileText className="h-6 w-6 text-[#1d4ed8]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Meeting Summarizer
              </h1>
              <p className="mt-2 text-base font-medium text-muted-foreground">AI-Powered Meeting Intelligence</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Automatically captures and summarises key meeting insights with AI-powered transcription and context tagging.
                Converts unstructured meeting data into structured, actionable summaries so your team can focus on decisions, not documentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-border px-4 py-2.5 text-sm text-muted-foreground">
                  Brochure coming soon
                </span>
              </div>
            </div>

            {/* Right: stats + features */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { value: "Auto", label: "Transcription" },
                    { value: "AI", label: "Tagging" },
                    { value: "Real-time", label: "Summaries" },
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
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Use Cases</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 text-sm font-semibold text-foreground">{u.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-background py-14 px-6 text-center">
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
