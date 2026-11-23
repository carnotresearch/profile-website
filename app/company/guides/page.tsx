import type { Metadata } from "next"
import { GuidesContent } from "./content"

export const metadata: Metadata = {
  title: "Guides | Carnot Research",
  description:
    "Practical guides from real AI development, research, and engineering workflows used at Carnot Research. Learn how to plan, build, and deploy AI systems effectively.",
  openGraph: {
    title: "AI Development Guides | Carnot Research",
    description: "Practical guides from real AI development and engineering workflows. Learn how to plan, build, and deploy AI systems.",
    url: "https://carnotresearch.com/company/guides",
  },
  alternates: { canonical: "https://carnotresearch.com/company/guides" },
}

export default function GuidesPage() {
  return <GuidesContent />
}
