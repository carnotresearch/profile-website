import type { Metadata } from "next"
import { ProductsContent } from "./content"

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

export default function ProductsPage() {
  return <ProductsContent />
}
