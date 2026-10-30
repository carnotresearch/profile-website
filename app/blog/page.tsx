import type { Metadata } from "next"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "Blog | icarKno™",
  description:
    "Insights, research updates, and thought leadership from icarKno™ on enterprise AI, NLP, computer vision, and on-premise generative AI.",
  openGraph: {
    title: "Blog | icarKno™",
    description: "Insights, research updates, and thought leadership on enterprise AI, NLP, and computer vision.",
    url: "https://carnotresearch.com/blog",
  },
  alternates: { canonical: "https://carnotresearch.com/blog" },
}

export default function BlogPage() {
  return <BlogContent />
}
