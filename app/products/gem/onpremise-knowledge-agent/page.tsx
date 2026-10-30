import type { Metadata } from "next"
import { OnPremiseKnowledgeAgentContent } from "./content"

export const metadata: Metadata = {
  title: "On-Premise Knowledge Agent | GeM | icarKno™",
  description:
    "Enterprise AI Knowledge Management System for Banking, Financial Services & Government. 96.8% accuracy, 1.2s response time. Listed on GeM.",
  openGraph: {
    title: "On-Premise Knowledge Agent | Enterprise AI | icarKno™",
    description: "Secure on-premise AI knowledge management for banking, finance, and government. 96.8% accuracy. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/onpremise-knowledge-agent",
  },
  alternates: { canonical: "https://carnotresearch.com/products/gem/onpremise-knowledge-agent" },
}

export default function OnPremiseKnowledgeAgentPage() {
  return <OnPremiseKnowledgeAgentContent />
}
