import type { Metadata } from "next"
import { TeamContent } from "./content"

export const metadata: Metadata = {
  title: "Leadership Team: IIT Professors & AI Experts",
  description:
    "Meet the leadership team at Carnot Research: IIT Delhi professors, Army scientists, and AI engineers with 120+ years of combined experience building secure enterprise AI infrastructure for government and defense.",
  keywords: [
    "Carnot Research team",
    "Prof Brejesh Lall IIT Delhi",
    "Amit Oberoi AI expert",
    "enterprise AI leadership India",
    "IIT Delhi AI professors",
    "government AI experts India",
    "secure AI infrastructure team",
    "AI research leadership",
    "defense AI experts India",
  ],
  openGraph: {
    title: "Leadership Team: Carnot Research",
    description:
      "IIT professors, Army scientists, and AI engineers with 120+ years of combined experience building secure enterprise AI for government and defense.",
    url: "https://carnotresearch.com/about/team",
    type: "profile",
  },
  alternates: {
    canonical: "https://carnotresearch.com/about/team",
  },
}

const teamSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://carnotresearch.com/about/team#brejesh-lall",
      name: "Prof. Brejesh Lall",
      jobTitle: "Co-Founder and Chief Technology Officer",
      description:
        "Senior Professor at IIT Delhi specialising in Signal Processing and Intelligent Systems. Led 47+ funded projects with ₹70 Cr+ research funding.",
      affiliation: [
        {
          "@type": "Organization",
          name: "Carnot Research",
          url: "https://carnotresearch.com",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Delhi",
          url: "https://iitd.ac.in",
        },
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Delhi",
      },
      knowsAbout: [
        "Signal Processing",
        "Deep Learning",
        "Natural Language Processing",
        "Enterprise AI",
        "Multirate Signal Processing",
        "IoT Systems",
      ],
      url: "https://carnotresearch.com/about/team",
    },
    {
      "@type": "Person",
      "@id": "https://carnotresearch.com/about/team#amit-oberoi",
      name: "Col. (Dr.) Amit Oberoi",
      jobTitle: "Co-Founder and Chief Executive Officer",
      description:
        "Former Indian Army officer with 25+ years of leadership in cybersecurity, AI, and defense technology. Contributor to ITU Study Group 12 on AI standards for 5G networks.",
      affiliation: {
        "@type": "Organization",
        name: "Carnot Research",
        url: "https://carnotresearch.com",
      },
      knowsAbout: [
        "Natural Language Processing",
        "Cybersecurity",
        "AI Strategy",
        "Defense Technology",
        "5G AI",
        "Threat Intelligence",
      ],
      url: "https://carnotresearch.com/about/team",
    },
    {
      "@type": "Person",
      "@id": "https://carnotresearch.com/about/team#kanica-sachdev",
      name: "Dr. Kanica Sachdev",
      jobTitle: "Head R&D and Chief Operating Officer",
      description:
        "Deep-tech strategist driving AI, data, and cybersecurity innovation across government, defense, and digital transformation programs at Carnot Research.",
      affiliation: {
        "@type": "Organization",
        name: "Carnot Research",
        url: "https://carnotresearch.com",
      },
      url: "https://carnotresearch.com/about/team",
    },
  ],
}

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <TeamContent />
    </>
  )
}
