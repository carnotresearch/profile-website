"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, ShieldCheck, BadgeCheck, Building, ChevronLeft, ChevronRight } from "lucide-react"

// basePath-aware static assets (next/image unoptimized skips basePath in export mode)
const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// ── Card geometry ──────────────────────────────────────────────────────────────
const CARD_W    = 180   // px
const CARD_H    = 210   // px
const STEP_X    = 200   // px per slot — wide spread so outer cards bleed off edges
const ROTATE_Y  = 28    // degrees per slot
const SCALE_D   = 0.04  // scale loss per slot

// ── Data ───────────────────────────────────────────────────────────────────────
const clients = [
  { id: 3, name: "NSG",                         src: `${B}/assets/clients-logos/3.webp` },
  { id: 4, name: "IIT Delhi",                   src: `${B}/assets/clients-logos/4.webp` },
  { id: 5, name: "BCG",                         src: `${B}/assets/clients-logos/5.png`  },
  { id: 6, name: "JICA",                        src: `${B}/assets/clients-logos/6.webp` },
  { id: 7, name: "FITT",                        src: `${B}/assets/clients-logos/7.png`  },
  { id: 8, name: "MSME",                        src: `${B}/assets/clients-logos/8.webp` },
  { id: 9, name: "Rashtriya Raksha University", src: `${B}/assets/clients-logos/9.png`  },
]

const certifications = [
  { icon: Award,       title: "CMMI Level 3",      detail: "Cert No. ECI/2411/0710", iconBg: "bg-amber-50", iconColor: "text-amber-600", border: "border-amber-100 hover:border-amber-300" },
  { icon: ShieldCheck, title: "ISO/IEC 27001:2022", detail: "Cert No. IN241123021",  iconBg: "bg-blue-50",  iconColor: "text-blue-600",  border: "border-blue-100 hover:border-blue-300"  },
  { icon: BadgeCheck,  title: "DPIIT Certified",    detail: "Cert No. DIPP162658",   iconBg: "bg-blue-50",  iconColor: "text-blue-600",  border: "border-blue-100 hover:border-blue-300"  },
  { icon: Building,    title: "MSME Certified",     detail: "UDYAM-DL-08-0069895",   iconBg: "bg-cyan-50",  iconColor: "text-cyan-600",  border: "border-cyan-100 hover:border-cyan-300"  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } },
      { threshold: 0.08 }
    )
    ob.observe(el); return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

// ── Curved Fan Carousel ────────────────────────────────────────────────────────
// 7 portrait cards arranged in a 3D fan arc across the full viewport width.
// Framer Motion spring physics drives smooth position transitions.
// No overflow-hidden on the stage — cards naturally bleed off viewport edges.
function CurvedCarousel() {
  const [active, setActive] = useState(0)
  const total   = clients.length
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => setActive(a => (a - 1 + total) % total), [total])
  const next = useCallback(() => setActive(a => (a + 1) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3200)
    return () => clearInterval(id)
  }, [next, paused])

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── 3D stage ──
          perspective on the parent establishes the shared 3D context.
          overflow: visible so outer cards spill to viewport edges (clipped by section). */}
      <div
        className="relative w-full"
        style={{ perspective: "1200px", height: CARD_H + 44 }}
      >
        {clients.map((client, i) => {
          // Shortest-path diff for seamless loop
          let d = i - active
          if (d > total / 2)  d -= total
          if (d < -total / 2) d += total
          const abs     = Math.abs(d)
          const isActive = d === 0

          if (abs > 3) return null   // hide cards 4+ slots away

          return (
            <motion.div
              key={client.id}
              // Static position — centered in stage, zIndex instant-updates
              style={{
                position:  "absolute",
                left:      "50%",
                top:       "50%",
                marginLeft: -CARD_W / 2,
                marginTop:  -(CARD_H + 16) / 2,
                zIndex:     10 - abs,
                cursor:     isActive ? "default" : "pointer",
              }}
              // Spring-animated transforms — this is what creates the arc effect
              animate={{
                x:       d * STEP_X,
                rotateY: d * ROTATE_Y,
                scale:   1 - abs * SCALE_D,
                opacity: abs === 3 ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
              onClick={() => !isActive && setActive(i)}
            >
              {/* ── Portrait Card ── */}
              <div
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white"
                style={{
                  width:     CARD_W,
                  height:    CARD_H,
                  border:    isActive ? "1.5px solid #93c5fd" : "1.5px solid #f1f5f9",
                  boxShadow: isActive
                    ? "0 20px 60px rgba(37,99,235,0.18), 0 4px 20px rgba(0,0,0,0.06)"
                    : "0 4px 20px rgba(0,0,0,0.07)",
                }}
              >
                {/* Logo */}
                <div className="flex flex-1 items-center justify-center px-6 pt-5 pb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    style={{ maxHeight: 90, maxWidth: 120, objectFit: "contain" }}
                  />
                </div>

                {/* Name strip */}
                <div className="flex items-center justify-center border-t border-gray-50 px-3 py-2.5">
                  <p className="text-center text-xs font-medium leading-tight text-gray-500">
                    {client.name}
                  </p>
                </div>
              </div>

              {/* Active indicator pill */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="mx-auto mt-2.5 h-1 w-8 rounded-full bg-blue-500"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* ── Navigation ── */}
      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{ height: 6, width: i === active ? 20 : 6, background: i === active ? "#2563eb" : "#d1d5db" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Active client name with crossfade */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-center text-xs font-medium text-gray-400"
        >
          {clients[active].name}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* Blue spotlight — gives carousel area a premium glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 900px 480px at 50% 48%, #eff6ff 0%, transparent 68%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Trusted By</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Organizations across India trust our work
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              From national security agencies and IIT Delhi to global consultancies and enterprise teams
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Full-width carousel — section's overflow-hidden clips the edge cards */}
      <FadeUp delay={120}>
        <CurvedCarousel />
      </FadeUp>

      {/* Certifications */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp delay={220}>
          <div className="mt-16 border-t border-gray-100 pt-10">
            <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Certifications &amp; Compliance
            </p>
            <div className="mx-auto flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className={`group flex w-full items-center gap-3 rounded-xl border ${cert.border} bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <cert.icon className={`h-5 w-5 ${cert.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">{cert.title}</p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{cert.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
