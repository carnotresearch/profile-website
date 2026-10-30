import type { Metadata } from "next"
import { IcarKnoContent } from "./content"

export const metadata: Metadata = {
  title: "icarKno™ | Secure Offline Mission-Ready AI | icarKno™",
  description:
    "A fully on-premise, multimodal AI knowledge system engineered for high-stakes environments. Secure, offline, mission-ready AI for government, defense, and enterprise.",
  keywords: [
    "icarKno",
    "on-premise AI",
    "offline AI",
    "mission-ready AI",
    "enterprise knowledge AI",
    "air-gapped AI",
    "government AI",
    "defense AI",
  ],
  openGraph: {
    title: "icarKno™ - Secure. Offline. Mission-Ready AI",
    description: "Transform any operational setup into an intelligent, self-contained knowledge engine.",
    url: "https://carnotresearch.com/products/icarkno",
  },
  alternates: { canonical: "https://carnotresearch.com/products/icarkno" },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "icarKno™",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "EnterpriseAI",
  operatingSystem: "Linux, Windows, On-Premise",
  description:
    "A fully on-premise, multimodal AI knowledge system for government, defense, and enterprise. Supports RAG with verifiable citations, agentic workflows, and VLM integration. Air-gap capable with zero cloud dependency.",
  url: "https://carnotresearch.com/products/icarkno",
  screenshot: "https://carnotresearch.com/assets/products/homepage/homepage_icarKno.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://carnotresearch.com/products/icarkno",
  },
  featureList: [
    "100% on-premise deployment",
    "Multimodal data ingestion (PDF, video, audio, scanned docs)",
    "RAG with verifiable source citations",
    "Agentic AI workflows",
    "Air-gap capable, zero cloud dependency",
    "VLM integration for visual reasoning",
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
    url: "https://carnotresearch.com/contact",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carnotresearch.com" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://carnotresearch.com/products" },
    { "@type": "ListItem", position: 3, name: "icarKno™", item: "https://carnotresearch.com/products/icarkno" },
  ],
}

const faqs = [
  {
    q: "What is icarKno™ and what problem does it solve?",
    a: "icarKno™ is an intelligent knowledge management system that helps organizations make better use of their existing data. Instead of manually searching through files, reports, or repositories, users can quickly find the information they need through a secure, AI-powered search and chat interface.",
  },
  {
    q: "How does icarKno™ convert organizational data into a searchable knowledge base?",
    a: "icarKno™ allows you to upload documents or connect existing storage sources, after which the system processes the content and organizes it into a structured knowledge base. Once indexed, the information can be searched using simple questions, making it much easier to access important data.",
  },
  {
    q: "What security features does icarKno™ provide for sensitive data?",
    a: "Security is a core part of icarKno™. Your data stays private and is not shared outside your environment. For organizations that require full control, the system can be deployed on-premise so all processing happens within your own infrastructure.",
  },
  {
    q: "Does icarKno™ support on-premise deployment for enterprise environments?",
    a: "Yes, icarKno™ can be deployed on-premise, which means it runs entirely on your organization's servers. This is especially useful for enterprises, research institutions, and government organizations that need high levels of privacy and control.",
  },
  {
    q: "Which document formats and data sources are supported by icarKno™?",
    a: "icarKno™ works with common document formats such as PDFs, text files, reports, and manuals. It can also connect to internal storage, network drives, or cloud services, allowing you to build a knowledge base from your existing data without changing your workflow.",
  },
  {
    q: "How does natural language querying work in icarKno™?",
    a: "Instead of using complex search filters, you can simply ask questions in normal language. icarKno™ understands the query, looks through the stored knowledge, and returns the most relevant information in a clear and accurate way.",
  },
  {
    q: "Does icarKno™ support multilingual interaction and voice-based access?",
    a: "Yes, icarKno™ supports multiple languages, so users can ask questions in one language and receive answers in another. It also includes voice support, allowing hands-free interaction when needed.",
  },
  {
    q: "Is it possible to evaluate icarKno™ through a demo before full deployment?",
    a: "Yes, you can try icarKno™ through a demo by uploading your own documents and creating a knowledge container. This allows you to see how the system works before deciding on a full deployment for your organization.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
}

export default function IcarKnoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IcarKnoContent />
    </>
  )
}
