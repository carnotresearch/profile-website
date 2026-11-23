import type { Metadata } from "next"
import { MissionVisionContent } from "./content"

export const metadata: Metadata = {
  title: "Mission & Vision: Carnot Research",
  description:
    "Our mission is to enable responsible, domain-specific AI adoption across industries and governments, delivering AI that works on-ground, at-scale, and in-context.",
  openGraph: {
    title: "Mission & Vision: Carnot Research",
    description:
      "Why Carnot Research exists and where we're headed: building trustworthy AI infrastructure.",
    url: "https://carnotresearch.com/about/mission-vision",
    type: "website",
  },
  alternates: { canonical: "https://carnotresearch.com/about/mission-vision" },
}

export default function MissionVisionPage() {
  return <MissionVisionContent />
}
