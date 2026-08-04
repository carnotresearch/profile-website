"use client"

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ── Scroll animation ───────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.08 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// ── Image slideshow ────────────────────────────────────────────────────────────
function ImageSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="relative select-none rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={`${B}${src}`}
          alt={`icarKno™ — slide ${i + 1}`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{ height: 6, width: i === current ? 20 : 6, background: i === current ? "white" : "rgba(255,255,255,0.5)" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Slide data sets ────────────────────────────────────────────────────────────
const openingSlides = [
  {
    gradient: "from-violet-600 via-violet-500 to-purple-700",
    stat: "₹70 Cr+",
    label: "Research Funding",
    sub: "Across sponsored & consultancy projects",
  },
  {
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    stat: "47+",
    label: "Funded Projects",
    sub: "Government & industry sponsored",
  },
  {
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    stat: "120+",
    label: "Years Combined Experience",
    sub: "IIT faculty & defense experts",
  },
  {
    gradient: "from-purple-600 via-violet-500 to-indigo-600",
    stat: "CMMI L3",
    label: "Certified Quality",
    sub: "ISO/IEC 27001:2022 · DPIIT · MSME",
  },
]

const missionSlides = [
  {
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    stat: "NLP",
    label: "Natural Language Processing",
    sub: "Multilingual, domain-specific reasoning",
  },
  {
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    stat: "VLM",
    label: "Vision-Language Models",
    sub: "Multimodal document & scene understanding",
  },
  {
    gradient: "from-cyan-600 via-teal-500 to-emerald-600",
    stat: "RAG",
    label: "Retrieval-Augmented Generation",
    sub: "Secure, on-premise, verifiable citations",
  },
  {
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    stat: "Edge AI",
    label: "Agentic AI at the Edge",
    sub: "Zero cloud dependency, air-gapped capable",
  },
]

const visionSlides = [
  {
    gradient: "from-violet-700 via-indigo-600 to-blue-700",
    stat: "On-Prem",
    label: "Sovereign AI Infrastructure",
    sub: "Built into mission environments",
  },
  {
    gradient: "from-teal-500 via-cyan-500 to-sky-600",
    stat: "IoT + AI",
    label: "Integrated Intelligence",
    sub: "Cybersecurity, distributed & edge setups",
  },
  {
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    stat: "India+",
    label: "National AI Leadership",
    sub: "Scaling responsible AI across the country",
  },
  {
    gradient: "from-blue-700 via-indigo-600 to-purple-700",
    stat: "2030",
    label: "Next-Gen AI Infrastructure",
    sub: "Secure, contextual, mission-embedded systems",
  },
]

// ── Slideshow component ────────────────────────────────────────────────────────
function Slideshow({ slides }: { slides: typeof openingSlides }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = slides[current]

  return (
    <div
      className="relative select-none rounded-2xl overflow-hidden shadow-2xl"
      style={{ minHeight: 340 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-700`}
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "24px 24px" }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-10 py-16 text-center text-white" style={{ minHeight: 340 }}>
        <p
          className="text-6xl font-bold tracking-tight drop-shadow-lg transition-all duration-500"
          key={`stat-${current}`}
          style={{ animation: "fadeUpIn 0.5s ease both" }}
        >
          {slide.stat}
        </p>
        <p
          className="mt-3 text-xl font-semibold opacity-95"
          key={`label-${current}`}
          style={{ animation: "fadeUpIn 0.5s ease 80ms both" }}
        >
          {slide.label}
        </p>
        <p
          className="mt-2 text-sm opacity-75 max-w-[220px] leading-relaxed"
          key={`sub-${current}`}
          style={{ animation: "fadeUpIn 0.5s ease 160ms both" }}
        >
          {slide.sub}
        </p>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{ height: 6, width: i === current ? 20 : 6, background: i === current ? "white" : "rgba(255,255,255,0.45)" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Research card ──────────────────────────────────────────────────────────────
function ResearchCard({ eyebrow, title, body, gradient }: { eyebrow: string; title: string; body: string; gradient: string }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${gradient}`} />
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function MissionVisionContent() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background min-h-hero-page-lg flex flex-col justify-center pt-14 pb-28">
        <div className="pointer-events-none absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-primary/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-accent/6 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Mission &amp; Vision
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
                Why We Exist &amp;{" "}
                <span className="text-primary">Where We&apos;re Headed</span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Building trustworthy AI infrastructure that serves institutions,
                governments, and enterprises across India and beyond.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Opening ───────────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left — text */}
            <FadeUp>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  icarKno™ was founded to connect advanced artificial intelligence
                  research with real-world use. In critical situations, intelligence must
                  be secure, reliable, and immediately accessible without relying on
                  weak connections or outside infrastructure.
                </p>
                <p>
                  We design and deploy on-premise, domain-specific AI systems that work
                  where it matters most: in the field, within government institutions, in
                  secure environments, and across high-stakes decision-making areas.
                </p>
                <p>
                  Our efforts combine thorough academic research, solid engineering, and
                  practical operational knowledge to deliver AI systems that function well
                  under pressure.
                </p>
              </div>
            </FadeUp>
            {/* Right — image slideshow */}
            <FadeUp delay={160}>
              <ImageSlideshow images={["/assets/company/who-we-are/first%20.jpeg", "/assets/company/who-we-are/second.jpg", "/assets/company/who-we-are/third.jpeg", "/assets/company/who-we-are/forth.jpg"]} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Our Vision ────────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left — image slideshow */}
            <FadeUp delay={160} className="lg:order-1 order-2">
              <ImageSlideshow images={["/assets/company/vision/Vision_Pic_1.jpeg", "/assets/company/vision/Vision_Pic_2.jpeg", "/assets/company/vision/Vision_Pic_3.jpg"]} />
            </FadeUp>
            {/* Right — text */}
            <FadeUp className="lg:order-2 order-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Our Vision</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Secure Access to Knowledge, for Everyone
              </h2>
              <blockquote className="mt-5 border-l-2 border-primary pl-4 text-base font-medium italic text-foreground/80">
                "To provide the world with secure access to knowledge in an ethical and responsible manner with complete control retained by the user."
              </blockquote>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our vision is to build secure, contextual, and intelligent systems for
                  real-world mission environments. At icarKno™, we believe AI should
                  enhance human decision-making while ensuring privacy, security, and
                  complete user control over data.
                </p>
                <p>
                  We believe that while technology continues to evolve, its core principles
                  remain constant — accessibility, trust, security, and responsible
                  innovation. Our systems are designed to deliver structured intelligence
                  and real-time reasoning in secure on-premise and offline environments,
                  where sensitive data remains protected and never harvested.
                </p>
                <p className="font-medium text-foreground">
                  Through deep-tech research and ethical AI engineering, icarKno™ is
                  building trusted AI infrastructure for scalable and responsible adoption
                  across India and beyond.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Our Mission ───────────────────────────────────────────────────────── */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left — text */}
            <FadeUp>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Our Mission</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Responsible AI for Critical Sectors
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our mission is to enable responsible, domain-specific AI adoption across
                  industries and governments. Whether it&apos;s powering public-facing
                  governance chatbots, automating knowledge from policy documents, or
                  deploying enterprise RAG systems — we deliver AI that works on-ground,
                  at-scale, and in-context.
                </p>
                <p>
                  Our core strengths lie in NLP, Vision-Language models, and agentic
                  systems, with seamless linkages to IoT, Cybersecurity, and Blockchain
                  where required. From startups to Fortune 500s to ministries, we are
                  building the infrastructure for India&apos;s next leap in AI-driven
                  transformation.
                </p>
              </div>
            </FadeUp>
            {/* Right — image slideshow */}
            <FadeUp delay={160}>
              <ImageSlideshow images={["/assets/company/mission/Mission_Pic_2.jpeg", "/assets/company/mission/Mission_Pic_3.jpeg"]} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Innovation & Research ─────────────────────────────────────────────── */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Innovation &amp; Research Commitment
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How We Advance the Field
              </h2>
            </div>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-3">
            <FadeUp delay={0}>
              <ResearchCard
                eyebrow="Ongoing Research"
                title="Multimodal AI & Reasoning Systems"
                body="Our research focuses on improving multimodal AI, hybrid retrieval systems, knowledge graphs, and domain-specific reasoning. We are exploring better methods for contextual knowledge representation, multi-agent workflow coordination, and real-time decision-making in critical environments, covering secure edge inference, structured document understanding, and multi-input integration across text, voice, and sensors."
                gradient="from-violet-500 via-primary/70 to-primary/20"
              />
            </FadeUp>
            <FadeUp delay={100}>
              <ResearchCard
                eyebrow="Prototyping & System Evolution"
                title="Field-Tested Intelligence"
                body="We continuously improve our systems through careful testing and validation in real-world scenarios. Recent developments involve adding visual input with built-in camera systems, enabling better scene understanding, document and voice processing, and improved situational awareness. Our hardware and system upgrades steadily expand our multimodal intelligence capabilities."
                gradient="from-cyan-500 via-accent/70 to-accent/20"
              />
            </FadeUp>
            <FadeUp delay={200}>
              <ResearchCard
                eyebrow="Intellectual Property & Patents"
                title="Defensible, Scalable Technology"
                body="Our innovation relies on formal intellectual property development. We have several patent applications in progress, including improvements in multi-agent knowledge graph architectures and AI-driven semantic conflict detection systems. Our patent strategy ensures research leads to defensible, scalable technologies that strengthen long-term innovation and competitive differentiation."
                gradient="from-indigo-500 via-blue-500/70 to-blue-400/20"
              />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
