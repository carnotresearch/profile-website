"use client"

import Link from "next/link"
import {
  ArrowRight,
  ExternalLink,
  Train,
  Mic,
  Trophy,
  Globe,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function SaathiContent() {
  const { tx } = useLanguage()
  const t = tx.saathiPage

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#E73C30]/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#E73C30]/4 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left — content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 ring-1 ring-amber-200">
                <Trophy className="h-3.5 w-3.5 text-amber-600" />
                <span className="text-xs font-semibold text-amber-700">{t.hero.awardBadge}</span>
              </div>

              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t.hero.heading}{" "}
                <span className="text-[#2563eb]">{t.hero.headingAccent}</span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-lg">
                {t.hero.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#bfdbfe] bg-[#eff6ff] px-3.5 py-2">
                <Globe className="h-4 w-4 text-[#2563eb]" />
                <span className="text-sm font-medium text-[#1d4ed8]">
                  {t.hero.languagePill}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://bot.carnotresearch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition-colors"
                >
                  {t.hero.btnTry}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    {t.hero.btnContact}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right — chat preview */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#E73C30]/15 via-[#E73C30]/4 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-xl">
                <div className="flex items-center gap-3 border-b border-red-700 px-5 py-3.5" style={{ background: "#E73C30" }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Train className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.hero.chat.title}</p>
                    <p className="text-[10px] text-red-100">{t.hero.chat.subtitle}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    <span className="text-[10px] text-red-100">{t.hero.chat.online}</span>
                  </div>
                </div>
                <div className="space-y-4 bg-white p-5">
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white shadow-sm" style={{ background: "#E73C30" }}>
                      {t.hero.chat.msg1User}
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50">
                      <Train className="h-3.5 w-3.5" style={{ color: "#E73C30" }} />
                    </div>
                    <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-red-100 bg-red-50/60 px-4 py-2.5 text-sm text-gray-800 shadow-sm">
                      {t.hero.chat.msg1Bot}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white shadow-sm" style={{ background: "#E73C30" }}>
                      {t.hero.chat.msg2User}
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50">
                      <Train className="h-3.5 w-3.5" style={{ color: "#E73C30" }} />
                    </div>
                    <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-red-100 bg-red-50/60 px-4 py-2.5 text-sm text-gray-800 shadow-sm">
                      {t.hero.chat.msg2BotPre}
                      <span className="font-semibold" style={{ color: "#E73C30" }}>155370</span>
                      {t.hero.chat.msg2BotMid}
                      <span className="font-semibold" style={{ color: "#E73C30" }}>112</span>
                      {t.hero.chat.msg2BotPost}
                    </div>
                  </div>
                </div>
                <div className="border-t border-red-100 bg-white px-4 py-3">
                  <div className="flex items-center gap-2 rounded-xl border border-red-100 bg-red-50/40 px-3 py-2 text-sm text-gray-400">
                    <span className="flex-1">{t.hero.chat.placeholder}</span>
                    <Mic className="h-4 w-4" style={{ color: "#E73C30" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb]">{t.capabilities.eyebrow}</p>
            <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {t.capabilities.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t.capabilities.desc}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.capabilities.items.map((c, idx) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfdbfe] hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff6ff] text-lg">
                    {(["📍","🚇","⏰","💳","📞","🎤"] as const)[idx]}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Questions ── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-3.5 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
              <span className="text-xs font-semibold text-[#1d4ed8]">{t.quickQuestions.badge}</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{t.quickQuestions.heading}</h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t.quickQuestions.desc}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {t.quickQuestions.items.map((q) => (
              <a
                key={q}
                href="https://bot.carnotresearch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-all hover:border-[#bfdbfe] hover:bg-[#eff6ff]/50 hover:shadow-sm"
              >
                <span>{q}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-[#2563eb]" />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://bot.carnotresearch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              {t.quickQuestions.btn}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Award & Recognition ── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 ring-1 ring-amber-300">
                  <Trophy className="h-3.5 w-3.5 text-amber-700" />
                  <span className="text-xs font-bold text-amber-800">{t.award.badge}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {t.award.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{t.award.p1}</p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">{t.award.p2}</p>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "JICA",      src: `${B}/assets/clients-logos/5.png`  },
                    { name: "BCG",       src: `${B}/assets/clients-logos/6.webp` },
                    { name: "FITT",      src: `${B}/assets/clients-logos/7.png`  },
                    { name: "IIT Delhi", src: `${B}/assets/clients-logos/4.webp` },
                  ].map((org) => (
                    <div key={org.name} className="flex flex-col items-center justify-center rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={org.src} alt={org.name} className="h-10 w-auto object-contain" />
                      <p className="mt-2 text-[10px] font-semibold tracking-wide text-amber-700">{org.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-20 lg:py-28" style={{ background: "#0b2149" }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-200">
            {t.cta.desc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bot.carnotresearch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              {t.cta.btnTry}
              <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              {t.cta.btnProducts}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
