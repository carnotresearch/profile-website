import type { Metadata } from "next"
import { ResearchContent } from "./content"

export const metadata: Metadata = {
  title: "Research | Carnot Research",
  description:
    "Explore Carnot Research's work in NLP, Computer Vision, and Generative AI. Publications, patents, and academic collaborations from IIT ecosystem researchers.",
  openGraph: {
    title: "AI Research | Carnot Research",
    description: "NLP, Computer Vision, and Generative AI research from IIT ecosystem researchers. Publications, patents, and academic collaborations.",
    url: "https://carnotresearch.com/research",
  },
  alternates: { canonical: "https://carnotresearch.com/research" },
}

export default function ResearchPage() {
  return <ResearchContent />
}
