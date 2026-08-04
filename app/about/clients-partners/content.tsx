"use client"

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Handshake, FlaskConical, ChevronLeft, ChevronRight, ShieldCheck, Rocket, Users } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </div>
  )
}

// ── Card geometry ──────────────────────────────────────────────────────────────
const CARD_W   = 180
const CARD_H   = 210
const STEP_X   = 200
const ROTATE_Y = 28
const SCALE_D  = 0.04

// ── Client data ────────────────────────────────────────────────────────────────
const clientImages = [
  { id: 3, name: "NSG",                        src: `${B}/assets/clients-logos/3.webp` },
  { id: 4, name: "IIT Delhi",                  src: `${B}/assets/clients-logos/4.webp` },
  { id: 5, name: "JICA",                       src: `${B}/assets/clients-logos/5.png`  },
  { id: 6, name: "BCG",                        src: `${B}/assets/clients-logos/6.webp` },
  { id: 7, name: "FITT",                       src: `${B}/assets/clients-logos/7.png`  },
  { id: 8, name: "MSME",                       src: `${B}/assets/clients-logos/8.webp` },
  { id: 9, name: "Rashtriya Raksha University", src: `${B}/assets/clients-logos/9.png`  },
]

// ── Curved Fan Carousel ────────────────────────────────────────────────────────
function CurvedCarousel() {
  const [active, setActive] = useState(0)
  const total = clientImages.length
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
      <div
        className="relative w-full"
        style={{ perspective: "1200px", height: CARD_H + 44 }}
      >
        {clientImages.map((client, i) => {
          let d = i - active
          if (d > total / 2)  d -= total
          if (d < -total / 2) d += total
          const abs      = Math.abs(d)
          const isActive = d === 0
          if (abs > 3) return null
          return (
            <motion.div
              key={client.id}
              style={{
                position:   "absolute",
                left:       "50%",
                top:        "50%",
                marginLeft: -CARD_W / 2,
                marginTop:  -(CARD_H + 16) / 2,
                zIndex:     10 - abs,
                cursor:     isActive ? "default" : "pointer",
              }}
              animate={{
                x:       d * STEP_X,
                rotateY: d * ROTATE_Y,
                scale:   1 - abs * SCALE_D,
                opacity: abs === 3 ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 38 }}
              onClick={() => !isActive && setActive(i)}
            >
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
                <div className="flex flex-1 items-center justify-center px-6 pt-5 pb-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    style={{ maxHeight: 90, maxWidth: 120, objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center justify-center border-t border-gray-50 px-3 py-2.5">
                  <p className="text-center text-xs font-medium leading-tight text-gray-500">
                    {client.name}
                  </p>
                </div>
              </div>
              {isActive && (
                <motion.div
                  layoutId="activePillClients"
                  className="mx-auto mt-2.5 h-1 w-8 rounded-full bg-blue-500"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {clientImages.map((_, i) => (
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

      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="mt-3 text-center text-xs font-medium text-gray-400"
        >
          {clientImages[active].name}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

// ── Why partner data ───────────────────────────────────────────────────────────
const whyPartner = [
  {
    icon: FlaskConical,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Research Translated to Reality",
    body: "We translate cutting-edge AI research into secure, real-world applications. Our strong academic foundation and practical deployment experience allow us to design systems that work reliably in complex, high-stakes situations.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Security-First Deployments",
    body: "We build on-premise, air-gapped AI setups tailored to specific operational needs, ensuring data protection, continuity, and seamless integration. From strategy to engineering to implementation, we deliver complete solutions.",
  },
  {
    icon: Users,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Long-Term Partnership",
    body: "Beyond technology, we serve as long-term partners. We work closely with institutions, leadership teams, and field operators to ensure every system is scalable, aligned with mission goals, and built for measurable impact.",
  },
]

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "icarKno seamlessly managed real-time queries during our robotics competition and greatly improved the participant experience.",
    name: "Piyush Prasad",
    role: "Head, Education & Training",
    org: "IHFC",
    cardBg: "bg-blue-50/60",
    photoBg: "bg-blue-100",
    orgStyle: "bg-white/90 text-blue-600",
    nameStyle: "text-blue-900",
    gradientFrom: "from-blue-900/70",
    imgPos: "object-[center_0%]",
    avatar: `${B}/assets/testimonials/piyush%20prasad.png`,
  },
  {
    quote: "SAATHI impressed us with its seamless multilingual travel assistance and user-centric design, showcasing strong potential for Delhi's public transport ecosystem.",
    name: "Rhea Kapoor",
    role: "Project Leader",
    org: "BCG",
    cardBg: "bg-amber-50/60",
    photoBg: "bg-amber-100",
    orgStyle: "bg-white/90 text-amber-700",
    nameStyle: "text-amber-900",
    gradientFrom: "from-amber-900/70",
    imgPos: "object-top",
    avatar: `${B}/assets/testimonials/Rhea%20Kapoor%2C%20Project%20Leader%2C%20BCG%20.png`,
  },
  {
    quote: "Carnot's AI platform brings C-DOT a secure, on-premise intelligent assistant that strengthens nationwide disaster early warning, alerts, and operational workflows.",
    name: "Dr. Pankaj Kumar Dalela",
    role: "Director",
    org: "C-DOT",
    cardBg: "bg-emerald-50/60",
    photoBg: "bg-emerald-100",
    orgStyle: "bg-white/90 text-emerald-700",
    nameStyle: "text-emerald-900",
    gradientFrom: "from-emerald-900/70",
    imgPos: "object-top",
    avatar: `${B}/assets/testimonials/Dr%20Pankaj%20Kumar%20Dalela%2C%20Director%2C%20CDOT%20.png`,
  },
  {
    quote: "The AI system developed by Carnot significantly enhanced our ability to analyse IED intelligence with speed, accuracy, and complete on-premise security.",
    name: "Brig N. Hari",
    role: "DIG Command",
    org: "NSG",
    cardBg: "bg-violet-50/60",
    photoBg: "bg-violet-100",
    orgStyle: "bg-white/90 text-violet-700",
    nameStyle: "text-violet-900",
    gradientFrom: "from-violet-900/70",
    imgPos: "object-top",
    avatar: `${B}/assets/testimonials/Brig%20N.%20Hari%2C%20DIG%20Command%2C%20NSG%20.png`,
  },
]

// ── Sectors ────────────────────────────────────────────────────────────────────
const sectors = [
  {
    icon: Building2,
    title: "Government & Defense",
    description: "Secure AI systems for ministries, defense organizations, and public-sector institutions requiring data sovereignty and mission-critical reliability.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Handshake,
    title: "Enterprise & Industry",
    description: "On-premise AI infrastructure for large enterprises, regulated industries, and organizations with strict compliance requirements.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Rocket,
    title: "Research & Innovation",
    description: "Collaborative partnerships with leading academic institutions and R&D bodies, translating cutting-edge research into deployable, real-world systems.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
]

// ── Page ───────────────────────────────────────────────────────────────────────
export function ClientsPartnersContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-50 blur-3xl opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                Clients &amp; Partners
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Trusted by National Institutions &amp; Global Organizations
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-500">
                icarKno™ works with top public institutions, global consulting firms, and
                technology partners to create and implement secure, mission-critical AI systems
                across governance, defense, disaster response, telecommunications, and digital
                public infrastructure.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 3D Carousel ── */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 900px 480px at 50% 48%, #eff6ff 0%, transparent 68%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Our Clients</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted Sources</h2>
              <p className="mt-3 text-sm text-gray-500">From government agencies to global consultancies</p>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={150}>
          <CurvedCarousel />
        </FadeUp>
      </section>

      {/* ── About / Overview ── */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">About Our Partnerships</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">How We Collaborate</h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-sm space-y-5 text-base leading-relaxed text-gray-500">
              <p>
                Through our collaborations, we combine in-depth academic research, practical
                operational knowledge, and strong engineering to deliver AI systems that function
                well under pressure. Our partnerships span strategic advisory, full-stack deployment,
                and ongoing operational support.
              </p>
              <p>
                From working with defense organizations on classified intelligence analysis, to
                supporting public transit agencies with multilingual AI assistants, each engagement
                is shaped by the specific mission environment and constraints of the organization
                we work with.
              </p>
              <p className="font-semibold text-gray-800">
                Every solution we deliver is secure, scalable, and designed for real-world impact.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Sectors We Serve</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Building AI Across Critical Sectors</h2>
            </div>
          </FadeUp>
          <div className="grid gap-8 sm:grid-cols-3">
            {sectors.map((sector, i) => (
              <FadeUp key={sector.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-100">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-100" />
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${sector.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <sector.icon className={`h-6 w-6 ${sector.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{sector.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{sector.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Organizations Partner with Us ── */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Why Partner with Us</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Why Organizations Choose icarKno™
              </h2>
            </div>
          </FadeUp>
          <div className="grid gap-6 sm:grid-cols-3">
            {whyPartner.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-100">
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Testimonials</p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Our Partners Say</h2>
              <p className="mt-3 text-sm text-gray-500">Voices from the institutions and organizations we work with</p>
            </div>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 80}>
                <div className={`group flex overflow-hidden rounded-2xl border border-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.cardBg}`} style={{ minHeight: 210 }}>

                  {/* Left: full-height photo panel */}
                  <div className={`relative w-36 shrink-0 overflow-hidden ${t.photoBg}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={`absolute inset-0 h-full w-full object-cover ${t.imgPos} transition-transform duration-500 group-hover:scale-105`}
                    />
                    {/* Bottom fade for name/org overlay */}
                    <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${t.gradientFrom} to-transparent`} />
                    <div className="absolute bottom-0 inset-x-0 p-3">
                      <p className="text-xs font-semibold text-white leading-tight">{t.name}</p>
                      <span className={`mt-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${t.orgStyle}`}>
                        {t.org}
                      </span>
                    </div>
                  </div>

                  {/* Right: quote + role */}
                  <div className="flex flex-col justify-between p-6">
                    <p className="text-sm leading-relaxed text-gray-700 flex-1">
                      <span className="mr-0.5 font-serif text-3xl leading-none align-top text-gray-300">&ldquo;</span>
                      {t.quote}
                      <span className="ml-0.5 font-serif text-3xl leading-none align-bottom text-gray-300">&rdquo;</span>
                    </p>
                    <div className="mt-5 pt-4 border-t border-black/5">
                      <p className={`text-xs font-medium ${t.nameStyle}`}>{t.role}</p>
                    </div>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
