"use client"

import Link from "next/link"
import { useState } from "react"

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

// Shared dropdown link style
const dropLink =
  "block rounded-md px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
const dropTitle = "font-medium"
const dropSub = "mt-0.5 block text-xs font-normal text-gray-400"
const dropSection = "text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2"

// Mobile nav structure
const mobileNav = [
  {
    name: "About",
    items: [
      { name: "Overview", href: "/about", sub: "Who we are" },
      { name: "Mission & Vision", href: "/about/mission-vision", sub: "Where we're headed" },
      { name: "Team", href: "/about/team", sub: "Researchers and engineers" },
      { name: "Clients & Partners", href: "/about/clients-partners", sub: "Who we collaborate with" },
    ],
  },
  {
    name: "Products",
    items: [
      { name: "All Products", href: "/products", sub: "Overview of icarKno™ AI platforms" },
      { name: "icarKno™", href: "/products/icarkno", sub: "Enterprise knowledge RAG" },
      { name: "BharGati™ AI", href: "/products/bhargati", sub: "Movement & performance" },
      { name: "SAATHI", href: "/products/saathi", sub: "Multilingual transport assistant" },
      { name: "Request a Demo", href: "/contact", sub: "Talk to us about deployments" },
    ],
  },
  {
    name: "Solutions",
    items: [
      { name: "Solutions Hub", href: "/solutions", sub: "Map AI to your business" },
      { name: "Enterprise RAG", href: "/solutions/enterprise-rag", sub: "Governed retrieval-augmented AI" },
      { name: "On-Prem AI", href: "/solutions/on-prem-ai", sub: "Secure, compliant deployments" },
      { name: "AI in Sports", href: "/solutions/ai-in-sports", sub: "Biomechanics & performance" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "Guides", href: "/company/guides", sub: "Step-by-step AI workflows" },
      { name: "Research", href: "/company/resources", sub: "Research & case studies" },
      { name: "Contact", href: "/contact", sub: "Get in touch with us" },
    ],
  },
  {
    name: "Open Source",
    items: [
      { name: "Evaluation", href: "https://github.com/carnotresearch/on-premise-rag-evaluation-pipeline", sub: "RAG evaluation framework", external: true },
      { name: "CR Sparse", href: "https://github.com/carnotresearch/cr-sparse", sub: "Sparse signal processing", external: true },
      { name: "CR Wavelets", href: "https://github.com/carnotresearch/cr-wavelets", sub: "Wavelet transforms library", external: true },
      { name: "CR Nimble", href: "https://github.com/carnotresearch/cr-nimble", sub: "Lightweight numerical tools", external: true },
    ],
  },
  {
    name: "Blog",
    items: [
      { name: "Blog", href: "https://carnotresearch.medium.com/", sub: "Carnot Research on Medium", external: true },
    ],
  },
  {
    name: "Playground",
    items: [
      { name: "Playground", href: "https://playground.carnotresearch.com/#/", sub: "Explore Carnot AI live", external: true },
    ],
  },
]

function MobileAccordion({ item, onClose }: { item: typeof mobileNav[0]; onClose: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex min-h-[44px] w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {item.name}
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-1 ml-3 space-y-0.5 border-l border-gray-100 pl-3">
          {item.items?.map((sub) => ('external' in sub && sub.external) ? (
            <a
              key={sub.name}
              href={sub.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block rounded-md px-2.5 py-2.5 min-h-[44px] transition-colors hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-800">{sub.name}</span>
              {sub.sub && <span className="mt-0.5 block text-xs text-gray-500">{sub.sub}</span>}
            </a>
          ) : (
            <Link
              key={sub.name}
              href={sub.href}
              onClick={onClose}
              className="block rounded-md px-2.5 py-2.5 min-h-[44px] transition-colors hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-800">{sub.name}</span>
              {sub.sub && <span className="mt-0.5 block text-xs text-gray-500">{sub.sub}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 pb-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-gray-200/60 bg-white/70 backdrop-blur-md px-4 h-14 lg:h-12 shadow-sm lg:px-5">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${B}/assets/logo/carnot-logo.png`}
            alt="icarKno™"
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-gray-900">
            icarKno™
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex flex-1 items-center justify-start pl-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Company</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about" className={dropLink}><span className={dropTitle}>Overview</span><span className={dropSub}>Who we are and what we do</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/mission-vision" className={dropLink}><span className={dropTitle}>Mission &amp; Vision</span><span className={dropSub}>Where we&apos;re headed</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/team" className={dropLink}><span className={dropTitle}>Team</span><span className={dropSub}>Researchers and engineers</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Ecosystem</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about/clients-partners" className={dropLink}><span className={dropTitle}>Clients &amp; Partners</span><span className={dropSub}>Who we collaborate with</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Work with us</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/careers" className={dropLink}><span className={dropTitle}>Join our team</span><span className={dropSub}>Explore open roles</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[420px]">
                    <div className="grid grid-cols-2 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Browse</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/products" className={dropLink}><span className={dropTitle}>All products</span><span className={dropSub}>Overview of icarKno™ AI platforms</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/icarkno" className={dropLink}><span className={dropTitle}>icarKno™</span><span className={dropSub}>Enterprise knowledge RAG</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/bhargati" className={dropLink}><span className={dropTitle}>BharGati™ AI</span><span className={dropSub}>Movement & performance</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/saathi" className={dropLink}><span className={dropTitle}>SAATHI</span><span className={dropSub}>Multilingual transport assistant</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Get started</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>Request a demo</span><span className={dropSub}>Talk to us about deployments</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Overview</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions" className={dropLink}><span className={dropTitle}>Solutions hub</span><span className={dropSub}>Map AI to your business</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Enterprise AI</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions/enterprise-rag" className={dropLink}><span className={dropTitle}>Enterprise RAG</span><span className={dropSub}>Governed retrieval-augmented AI</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/solutions/on-prem-ai" className={dropLink}><span className={dropTitle}>On-prem AI</span><span className={dropSub}>Secure, compliant deployments</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Applied AI</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions/ai-in-sports" className={dropLink}><span className={dropTitle}>AI in sports</span><span className={dropSub}>Biomechanics &amp; performance</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[320px]">
                    <div className="grid grid-cols-2 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>Learn</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/company/guides" className={dropLink}><span className={dropTitle}>Guides</span><span className={dropSub}>Step-by-step AI workflows</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/company/resources" className={dropLink}><span className={dropTitle}>Research</span><span className={dropSub}>Research &amp; case studies</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>Connect</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>Contact</span><span className={dropSub}>Get in touch with us</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>


              {/* Open Source */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  Open Source
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[260px]">
                    <div className="px-5 py-5">
                      <ul className="space-y-0.5">
                        <li>
                          <a href="https://github.com/carnotresearch/on-premise-rag-evaluation-pipeline" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>Evaluation</span>
                            <span className={dropSub}>RAG evaluation framework</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/carnotresearch/cr-sparse" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>CR Sparse</span>
                            <span className={dropSub}>Sparse signal processing</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/carnotresearch/cr-wavelets" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>CR Wavelets</span>
                            <span className={dropSub}>Wavelet transforms library</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/carnotresearch/cr-nimble" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>CR Nimble</span>
                            <span className={dropSub}>Lightweight numerical tools</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Direct links */}
          <div className="flex items-center gap-0.5 ml-1">
            <a
              href="https://carnotresearch.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-1 rounded-md px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              Blog
            </a>
            <a
              href="https://playground.carnotresearch.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 inline-flex items-center gap-1 rounded-md px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              Playground
            </a>
          </div>
        </div>

        {/* ── Right CTAs ── */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
          >
            Contact us
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            Get Started
            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white/15">
              <ArrowRight className="h-2.5 w-2.5" />
            </span>
          </Link>
        </div>

        {/* ── Mobile Menu Button ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 transition-colors lg:hidden -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="mx-auto mt-1 max-w-7xl rounded-xl border border-gray-200 bg-white shadow-sm lg:hidden">
          <div className="px-3 py-3 space-y-0.5">
            {mobileNav.map((item) =>
              item.items.length === 1 && 'external' in item.items[0] && item.items[0].external ? (
                <a
                  key={item.name}
                  href={item.items[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <MobileAccordion key={item.name} item={item} onClose={close} />
              )
            )}

            {/* CTAs */}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <Link
                href="/contact"
                onClick={close}
                className="flex min-h-[44px] items-center justify-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Contact us
              </Link>
              <Link
                href="/products"
                onClick={close}
                className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-md bg-gray-900 px-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
