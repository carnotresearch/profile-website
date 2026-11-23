import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Carnot Research",
  description: "Sitemap of all pages on Carnot Research website",
  robots: {
    index: false,
  },
}

const sitemapData = [
  {
    title: "Main",
    links: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "Solutions", href: "/solutions" },
      { name: "Research", href: "/research" },
      { name: "Company", href: "/company" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "icarKno™ - Knowledge RAG", href: "/products#icarkno" },
      { name: "BharGati™ AI - Transport Analytics", href: "/products#bhargati" },
      { name: "SAATHI - Travel Assistant", href: "/products#saathi" },
      { name: "Meeting Summarizer", href: "/products#summarizer" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "AI for Government", href: "/solutions#government" },
      { name: "Enterprise Knowledge AI", href: "/solutions#enterprise" },
      { name: "On-Premise LLM", href: "/solutions#on-premise" },
      { name: "Computer Vision", href: "/solutions#cv" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/company" },
      { name: "Founders", href: "/company#founders" },
      { name: "Awards & Recognition", href: "/company#awards" },
      { name: "Certifications", href: "/company#certifications" },
      { name: "Careers", href: "/company#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-foreground">Sitemap</h1>
        <p className="mb-12 text-muted-foreground">
          Navigate through all pages and resources on Carnot Research
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {sitemapData.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
