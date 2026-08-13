"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Wifi, Clock, ShieldCheck, Layers, X, Check } from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.05 }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.6s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const pillars = [
  {
    icon: Wifi,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    category: "Connectivity",
    challenge: "When connectivity fails, most AI systems stop.",
    challengeDetail: "Remote operations, critical environments, and field scenarios don't guarantee stable access to the cloud.",
    solution: "icarKno™ enables AI to run entirely offline.",
    solutionDetail: "Processing, understanding, and decision support without relying on external networks.",
  },
  {
    icon: Clock,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    category: "Latency",
    challenge: "When decisions are time-sensitive, delays aren't acceptable.",
    challengeDetail: "Sending data back and forth to centralized systems creates lag where immediate action is required.",
    solution: "icarKno™ processes intelligence at the source.",
    solutionDetail: "Real-time analysis and response, exactly where the data is generated.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    category: "Security",
    challenge: "When data is critical, exposure isn't an option.",
    challengeDetail: "Transmitting sensitive information through external systems introduces risks many environments cannot take.",
    solution: "icarKno™ keeps data fully local and controlled.",
    solutionDetail: "No external dependency. No unnecessary exposure. Complete operational security.",
  },
  {
    icon: Layers,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    category: "Complexity",
    challenge: "When information is vast, extracting clarity becomes difficult.",
    challengeDetail: "Documents, inputs, and data streams remain underutilised because systems can't process them effectively on-site.",
    solution: "icarKno™ turns complex data into actionable intelligence.",
    solutionDetail: "From documents to real-time inputs, delivering clarity when it matters most.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-secondary/30 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            {/* <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Need for Edge AI
            </h2> */}
            <p className="text-base leading-relaxed text-muted-foreground">
              Today&apos;s AI systems were not built for the environments that need them most.
            </p>
          </div>
        </FadeUp>

        {/* Column headers */}
        <FadeUp delay={80}>
          <div className="mb-4 hidden grid-cols-[200px_1fr_40px_1fr] gap-4 px-2 sm:grid lg:grid-cols-[220px_1fr_48px_1fr]">
            <div />
            <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-red-500">
              <X className="h-4 w-4" /> Without icarKno™
            </div>
            <div />
            <div className="flex items-center gap-2 text-sm font-bold tracking-wide text-green-600">
              <Check className="h-4 w-4" /> With icarKno™
            </div>
          </div>
        </FadeUp>

        {/* Rows */}
        <div className="space-y-3">
          {pillars.map((p, i) => (
            <FadeUp key={p.category} delay={120 + i * 70}>
              <div className="overflow-hidden rounded-xl border border-border bg-card">

                {/* Mobile: stacked layout */}
                <div className="sm:hidden">
                  <div className="flex items-center gap-3 border-b border-border bg-gray-50 px-5 py-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${p.iconBg}`}>
                      <p.icon className={`h-4 w-4 ${p.iconColor}`} />
                    </div>
                    <span className="text-sm font-bold text-foreground">{p.category}</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="bg-red-50/50 p-4">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-500 flex items-center gap-1"><X className="h-3 w-3" /> Challenge</p>
                      <p className="text-xs font-semibold text-red-800 leading-snug">{p.challenge}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-red-700/60">{p.challengeDetail}</p>
                    </div>
                    <div className="bg-green-50/50 p-4">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-green-600 flex items-center gap-1"><Check className="h-3 w-3" /> icarKno™</p>
                      <p className="text-xs font-semibold text-green-800 leading-snug">{p.solution}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-green-700/60">{p.solutionDetail}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: horizontal row */}
                <div className="hidden sm:grid sm:grid-cols-[200px_1fr_48px_1fr] lg:grid-cols-[220px_1fr_48px_1fr]">

                  {/* Category */}
                  <div className="flex items-center gap-3 border-r border-border bg-gray-50/80 px-5 py-5">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.iconBg}`}>
                      <p.icon className={`h-4 w-4 ${p.iconColor}`} />
                    </div>
                    <span className="text-sm font-bold text-foreground">{p.category}</span>
                  </div>

                  {/* Challenge */}
                  <div className="border-r border-border bg-red-50/40 px-6 py-5">
                    <p className="text-sm font-semibold leading-snug text-red-800">{p.challenge}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-red-700/60">{p.challengeDetail}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center bg-white text-gray-300 text-lg font-light">
                    →
                  </div>

                  {/* Solution */}
                  <div className="bg-green-50/40 px-6 py-5">
                    <p className="text-sm font-semibold leading-snug text-green-800">{p.solution}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-green-700/60">{p.solutionDetail}</p>
                  </div>

                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
