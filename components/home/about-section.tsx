"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, FlaskConical, Cpu, Lightbulb } from "lucide-react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const images = [
  { src: `${B}/assets/company/who-we-are/first%20.jpeg`, alt: "icarKno™" },
  { src: `${B}/assets/company/who-we-are/second.jpg`, alt: "icarKno™ lab work" },
  { src: `${B}/assets/company/who-we-are/third.jpeg`, alt: "icarKno™ team" },
  { src: `${B}/assets/company/who-we-are/forth.jpg`, alt: "icarKno™" },
]

const pillars = [
  {
    icon: FlaskConical,
    title: "Research-Led Development",
    desc: "Every product originates from peer-reviewed research at IIT Delhi labs.",
    iconColor: "text-orange-500",
  },
  {
    icon: Cpu,
    title: "Algorithmic-Level Solutions",
    desc: "We engineer at the algorithm layer, not prompt wrappers or API glue.",
    iconColor: "text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Patented Innovations",
    desc: "Proprietary IP underpins our systems, delivering defensible technical moats.",
    iconColor: "text-emerald-600",
  },
]

export function AboutSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [inViewport, setInViewport] = useState(false)

  // Only cycle images while the section is on-screen. Running a re-render
  // every 4s while the user is scrolling somewhere else forces unnecessary
  // paints and competes with scroll compositing on mobile.
  useEffect(() => {
    if (!inViewport) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [inViewport])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => {
        setInViewport(e.isIntersecting)
        if (e.isIntersecting) setVisible(true)  // one-way flag for reveal
      },
      { threshold: 0.1 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="cv-auto bg-background pt-14 pb-8 sm:pt-20 sm:pb-8 lg:pt-28 lg:pb-10"
      style={
        visible
          ? { animation: "fadeUpIn 0.65s ease both" }
          : { opacity: 0, transform: "translateY(20px)" }
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left — image slideshow */}
          <div className="relative order-2 lg:order-1">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-50/50 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              {images.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      height: 6,
                      width: i === current ? 20 : 6,
                      background: i === current ? "white" : "rgba(255,255,255,0.45)",
                    }}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
              Our Story
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From IIT Delhi labs to{" "}
              <span className="text-teal-700">real-world AI deployment</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
              icarKno™ was founded by IIT Delhi professors and scientists who saw a critical
              gap: India&apos;s government, defense, and enterprise organizations needed AI that
              worked entirely inside their own walls: secure, offline, and fully under their control.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
              We don&apos;t just advise. We build and ship. Our products are operational
              today: icarKno™ runs inside government networks, BharGati™ AI coaches
              elite athletes, and SAATHI guides Delhi commuters in 22+ languages.
            </p>

            {/* Differentiator pillars */}
            <div className="mt-6 flex flex-col divide-y divide-gray-100">
              {pillars.map(({ icon: Icon, title, desc, iconColor }) => (
                <div key={title} className="flex items-start gap-3 py-3.5">
                  <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about/team"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
