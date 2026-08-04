import type { Metadata } from "next"
import Link from "next/link"
import { Bot, Download, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Generative AI Conversational Agent | GeM | icarKno™",
  description:
    "Accurate on-premise, high-privacy, multilingual knowledge agent. From secure servers to the field's edge. Listed on GeM by icarKno™.",
  openGraph: {
    title: "Generative AI Conversational Agent | icarKno™",
    description: "On-premise, high-privacy, multilingual generative AI agent. Secure deployments from server to edge. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/genai-conversational-agent",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/genai-conversational-agent" },
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const features = [
  "Fully on-premise with no internet outbound; sensitive data stays within your network",
  "Cloud-accessible via PCs, laptops, or mobile with real-time collaboration",
  "Edge Device mode: compact AI for field operations with voice, text, and image inputs",
  "Knowledge Graph-powered for smarter search and complex information handling",
  "Agentic integration: WhatsApp, Email, Telegram, Discord, Edge Wearables",
  "Maintains conversation context with zero hallucinations, grounded in verified data",
  "Seamless multilingual support for major Indian and global languages",
]

const useCases = [
  {
    emoji: "🛡️",
    title: "Defence & Security",
    color: "text-orange-600",
    points: [
      "Soldiers use headset for voice Q&A and goggles for visual intelligence, all offline",
      "Combine live visual feed with pre-loaded GIS data for real-time situational awareness",
      "Translate and summarise local language intercepts via audio",
    ],
  },
  {
    emoji: "🏥",
    title: "Healthcare & Emergency Response",
    color: "text-red-600",
    points: [
      "Paramedics query treatment protocols by voice while administering first aid",
      "AI overlay assists with wound assessment via goggles",
      "Offline access to evacuation routes and crisis protocols when networks are unavailable",
    ],
  },
  {
    emoji: "🏛️",
    title: "Governments",
    color: "text-blue-600",
    points: [
      "Deliver consistent, secure citizen services with minimal training overhead",
      "Automate frontline queries, workflows, and OSINT monitoring",
      "Act as Co-pilot for decision making; protect sensitive information",
    ],
  },
  {
    emoji: "🏢",
    title: "Enterprises",
    color: "text-green-600",
    points: [
      "Turn internal documents into a smart, queryable knowledge assistant",
      "Reduce dependency on siloed support teams",
      "Enhance productivity without compromising IP",
    ],
  },
]

export default function GenAIConversationalAgentPage() {
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
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />

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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3c6]">
                <Bot className="h-6 w-6 text-[#b54708]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Generative AI Conversational Agent
              </h1>
              <p className="mt-2 text-base font-medium text-muted-foreground">
                Accurate On-Premise · High Privacy · Multi-Lingual Knowledge Agent
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Runs entirely inside your secure environment with no internet outbound. Responses are strictly grounded
                in your verified, on-premise data with zero hallucinations, from enterprise servers to the field&apos;s edge.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`${B}/gem/genai-conversational-agent-brochure.pdf`}
                  download="GenAI_Conversational_Agent_Brochure.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-all"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </div>

            {/* Right: deployment modes + features */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { value: "100%", label: "On-Premise" },
                    { value: "0", label: "Data Leakage" },
                    { value: "Multi", label: "Modal" },
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
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
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
              <div key={u.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className={`mb-3 text-sm font-semibold ${u.color}`}>{u.emoji} {u.title}</h3>
                <ul className="flex flex-col gap-2">
                  {u.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
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
