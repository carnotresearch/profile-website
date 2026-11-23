import type { Metadata } from "next"
import { AiInSportsContent } from "./content"

export const metadata: Metadata = {
  title: "Applied AI in Sports Performance & Biomechanics | Carnot Research",
  description:
    "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries. AI systems for biomechanics modeling, video analysis, and predictive analytics.",
  openGraph: {
    title: "Applied AI in Sports Performance & Biomechanics",
    description:
      "Data-driven intelligence for improving performance, analyzing movement, and preventing injuries.",
    url: "https://carnotresearch.com/solutions/ai-in-sports",
  },
  alternates: { canonical: "https://carnotresearch.com/solutions/ai-in-sports" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carnotresearch.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://carnotresearch.com/solutions" },
    { "@type": "ListItem", position: 3, name: "AI in Sports", item: "https://carnotresearch.com/solutions/ai-in-sports" },
  ],
}

export default function AiInSportsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AiInSportsContent />
    </>
  )
}
