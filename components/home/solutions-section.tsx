"use client"

import Link from "next/link"
import {
  Landmark, BookOpen, Server, Eye, MessageSquareText, Activity, ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const capabilityIcons = [Landmark, BookOpen, Server, Eye, MessageSquareText, Activity]
const capabilityStyles = [
  { iconBg: "bg-blue-50", iconColor: "text-blue-700", href: "/solutions" },
  { iconBg: "bg-purple-50", iconColor: "text-purple-700", href: "/solutions" },
  { iconBg: "bg-green-50", iconColor: "text-green-700", href: "/solutions/on-prem-ai" },
  { iconBg: "bg-rose-50", iconColor: "text-rose-400", href: "/solutions" },
  { iconBg: "bg-violet-50", iconColor: "text-violet-700", href: "/solutions" },
  { iconBg: "bg-cyan-50", iconColor: "text-cyan-700", href: "/products/bhargati" },
]

export function SolutionsSection() {
  const { tx } = useLanguage()
  const s = tx.solutions

  return (
    <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
            {s.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {s.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            {s.desc}
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 grid max-w-5xl gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {s.capabilities.map((c, i) => {
            const Icon = capabilityIcons[i]
            const style = capabilityStyles[i]
            return (
              <Link
                key={c.title}
                href={style.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-md"
              >
                <Icon className={`h-6 w-6 ${style.iconColor}`} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            {s.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
