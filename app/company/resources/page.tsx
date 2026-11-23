import type { Metadata } from "next"
import { ResourcesContent } from "./content"

export const metadata: Metadata = {
  title: "Research | Carnot Research",
  description:
    "Research articles from Carnot Research covering pose detection, real-time computer vision, edge AI deployment, biomechanics analysis, and challenges in production AI systems.",
  keywords: [
    "AI research",
    "pose detection",
    "computer vision",
    "edge AI",
    "deep learning",
    "biomechanics analysis",
    "motion tracking",
    "on-premise AI",
  ],
  openGraph: {
    title: "Research Articles | Carnot Research",
    description: "Applied AI research from Carnot Research: pose detection, real-time vision systems, edge deployment, and production challenges.",
    url: "https://carnotresearch.com/company/resources",
    type: "website",
  },
  alternates: { canonical: "https://carnotresearch.com/company/resources" },
}

export default function ResourcesPage() {
  return <ResourcesContent />
}
