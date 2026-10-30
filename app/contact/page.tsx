import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact | icarKno™",
  description:
    "Get in touch with icarKno™. Book an enterprise demo, discuss AI solutions, or explore partnership opportunities.",
  openGraph: {
    title: "Contact icarKno™ | Enterprise AI Solutions",
    description: "Get in touch with icarKno™. Book an enterprise demo, discuss AI solutions, or explore partnership opportunities.",
    url: "https://carnotresearch.com/contact",
  },
  alternates: { canonical: "https://carnotresearch.com/contact" },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact icarKno™",
  url: "https://carnotresearch.com/contact",
  description: "Get in touch with icarKno™. Book an enterprise demo, discuss AI solutions, or explore partnership opportunities.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://carnotresearch.com/#organization",
    name: "icarKno™",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "sales@carnotresearch.com",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "contact@carnotresearch.com",
        telephone: "+91-8449710411",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactContent />
    </>
  )
}
