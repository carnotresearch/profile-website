"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  Building,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

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


const certifications = [
  {
    icon: Award,
    title: "CMMI Maturity Level 3",
    detail: "Certificate No: ECI/2411/0710",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-200",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    detail: "Certificate No: IN241123021",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-200",
  },
  {
    icon: BadgeCheck,
    title: "DPIIT Certificate",
    detail: "Certificate No: DIPP162658",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverBorder: "hover:border-pink-200",
  },
  {
    icon: Building,
    title: "MSME Certificate",
    detail: "Certificate No: UDYAM-DL-08-0069895",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    hoverBorder: "hover:border-green-200",
  },
]

const clients = [
  "FITT IIT Delhi",
  "MSME",
  "Rashtriya Raksha University",
  "NSG",
  "IIT Delhi",
  "Boston Consulting Group",
  "JICA",
]

export function CompanyContent() {
  const { tx } = useLanguage()
  const c = tx.companyPage

  return (
    <>
      {/* ── Certifications ───────────────────────────────────────── */}
      <section id="certifications" className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                {c.certifications.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {c.certifications.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {c.certifications.desc}
              </p>
            </div>
          </FadeUp>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.title} delay={i * 90}>
                <div
                  className={`group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${cert.hoverBorder}`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${cert.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <cert.icon className={`h-7 w-7 ${cert.iconColor}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients & Partners ───────────────────────────────────── */}
      <section id="partners" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center mb-14">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">
                {c.partners.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {c.partners.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {c.partners.desc}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/25 hover:bg-secondary/50 hover:text-foreground cursor-default"
                >
                  {client}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

    </>
  )
}
