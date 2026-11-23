"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

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

function useMobileNav() {
  const { tx } = useLanguage()
  const n = tx.nav
  return [
    {
      name: n.about,
      items: [
        { name: n.aboutOverview, href: "/about", sub: n.mobileAboutSub },
        { name: n.aboutMission, href: "/about/mission-vision", sub: n.mobileAboutMissionSub },
        { name: n.aboutTeam, href: "/about/team", sub: n.mobileAboutTeamSub },
        { name: n.aboutClients, href: "/about/clients-partners", sub: n.mobileAboutClientsSub },
        { name: n.research, href: "/company/resources", sub: n.mobileAboutResearchSub },
        { name: n.guides, href: "/company/guides", sub: n.mobileAboutGuidesSub },
      ],
    },
    {
      name: n.products,
      items: [
        { name: n.allProducts, href: "/products", sub: n.mobileAllProductsSub },
        { name: "icarKno™", href: "/products/icarkno", sub: n.icarknoSub },
        { name: "BharGati™ AI", href: "/products/bhargati", sub: n.bhargatiSub },
        { name: "SAATHI", href: "/products/saathi", sub: n.saathiSub },
        { name: n.requestDemo, href: "/contact", sub: n.requestDemoSub, excludeActive: true },
      ],
    },
    {
      name: n.solutions,
      items: [
        { name: n.solutionsHub, href: "/solutions", sub: n.mobileSolutionsHubSub },
        { name: n.enterpriseRAG, href: "/solutions/enterprise-rag", sub: n.mobileEnterpriseRAGSub },
        { name: n.onPremAI, href: "/solutions/on-prem-ai", sub: n.mobileOnPremAISub },
        { name: n.aiInSports, href: "/solutions/ai-in-sports", sub: n.mobileAiInSportsSub },
        { name: n.evaluation, href: "https://github.com/carnotresearch/on-premise-rag-evaluation-pipeline", sub: n.evaluationSub, external: true },
        { name: n.crSparse, href: "https://github.com/carnotresearch/cr-sparse", sub: n.crSparseSub, external: true },
        { name: n.crWavelets, href: "https://github.com/carnotresearch/cr-wavelets", sub: n.crWaveletsSub, external: true },
        { name: n.crNimble, href: "https://github.com/carnotresearch/cr-nimble", sub: n.crNimbleSub, external: true },
      ],
    },
    {
      name: n.resources,
      items: [
        { name: n.blog, href: "https://carnotresearch.medium.com/", sub: n.blogSub, external: true },
        { name: n.linkedin, href: "https://www.linkedin.com/company/carnot-research-pvt-ltd/posts/?feedView=all", sub: n.linkedinSub, external: true },
        { name: n.youtube, href: "https://www.youtube.com/@CarnotResearch", sub: n.youtubeSub, external: true },
        { name: n.twitter, href: "https://x.com/Carnot_Research", sub: n.twitterSub, external: true },
        { name: n.playground, href: "https://playground.carnotresearch.com/#/", sub: n.playgroundSub, external: true },
      ],
    },
  ]
}

type MobileNavItem = { name: string; href: string; sub: string; external?: boolean; excludeActive?: boolean }
type MobileNavGroup = { name: string; items: MobileNavItem[] }

function MobileAccordion({ item, onClose, pathname }: { item: MobileNavGroup; onClose: () => void; pathname: string }) {
  const isGroupActive = item.items.some(
    (sub) => !('external' in sub && sub.external) && !('excludeActive' in sub && sub.excludeActive) &&
      (sub.href === pathname || pathname.startsWith(sub.href + "/"))
  )
  const [open, setOpen] = useState(isGroupActive)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex min-h-[44px] w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium transition-colors ${
          isGroupActive
            ? "bg-teal-50 text-teal-700 hover:bg-teal-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <span className="flex items-center gap-2">
          {isGroupActive && (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
          )}
          {item.name}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${isGroupActive ? "text-teal-400" : "text-gray-400"}`}
        />
      </button>
      {open && (
        <div className="mt-1 ml-3 space-y-0.5 border-l border-gray-100 pl-3">
          {item.items?.map((sub) => {
            const isActive = !('external' in sub && sub.external) &&
              !('excludeActive' in sub && sub.excludeActive) &&
              (sub.href === pathname || pathname.startsWith(sub.href + "/"))
            return ('external' in sub && sub.external) ? (
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
                className={`block rounded-md px-2.5 py-2.5 min-h-[44px] transition-colors ${
                  isActive
                    ? "bg-teal-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className={`flex items-center gap-1.5 text-sm font-medium ${isActive ? "text-teal-700" : "text-gray-800"}`}>
                  {isActive && <span className="h-1 w-1 shrink-0 rounded-full bg-teal-500" />}
                  {sub.name}
                </span>
                {sub.sub && (
                  <span className={`mt-0.5 block text-xs ${isActive ? "text-teal-500/80" : "text-gray-500"}`}>
                    {sub.sub}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)
  const pathname = usePathname()
  const { lang, setLang, tx } = useLanguage()
  const n = tx.nav
  const mobileNav = useMobileNav()

  return (
    <header className="cv-navbar sticky top-0 z-50 w-full px-4 pt-3 pb-0">
      {/* Mobile-only Apple-style overrides: flatten the floating pill into a
          full-width solid top bar extending up through the safe-area zone.
          Header gets solid white bg + bottom border, inner nav strips its
          pill styling. Desktop keeps the floating glass pill. Detailed
          reasoning in CLAUDE-IOS.md in the playground repo. */}
      <style>{`
        .cv-navbar {
          padding-top: calc(0.75rem + var(--safe-top));
          padding-left: calc(1rem + var(--safe-left));
          padding-right: calc(1rem + var(--safe-right));
        }
        @media (max-width: 1023px) {
          .cv-navbar {
            background: #ffffff;
            border-bottom: 1px solid rgba(15, 23, 42, 0.06);
            padding-top: var(--safe-top);
            padding-bottom: 8px;
          }
          .cv-navbar-inner {
            max-width: 100% !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border-radius: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
      <nav className="cv-navbar-inner mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-gray-200/60 bg-white/70 backdrop-blur-md px-4 h-14 lg:h-12 shadow-sm lg:px-5">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${B}/assets/logo/carnot-logo.png`}
            alt="Carnot Research logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-gray-900">
            Carnot Research
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex flex-1 items-center justify-start pl-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  {n.about}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[580px]">
                    <div className="grid grid-cols-3 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>{n.aboutCompany}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about" className={dropLink}><span className={dropTitle}>{n.aboutOverview}</span><span className={dropSub}>{n.aboutOverviewSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/mission-vision" className={dropLink}><span className={dropTitle}>{n.aboutMission}</span><span className={dropSub}>{n.aboutMissionSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/about/team" className={dropLink}><span className={dropTitle}>{n.aboutTeam}</span><span className={dropSub}>{n.aboutTeamSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>{n.learn}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/company/resources" className={dropLink}><span className={dropTitle}>{n.research}</span><span className={dropSub}>{n.researchSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/company/guides" className={dropLink}><span className={dropTitle}>{n.guides}</span><span className={dropSub}>{n.guidesSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>{n.aboutEcosystem}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/about/clients-partners" className={dropLink}><span className={dropTitle}>{n.aboutClients}</span><span className={dropSub}>{n.aboutClientsSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/careers" className={dropLink}><span className={dropTitle}>{n.joinTeam}</span><span className={dropSub}>{n.joinTeamSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  {n.products}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[420px]">
                    <div className="grid grid-cols-2 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>{n.browse}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/products" className={dropLink}><span className={dropTitle}>{n.allProducts}</span><span className={dropSub}>{n.allProductsSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/icarkno" className={dropLink}><span className={dropTitle}>icarKno™</span><span className={dropSub}>{n.icarknoSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/bhargati" className={dropLink}><span className={dropTitle}>BharGati™ AI</span><span className={dropSub}>{n.bhargatiSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/products/saathi" className={dropLink}><span className={dropTitle}>SAATHI</span><span className={dropSub}>{n.saathiSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>{n.getStarted}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/contact" className={dropLink}><span className={dropTitle}>{n.requestDemo}</span><span className={dropSub}>{n.requestDemoSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  {n.solutions}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[520px]">
                    <div className="grid grid-cols-2 gap-6 px-5 py-5">
                      <div>
                        <p className={dropSection}>{n.enterpriseAI}</p>
                        <ul className="space-y-0.5">
                          <li><NavigationMenuLink asChild><Link href="/solutions" className={dropLink}><span className={dropTitle}>{n.solutionsHub}</span><span className={dropSub}>{n.solutionsHubSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/solutions/enterprise-rag" className={dropLink}><span className={dropTitle}>{n.enterpriseRAG}</span><span className={dropSub}>{n.enterpriseRAGSub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/solutions/on-prem-ai" className={dropLink}><span className={dropTitle}>{n.onPremAI}</span><span className={dropSub}>{n.onPremAISub}</span></Link></NavigationMenuLink></li>
                          <li><NavigationMenuLink asChild><Link href="/solutions/ai-in-sports" className={dropLink}><span className={dropTitle}>{n.aiInSports}</span><span className={dropSub}>{n.aiInSportsSub}</span></Link></NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <p className={dropSection}>{n.openSource}</p>
                        <ul className="space-y-0.5">
                          <li>
                            <a href="https://github.com/carnotresearch/on-premise-rag-evaluation-pipeline" target="_blank" rel="noopener noreferrer" className={dropLink}>
                              <span className={dropTitle}>{n.evaluation}</span>
                              <span className={dropSub}>{n.evaluationSub}</span>
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/carnotresearch/cr-sparse" target="_blank" rel="noopener noreferrer" className={dropLink}>
                              <span className={dropTitle}>{n.crSparse}</span>
                              <span className={dropSub}>{n.crSparseSub}</span>
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/carnotresearch/cr-wavelets" target="_blank" rel="noopener noreferrer" className={dropLink}>
                              <span className={dropTitle}>{n.crWavelets}</span>
                              <span className={dropSub}>{n.crWaveletsSub}</span>
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/carnotresearch/cr-nimble" target="_blank" rel="noopener noreferrer" className={dropLink}>
                              <span className={dropTitle}>{n.crNimble}</span>
                              <span className={dropSub}>{n.crNimbleSub}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-8 gap-1 rounded-md px-3 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 hover:text-gray-900 data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900 transition-colors">
                  {n.resources}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg md:w-[260px]">
                    <div className="px-5 py-5">
                      <ul className="space-y-0.5">
                        <li>
                          <a href="https://carnotresearch.medium.com/" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>{n.blog}</span>
                            <span className={dropSub}>{n.blogSub}</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/carnot-research-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>{n.linkedin}</span>
                            <span className={dropSub}>{n.linkedinSub}</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/@CarnotResearch" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>{n.youtube}</span>
                            <span className={dropSub}>{n.youtubeSub}</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/Carnot_Research" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>{n.twitter}</span>
                            <span className={dropSub}>{n.twitterSub}</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://playground.carnotresearch.com/#/" target="_blank" rel="noopener noreferrer" className={dropLink}>
                            <span className={dropTitle}>{n.playground}</span>
                            <span className={dropSub}>{n.playgroundSub}</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ── Right CTAs ── */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="px-2.5 py-1 text-xs font-semibold rounded-md border border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-700 transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "हि" : "EN"}
          </button>
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-50"
          >
            {n.contactUs}
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
          >
            {n.getStartedCta}
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
                <MobileAccordion key={item.name} item={item} onClose={close} pathname={pathname} />
              )
            )}

            {/* CTAs */}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-gray-200 px-3 text-sm font-semibold text-gray-600 hover:border-teal-400 hover:text-teal-700 transition-colors"
              >
                {lang === "en" ? "हिंदी में देखें" : "View in English"}
              </button>
              <Link
                href="/contact"
                onClick={close}
                className="flex min-h-[44px] items-center justify-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {n.contactUs}
              </Link>
              <Link
                href="/products"
                onClick={close}
                className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-md bg-gray-900 px-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                {n.getStartedCta}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
