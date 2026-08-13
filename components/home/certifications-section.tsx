"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { Award, ShieldCheck, BadgeCheck, Building } from "lucide-react"

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

const certifications = [
  {
    icon: Award,
    title: "CMMI Maturity Level 3",
    detail: "Certificate No: ECI/2411/0710",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
    hoverBorder: "hover:border-amber-200",
    hoverShadow: "hover:shadow-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "ISO/IEC 27001:2022",
    detail: "Certificate No: IN241123021",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
    hoverBorder: "hover:border-blue-200",
    hoverShadow: "hover:shadow-blue-50",
  },
  {
    icon: BadgeCheck,
    title: "DPIIT Certificate",
    detail: "Certificate No: DIPP162658",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
    hoverBorder: "hover:border-pink-200",
    hoverShadow: "hover:shadow-pink-50",
  },
  {
    icon: Building,
    title: "MSME Certificate",
    detail: "Certificate No: UDYAM-DL-08-0069895",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
    hoverBorder: "hover:border-green-200",
    hoverShadow: "hover:shadow-green-50",
  },
]

export function CertificationsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a57eb]">
              Certifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Globally recognized standards
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Quality, security, and process maturity backed by internationally recognized
              certifications for mission-critical deployments.
            </p>
          </div>
        </FadeUp>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <FadeUp key={cert.title} delay={i * 90}>
              <div
                className={`group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${cert.hoverBorder}`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${cert.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <cert.icon className={`h-8 w-8 ${cert.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{cert.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
