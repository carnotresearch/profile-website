"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const clients = [
  "NSG",
  "IIT Delhi",
  "JICA",
  "BCG",
  "FITT",
  "MSME",
  "Rashtriya Raksha University",
]

// Duplicate for seamless loop
const marqueeItems = [...clients, ...clients]

export function ClientsSection() {
  return (
    <section className="bg-secondary/20 py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a57eb]">
              Trusted By
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              India&apos;s leading institutions &amp; global partners
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Working alongside premier public-sector organisations, IITs, and global
              consulting firms to advance AI-driven governance.
            </p>
          </div>
        </FadeUp>

        {/* Marquee track */}
        <FadeUp delay={150}>
          <div className="relative">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-secondary/20 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-secondary/20 to-transparent" />

            <div className="overflow-hidden">
              <div
                className="flex w-max gap-4"
                style={{ animation: "marquee 28s linear infinite" }}
              >
                {marqueeItems.map((client, i) => (
                  <div
                    key={i}
                    className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:border-[#1a57eb]/30 hover:text-foreground"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Trust signal */}
        <FadeUp delay={250}>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            Deployed across government, defense, and enterprise environments in India
          </p>
        </FadeUp>

      </div>
    </section>
  )
}
