import type { Metadata } from "next"
import { IDMSContent } from "./content"

export const metadata: Metadata = {
  title: "IDMS: Intelligent Data Management System | GeM | icarKno™",
  description:
    "AI-powered Intelligent Data Management System for business intelligence and data analysis. Transform enterprise data into actionable insights. On-premise capable. Listed on GeM by icarKno™.",
  openGraph: {
    title: "IDMS: Intelligent Data Management System | icarKno™",
    description:
      "AI-powered business intelligence and data analysis platform. Secure on-premise deployment. Listed on GeM.",
    url: "https://carnotresearch.com/products/gem/business-intelligence",
  },
  alternates: {
    canonical: "https://carnotresearch.com/products/gem/business-intelligence",
  },
}

export default function IDMSPage() {
  return <IDMSContent />
}
