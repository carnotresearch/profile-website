import Link from "next/link"
import {
  Landmark, BookOpen, Server, Eye, MessageSquareText, Activity, ArrowRight,
} from "lucide-react"

const capabilities = [
  {
    icon: Landmark,
    title: "Government & Defense AI",
    desc: "Secure, sovereign AI systems for policy document intelligence, e-governance chatbots, and classified environments. Deployed fully inside your own network.",
    href: "/solutions",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: BookOpen,
    title: "Enterprise Knowledge Management",
    desc: "Turn your document library into a searchable, conversational AI. RAG-powered system ingests PDFs, videos, web, audio, and scanned documents, and answers with cited sources.",
    href: "/solutions",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
  },
  {
    icon: Server,
    title: "On-Premise LLM Deployment",
    desc: "Deploy large language models entirely within your own infrastructure. Full data sovereignty with no cloud routing, no third-party access, and air-gap capability for sensitive environments.",
    href: "/solutions/on-prem-ai",
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: Eye,
    title: "Indoor Navigation AI",
    desc: "Transform complex indoor environments into intelligent navigable spaces using AI-powered localization, contextual guidance, and real-time navigation assistance.",
    href: "/solutions",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-400",
  },
  {
    icon: MessageSquareText,
    title: "Multilingual Sovereign RAG platform",
    desc: "Secure, domain-aware RAG platform supporting 22+ Indian languages with offline intelligence, multilingual reasoning, and sovereign knowledge retrieval across enterprise and mission-critical environments.",
    href: "/solutions",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
  },
  {
    icon: Activity,
    title: "Sports & Performance AI",
    desc: "Biomechanical movement analysis from standard video. No wearables needed. Real-time insights on posture, gait, and joint mechanics for coaches and athletes.",
    href: "/products/bhargati",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
  },
]

export function SolutionsSection() {
  return (
    <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
            What We Build
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Deployable AI Systems
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Our products are just three examples of what we build. icarKno™ creates
            deployable AI systems across multiple domains, for organizations that need something
            built from the ground up.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 grid max-w-5xl gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-md"
            >
              <c.icon className={`h-6 w-6 ${c.iconColor}`} />
              <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all solutions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
