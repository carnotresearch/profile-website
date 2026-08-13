"use client"

import Link from "next/link"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  Search, Lightbulb, Bot, FileStack, MessageSquare,
  Eye, FileText, Wifi, GraduationCap, Landmark, ArrowRight,
} from "lucide-react"

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(el) } }, { threshold: 0.08 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={visible ? { animation: `fadeUpIn 0.65s ease ${delay}ms both` } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  )
}

const services = [
  {
    icon: Search,
    name: "AI Research Consulting",
    desc: "Deep-tech research strategy and advisory for government and enterprise AI initiatives.",
    iconBg: "bg-[#fee4e2]",
    iconColor: "text-[#b42318]",
  },
  {
    icon: Lightbulb,
    name: "Managed Innovation-as-a-Service",
    desc: "End-to-end innovation lifecycle management, from ideation to IP development.",
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
  },
  {
    icon: Bot,
    name: "Custom LLM & GenAI Development",
    desc: "Tailored large language models and generative AI systems for specialized domains.",
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    icon: FileStack,
    name: "Multimodal Data Processing",
    desc: "Ingestion and analysis pipelines for text, audio, video, images, and structured data.",
    iconBg: "bg-[#e0f4ff]",
    iconColor: "text-[#026aa2]",
  },
  {
    icon: MessageSquare,
    name: "Conversational AI & Agentic Systems",
    desc: "Intelligent chatbots and autonomous AI agents for enterprise workflows.",
    iconBg: "bg-[#f3e8ff]",
    iconColor: "text-[#7e22ce]",
  },
  {
    icon: Eye,
    name: "Computer Vision Solutions",
    desc: "Object detection, tracking, and visual analysis systems for real-world deployments.",
    iconBg: "bg-[#e0fdf4]",
    iconColor: "text-[#027a48]",
  },
  {
    icon: FileText,
    name: "NLP & Document Intelligence",
    desc: "Automated document understanding, extraction, and classification at scale.",
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
  {
    icon: Wifi,
    name: "Edge AI & IoT Integration",
    desc: "AI inference at the edge: low-latency, low-power, and fully offline-capable.",
    iconBg: "bg-[#f1f5f9]",
    iconColor: "text-[#334155]",
  },
  {
    icon: GraduationCap,
    name: "Tech Skilling & Capability Building",
    desc: "Training programmes to upskill institutional teams on AI tools and workflows.",
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    icon: Landmark,
    name: "R&D for Public Sector & e-Governance",
    desc: "Applied AI research for government modernisation, public services, and policy.",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#1d4ed8]",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a57eb]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Research, development &amp; deployment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From consulting to fully deployed AI systems: end-to-end capability
              across the AI lifecycle.
            </p>
          </div>
        </FadeUp>

        {/* 2-col service grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <FadeUp key={service.name} delay={Math.floor(i / 2) * 80}>
              <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-[#1a57eb]/20 hover:bg-secondary/30 hover:shadow-sm">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${service.iconBg} transition-transform duration-200 group-hover:scale-105`}
                >
                  <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{service.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Footer link */}
        <FadeUp delay={400}>
          <div className="mt-10 text-center">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a57eb] hover:underline"
            >
              View all solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
