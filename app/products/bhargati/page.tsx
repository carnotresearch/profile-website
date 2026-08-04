import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Crosshair,
  FileText,
  Gauge,
  LayoutDashboard,
  Scale,
  Shield,
  Video,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "BharGati™ | Movement & Performance Intelligence | icarKno™",
  description:
    "AI-driven movement and performance intelligence using computer vision and biomechanical analytics. Lab-quality insights in real-world sports science and rehabilitation settings.",
  openGraph: {
    title: "BharGati™ - AI-Driven Movement and Performance Intelligence",
    description:
      "Analyze human movement, assess biomechanics, and provide performance feedback using computer vision and smart modeling.",
    url: "https://carnotresearch.com/products/bhargati",
  },
  alternates: { canonical: "https://carnotresearch.com/products/bhargati" },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BharGati™ AI",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "SportsAnalytics",
  operatingSystem: "Linux, Windows, On-Premise",
  description:
    "AI-driven movement and performance intelligence platform using computer vision to analyse human biomechanics from standard video. No wearables or lab setup required.",
  url: "https://carnotresearch.com/products/bhargati",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://carnotresearch.com/products/bhargati",
  },
  featureList: [
    "Vision-based pose and gait analysis from standard cameras",
    "Biomechanical metrics: joint angles, posture, symmetry",
    "Real-time AI-driven performance feedback",
    "Sports performance analysis and injury prevention",
    "Session-to-session progress tracking",
    "No wearables or specialised sensors needed",
  ],
  provider: {
    "@type": "Organization",
    name: "icarKno™",
    url: "https://carnotresearch.com",
    "@id": "https://carnotresearch.com/#organization",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://carnotresearch.com/contact",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carnotresearch.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://carnotresearch.com/products" },
    { "@type": "ListItem", position: 3, name: "BharGati™", item: "https://carnotresearch.com/products/bhargati" },
  ],
}

const capabilityHighlights = [
  { icon: Video,    label: "Vision-based capture",   bg: "#dbeafe", color: "#2563eb" },
  { icon: Activity, label: "Biomechanics analytics", bg: "#dcfce7", color: "#16a34a" },
  { icon: Gauge,    label: "Real-time feedback",     bg: "#fef3c7", color: "#d97706" },
  { icon: Shield,   label: "No wearables needed",    bg: "#fee2e2", color: "#dc2626" },
]

const problems = [
  "Expensive and requires a lot of hardware.",
  "Restricted to lab environments.",
  "Dependent on specialized sensors or markers.",
  "Difficult to use in real-world training and field conditions.",
]

const coreCapabilities = [
  {
    icon: Video,
    title: "Vision-Driven Movement Capture",
    description: "Extracts motion data from standard video feeds with high precision.",
    bg: "#dbeafe", color: "#2563eb",
  },
  {
    icon: Scale,
    title: "Biomechanical Metrics & Analytics",
    description:
      "Provides detailed performance metrics, including joint angles, posture assessments, gait parameters, and symmetry indices.",
    bg: "#ede9fe", color: "#7c3aed",
  },
  {
    icon: Activity,
    title: "Sports Performance Insight",
    description:
      "Helps evaluate athletic performance, refine techniques, and develop injury prevention strategies.",
    bg: "#dcfce7", color: "#16a34a",
  },
  {
    icon: FileText,
    title: "Actionable Visual Reports",
    description:
      "Offers dashboards with annotated movement insights, trend graphs, and easy-to-understand summaries.",
    bg: "#fef3c7", color: "#d97706",
  },
  {
    icon: LayoutDashboard,
    title: "Scalable Deployment",
    description:
      "Works with standard camera systems, making it suitable for field training, clinics, and labs.",
    bg: "#cffafe", color: "#0891b2",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Session-to-session comparison and analytics to quantify improvement and reduce guesswork.",
    bg: "#ffedd5", color: "#ea580c",
  },
]

const comparisonRows = [
  { traditional: "Requires specialized sensors", bhargati: "Vision-based, no wearables" },
  { traditional: "Lab-only environments", bhargati: "Field & real-world capable" },
  { traditional: "High setup costs", bhargati: "Camera-agnostic and scalable" },
  { traditional: "Limited real-time feedback", bhargati: "Real-time AI-driven insights" },
  { traditional: "Manual interpretation", bhargati: "Automated metrics & visual outputs" },
]

const faqs = [
  {
    q: "How can BharGati™ help me improve my performance?",
    a: "BharGati™ analyzes your movements in real time and gives instant feedback on your technique, helping you train smarter, correct mistakes faster, and improve performance more efficiently.",
  },
  {
    q: "What makes BharGati™ different from normal training apps?",
    a: "Unlike regular fitness apps, BharGati™ uses advanced computer vision to understand your body movement from video and provide accurate, AI-powered insights instead of generic workout suggestions.",
  },
  {
    q: "Do I need professional equipment to use BharGati™?",
    a: "No. BharGati™ works with standard video input and does not require wearable sensors or expensive hardware, making it easy to use anywhere.",
  },
  {
    q: "Can BharGati™ really track my body movement accurately?",
    a: "Yes. BharGati™ uses advanced pose estimation technology to track joints and body positions with high precision, allowing detailed analysis of posture, motion, and technique.",
  },
  {
    q: "Is BharGati™ only for professional athletes?",
    a: "Not at all. BharGati™ is designed for everyone from beginners and fitness enthusiasts to coaches and professional athletes who want deeper performance insights.",
  },
  {
    q: "How does BharGati™ help prevent injuries?",
    a: "By identifying incorrect posture, imbalance, or inefficient movement, BharGati™ helps you correct your form early, reducing the risk of strain and injury during training.",
  },
  {
    q: "Can I track my progress over time?",
    a: "Yes. BharGati™ stores your performance data and provides detailed analytics so you can see improvements, compare sessions, and stay motivated.",
  },
  {
    q: "How do I get started with BharGati™?",
    a: "You can sign up on the platform, upload your training video, and start receiving AI-powered motion analysis and performance feedback right away.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
}

function BharGatiMockDashboard() {
  return (
    <div className="w-full max-w-[720px] rounded-2xl border border-border bg-card shadow-xl">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-[#ecfdf3] flex items-center justify-center">
            <Crosshair className="h-5 w-5 text-[#15803d]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">BharGati™ Console</p>
            <p className="text-xs text-muted-foreground">Movement Intelligence Dashboard</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
            Session: Sprint Drill
          </span>
          <span className="inline-flex items-center rounded-full bg-[#ecfdf3] px-2.5 py-1 text-xs font-medium text-[#15803d] ring-1 ring-[#bbf7d0]">
            Live
          </span>
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-3">
        {/* Video/pose feed */}
        <div className="lg:col-span-2 rounded-xl border border-border bg-background overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Camera Feed
            </p>
            <p className="text-xs text-muted-foreground">Pose + joint tracking</p>
          </div>
          <div className="relative aspect-[16/10] bg-gradient-to-br from-foreground/5 via-foreground/0 to-foreground/5">
            {/* grid */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* pose overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[70%] w-[40%]">
                {[
                  { x: "50%", y: "10%" },
                  { x: "45%", y: "22%" },
                  { x: "55%", y: "22%" },
                  { x: "50%", y: "34%" },
                  { x: "40%", y: "42%" },
                  { x: "60%", y: "42%" },
                  { x: "38%", y: "58%" },
                  { x: "62%", y: "58%" },
                  { x: "45%", y: "70%" },
                  { x: "55%", y: "70%" },
                  { x: "42%", y: "88%" },
                  { x: "58%", y: "88%" },
                ].map((p, i) => (
                  <span
                    key={i}
                    className="absolute h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
                    style={{ left: p.x, top: p.y, transform: "translate(-50%,-50%)" }}
                  />
                ))}
              </div>
            </div>
            {/* bottom stats strip */}
            <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/70 backdrop-blur px-4 py-3">
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <p className="text-muted-foreground">Cadence</p>
                  <p className="font-semibold text-foreground">176 spm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Symmetry</p>
                  <p className="font-semibold text-foreground">96%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Knee angle</p>
                  <p className="font-semibold text-foreground">42°</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="rounded-xl border border-border bg-background">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Key Metrics
            </p>
          </div>
          <div className="p-4 space-y-3">
            {[
              { label: "Posture score", value: "8.6/10" },
              { label: "Gait stability", value: "High" },
              { label: "Hip symmetry", value: "94%" },
              { label: "Impact load", value: "Moderate" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-2"
              >
                <span className="text-xs text-muted-foreground">{m.label}</span>
                <span className="text-xs font-semibold text-foreground">{m.value}</span>
              </div>
            ))}

            <div className="mt-4 rounded-lg border border-border bg-card p-3">
              <p className="text-xs font-semibold text-foreground">Insight</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Stride asymmetry appears after minute 6. Recommend cadence cueing and
                hip stabilization work.
              </p>
            </div>
          </div>
        </div>

        {/* Trend chart */}
        <div className="lg:col-span-3 rounded-xl border border-border bg-background overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Trend
            </p>
            <p className="text-xs text-muted-foreground">Symmetry index (last 10 mins)</p>
          </div>
          <div className="p-4">
            <div className="h-28 rounded-lg bg-gradient-to-r from-[#22c55e]/10 via-[#22c55e]/5 to-transparent border border-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-end gap-1.5 px-3 pb-3">
                {[72, 76, 79, 81, 85, 84, 86, 89, 91, 90, 92, 94].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-[#15803d]/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>0:00</span>
              <span>10:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export default function BharGatiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(21,128,61,0.06) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#22c55e]/6 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#10b981]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  BharGati™
                </span>
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                AI-Driven Movement and Performance Intelligence
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                An AI platform designed to change how we analyze human movement,
                assess biomechanics, and provide performance feedback using computer
                vision and smart modeling.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Created for sports science, rehabilitation, motion research, and
                precise analytics, BharGati™ delivers lab-quality insights into
                real-world settings.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://bhargati.ai/" target="_blank" rel="noopener noreferrer">
                    Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Brochure</Link>
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#22c55e]/12 via-[#10b981]/6 to-transparent blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${B}/assets/products/homepage/homepage_Bhargati.png`}
                alt="BharGati™ AI in action - athletic movement analysis"
                className="relative w-full max-w-[560px] rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is BharGati */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What is BharGati™?
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                BharGati™ AI is an AI-powered system for movement analysis and
                performance intelligence. It captures, interprets, and quantifies
                human motion using computer vision, deep learning, and biomechanical
                modeling.
              </p>
              <p>
                It improves athletic assessment, rehabilitation tracking, and
                real-time movement interpretation by providing accurate metrics and
                useful insights directly from visual data inputs. There is no need
                for wearable sensors or external tracking systems.
              </p>
              <p className="font-medium text-foreground">
                Whether you’re a sports scientist, coach, physical therapist, or
                research professional, BharGati™ is designed to turn movement into
                intelligence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilityHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: item.bg }}>
                    <item.icon className="h-4 w-4" style={{ color: item.color }} />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem BharGati solves */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            The Problem BharGati™ Solves
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Traditional motion analysis systems are often:
          </p>

          <ul className="mx-auto mt-10 max-w-2xl space-y-3">
            {problems.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-3 w-3 text-destructive" />
                </span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            This limits access to high-quality biomechanical insights for many
            practitioners, athletes, and clinics.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center text-lg font-semibold text-foreground">
            BharGati™ brings precise assessment out of the lab and into practice.
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-center text-base leading-relaxed text-muted-foreground">
            BharGati™ addresses this by offering camera-based AI motion analysis that
            is affordable, scalable, and usable in real training or clinical settings.
          </p>
        </div>
      </section>

      {/* Core capabilities (2x3 grid) */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Core Capabilities
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: cap.bg }}>
                  <cap.icon className="h-5 w-5" style={{ color: cap.color }} />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference table */}
      <section className="cv-auto bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What Sets BharGati™ Apart
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-2 divide-x divide-border">
              <div className="bg-muted/50 px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  Traditional Motion Analysis
                </h3>
              </div>
              <div className="bg-[#ecfdf3] px-3 py-4 text-center sm:px-6">
                <h3 className="text-sm font-semibold text-[#15803d] sm:text-base">BharGati™ AI</h3>
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-border border-t border-border"
              >
                <div className="px-3 py-3 text-xs text-muted-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.traditional}
                </div>
                <div className="bg-card/50 px-3 py-3 text-xs text-foreground sm:px-6 sm:py-4 sm:text-sm">
                  {row.bhargati}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <a href="https://bhargati.ai/" target="_blank" rel="noopener noreferrer">
                Talk to our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

