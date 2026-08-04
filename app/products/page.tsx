import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Brain, Route, MessageCircle, FileText, Server, Globe, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Products | icarKno™, BharGati™ AI, SAATHI | icarKno™",
  description:
    "Explore icarKno™'s enterprise-grade AI products: icarKno™ (enterprise knowledge RAG), BharGati™ AI (transport analytics), and SAATHI (multilingual assistant). Secure on-premise GenAI, NLP, and Computer Vision platforms for government and enterprise.",
  keywords: [
    "enterprise AI products",
    "generative AI platform",
    "RAG platform",
    "transport analytics",
    "multilingual AI assistant",
    "computer vision",
    "NLP platform India",
  ],
  openGraph: {
    title: "AI Products - icarKno™",
    description: "Production-grade AI products for government and enterprise",
    url: "https://carnotresearch.com/products",
  },
  alternates: { canonical: "https://carnotresearch.com/products" },
}

const products = [
  {
    id: "icarkno",
    name: "icarKno™",
    tagline: "Enterprise Knowledge GenAI Platform",
    pageHref: "/products/icarkno",
    demoUrl: "https://iknow.carnotresearch.com/",
    description:
      "icarKno™ is a context-aware conversational AI platform designed for enterprise knowledge management. It ingests multimodal data, including PDFs, web pages, YouTube videos, and scanned documents, and enables LLM-based Retrieval-Augmented Generation (RAG) with verifiable citations.",
    features: [
      "Multimodal data ingestion (PDFs, web, YouTube, scanned docs)",
      "LLM-based RAG with verifiable citations",
      "Multi-domain expertise integration",
      "Agentic workflows for governance and enterprise",
      "On-premise deployment with complete data sovereignty",
      "VLM integration for visual reasoning and OCR-based tasks",
    ],
    icon: Brain,
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
  },
  {
    id: "bhargati",
    name: "BharGati™ AI",
    tagline: "Movement & Performance Intelligence",
    pageHref: "/products/bhargati",
    demoUrl: "https://bhargati.ai/",
    description:
      "BharGati™ AI is an AI-driven movement and performance intelligence platform that uses computer vision to analyze human biomechanics from standard video. No wearables or specialized sensors required. Built for sports science, coaching, and rehabilitation.",
    features: [
      "Vision-based movement capture from standard cameras",
      "Biomechanical metrics: joint angles, posture, gait, symmetry",
      "Real-time AI-driven performance feedback",
      "Sports performance analysis and injury prevention",
      "Actionable dashboards with annotated movement insights",
      "Session-to-session progress tracking",
    ],
    icon: Route,
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
  },
  {
    id: "saathi",
    name: "SAATHI",
    tagline: "Delhi Public Transport AI Assistant",
    description:
      "SAATHI is a hyper-personalized, multilingual AI agent and award-winner of the Transport Stack Open Innovation Challenge (JICA–BCG–FITT IIT Delhi). It serves as your Delhi Public Transport Assistant, helping commuters plan journeys, check metro and bus schedules, fares, and get emergency helpline numbers via voice or text in any language.",
    features: [
      "Journey planning via metro, bus & multi-modal routes",
      "Metro station info: accessibility, facilities & timings",
      "Bus & metro fares, cards, and schedule queries",
      "Voice messages: ask by speaking, receive audio responses",
      "22+ Indian languages plus foreign language support",
      "Emergency helpline access and lost & found assistance",
    ],
    pageHref: "/products/saathi",
    demoUrl: "https://bot.carnotresearch.com/",
    icon: MessageCircle,
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
  },
]

const gemProducts = [
  {
    name: "Meeting Summarizer",
    description:
      "On-premise AI-powered meeting summarization tool that captures and summarizes key meeting insights with AI-powered transcription and context tagging.",
    icon: FileText,
    iconBg: "bg-[#e0f2fe]",
    iconColor: "text-[#1d4ed8]",
    href: "/products/gem/meeting-summarizer",
    gemHref: "https://mkp.gem.gov.in/business-intelligence-data-analysis-software-v2/meeting-summarizer/p-5116877-3723073004-cat.html#variant_id=5116877-3723073004",
  },
  {
    name: "On-Premise Knowledge Agent",
    description:
      "A secure on-premise AI agent designed to organize enterprise knowledge and answer complex data queries instantly.",
    icon: Server,
    iconBg: "bg-[#ecfdf3]",
    iconColor: "text-[#15803d]",
    href: "/products/gem/onpremise-knowledge-agent",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/premise-knowledge-agent/p-5116877-4816507327-cat.html#variant_id=5116877-4816507327",
  },
  {
    name: "Multilingual Chatbot",
    description:
      "Engage users across languages with an AI chatbot that supports natural multilingual conversations and sentiment analysis.",
    icon: Globe,
    iconBg: "bg-[#fef3ff]",
    iconColor: "text-[#c11574]",
    href: "/products/gem/multilingual-chatbot",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/multilingual-chatbot/p-5116877-52065673885-cat.html#variant_id=5116877-52065673885",
  },
  {
    name: "Generative AI Conversational Agent",
    description:
      "A next-gen conversational AI that crafts human-like responses, enabling smart automation for business interactions.",
    icon: Bot,
    iconBg: "bg-[#fff3c6]",
    iconColor: "text-[#b54708]",
    href: "/products/gem/genai-conversational-agent",
    gemHref: "https://mkp.gem.gov.in/artificial-intelligence-big-data-analytics-ver-2-0/generative-ai-based-conversational-agent/p-5116877-74185814411-cat.html#variant_id=5116877-74185814411",
  },
  {
    name: "IDMS",
    description:
      "Intelligent Data Management System for business intelligence and data analysis, transforming enterprise data into actionable insights.",
    icon: Brain,
    iconBg: "bg-[#f0fdf4]",
    iconColor: "text-[#166534]",
    href: "/products/gem/business-intelligence",
    gemHref: "https://mkp.gem.gov.in/business-intelligence-data-analysis-software-v2/intelligent-data-management-system/p-5116877-42769598617-cat.html#variant_id=5116877-42769598617",
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background min-h-hero-page-lg flex flex-col justify-center pt-14 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wider text-accent uppercase">
              Products
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Engineered Intelligence Platforms
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Enterprise-grade AI systems powering intelligent decision-making
              across industries. All products are available for secure
              on-premise deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-14 sm:py-20 lg:py-28 ${index % 2 === 0 ? "bg-secondary/30" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${product.iconBg}`}
                >
                  <product.icon className={`h-6 w-6 ${product.iconColor}`} />
                </div>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
                  {product.name}
                </h2>
                <p className="mt-1 text-base font-medium text-accent">
                  {product.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link href={product.pageHref ?? `/products#${product.id}`}>
                      Explore {product.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Key Capabilities
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* GeM Products */}
      <section id="summarizer" className="bg-background py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 w-fit rounded-full border border-border bg-secondary px-4 py-1.5">
              <span className="text-xs font-medium text-foreground">
                Listed on Government e-Marketplace (GeM)
              </span>
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Business Intelligence & Data Analysis
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Intelligent solutions for meetings, communication, and
              analytics, helping enterprises transform data into action.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {gemProducts.map((product) => (
              <div
                key={product.name}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${product.iconBg}`}
                >
                  <product.icon className={`h-5 w-5 ${product.iconColor}`} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Explore <ArrowRight className="h-3 w-3" />
                  </Link>
                  <a
                    href={product.gemHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline"
                  >
                    View on GeM <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cv-auto bg-secondary/30 py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Talk to our team about deploying enterprise AI solutions in your
            organization.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
