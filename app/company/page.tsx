import type { Metadata } from "next"
import { CompanyContent } from "./content"

export const metadata: Metadata = {
  title: "Company | Carnot Research",
  description:
    "Learn about Carnot Research, a deep-tech AI company founded by IIT professors and scientists building trustworthy AI for government and enterprise.",
  openGraph: {
    title: "About Carnot Research | Enterprise AI Company",
    description: "Deep-tech AI company founded by IIT professors and scientists building trustworthy AI for government and enterprise.",
    url: "https://carnotresearch.com/company",
  },
  alternates: { canonical: "https://carnotresearch.com/company" },
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Carnot Research",
  url: "https://carnotresearch.com/company",
  description: "Learn about Carnot Research, a deep-tech AI company founded by IIT professors and scientists building trustworthy AI for government and enterprise.",
  about: {
    "@type": "Organization",
    "@id": "https://carnotresearch.com/#organization",
    name: "Carnot Research",
    legalName: "Carnot Research Private Limited",
    foundingDate: "2020",
    foundingLocation: "New Delhi, India",
  },
}

export default function CompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <CompanyContent />
    </>
  )
}
