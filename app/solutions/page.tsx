import type { Metadata } from "next"
import { SolutionsContent } from "./content"

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | icarKno™",
  description:
    "Enterprise AI solutions for secure, scalable, real-world impact. From governed RAG and on-premise AI to applied AI systems, we turn complex data into reliable, actionable insights.",
  openGraph: {
    title: "Enterprise AI Solutions | icarKno™",
    description: "Governed RAG, on-premise AI, and applied AI systems for government, defense, and enterprise.",
    url: "https://carnotresearch.com/solutions",
  },
  alternates: { canonical: "https://carnotresearch.com/solutions" },
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
