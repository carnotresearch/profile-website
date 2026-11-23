import type { Metadata } from "next"
import { EnterpriseRAGContent } from "./content"

export const metadata: Metadata = {
  title: "Enterprise RAG Solutions | Carnot Research",
  description:
    "Enterprise Retrieval-Augmented Generation (RAG) systems that eliminate AI hallucinations, improve knowledge access, and ensure compliance-ready AI use in secure environments.",
  openGraph: {
    title: "Enterprise RAG Solutions | Carnot Research",
    description: "Enterprise RAG systems that eliminate AI hallucinations, improve knowledge access, and ensure compliance-ready AI use.",
    url: "https://carnotresearch.com/solutions/enterprise-rag",
  },
  alternates: { canonical: "https://carnotresearch.com/solutions/enterprise-rag" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carnotresearch.com" },
    { "@type": "ListItem", position: 2, name: "Solutions", item: "https://carnotresearch.com/solutions" },
    { "@type": "ListItem", position: 3, name: "Enterprise RAG", item: "https://carnotresearch.com/solutions/enterprise-rag" },
  ],
}

export default function EnterpriseRAGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EnterpriseRAGContent />
    </>
  )
}
