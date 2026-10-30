"use client"

import Link from "next/link"
import { Bot, Download, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const useCaseColors = [
  "text-orange-600",
  "text-red-600",
  "text-blue-600",
  "text-green-600",
]

export function GenAIConversationalAgentContent() {
  const { tx } = useLanguage()
  const t = tx.genAIAgentPage

  return (
    <>
      {/* Hero */}
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
            <ArrowLeft className="h-4 w-4" /> {t.backToProducts}
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-xs font-semibold text-foreground">{t.gemBadge}</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff3c6]">
                <Bot className="h-6 w-6 text-[#b54708]" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t.hero.heading}
              </h1>
              <p className="mt-2 text-base font-medium text-muted-foreground">{t.hero.subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.hero.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    {t.hero.btnDemo} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`${B}/gem/genai-conversational-agent-brochure.pdf`}
                  download="GenAI_Conversational_Agent_Brochure.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-all"
                >
                  <Download className="h-4 w-4" /> {t.hero.btnBrochure}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {t.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-background p-3 text-center">
                      <p className="text-xl font-bold text-foreground">{s.value}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.keyCaps}</h3>
                <ul className="flex flex-col gap-2.5">
                  {t.features.map((f) => (
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

      {/* Use Cases */}
      <section className="bg-secondary/30 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">{t.useCases.heading}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.useCases.items.map((u, i) => (
              <div key={u.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className={`mb-3 text-sm font-semibold ${useCaseColors[i]}`}>{u.emoji} {u.title}</h3>
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

      {/* CTA */}
      <section className="bg-background py-14 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">{t.cta.heading}</h2>
          <p className="mt-3 text-base text-muted-foreground">{t.cta.desc}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                {t.cta.btn} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
