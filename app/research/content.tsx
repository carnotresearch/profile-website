"use client"

import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FileText,
  Award,
  GraduationCap,
  MessageSquare,
  ScanText,
  Mic,
  FileSearch,
  Tag,
  Layers,
  Brain,
  BarChart3,
  Eye,
  ScanFace,
  MonitorPlay,
  Activity,
  Smile,
  Accessibility,
  Mountain,
  Grid3X3,
  Crosshair,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const nlpCapabilities = [
  { icon: MessageSquare, name: "Question Answering", description: "Answer domain-specific queries with citations from trusted documents.", iconBg: "bg-[#e0f2fe]", iconColor: "text-[#1d4ed8]" },
  { icon: FileText, name: "Summarization & Briefing", description: "Generate concise, actionable summaries from long reports or policies.", iconBg: "bg-[#fef3ff]", iconColor: "text-[#c11574]" },
  { icon: Mic, name: "Speech-to-Text", description: "Convert audio content into searchable transcripts.", iconBg: "bg-[#fff3c6]", iconColor: "text-[#b54708]" },
  { icon: ScanText, name: "OCR & Visual Reasoning", description: "Digitize and understand scanned or handwritten documents using OCR + VLMs.", iconBg: "bg-[#ecfdf3]", iconColor: "text-[#15803d]" },
  { icon: Tag, name: "Named Entity Recognition", description: "Extract structured information like names, locations, and policies.", iconBg: "bg-[#eff6ff]", iconColor: "text-[#1d4ed8]" },
  { icon: Layers, name: "Document Classification", description: "Automatically tag and route documents based on content and intent.", iconBg: "bg-[#f1f5f9]", iconColor: "text-[#0f172a]" },
  { icon: Brain, name: "Intent Detection", description: "Understand user goals in conversations for accurate routing.", iconBg: "bg-[#e0fdf4]", iconColor: "text-[#027a48]" },
  { icon: FileSearch, name: "Multimodal Data Fusion", description: "Integrate text, image, speech, and video for richer insights.", iconBg: "bg-[#fef9c3]", iconColor: "text-[#854d0e]" },
  { icon: BarChart3, name: "Sentiment Analysis", description: "Extract opinions and trends from social, internal, and public feedback.", iconBg: "bg-[#e5deff]", iconColor: "text-[#6d28d9]" },
]

const cvCapabilities = [
  { icon: Eye,          name: "Object Detection",       description: "Pedestrian detection, medical imaging, image search, and object counting.",                    iconBg: "bg-[#fee4e2]", iconColor: "text-[#b42318]" },
  { icon: ScanFace,     name: "Face Recognition",       description: "Retail crime prevention, facial biometrics, automated attendance.",                            iconBg: "bg-[#eff6ff]", iconColor: "text-[#1d4ed8]" },
  { icon: MonitorPlay,  name: "Video Analytics",        description: "Patient monitoring, predictive maintenance, surveillance, autonomous vehicles.",                iconBg: "bg-[#e0f2fe]", iconColor: "text-[#0369a1]" },
  { icon: Activity,     name: "Activity Recognition",   description: "Security, fitness tracking, fall detection, elderly care, event detection.",                   iconBg: "bg-[#fef3ff]", iconColor: "text-[#c11574]" },
  { icon: Smile,        name: "Emotion Recognition",    description: "Market research, e-learning, counselling, driver fatigue monitoring.",                         iconBg: "bg-[#fff3c6]", iconColor: "text-[#b54708]" },
  { icon: Accessibility,name: "Pose Estimation",        description: "Gait analysis, animation, gaming, virtual/augmented reality.",                                 iconBg: "bg-[#ecfdf3]", iconColor: "text-[#15803d]" },
  { icon: Mountain,     name: "Depth Estimation",       description: "Robotics, trajectory estimation, augmented reality, haze removal.",                            iconBg: "bg-[#e5deff]", iconColor: "text-[#6d28d9]" },
  { icon: Grid3X3,      name: "Semantic Segmentation",  description: "Bio-medical diagnosis, autonomous driving, satellite image processing.",                        iconBg: "bg-[#e0fdf4]", iconColor: "text-[#027a48]" },
  { icon: Crosshair,    name: "Object Tracking",        description: "Sports analytics, human-computer interaction, autonomous driving.",                            iconBg: "bg-[#f1f5f9]", iconColor: "text-[#0f172a]" },
]

export function ResearchContent() {
  const { tx } = useLanguage()
  const r = tx.researchPage

  return (
    <>
      {/* Hero */}
      <section className="bg-background min-h-hero-page-lg flex flex-col justify-center pt-16 pb-[7.5rem]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              {r.hero.badge}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {r.hero.heading}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {r.hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* NLP Research */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              {r.nlp.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {r.nlp.desc}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nlpCapabilities.map((cap) => (
              <div key={cap.name} className="rounded-xl border border-border bg-card p-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cap.iconBg}`}>
                  <cap.icon className={`h-5 w-5 ${cap.iconColor}`} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{cap.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Computer Vision Research */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              {r.cv.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {r.cv.desc}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cvCapabilities.map((cap) => (
              <div key={cap.name} className="rounded-xl border border-border bg-card p-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cap.iconBg}`}>
                  <cap.icon className={`h-5 w-5 ${cap.iconColor}`} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{cap.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              {r.knowledge.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              {r.knowledge.heading}
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {r.knowledge.cards.map((card, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {r.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            {r.cta.desc}
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                {r.cta.btn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
