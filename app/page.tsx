import type { Metadata } from "next"
import { HeroSection }                    from "@/components/home/hero-section"
import { WeAreSection }                   from "@/components/home/we-are-section"
import { TheProblemSection }              from "@/components/home/the-problem-section"
import { IcarKnoShowcase, MoreProducts }  from "@/components/home/icarkno-showcase"
import { SolutionsSection }               from "@/components/home/solutions-section"
import { AboutSection }                   from "@/components/home/about-section"
import { TrustSection }                   from "@/components/home/trust-section"
import { StayConnectedSection }           from "@/components/home/stay-connected-section"

export const metadata: Metadata = {
  title: "icarKno™ | Knowledge AI built for India's toughest environments.",
  description:
    "icarKno™ builds secure, on-premise AI for India's government, defense, and enterprise — knowledge management, computer vision, sports analytics, and NLP. Founded at IIT Delhi. CMMI Level 3 certified.",
  keywords: [
    "on-premise AI India",
    "enterprise AI solutions",
    "government AI India",
    "secure NLP platform",
    "computer vision India",
    "IIT Delhi AI company",
    "icarKno™ knowledge AI",
    "BharGati™ sports AI",
    "SAATHI transit AI",
    "local LLM deployment",
    "air-gap AI deployment",
  ],
  openGraph: {
    title: "icarKno™ | Knowledge AI built for India's toughest environments.",
    description:
      "Secure AI that runs 100% on your own servers — knowledge management, computer vision, sports analytics, and NLP. Built at IIT Delhi.",
    url: "https://carnotresearch.com",
    type: "website",
    images: [{ url: "https://carnotresearch.com/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://carnotresearch.com" },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Who we are & first impression */}
      <HeroSection />

      {/* 2. We are icarKno™ */}
      <WeAreSection />

      {/* 3. The problem — why trusted AI is hard */}
      <TheProblemSection />

      {/* 4. icarKno™ — flagship product spotlight */}
      <IcarKnoShowcase />

      {/* 4. More from icarKno™ — BharGati & SAATHI */}
      <MoreProducts />

      {/* 6. All capabilities across 6 domains */}
      <SolutionsSection />

      {/* 7. Clients + certifications */}
      <TrustSection />

      {/* 8. Company story — IIT Delhi origins */}
      <AboutSection />

      {/* 9. Stay connected — social links */}
      <StayConnectedSection />

    </>
  )
}
