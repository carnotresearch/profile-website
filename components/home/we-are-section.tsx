"use client"

import { useLanguage } from "@/lib/language-context"

export function WeAreSection() {
  const { tx } = useLanguage()
  const w = tx.weAre

  return (
    <section className="bg-slate-50/70 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
            {w.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {w.heading}
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            {w.desc}
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-14 max-w-5xl border-t border-slate-200">
          <article className="grid gap-3 border-b border-slate-200 py-7 sm:py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              {w.secure}
            </h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600">
              {w.secureDesc}
            </p>
          </article>

          <article className="grid gap-3 border-b border-slate-200 py-7 sm:py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{w.accuracy}</h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600">
              {w.accuracyDesc}
            </p>
          </article>

          <article className="grid gap-3 py-7 sm:py-8 md:grid-cols-[220px_1fr] md:gap-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              {w.adaptive}
            </h3>
            <p className="text-sm sm:text-base leading-7 text-slate-600">
              {w.adaptiveDesc}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
