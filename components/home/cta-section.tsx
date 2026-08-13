"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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
    <div ref={ref} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

export function CtaSection() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0b1929] px-8 py-14 text-center shadow-xl">
            {/* dot grid overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* blur orb */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70" />
                Get Started Today
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build{" "}
                <span className="text-[#bfdbfe]">something that works.</span>
              </h2>

              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80">
                Whether you need an on-premise knowledge AI, a custom computer vision system,
                or a multilingual conversational agent, our team of IIT Delhi researchers
                will scope, build, and deploy it with you.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-[#0b1929] font-semibold shadow-xl hover:bg-white/90 hover:shadow-2xl transition-all"
                >
                  <Link href="/contact">
                    Talk to AI Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50"
                >
                  <Link href="/contact">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Book Enterprise Demo
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-xs text-white/50">
                Trusted by NSG, IIT Delhi, BCG, JICA, MSME, FITT and enterprise organizations across India
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
