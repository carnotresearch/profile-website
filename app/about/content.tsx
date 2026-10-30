"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { CheckCircle2, Server, ShieldCheck, Cpu, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// ─── Scroll-triggered fade-up ────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      {children}
    </div>
  )
}

// ─── Static icon/style data paired by slide index ────────────────────────────
const slideIconData: { icon: LucideIcon; gradientClass: string }[] = [
  {
    icon: Cpu,
    gradientClass: "from-[#0b2149] via-[#1a3a6e] to-[#1a57eb]",
  },
  {
    icon: Server,
    gradientClass: "from-[#0d3b2e] via-[#145c45] to-[#1a7a5e]",
  },
  {
    icon: ShieldCheck,
    gradientClass: "from-[#2d1a4e] via-[#4a2d82] to-[#6b46c1]",
  },
]

// ─── Capability card style data paired by capability index ───────────────────
const capabilityStyleData = [
  {
    icon: Server,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    stripe: "from-[#1a57eb] to-[#1a57eb]/30",
    hoverBorder: "hover:border-blue-200",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    stripe: "from-green-500 to-green-500/30",
    hoverBorder: "hover:border-green-200",
  },
  {
    icon: Cpu,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    stripe: "from-purple-500 to-purple-500/30",
    hoverBorder: "hover:border-purple-200",
  },
]

// ─── Slideshow ────────────────────────────────────────────────────────────────
function Slideshow({ slides }: { slides: readonly { label: string; description: string }[] }) {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length)
        setTransitioning(false)
      }, 350)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goTo = (index: number) => {
    if (index === current) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 350)
  }

  const slide = slides[current]
  const style = slideIconData[current]
  const SlideIcon = style.icon

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl select-none">
      {/* Slide background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${style.gradientClass} transition-opacity duration-700 ${transitioning ? "opacity-0" : "opacity-100"}`}
      />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center p-10 text-center transition-opacity duration-700 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
          <SlideIcon className="h-8 w-8 text-white" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-2">
          {slide.label}
        </p>
        <p className="text-lg font-medium leading-relaxed text-white/90 max-w-xs">
          {slide.description}
        </p>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}


// ─── Main component ───────────────────────────────────────────────────────────
export function AboutContent() {
  const { tx } = useLanguage()
  const ap = tx.aboutPage

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {ap.hero.badge}
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                {ap.hero.heading}
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                {ap.hero.para1}
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {ap.hero.para2}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>


      {/* ── Who We Are ───────────────────────────────────────────────────── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                {ap.whoWeAre.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {ap.whoWeAre.heading}
              </h2>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text column */}
            <FadeUp delay={100}>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {ap.whoWeAre.para1}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {ap.whoWeAre.para2}
                </p>
                <ul className="space-y-3">
                  {ap.whoWeAre.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1a57eb]" />
                      <span className="text-base text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-base font-medium leading-relaxed text-foreground">
                  {ap.whoWeAre.outro}
                </p>
              </div>
            </FadeUp>

            {/* Slideshow column */}
            <FadeUp delay={220} className="h-full">
              <Slideshow slides={ap.slides} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                {ap.whatWeDo.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {ap.whatWeDo.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {ap.whatWeDo.desc}
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ap.whatWeDo.capabilities.map((cap, i) => {
              const style = capabilityStyleData[i]
              const CapIcon = style.icon
              return (
                <FadeUp key={cap.title} delay={i * 100}>
                  <div
                    className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${style.hoverBorder}`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${style.stripe}`}
                    />
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <CapIcon className={`h-6 w-6 ${style.iconColor}`} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cap.body}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          <FadeUp delay={200}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              {ap.whatWeDo.outro}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Why We Exist ─────────────────────────────────────────────────── */}
      <section className="bg-[#0b2149] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5b8ceb] mb-6">
                {ap.whyWeExist.eyebrow}
              </p>
              <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {ap.whyWeExist.heading}
              </p>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300">
                <p>
                  {ap.whyWeExist.para1}
                </p>
                <p className="font-medium text-white">
                  {ap.whyWeExist.highlight}
                </p>
                <p>
                  {ap.whyWeExist.para2}
                </p>
                <p className="border-l-2 border-[#1a57eb] pl-5 text-slate-200 italic">
                  {ap.whyWeExist.quote}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
