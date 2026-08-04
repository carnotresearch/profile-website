"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function FadeUp({ children, delay = 0, className = "" }: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el) }
    }, { threshold: 0.08 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible
        ? { animation: `fadeUpIn 0.6s ease ${delay}ms both` }
        : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const founders = [
  {
    name: "Prof. Brejesh Lall",
    role: "Co-Founder & CTO",
    sub: "Senior Professor · IIT Delhi",
    photo: "Brejesh Sir.jpg",
    pos: "50% 15%",
    // Notion-style colored tag
    tag: "Co-Founder",
    tagBg: "bg-blue-50",
    tagText: "text-blue-600",
    // Colored icon accent (like Notion)
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentFrom: "from-blue-500",
    accentTo: "to-blue-300",
    credentials: ["PhD, IIT Delhi", "47+ Projects", "₹70 Cr+ Research"],
    bio: "Senior Professor at IIT Delhi. Guided 13 PhD scholars across 47 research projects totalling ₹70 Cr+. Research in signal processing, deep learning, and multimodal AI.",
  },
  {
    name: "Col. (Dr.) Amit Oberoi",
    role: "Co-Founder & CEO",
    sub: "Former Senior Officer · Indian Army",
    photo: "Col. (Dr.) Amit Oberoi.jpg",
    pos: "50% 10%",
    tag: "Co-Founder",
    tagBg: "bg-slate-100",
    tagText: "text-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    accentFrom: "from-slate-500",
    accentTo: "to-slate-300",
    credentials: ["25+ Yrs Army", "ITU Study Group 12", "Cybersecurity"],
    bio: "25+ years of Indian Army leadership in IT, Cyber Security, and AI. Expert in NLP, threat intelligence, and international AI standardisation for 5G networks.",
  },
]

const coreTeam = [
  {
    name: "Dr. Kanica Sachdeva",
    role: "Head R&D & COO",
    sub: "",
    photo: "Dr. Kanica Sachdeva.jpg",
    pos: "50% 10%",
    tag: "Operations",
    tagBg: "bg-emerald-50",
    tagText: "text-emerald-700",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-300",
    credentials: [],
    bio: "Deep-tech strategist bridging AI research and execution across government, defense, and large-scale digital transformation programs.",
  },
  {
    name: "Pranav Kanire",
    role: "Product Manager",
    sub: "",
    photo: "pranav kanire.jpeg",
    pos: "50% 10%",
    tag: "Product",
    tagBg: "bg-amber-50",
    tagText: "text-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentFrom: "from-amber-400",
    accentTo: "to-amber-200",
    credentials: [],
    bio: "Leads architecture and system design for on-premise AI platforms, ensuring reliable deployment in mission-critical environments.",
  },
]

// ── Card — fixed height, horizontal layout ─────────────────────────────────────
// Fixed h-52 ensures EVERY card is the same height regardless of content.
// Photo fills the left panel completely via absolute positioning.
function PersonCard({ person }: { person: typeof founders[0] }) {
  return (
    <article className="group relative flex min-h-[13rem] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gray-200">
      {/* Notion-style colored top accent stripe */}
      <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${person.accentFrom} ${person.accentTo}`} />

      {/* Left: photo — fills full height of fixed card */}
      <div className="relative w-40 shrink-0 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${B}/assets/team/${encodeURIComponent(person.photo)}`}
          alt={person.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: person.pos }}
        />
      </div>

      {/* Right: content */}
      <div className="flex flex-1 flex-col justify-between p-5 pt-6 min-w-0">
        <div>
          {/* Notion-style colored role tag */}
          <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${person.tagBg} ${person.tagText}`}>
            {person.tag}
          </span>

          <h3 className="mt-2 font-bold leading-tight text-gray-900 text-sm sm:text-base">{person.name}</h3>
          <p className="mt-0.5 text-xs font-semibold text-gray-600">{person.role}</p>
          {person.sub && (
            <p className="mt-0.5 text-[10px] text-gray-400">{person.sub}</p>
          )}

          {/* Credential pills — founders only */}
          {person.credentials.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {person.credentials.map(c => (
                <span key={c} className="rounded-full bg-gray-50 border border-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">{c}</span>
              ))}
            </div>
          )}
        </div>

        <p className="text-[11px] leading-relaxed text-gray-400">{person.bio}</p>
      </div>
    </article>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export function TeamContent() {
  return (
    <>
      {/* ── Hero — exact same pattern as every other page ── */}
      <section className="relative overflow-hidden bg-white min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-50 blur-3xl opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                Leadership Team
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                The minds behind{" "}
                <span className="text-blue-600">icarKno™</span>
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-500">
                Professors, military scientists, and engineers from India&apos;s premier institutions,
                building secure, mission-critical AI infrastructure.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Founding Leadership — bg-gray-50 (alternates with white hero above) ── */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-10 flex items-center gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Founding Leadership</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">Co-Founders</h2>
              </div>
              <div className="ml-4 h-px flex-1 bg-gray-200" />
            </div>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2">
            {founders.map((f, i) => (
              <FadeUp key={f.name} delay={i * 100}>
                <PersonCard person={f} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Team — bg-white (alternates back) ── */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mb-10 flex items-center gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Core Team</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">Builders & Strategists</h2>
              </div>
              <div className="ml-4 h-px flex-1 bg-gray-200" />
            </div>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2">
            {coreTeam.map((m, i) => (
              <FadeUp key={m.name} delay={i * 100}>
                <PersonCard person={m} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull quote — bg-gray-50 (alternates again, same max-w-7xl) ── */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
              <Quote className="mx-auto mb-4 h-7 w-7 text-gray-300" />
              <blockquote className="text-lg font-medium italic leading-relaxed text-gray-800 sm:text-xl">
                &ldquo;We are building AI not as a feature layer, but as foundational
                infrastructure for institutions that demand security, control,
                and long-term reliability.&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-gray-200" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Prof. Brejesh Lall &amp; Col. (Dr.) Amit Oberoi</p>
                  <p className="text-xs text-gray-400 mt-0.5">Co-Founders, icarKno™</p>
                </div>
                <div className="h-px w-8 bg-gray-200" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Join CTA — standard dark navy used on every other page ── */}
      <section className="bg-[#0b2149] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400">Join the Team</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build the future of institutional AI
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Growing our team of AI researchers, engineers, and domain experts passionate
                about secure, high-impact AI for government and enterprise.
              </p>
              <div className="mt-8 flex justify-center">
                <Button variant="outline" size="lg" asChild
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40">
                  <Link href="/about">Learn About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
