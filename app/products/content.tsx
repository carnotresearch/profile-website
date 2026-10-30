"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Brain, Route, MessageCircle, FileText, Server, Globe, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import type { ElementType } from "react"

type ProductMeta = {
  id: string
  name: string
  pageHref: string
  demoUrl: string
  icon: ElementType
  iconBg: string
  iconColor: string
}

type GemMeta = {
  icon: ElementType
  iconBg: string
  iconColor: string
  href: string
  gemHref: string
}

const productMeta: ProductMeta[] = [
  {
    id: "icarkno",
    name: "icarKno™",
    pageHref: "/products/icarkno",
    demoUrl: "https://iknow.carnotresearch.com/",
    icon: Brain,
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    id: "bhargati",
    name: "BharGati™ AI",
    pageHref: "/products/bhargati",
    demoUrl: "https://bhargati.ai/",
    icon: Route,
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    id: "saathi",
    name: "SAATHI",
    pageHref: "/products/saathi",
    demoUrl: "https://bot.carnotresearch.com/",
    icon: MessageCircle,
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
]

const gemMeta: GemMeta[] = [
  {
    icon: FileText,
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
    href: "/products/gem/meeting-summarizer",
    gemHref: "https://mkp.gem.gov.in/business-intelligence-data-analysis-software-v2/meeting-summarizer/p-5116877-3723073004-cat.html#variant_id=5116877-3723073004",
  },
  {
    icon: Server,
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
    href: "/products/gem/onpremise-knowledge-agent",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/premise-knowledge-agent/p-5116877-4816507327-cat.html#variant_id=5116877-4816507327",
  },
  {
    icon: Globe,
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
    href: "/products/gem/multilingual-chatbot",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/multilingual-chatbot/p-5116877-52065673885-cat.html#variant_id=5116877-52065673885",
  },
  {
    icon: Bot,
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
    href: "/products/gem/genai-conversational-agent",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/generative-ai-based-conversational-agent/p-5116877-74185814411-cat.html#variant_id=5116877-74185814411",
  },
  {
    icon: Brain,
    iconBg: "bg-[#f0fdf4]",
    iconColor: "text-[#166534]",
    href: "/products/gem/business-intelligence",
    gemHref: "https://mkp.gem.gov.in/business-intelligence-data-analysis-software-v2/intelligent-data-management-system/p-5116877-42769598617-cat.html#variant_id=5116877-42769598617",
  },
]

export function ProductsContent() {
  const { tx } = useLanguage()
  const p = tx.productsPage

  return (
    <>
      {/* Hero */}
      <section className="bg-background min-h-hero-page-lg flex flex-col justify-center pt-14 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              {p.hero.badge}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {p.hero.heading}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {p.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      {productMeta.map((meta, index) => {
        const t = p.products[index]
        const Icon = meta.icon
        return (
          <section
            key={meta.id}
            id={meta.id}
            className={`py-14 sm:py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid items-start gap-12 lg:grid-cols-2">
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${meta.iconBg}`}>
                    <Icon className={`h-6 w-6 ${meta.iconColor}`} />
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                    {meta.name}
                  </h2>
                  <p className="mt-1 text-base font-medium text-accent">
                    {t.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href={meta.pageHref}>
                        {p.exploreBtn} {meta.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    {p.keyCaps}
                  </h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {t.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* GeM Products */}
      <section id="summarizer" className="bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 w-fit rounded-full border border-border bg-secondary px-4 py-1.5">
              <span className="text-xs font-medium text-foreground">
                {p.gem.badge}
              </span>
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {p.gem.heading}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              {p.gem.desc}
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {p.gem.products.map((gp, gi) => {
              const gm = gemMeta[gi]
              const GIcon = gm.icon
              return (
                <div
                  key={gi}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${gm.iconBg}`}>
                    <GIcon className={`h-5 w-5 ${gm.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {gp.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {gp.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={gm.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      {p.gem.exploreLink} <ArrowRight className="h-3 w-3" />
                    </Link>
                    <a
                      href={gm.gemHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline"
                    >
                      {p.gem.viewOnGem} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {p.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {p.cta.desc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                {p.cta.contactBtn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
