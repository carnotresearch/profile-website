import type { Metadata } from "next"
import { SaathiContent } from "./content"

export const metadata: Metadata = {
  title: "SAATHI | Delhi Public Transport AI Assistant | icarKno™",
  description:
    "SAATHI is an award-winning multilingual AI assistant for Delhi public transport. Plan metro and bus journeys, check fares, timings, and get emergency help by voice or text in English, Hindi, or any regional language.",
  keywords: [
    "SAATHI AI",
    "Delhi public transport assistant",
    "multilingual AI chatbot",
    "Delhi metro AI",
    "bus route planner AI",
    "icarKno™ SAATHI",
    "JICA BCG FITT award",
    "voice AI Hindi",
  ],
  openGraph: {
    title: "SAATHI – Delhi Public Transport AI Assistant",
    description:
      "Award-winning multilingual AI for Delhi commuters. Plan journeys, check fares and timings, and get emergency help by voice or text in any language.",
    url: "https://carnotresearch.com/products/saathi",
  },
  alternates: { canonical: "https://carnotresearch.com/products/saathi" },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SAATHI",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "PublicTransportAssistant",
  operatingSystem: "Web, Android, iOS",
  description:
    "Award-winning multilingual AI assistant for Delhi public transport. Plan metro and bus journeys, check fares and timings, and get emergency help by voice or text in 22+ languages including Hindi and Indic languages.",
  url: "https://carnotresearch.com/products/saathi",
  award: "JICA–BCG–FITT IIT Delhi Transport Stack Open Innovation Challenge Winner 2025",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://carnotresearch.com/products/saathi",
  },
  featureList: [
    "Journey planning via metro, bus & multi-modal routes",
    "Metro station info: accessibility, facilities and timings",
    "Bus and metro fares, cards, and schedule queries",
    "Voice messages: ask by speaking, receive audio responses",
    "22+ Indian and foreign language support",
    "Emergency helpline access and lost-and-found assistance",
  ],
  provider: {
    "@type": "Organization",
    name: "icarKno™",
    url: "https://carnotresearch.com",
    "@id": "https://carnotresearch.com/#organization",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: "https://bot.carnotresearch.com/",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carnotresearch.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://carnotresearch.com/products" },
    { "@type": "ListItem", position: 3, name: "SAATHI", item: "https://carnotresearch.com/products/saathi" },
  ],
}

export default function SaathiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SaathiContent />
    </>
  )
}
