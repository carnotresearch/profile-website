import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "icarKno™ | Knowledge AI built for India's toughest environments.",
    template: "%s | icarKno™ - Knowledge AI Platform",
  },
  description:
    "icarKno™ delivers production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise. Secure, scalable AI infrastructure built by IIT researchers.",
  applicationName: "icarKno™",
  authors: [{ name: "icarKno™", url: "https://carnotresearch.com" }],
  creator: "icarKno™",
  publisher: "icarKno™",
  keywords: [
    "on-premise generative AI India",
    "enterprise AI solutions India",
    "government AI India",
    "NLP company India",
    "computer vision company India",
    "secure LLM deployment India",
    "enterprise RAG systems",
    "local language AI India",
    "Indian AI startup",
    "edge AI deployment",
    "private AI infrastructure",
    "government approved AI",
    "STQC certified AI",
    "ISO 27001 certified AI company",
  ],
  referrer: "strict-origin-when-cross-origin",
  category: "Technology",
  classification: "Business, Technology, AI/ML",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carnotresearch.com",
    siteName: "icarKno™",
    title: "icarKno™ | Knowledge AI built for India's toughest environments.",
    description:
      "Production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise in India.",
    images: [
      {
        url: "https://carnotresearch.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "icarKno™ - Enterprise AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "icarKno™ | Knowledge AI built for India's toughest environments.",
    description: "Secure, scalable AI infrastructure for government and enterprise.",
    creator: "@CarnotResearch",
    images: ["https://carnotresearch.com/og-image.png"],
  },
  alternates: {
    canonical: "https://carnotresearch.com",
    languages: {
      "en-IN": "https://carnotresearch.com",
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://carnotresearch.com/#organization",
  name: "icarKno™",
  legalName: "Carnot Research Private Limited",
  url: "https://carnotresearch.com",
  logo: {
    "@type": "ImageObject",
    url: "https://carnotresearch.com/assets/logo/carnot-logo.png",
    width: 200,
    height: 200,
  },
  description:
    "Production-grade on-premise generative AI, NLP, and computer vision solutions for government and enterprise in India. Founded by IIT Delhi researchers.",
  foundingDate: "2020",
  foundingLocation: "New Delhi, India",
  areaServed: ["IN", "Asia"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2-A-2B, Research and Innovation Park",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110016",
    addressCountry: "IN",
  },
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
      email: "info@carnotresearch.com",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/carnot-research",
    "https://twitter.com/CarnotResearch",
    "https://github.com/carnotresearch",
    "https://carnotresearch.medium.com/",
  ],
  knowsAbout: [
    "Generative AI",
    "Natural Language Processing",
    "Computer Vision",
    "Enterprise AI",
    "On-Premise Deployment",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Agentic AI",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "CMMI Level 3" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "ISO/IEC 27001:2022" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "DPIIT Recognized Startup" },
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "icarKno™",
  url: "https://carnotresearch.com",
  description: "Enterprise AI solutions for government and enterprise — secure, on-premise, built by IIT researchers.",
  publisher: { "@type": "Organization", name: "icarKno™", "@id": "https://carnotresearch.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://carnotresearch.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo/carnot-logo.png`}
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/logo/carnot-logo.png`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
