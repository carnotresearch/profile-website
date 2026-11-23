import type { Metadata } from "next"
import { BharGatiContent } from "./content"

export const metadata: Metadata = {
  title: "BharGati™ | Movement & Performance Intelligence | Carnot Research",
  description:
    "AI-driven movement and performance intelligence using computer vision and biomechanical analytics. Lab-quality insights in real-world sports science and rehabilitation settings.",
  openGraph: {
    title: "BharGati™ - AI-Driven Movement and Performance Intelligence",
    description:
      "Analyze human movement, assess biomechanics, and provide performance feedback using computer vision and smart modeling.",
    url: "https://carnotresearch.com/products/bhargati",
  },
  alternates: { canonical: "https://carnotresearch.com/products/bhargati" },
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BharGati™ AI",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "SportsAnalytics",
  operatingSystem: "Linux, Windows, On-Premise",
  description:
    "AI-driven movement and performance intelligence platform using computer vision to analyse human biomechanics from standard video. No wearables or lab setup required.",
  url: "https://carnotresearch.com/products/bhargati",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://carnotresearch.com/products/bhargati",
  },
  featureList: [
    "Vision-based pose and gait analysis from standard cameras",
    "Biomechanical metrics: joint angles, posture, symmetry",
    "Real-time AI-driven performance feedback",
    "Sports performance analysis and injury prevention",
    "Session-to-session progress tracking",
    "No wearables or specialised sensors needed",
  ],
  provider: {
    "@type": "Organization",
    name: "Carnot Research",
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
    { "@type": "ListItem", position: 3, name: "BharGati™", item: "https://carnotresearch.com/products/bhargati" },
  ],
}

const faqs = [
  {
    q: "How can BharGati™ help me improve my performance?",
    a: "BharGati™ analyzes your movements in real time and gives instant feedback on your technique, helping you train smarter, correct mistakes faster, and improve performance more efficiently.",
  },
  {
    q: "What makes BharGati™ different from normal training apps?",
    a: "Unlike regular fitness apps, BharGati™ uses advanced computer vision to understand your body movement from video and provide accurate, AI-powered insights instead of generic workout suggestions.",
  },
  {
    q: "Do I need professional equipment to use BharGati™?",
    a: "No. BharGati™ works with standard video input and does not require wearable sensors or expensive hardware, making it easy to use anywhere.",
  },
  {
    q: "Can BharGati™ really track my body movement accurately?",
    a: "Yes. BharGati™ uses advanced pose estimation technology to track joints and body positions with high precision, allowing detailed analysis of posture, motion, and technique.",
  },
  {
    q: "Is BharGati™ only for professional athletes?",
    a: "Not at all. BharGati™ is designed for everyone from beginners and fitness enthusiasts to coaches and professional athletes who want deeper performance insights.",
  },
  {
    q: "How does BharGati™ help prevent injuries?",
    a: "By identifying incorrect posture, imbalance, or inefficient movement, BharGati™ helps you correct your form early, reducing the risk of strain and injury during training.",
  },
  {
    q: "Can I track my progress over time?",
    a: "Yes. BharGati™ stores your performance data and provides detailed analytics so you can see improvements, compare sessions, and stay motivated.",
  },
  {
    q: "How do I get started with BharGati™?",
    a: "You can sign up on the platform, upload your training video, and start receiving AI-powered motion analysis and performance feedback right away.",
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

export default function BharGatiPage() {
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
      <BharGatiContent />
    </>
  )
}
