"use client"

import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Brain,
  Check,
  FileSearch,
  Lock,
  Plug,
  Settings,
  ShieldAlert,
  WifiOff,
  Workflow,
  Search,
  Lightbulb,
  Bot,
  FileStack,
  MessageSquare,
  Eye,
  FileText,
  Wifi,
  GraduationCap,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"
import type { ElementType } from "react"

type ChallengeIcon = { icon: ElementType; bg: string; color: string }
type SolutionMeta = { icon: ElementType; href: string; bg: string; color: string }
type ServiceMeta = { icon: ElementType; iconBg: string; iconColor: string }
type FrameworkMeta = { icon: ElementType; bg: string; color: string }

const challengeMeta: ChallengeIcon[] = [
  { icon: Boxes, bg: "#fef3c7", color: "#d97706" },
  { icon: ShieldAlert, bg: "#fee2e2", color: "#dc2626" },
  { icon: Lock, bg: "#ede9fe", color: "#7c3aed" },
  { icon: WifiOff, bg: "#cffafe", color: "#0891b2" },
  { icon: Workflow, bg: "#dcfce7", color: "#16a34a" },
]

const solutionMeta: SolutionMeta[] = [
  { icon: FileSearch, href: "/solutions/enterprise-rag", bg: "#dbeafe", color: "#2563eb" },
  { icon: Lock, href: "/solutions/on-prem-ai", bg: "#ede9fe", color: "#7c3aed" },
  { icon: Brain, href: "/solutions/ai-in-sports", bg: "#dcfce7", color: "#16a34a" },
]

const serviceMeta: ServiceMeta[] = [
  { icon: Search, iconBg: "bg-[#fee4e2]", iconColor: "text-[#b42318]" },
  { icon: Lightbulb, iconBg: "bg-[#fff3c6]", iconColor: "text-[#b54708]" },
  { icon: Bot, iconBg: "bg-[#e0f2fe]", iconColor: "text-[#1d4ed8]" },
  { icon: FileStack, iconBg: "bg-[#e0f4ff]", iconColor: "text-[#026aa2]" },
  { icon: MessageSquare, iconBg: "bg-[#f3e8ff]", iconColor: "text-[#7e22ce]" },
  { icon: Eye, iconBg: "bg-[#e0fdf4]", iconColor: "text-[#027a48]" },
  { icon: FileText, iconBg: "bg-[#fef3ff]", iconColor: "text-[#c11574]" },
  { icon: Wifi, iconBg: "bg-[#f1f5f9]", iconColor: "text-[#334155]" },
  { icon: GraduationCap, iconBg: "bg-[#ecfdf3]", iconColor: "text-[#15803d]" },
  { icon: Landmark, iconBg: "bg-[#eff6ff]", iconColor: "text-[#1d4ed8]" },
]

const frameworkMeta: FrameworkMeta[] = [
  { icon: Search, bg: "#fef3c7", color: "#d97706" },
  { icon: Settings, bg: "#dbeafe", color: "#2563eb" },
  { icon: Plug, bg: "#dcfce7", color: "#16a34a" },
  { icon: Check, bg: "#ede9fe", color: "#7c3aed" },
]

// English-only FAQ schema for SEO — language-independent
const faqSchemaItems = [
  { q: "What industries benefit from enterprise AI solutions?", a: "Enterprise AI solutions are useful in government, defense, corporate settings, research institutions, and sports organizations. They are especially valuable where large amounts of data need structured analysis and secure processing." },
  { q: "How is secure AI deployment different from cloud-based AI?", a: "Secure AI deployment focuses on data sovereignty, on-site infrastructure, and controlled access environments. This approach decreases reliance on outside cloud providers." },
  { q: "Can AI systems operate fully offline?", a: "Yes. With the right infrastructure, AI models can be set up on-site and work without internet access. This allows for secure and isolated operations." },
  { q: "What is Retrieval-Augmented Generation (RAG)?", a: "Retrieval-Augmented Generation combines semantic search with language models to produce responses based on verified data sources. This reduces inaccuracies and improves reliability." },
  { q: "How do AI solutions improve operational efficiency?", a: "AI systems make information retrieval quicker, automate repetitive tasks, support better decision-making, and allow for faster, more informed actions across departments." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export function SolutionsContent() {
  const { tx } = useLanguage()
  const s = tx.solutionsPage

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-background min-h-hero-page-lg flex flex-col justify-center pt-14 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              {s.hero.badge}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {s.hero.heading}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {s.hero.desc}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {s.hero.talkBtn}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#our-solutions">{s.hero.exploreBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Challenges */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.challenges.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.challenges.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.challenges.items.map((c, i) => {
              const m = challengeMeta[i]
              const CIcon = m.icon
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: m.bg }}>
                    <CIcon className="h-5 w-5" style={{ color: m.color }} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              )
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium text-foreground">
            {s.challenges.outro}
          </p>
        </div>
      </section>

      {/* Our AI Solutions */}
      <section id="our-solutions" className="bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.ourSolutions.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.ourSolutions.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.ourSolutions.items.map((sol, i) => {
              const m = solutionMeta[i]
              const SIcon = m.icon
              return (
                <div key={i} className="flex flex-col rounded-xl border border-border bg-card p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: m.bg }}>
                    <SIcon className="h-5 w-5" style={{ color: m.color }} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{sol.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sol.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {sol.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: m.bg }}>
                          <Check className="h-3.5 w-3.5" style={{ color: m.color }} />
                        </div>
                        <span className="text-sm leading-relaxed text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={m.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a57eb] hover:underline"
                    >
                      {sol.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities & Specialized Services */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.services.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.services.desc}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {s.services.items.map((svc, i) => {
              const m = serviceMeta[i]
              const SVCIcon = m.icon
              return (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${m.iconBg}`}>
                    <SVCIcon className={`h-5 w-5 ${m.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{svc.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{svc.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.framework.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.framework.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.framework.steps.map((step, idx) => {
              const m = frameworkMeta[idx]
              const FIcon = m.icon
              return (
                <div key={idx} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: m.bg }}>
                      <FIcon className="h-5 w-5" style={{ color: m.color }} />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{idx + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {s.framework.outro}
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {s.industries.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {s.industries.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.industries.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-center">
            {s.faq.heading}
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {s.faq.items.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
